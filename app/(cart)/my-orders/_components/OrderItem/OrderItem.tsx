"use client";

import { ArrowDownIcon } from "@/_src/shared/icons";
import { cn } from "@/_src/shared/libs";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Image from "next/image";
import { forwardRef } from "react";
import { OrderProps } from "./OrderItem.type";

export const OrderItem = forwardRef<HTMLElement, OrderProps>(
  ({ className, ...props }, ref) => {
    return (
      <Disclosure
        as="article"
        className={cn("rounded-[30px] bg-white px-[35px] py-[30px]", className)}
        ref={ref}
        {...props}
      >
        {({ open }) => (
          <>
            <div className="flex w-full items-center justify-between">
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
                <DisclosureButton
                  aria-label="Подробнее о заказе #15"
                  className="flex size-[24px] items-center justify-center text-[#AEAEAE] transition-opacity duration-300 ease-in-out active:opacity-50 [@media(hover:hover)]:hover:opacity-50"
                  title="Подробнее о заказе #16"
                  type="button"
                >
                  <ArrowDownIcon
                    className={cn(
                      "h-auto w-[16px] transition-transform duration-300 ease-in-out",
                      {
                        ["rotate-180 transform"]: open,
                      },
                    )}
                  />
                </DisclosureButton>
              </div>
            </div>
            <DisclosurePanel>
              <ul className="flex flex-col pt-[30px]">
                <li className="flex">
                  <article className="relative flex w-full items-center justify-between py-[30px] pt-[30px] before:absolute before:-left-[35px] before:top-0 before:h-px before:w-[calc(100%+70px)] before:bg-[#F6F6F6] before:content-['']">
                    <div className="flex items-center gap-x-[20px]">
                      <div className="flex size-[65px] items-center justify-center">
                        <Image
                          alt="Пицца «Чизбургер»"
                          className="h-auto w-full"
                          height={65}
                          src="/imgs/mock-item-cover.jpg"
                          width={65}
                        />
                      </div>
                      <div className="flex flex-col gap-y-[3px]">
                        <span className="text-[16px] font-bold leading-[21px]">
                          Чизбургер-пицца
                        </span>
                        <span className="text-[14px] font-normal leading-[19px] text-[#A1A1A1]">
                          Средняя 30 см, традиционное тесто
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-[3px]">
                      <span className="text-[16px] font-bold leading-[21px]">
                        965 ₽
                      </span>
                      <span className="text-[14px] font-normal leading-[19px] text-[#A1A1A1]">
                        2 шт.
                      </span>
                    </div>
                  </article>
                </li>
                <li className="flex">
                  <article className="relative flex w-full items-center justify-between py-[30px] pt-[30px] before:absolute before:-left-[35px] before:top-0 before:h-px before:w-[calc(100%+70px)] before:bg-[#F6F6F6] before:content-['']">
                    <div className="flex items-center gap-x-[20px]">
                      <div className="flex size-[65px] items-center justify-center">
                        <Image
                          alt="Пицца «Чизбургер»"
                          className="h-auto w-full"
                          height={65}
                          src="/imgs/mock-item-cover.jpg"
                          width={65}
                        />
                      </div>
                      <div className="flex flex-col gap-y-[3px]">
                        <span className="text-[16px] font-bold leading-[21px]">
                          Чизбургер-пицца
                        </span>
                        <span className="text-[14px] font-normal leading-[19px] text-[#A1A1A1]">
                          Средняя 30 см, традиционное тесто
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-[3px]">
                      <span className="text-[16px] font-bold leading-[21px]">
                        965 ₽
                      </span>
                      <span className="text-[14px] font-normal leading-[19px] text-[#A1A1A1]">
                        2 шт.
                      </span>
                    </div>
                  </article>
                </li>
              </ul>
              <div className="relative pt-[30px] before:absolute before:-left-[35px] before:top-0 before:h-px before:w-[calc(100%+70px)] before:bg-[#F6F6F6] before:content-['']">
                <span className="text-[20px] font-normal leading-[27px]">
                  <span>Итого: </span>
                  <span className="font-extrabold">2245 ₽</span>
                </span>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    );
  },
);

OrderItem.displayName = "OrderItem";
