"use client";

import PhotoGallery from "@/components/PhotoGallery";

export default function ClientGallery({ files, bucket, region }) {
  const images = files.map((file) => {
    const source = `https://${bucket}.s3.${region}.amazonaws.com/${file}`;
    return {
      preview: source,
      full: source,
      hasHighResolution: true,
      alt: "Texas State Fair",
    };
  });

  return <PhotoGallery images={images} />;
}
