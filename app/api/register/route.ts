import { NextRequest, NextResponse } from "next/server";

const mobilePattern = /^09\d{9}$/;
const nationalCodePattern = /^\d{10}$/;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ success: false, error: { code: "INVALID_BODY", message: "اطلاعات ارسال‌شده معتبر نیست." } }, { status: 400 });
  const { fullName, customerType, mobile, nationalCode, city, interest } = body;
  if (!fullName || !customerType || !mobile || !nationalCode || !city || !interest) {
    return NextResponse.json({ success: false, error: { code: "VALIDATION_ERROR", message: "همه فیلدهای الزامی را تکمیل کنید." } }, { status: 422 });
  }
  if (!mobilePattern.test(String(mobile))) return NextResponse.json({ success: false, error: { code: "INVALID_MOBILE", message: "شماره تماس معتبر نیست." } }, { status: 422 });
  if (!nationalCodePattern.test(String(nationalCode))) return NextResponse.json({ success: false, error: { code: "INVALID_NATIONAL_CODE", message: "کد ملی باید ۱۰ رقم باشد." } }, { status: 422 });
  return NextResponse.json({ success: true, data: { requestId: crypto.randomUUID(), status: "PENDING_OTP", nextStep: "OTP" } }, { status: 201 });
}
