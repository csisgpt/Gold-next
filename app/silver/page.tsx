import Link from "next/link";
import CatalogSwiper from "@/components/CatalogSwiper";
import FAQAccordion from "@/components/FAQAccordion";
import SafeImage from "@/components/SafeImage";
import { catalogAssets, catalogBySlug } from "@/data/catalog";

export default function SilverPage() {
  const bars = catalogBySlug["silver-bars"];
  const shot = catalogBySlug["silver-shot"];
  return <main className="catalog-page catalog-tone-silver">
    <header className="catalog-topbar"><div className="container catalog-topbar-inner"><Link href="/" className="logo-lockup"><span className="logo-seal">گ</span><span><b>گندم سیلور</b><small>GANDOM SILVER</small></span></Link><nav className="catalog-nav"><Link href="/">صفحه اصلی</Link><Link href="/catalog/silver-bars">شمش</Link><Link href="/catalog/silver-shot">ساچمه</Link><Link href="/gold">گندم گلد</Link></nav><Link href="/register?intent=trade" className="header-action">همکار بازار</Link></div></header>
    <section className="category-hero-section"><div className="container category-hero-grid"><div className="category-hero-copy"><span className="eyebrow-pill silver-eyebrow">GANDOM SILVER</span><h1>شمش و ساچمه نقره، واضح و دسته‌بندی‌شده</h1><p>برای سرمایه‌گذار، کارگاه و همکار بازار؛ نوع محصول، وزن و مسیر استعلام از همان ابتدا مشخص است.</p><div className="category-chips"><span>شمش ۹۹۹</span><span>ساچمه ریز</span><span>ساچمه متوسط</span><span>ساچمه درشت</span><span>عمده</span></div><div className="hero-slide-actions"><Link href="/catalog/silver-bars" className="button button-primary">شمش نقره</Link><Link href="/catalog/silver-shot" className="button button-ghost">ساچمه نقره</Link></div><small className="catalog-friction-note">اول وزن و نوع را ببینید؛ بعد فقط همان مورد را استعلام کنید.</small></div><div className="category-hero-image"><SafeImage src={catalogAssets.silverBars} alt="گندم سیلور" className="catalog-fill-image"/><span className="category-image-label">Gandom Silver</span></div></div></section>
    <section className="site-section"><div className="container"><div className="section-intro"><div><span className="eyebrow-pill silver-eyebrow">شمش نقره</span><h2>وزن‌های سرمایه‌ای و حرفه‌ای</h2></div><Link href="/catalog/silver-bars">مشاهده همه</Link></div><CatalogSwiper items={bars.products} href="/catalog/silver-bars" inquiryHref="/register?intent=quote&metal=silver"/></div></section>
    <section className="site-section site-section-soft"><div className="container"><div className="section-intro"><div><span className="eyebrow-pill silver-eyebrow">ساچمه</span><h2>دانه‌بندی و بسته‌بندی‌های مختلف</h2></div><Link href="/catalog/silver-shot">مشاهده همه</Link></div><CatalogSwiper items={shot.products} href="/catalog/silver-shot" inquiryHref="/register?intent=quote&metal=silver"/></div></section>
    <section className="site-section"><div className="container faq-two-column"><div className="faq-aside-card"><span className="eyebrow-pill silver-eyebrow">راهنما</span><h2>نقره برای سرمایه‌گذاری و کارگاه</h2><p>عیار، وزن و نوع کاربرد باید قبل از استعلام واضح باشند؛ این مسیر برای همین ساده شده است.</p><Link href="/register?intent=consultation" className="button button-primary">مشاوره و استعلام</Link></div><FAQAccordion/></div></section>
  </main>;
}
