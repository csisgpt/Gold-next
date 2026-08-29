import Link from "next/link";
import SafeImage from "./SafeImage";
import styles from "./HomePageV7.module.css";

const paths = [
  { mark: "✦", title: "خرید شخصی", text: "اول مدل‌ها را ببینید؛ برای دیدن کاتالوگ ثبت‌نام لازم نیست.", href: "/catalog/crafted-gold", cta: "دیدن کارهای ساخته" },
  { mark: "Au", title: "سرمایه‌گذاری", text: "آبشده، شمش و وزن‌های مختلف را مستقیم مقایسه کنید.", href: "/catalog/melted-gold", cta: "ورود به مسیر سرمایه‌گذاری" },
  { mark: "↗", title: "همکار بازار", text: "مسیر کوتاه برای استعلام، Quote و خدمات تخصصی.", href: "/register?intent=trade", cta: "ورود همکار" },
];

const categories = [
  { title: "کارهای ساخته", text: "انگشتر، دستبند، گردنبند و مدل‌های ویترینی", image: "/gandom/hero-gold.svg", href: "/catalog/crafted-gold" },
  { title: "طلای آبشده", text: "وزن، عیار و استعلام حرفه‌ای", image: "/gandom/catalog-melted.svg", href: "/catalog/melted-gold" },
  { title: "شمش نقره", text: "وزن‌های مختلف شمش ۹۹۹", image: "/gandom/catalog-silver-bars.svg", href: "/catalog/silver-bars" },
  { title: "ساچمه نقره", text: "ریز، متوسط، درشت و سفارش عمده", image: "/gandom/catalog-silver-shot.svg", href: "/catalog/silver-shot" },
];

const faqs = [
  ["برای دیدن محصولات باید ثبت‌نام کنم؟", "خیر. کاتالوگ آزاد است و ثبت اطلاعات فقط هنگام استعلام، سفارش یا عضویت همکار انجام می‌شود."],
  ["قیمت‌ها لحظه‌ای هستند؟", "تا اتصال فید واقعی، عدد ساختگی نمایش نمی‌دهیم و مسیر استعلام معتبر را جلوی کاربر می‌گذاریم."],
  ["گندم برای مشتری خانگی هم مناسب است؟", "بله. مسیر خرید شخصی از مسیر همکار بازار جدا طراحی شده تا کاربر با گزینه‌های اضافی درگیر نشود."],
];

export default function HomePageV7() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.brand}><span className={styles.logo}>گ</span><span><b>گندم</b><small>GANDOM GOLD · SILVER</small></span></Link>
            <nav className={styles.nav}><a href="#catalogs">محصولات</a><a href="#paths">مسیر خرید</a><Link href="/gold">گندم گلد</Link><Link href="/silver">گندم سیلور</Link><a href="#faq">راهنما</a></nav>
            <div className={styles.headerActions}><a href="#quote" className={styles.secondaryButton}>استعلام قیمت</a><Link href="/register?intent=trade" className={styles.primaryButton}>همکار بازار</Link></div>
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>بازار هوشمند طلا و نقره</span>
            <h1>طلا و نقره را<br/><em>واضح‌تر انتخاب کنید.</em></h1>
            <p>مدل، نوع محصول و مسیر خرید را قبل از هر فرم و تماس ببینید. گندم برای خرید شخصی، سرمایه‌گذاری و همکار بازار سه مسیر جدا دارد.</p>
            <div className={styles.heroActions}><a href="#catalogs" className={styles.goldButton}>مشاهده محصولات</a><a href="#quote" className={styles.outlineButton}>استعلام قیمت امروز</a></div>
            <div className={styles.proof}><span><b>بدون ثبت‌نام</b><small>مشاهده کاتالوگ</small></span><span><b>تصاویر local</b><small>بدون وابستگی خارجی</small></span><span><b>مسیر مشخص</b><small>خرید یا همکاری</small></span></div>
          </div>
          <div className={styles.heroImageWrap}><SafeImage src="/gandom/hero-gold.svg" alt="زیورآلات طلای گندم" className={styles.heroImage}/><span className={styles.imageCaption}>GANDOM CRAFTED</span></div>
        </div>
      </section>

      <section className={styles.pathsSection} id="paths"><div className={styles.container}><div className={styles.sectionHead}><span>شروع سریع</span><h2>برای چه کاری وارد گندم شدید؟</h2><p>همان اول وارد مسیر درست شوید؛ بدون فرم زودهنگام و کلیک اضافه.</p></div><div className={styles.pathGrid}>{paths.map(item => <Link href={item.href} className={styles.pathCard} key={item.title}><div className={styles.pathMark}>{item.mark}</div><div><h3>{item.title}</h3><p>{item.text}</p><span>{item.cta} ←</span></div></Link>)}</div></div></section>

      <section className={styles.catalogSection} id="catalogs"><div className={styles.container}><div className={styles.catalogHeader}><div><span className={styles.eyebrow}>کاتالوگ گندم</span><h2>محصول را از روی نیاز پیدا کنید</h2></div><p>چهار دسته روشن؛ بدون عکس‌های تصادفی و بدون لینک خارجی.</p></div><div className={styles.categoryGrid}>{categories.map(item => <Link href={item.href} className={styles.categoryCard} key={item.title}><div className={styles.categoryImage}><SafeImage src={item.image} alt={item.title}/></div><div className={styles.categoryBody}><h3>{item.title}</h3><p>{item.text}</p><span>مشاهده دسته ←</span></div></Link>)}</div></div></section>

      <section className={styles.showcaseSection}><div className={`${styles.container} ${styles.showcaseGrid}`}><div className={styles.showcaseImage}><SafeImage src="/gandom/hero-investment.svg" alt="طلای سرمایه‌ای و زیورآلات گندم"/></div><div className={styles.showcaseCopy}><span className={styles.eyebrow}>برای تصمیم حرفه‌ای‌تر</span><h2>سرمایه‌گذاری و خرید شخصی را قاطی نمی‌کنیم.</h2><p>کسی که دنبال یک انگشتر یا هدیه است نیاز متفاوتی با کسی دارد که آبشده یا شمش می‌خواهد. طراحی گندم این دو تجربه را از همان صفحه اول جدا می‌کند.</p><div className={styles.showcaseActions}><Link href="/catalog/crafted-gold">خرید شخصی</Link><Link href="/catalog/melted-gold">مسیر سرمایه‌گذاری</Link></div></div></div></section>

      <section className={styles.quoteSection} id="quote"><div className={styles.container}><div className={styles.quoteCard}><div><span className={styles.eyebrow}>قیمت و استعلام</span><h2>عدد قدیمی نشان نمی‌دهیم.</h2><p>تا وقتی API قیمت واقعی وصل نشده، کاربر مستقیماً استعلام همان فلز را ثبت می‌کند.</p></div><div className={styles.quoteActions}><Link href="/register?intent=quote&metal=gold"><b>Au</b><span>استعلام طلا</span><small>آبشده و مصنوعات</small></Link><Link href="/register?intent=quote&metal=silver"><b>Ag</b><span>استعلام نقره</span><small>شمش و ساچمه</small></Link></div></div></div></section>

      <section className={styles.faqSection} id="faq"><div className={styles.container}><div className={styles.sectionHead}><span>راهنما</span><h2>قبل از اقدام، ابهام را کم کنیم.</h2></div><div className={styles.faqGrid}>{faqs.map(([q,a]) => <details key={q} className={styles.faqItem}><summary>{q}<i>+</i></summary><p>{a}</p></details>)}</div></div></section>

      <section className={styles.finalCta}><div className={styles.container}><div className={styles.finalCard}><div><span>شروع ساده‌تر</span><h2>اول محصول را ببینید؛ بعد تصمیم بگیرید.</h2></div><div><a href="#catalogs">مشاهده کاتالوگ</a><Link href="/register?intent=consultation">مشاوره انتخاب</Link></div></div></div></section>

      <footer className={styles.footer}><div className={styles.container}><div className={styles.footerGrid}><div className={styles.footerBrand}><span className={styles.logo}>گ</span><div><b>گندم</b><p>ویترین و زیرساخت دیجیتال طلا و نقره.</p></div></div><div><h4>طلا</h4><Link href="/catalog/crafted-gold">کارهای ساخته</Link><Link href="/catalog/melted-gold">طلای آبشده</Link></div><div><h4>نقره</h4><Link href="/catalog/silver-bars">شمش نقره</Link><Link href="/catalog/silver-shot">ساچمه نقره</Link></div><div><h4>اقدام</h4><a href="#quote">استعلام قیمت</a><Link href="/register?intent=trade">همکار بازار</Link></div></div><div className={styles.copyright}>© ۱۴۰۵ گندم — تمامی حقوق محفوظ است.</div></div></footer>

      <div className={styles.mobileBar}><a href="#catalogs">محصولات</a><a href="#quote">استعلام قیمت</a></div>
    </main>
  );
}
