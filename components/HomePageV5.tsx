import Link from "next/link";
import { catalogCategories } from "@/data/catalog";
import CatalogSwiperV5 from "./CatalogSwiperV5";
import FAQAccordionV5 from "./FAQAccordionV5";
import HomeHeroV5 from "./HomeHeroV5";
import SafeImage from "./SafeImage";
import styles from "./HomePageV5.module.css";

const routes = [
  { icon: "✦", title: "برای خرید شخصی", text: "بدون ثبت‌نام مدل‌ها را ببینید و فقط برای همان موردی که می‌خواهید استعلام بگیرید.", action: "مشاهده کاتالوگ", href: "#catalogs" },
  { icon: "Au", title: "برای سرمایه‌گذاری", text: "مستقیم سراغ آبشده و شمش بروید و بر اساس وزن، عیار و نوع فلز تصمیم بگیرید.", action: "مسیر سرمایه‌گذاری", href: "/catalog/melted-gold" },
  { icon: "↗", title: "برای همکار بازار", text: "مسیر کوتاه‌تر برای استعلام، Quote و خدمات تخصصی طلا و نقره.", action: "ورود به مسیر همکار", href: "/register?intent=trade" },
];

const trustItems = [
  { image: "/gandom/trust-ring.webp", title: "شفافیت قبل از خرید", text: "مدل و مسیر اقدام را قبل از ثبت درخواست ببینید", kind: "medallion" },
  { image: "/gandom/iran-shipping.webp", title: "مسیر ارسال روشن", text: "ارسال و پیگیری در فرایند مشخص می‌شود", kind: "medallion" },
  { image: "/gandom/showcase-jewelry.webp", title: "انتخاب حرفه‌ای", text: "کاتالوگ دسته‌بندی‌شده به‌جای لیست شلوغ", kind: "medallion" },
  { image: "/gandom/gandom-sculpture.webp", title: "یک تجربه یکپارچه", text: "گندم گلد و سیلور زیر یک زبان بصری", kind: "sculpture" },
];

const categoryCards = [
  { title: "کارهای ساخته و ویترینی", text: "انگشتر، دستبند، گوشواره، گردنبند و مدل‌های منتخب.", image: "/gandom/showcase-jewelry.webp", href: "/catalog/crafted-gold", action: "دیدن مدل‌ها", kind: "medallion" },
  { title: "طلای آبشده", text: "وزن، عیار و مسیر استعلام برای خرید حرفه‌ای و سرمایه‌گذاری.", image: "/gandom/catalog-melted.svg", href: "/catalog/melted-gold", action: "مشاهده آبشده", kind: "technical" },
  { title: "شمش نقره", text: "وزن‌های مختلف شمش نقره برای سرمایه‌گذاری و سفارش حرفه‌ای.", image: "/gandom/catalog-silver-bars.svg", href: "/catalog/silver-bars", action: "دیدن وزن‌ها", kind: "technical" },
  { title: "ساچمه نقره", text: "دانه‌بندی و بسته‌بندی‌های مختلف برای کارگاه و سفارش عمده.", image: "/gandom/catalog-silver-shot.svg", href: "/catalog/silver-shot", action: "مشاهده ساچمه", kind: "technical" },
];

const whyItems = [
  { icon: "01", title: "کمترین اصطکاک", text: "برای دیدن محصول ثبت‌نام لازم نیست؛ ثبت اطلاعات فقط در لحظه استعلام یا خرید می‌آید." },
  { icon: "02", title: "CTA متناسب با تصمیم", text: "کاتالوگ، استعلام، سرمایه‌گذاری و همکاری هرکدام اقدام بعدی روشن خودشان را دارند." },
  { icon: "03", title: "تصویر پایدار و محلی", text: "تصاویر اصلی از داخل پروژه سرو می‌شوند و اگر مشکلی رخ دهد fallback برند نمایش داده می‌شود." },
  { icon: "04", title: "موبایل‌فرست واقعی", text: "نسبت تصویر، اندازه لمس، اکشن‌های پایین صفحه و ترتیب محتوا برای موبایل بازطراحی شده‌اند." },
];

export default function HomePageV5() {
  const crafted = catalogCategories[0];

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <Link className={styles.brand} href="/" aria-label="گندم - صفحه اصلی">
              <span className={styles.brandSeal}>گ</span>
              <span><strong>گندم</strong><small>GANDOM GOLD · SILVER</small></span>
            </Link>
            <nav className={styles.nav} aria-label="ناوبری اصلی">
              <a href="#catalogs">کاتالوگ</a><a href="#market">قیمت و استعلام</a><Link href="/gold">گندم گلد</Link><Link href="/silver">گندم سیلور</Link><a href="#faq">راهنما</a>
            </nav>
            <div className={styles.headerActions}>
              <a className={styles.headerQuote} href="#market">استعلام قیمت</a>
              <Link className={styles.headerLogin} href="/register?intent=trade">همکار بازار</Link>
            </div>
          </div>
        </div>
      </header>

      <HomeHeroV5 />

      <section className={styles.routeSection} aria-labelledby="route-title">
        <div className={styles.container}>
          <div className={styles.routeHeading}>
            <span>شروع سریع</span><h2 id="route-title">برای چه کاری وارد گندم شدید؟</h2><p>از همان ابتدا وارد مسیر مناسب شوید؛ بدون کلیک اضافه و فرم زودهنگام.</p>
          </div>
          <div className={styles.routeGrid}>
            {routes.map((item) => <Link href={item.href} className={styles.routeCard} key={item.title}><div className={styles.routeIcon}>{item.icon}</div><div><h3>{item.title}</h3><p>{item.text}</p><span>{item.action} ←</span></div></Link>)}
          </div>
        </div>
      </section>

      <section className={styles.trustSection} aria-label="مزایای تجربه گندم">
        <div className={styles.container}><div className={styles.trustRail}>
          {trustItems.map((item) => <article className={styles.trustItem} key={item.title}><div className={`${styles.trustImage} ${item.kind === "sculpture" ? styles.trustSculpture : ""}`}><SafeImage src={item.image} alt="" className={styles.fillImage} /></div><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
        </div></div>
      </section>

      <section className={styles.catalogSection} id="catalogs">
        <div className={styles.container}>
          <div className={styles.sectionHeader}><div><span className={styles.eyebrow}>کاتالوگ گندم</span><h2>محصول را بر اساس نیازتان پیدا کنید</h2></div><p>هر کارت یک مقصد مشخص دارد؛ مدل، وزن، عیار یا دانه‌بندی را ببینید و بعد اقدام کنید.</p></div>
          <div className={styles.categoryGrid}>
            {categoryCards.map((item) => <Link href={item.href} className={styles.categoryCard} key={item.title}>
              <div className={`${styles.categoryImage} ${item.kind === "medallion" ? styles.categoryMedallion : styles.categoryTechnical}`}><SafeImage src={item.image} alt={item.title} className={styles.fillImage} /></div>
              <div className={styles.categoryBody}><h3>{item.title}</h3><p>{item.text}</p><span>{item.action} ←</span></div>
            </Link>)}
          </div>
          <div className={styles.catalogHint}>مشاهده کاتالوگ آزاد است؛ ثبت اطلاعات فقط برای استعلام، سفارش یا عضویت همکار انجام می‌شود.</div>
        </div>
      </section>

      <section className={styles.marketSection} id="market">
        <div className={styles.container}><div className={styles.marketLayout}>
          <div className={styles.marketIntro}><span className={styles.eyebrow}>قیمت و استعلام</span><h2>قیمت باید معتبر باشد، نه صرفاً یک عدد روی صفحه</h2><p>تا اتصال فید لحظه‌ای، عدد ساختگی نمایش نمی‌دهیم. کاربر مستقیم وارد استعلام همان فلز می‌شود.</p><div className={styles.marketStatus}><i /> آماده اتصال به API قیمت لحظه‌ای</div></div>
          <div className={styles.quoteGrid}>
            <article className={styles.quoteCard}><div className={styles.metalBadge}>Au</div><div><span>طلا و آبشده</span><strong>استعلام بر اساس نیاز</strong><small>وزن، عیار و نوع محصول</small></div><Link href="/register?intent=quote&metal=gold">استعلام طلا</Link></article>
            <article className={styles.quoteCard}><div className={`${styles.metalBadge} ${styles.silverBadge}`}>Ag</div><div><span>شمش و ساچمه نقره</span><strong>استعلام بر اساس وزن</strong><small>عیار، وزن و نوع سفارش</small></div><Link href="/register?intent=quote&metal=silver">استعلام نقره</Link></article>
          </div>
        </div></div>
      </section>

      <section className={styles.productSection}>
        <div className={styles.container}><div className={styles.productHeading}><div><span className={styles.eyebrow}>ویترین منتخب</span><h2>چند انتخاب برای شروع</h2></div><Link href="/catalog/crafted-gold">همه کارهای ساخته</Link></div><CatalogSwiperV5 items={crafted.products} href="/catalog/crafted-gold" inquiryHref="/register?intent=crafted&metal=gold" /></div>
      </section>

      <section className={styles.whySection} id="guide">
        <div className={styles.container}><div className={styles.centerTitle}><span className={styles.eyebrow}>تجربه کاربری</span><h2>ظاهر حرفه‌ای باید کار را هم ساده‌تر کند</h2><p>طراحی جدید فقط تزئین نیست؛ هدفش کم‌کردن اصطکاک و رساندن کاربر به قدم درست است.</p></div><div className={styles.whyGrid}>{whyItems.map((item) => <article className={styles.whyCard} key={item.title}><span>{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div>
      </section>

      <section className={styles.appSection}>
        <div className={styles.container}><div className={styles.appCard}>
          <div className={styles.phoneScene} aria-hidden="true"><div className={`${styles.phone} ${styles.phoneBack}`}><div className={styles.phoneArt}><SafeImage src="/gandom/gandom-sculpture.webp" alt="" className={styles.fillImage} /></div></div><div className={`${styles.phone} ${styles.phoneFront}`}><div className={styles.phoneUi}><span className={styles.brandSeal}>گ</span><b>گندم</b><small>طلا و نقره، ساده‌تر</small><i /><i /><i /></div></div></div>
          <div className={styles.appCopy}><span className={styles.eyebrow}>وب‌اپ گندم</span><h2>همان مسیر، روی موبایل و بدون شلوغی</h2><p>ورود، استعلام، پیگیری و در ادامه کیف پول و معامله روی همین Design System توسعه پیدا می‌کنند.</p><div className={styles.appBenefits}><span>✓ استعلام و Quote</span><span>✓ پیگیری درخواست</span><span>✓ کاتالوگ سریع</span><span>✓ آماده توسعه معامله</span></div><Link className={styles.appPrimary} href="/register?intent=app">ورود به وب‌اپ</Link></div>
          <div className={styles.qrBox}><SafeImage src="/gandom/gandom-qr.png" alt="کد QR وب‌اپ گندم" className={styles.qrImage} /><strong>روی موبایل باز کنید</strong><small>QR مستقیماً به نسخه آنلاین گندم می‌رود.</small></div>
        </div></div>
      </section>

      <section className={styles.faqSection} id="faq"><div className={styles.container}><div className={styles.faqLayout}><aside className={styles.faqIntro}><span className={styles.eyebrow}>سؤالات متداول</span><h2>قبل از اقدام، ابهام را کم کنیم</h2><p>جواب سؤال‌های اصلی باید قبل از فرم و تماس جلوی کاربر باشد.</p><Link href="/register?intent=consultation">درخواست مشاوره</Link></aside><FAQAccordionV5 /></div></div></section>

      <section className={styles.conversionSection}><div className={styles.container}><div className={styles.conversionCard}><div><span>هنوز مطمئن نیستید از کجا شروع کنید؟</span><h2>اول کاتالوگ را ببینید؛ بعد فقط برای موردی که می‌خواهید استعلام بگیرید.</h2></div><div className={styles.conversionActions}><a href="#catalogs">مشاهده کاتالوگ</a><Link href="/register?intent=consultation">مشاوره انتخاب</Link></div></div></div></section>

      <footer className={styles.footer}><div className={styles.container}><div className={styles.footerGrid}><div className={styles.footerBrand}><span className={styles.brandSeal}>گ</span><div><strong>گندم</strong><p>ویترین و زیرساخت دیجیتال برای خدمات طلا و نقره.</p></div></div><div><h4>طلا</h4><Link href="/catalog/crafted-gold">کارهای ساخته</Link><Link href="/catalog/melted-gold">طلای آبشده</Link><Link href="/gold">گندم گلد</Link></div><div><h4>نقره</h4><Link href="/catalog/silver-bars">شمش نقره</Link><Link href="/catalog/silver-shot">ساچمه نقره</Link><Link href="/silver">گندم سیلور</Link></div><div><h4>اقدام</h4><a href="#market">استعلام قیمت</a><Link href="/register?intent=trade">همکار بازار</Link><Link href="/register?intent=consultation">مشاوره</Link></div></div><div className={styles.footerBottom}>© ۱۴۰۵ گندم — تمامی حقوق محفوظ است.</div></div></footer>

      <div className={styles.mobileActions}><a href="#catalogs">کاتالوگ</a><a href="#market">استعلام قیمت</a></div>
    </main>
  );
}
