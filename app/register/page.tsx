"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

const intentCopy: Record<string, { tab: string; title: string; text: string; button: string }> = {
  quote: { tab: "استعلام", title: "درخواست استعلام قیمت", text: "اطلاعات اولیه را ثبت کنید تا درخواست شما با فلز و مسیر انتخاب‌شده ادامه پیدا کند.", button: "ثبت درخواست استعلام" },
  trade: { tab: "همکار بازار", title: "عضویت همکار بازار", text: "برای دسترسی به مسیرهای حرفه‌ای، نوع فعالیت و اطلاعات اولیه خود را ثبت کنید.", button: "ادامه عضویت همکار" },
  consultation: { tab: "مشاوره", title: "درخواست تماس و مشاوره", text: "اگر هنوز برای انتخاب محصول یا مسیر خرید مطمئن نیستید، اطلاعات اولیه را ثبت کنید.", button: "ثبت درخواست مشاوره" },
  app: { tab: "وب‌اپ", title: "ورود به مسیر وب‌اپ گندم", text: "اطلاعات اولیه را وارد کنید تا مسیر حساب شما برای ادامه تجربه گندم مشخص شود.", button: "ادامه" },
  crafted: { tab: "کارهای ساخته", title: "استعلام کارهای ساخته", text: "برای پیگیری موجودی و قیمت مدل‌های ویترینی اطلاعات اولیه را ثبت کنید.", button: "ثبت درخواست" },
};

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState("");
  const intent = searchParams.get("intent") || "register";
  const metal = searchParams.get("metal") || "";
  const copy = intentCopy[intent] || { tab: "ثبت‌نام", title: "عضویت در گندم", text: "اطلاعات اولیه را تکمیل کنید تا مسیر مناسب حساب شما مشخص شود.", button: "ثبت اطلاعات" };
  const defaultInterest = metal === "gold" || intent === "crafted" ? "gold" : metal === "silver" ? "silver" : "";
  const defaultCustomerType = intent === "trade" ? "" : "public";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("در حال ثبت اطلاعات...");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const result = await response.json();
    if (response.ok) {
      setMessage(intent === "quote" ? "درخواست استعلام ثبت شد؛ مرحله بعدی تأیید شماره تماس است." : "اطلاعات اولیه ثبت شد؛ مرحله بعدی ورود کد OTP خواهد بود.");
      event.currentTarget.reset();
      return;
    }
    setMessage(result?.error?.message || "خطایی رخ داده است.");
  }

  return (
    <main className="register-shell">
      <header className="topbar slim-topbar"><div className="container topbar-inner"><Link href="/" className="back-button">بازگشت</Link><div className="brand-block"><div className="brand-copy"><strong>گندم</strong><span>طلا و نقره، ساده‌تر</span></div><div className="brand-mark">گ</div></div></div></header>
      <section className="register-section"><div className="container register-wrapper">
        <form className="register-card" onSubmit={handleSubmit}>
          <input type="hidden" name="intent" value={intent} />
          <input type="hidden" name="metal" value={metal} />
          <div className="register-tab">{copy.tab}</div>
          <h1>{copy.title}</h1>
          <p>{copy.text}</p>
          <label>نام و نام خانوادگی *<input name="fullName" placeholder="مثلاً: علی رضایی" required minLength={3} /></label>
          <label>نوع حساب *<select name="customerType" required defaultValue={defaultCustomerType}><option value="" disabled>انتخاب کنید...</option><option value="public">مشتری عادی / خانگی</option><option value="gold-colleague">همکار بازار طلا</option><option value="silver-colleague">همکار بازار نقره</option></select></label>
          <label>شماره تماس *<input name="mobile" placeholder="09XXXXXXXXX" required pattern="09[0-9]{9}" dir="ltr" /></label>
          <label>کد ملی *<input name="nationalCode" placeholder="XXXXXXXXXX" required pattern="[0-9]{10}" dir="ltr" /></label>
          <label>آدرس / شهر *<input name="city" placeholder="شهر، خیابان..." required /></label>
          <label>علاقه‌مندی اصلی *<select name="interest" required defaultValue={defaultInterest}><option value="" disabled>انتخاب کنید...</option><option value="gold">طلا</option><option value="silver">نقره</option><option value="both">هر دو</option></select></label>
          <button className="cta-button primary-btn full-width-button">{copy.button}</button>
          {message ? <div className="submit-message">{message}</div> : null}
        </form>
      </div></section>
      <footer className="register-footer">© ۱۴۰۵ گندم — تمامی حقوق محفوظ است.</footer>
    </main>
  );
}
