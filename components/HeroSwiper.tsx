"use client";

import Image from "next/image";
import Link from "next/link";
import { catalogAssets } from "@/data/catalog";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    eyebrow: "GANDOM CRAFTED",
    title: "ویترین حرفه‌ای کارهای ساخته",
    description: "کاتالوگ تصویری انگشتر، گردنبند، گوشواره، دستبند و آویز با ارائه‌ای لوکس و قابل توسعه برای موجودی واقعی.",
    image: catalogAssets.crafted,
    href: "/catalog/crafted-gold",
    cta: "مشاهده ویترین",
  },
  {
    eyebrow: "GANDOM GOLD",
    title: "آبشده، طلای خام و معاملات حرفه‌ای",
    description: "ساختار آماده برای نمایش وزن، عیار، انگ، قیمت لحظه‌ای و دریافت Quote برای مشتری و همکار بازار.",
    image: catalogAssets.melted,
    href: "/catalog/melted-gold",
    cta: "کاتالوگ آبشده",
  },
  {
    eyebrow: "GANDOM SILVER",
    title: "شمش و ساچمه نقره در وزن‌های متنوع",
    description: "از شمش‌های سرمایه‌ای تا ساچمه‌های کارگاهی با دسته‌بندی شفاف، گالری تصویری و مسیر سفارش حرفه‌ای.",
    image: catalogAssets.silverBars,
    href: "/catalog/silver-bars",
    cta: "مشاهده نقره",
  },
];

export default function HeroSwiper() {
  return (
    <Swiper modules={[Autoplay, EffectFade, Navigation, Pagination]} effect="fade" loop autoplay={{ delay: 5200, disableOnInteraction: false }} navigation pagination={{ clickable: true }} className="hero-swiper">
      {slides.map((slide) => (
        <SwiperSlide key={slide.title}>
          <article className="hero-slide">
            <div className="hero-slide-image"><Image src={slide.image} alt={slide.title} fill priority sizes="(max-width: 900px) 100vw, 56vw" /></div>
            <div className="hero-slide-copy"><span className="eyebrow-pill">{slide.eyebrow}</span><h1>{slide.title}</h1><p>{slide.description}</p><div className="hero-slide-actions"><Link href={slide.href} className="button button-primary">{slide.cta}</Link><Link href="/register" className="button button-ghost">عضویت / استعلام</Link></div><div className="hero-assurance"><span>شفافیت قیمت</span><span>کاتالوگ تخصصی</span><span>مناسب مشتری و همکار</span></div></div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
