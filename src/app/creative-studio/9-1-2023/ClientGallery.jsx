"use client";

import PhotoGallery from "@/components/PhotoGallery";

export default function ClientGallery({ images }) {
  return (
    <PhotoGallery
      images={images.map((image) => ({
        preview: image.opt,
        full: image.full,
      }))}
    />
  );
}
