import { Card, CardContent } from "../../../../components/ui/card";

const bankingProducts = [
  {
    title: "Current & Savings Accounts",
    description:
      "Choose from a range of accounts tailored to your needs. Enjoy daily interest, free debit cards, and full mobile access.",
    image: "/images/savings-account-image.png",
    features: [
      "Tiered interest rates",
      "Joint & business accounts",
      "e-statements & alerts",
      "Instant account opening",
      "Multi-currency suppor",
    ],
    cardHeight: "min-h-[705px]",
  },
  {
    title: "Virtual Accounts for Collections",
    description:
      "Issue unique virtual account numbers to each customer or partner. Automatically reconcile payments and reduce manual work.",
    image: "/images/virtual-account-image.png",
    features: [
      "Customizable reference fields",
      "Webhook notifications",
      "Dashboard analytics",
      "Unique per customer",
      "Auto-reconciliation",
    ],
    cardHeight: "min-h-[705px]",
  },
  {
    title: "Instant Fund Transfers",
    description:
      "Transfer funds instantly to any bank in Nigeria or internationally. Secure, reliable, and with real-time confirmation.",
    image: "/images/instant-transfer-image.png",
    features: [
      "NIP & NEFT channels",
      "Bulk transfer option",
      "24/7 availability",
      "No transfer limits",
      "Beneficiary management",
    ],
    cardHeight: "min-h-[705px]",
  },
  {
    title: "Bulk Payments & Payroll",
    description:
      "Streamline your payroll and supplier payments. Upload a file, review, and approve — all in one place.",
    image: "/images/bulk-payment-image.png",
    features: [
      "Batch processing",
      "Approval workflows",
      "Audit trail",
      "Upload CSV/Excel",
      "Scheduled payments",
    ],
    cardHeight: "min-h-[721px]",
  },
  {
    title: "Bills Payment",
    description:
      "Pay your utility bills, credit card bills, and loan instalments directly from your Yes Microfinance Bank account. Set up recurring payments for peace of mind.",
    image: "/images/bills-payment-image.png",
    features: [
      "Electricity (IKEDC, EKEDC, etc.)",
      "Credit card bills",
      "Recurring schedules",
      "Water & internet",
      "Loan repayments",
      "Payment history",
    ],
    cardHeight: "min-h-[721px]",
  },
];

export const BankingProductsSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-white px-5 py-[120px] sm:px-8"
      aria-label="Banking products"
    >
      <div className="mx-auto grid w-full max-w-[1154px] grid-cols-1 gap-[23px] md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[22px]">
        {bankingProducts.map((product) => (
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
