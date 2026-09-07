import { Card, CardContent } from "../../../../components/ui/card";

const investmentProducts = [
  {
    title: "YesFlex",
    rate: "14% per annum",
    description:
      "Save and earn with flexibility. Access your funds anytime you need them.",
    image: "/images/african-saving-money.png",
    features: [
      "Flexible withdrawals",
      "No lock-in period",
      "Earn 14% p.a",
      "Ideal for emergency savings",
    ],
    cardHeight: "min-h-[705px]",
  },
  {
    title: "YesFixed",
    rate: "Up to 20% per annum",
    description:
      "Lock in higher returns with fixed-term investment plans.",
    image: "/images/black-woman-talking-about-money.png",
    features: [
      "Fixed-term investment",
      "Higher returns guaranteed",
      "Multiple term options",
      "Up to 20% p.a.",
    ],
    cardHeight: "min-h-[705px]",
  },
  {
    title: "YesTarget",
    rate: "14–20% per annum",
    description:
      "Save towards a specific goal with flexible contributions and a dedicated plan.",
    image: "/images/man-writing-down-savings-plan.png",
    features: [
      "Goal-based savings",
      "Flexible contributions",
      "Track your progress",
      "14–20% p.a.",
    ],
    cardHeight: "min-h-[721px]",
  },
];

export const InvestmentProductsSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-white px-5 py-[120px] sm:px-8"
      aria-label="Investment products"
    >
      <div className="mx-auto grid w-full max-w-[1154px] grid-cols-1 gap-[23px] md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[22px]">
        {investmentProducts.map((product) => (
          <Card
            key={product.title}
            className={`overflow-hidden rounded-[25px] border-0 bg-[#d1f1ff] shadow-none ${product.cardHeight}`}
          >
            <CardContent className="flex h-full flex-col p-[19px] pt-[18px]">
              <img
                className="h-[329px] w-full rounded-[20px] object-cover"
                src={product.image}
                alt="Rectangle"
              />
              <div className="mt-[30px] flex flex-1 flex-col">
                <header className="flex flex-col gap-4">
                  <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-2xl font-semibold leading-6 tracking-[0] text-black">
                    {product.title}
                  </h2>
                  <p className="mt-2 [font-family:'Plus_Jakarta_Sans',Helvetica] leading-6 tracking-[0]">
                    <span className="font-bold text-[#0d68b1] text-2xl">
                      {product.rate}
                    </span>
                    <br />
                    <span className="text-[12px] font-semibold text-black">
                      * before withholding tax
                    </span>
                  </p>
                  <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-medium leading-5 tracking-[0] text-[#7e7e7e]">
                    {product.description}
                  </p>
                </header>
                <ul
                  className="mt-[19px] flex flex-col gap-2.5"
                  aria-label={product.title}
                >
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex min-h-[18px] items-center gap-2.5"
                    >
                      <img
                        className="h-[18px] w-[18px] shrink-0"
                        src="/images/check-contained.svg"
                        alt=""
                        aria-hidden="true"
                      />
                      <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-medium leading-[15px] tracking-[0] text-[#7e7e7e]">
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
