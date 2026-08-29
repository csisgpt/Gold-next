export const catalogAssets = {
  crafted: "/gandom/hero-gold.svg",
  craftedAlt: "/gandom/hero-gold.svg",
  melted: "/gandom/catalog-melted.svg",
  goldBars: "/gandom/catalog-melted.svg",
  silverBars: "/gandom/catalog-silver-bars.svg",
  silverShot: "/gandom/catalog-silver-shot.svg",
  workshop: "/gandom/hero-investment.svg",
};

export type CatalogCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  tone: "gold" | "silver" | "crafted";
  chips: string[];
  products: Array<{
    name: string;
    meta: string;
    priceLabel?: string;
    image: string;
    badge?: string;
  }>;
};

export const catalogCategories: CatalogCategory[] = [
  {
    slug: "crafted-gold",
    title: "کارهای ساخته و ویترینی",
    eyebrow: "GANDOM CRAFTED",
    description:
      "ویترین منتخب انگشتر، گردنبند، دستبند، گوشواره و آویز با ارائه کاتالوگی و امکان توسعه سفارش و موجودی واقعی.",
    image: catalogAssets.crafted,
    tone: "crafted",
    chips: ["انگشتر", "گردنبند", "گوشواره", "دستبند", "آویز"],
    products: [
      { name: "انگشتر ویترینی", meta: "طلای ۱۸ عیار · انتخاب مدل", image: catalogAssets.craftedAlt, badge: "پرفروش" },
      { name: "گردنبند مینیمال", meta: "طلای ۱۸ عیار · سبک روزمره", image: catalogAssets.craftedAlt },
      { name: "گوشواره کلاسیک", meta: "طلای ۱۸ عیار · ویترینی", image: catalogAssets.craftedAlt },
      { name: "دستبند ظریف", meta: "طلای ۱۸ عیار · مدل منتخب", image: catalogAssets.crafted },
      { name: "آویز و پلاک", meta: "طلای ۱۸ عیار · سفارشی", image: catalogAssets.crafted },
      { name: "ست هدیه", meta: "طلای ۱۸ عیار · کادویی", image: catalogAssets.crafted, badge: "جدید" },
    ],
  },
  {
    slug: "melted-gold",
    title: "طلای آبشده و خام",
    eyebrow: "GANDOM GOLD",
    description:
      "مسیر تخصصی آبشده برای مشتریان حرفه‌ای و همکاران؛ آماده اتصال به قیمت لحظه‌ای، عیار، وزن، انگ و Quote.",
    image: catalogAssets.melted,
    tone: "gold",
    chips: ["آبشده ۷۵۰", "طلای خام", "عیار و انگ", "خرید و فروش", "استعلام"],
    products: [
      { name: "آبشده ۷۵۰", meta: "وزن متغیر · عیار مبنا ۷۵۰", image: catalogAssets.melted, badge: "لحظه‌ای" },
      { name: "قطعه آبشده", meta: "مناسب معامله همکار", image: catalogAssets.melted },
      { name: "طلای خام", meta: "استعلام وزن و عیار", image: catalogAssets.melted },
      { name: "بسته سرمایه‌ای", meta: "انتخاب وزن متناسب", image: catalogAssets.melted, badge: "سرمایه‌ای" },
    ],
  },
  {
    slug: "silver-bars",
    title: "شمش‌های نقره",
    eyebrow: "GANDOM SILVER",
    description:
      "کاتالوگ شمش‌های نقره در وزن‌های متنوع برای سرمایه‌گذاری، هدیه و نیاز حرفه‌ای؛ ساختار آماده موجودی و قیمت لحظه‌ای.",
    image: catalogAssets.silverBars,
    tone: "silver",
    chips: ["۵۰ گرم", "۱۰۰ گرم", "۲۵۰ گرم", "۵۰۰ گرم", "۱ کیلوگرم"],
    products: [
      { name: "شمش نقره ۵۰ گرم", meta: "عیار ۹۹۹ · بسته‌بندی کاتالوگی", image: catalogAssets.silverBars },
      { name: "شمش نقره ۱۰۰ گرم", meta: "عیار ۹۹۹ · سرمایه‌ای", image: catalogAssets.silverBars, badge: "محبوب" },
      { name: "شمش نقره ۲۵۰ گرم", meta: "عیار ۹۹۹ · وزن میانی", image: catalogAssets.silverBars },
      { name: "شمش نقره ۵۰۰ گرم", meta: "عیار ۹۹۹ · سفارش حرفه‌ای", image: catalogAssets.silverBars },
      { name: "شمش نقره ۱ کیلوگرم", meta: "عیار ۹۹۹ · سفارش عمده", image: catalogAssets.silverBars, badge: "عمده" },
    ],
  },
  {
    slug: "silver-shot",
    title: "ساچمه نقره",
    eyebrow: "SILVER SHOT",
    description:
      "ساچمه نقره با دانه‌بندی و وزن‌های متنوع برای کارگاه، ذوب و ساخت؛ مناسب سفارش‌های خرد و عمده.",
    image: catalogAssets.silverShot,
    tone: "silver",
    chips: ["ریز", "متوسط", "درشت", "۹۹۹", "سفارش عمده"],
    products: [
      { name: "ساچمه ریز", meta: "دانه‌بندی ظریف · مناسب ذوب سریع", image: catalogAssets.silverShot },
      { name: "ساچمه متوسط", meta: "کاربرد عمومی کارگاهی", image: catalogAssets.silverShot, badge: "پرفروش" },
      { name: "ساچمه درشت", meta: "مناسب وزن‌کشی و ساخت", image: catalogAssets.silverShot },
      { name: "ساچمه ۵۰۰ گرم", meta: "عیار ۹۹۹ · بسته کارگاهی", image: catalogAssets.silverShot },
      { name: "ساچمه ۱ کیلوگرم", meta: "عیار ۹۹۹ · سفارش عمده", image: catalogAssets.silverShot, badge: "عمده" },
    ],
  },
];

export const catalogBySlug = Object.fromEntries(
  catalogCategories.map((category) => [category.slug, category]),
) as Record<string, CatalogCategory>;
