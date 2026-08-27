import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
 const body=await request.json().catch(()=>null);
 if(!body) return NextResponse.json({success:false,error:{code:'INVALID_BODY',message:'اطلاعات معتبر نیست.'}},{status:400});
 const {fullName,customerType,mobile,nationalCode,city}=body;
 if(!fullName||!customerType||!mobile||!nationalCode||!city) return NextResponse.json({success:false,error:{code:'VALIDATION_ERROR',message:'همه فیلدها را کامل کنید.'}},{status:422});
 if(!/^09\d{9}$/.test(String(mobile))) return NextResponse.json({success:false,error:{code:'INVALID_MOBILE',message:'شماره موبایل معتبر نیست.'}},{status:422});
 if(!/^\d{10}$/.test(String(nationalCode))) return NextResponse.json({success:false,error:{code:'INVALID_NATIONAL_CODE',message:'کد ملی باید ۱۰ رقم باشد.'}},{status:422});
 return NextResponse.json({success:true,data:{requestId:crypto.randomUUID(),status:'PENDING_OTP'}},{status:201});
}
