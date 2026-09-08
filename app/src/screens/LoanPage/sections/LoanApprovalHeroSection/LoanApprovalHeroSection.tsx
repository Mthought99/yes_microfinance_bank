import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const storeBadges = [
  {
    label: "Get it on Google Play",
    icon: "/images/Playstore.svg",
    iconAlt: "Playstore",
    content: (
      <>
        <span className="[font-family:'Product_Sans-Regular',Helvetica] text-[10.7px] leading-none">
          GET IT ON
        </span>
        <span className="[font-family:'SF_Compact_Display-Medium',Helvetica] text-[15px] leading-[19.3px] tracking-[-0.51px]">
          Google Play
        </span>
      </>
    ),
  },
  {
    label: "Download on the App Store",
    icon: "/images/Apple-White.svg",
    iconAlt: "Apple",
    content: (
      <>
        <span className="[font-family:'SF_Compact_Text-Medium',Helvetica] text-[9.7px] leading-[9.7px]">
          Download on the
        </span>
        <span className="[font-family:'SF_Compact_Display-Medium',Helvetica] text-[15px] leading-[19.3px] tracking-[-0.51px]">
          App Store
        </span>
      </>
    ),
  },
];

const approvalDetails = [
  { label: "Principal Amount", value: "₦100,000", width: "w-[202.71px]" },
  { label: "Interest", value: "₦3,500", width: "w-36" },
  { label: "Repayemnt", value: "₦103,500", width: "w-[177px]" },
];

const certifications = [
  {
    image: "images/cbn.png",
    imageAlt: "Central Bank of Nigeria",
    imageClassName: "h-[21px] w-[15.8px]",
    text: "Licensed by CBN",
    containerClassName: "gap-[6.18px]",
  },
  {
    image: "images/ndic.png",
    imageAlt: "NDIC",
    imageClassName: "h-[17.56px] w-[45.16px]",
    text: "Insured by NDIC",
    containerClassName: "gap-[8.93px]",
  },
];

export const LoanApprovalHeroSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="loan-approval-heading"
      className="flex min-h-[800px] w-full flex-col items-center overflow-hidden bg-neutral-50 px-4 py-[60px] sm:px-6 md:py-[120px]"
    >
      <div className="flex w-full max-w-[1106px] flex-col items-center">
        <header className="flex flex-col items-center gap-[7px] text-center">
          <h1
            id="loan-approval-heading"
            className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-4xl font-semibold leading-[59.5px] tracking-[0] text-[#0e0e0e] sm:text-5xl"
          >
            Loans for every need
          </h1>
          <p className="max-w-[502px] [font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-normal leading-[22.4px] tracking-[0] text-[#0e0e0e]">
            Get the funding you need, fast. Flexible loans with quick approval.
          </p>
          <div className="mt-1 flex w-[282px] flex-col items-start gap-6">
            <div className="flex w-full items-center gap-[16.12px]">
              {storeBadges.map((store) => (
                <Button
                  key={store.label}
                  type="button"
                  aria-label={store.label}
                  variant="default"
                  className="h-[43px] w-[129px] rounded-[6.45px] bg-black p-0 text-white hover:bg-black/90"
                >
                  <img
                    className="ml-[9px] h-[26px] w-[23px] shrink-0 object-contain"
                    alt={store.iconAlt}
                    src={store.icon}
                  />
                  <span className="ml-[7px] flex flex-col items-start gap-[3.22px] text-left">
                    {store.content}
                  </span>
                </Button>
              ))}
            </div>
            <div className="flex w-full items-center gap-6">
              {certifications.map((certification) => (
                <div
                  key={certification.text}
                  className={`flex items-center ${certification.containerClassName}`}
                >
                  <img
                    className={`${certification.imageClassName} shrink-0 object-cover`}
                    alt={certification.imageAlt}
                    src={certification.image}
                  />
                  <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-[9.6px] font-semibold leading-[13.7px] tracking-[0] text-black">
                    {certification.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </header>
        <div className="relative mt-[23px] h-[347px] w-full max-w-[1105px]">
          <img
            className="absolute left-1/2 top-0 z-20 h-[347px] w-[306px] -translate-x-[calc(50%+400px)] object-contain"
            alt="Falling money notes"
            src="/images/falling-money.png"
          />
          <Card className="absolute left-1/2 top-[23px] z-10 h-[303px] w-[752px] -translate-x-1/2 overflow-visible border-0 bg-transparent shadow-[0px_4px_10px_#0000001a] bg-white">
            <CardContent className="relative z-10 flex h-full flex-col items-start gap-[54px] px-[80px] py-[37px]">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[78.83px] w-[78.83px] shrink-0 items-center justify-center rounded-[39.42px] bg-[#ddffde]">
                  <img
                    className="h-[46.81px] w-[46.81px]"
                    alt="Approved"
                    src="/images/checked.svg"
                  />
                </div>
                <div className="flex w-[294px] flex-col items-start gap-[7px]">
                  <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-2xl font-semibold leading-7 tracking-[0] text-black">
                    You&apos;re Approved
                  </h2>
                  <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-semibold leading-[18px] tracking-[0] text-[#7e7e7e]">
                    Credit
                  </p>
                </div>
              </div>
              <dl className="flex items-center gap-[29px]">
                {approvalDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className={`flex flex-col items-start gap-2.5 ${detail.width}`}
                  >
                    <dt className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-semibold leading-[22.5px] tracking-[0] text-[#7e7e7e] whitespace-nowrap">
                      {detail.label}
                    </dt>
                    <dd className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-[32px] font-semibold leading-[39px] tracking-[0] text-black whitespace-nowrap">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
          <img
            className="absolute right-0 top-[52px] z-20 h-[246px] w-[265px] object-contain"
            alt="Gold coin naira"
            src="/images/gold-coin-naira.png"
          />
        </div>
      </div>
    </section>
  );
};
