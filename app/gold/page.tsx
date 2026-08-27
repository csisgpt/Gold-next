import Image from "next/image";
import Link from "next/link";
import CatalogSwiper from "@/components/CatalogSwiper";
import FAQAccordion from "@/components/FAQAccordion";
import { catalogAssets, catalogBySlug } from "@/data/catalog";

export default function GoldPage() {
  const crafted = catalogBySlug["crafted-gold"];
  const melted = catalogBySlug["melted-gold"];

  return (
    <main className="catalog-page catalog-tone-gold">
      <header className="catalog-topbar">
        <div className="container catalog-topbar-inner">
          <Link href="/" className="logo-lockup"><span className="logo-seal">گ</span><span><b>گندم گلد</b><small>GANDOM GOLD</small></span></Link>
          <nav className="catalog-nav"><Link href="/">صفحه اصلی</Link><Link href="/catalog/crafted-gold">ساخته</Link><Link href="/catalog/melted-gold">آبشده</Link><Link href="/silver">گندم سیلور</Link></nav>
          <Link href="/register" className="header-action">عضویت</Link>
        </div>
      </header>

      <section className="category-hero-section">
        <div className="container category-hero-grid">
          <div className="category-hero-copy">
            <span className="eyebrow-pill">GANDOM GOLD</span>
            <h1>بازار طلا با دو مسیر: ویترین و معامله</h1>
            <p>گندم گلد هم برای مشتری خانگی که دنبال کار ساخته است مسیر روشن دارد، هم برای همکار و معامله‌گری که آبشده، عیار، وزن و قیمت معتبر برایش مهم است.</p>
            <div className="category-chips"><span>کار ساخته</span><span>آبشده</span><span>سکه</span><span>استعلام</span><span>Quote</span></div>
            <div className="hero-slide-actions"><Link href="/catalog/crafted-gold" className="button button-primary">ویترین ساخته</Link><Link href="/catalog/melted-gold" className="button button-ghost">بازار آبشده</Link></div>
          </div>
          <div className="category-hero-image"><Image src={catalogAssets.crafted} alt="گندم گلد" fill priority sizes="(max-width:900px) 100vw,55vw"/><span className="category-image-label">Gandom Gold Catalogue</span></div>
        </div>
      </section>

      <section className="site-section"><div className="container"><div className="section-intro"><div><span className="eyebrow-pill">ویترین</span><h2>کارهای ساخته و منتخب</h2></div><Link href="/catalog/crafted-gold">مشاهده کاتالوگ</Link></div><CatalogSwiper items={crafted.products} href="/catalog/crafted-gold"/></div></section>
      <section className="site-section site-section-soft"><div className="container"><div className="section-intro"><div><span className="eyebrow-pill">بازار حرفه‌ای</span><h2>آبشده و طلای خام</h2></div><Link href="/catalog/melted-gold">مشاهده کاتالوگ</Link></div><CatalogSwiper items={melted.products} href="/catalog/melted-gold"/></div></section>
      <section className="site-section"><div className="container faq-two-column"><div className="faq-aside-card"><span className="eyebrow-pill">راهنما</span><h2>یک تجربه مناسب دو نوع مشتری</h2><p>در نسخه عملیاتی، قیمت و محصولات مشتری خانگی از سیاست‌های همکار بازار جدا خواهد بود.</p><Link href="/register" className="button button-primary">عضویت در گندم</Link></div><FAQAccordion/></div></section>
    </main>
  );
}
