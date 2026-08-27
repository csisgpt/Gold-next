"use client";

import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Item = { name: string; meta: string; image: string; badge?: string };

export default function CatalogSwiper({ items, href }: { items: Item[]; href: string }) {
  return (
    <div className="catalog-swiper-shell">
      <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={18} slidesPerView={1.2} breakpoints={{ 640: { slidesPerView: 2.2 }, 900: { slidesPerView: 3.2 }, 1180: { slidesPerView: 4.15 } }} className="catalog-swiper">
        {items.map((item, index) => (
          <SwiperSlide key={`${item.name}-${index}`}>
            <article className="product-card">
              <div className="product-card-image">
                <Image src={item.image} alt={item.name} fill sizes="320px" />
                {item.badge ? <span className="product-badge">{item.badge}</span> : null}
                <span className="catalog-sample">نمونه کاتالوگی</span>
              </div>
              <div className="product-card-copy"><h3>{item.name}</h3><p>{item.meta}</p><Link href={href}>مشاهده جزئیات</Link></div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
