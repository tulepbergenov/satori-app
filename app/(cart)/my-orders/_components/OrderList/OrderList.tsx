import { cn } from "@/_src/shared/libs";
import { forwardRef } from "react";
import { OrderItem } from "../OrderItem";
import { OrderListProps } from "./OrderList.type";

export const OrderList = forwardRef<HTMLUListElement, OrderListProps>(
  ({ className, ...props }, ref) => {
    return (
      <ul
        className={cn("flex max-w-[752px] flex-col gap-y-[25px]", className)}
        ref={ref}
        {...props}
      >
        <li>
          <OrderItem />
        </li>
      </ul>
    );
  },
);

OrderList.displayName = "OrderList";
