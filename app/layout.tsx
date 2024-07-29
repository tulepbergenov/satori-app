import { type Viewport, type Metadata } from "next";
import { type ReactNode } from "react";
import { appTitle } from "@/__src/shared/libs";
import "@/__src/app/styles/index.css";

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

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
