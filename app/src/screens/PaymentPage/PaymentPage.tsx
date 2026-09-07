import { PaymentProductsSection } from "./sections/PaymentProductsSection/PaymentProductsSection";
import { PaymentHeroSection } from "./sections/PaymentHeroSection/PaymentHeroSection";
export const Payment = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <main className="flex w-full flex-col">
        <PaymentHeroSection />
        <PaymentProductsSection />
      </main>
    </div>
  );
};