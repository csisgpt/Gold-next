import Link from "next/link";

const productCategories = [
  "انگشتر",
  "دستبند",
  "گوشواره",
  "آویز",
  "گردنبند",
];

const trustItems = [
  {
    title: "فروش شفاف و مرحله‌ای",
    text: "نمایش مسیر خرید، استعلام، ثبت درخواست و پیگیری به‌صورت ساده و قابل فهم برای مشتری خانگی.",
  },
  {
    title: "تنوع در محصولات و مسیرها",
    text: "گندم گلد و گندم سیلور در کنار مسیر مستقل همکاران، تجربه‌ای چندلایه و حرفه‌ای ایجاد می‌کنند.",
  },
  {
    title: "آماده توسعه معامله حرفه‌ای",
    text: "این ساختار برای توسعه قیمت لحظه‌ای، کیف پول، احراز هویت و گردش سفارش آماده طراحی شده است.",
  },
];

const steps = [
  {
    title: "ثبت‌نام",
    text: "اطلاعات اولیه را ثبت می‌کنید و مسیر شما بر اساس مشتری خانگی یا همکار بازار مشخص می‌شود.",
  },
  {
    title: "احراز اولیه",
    text: "مرحله OTP و تکمیل اطلاعات هویتی برای ادامه فرایند خرید یا دریافت خدمات تخصصی انجام می‌شود.",
  },
  {
    title: "شروع خرید یا همکاری",
    text: "بعد از تأیید، دسترسی شما به محصولات، قیمت‌ها و خدمات متناسب با نوع حساب فعال می‌شود.",
  },
];

const priceRows = [
  { title: "طلای ۱۸ عیار", value: "۱۲,۴۸۰,۰۰۰", suffix: "تومان / گرم", status: "+۰.۸٪" },
  { title: "آب‌شده ۷۵۰", value: "۵۴,۰۸۰,۰۰۰", suffix: "تومان / مثقال", status: "+۰.۵٪" },
  { title: "نقره ۹۹۹", value: "۲۲۵,۰۰۰", suffix: "تومان / گرم", status: "۰٪" },
  { title: "سکه تمام", value: "۱۴۷,۵۰۰,۰۰۰", suffix: "تومان", status: "-۰.۳٪" },
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <Link href="/register" className="back-button">
            ثبت‌نام
          </Link>

          <div className="brand-block">
            <div className="brand-copy">
              <strong>گندم</strong>
              <span>معامله امن و مدرن طلا و نقره</span>
            </div>
            <div className="brand-mark">گ</div>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="section-badge">مخصوص مشتریان خانگی و همکاران بازار</div>
            <h1>
              خرید عمده و خرده <span>طلا و نقره</span> با تجربه‌ای شکیل، ساده و حرفه‌ای
            </h1>
            <p>
              گندم بستری مدرن برای معرفی، فروش و توسعه خدمات طلا و نقره است؛ با دو مسیر تخصصی
              <strong> گندم گلد </strong> و <strong>گندم سیلور</strong> برای کاربران عادی، سرمایه‌گذاران و فعالان بازار.
            </p>
            <div className="hero-actions">
              <Link href="/register" className="cta-button primary-btn">
                عضویت در گندم
              </Link>
              <Link href="/gold" className="cta-button light-btn">
                مشاهده گندم گلد
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <span className="orbit-tag orbit-top-right">مناسب خرید خانگی</span>
            <span className="orbit-tag orbit-bottom-right">خدمات همکاران بازار</span>
            <span className="orbit-tag orbit-bottom-left">گندم گلد و گندم سیلور</span>

            <div className="hero-orbit orbit-large" />
            <div className="hero-orbit orbit-small" />
            <div className="hero-centerpiece">
              <div className="hero-hand">
                <span className="ring-one" />
                <span className="ring-two" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block white-block">
        <div className="container split-section story-section">
          <div className="story-copy">
            <div className="section-badge">معرفی گندم</div>
            <h2>چرا گندم برای بازار امروز مناسب است؟</h2>
            <p>
              گندم با الهام از ساختار سایت‌های لوکس و تجربه‌محور طراحی شده تا هم برای مشتری خانگی قابل
              اعتماد و ساده باشد و هم برای توسعه سرویس‌های حرفه‌ای طلا و نقره بستر مناسبی ایجاد کند.
            </p>
            <p>
              ظاهر آرام، پالت رنگی لوکس، تایپوگرافی فارسی مناسب و ساختار منظم صفحه‌ها باعث می‌شود تجربه
              کاربری بسیار نزدیک‌تر به نمونه‌های مرجع و بسیار حرفه‌ای‌تر از نسخه قبلی باشد.
            </p>
            <Link href="/gold" className="inline-link">
              ورود به مسیر گندم گلد
            </Link>
          </div>

          <div className="story-visual">
            <div className="sculpture-card">
              <div className="sculpture-shape sculpture-base" />
              <div className="sculpture-shape sculpture-main" />
              <div className="sculpture-shape sculpture-dots" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-block white-block">
        <div className="container">
          <div className="section-heading center-text">
            <div className="section-badge">دسته‌بندی محصولات</div>
            <h2>تنوع مدل‌های موجود در سایت</h2>
            <p>چیدمان کارت‌ها و دسته‌بندی‌ها به‌صورت مینیمال و لوکس بازطراحی شده تا حس پرمیوم منتقل کند.</p>
          </div>

          <div className="category-grid">
            {productCategories.map((item, index) => (
              <article key={item} className={`category-card ${index === 1 ? "featured" : ""}`}>
                <div className={`jewel-shape jewel-${index + 1}`} />
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block white-block">
        <div className="container">
          <div className="section-heading center-text narrow">
            <div className="section-badge">مزیت‌ها</div>
            <h2>معامله‌ای در سطح فعالان حرفه‌ای بازار</h2>
            <p>از طراحی ویترین دیجیتال تا زیرساخت توسعه‌پذیر برای سفارش، استعلام و همکاری.</p>
          </div>

          <div className="trust-grid">
            {trustItems.map((item, index) => (
              <article key={item.title} className="trust-card">
                <div className={`trust-icon trust-icon-${index + 1}`} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="card-link">بیشتر بدانید</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block soft-block">
        <div className="container">
          <div className="section-heading center-text narrow">
            <div className="section-badge">فرایند همکاری</div>
            <h2>از ثبت‌نام تا اولین خرید شما</h2>
            <p>مراحل صفحه به‌صورت واضح و مرحله‌به‌مرحله طراحی شده تا کاربر حس سردرگمی نداشته باشد.</p>
          </div>

          <div className="steps-grid">
            {steps.map((item, index) => (
              <article key={item.title} className="step-card">
                <div className="step-number">{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block white-block" id="prices">
        <div className="container price-panel">
          <div className="price-copy">
            <div className="section-badge">تابلوی قیمت</div>
            <h2>قیمت‌های مهم بازار در یک نگاه</h2>
            <p>
              این قسمت مثل مرجع می‌تواند نقش یک باکس پررنگ CTA را هم داشته باشد. فعلاً قیمت‌ها نمایشی‌اند تا در
              مرحله بعد به دیتای واقعی متصل شوند.
            </p>
            <Link href="/register" className="cta-button primary-btn">
              دریافت دسترسی و استعلام
            </Link>
          </div>

          <div className="price-board">
            {priceRows.map((row) => (
              <div key={row.title} className="price-row">
                <div>
                  <strong>{row.title}</strong>
                  <span>{row.suffix}</span>
                </div>
                <div className="price-value-block">
                  <em>{row.status}</em>
                  <b>{row.value}</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer-block">
        <div className="container footer-grid">
          <div className="footer-about">
            <div className="footer-brand">
              <div className="brand-mark small-mark">گ</div>
              <div>
                <strong>گندم</strong>
                <span>تجربه‌ای نو برای خرید و معامله طلا و نقره</span>
              </div>
            </div>
            <p>
              این نسخه با تمرکز بر UI/UX حرفه‌ای، ساختار شفاف و توسعه‌پذیری محصول بازطراحی شده و آماده مرحله
              بعدی توسعه عملیاتی است.
            </p>
          </div>

          <div className="footer-contact">
            <h3>ارتباط با ما</h3>
            <p>قم، بازار طلا — مسیر توسعه آنلاین و حضوری</p>
            <p>پشتیبانی عضویت، قیمت و همکاری</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
