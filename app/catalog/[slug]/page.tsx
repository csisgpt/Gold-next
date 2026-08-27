import Link from "next/link";
import { notFound } from "next/navigation";
import CatalogSwiper from "@/components/CatalogSwiper";
import FAQAccordion from "@/components/FAQAccordion";
import SafeImage from "@/components/SafeImage";
import { catalogBySlug, catalogCategories } from "@/data/catalog";

export function generateStaticParams() {
  return catalogCategories.map((category) => ({ slug: category.slug }));
}

export default function CatalogCategoryPage({ params }: { params: { slug: string } }) {
  const category = catalogBySlug[params.slug];
  if (!category) notFound();

  const isSilver = category.tone === "silver";
  const metal = isSilver ? "silver" : "gold";
  const inquiryHref = category.slug === "crafted-gold" ? "/register?intent=crafted&metal=gold" : `/register?intent=quote&metal=${metal}`;

  return (
    <main className={`catalog-page catalog-tone-${category.tone}`}>
      <header className="catalog-topbar"><div className="container catalog-topbar-inner"><Link href="/" className="logo-lockup"><span className="logo-seal">گ</span><span><b>گندم</b><small>GANDOM GOLD · SILVER</small></span></Link><nav className="catalog-nav"><Link href="/">صفحه اصلی</Link><Link href="/gold">گندم گلد</Link><Link href="/silver">گندم سیلور</Link><Link href="/register?intent=trade">همکار بازار</Link></nav></div></header>

      <section className="category-hero-section"><div className="container category-hero-grid"><div className="category-hero-copy"><span className="eyebrow-pill">{category.eyebrow}</span><h1>{category.title}</h1><p>{category.description}</p><div className="category-chips">{category.chips.map((chip) => <span key={chip}>{chip}</span>)}</div><div className="hero-slide-actions"><Link href={inquiryHref} className="button button-primary">استعلام همین دسته</Link><Link href="/#catalogs" className="button button-ghost">همه کاتالوگ‌ها</Link></div><small className="catalog-friction-note">دیدن کاتالوگ آزاد است؛ فرم فقط برای استعلام و سفارش باز می‌شود.</small></div><div className="category-hero-image"><SafeImage src={category.image} alt={category.title} className="catalog-fill-image" /><span className="category-image-label">Gandom Catalogue</span></div></div></section>

      <section className="site-section"><div className="container"><div className="section-intro"><div><span className="eyebrow-pill">محصولات منتخب</span><h2>کاتالوگ {category.title}</h2></div><p>وزن، عیار، موجودی و قیمت واقعی در مرحله اتصال API روی همین کارت‌ها قرار می‌گیرند.</p></div><CatalogSwiper items={category.products} href={`/catalog/${category.slug}`} inquiryHref={inquiryHref} /></div></section>

      <section className="site-section site-section-soft"><div className="container category-spec-grid"><div className="category-spec-card"><span>۱</span><h3>انتخاب</h3><p>مدل، وزن، عیار یا دانه‌بندی موردنظر را پیدا کنید.</p></div><div className="category-spec-card"><span>۲</span><h3>استعلام</h3><p>فقط همان دسته یا محصول را برای قیمت و موجودی استعلام کنید.</p></div><div className="category-spec-card"><span>۳</span><h3>ادامه مسیر</h3><p>بر اساس مشتری خانگی یا همکار بازار، مرحله بعدی متناسب نمایش داده می‌شود.</p></div></div></section>

      <section className="site-section"><div className="container faq-two-column"><div className="faq-aside-card"><span className="eyebrow-pill">راهنمای خرید</span><h2>قبل از ثبت درخواست چه چیزهایی مهم است؟</h2><p>عیار، وزن، قیمت، موجودی و شرایط معامله باید قبل از تصمیم نهایی شفاف باشند.</p><Link href={inquiryHref} className="button button-primary">استعلام {category.title}</Link></div><FAQAccordion /></div></section>
    </main>
  );
}
