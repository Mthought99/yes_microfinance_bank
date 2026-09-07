import { Button } from "../../../../components/ui/button";

const appStores = [
  {
    label: "Get it on Google Play",
    icon: "/images/Playstore.svg",
    iconAlt: "Playstore",
    type: "google-play",
  },
  {
    label: "Download on the App Store",
    icon: "/images/Apple-White.svg",
    iconAlt: "Apple",
    type: "app-store",
  },
] as const;

const regulatoryDetails = [
  {
    image: "/images/cbn.png",
    imageAlt: "Central bank of Nigeria",
    text: "Licensed by CBN",
    imageClassName: "h-[21px] w-[15.8px] object-cover",
    containerClassName: "gap-[6.18px]",
    textClassName: "w-[82.78px]",
  },
  {
    image: "/images/ndic.png",
    imageAlt: "Deposit insurance logo",
    text: "Deposits insured by",
    imageClassName: "h-[17.56px] w-[45.16px] object-cover",
    containerClassName: "gap-[8.93px]",
    textClassName: "w-[99px]",
  },
] as const;

export const PaymentHeroSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="payment-heading"
      className="w-full overflow-hidden bg-[#fafafaee]"
    >
      <div className="mx-auto flex min-h-[915px] w-full max-w-[1440px]">
        <div className="flex min-w-0 flex-1 items-center pl-6 pr-10 sm:pl-12 lg:pl-[118px] lg:pr-0">
          <div className="flex w-full max-w-[309px] flex-col items-start gap-[37px]">
            <header className="flex w-full flex-col items-start gap-3">
              <h1
                id="payment-heading"
                className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-4xl font-semibold leading-[1.24] tracking-[0] text-[#0e0e0e] sm:text-5xl sm:leading-[59.5px]"
              >
                Payments made simple
              </h1>
              <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-medium leading-[22.4px] tracking-[0] text-[#0e0e0e]">
                Simple payments, from QR codes to cards, for everyone.
              </p>
            </header>
            <div className="flex w-[282px] flex-col items-start gap-6">
              <div className="flex w-full items-center gap-[16.12px]">
                {appStores.map((store) => (
                  <Button
                    key={store.type}
                    type="button"
                    variant="ghost"
                    aria-label={store.label}
                    className="h-[43px] w-[129px] rounded-[6.45px] bg-black p-0 text-white hover:bg-black hover:text-white"
                  >
                    {store.type === "google-play" ? (
                      <span className="flex h-full w-full items-center">
                        <img
                          className="ml-[9px] h-[26px] w-[23px]"
                          alt={store.iconAlt}
                          src={store.icon}
                        />
                        <span className="ml-[7px] flex flex-col items-start gap-[3.22px]">
                          <span className="[font-family:'Product_Sans-Regular',Helvetica] text-[10.7px] font-normal leading-none tracking-[0]">
                            GET IT ON
                          </span>
                          <span className="[font-family:'SF_Compact_Display-Medium',Helvetica] text-[16px] font-medium leading-[19.3px] tracking-[-0.51px]">
                            Google Play
                          </span>
                        </span>
                      </span>
                    ) : (
                      <span className="flex h-full w-full items-center">
                        <img
                          className="ml-[9px] h-[26px] w-[22px]"
                          alt={store.iconAlt}
                          src={store.icon}
                        />
                        <span className="ml-[8px] flex flex-col items-start">
                          <span className="[font-family:'SF_Compact_Text-Medium',Helvetica] text-[9.7px] font-medium leading-[9.7px] tracking-[0]">
                            Download on the
                          </span>
                          <span className="[font-family:'SF_Compact_Display-Medium',Helvetica] text-[16px] font-medium leading-[19.3px] tracking-[-0.51px]">
                            App Store
                          </span>
                        </span>
                      </span>
                    )}
                  </Button>
                ))}
              </div>
              <ul
                className="flex w-full items-center gap-6"
                aria-label="Payment licenses"
              >
                {regulatoryDetails.map((detail) => (
                  <li
                    key={detail.text}
                    className={`flex items-center ${detail.containerClassName}`}
                  >
                    <img
                      className={detail.imageClassName}
                      alt={detail.imageAlt}
                      src={detail.image}
                    />
                    <span
                      className={`[font-family:'Plus_Jakarta_Sans',Helvetica] flex items-center text-[9.6px] font-semibold leading-[13.7px] tracking-[0] text-black ${detail.textClassName}`}
                    >
                      {detail.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <img
          className="hidden h-[915px] w-[758px] shrink-0 object-cover lg:block"
          alt="QPOS app displayed on a phone"
          src="/images/qpos-hero-image.png"
        />
      </div>
    </section>
  );
};
