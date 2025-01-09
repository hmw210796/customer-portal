import StoreProvider from "@/providers/StoreProvider";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const SiteMainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-grow flex flex-col">{children}</main>
        <SiteFooter />
      </div>
    </StoreProvider>
  );
};

export default SiteMainLayout;
