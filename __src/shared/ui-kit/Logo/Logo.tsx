import Image from "next/image";
import Link from "next/link";
import { cn } from "../../libs";
import { LogoProps } from "./Logo.type";

export const Logo = ({ href = "/", className, ...props }: LogoProps) => {
  return (
    <Link
      className={cn(
        "grid grid-cols-[35px_1fr] items-center gap-x-[15px]",
        className,
      )}
      href={href}
      prefetch={false}
      {...props}
    >
      <Image
        alt="Логотип Satori"
        className="row-span-2 h-auto w-full"
        height={35}
        priority
        src="/imgs/logo.svg"
        width={35}
      />
      <span className="text-[24px] font-black uppercase leading-[32px]">
        Satori
      </span>
      <span className="text-[16px] font-normal leading-[21px] text-[#7B7B7B]">
        Вкусней уже точно некуда
      </span>
    </Link>
  );
};
