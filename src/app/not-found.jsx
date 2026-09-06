import Link from "next/link";
export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="eyebrow">404</p>
      <h1>
        Page not
        <br />
        found.
      </h1>
      <p>This address does not match a page on the site.</p>
      <Link className="text-link" href="/">
        Back to home ↗
      </Link>
    </main>
  );
}
