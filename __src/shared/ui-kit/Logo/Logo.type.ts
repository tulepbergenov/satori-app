import { LinkProps } from "next/link";

export type LogoProps = {
  href?: string;
  className?: string;
} & Omit<LinkProps, "href">;
