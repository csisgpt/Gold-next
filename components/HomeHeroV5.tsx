"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./HomePageV5.module.css";

const assetBase = "https://raw.githubusercontent.com/csisgpt/Gold-next/gandom-site/public/gandom";

const slides = [
  {
    kind: "sculpture",
    image: `${assetBase}/gandom-sculpture.webp`,
    eyebrow: "گندم؛ بازار هوشمند طلا و نقره",
    title: <>خرید طلا و نقره،<br /><span>شفاف‌تر و مطمئن‌تر</span></>,
    text: "محصول را ببینید، مسیر مناسب خودتان را انتخاب کنید و برای قیمت، موجودی یا خرید بدون سردرگمی به قدم بعد بروید.",
    primary: "مشاهده محصولات",
    primaryHref: "#catalogs",
    secondary: "استعلام قیمت امروز",
    secondaryHref: "#market",
  },
  {
    kind: "medallion",
    image: `${assetBase}/showcase-jewelry.webp`,
    eyebrow: "ویترین گندم",
    title: <>کارهای ساخته،<br /><span>برای انتخاب با خیال راحت</span></>,
    text: "مدل‌های ویترینی را یکجا ببینید و بعد برای موجودی، وزن و قیمت همان دسته اقدام کنید.",
    primary: "دیدن کارهای ساخته",
    primaryHref: "/catalog/crafted-gold",
    secondary: "راهنمای خرید",
    secondaryHref: "#guide",
  },
  {
    kind: "medallion",
    image: `${assetBase}/trust-ring.webp`,
    eyebrow: "برای خرید حرفه‌ای و همکار بازار",
    title: <>آبشده، شمش و ساچمه،<br /><span>با مسیر تخصصی‌تر</span></>,
    text: "اگر قیمت، عیار، وزن و استعلام برایتان مهم است، مستقیم وارد مسیر حرفه‌ای گندم شوید.",
    primary: "استعلام آبشده",
    primaryHref: "/catalog/melted-gold",
    secondary: "همکار بازار هستم",
    secondaryHref: "/register?intent=trade",
  },
];

export default function HomeHeroV5() {
  return (
    <section className={styles.hero} aria-label="معرفی گندم">
      <Swiper className={styles.heroSwiper} modules={[Autoplay, Navigation, Pagination]} slidesPerView={1} loop navigation pagination={{ clickable: true }} autoplay={{ delay: 6500, disableOnInteraction: false }} speed={850}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.eyebrow}>
            <div className={styles.heroSlide}>
              <div className={`${styles.heroVisual} ${slide.kind === "medallion" ? styles.heroVisualMedallion : ""}`}>
                <div className={styles.heroHalo} />
                <div className={slide.kind === "medallion" ? styles.medallionFrame : styles.sculptureFrame}>
                  <Image src={slide.image} alt={slide.eyebrow} fill priority={slide.kind === "sculpture"} sizes="(max-width: 900px) 100vw, 48vw" className={slide.kind === "medallion" ? styles.medallionImage : styles.sculptureImage} />
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
                  <span><b>اصالت</b><small>اطلاعات روشن محصول</small></span>
                  <span><b>قیمت</b><small>استعلام هدفمند</small></span>
                  <span><b>ارسال</b><small>مسیر پیگیری مشخص</small></span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
