import Link from "next/link";

const stats = [
  { label: "دسترسی سریع", value: "۲۴/۷" },
  { label: "محصولات پایه", value: "۵+" },
  { label: "مسیرهای کاربری", value: "۲" },
  { label: "سطح خدمات", value: "حرفه‌ای" },
];

const appFeatures = [
  "نمایش محصولات سرمایه‌ای و زینتی",
  "امکان توسعه استعلام و Quote",
  "آماده برای کیف پول، سفارش و احراز هویت",
];

const guideSteps = [
  "ثبت اطلاعات اولیه",
  "تکمیل احراز و تأیید حساب",
  "دسترسی به خدمات گندم گلد",
];

const faqs = [
  "آیا خدمات گندم گلد فقط برای همکاران است؟",
  "امکان خرید برای مشتری خانگی هم وجود دارد؟",
  "آیا قیمت‌ها لحظه‌ای خواهند شد؟",
  "بعداً امکان سفارش و معامله آنلاین هم اضافه می‌شود؟",
];

export default function GoldPage() {
  return (
    <main className="subpage-shell">
      <header className="topbar slim-topbar">
        <div className="container topbar-inner">
          <Link href="/" className="back-button">بازگشت</Link>
          <div className="brand-block">
            <div className="brand-copy"><strong>گندم گلد</strong><span>مسیر تخصصی خدمات طلا</span></div>
            <div className="brand-mark">گ</div>
          </div>
        </div>
      </header>

      <section className="metal-hero-section gold-theme">
        <div className="container metal-hero-grid">
          <div className="metal-copy">
            <div className="section-badge">GANDOM GOLD</div>
            <h1>گندم گلد</h1>
            <p>بستری برای نمایش و توسعه خدمات طلا، آب‌شده، شمش، سکه و محصولات منتخب؛ با زبان طراحی لوکس و تجربه‌ای نزدیک به نمونه‌های مرجع.</p>
            <Link href="/register" className="cta-button gold-btn">عضویت در گندم گلد</Link>
          </div>
          <div className="stairs-visual gold-visual">
            <div className="stairs-stack"><span/><span/><span/><span/><span/></div>
            <div className="coin-emblem">Au</div>
          </div>
        </div>
      </section>

      <section className="section-block white-block">
        <div className="container gold-stats-layout">
          <div className="stats-grid">
            {stats.map((item) => <article key={item.label} className="stat-card"><span>{item.label}</span><strong>{item.value}</strong></article>)}
          </div>
          <div className="stats-copy"><h2>چرا گندم گلد؟</h2><p>صفحه گندم گلد با ساختار چندبخشی طراحی شده تا هم مسیر آشنایی اولیه را پوشش دهد و هم آماده توسعه به یک سرویس کامل‌تر برای استعلام، سفارش و معامله باشد.</p></div>
        </div>
      </section>

      <section className="section-block white-block">
        <div className="container split-section feature-split">
          <div>
            <div className="section-badge">ویژگی‌ها</div>
            <h2>چرا گندم گلد برای شما ساخته شده است</h2>
            <p>ظاهر این صفحه بر پایه ساختار تصویری و باکس‌بندی‌شده‌ی مرجع بازطراحی شده؛ با کنتراست بهتر، فونت فارسی مناسب و فاصله‌گذاری حرفه‌ای.</p>
            <ul className="feature-list">{appFeatures.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="phone-visual gold-phone"><div className="phone-frame"><div className="phone-screen gold-screen"><div className="screen-logo">گ</div></div></div></div>
        </div>
      </section>

      <section className="section-block soft-block">
        <div className="container split-section guide-split">
          <div className="phone-visual minimal-phone"><div className="phone-frame outlined-phone"><div className="phone-screen pale-screen"><div className="line-loader"/></div></div></div>
          <div>
            <div className="section-badge">راهنمای شروع</div>
            <h2>راهنمای خرید از گندم گلد</h2>
            <div className="guide-list">
              {guideSteps.map((item,index)=><div key={item} className="guide-item"><span>{index+1}</span><div><h3>{item}</h3><p>این مرحله برای هدایت کاربر به صورت شفاف و قابل فهم طراحی شده است.</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block white-block">
        <div className="container faq-layout">
          <div className="section-heading center-text narrow"><div className="section-badge">سؤالات متداول</div><h2>پرسش‌های پرتکرار کاربران</h2></div>
          <div className="faq-listing">{faqs.map((item)=><article key={item} className="faq-row"><span>+</span><p>{item}</p></article>)}</div>
        </div>
      </section>

      <section className="section-block white-block about-block">
        <div className="container prose-section">
          <div className="section-badge">درباره ما</div>
          <h2>گندم گلد؛ پایه‌ای برای یک تجربه قابل اعتماد</h2>
          <p>در این بازطراحی، هدف اصلی این بود که صفحه از حالت ساده و خام قبلی خارج شود و به ساختاری برسد که از نظر بصری، سلسله‌مراتب محتوا، فاصله‌گذاری، رنگ، تایپوگرافی و حس حرفه‌ای بودن به نمونه‌های مرجع نزدیک باشد.</p>
          <p>این صفحه حالا می‌تواند هم نقش Landing Page حرفه‌ای را بازی کند و هم در فاز بعدی به راحتی به APIهای واقعی، جریان ثبت‌نام، استعلام قیمت و سرویس‌های مالی متصل شود.</p>
        </div>
      </section>

      <section className="download-cta gold-download">
        <div className="container download-grid">
          <div><div className="section-badge">شروع همکاری</div><h2>برای شروع کافی است ثبت‌نام کنید</h2><p>نسخه بعدی این مسیر می‌تواند OTP، KYC، کیف پول و معامله را هم به‌صورت واقعی ارائه کند.</p></div>
          <Link href="/register" className="cta-button gold-btn">ثبت‌نام در گندم</Link>
        </div>
      </section>
    </main>
  );
}
