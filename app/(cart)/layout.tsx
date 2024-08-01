import { UserIcon } from "@/_src/shared/icons";
import { LayoutProps } from "@/_src/shared/types";
import { Logo } from "@/_src/shared/ui-kit";

const OrderLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-full flex-col bg-[#F4F1EE]">
      <header>
        <div className="container 2xl:max-w-[1310px]">
          <div className="flex items-center justify-between border-b border-b-[#DEDEDE] pb-[42px] pt-[75px]">
            <Logo />
            <button
              className="flex items-center justify-center gap-x-[8px] rounded-[15px] border border-[#FE5F00] px-[22px] py-[14px] text-[16px] font-semibold leading-[21px] text-[#FE5F00] transition-opacity duration-300 ease-in-out active:opacity-50 [@media(hover:hover)]:hover:opacity-50"
              type="button"
            >
              <UserIcon className="h-auto w-[11px]" />
              <span>Профиль</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-auto pt-[42px]">{children}</main>
    </div>
  );
};

export default OrderLayout;
