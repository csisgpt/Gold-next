import Image from "next/image";
import Link from "next/link";
import CatalogSwiper from "@/components/CatalogSwiper";
import FAQAccordion from "@/components/FAQAccordion";
import GalleryMosaic from "@/components/GalleryMosaic";
import HeroSwiper from "@/components/HeroSwiper";
import { catalogAssets, catalogCategories } from "@/data/catalog";

const priceRows = [
  { title: "طلای ۱۸ عیار", value: "—", subtitle: "تومان / گرم", state: "قیمت لحظه‌ای" },
  { title: "آبشده ۷۵۰", value: "—", subtitle: "تومان / مثقال", state: "Quote" },
  { title: "نقره ۹۹۹", value: "—", subtitle: "تومان / گرم", state: "قیمت لحظه‌ای" },
  { title: "سکه تمام", value: "—", subtitle: "تومان", state: "بازار" },
];

const services = [
  ["خرید و فروش طلا", "آبشده، ساخته، سکه و محصولات منتخب"],
  ["خرید و فروش نقره", "شمش، ساچمه و سفارش‌های کارگاهی"],
  ["استعلام و Quote", "مسیر حرفه‌ای برای قیمت معتبر و کوتاه‌مدت"],
  ["خدمات همکاران", "سطح دسترسی و شرایط اختصاصی بازار"],
  ["احراز و عضویت", "مسیر مجزا برای مشتری عادی و همکار"],
  ["پشتیبانی و پیگیری", "درخواست، استعلام و ادامه فرایند خرید"],
];

const assurance = [
  ["ساختار شفاف", "کاربر دقیقاً می‌داند کجای مسیر خرید یا استعلام قرار دارد."],
  ["کاتالوگ حرفه‌ای", "محصولات بر اساس نوع، وزن، عیار و کاربرد قابل توسعه‌اند."],
  ["دو برند تخصصی", "گندم گلد و گندم سیلور با هویت یکپارچه اما مسیرهای مستقل."],
  ["آماده اتصال به هسته مالی", "قیمت، Quote، کیف پول، KYC و Trade در فاز عملیاتی."],
];

export default function HomePage() {
  const crafted = catalogCategories[0];
  const melted = catalogCategories[1];
  const bars = catalogCategories[2];
  const shot = catalogCategories[3];

  return (
    <main className="home-page">
      <header className="main-header">
        <div className="container main-header-inner">
          <Link href="/" className="logo-lockup">
            <span className="logo-seal">گ</span>
            <span>
              <b>گندم</b>
              <small>GANDOM GOLD · SILVER</small>
            </span>
          </Link>
          <nav className="main-nav">
            <a href="#catalogs">کاتالوگ‌ها</a>
            <Link href="/gold">گندم گلد</Link>
            <Link href="/silver">گندم سیلور</Link>
            <a href="#services">خدمات</a>
            <a href="#faq">پرسش‌ها</a>
          </nav>
          <Link href="/register" className="header-action">ورود / ثبت‌نام</Link>
        </div>
      </header>

      <section className="hero-wrap"><div className="container"><HeroSwiper /></div></section>

      <section className="price-strip-wrap">
        <div className="container price-strip">
          <div className="price-strip-title"><span className="price-icon">↗</span><div><b>تابلوی بازار</b><small>آماده اتصال به سرویس قیمت واقعی</small></div></div>
          {priceRows.map((row) => <div className="market-cell" key={row.title}><span>{row.title}</span><b>{row.value}</b><small>{row.subtitle}</small><em>{row.state}</em></div>)}
        </div>
      </section>

      <section className="site-section" id="catalogs">
        <div className="container">
          <div className="section-intro centered-intro"><div><span className="eyebrow-pill">کاتالوگ گندم</span><h2>هر بخش، یک تجربه تخصصی و مستقل</h2></div><p>ساختار دسته‌بندی بر اساس نیاز واقعی مجموعه طلا و نقره طراحی شده است؛ از ویترین تا مواد اولیه و بازار حرفه‌ای.</p></div>
          <div className="catalog-category-grid">
            {catalogCategories.map((category) => <Link href={`/catalog/${category.slug}`} className={`category-feature-card tone-${category.tone}`} key={category.slug}><div className="category-feature-image"><Image src={category.image} alt={category.title} fill sizes="(max-width: 800px) 100vw, 25vw" /></div><div className="category-feature-copy"><span>{category.eyebrow}</span><h3>{category.title}</h3><p>{category.description}</p><div className="category-mini-chips">{category.chips.slice(0, 3).map((chip) => <i key={chip}>{chip}</i>)}</div><b>مشاهده کاتالوگ ←</b></div></Link>)}
          </div>
        </div>
      </section>

      <section className="site-section site-section-soft">
        <div className="container editorial-split">
          <div className="editorial-image-wrap"><Image src={catalogAssets.workshop} alt="گالری طلا و نقره گندم" fill sizes="(max-width: 900px) 100vw, 52vw" /><span className="editorial-stamp">GANDOM<br />GOLD & SILVER</span></div>
          <div className="editorial-copy"><span className="eyebrow-pill">هویت مجموعه</span><h2>از ویترین لوکس تا معامله حرفه‌ای، زیر یک برند</h2><p>گندم قرار نیست فقط یک سایت معرفی باشد. طراحی جدید به‌صورت Product-first ساخته شده تا مشتری عادی بتواند محصول را راحت ببیند و همکار بازار هم مسیر تخصصی خود را داشته باشد.</p><div className="editorial-points"><div><b>Gandom Gold</b><span>ساخته، آبشده، سکه و خدمات بازار طلا</span></div><div><b>Gandom Silver</b><span>شمش، ساچمه، نقره زینتی و سفارش عمده</span></div><div><b>Professional Desk</b><span>استعلام، Quote و امکانات آتی همکاران</span></div></div><div className="hero-slide-actions"><Link href="/gold" className="button button-primary">گندم گلد</Link><Link href="/silver" className="button button-ghost">گندم سیلور</Link></div></div>
        </div>
      </section>

      <section className="site-section catalog-showcase-section"><div className="container"><div className="section-intro"><div><span className="eyebrow-pill">ویترین ساخته</span><h2>{crafted.title}</h2></div><Link href={`/catalog/${crafted.slug}`}>مشاهده همه مدل‌ها</Link></div><CatalogSwiper items={crafted.products} href={`/catalog/${crafted.slug}`} /></div></section>
      <section className="site-section site-section-soft catalog-showcase-section"><div className="container"><div className="section-intro"><div><span className="eyebrow-pill">بازار طلا</span><h2>{melted.title}</h2></div><Link href={`/catalog/${melted.slug}`}>ورود به کاتالوگ آبشده</Link></div><CatalogSwiper items={melted.products} href={`/catalog/${melted.slug}`} /></div></section>
      <section className="site-section catalog-showcase-section silver-section-accent"><div className="container"><div className="section-intro"><div><span className="eyebrow-pill silver-eyebrow">گندم سیلور</span><h2>{bars.title}</h2></div><Link href={`/catalog/${bars.slug}`}>مشاهده همه وزن‌ها</Link></div><CatalogSwiper items={bars.products} href={`/catalog/${bars.slug}`} /></div></section>
      <section className="site-section site-section-soft catalog-showcase-section"><div className="container"><div className="section-intro"><div><span className="eyebrow-pill silver-eyebrow">مواد اولیه نقره</span><h2>{shot.title}</h2></div><Link href={`/catalog/${shot.slug}`}>کاتالوگ ساچمه</Link></div><CatalogSwiper items={shot.products} href={`/catalog/${shot.slug}`} /></div></section>

      <section className="site-section"><div className="container"><div className="section-intro centered-intro"><div><span className="eyebrow-pill">گالری مجموعه</span><h2>یک زبان بصری واحد برای طلا و نقره</h2></div><p>گالری برای نمایش کمپین، محصولات منتخب، فضای ویترین و دسته‌های اصلی طراحی شده و می‌تواند از پنل مدیریت تغذیه شود.</p></div><GalleryMosaic /></div></section>

      <section className="site-section site-section-dark" id="services"><div className="container dark-section-grid"><div className="dark-section-copy"><span className="eyebrow-pill dark-eyebrow">خدمات مجموعه</span><h2>فقط فروشگاه نیست؛ یک هاب طلا و نقره است</h2><p>ساختار UI/UX طوری چیده شده که بعداً هرکدام از این سرویس‌ها بدون به‌هم‌ریختن صفحه اصلی، ماژول مستقل خودشان را داشته باشند.</p><Link href="/register" className="button button-gold">شروع عضویت</Link></div><div className="services-grid">{services.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="site-section"><div className="container"><div className="section-intro centered-intro"><div><span className="eyebrow-pill">چرا گندم؟</span><h2>UI زیبا وقتی ارزش دارد که مسیر خرید را ساده کند</h2></div></div><div className="assurance-grid">{assurance.map(([title, text], index) => <article key={title}><div className="assurance-icon">{index + 1}</div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="site-section site-section-soft"><div className="container app-promo"><div className="app-phone-card"><div className="phone-shell-pro"><div className="phone-notch" /><div className="phone-content-pro"><span className="logo-seal phone-logo">گ</span><small>GANDOM</small><div className="phone-line long" /><div className="phone-line" /><div className="phone-button" /></div></div></div><div className="app-promo-copy"><span className="eyebrow-pill">وب‌اپ گندم</span><h2>همین ظاهر، در ادامه تبدیل به تجربه معامله می‌شود</h2><p>OTP، احراز هویت، کیف پول، Quote، سفارش، معامله، سابقه و اعلان‌ها در معماری بعدی روی همین Design System سوار می‌شوند.</p><div className="app-feature-list"><span>قیمت و Quote</span><span>کیف پول و دارایی</span><span>خرید و فروش</span><span>پیگیری سفارش</span></div><Link href="/register" className="button button-primary">پیش‌ثبت‌نام</Link></div></div></section>

      <section className="site-section" id="faq"><div className="container faq-two-column"><div className="faq-aside-card"><span className="eyebrow-pill">پرسش‌های متداول</span><h2>چیزهایی که قبل از خرید باید روشن باشند</h2><p>Accordionها واقعی و قابل تعامل هستند و در ادامه می‌توانند اطلاعات هر دسته یا قوانین بازار را از پنل دریافت کنند.</p><Link href="/register" className="button button-primary">تماس / عضویت</Link></div><FAQAccordion /></div></section>

      <footer className="premium-footer"><div className="container footer-main-grid"><div className="footer-brand-column"><Link href="/" className="logo-lockup footer-logo"><span className="logo-seal">گ</span><span><b>گندم</b><small>GANDOM GOLD · SILVER</small></span></Link><p>ویترین و زیرساخت دیجیتال برای خرید، فروش و خدمات حرفه‌ای طلا و نقره.</p></div><div><h4>گندم گلد</h4><Link href="/catalog/crafted-gold">کارهای ساخته</Link><Link href="/catalog/melted-gold">طلای آبشده</Link><Link href="/gold">خدمات طلا</Link></div><div><h4>گندم سیلور</h4><Link href="/catalog/silver-bars">شمش نقره</Link><Link href="/catalog/silver-shot">ساچمه نقره</Link><Link href="/silver">خدمات نقره</Link></div><div><h4>دسترسی سریع</h4><Link href="/register">عضویت</Link><a href="#services">خدمات</a><a href="#faq">پرسش‌ها</a></div></div><div className="container footer-bottom">© ۱۴۰۵ گندم — تمامی حقوق محفوظ است.</div></footer>
    </main>
  );
}
