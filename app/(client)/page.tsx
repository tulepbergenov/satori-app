import { appTitle } from "@/__src/shared/libs";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle(),
};

const Home = () => {
  return (
    <section>
      <header>
        <h1>Магазин пиццы Satori - Ваш идеальный выбор для вкусной пиццы!</h1>
      </header>
    </section>
  );
};

export default Home;
