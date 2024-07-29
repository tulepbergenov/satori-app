import { appTitle } from "@/__src/shared/libs";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle(),
};

const MyOrder = () => {
  return (
    <section>
      <div className="container">
        <div>
          <header>
            <h1>Корзина</h1>
          </header>
        </div>
      </div>
    </section>
  );
};

export default MyOrder;
