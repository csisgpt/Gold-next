"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function RegisterPage(){
 const [msg,setMsg]=useState("");
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setMsg("در حال ثبت...");const f=new FormData(e.currentTarget);const r=await fetch('/api/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(f.entries()))});const j=await r.json();setMsg(r.ok?'اطلاعات اولیه ثبت شد؛ مرحله بعدی OTP خواهد بود.':j?.error?.message||'خطا در ثبت اطلاعات');}
 return <main className="register"><div className="container"><Link href="/" className="back">← بازگشت</Link><form onSubmit={submit} className="form"><span className="eyebrow">عضویت در گندم</span><h1>اطلاعات اولیه</h1><p>نوع مسیر شما بر اساس مشتری خانگی یا همکار بازار تنظیم می‌شود.</p><label>نام و نام خانوادگی<input name="fullName" required minLength={3}/></label><label>نوع حساب<select name="customerType" required defaultValue=""><option value="" disabled>انتخاب کنید</option><option value="public">مشتری عادی / خانگی</option><option value="gold-colleague">همکار بازار طلا</option><option value="silver-colleague">همکار بازار نقره</option></select></label><label>شماره موبایل<input name="mobile" required pattern="09[0-9]{9}" dir="ltr"/></label><label>کد ملی<input name="nationalCode" required pattern="[0-9]{10}" dir="ltr"/></label><label>شهر<input name="city" required/></label><button className="btn primary" type="submit">ثبت اطلاعات</button>{msg&&<div className="msg">{msg}</div>}</form></div></main>
}
