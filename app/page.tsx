import Link from "next/link";

const prices = [
  ["طلای ۱۸ عیار", "۱۲,۴۸۰,۰۰۰", "تومان / گرم", "+۰.۸٪"],
  ["آبشده ۷۵۰", "۵۴,۰۸۰,۰۰۰", "تومان / مثقال", "+۰.۵٪"],
  ["نقره ۹۹۹", "۲۲۵,۰۰۰", "تومان / گرم", "۰٪"],
  ["سکه تمام", "۱۴۷,۵۰۰,۰۰۰", "تومان", "-۰.۳٪"]
];

const goldProducts = ["طلای آب‌شده", "شمش طلا", "سکه", "طلای زینتی"];
const silverProducts = ["شمش نقره", "ساچمه نقره", "نقره زینتی", "سفارش عمده"];

function Logo() {
  return <Link href="/" className="brand"><span className="mark">G</span><span><b>گندم</b><small>GANDOM GOLD · SILVER</small></span></Link>;
}

export default function Home() {
  return <main>
    <header className="nav"><div className="container navin"><Logo/><nav><a href="#prices">قیمت‌ها</a><a href="#products">محصولات</a><a href="#about">درباره ما</a></nav><Link href="/register" className="btn outline">ورود / ثبت‌نام</Link></div></header>

    <section className="hero"><div className="container heroGrid"><div className="heroCopy"><span className="eyebrow">بازار مدرن طلا و نقره</span><h1>خرید و معامله با <em>گندم</em>؛ ساده، شفاف و حرفه‌ای</h1><p>یک تجربه یکپارچه برای مشتریان خانگی، سرمایه‌گذاران و همکاران حرفه‌ای بازار؛ با دو مسیر تخصصی گندم گلد و گندم سیلور.</p><div className="actions"><Link href="/gold" className="btn primary">ورود به گندم گلد</Link><Link href="/silver" className="btn silver">ورود به گندم سیلور</Link></div><div className="trust"><span>✓ قیمت شفاف</span><span>✓ مسیر احراز هویت</span><span>✓ آماده توسعه کیف پول و معامله</span></div></div><div className="heroVisual"><div className="ring r1"></div><div className="ring r2"></div><div className="coin gold"><small>GANDOM</small><strong>Au</strong><span>GOLD</span></div><div className="coin sil"><small>GANDOM</small><strong>Ag</strong><span>SILVER</span></div></div></div></section>

    <section id="prices" className="section"><div className="container"><div className="head"><span className="eyebrow">تابلوی قیمت</span><h2>مهم‌ترین قیمت‌ها در یک نگاه</h2><p>این اعداد در نسخه فعلی نمایشی‌اند و در نسخه عملیاتی به سرویس قیمت لحظه‌ای و Quote متصل می‌شوند.</p></div><div className="priceGrid">{prices.map(([t,v,u,c])=><article className="priceCard" key={t}><div><span>{t}</span><i>{c}</i></div><strong>{v}</strong><small>{u}</small></article>)}</div></div></section>

    <section id="products" className="section soft"><div className="container"><div className="head"><span className="eyebrow">محصولات</span><h2>دو دنیای تخصصی، زیر یک برند</h2></div><div className="duo"><article className="lineCard goldLine"><span className="lineBadge">GANDOM GOLD</span><h3>طلا و سکه</h3><p>برای خرید خانگی، سرمایه‌گذاری و معاملات حرفه‌ای همکاران بازار.</p><div className="chips">{goldProducts.map(x=><span key={x}>{x}</span>)}</div><Link href="/gold">مشاهده گندم گلد ←</Link></article><article className="lineCard silverLine"><span className="lineBadge">GANDOM SILVER</span><h3>نقره</h3><p>از شمش سرمایه‌گذاری تا محصولات زینتی و سفارش‌های عمده.</p><div className="chips">{silverProducts.map(x=><span key={x}>{x}</span>)}</div><Link href="/silver">مشاهده گندم سیلور ←</Link></article></div></div></section>

    <section className="section"><div className="container"><div className="head"><span className="eyebrow">برای چه کسانی؟</span><h2>یک تجربه، با سطح دسترسی متناسب</h2></div><div className="audience"><article><b>مشتری خانگی</b><p>خرید ساده، توضیح روشن محصول، قیمت و سفارش مرحله‌ای.</p></article><article><b>سرمایه‌گذار</b><p>تمرکز روی شمش، آب‌شده، سکه و محصولات سرمایه‌ای.</p></article><article><b>همکار طلا</b><p>آماده توسعه Quote، اعتبار، کیف پول و تسویه تخصصی.</p></article><article><b>همکار نقره</b><p>استعلام، خرید عمده، ساچمه و سیاست‌های اختصاصی بازار.</p></article></div></div></section>

    <section id="about" className="section dark"><div className="container appbox"><div><span className="eyebrow light">نسخه وب‌اپ</span><h2>از سایت معرفی تا هسته واقعی معاملات</h2><p>معماری مسیر بعدی گندم برای OTP، KYC، Wallet، Quote، Trade، Audit و پیامک آماده شده تا این رابط به یک محصول عملیاتی تبدیل شود.</p></div><Link href="/register" className="btn primary">شروع عضویت</Link></div></section>

    <footer><div className="container foot"><Logo/><p>© ۱۴۰۵ گندم — تمامی حقوق محفوظ است.</p></div></footer>
  </main>;
}
