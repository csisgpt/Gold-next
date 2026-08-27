"use client";

import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SafeImage from "./SafeImage";
import styles from "./HomePageV5.module.css";

type Item = { name: string; meta: string; image: string; badge?: string };

export default function CatalogSwiperV5({ items, href, inquiryHref = "/register?intent=quote" }: { items: Item[]; href: string; inquiryHref?: string }) {
  return (
    <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={16} slidesPerView={1.14} breakpoints={{ 560: { slidesPerView: 2.1 }, 860: { slidesPerView: 3.1 }, 1180: { slidesPerView: 4.15 } }} className={styles.productSwiper}>
      {items.map((item, index) => (
        <SwiperSlide key={`${item.name}-${index}`}>
          <article className={styles.productCard}>
            <Link href={href} className={styles.productImage} aria-label={`مشاهده ${item.name}`}>
              <SafeImage src={item.image} alt={item.name} className={styles.fillImage} />
              {item.badge ? <span className={styles.productBadge}>{item.badge}</span> : null}
            </Link>
            <div className={styles.productBody}>
              <div><h3>{item.name}</h3><p>{item.meta}</p></div>
              <div className={styles.productActions}><Link href={href}>مشاهده کاتالوگ</Link><Link href={inquiryHref}>استعلام این مورد</Link></div>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
