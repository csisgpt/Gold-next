import Image from "next/image";
import { catalogAssets } from "@/data/catalog";

const images = [
  { src: catalogAssets.craftedAlt, title: "ویترین ساخته", className: "gallery-large" },
  { src: catalogAssets.melted, title: "آبشده و طلای خام", className: "gallery-small" },
  { src: catalogAssets.silverBars, title: "شمش نقره", className: "gallery-small" },
  { src: catalogAssets.silverShot, title: "ساچمه نقره", className: "gallery-wide" },
];

export default function GalleryMosaic() {
  return <div className="gallery-mosaic">{images.map((item) => <figure key={item.title} className={item.className}><Image src={item.src} alt={item.title} fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>{item.title}</figcaption></figure>)}</div>;
}
