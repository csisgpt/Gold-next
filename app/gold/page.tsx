import Link from "next/link";
import CatalogSwiper from "@/components/CatalogSwiper";
import FAQAccordion from "@/components/FAQAccordion";
import SafeImage from "@/components/SafeImage";
import { catalogAssets, catalogBySlug } from "@/data/catalog";

export default function GoldPage() {
  const crafted = catalogBySlug["crafted-gold"];
  const melted = catalogBySlug["melted-gold"];
  return <main className="catalog-page catalog-tone-gold">
    <header className="catalog-topbar"><div className="container catalog-topbar-inner"><Link href="/" className="logo-lockup"><span className="logo-seal">گ</span><span><b>گندم گلد</b><small>GANDOM GOLD</small></span></Link><nav className="catalog-nav"><Link href="/">صفحه اصلی</Link><Link href="/catalog/crafted-gold">کارهای ساخته</Link><Link href="/catalog/melted-gold">آبشده</Link><Link href="/silver">گندم سیلور</Link></nav><Link href="/register?intent=trade" className="header-action">همکار بازار</Link></div></header>
    <section className="category-hero-section"><div className="container category-hero-grid"><div className="category-hero-copy"><span className="eyebrow-pill">GANDOM GOLD</span><h1>دو مسیر روشن برای خرید طلا</h1><p>اگر خرید شخصی دارید از ویترین شروع کنید؛ اگر آبشده، عیار، وزن و قیمت برایتان مهم است وارد مسیر حرفه‌ای شوید.</p><div className="category-chips"><span>کار ساخته</span><span>آبشده</span><span>استعلام</span><span>همکار بازار</span></div><div className="hero-slide-actions"><Link href="/catalog/crafted-gold" className="button button-primary">دیدن ویترین</Link><Link href="/catalog/melted-gold" className="button button-ghost">آبشده و سرمایه‌گذاری</Link></div><small className="catalog-friction-note">دیدن محصولات بدون ثبت‌نام انجام می‌شود.</small></div><div className="category-hero-image"><SafeImage src={catalogAssets.crafted} alt="گندم گلد" className="catalog-fill-image"/><span className="category-image-label">Gandom Gold</span></div></div></section>
    <section className="site-section"><div className="container"><div className="section-intro"><div><span className="eyebrow-pill">ویترین</span><h2>کارهای ساخته و منتخب</h2></div><Link href="/catalog/crafted-gold">مشاهده کاتالوگ</Link></div><CatalogSwiper items={crafted.products} href="/catalog/crafted-gold" inquiryHref="/register?intent=crafted&metal=gold"/></div></section>
    <section className="site-section site-section-soft"><div className="container"><div className="section-intro"><div><span className="eyebrow-pill">بازار حرفه‌ای</span><h2>آبشده و طلای خام</h2></div><Link href="/catalog/melted-gold">مشاهده کاتالوگ</Link></div><CatalogSwiper items={melted.products} href="/catalog/melted-gold" inquiryHref="/register?intent=quote&metal=gold"/></div></section>
    <section className="site-section"><div className="container faq-two-column"><div className="faq-aside-card"><span className="eyebrow-pill">راهنما</span><h2>مسیر شما به نوع خرید بستگی دارد</h2><p>مشتری خانگی و همکار بازار قرار نیست در یک فرم و یک جریان واحد قرار بگیرند.</p><Link href="/register?intent=consultation" className="button button-primary">مشاوره انتخاب مسیر</Link></div><FAQAccordion/></div></section>
  </main>;
}
