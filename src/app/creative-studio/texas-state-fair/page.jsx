import AlbumPage from "@/components/editorial/AlbumPage";
import { collections } from "@/lib/collections";
const collection = collections.find((c) => c.slug === "texas-state-fair");
export const metadata = {
  title: collection.name,
  description: collection.description,
  alternates: {
    canonical: "https://dalronjrobertson.com/creative-studio/texas-state-fair",
  },
};
export const revalidate = 3600;
export default function Page() {
  return <AlbumPage slug="texas-state-fair" />;
}
