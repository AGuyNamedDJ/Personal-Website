import AlbumPage from "@/components/editorial/AlbumPage";
import { collections } from "@/lib/collections";
const collection = collections.find((c) => c.slug === "9-1-2023");
export const metadata = {
  title: collection.name,
  description: collection.description,
  alternates: {
    canonical: "https://dalronjrobertson.com/creative-studio/9-1-2023",
  },
};
export const revalidate = 3600;
export default function Page() {
  return <AlbumPage slug="9-1-2023" />;
}
