import AlbumPage from "@/components/editorial/AlbumPage";
import { collections } from "@/lib/collections";
const collection = collections.find((c) => c.slug === "apple-day-23");
export const metadata = {
  title: collection.name,
  description: collection.description,
  alternates: {
    canonical: "https://dalronjrobertson.com/creative-studio/apple-day-23",
  },
};
export const revalidate = 3600;
export default function Page() {
  return <AlbumPage slug="apple-day-23" />;
}
