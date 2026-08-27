import Image from "next/image";
import Link from "next/link";
import CatalogSwiper from "@/components/CatalogSwiper";
import FAQAccordion from "@/components/FAQAccordion";
import { catalogCategories } from "@/data/catalog";
import HomeHeroV4 from "./HomeHeroV4";
import styles from "./HomePageV4.module.css";

const asset = (name: string) => `https://raw.githubusercontent.com/csisgpt/Gold-next/gandom-site/public/gandom/${name}`;

const trustRail = [
  { image: asset("trust-ring.webp"), title: "اعتماد و اصالت", text: "ضمانت اصالت کالا و بازگشت وجه" },
  { image: asset("iran-shipping.webp"), title: "ارسال امن سراسری", text: "ارسال سریع و بسته‌بندی مطمئن" },
  { image: asset("showcase-jewelry.webp"), title: "محصولات منتخب", text: "انتخاب دقیق با تمرکز روی کیفیت" },
  { image: asset("gandom-sculpture.webp"), title: "طراحی فاخر", text: "تجربه‌ای متفاوت و یکپارچه" },
];

const market = [
  { title: "طلای ۱۸ عیار", value: "۴,۲۸۸,۰۰۰", unit: "تومان / گرم", delta: "+۰.۸٪", kind: "gold" },
  { title: "نقره ۹۹۹", value: "۹۸,۷۵۰", unit: "تومان / گرم", delta: "+۱.۲٪", kind: "silver" },
];

const why = [
  { icon: "↗", title: "قیمت شفاف و منصفانه", text: "قیمت‌گذاری بر اساس نرخ روز بازار و بدون ابهام در مسیر خرید." },
  { icon: "◇", title: "خرید امن و مطمئن", text: "اطلاعات روشن محصول، ضمانت اصالت و مسیر پیگیری بعد از خرید." },
  { icon: "◉", title: "پشتیبانی واقعی", text: "قبل و بعد از خرید کنار شما هستیم؛ برای استعلام، سفارش و پیگیری." },
  { icon: "●", title: "مناسب همه مشتریان", text: "مسیر ساده برای مشتری خانگی و ساختار تخصصی برای همکار بازار." },
];

const categoryCards = [
  { title: "کارهای ساخته و ویترینی", text: "انواع زیورآلات دست‌ساز و کارهای ویترینی", href: "/catalog/crafted-gold", image: asset("showcase-jewelry.webp"), tone: "gold" },
  { title: "آبشده طلا", text: "طلای آبشده با عیار و استعلام دقیق", href: "/catalog/melted-gold", image: catalogCategories[1].image, tone: "gold" },
  { title: "شمش نقره", text: "شمش‌های استاندارد نقره در وزن‌های مختلف", href: "/catalog/silver-bars", image: catalogCategories[2].image, tone: "silver" },
  { title: "ساچمه نقره", text: "ساچمه نقره برای مصرف صنعتی و سرمایه‌ای", href: "/catalog/silver-shot", image: catalogCategories[3].image, tone: "silver" },
  { title: "زیورآلات", text: "طلا و نقره برای سلیقه‌های متفاوت", href: "/catalog/crafted-gold", image: asset("showcase-jewelry.webp"), tone: "gold" },
];

export default function HomePageV4() {
  const crafted = catalogCategories[0];
  const qr = asset("gandom-qr.png");
  const sculpture = asset("gandom-sculpture.webp");

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <Link className={styles.brand} href="/"><span className={styles.brandSeal}>گ</span><strong>گندم</strong></Link>
            <nav className={styles.nav}>
              <a className={styles.activeNav} href="#home">خانه</a><Link href="/gold">گندم گلد</Link><Link href="/silver">گندم سیلور</Link><a href="#catalogs">محصولات</a><a href="#guide">راهنما</a><a href="#faq">سؤالات متداول</a><a href="#contact">تماس با ما</a>
            </nav>
            <div className={styles.headerActions}><Link className={styles.loginButton} href="/register">ثبت‌نام / ورود</Link><a className={styles.productsButton} href="#catalogs">مشاهده محصولات</a></div>
          </div>
        </div>
      </header>

      <div id="home"><HomeHeroV4 /></div>

      <section className={styles.trustWrap} aria-label="مزایای گندم"><div className={styles.container}><div className={styles.trustRail}>{trustRail.map((item) => <article key={item.title} className={styles.trustItem}><div className={styles.trustImage}><Image src={item.image} alt={item.title} fill sizes="110px" /></div><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>

      <section className={styles.catalogSection} id="catalogs"><div className={styles.container}>
        <div className={styles.sectionTitle}><span /><h2>دسته‌بندی محصولات</h2><span /></div>
        <div className={styles.categoryGrid}>{categoryCards.map((item) => <Link key={item.title} href={item.href} className={`${styles.categoryCard} ${item.tone === "silver" ? styles.silverCard : ""}`}><div className={styles.categoryImage}><Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 50vw, 20vw" /></div><div className={styles.categoryCopy}><h3>{item.title}</h3><p>{item.text}</p><span>مشاهده محصولات ←</span></div></Link>)}</div>
        <div className={styles.marketRow}>
          <div className={styles.marketPanel}><div className={styles.marketHeader}><h3>نرخ‌های بازار</h3><span>آخرین بروزرسانی: ۱۱:۳۰</span></div><div className={styles.marketCards}>{market.map((item) => <article key={item.title} className={styles.marketCard}><div className={styles.marketMetal}>{item.kind === "gold" ? "Au" : "Ag"}</div><div><span>{item.title}</span><strong>{item.value}</strong><small>{item.unit}</small></div><em>{item.delta}</em></article>)}</div></div>
          <div className={styles.livePanel}><div className={styles.chartArt} aria-hidden="true"><span /><span /><span /><span /><span /><i /></div><div className={styles.liveCopy}><h3>قیمت‌ها را لحظه‌ای دنبال کنید</h3><p>نرخ‌های جهانی و داخلی طلا و نقره را به‌صورت لحظه‌ای دنبال کنید و بهترین زمان خرید را از دست ندهید.</p><Link href="/register">مشاهده نمودارها</Link></div></div>
        </div>
      </div></section>

      <section className={styles.sliderSection}><div className={styles.container}><div className={styles.sliderHeading}><div><span className={styles.microLabel}>ویترین منتخب</span><h2>محصولات پیشنهادی گندم</h2></div><Link href="/catalog/crafted-gold">مشاهده همه</Link></div><div className={styles.catalogSwiperWrap}><CatalogSwiper items={crafted.products} href="/catalog/crafted-gold" /></div></div></section>

      <section className={styles.whySection} id="guide"><div className={styles.container}><div className={styles.sectionTitle}><span /><h2>چرا گندم؟</h2><span /></div><div className={styles.whyGrid}>{why.map((item) => <article key={item.title} className={styles.whyCard}><div className={styles.whyIcon}>{item.icon}</div><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>

      <section className={styles.appSection}><div className={styles.container}><div className={styles.appCard}>
        <div className={styles.phoneScene}><div className={`${styles.phone} ${styles.phoneBack}`}><div className={styles.phoneScreen}><Image src={sculpture} alt="اپ گندم" fill sizes="220px" /></div></div><div className={`${styles.phone} ${styles.phoneFront}`}><div className={styles.phoneScreen}><div className={styles.phoneUi}><span className={styles.brandSeal}>گ</span><b>گندم</b><small>بازار امن طلا و نقره</small><i /><i /><i /></div></div></div></div>
        <div className={styles.appCopy}><span className={styles.microLabel}>با اپلیکیشن گندم</span><h2>تجربه‌ای بهتر داشته باشید</h2><div className={styles.appBenefits}><span>✓ دسترسی سریع و بدون پیچیدگی</span><span>✓ پیگیری سفارش‌ها و وضعیت ارسال</span><span>✓ نرخ‌های لحظه‌ای و اعلان تغییر قیمت</span><span>✓ محصولات منتخب و پیشنهادهای ویژه</span></div></div>
        <div className={styles.downloadBox}><h3>دانلود اپلیکیشن گندم</h3><p>همین حالا برای تجربه سریع‌تر و حرفه‌ای‌تر وارد وب‌اپ شوید.</p><Image src={qr} alt="QR گندم" width={116} height={116} /><div className={styles.storeButtons}><a href="#">بازار</a><a href="#">مایکت</a></div></div>
      </div></div></section>

      <section className={styles.faqSection} id="faq"><div className={styles.container}><div className={styles.sectionTitle}><span /><h2>سؤالات متداول</h2><span /></div><div className={styles.faqWrap}><FAQAccordion /></div></div></section>

      <section className={styles.contactStrip} id="contact"><div className={styles.container}><div className={styles.contactInner}><div className={styles.contactBrand}><span className={styles.brandSeal}>گ</span><strong>گندم</strong></div><div className={styles.contactTrust}><span>◇</span><b>ضمانت اصالت کالا</b></div><div className={styles.contactTrust}><span>▰</span><b>ارسال بیمه‌شده</b></div><div className={styles.contactCta}><span>برای خرید یا مشاوره رایگان با ما در ارتباط باشید</span><a href="tel:+982191900000">تماس با ما</a></div><div className={styles.phoneNumber}>۰۲۱-۹۱۹۰۰۰۰۰</div></div></div></section>

      <footer className={styles.footer}><div className={styles.container}><div className={styles.footerGrid}><div><h4>درباره گندم</h4><p>بازار امن و هوشمند خرید و فروش طلا و نقره با تجربه‌ای شفاف، زیبا و قابل اعتماد.</p></div><div><h4>دسترسی سریع</h4><Link href="/gold">گندم گلد</Link><Link href="/silver">گندم سیلور</Link><Link href="/register">عضویت</Link></div><div><h4>راهنما</h4><a href="#faq">سؤالات متداول</a><a href="#catalogs">محصولات</a><a href="#contact">ارتباط با ما</a></div><div><h4>همراه ما باشید</h4><p>شبکه‌های اجتماعی و مسیرهای ارتباطی مجموعه در نسخه عملیاتی از پنل قابل مدیریت خواهند بود.</p></div></div><div className={styles.footerBottom}>© ۱۴۰۵ گندم — تمامی حقوق محفوظ است.</div></div></footer>
    </main>
  );
}
