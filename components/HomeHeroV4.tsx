"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import styles from "./HomePageV4.module.css";

const slides = [
  {
    image: "/gandom/gandom-sculpture.webp",
    eyebrow: "گندم؛ بازار مدرن طلا و نقره",
    title: <>بازار امن و هوشمند<br /><span>طلا و نقره</span></>,
    text: "خرید طلا و نقره، آبشده، شمش، ساچمه و زیورآلات با قیمت شفاف، اصالت تضمینی و ارسال امن به سراسر کشور.",
    primary: "مشاهده محصولات",
    primaryHref: "#catalogs",
  },
  {
    image: "/gandom/showcase-jewelry.webp",
    eyebrow: "GANDOM CRAFTED",
    title: <>ویترین منتخب<br /><span>کارهای ساخته</span></>,
    text: "انتخابی از انگشتر، گوشواره، گردنبند و دستبندهای ویترینی با تجربه‌ای کاتالوگی و آماده اتصال به موجودی واقعی.",
    primary: "ورود به ویترین",
    primaryHref: "/catalog/crafted-gold",
  },
  {
    image: "/gandom/trust-ring.webp",
    eyebrow: "اعتماد، اصالت و شفافیت",
    title: <>خرید با اطمینان<br /><span>از گندم</span></>,
    text: "مسیر خرید و استعلام با اطلاعات روشن، پشتیبانی واقعی و ساختاری آماده برای قیمت لحظه‌ای، احراز هویت و معامله آنلاین.",
    primary: "عضویت در گندم",
    primaryHref: "/register",
  },
];

const featurePills = [
  ["اصالت کالا", "ضمانت و رهگیری"],
  ["قیمت به‌روز", "استعلام سریع"],
  ["ارسال امن", "بسته‌بندی مطمئن"],
  ["خرید آسان", "مسیر شفاف"],
];

export default function HomeHeroV4() {
  return (
    <section className={styles.hero}>
      <Swiper
        className={styles.heroSwiper}
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        speed={800}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.eyebrow}>
            <div className={styles.heroSlide}>
              <div className={styles.heroVisual}>
                <div className={styles.heroHalo} />
                <Image
                  src={slide.image}
                  alt={slide.eyebrow}
                  fill
                  priority={slide.image.includes("sculpture")}
                  sizes="(max-width: 900px) 100vw, 48vw"
                  className={styles.heroImage}
                />
              </div>

              <div className={styles.heroCopy}>
                <span className={styles.kicker}>{slide.eyebrow}</span>
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <div className={styles.heroCtas}>
                  <Link className={styles.goldButton} href={slide.primaryHref}>{slide.primary}</Link>
                  <Link className={styles.ghostButton} href="/register">ثبت‌نام / ورود</Link>
                </div>
                <div className={styles.heroFeatures}>
                  {featurePills.map(([title, text]) => (
                    <div key={title} className={styles.heroFeature}>
                      <span className={styles.featureIcon}>◆</span>
                      <div><b>{title}</b><small>{text}</small></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
