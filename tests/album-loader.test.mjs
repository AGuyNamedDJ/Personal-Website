import test from "node:test";
import assert from "node:assert/strict";
import { loadAlbum } from "../src/lib/album-loader.js";
import { collections } from "../src/lib/collections.js";
const xml = (keys, next = "") =>
  `<ListBucketResult>${keys.map((k) => `<Contents><Key>${k}</Key></Contents>`).join("")}${next ? `<NextContinuationToken>${next}</NextContinuationToken>` : ""}</ListBucketResult>`;
const response = (content) => ({ ok: true, text: async () => content });

test("all six paired collection schemas accept their real filename formats", async (t) => {
  const cases = {
    "9-1-2023": ["Sep1O-9.jpeg", "Sep1-9.jpeg"],
    "masters-graduation": ["GRADO-6793.jpeg", "GRAD-6793.jpeg"],
    "gatlinburg-25": ["GATO-6612.jpeg", "GAT-6612.jpeg"],
    "apple-day-23": ["ADO-83.jpeg", "AD-83.jpeg"],
    "chicago-marathon-23": ["CMO-40.png"],
    "bachelors-graduation": ["GRAD-JSU-O-748.jpeg", "GRAD-JSU-748.jpeg"],
  };
  for (const [slug, keys] of Object.entries(cases)) {
    t.mock.method(globalThis, "fetch", async () => response(xml(keys)));
    const images = await loadAlbum(collections.find((c) => c.slug === slug));
    assert.equal(images.length, 1, slug);
    assert.ok(images[0].preview.endsWith(keys[0]), slug);
    assert.equal(
      images[0].full,
      keys[1] ? `https://${slug}.s3.us-east-2.amazonaws.com/${keys[1]}` : null,
    );
    t.mock.restoreAll();
  }
});

test("pagination retains every photo, decodes tokens, pairs versions, and sorts numerically", async (t) => {
  const urls = [];
  t.mock.method(globalThis, "fetch", async (url) => {
    urls.push(new URL(url));
    return response(
      urls.length === 1
        ? xml(["Sep1O-12.jpeg", "Sep1-12.jpeg", "Sep1O-2.jpeg"], "a&amp;b")
        : xml(["Sep1-2.jpeg", "Sep1-8.jpeg", "ignore.txt"]),
    );
  });
  const images = await loadAlbum(collections[0]);
  assert.equal(urls[1].searchParams.get("continuation-token"), "a&b");
  assert.deepEqual(
    images.map((i) => i.preview.split("/").at(-1)),
    ["Sep1O-2.jpeg", "Sep1-8.jpeg", "Sep1O-12.jpeg"],
  );
  assert.ok(images[0].full.endsWith("Sep1-2.jpeg"));
});

test("unpaired collections keep valid formats and safely encode filenames", async (t) => {
  t.mock.method(globalThis, "fetch", async () =>
    response(
      xml(["folder/A &amp; B.jpg", "E10-E.jpg", "E2-E.jpg", "notes.txt"]),
    ),
  );
  const images = await loadAlbum(collections[2]);
  assert.equal(images.length, 3);
  assert.ok(images[0].preview.endsWith("E2-E.jpg"));
  assert.ok(images[2].preview.endsWith("folder/A%20%26%20B.jpg"));
});

test("listing failures yield an honest empty state", async (t) => {
  t.mock.method(console, "warn", () => {});
  t.mock.method(globalThis, "fetch", async () => ({ ok: false, status: 403 }));
  assert.deepEqual(await loadAlbum(collections[0]), []);
});

test("repeated pagination tokens cannot produce an infinite request loop", async (t) => {
  t.mock.method(console, "warn", () => {});
  const fetch = t.mock.method(globalThis, "fetch", async () =>
    response(xml(["Sep1O-1.jpeg"], "repeat")),
  );
  assert.deepEqual(await loadAlbum(collections[0]), []);
  assert.equal(fetch.mock.callCount(), 2);
});
