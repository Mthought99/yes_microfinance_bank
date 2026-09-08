import { Card, CardContent } from "../../../../components/ui/card";

const paymentProducts = [
  {
    title: "QR Code Payments",
    description:
      "Generate and scan QR codes for instant, contactless payments. Perfect for merchants, events, and peer-to-peer transfers.",
    image: "/images/qr-code-image.png",
    features: [
      "Static & dynamic QR codes",
      "Instant payment confirmation",
      "No hardware required",
      "Accept any mobile wallet",
      "Transaction history & reconciliation",
    ],
    cardHeight: "min-h-[705px]",
  },
  {
    title: "Card Issuance (Debit / Credit)",
    description:
      "Issue physical and virtual cards for your business or personal use. Control spending limits and manage cards in real-time.",
    image: "/images/credit-card-loan-image.png",
    features: [
      "Virtual & physical cards",
      "Instant issuance via ap",
      "Customizable spending limits",
      "Freeze/unfreeze instantly",
      "Contactless & chip-enabled",
    ],
    cardHeight: "min-h-[705px]",
  },
  {
    title: "POS Terminal for Collection",
    description:
      "Deploy POS terminals to accept card and QR payments at your store, restaurant, or event. Fast settlement and 24/7 support.",
    image: "/images/pos-terminal-image.png",
    features: [
      "Countertop & wireless options",
      "Accepts all cards & QR",
      "Real-time settlement",
      "Integrated receipt printer",
      "24/7 technical support",
    ],
    cardHeight: "min-h-[721px]",
  },
  {
    title: "Gift Cards",
    description:
      "Buy, sell, and manage gift cards for personal use or as a business. A flexible way to send value to anyone.",
    image: "/images/gift-card-image.png",
    features: [
      "Digital & physical gift cards",
      "Customizable amounts",
      "Instant delivery",
      "Redeemable at partner stores",
      "Balance management & tracking",
    ],
    cardHeight: "min-h-[705px]",
  },
  {
    title: "Real-time Alerts",
    description:
      "Stay informed with instant notifications for every transaction. Set up custom alerts for spending, deposits, and more.",
    image: "/images/instant-transfer-image.png",
    features: [
      "Batch processing",
      "Approval workflows",
      "Audit trail",
      "Upload CSV/Excel",
      "Scheduled payments",
    ],
    cardHeight: "min-h-[721px]",
  },
];

export const PaymentProductsSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-white px-5 py-[120px] sm:px-8"
      aria-label="Payment products"
    >
      <div className="mx-auto grid w-full max-w-[1154px] grid-cols-1 gap-[23px] md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[22px]">
        {paymentProducts.map((product) => (
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
