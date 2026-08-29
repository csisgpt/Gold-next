"use client";

import { useMemo, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
};

function toLocalAsset(src: string) {
  const marker = "/public/gandom/";
  if (src.includes("raw.githubusercontent.com") && src.includes(marker)) {
    const filename = src.split(marker).pop();
    return filename ? `/gandom/${filename}` : "/gandom/fallback.svg";
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
