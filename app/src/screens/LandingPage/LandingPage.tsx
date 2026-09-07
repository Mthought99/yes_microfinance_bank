import { ContactUsSection } from "./sections/ContactUsSection/ContactUsSection";
import { CustomerTestimonialsSection } from "./sections/CustomersTestimonialSection/CustomersTestimonailSection";
import { DigitalBankingHeroSection } from "./sections/DigitalBankingHeroSection/DigitalBankingHeroSection";
import { FinancialServicesSection } from "./sections/FinancialServicesSection/FinancialServicesSection";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection/FrequentlyAskedQuestionsSection";
import { MobileAppPromotionSection } from "./sections/MobileAppPromotionSection/MobileAppPromotionSection";

const partnerLogos = [
  {
    alt: "nibss",
    className: "h-[54.21px] w-[99.38px]",
    src: "/images/nibss.png",
  },
  {
    alt: "unified-payment",
    className: "h-[54.24px] w-[219.06px]",
    src: "/images/unified-payment.png",
  },
  {
    alt: "lottomania",
    className: "h-[54.24px] w-[52.15px]",
    src: "/images/lottomania.png",
  },
  {
    alt: "afrigo",
    className: "h-[54.7px] w-[135.24px]",
    src: "/images/afrigo.png",
  },
  {
    alt: "microsoft azure",
    className: "h-[54.01px] w-[57.34px]",
    src: "/images/microsoft-azure.png",
  },
  {
    alt: "huawei",
    className: "h-[54.94px] w-[54.92px]",
    src: "/images/huawei.png",
  },
];

export const LandingPage = (): JSX.Element => {
  return (
    <div id="home" className="flex min-h-screen w-full flex-col bg-white">
      <main className="page-animate flex w-full flex-col">
        <DigitalBankingHeroSection />
        <section className="flex w-full items-center justify-center bg-white px-6 py-[46px] sm:px-10">
          <div className="flex w-full max-w-[1024px] flex-wrap items-center justify-center gap-x-[78.91px] gap-y-8">
            {partnerLogos.map((logo) => (
              <img
                key={logo.src}
                className={`${logo.className} shrink-0 object-contain`}
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </section>
        <FinancialServicesSection />
        <CustomerTestimonialsSection />
        <MobileAppPromotionSection />
        <FrequentlyAskedQuestionsSection />
        <ContactUsSection />
      </main>
    </div>
  );
};
