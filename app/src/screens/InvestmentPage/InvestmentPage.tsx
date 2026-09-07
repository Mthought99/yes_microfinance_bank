import { InvestmentProductsSection } from "./sections/InvestmentProductsSection/InvestmentProductsSection";
import { InvestmentHeroSection } from "./sections/InvestmentHeroSection/InvestmentHeroSection";
export const Investment = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <main className="flex w-full flex-col">
        <InvestmentHeroSection />
        <InvestmentProductsSection />
      </main>
    </div>
  );
};