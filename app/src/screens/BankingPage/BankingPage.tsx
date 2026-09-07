import { BankingProductsSection } from "./sections/BankingProductsSection/BankingProductsSection";
import { MobileBankingHeroSection } from "./sections/MobileBankingHeroSection/MobileBankingHeroSection";
export const Banking = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <main className="page-animate flex w-full flex-col">
        <MobileBankingHeroSection />
        <BankingProductsSection />
      </main>
    </div>
  );
};