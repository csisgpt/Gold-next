"use client";

import { useMemo, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
};

function toLocalAsset(src: string) {
  const filename = src.split("/").pop() || "";

  if (["showcase-jewelry.webp", "trust-ring.webp"].includes(filename)) {
    return "/gandom/hero-gold.svg";
  }

  if (["gandom-sculpture.webp", "iran-shipping.webp"].includes(filename)) {
    return "/gandom/hero-investment.svg";
  }

  if (filename === "gandom-qr.png") {
    return "/gandom/fallback.svg";
  }

  if (src.includes("raw.githubusercontent.com") && src.includes("/public/gandom/")) {
    return `/gandom/${filename}`;
  }

  return src;
}

export default function SafeImage({ src, alt, className, loading = "lazy" }: Props) {
  const normalizedSrc = useMemo(() => toLocalAsset(src), [src]);
  const [currentSrc, setCurrentSrc] = useState(normalizedSrc);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => setCurrentSrc("/gandom/fallback.svg")}
    />
  );
}
