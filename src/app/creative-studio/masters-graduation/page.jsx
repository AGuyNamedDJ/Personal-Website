import AlbumPage from "@/components/editorial/AlbumPage";
import { collections } from "@/lib/collections";
const collection = collections.find((c) => c.slug === "masters-graduation");
export const metadata = {
  title: collection.name,
  description: collection.description,
  alternates: {
    canonical:
      "https://dalronjrobertson.com/creative-studio/masters-graduation",
  },
};
export const revalidate = 3600;
export default function Page() {
  return <AlbumPage slug="masters-graduation" />;
}
