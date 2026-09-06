import AlbumPage from "@/components/editorial/AlbumPage";
import { collections } from "@/lib/collections";
const collection = collections.find((c) => c.slug === "gatlinburg-25");
export const metadata = {
  title: collection.name,
  description: collection.description,
  alternates: {
    canonical: "https://dalronjrobertson.com/creative-studio/gatlinburg-25",
  },
};
export const revalidate = 3600;
export default function Page() {
  return <AlbumPage slug="gatlinburg-25" />;
}
