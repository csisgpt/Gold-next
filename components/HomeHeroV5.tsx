"use client";

import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SafeImage from "./SafeImage";
import styles from "./HomePageV5.module.css";

const slides = [
  {
    kind: "medallion",
    image: "/gandom/hero-gold.svg",
    eyebrow: "گندم؛ بازار هوشمند طلا و نقره",
    title: <>خرید طلا و نقره،<br /><span>شفاف‌تر و مطمئن‌تر</span></>,
    text: "محصول را ببینید، مسیر مناسب خودتان را انتخاب کنید و فقط وقتی لازم شد برای قیمت، موجودی یا خرید اقدام کنید.",
    primary: "مشاهده کاتالوگ",
    primaryHref: "#catalogs",
    secondary: "استعلام قیمت",
    secondaryHref: "#market",
  },
  {
    kind: "technical",
    image: "/gandom/hero-investment.svg",
    eyebrow: "برای سرمایه‌گذاری و همکار بازار",
    title: <>آبشده، شمش و ساچمه،<br /><span>با مسیر تخصصی‌تر</span></>,
    text: "برای تصمیم‌های حرفه‌ای مستقیم سراغ وزن، عیار، نوع محصول و استعلام مرتبط بروید.",
    primary: "مسیر سرمایه‌گذاری",
    primaryHref: "/catalog/melted-gold",
    secondary: "همکار بازار هستم",
    secondaryHref: "/register?intent=trade",
  },
];

export default function HomeHeroV5() {
  return (
    <section className={styles.hero} aria-label="معرفی گندم">
      <Swiper
        className={styles.heroSwiper}
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        speed={800}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.eyebrow}>
            <div className={styles.heroSlide}>
              <div className={`${styles.heroVisual} ${slide.kind === "medallion" ? styles.heroVisualMedallion : ""}`}>
                <div className={styles.heroHalo} />
                <div className={slide.kind === "medallion" ? styles.medallionFrame : styles.technicalFrame}>
                  <SafeImage
                    src={slide.image}
                    alt={slide.eyebrow}
                    loading={index === 0 ? "eager" : "lazy"}
                    className={slide.kind === "medallion" ? styles.medallionImage : styles.technicalImage}
                  />
                </div>
              </div>
              <div className={styles.heroCopy}>
                <span className={styles.kicker}>{slide.eyebrow}</span>
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <div className={styles.heroCtas}>
                  <Link className={styles.primaryCta} href={slide.primaryHref}>{slide.primary}</Link>
                  <Link className={styles.secondaryCta} href={slide.secondaryHref}>{slide.secondary}</Link>
                </div>
                <div className={styles.heroProof}>
                  <span><b>مشاهده آزاد</b><small>کاتالوگ بدون ثبت‌نام</small></span>
                  <span><b>استعلام دقیق</b><small>بر اساس فلز و نیاز</small></span>
                  <span><b>مسیر مشخص</b><small>خرید شخصی یا همکار</small></span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
