import Link from "next/link";
export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="eyebrow">404 / A small detour</p>
      <h1>
        Somewhere
        <br />
        else, perhaps.
      </h1>
      <p>This page isn’t here. There’s plenty more to explore.</p>
      <Link className="text-link" href="/">
        Back to the beginning ↗
      </Link>
    </main>
  );
}
