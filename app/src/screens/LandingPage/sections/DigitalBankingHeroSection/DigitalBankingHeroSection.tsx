const headlineLines = ["Banking,", "payments &", "loans for your", "business"];

const descriptionLines = [
  "A fast, reliable, and secure payment",
  "From Loans, Investment, Payments",
  "and card issuance to bulk disbursements",
  "and virtual accounts — Yes Microfinance Bank delivers a full suite for enterprises",
  "and individuals.",
];

const ratingStars = Array.from({ length: 5 }, (_, index) => ({
  id: `star-${index + 1}`,
}));

export const DigitalBankingHeroSection = (): JSX.Element => {
  return (
    <section className="grid min-h-[926px] w-full overflow-hidden bg-[#e2e2e2] [grid-template-areas:'stack']">
      <img
        className="h-full min-h-[926px] w-full object-cover [grid-area:stack]"
        alt="Rectangle"
        src="/images/heroBg.png"
      />
      <div className="z-10 flex min-h-[926px] w-full items-center px-4 py-16 sm:px-8 md:px-[83px] md:py-44 [grid-area:stack]">
        <div className="flex min-h-[574px] w-full max-w-[1236px] items-end justify-between gap-10">
          <header className="w-full max-w-[367px] [font-family:'Plus_Jakarta_Sans',Helvetica] text-[38px] font-semibold leading-[1.08] tracking-[0] text-white sm:text-[46px] md:text-[55px] md:leading-[59.5px]">
            <h1>
              {headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </header>
          <aside className="flex w-full max-w-[325px] flex-col gap-[27px] self-end">
            <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-semibold leading-5 tracking-[0] text-white md:text-base">
              {descriptionLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <div className="flex w-full max-w-[277px] items-center gap-[15px]">
              <img className="shrink-0" alt="Frame" src="/images/users.png" />
              <div className="flex w-36 flex-col items-start gap-0.5">
                <div
                  className="flex h-[15.09px] w-[83.49px] items-center gap-[5px]"
                  aria-label="5 star rating"
                  role="img"
                >
                  {ratingStars.map((star) => (
                    <img
                      key={star.id}
                      className="h-3 w-3"
                      alt=""
                      aria-hidden="true"
                      src="/images/star.svg"
                    />
                  ))}
                </div>
                <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-semibold leading-[22.1px] tracking-[0] text-white">
                  13k rating (4.7 Rating)
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
