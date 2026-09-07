import { Card, CardContent } from "../../../../components/ui/card";

const loanProducts = [
  {
    title: "Personal Loan",
    description:
      "Quick funding for your personal needs — from emergencies to planned expenses.",
    image: "/images/personal-loan-image.png",
    features: [
      "Up to ₦10,000,000",
      "Flexible tenure up to 24 months",
      "No collateral required",
      "Instant approval via app",
    ],
  },
  {
    title: "Business Loan",
    description:
      "Fuel your business growth with working capital, equipment financing, and expansion funds.",
    image: "/images/business-loan-image.png",
    features: [
      "Up to ₦50,000,000",
      "Working capital & expansion",
      "Flexible repayment",
      "Quick disbursement",
    ],
  },
  {
    title: "Credit Card Loan",
    description:
      "Convert your credit card balance into a fixed-term loan with lower interest rates.",
    image: "/images/credit-card-loan-image.png",
    features: [
      "Convert your card balance",
      "Up to ₦5,000,000",
      "Fixed monthly payments",
      "No extra fees",
    ],
  },
  {
    title: "Working Capital",
    description:
      "Keep your business running smoothly with flexible working capital to cover operational costs.",
    image: "/images/working-capital-image.png",
    features: [
      "Up to ₦30,000,000",
      "Inventory & supplier financing",
      "Revolving facility",
      "Interest on utilized amount",
    ],
  },
  {
    title: "Overdraft Facility",
    description:
      "Access extra funds when you need them most with a flexible overdraft on your current account.",
    image: "/images/overdraft-facility-image.png",
    features: [
      "Up to ₦15,000,000",
      "Interest only on used amount",
      "Flexible repayment",
      "Quick approval",
    ],
  },
];

export const LoanProductsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white px-5 py-[120px] sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1154px] grid-cols-1 gap-[23px] md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[22px]">
        {loanProducts.map((product) => (
          <Card
            key={product.title}
            className="rounded-[25px] border-0 bg-[#d1f1ff] p-0 shadow-none"
          >
            <CardContent className="flex h-full flex-col p-0 px-[19px] pb-[47px] pt-[18px]">
              <img
                className="h-[329px] w-full rounded-[20px] object-cover"
                alt="Rectangle"
                src={product.image}
              />
              <div className="mt-[30px] flex flex-1 flex-col">
                <div className="flex flex-col gap-4">
                  <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-2xl font-semibold leading-6 tracking-[0] text-black">
                    {product.title}
                  </h3>
                  <p className="min-h-[60px] [font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-medium leading-5 tracking-[0] text-[#7e7e7e]">
                    {product.description}
                  </p>
                </div>
                <ul className="mt-[19px] flex flex-col gap-2.5">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex min-h-[18px] items-center gap-2.5"
                    >
                      <img
                        className="h-[18px] w-[18px] shrink-0"
                        alt=""
                        src="images/check-contained.svg"
                      />
                      <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-medium leading-[10px] tracking-[0] text-[#7e7e7e]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};