"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("در حال ثبت اطلاعات...");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (response.ok) {
      setMessage("اطلاعات اولیه ثبت شد؛ مرحله بعدی ورود کد OTP خواهد بود.");
      event.currentTarget.reset();
      return;
    }

    setMessage(result?.error?.message || "خطایی رخ داده است.");
  }

  return (
    <main className="register-shell">
      <header className="topbar slim-topbar">
        <div className="container topbar-inner">
          <Link href="/" className="back-button">بازگشت</Link>
          <div className="brand-block">
            <div className="brand-copy"><strong>گندم</strong><span>عضویت در اپلیکیشن گندم</span></div>
            <div className="brand-mark">گ</div>
          </div>
        </div>
      </header>

      <section className="register-section">
        <div className="container register-wrapper">
          <form className="register-card" onSubmit={handleSubmit}>
            <div className="register-tab">ثبت‌نام</div>
            <h1>عضویت در اپلیکیشن گندم</h1>
            <p>اطلاعات زیر را با دقت تکمیل کنید. کارشناسان ما در ادامه فرایند، جهت تکمیل عضویت با شما تماس می‌گیرند.</p>

            <label>نام و نام خانوادگی *<input name="fullName" placeholder="مثلاً: علی رضایی" required minLength={3} /></label>
            <label>لاین کاری *
              <select name="customerType" required defaultValue="">
                <option value="" disabled>انتخاب کنید...</option>
                <option value="public">مشتری عادی / خانگی</option>
                <option value="gold-colleague">همکار بازار طلا</option>
                <option value="silver-colleague">همکار بازار نقره</option>
              </select>
            </label>
            <label>شماره تماس *<input name="mobile" placeholder="09XXXXXXXXX" required pattern="09[0-9]{9}" dir="ltr" /></label>
            <label>کد ملی *<input name="nationalCode" placeholder="XXXXXXXXXX" required pattern="[0-9]{10}" dir="ltr" /></label>
            <label>آدرس / شهر *<input name="city" placeholder="شهر، خیابان..." required /></label>
            <label>علاقه‌مندی اصلی *
              <select name="interest" required defaultValue="">
                <option value="" disabled>انتخاب کنید...</option>
                <option value="gold">طلا</option>
                <option value="silver">نقره</option>
                <option value="both">هر دو</option>
              </select>
            </label>

            <button className="cta-button primary-btn full-width-button">ثبت اطلاعات</button>
            {message ? <div className="submit-message">{message}</div> : null}
          </form>
        </div>
      </section>

      <footer className="register-footer">© ۱۴۰۵ گندم — تمامی حقوق محفوظ است.</footer>
    </main>
  );
}
