import { type LinkProps as NextLinkProps } from "next/link";
import { type ComponentProps, type ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
};

export type SVGProps = ComponentProps<"svg">;

export type LinkProps = Omit<NextLinkProps, "href"> &
  AnchorProps & {
    href?: NextLinkProps["href"];
  };

export type AnchorProps = ComponentProps<"a">;
