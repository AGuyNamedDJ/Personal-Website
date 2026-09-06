import AlbumPage from "@/components/editorial/AlbumPage";
import { collections } from "@/lib/collections";
const collection = collections.find((c) => c.slug === "chicago-marathon-23");
export const metadata = {
  title: collection.name,
  description: collection.description,
  alternates: {
    canonical:
      "https://dalronjrobertson.com/creative-studio/chicago-marathon-23",
  },
};
export const revalidate = 3600;
export default function Page() {
  return <AlbumPage slug="chicago-marathon-23" />;
}
