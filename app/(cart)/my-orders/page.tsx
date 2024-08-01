import { ArrowDownIcon } from "@/_src/shared/icons";
import { appTitle } from "@/_src/shared/libs";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("Мои заказы"),
};

const MyOrder = () => {
  return (
    <>
      <header>
        <div className="container 2xl:max-w-[1310px]">
          <div>
            <h1 className="text-[46px] font-bold leading-[61px]">Мои заказы</h1>
          </div>
        </div>
      </header>
      <section className="mt-[46px]">
        <div className="container 2xl:max-w-[1310px]">
          <div>
            <ul className="flex max-w-[752px] flex-col gap-y-[25px]">
              <li className="flex">
                <article className="flex w-full items-center justify-between rounded-[30px] bg-white px-[35px] py-[30px]">
                  <div className="flex items-center gap-x-[20px]">
                    <span className="text-[24px] font-bold leading-[32px]">
                      Заказ #15
                    </span>
                    <time className="text-[16px] font-normal leading-[21px] text-[#AEAEAE]">
                      14 февраля 2024, в 17:45
                    </time>
                  </div>
                  <div className="flex items-center gap-x-[26px]">
                    <span className="rounded-[20px] bg-[#FFF0EF] px-[16px] py-[8px] text-[14px] font-semibold leading-[19px] text-[#FF544A]">
                      Отклонено
                    </span>
                    <button
                      aria-label="Подробнее о заказе #16"
                      className="flex size-[24px] items-center justify-center text-[#AEAEAE] transition-opacity duration-300 ease-in-out active:opacity-50 [@media(hover:hover)]:hover:opacity-50"
                      title="Подробнее о заказе #16"
                      type="button"
                    >
                      <ArrowDownIcon className="h-auto w-[16px]" />
                    </button>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyOrder;
