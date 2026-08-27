import Link from "next/link";

const silverCards = [
  { title: "شمش نقره", text: "برای کاربران سرمایه‌ای و خریدهای مطمئن با نمایش ساختاریافته و حرفه‌ای." },
  { title: "ساچمه نقره", text: "مناسب نیازهای تخصصی‌تر و سفارش‌های بازار و کارگاهی." },
  { title: "نقره زینتی", text: "برای کاربران خانگی با دسته‌بندی ساده، جذاب و قابل درک." },
];

export default function SilverPage() {
  return (
    <main className="subpage-shell silver-page-shell">
      <header className="topbar slim-topbar">
        <div className="container topbar-inner">
          <Link href="/" className="back-button">بازگشت</Link>
          <div className="brand-block">
            <div className="brand-copy"><strong>گندم سیلور</strong><span>مسیر تخصصی خدمات نقره</span></div>
            <div className="brand-mark silver-mark">گ</div>
          </div>
        </div>
      </header>

      <section className="metal-hero-section silver-theme">
        <div className="container metal-hero-grid reverse-grid">
          <div className="stairs-visual silver-visual">
            <div className="silver-rings"><span/><span/><span/></div>
            <div className="coin-emblem silver-emblem">Ag</div>
          </div>
          <div className="metal-copy">
            <div className="section-badge silver-badge">GANDOM SILVER</div>
            <h1>گندم سیلور</h1>
            <p>صفحه مستقل نقره با هویت بصری متفاوت اما هماهنگ با برند گندم؛ مناسب مشتری خانگی، سفارش‌های عمده و خدمات توسعه‌پذیر آینده.</p>
            <Link href="/register" className="cta-button silver-btn-outline">عضویت در گندم سیلور</Link>
          </div>
        </div>
      </section>

      <section className="section-block white-block">
        <div className="container">
          <div className="section-heading center-text narrow">
            <div className="section-badge silver-badge">محصولات و خدمات</div>
            <h2>چیدمان حرفه‌ای برای معرفی محصولات نقره</h2>
            <p>ساختار کارت‌ها، فاصله‌ها و رنگ‌ها در این صفحه با تم نقره‌ای و فضای مینیمال‌تر بازطراحی شده تا تفاوت Gold و Silver کاملاً حس شود.</p>
          </div>
          <div className="miniGrid silver-card-grid">
            {silverCards.map((item)=><article key={item.title} className="silver-service-card"><div className="silver-token"/><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-block soft-block">
        <div className="container split-section feature-split">
          <div>
            <div className="section-badge silver-badge">مزیت تجربه</div>
            <h2>ترکیب زیبایی، وضوح و قابلیت توسعه</h2>
            <p>گندم سیلور به‌جای یک صفحه ساده، حالا یک Landing Page خوش‌ساخت با سلسله‌مراتب محتوایی واضح، CTAهای خوب و هویت مستقل دارد.</p>
            <ul className="feature-list silver-list">
              <li>طراحی روشن و لوکس با هارمونی نقره‌ای</li>
              <li>آماده برای مسیر ثبت‌نام و استعلام محصول</li>
              <li>قابل توسعه برای موجودی، سفارش و خدمات همکاران</li>
            </ul>
          </div>
          <div className="phone-visual silver-phone-wrap"><div className="phone-frame silver-phone-frame"><div className="phone-screen silver-screen"><div className="screen-logo silver-screen-logo">گ</div></div></div></div>
        </div>
      </section>

      <section className="download-cta silver-download">
        <div className="container download-grid">
          <div><div className="section-badge silver-badge">شروع عضویت</div><h2>برای ورود به مسیر نقره آماده‌اید؟</h2><p>ثبت‌نام کنید تا در نسخه بعدی به خدمات کامل‌تر گندم سیلور دسترسی پیدا کنید.</p></div>
          <Link href="/register" className="cta-button light-btn">ثبت‌نام در گندم</Link>
        </div>
      </section>
    </main>
  );
}
