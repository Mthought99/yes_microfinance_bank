import { LoanApprovalHeroSection } from "./sections/LoanApprovalHeroSection/LoanApprovalHeroSection";
import { LoanProductsSection } from "./sections/LoanProductsSection/LoanProductsSection";
export const Loan = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <main className="page-animate flex w-full flex-col">
        <LoanApprovalHeroSection />
        <LoanProductsSection />
      </main>
    </div>
  );
};
