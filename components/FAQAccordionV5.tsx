"use client";

import { useState } from "react";
import styles from "./HomePageV5.module.css";

const items = [
  {
    q: "برای خرید از کجا شروع کنم؟",
    a: "اگر خرید شخصی دارید از دسته‌بندی محصولات شروع کنید. برای آبشده، شمش یا ساچمه می‌توانید مستقیم وارد همان کاتالوگ شوید و برای قیمت یا موجودی استعلام بگیرید.",
  },
  {
    q: "قیمت طلا و نقره چطور نمایش داده می‌شود؟",
    a: "بخش بازار برای اتصال به فید قیمت لحظه‌ای طراحی شده است. تا زمان اتصال نهایی، به‌جای عدد نمایشی یا قدیمی، مسیر استعلام قیمت در اختیار کاربر قرار می‌گیرد.",
  },
  {
    q: "اطلاعات وزن و عیار محصول کجا دیده می‌شود؟",
    a: "در نسخه عملیاتی هر محصول باید وزن، عیار، وضعیت موجودی و اطلاعات لازم برای تصمیم خرید را در همان صفحه محصول یا کاتالوگ نشان دهد.",
  },
  {
    q: "مشتری خانگی و همکار بازار مسیر یکسانی دارند؟",
    a: "خیر. مشتری خانگی سریع‌تر به ویترین و محصولات می‌رسد؛ همکار بازار به مسیر تخصصی استعلام، آبشده، شمش، ساچمه و خدمات حرفه‌ای هدایت می‌شود.",
  },
  {
    q: "اگر برای انتخاب محصول مطمئن نباشم چه کار کنم؟",
    a: "از CTA مشاوره یا درخواست تماس استفاده کنید تا قبل از ورود به فرایند خرید، نوع محصول و مسیر مناسب شما مشخص شود.",
  },
];

export default function FAQAccordionV5() {
  const [open, setOpen] = useState(0);

  return (
    <div className={styles.faqList}>
      {items.map((item, index) => {
        const active = open === index;
        return (
          <article key={item.q} className={`${styles.faqItem} ${active ? styles.faqItemOpen : ""}`}>
            <button
              type="button"
              className={styles.faqTrigger}
              aria-expanded={active}
              onClick={() => setOpen(active ? -1 : index)}
            >
              <span>{item.q}</span>
              <i aria-hidden="true">{active ? "−" : "+"}</i>
            </button>
            <div className={styles.faqContent} aria-hidden={!active}>
              <div><p>{item.a}</p></div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
