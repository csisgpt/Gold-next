"use client";

import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SafeImage from "./SafeImage";

type Item = { name: string; meta: string; image: string; badge?: string };

export default function CatalogSwiper({ items, href, inquiryHref = "/register?intent=quote" }: { items: Item[]; href: string; inquiryHref?: string }) {
  return (
    <div className="catalog-swiper-shell">
      <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={18} slidesPerView={1.14} breakpoints={{640:{slidesPerView:2.15},900:{slidesPerView:3.15},1180:{slidesPerView:4.1}}} className="catalog-swiper">
        {items.map((item, index) => (
          <SwiperSlide key={`${item.name}-${index}`}>
            <article className="product-card">
              <div className="product-card-image"><SafeImage src={item.image} alt={item.name} className="catalog-fill-image" />{item.badge ? <span className="product-badge">{item.badge}</span> : null}</div>
              <div className="product-card-copy"><h3>{item.name}</h3><p>{item.meta}</p><div className="product-card-actions"><Link href={href}>کاتالوگ</Link><Link href={inquiryHref}>استعلام این مورد</Link></div></div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
