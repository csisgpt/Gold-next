import Image from "next/image";
import Link from "next/link";
import CatalogSwiper from "@/components/CatalogSwiper";
import FAQAccordion from "@/components/FAQAccordion";
import { catalogAssets, catalogBySlug } from "@/data/catalog";

export default function SilverPage() {
  const bars = catalogBySlug["silver-bars"];
  const shot = catalogBySlug["silver-shot"];

  return (
    <main className="catalog-page catalog-tone-silver">
      <header className="catalog-topbar">
        <div className="container catalog-topbar-inner">
          <Link href="/" className="logo-lockup"><span className="logo-seal">گ</span><span><b>گندم سیلور</b><small>GANDOM SILVER</small></span></Link>
          <nav className="catalog-nav"><Link href="/">صفحه اصلی</Link><Link href="/catalog/silver-bars">شمش نقره</Link><Link href="/catalog/silver-shot">ساچمه</Link><Link href="/gold">گندم گلد</Link></nav>
          <Link href="/register" className="header-action">عضویت</Link>
        </div>
      </header>

      <section className="category-hero-section">
        <div className="container category-hero-grid">
          <div className="category-hero-copy">
            <span className="eyebrow-pill silver-eyebrow">GANDOM SILVER</span>
            <h1>کاتالوگ تخصصی شمش و ساچمه نقره</h1>
            <p>برای سرمایه‌گذار، کارگاه و همکار بازار؛ وزن‌های متنوع شمش، دانه‌بندی ساچمه، عیار، موجودی و استعلام در یک تجربه روشن و حرفه‌ای.</p>
            <div className="category-chips"><span>شمش ۹۹۹</span><span>ساچمه ریز</span><span>ساچمه متوسط</span><span>ساچمه درشت</span><span>عمده</span></div>
            <div className="hero-slide-actions"><Link href="/catalog/silver-bars" className="button button-primary">شمش نقره</Link><Link href="/catalog/silver-shot" className="button button-ghost">ساچمه نقره</Link></div>
          </div>
          <div className="category-hero-image"><Image src={catalogAssets.silverBars} alt="گندم سیلور" fill priority sizes="(max-width:900px) 100vw,55vw"/><span className="category-image-label">Gandom Silver Catalogue</span></div>
        </div>
      </section>

      <section className="site-section"><div className="container"><div className="section-intro"><div><span className="eyebrow-pill silver-eyebrow">شمش نقره</span><h2>وزن‌های سرمایه‌ای و حرفه‌ای</h2></div><Link href="/catalog/silver-bars">مشاهده همه</Link></div><CatalogSwiper items={bars.products} href="/catalog/silver-bars"/></div></section>
      <section className="site-section site-section-soft"><div className="container"><div className="section-intro"><div><span className="eyebrow-pill silver-eyebrow">ساچمه</span><h2>دانه‌بندی و بسته‌بندی‌های مختلف</h2></div><Link href="/catalog/silver-shot">مشاهده همه</Link></div><CatalogSwiper items={shot.products} href="/catalog/silver-shot"/></div></section>
      <section className="site-section"><div className="container faq-two-column"><div className="faq-aside-card"><span className="eyebrow-pill silver-eyebrow">راهنما</span><h2>نقره برای سرمایه‌گذاری و کارگاه</h2><p>نوع محصول، عیار، وزن و کاربرد باید کاملاً واضح باشد؛ این ساختار دقیقاً برای همین طراحی شده.</p><Link href="/register" className="button button-primary">استعلام و عضویت</Link></div><FAQAccordion/></div></section>
    </main>
  );
}
