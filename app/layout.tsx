import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "گندم | طلا و نقره",
  description: "گندم گلد و گندم سیلور؛ تجربه مدرن خرید و معامله طلا و نقره"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
