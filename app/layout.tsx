import "@/__src/app/styles/index.css";
import { appTitle, cn } from "@/__src/shared/libs";
import { LayoutProps } from "@/__src/shared/types";
import { type Metadata, type Viewport } from "next";
import { nunitoFont } from "./fonts";

export const metadata: Metadata = {
  title: appTitle(),
  description:
    "Добро пожаловать в Satori - ваш идеальный выбор для вкусной пиццы! Мы предлагаем разнообразие пицц на любой вкус",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_CANONICAL_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#FE5F00",
  colorScheme: "light dark",
};

const RootLayout = ({ children }: Readonly<LayoutProps>) => {
  return (
    <html
      className={cn(
        "h-full !scroll-smooth rendering-speed",
        nunitoFont.variable,
      )}
      lang="ru"
    >
      <body className="h-full bg-white font-nunito text-[16px] font-normal leading-[21px] text-black antialiased rendering-speed">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
