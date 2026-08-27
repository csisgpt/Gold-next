import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CatalogSwiper from "@/components/CatalogSwiper";
import FAQAccordion from "@/components/FAQAccordion";
import { catalogBySlug, catalogCategories } from "@/data/catalog";

export function generateStaticParams() {
  return catalogCategories.map((category) => ({ slug: category.slug }));
}

export default function CatalogCategoryPage({ params }: { params: { slug: string } }) {
  const category = catalogBySlug[params.slug];
  if (!category) notFound();

  return (
    <main className={`catalog-page catalog-tone-${category.tone}`}>
      <header className="catalog-topbar">
        <div className="container catalog-topbar-inner">
          <Link href="/" className="logo-lockup"><span className="logo-seal">گ</span><span><b>گندم</b><small>GANDOM GOLD · SILVER</small></span></Link>
          <nav className="catalog-nav"><Link href="/">صفحه اصلی</Link><Link href="/gold">گندم گلد</Link><Link href="/silver">گندم سیلور</Link><Link href="/register">عضویت</Link></nav>
        </div>
      </header>

      <section className="category-hero-section">
        <div className="container category-hero-grid">
          <div className="category-hero-copy">
            <span className="eyebrow-pill">{category.eyebrow}</span>
            <h1>{category.title}</h1>
            <p>{category.description}</p>
            <div className="category-chips">{category.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
            <div className="hero-slide-actions"><Link href="/register" className="button button-primary">درخواست استعلام</Link><Link href="/#catalogs" className="button button-ghost">همه کاتالوگ‌ها</Link></div>
          </div>
          <div className="category-hero-image"><Image src={category.image} alt={category.title} fill priority sizes="(max-width: 900px) 100vw, 55vw" /><span className="category-image-label">تصویر کاتالوگی</span></div>
        </div>
      </section>

      <section className="site-section">
        <div className="container">
          <div className="section-intro"><div><span className="eyebrow-pill">محصولات منتخب</span><h2>کاتالوگ {category.title}</h2></div><p>این بخش برای اتصال مستقیم به موجودی، قیمت، وزن و عیار واقعی طراحی شده است.</p></div>
          <CatalogSwiper items={category.products} href="/register" />
        </div>
      </section>

      <section className="site-section site-section-soft">
        <div className="container category-spec-grid">
          <div className="category-spec-card"><span>۱</span><h3>انتخاب محصول</h3><p>مدل، وزن، عیار یا دانه‌بندی موردنظر را از کاتالوگ انتخاب کنید.</p></div>
          <div className="category-spec-card"><span>۲</span><h3>استعلام</h3><p>قیمت و وضعیت موجودی در نسخه عملیاتی از سرویس قیمت و انبار دریافت می‌شود.</p></div>
          <div className="category-spec-card"><span>۳</span><h3>ثبت درخواست</h3><p>کاربر خانگی یا همکار، مسیر مناسب حساب خود را برای سفارش یا معامله ادامه می‌دهد.</p></div>
        </div>
      </section>

      <section className="site-section">
        <div className="container faq-two-column">
          <div className="faq-aside-card"><span className="eyebrow-pill">راهنمای خرید</span><h2>قبل از ثبت سفارش چه چیزهایی مهم است؟</h2><p>عیار، وزن، قیمت، موجودی، شرایط تسویه و نوع حساب کاربر باید شفاف و یکجا دیده شوند.</p><Link href="/register" className="button button-primary">عضویت و شروع</Link></div>
          <FAQAccordion />
        </div>
      </section>
    </main>
  );
}
