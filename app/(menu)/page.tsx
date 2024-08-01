import { appTitle } from "@/_src/shared/libs";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle(),
};

const Menu = () => {
  return (
    <section>
      <div className="container">
        <div>
          <header>
            <h1>
              Магазин пиццы Satori - Ваш идеальный выбор для вкусной пиццы!
            </h1>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Menu;
