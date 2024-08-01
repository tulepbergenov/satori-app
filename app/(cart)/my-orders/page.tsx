import { appTitle } from "@/_src/shared/libs";
import { type Metadata } from "next";
import { OrderList } from "./_components";

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
            <OrderList />
          </div>
        </div>
      </section>
    </>
  );
};

export default MyOrder;
