"use client";

import { useState } from "react";

const items = [
  { q: "محصولات داخل کاتالوگ موجودی واقعی هستند؟", a: "در نسخه فعلی، تصاویر و محصولات برای ساخت تجربه کاتالوگی و طراحی UI/UX هستند. در مرحله اتصال پنل، موجودی، وزن، عیار، قیمت و وضعیت فروش از API واقعی خوانده می‌شود." },
  { q: "برای آبشده چه اطلاعاتی نمایش داده خواهد شد؟", a: "وزن، عیار، انگ یا شناسه، قیمت خرید و فروش، زمان اعتبار قیمت و وضعیت امکان معامله از داده‌های بک‌اند نمایش داده می‌شود." },
  { q: "شمش و ساچمه نقره چطور دسته‌بندی می‌شوند؟", a: "شمش بر اساس وزن و عیار، و ساچمه بر اساس عیار، دانه‌بندی و وزن بسته‌بندی دسته‌بندی می‌شود. فیلتر و موجودی نیز در نسخه عملیاتی اضافه می‌شود." },
  { q: "مشتری خانگی و همکار بازار تجربه یکسان دارند؟", a: "خیر. ظاهر برند یکپارچه است اما محصولات، قیمت‌ها، سطح دسترسی، محدودیت‌ها و خدمات براساس نوع حساب کاربر قابل تفکیک خواهد بود." },
  { q: "آیا امکان استعلام یا سفارش مستقیم اضافه می‌شود؟", a: "بله. CTAها برای اتصال به Quote، ثبت سفارش، تماس با کارشناس، کیف پول و بعداً معامله کامل طراحی شده‌اند." },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return <div className="accordion-list">{items.map((item, index) => { const active = open === index; return <article key={item.q} className={`accordion-item ${active ? "is-open" : ""}`}><button type="button" className="accordion-trigger" aria-expanded={active} onClick={() => setOpen(active ? -1 : index)}><span>{item.q}</span><i aria-hidden="true">{active ? "−" : "+"}</i></button><div className="accordion-content" aria-hidden={!active}><p>{item.a}</p></div></article>; })}</div>;
}
