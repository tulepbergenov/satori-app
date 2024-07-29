import { UserIcon } from "@/__src/shared/icons";
import { LayoutProps } from "@/__src/shared/types";
import { Logo } from "@/__src/shared/ui-kit";

const OrderLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-full flex-col bg-[#F4F1EE]">
      <header>
        <div className="container 2xl:max-w-[1310px]">
          <div className="flex items-center justify-between border-b border-b-[#DEDEDE] pb-[42px] pt-[75px]">
            <Logo />
            <button
              className="flex items-center justify-center gap-x-[8px] rounded-[15px] border border-[#FE5F00] px-[22px] py-[14px] text-[16px] font-semibold leading-[21px] text-[#FE5F00]"
              type="button"
            >
              <UserIcon className="h-auto w-[11px]" />
              <span>Профиль</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-auto pt-[50px]">{children}</main>
    </div>
  );
};

export default OrderLayout;
