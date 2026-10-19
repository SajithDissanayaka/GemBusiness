"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryImage = {
  id: number;
  imageUrl: string;
  altText?: string;
};

type GemGalleryProps = {
  gemName: string;
  images: GalleryImage[];
};

export default function GemGallery({
  gemName,
  images,
}: GemGalleryProps) {
  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | undefined>(
      images[0]
    );

  // No images available
  if (!selectedImage) {
    return (
      <div className="flex min-h-[500px] items-center justify-center rounded-2xl bg-secondary">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Gemstone Image
          </p>

          <p className="mt-2 text-2xl font-semibold text-foreground">
            {gemName}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Main Selected Image */}
      <div className="relative h-[500px] overflow-hidden rounded-2xl bg-secondary">
        <Image
            src={selectedImage.imageUrl}
            alt={selectedImage.altText || gemName}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            />
      </div>

      {/* Thumbnail Images */}
      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {images.map((image) => {
            const isSelected =
              image.id === selectedImage.id;

            return (
              <button
                key={image.id}
                type="button"
                onClick={() =>
                  setSelectedImage(image)
                }
                className={`shrink-0 overflow-hidden rounded-xl border-2 transition ${
                  isSelected
                    ? "border-primary"
                    : "border-transparent hover:border-border"
                }`}
                aria-label={`View ${
                  image.altText || gemName
                }`}
              >
                <Image
                    src={image.imageUrl}
                    alt={image.altText || gemName}
                    width={80}
                    height={80}
                    className="h-20 w-20 object-cover"
                    />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}