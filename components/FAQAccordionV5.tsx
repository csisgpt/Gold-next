"use client";

import { useState } from "react";

const items = [
  { q: "برای خرید از کجا شروع کنم؟", a: "اگر خرید شخصی دارید از کاتالوگ شروع کنید. برای آبشده، شمش یا ساچمه مستقیم وارد همان دسته شوید و فقط برای قیمت یا موجودی استعلام بگیرید." },
  { q: "قیمت طلا و نقره چطور نمایش داده می‌شود؟", a: "بخش بازار برای اتصال به فید قیمت لحظه‌ای طراحی شده است. تا اتصال نهایی، به‌جای عدد قدیمی یا نمایشی، مسیر استعلام معتبر در اختیار کاربر قرار می‌گیرد." },
  { q: "اطلاعات وزن و عیار محصول کجا دیده می‌شود؟", a: "در نسخه عملیاتی وزن، عیار، موجودی و اطلاعات لازم برای تصمیم خرید در همان صفحه محصول یا دسته نمایش داده می‌شود." },
  { q: "مشتری خانگی و همکار بازار مسیر یکسانی دارند؟", a: "خیر. مشتری خانگی سریع‌تر به ویترین می‌رسد؛ همکار بازار به استعلام، آبشده، شمش، ساچمه و خدمات حرفه‌ای هدایت می‌شود." },
  { q: "اگر برای انتخاب محصول مطمئن نباشم چه کار کنم؟", a: "از مسیر مشاوره استفاده کنید تا پیش از فرم خرید، نوع محصول و مسیر مناسب مشخص شود." },
];

export default function FAQAccordionV5() {
  const [open, setOpen] = useState(0);
  return (
    <div className="v5-faq-list">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <article key={item.q} className={`v5-faq-item ${active ? "is-open" : ""}`}>
            <button type="button" className="v5-faq-trigger" aria-expanded={active} onClick={() => setOpen(active ? -1 : index)}>
              <span>{item.q}</span><i aria-hidden="true">{active ? "−" : "+"}</i>
            </button>
            <div className="v5-faq-content" aria-hidden={!active}><div><p>{item.a}</p></div></div>
          </article>
        );
      })}
    </div>
  );
}
