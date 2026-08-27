import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import "./catalog-v6.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: "گندم | گندم گلد و گندم سیلور",
  description: "پلتفرم گندم برای معرفی و توسعه خدمات طلا و نقره؛ مناسب مشتریان خانگی، سرمایه‌گذاران و همکاران بازار.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body className={vazir.variable}>{children}</body></html>;
}
