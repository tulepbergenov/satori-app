import { LayoutProps } from "@/__src/shared/types";

const MenuLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-full flex-col bg-[#FFBF9B]">
      <main className="flex-auto">{children}</main>
    </div>
  );
};

export default MenuLayout;
