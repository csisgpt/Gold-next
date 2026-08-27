import Image from "next/image";
import Link from "next/link";
import { catalogCategories } from "@/data/catalog";
import CatalogSwiperV5 from "./CatalogSwiperV5";
import FAQAccordionV5 from "./FAQAccordionV5";
import HomeHeroV5 from "./HomeHeroV5";
import styles from "./HomePageV5.module.css";

const assetBase = "https://raw.githubusercontent.com/csisgpt/Gold-next/gandom-site/public/gandom";

const routes = [
  ["✦", "برای خرید شخصی", "مدل‌ها و دسته‌بندی‌ها را ببینید و بعد برای همان محصول استعلام بگیرید.", "مشاهده محصولات", "#catalogs"],
  ["Au", "برای سرمایه‌گذاری", "مستقیم سراغ آبشده و شمش بروید؛ اطلاعات تصمیم‌گیری را یکجا ببینید.", "مسیر سرمایه‌گذاری", "/catalog/melted-gold"],
  ["↗", "برای همکار بازار", "مسیر کوتاه‌تر برای استعلام، Quote و خدمات تخصصی طلا و نقره.", "ورود به مسیر همکار", "/register?intent=trade"],
] as const;

const trustItems = [
  [`${assetBase}/trust-ring.webp`, "شفافیت قبل از خرید", "اطلاعات لازم را قبل از اقدام ببینید"],
  [`${assetBase}/iran-shipping.webp`, "مسیر ارسال روشن", "وضعیت ارسال و پیگیری در فرایند مشخص است"],
  [`${assetBase}/showcase-jewelry.webp`, "انتخاب حرفه‌ای", "دسته‌بندی و ارائه محصول با تمرکز روی انتخاب"],
  [`${assetBase}/gandom-sculpture.webp`, "یک تجربه یکپارچه", "گندم گلد و سیلور زیر یک Design System"],
] as const;

const categoryCards = [
  { title: "کارهای ساخته و ویترینی", text: "انگشتر، دستبند، گوشواره، گردنبند و مدل‌های منتخب.", image: `${assetBase}/showcase-jewelry.webp`, href: "/catalog/crafted-gold", action: "دیدن مدل‌ها", localArt: true },
  { title: "طلای آبشده", text: "برای استعلام وزن، عیار و ورود به مسیر حرفه‌ای بازار طلا.", image: catalogCategories[1].image, href: "/catalog/melted-gold", action: "استعلام آبشده" },
  { title: "شمش نقره", text: "وزن‌های مختلف شمش نقره برای سرمایه‌گذاری و سفارش حرفه‌ای.", image: catalogCategories[2].image, href: "/catalog/silver-bars", action: "دیدن وزن‌ها" },
  { title: "ساچمه نقره", text: "دانه‌بندی و بسته‌بندی‌های مختلف برای کارگاه و سفارش عمده.", image: catalogCategories[3].image, href: "/catalog/silver-shot", action: "استعلام ساچمه" },
  { title: "گندم گلد و سیلور", text: "اگر هنوز دسته محصول را نمی‌دانید، از مسیر تخصصی فلز موردنظر شروع کنید.", image: `${assetBase}/trust-ring.webp`, href: "/gold", action: "انتخاب مسیر", localArt: true },
];

const whyItems = [
  ["01", "کمترین اصطکاک", "کاربر برای دیدن محصول مجبور به ثبت‌نام نمی‌شود؛ ثبت‌نام وقتی می‌آید که واقعاً لازم است."],
  ["02", "CTA متناسب با تصمیم", "برای مدل، قیمت، سرمایه‌گذاری و همکاری، اقدام بعدی متفاوت و واضح است."],
  ["03", "اطلاعات قبل از اقدام", "وزن، عیار، موجودی و قیمت در معماری محصول در جای درست خودشان قرار می‌گیرند."],
  ["04", "دو تجربه در یک برند", "مشتری خانگی و همکار بازار یک ظاهر مشترک دارند اما مسیرهای متفاوت طی می‌کنند."],
] as const;

export default function HomePageV6() {
  const crafted = catalogCategories[0];
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}><div className={styles.headerInner}>
          <Link className={styles.brand} href="/" aria-label="گندم - صفحه اصلی"><span className={styles.brandSeal}>گ</span><span><strong>گندم</strong><small>GANDOM GOLD · SILVER</small></span></Link>
          <nav className={styles.nav} aria-label="ناوبری اصلی"><a href="#catalogs">محصولات</a><a href="#market">قیمت و استعلام</a><Link href="/gold">گندم گلد</Link><Link href="/silver">گندم سیلور</Link><a href="#guide">چرا گندم</a><a href="#faq">سؤالات متداول</a></nav>
          <div className={styles.headerActions}><a className={styles.headerQuote} href="#market">استعلام قیمت</a><Link className={styles.headerLogin} href="/register">ورود / ثبت‌نام</Link></div>
        </div></div>
      </header>

      <HomeHeroV5 />

      <section className={styles.routeSection} aria-labelledby="route-title"><div className={styles.container}>
        <div className={styles.routeHeading}><span>شروع سریع</span><h2 id="route-title">برای چه کاری وارد گندم شدید؟</h2><p>به‌جای جست‌وجوی طولانی، از همان ابتدا وارد مسیر مناسب خودتان شوید.</p></div>
        <div className={styles.routeGrid}>{routes.map(([icon,title,text,action,href]) => <Link href={href} className={styles.routeCard} key={title}><div className={styles.routeIcon}>{icon}</div><div><h3>{title}</h3><p>{text}</p><span>{action} ←</span></div></Link>)}</div>
      </div></section>

      <section className={styles.trustSection} aria-label="مزایای تجربه گندم"><div className={styles.container}><div className={styles.trustRail}>
        {trustItems.map(([image,title,text], index) => <article className={styles.trustItem} key={title}><div className={styles.trustImage}><Image src={image} alt="" fill sizes="80px" /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}
      </div></div></section>

      <section className={styles.catalogSection} id="catalogs"><div className={styles.container}>
        <div className={styles.sectionHeader}><div><span className={styles.eyebrow}>کاتالوگ گندم</span><h2>محصول را بر اساس نیازتان پیدا کنید</h2></div><p>هر کارت شما را به یک کار مشخص می‌رساند؛ دیدن مدل، استعلام، انتخاب وزن یا ورود به مسیر تخصصی.</p></div>
        <div className={styles.categoryGrid}>{categoryCards.map(item => <Link href={item.href} className={`${styles.categoryCard} ${item.localArt ? styles.categoryLocalArt : ""}`} key={item.title}><div className={styles.categoryImage}><Image src={item.image} alt={item.title} fill sizes="(max-width:760px) 100vw,20vw" /></div><div className={styles.categoryOverlay}/><div className={styles.categoryBody}><h3>{item.title}</h3><p>{item.text}</p><span>{item.action} ←</span></div></Link>)}</div>
      </div></section>

      <section className={styles.marketSection} id="market"><div className={styles.container}><div className={styles.marketLayout}>
        <div className={styles.marketIntro}><span className={styles.eyebrow}>قیمت و استعلام</span><h2>عدد قدیمی نشان نمی‌دهیم؛ قیمت باید معتبر باشد</h2><p>تا زمان اتصال فید لحظه‌ای، کاربر به‌جای دیدن قیمت نمایشی، مستقیم به مسیر استعلام همان فلز هدایت می‌شود.</p><div className={styles.marketStatus}><i/> فید قیمت لحظه‌ای در فاز اتصال API</div></div>
        <div className={styles.quoteGrid}>
          <article className={styles.quoteCard}><div className={styles.metalBadge}>Au</div><div><span>طلای ۱۸ عیار و آبشده</span><strong>قیمت معتبر روز</strong><small>بر اساس نوع محصول، وزن و عیار</small></div><Link href="/register?intent=quote&metal=gold">استعلام طلا</Link></article>
          <article className={styles.quoteCard}><div className={`${styles.metalBadge} ${styles.silverBadge}`}>Ag</div><div><span>نقره ۹۹۹، شمش و ساچمه</span><strong>قیمت معتبر روز</strong><small>بر اساس وزن، عیار و نوع سفارش</small></div><Link href="/register?intent=quote&metal=silver">استعلام نقره</Link></article>
        </div>
      </div></div></section>

      <section className={styles.productSection}><div className={styles.container}>
        <div className={styles.productHeading}><div><span className={styles.eyebrow}>ویترین منتخب</span><h2>چند انتخاب برای شروع</h2></div><Link href="/catalog/crafted-gold">مشاهده همه کارهای ساخته</Link></div>
        <CatalogSwiperV5 items={crafted.products} href="/catalog/crafted-gold" inquiryHref="/register?intent=crafted" />
      </div></section>

      <section className={styles.whySection} id="guide"><div className={styles.container}>
        <div className={styles.centerTitle}><span className={styles.eyebrow}>تجربه کاربری</span><h2>چرا مسیر جدید کاربردی‌تر است؟</h2><p>ظاهر لوکس زمانی ارزش دارد که تصمیم گرفتن را برای کاربر آسان‌تر کند.</p></div>
        <div className={styles.whyGrid}>{whyItems.map(([icon,title,text]) => <article className={styles.whyCard} key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className={styles.appSection}><div className={styles.container}><div className={styles.appCard}>
        <div className={styles.phoneScene} aria-hidden="true"><div className={`${styles.phone} ${styles.phoneBack}`}><div className={styles.phoneArt}><Image src={`${assetBase}/gandom-sculpture.webp`} alt="" fill sizes="230px" /></div></div><div className={`${styles.phone} ${styles.phoneFront}`}><div className={styles.phoneUi}><span className={styles.brandSeal}>گ</span><b>گندم</b><small>طلا و نقره، ساده‌تر</small><i/><i/><i/></div></div></div>
        <div className={styles.appCopy}><span className={styles.eyebrow}>وب‌اپ گندم</span><h2>همان مسیر، روی موبایل و بدون شلوغی</h2><p>ورود، استعلام، پیگیری و در ادامه کیف پول و معامله روی همین Design System توسعه پیدا می‌کنند.</p><div className={styles.appBenefits}><span>✓ استعلام و Quote</span><span>✓ پیگیری درخواست</span><span>✓ دسترسی به کاتالوگ</span><span>✓ آماده توسعه معامله</span></div><Link className={styles.appPrimary} href="/register?intent=app">ورود به وب‌اپ</Link></div>
        <div className={styles.qrBox}><Image src={`${assetBase}/gandom-qr.png`} alt="کد QR وب‌اپ گندم" width={118} height={118}/><strong>روی موبایل باز کنید</strong><small>QR مستقیماً به نسخه آنلاین گندم می‌رود.</small></div>
      </div></div></section>

      <section className={styles.faqSection} id="faq"><div className={styles.container}><div className={styles.faqLayout}>
        <aside className={styles.faqIntro}><span className={styles.eyebrow}>سؤالات متداول</span><h2>قبل از اقدام، ابهام را کم کنیم</h2><p>FAQ باید به تصمیم خرید کمک کند، نه اینکه فقط فضای صفحه را پر کند.</p><Link href="/register?intent=consultation">درخواست مشاوره</Link></aside>
        <FAQAccordionV5 />
      </div></div></section>

      <section className={styles.conversionSection} id="contact"><div className={styles.container}><div className={styles.conversionCard}>
        <div><span>هنوز مطمئن نیستید از کجا شروع کنید؟</span><h2>اول محصول را پیدا کنید؛ اگر لازم بود بعد استعلام بگیرید.</h2></div>
        <div className={styles.conversionActions}><a href="#catalogs">مشاهده محصولات</a><Link href="/register?intent=consultation">درخواست تماس و مشاوره</Link></div>
      </div></div></section>

      <footer className={styles.footer}><div className={styles.container}><div className={styles.footerGrid}>
        <div className={styles.footerBrand}><span className={styles.brandSeal}>گ</span><div><strong>گندم</strong><p>ویترین و زیرساخت دیجیتال برای خدمات طلا و نقره.</p></div></div>
        <div><h4>طلا</h4><Link href="/catalog/crafted-gold">کارهای ساخته</Link><Link href="/catalog/melted-gold">طلای آبشده</Link><Link href="/gold">گندم گلد</Link></div>
        <div><h4>نقره</h4><Link href="/catalog/silver-bars">شمش نقره</Link><Link href="/catalog/silver-shot">ساچمه نقره</Link><Link href="/silver">گندم سیلور</Link></div>
        <div><h4>راهنما</h4><a href="#market">قیمت و استعلام</a><a href="#faq">سؤالات متداول</a><Link href="/register">ورود / ثبت‌نام</Link></div>
      </div><div className={styles.footerBottom}>© ۱۴۰۵ گندم — تمامی حقوق محفوظ است.</div></div></footer>

      <div className={styles.mobileActions}><a href="#catalogs">محصولات</a><a href="#market">استعلام قیمت</a></div>
    </main>
  );
}
