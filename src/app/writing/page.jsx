// src/app/writing/page.jsx
import ClientWritingPage from "./ClientWritingPage";

export const metadata = {
  title: "Writing",
  description:
    "Books, research papers, and original writing by Dalron J. Robertson.",
  alternates: {
    canonical: "https://dalronjrobertson.com/writing",
  },
};

export default function WritingPage() {
  return <ClientWritingPage />;
}
