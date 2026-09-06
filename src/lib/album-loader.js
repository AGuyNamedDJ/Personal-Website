const decodeXML = (text) =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
export async function loadAlbum(collection) {
  const region = process.env.NEXT_PUBLIC_AWS_REGION || "us-east-2";
  const bucket = process.env[collection.env] || collection.bucket;
  const base = `https://${bucket}.s3.${region}.amazonaws.com`;
  const keys = [];
  let token;
  const seen = new Set();
  try {
    do {
      const url = new URL(base);
      url.searchParams.set("list-type", "2");
      if (token) url.searchParams.set("continuation-token", token);
      const response = await fetch(url, {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(12000),
      });
      if (!response.ok)
        throw new Error(`Album listing returned ${response.status}`);
      const xml = await response.text();
      keys.push(
        ...[...xml.matchAll(/<Key>([^<]+)<\/Key>/g)].map((m) =>
          decodeXML(m[1]),
        ),
      );
      const next = xml.match(
        /<NextContinuationToken>([^<]+)<\/NextContinuationToken>/,
      )?.[1];
      token = next ? decodeXML(next) : undefined;
      if (token && seen.has(token))
        throw new Error("Repeated album page token");
      if (token) seen.add(token);
    } while (token);
  } catch (error) {
    console.warn(
      `Unable to load photo collection ${collection.slug}: ${error.message}`,
    );
    return [];
  }
  const imageURL = (key) =>
    `${base}/${key.split("/").map(encodeURIComponent).join("/")}`;
  if (!collection.pattern)
    return keys
      .filter((k) => /\.(jpe?g|png|webp|avif)$/i.test(k))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((k) => ({
        preview: imageURL(k),
        full: imageURL(k),
        alt: collection.name,
      }));
  const pairs = new Map(),
    pattern = new RegExp(collection.pattern, "i");
  for (const key of keys) {
    const match = key.match(pattern);
    if (!match) continue;
    const [, optimized, id] = match;
    if (!pairs.has(id)) pairs.set(id, {});
    pairs.get(id)[optimized ? "preview" : "full"] = key;
  }
  return [...pairs.entries()]
    .sort(([a], [b]) => Number(a) - Number(b))
    .filter(([, v]) => v.preview || v.full)
    .map(([, v]) => ({
      preview: imageURL(v.preview || v.full),
      full: v.full ? imageURL(v.full) : null,
      alt: collection.name,
    }));
}
