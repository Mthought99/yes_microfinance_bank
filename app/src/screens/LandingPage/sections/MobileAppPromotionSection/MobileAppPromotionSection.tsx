import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const appStoreButtons = [
  {
    label: "Get it on Google Play",
    icon: "/images/Playstore.svg",
    iconAlt: "Playstore",
    content: (
      <span className="flex w-[92px] flex-col items-start">
        <span className="[font-family:'Product_Sans-Regular',Helvetica] text-[11.8px] font-normal leading-none tracking-[0] text-black">
          GET IT ON
        </span>
        <span className="[font-family:'SF_Compact_Display-Medium',Helvetica] text-[17px] font-medium leading-[21.1px] tracking-[-0.55px] text-black">
          Google Play
        </span>
      </span>
    ),
  },
  {
    label: "Download on the App Store",
    icon: "/images/Apple.svg",
    iconAlt: "Apple",
    content: (
      <span className="flex w-[92px] flex-col items-start">
        <span className="[font-family:'SF_Compact_Text-Medium',Helvetica] -mt-[1.17px] text-[10.6px] font-medium leading-[10.6px] tracking-[0] text-black">
          Download on the
        </span>
        <span className="[font-family:'SF_Compact_Display-Medium',Helvetica] text-[17px] font-medium leading-[21.1px] tracking-[-0.55px] text-black">
          App Store
        </span>
      </span>
    ),
  },
];

export const MobileAppPromotionSection = (): JSX.Element => {
  return (
    <section className="flex min-h-[693px] w-full items-center justify-center bg-white px-5 py-[120px] sm:px-8">
      <Card className="w-full max-w-[1031px] overflow-hidden rounded-[24px] border-0 bg-[linear-gradient(350deg,rgba(13,104,177,1)_0%,rgba(5,159,222,1)_100%)] shadow-none lg:h-[447px] lg:rounded-[40px]">
        <CardContent className="grid h-full items-center gap-10 p-8 sm:p-10 lg:grid-cols-[447px_312px] lg:gap-[125px] lg:pb-0 lg:pl-[70px] lg:pr-[77px] lg:pt-[50px]">
          <div className="flex flex-col items-start gap-[29px]">
            <div>
              <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-3xl font-semibold leading-tight tracking-[-0.32px] text-white sm:text-4xl sm:leading-[50px]">
                Trusted by customers.
                <br />
                Powered by convenience.
              </h2>
            </div>
            <div className="flex flex-col items-start gap-10">
              <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-semibold leading-[25px] tracking-[-0.32px] text-white sm:text-xl">
                Get the Yes MFBank App and enjoy secure,
                <br className="hidden sm:block" /> seamless banking—wherever
                life takes you.
              </p>
              <div className="flex flex-wrap items-center gap-[17.62px]">
                {appStoreButtons.map((store) => (
                  <Button
                    key={store.label}
                    type="button"
                    variant="ghost"
                    aria-label={store.label}
                    className="h-auto h-[47px] w-[141px] justify-start gap-2 rounded-[7.05px] bg-white px-[9px] py-0 text-left hover:bg-white"
                  >
                    <img
                      className="h-7 w-[25px] shrink-0 object-contain"
                      alt={store.iconAlt}
                      src={store.icon}
                    />
                    {store.content}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <img
            className="mx-auto w-full max-w-[312px] self-end lg:h-[397px] lg:w-[312px]"
            alt="Iphone mockup"
            src="/images/iphone-mockup.png"
          />
        </CardContent>
      </Card>
    </section>
  );
};
