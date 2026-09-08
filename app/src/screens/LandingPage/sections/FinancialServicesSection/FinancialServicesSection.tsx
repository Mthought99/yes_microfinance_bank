"use client";
import {
  ArrowUpRightIcon,
  CheckIcon,
  LockKeyholeIcon,
  TargetIcon,
  TrendingUpIcon,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useRouter } from "next/navigation";

const savingsPlans = [
  {
    name: "YesFlex",
    description: "Flexible Savings Plan",
    rate: "15% Per annum",
    icon: TrendingUpIcon,
    iconBackground: "bg-[#bfdbff]",
    actionBackground: "bg-[#0d68b1]",
    benefits: [
      "Withdraw anytime",
      "Ideal for emergency savings",
      "No fee attached",
    ],
  },
  {
    name: "YesTarget",
    description: "Achieve your target",
    rate: "15% Per annum",
    icon: TargetIcon,
    iconBackground: "bg-[#a0f2bf]",
    actionBackground: "bg-[#058d39]",
    benefits: [
      "Spend Wisely and Save with Discipline",
      "Goal-based savings",
      "No fee attached",
    ],
  },
  {
    name: "YesLock",
    description: "Achieve your target",
    rate: "20% Per annum",
    icon: LockKeyholeIcon,
    iconBackground: "bg-[#ffc6c6]",
    actionBackground: "bg-[#cc2828]",
    benefits: [
      "Higher returns guaranteed",
      "Fixed Term Deposit",
      "No fee attached",
    ],
  },
];

const loanDetails = [
  { label: "Principal Amount", value: "₦100,000" },
  { label: "Interest", value: "₦3,500" },
  { label: "Repayemnt", value: "₦103,500" },
];

const HoverableCard = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`${className} ${isHovered ? "translate-y-[-4px] scale-[1.02] shadow-xl" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Card>
  );
};

const ArrowButton = ({
  label,
  href,
}: {
  label: string;
  href?: string;
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (!href) return;
    if (href.startsWith("/")) {
      router.push(href);
    } else {
      window.location.href = href;
    }
  };

  return (
    <Button
      type="button"
      variant="secondary"
      size="icon"
      aria-label={label}
      onClick={handleClick}
      className="financial-services-arrow h-10 w-10 shrink-0 rounded-full border-0 bg-white p-0 text-[#0e0e0e] shadow-none transition-all duration-300 ease-out hover:bg-[#059FDE] hover:text-white hover:scale-105"
    >
      <ArrowUpRightIcon
        className="financial-services-arrow-icon h-[21px] w-[21px] transition-colors duration-300"
        strokeWidth={2}
      />
    </Button>
  );
};

export const FinancialServicesSection = (): JSX.Element => {
  return (
    <section id="products" className="w-full bg-neutral-50 px-4 py-[72px] sm:px-6 md:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12">
        <header className="flex max-w-[639px] flex-col items-center gap-5 text-center">
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-4xl font-medium leading-[1.24] tracking-[0] text-[#0e0e0e] sm:text-5xl sm:leading-[59.5px]">
            Grow your finances with our
            <br />
            trusted financial solutions
          </h2>
          <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-medium leading-[22.4px] tracking-[0] text-[#7e7e7e] sm:text-base">
            Unlock opportunities to save smarter, invest wisely, and access the
            financial
            <br className="hidden sm:block" /> support you need. With secure,
            innovative, and customer-focused
            <br className="hidden sm:block" /> services, we&apos;re here to help
            you grow your wealth and achieve
            <br className="hidden sm:block" /> lasting financial stability.
          </p>
        </header>
        <div className="flex w-full flex-col gap-[21px]">
          <div className="grid w-full grid-cols-1 gap-[21px] lg:grid-cols-3">
            <HoverableCard className="financial-services-card group relative h-[700px] overflow-hidden rounded-[30px] border-[0.89px] border-[#cecece] bg-[linear-gradient(270deg,rgba(228,228,228,1)_0%,rgba(216,216,216,1)_100%)] shadow-none transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                alt="Mask group"
                src="/images/mobile-banking.png"
              />
              <CardContent className="relative z-10 flex h-full flex-col p-[26px]">
                <div className="flex w-full flex-col gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="w-[182px] [font-family:'Plus_Jakarta_Sans',Helvetica] text-[28.5px] font-semibold leading-[30.2px] tracking-[0] text-[#0e0e0e]">
                      Banking built
                      <br />
                      for you
                    </h3>
                    <ArrowButton label="Explore banking built for you" href="/banking" />
                  </div>
                  <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-medium leading-[22.4px] tracking-[0] text-[#0e0e0e]">
                    Simple banking for everyday needs and business payments.
                  </p>
                </div>
              </CardContent>
            </HoverableCard>
            <HoverableCard className="financial-services-card group h-[700px] rounded-[30px] border-0 bg-[#d9d9d9] shadow-none transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
              <CardContent className="flex h-full flex-col p-[26px]">
                <div className="flex flex-col gap-[21px]">
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="max-w-[224px] [font-family:'Plus_Jakarta_Sans',Helvetica] text-[28.5px] font-semibold leading-[30.2px] tracking-[0] text-[#0e0e0e]">
                        Investments &amp; wealth
                      </h3>
                      <ArrowButton label="Explore investments and wealth" href="/investment" />
                    </div>
                    <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-medium leading-[22.4px] tracking-[0] text-black">
                      Grow your money with YES Microfinance Bank. Smart
                      investment solutions for every stage.
                    </p>
                  </div>
                  <div className="flex flex-col gap-[15px]">
                    {savingsPlans.map((plan) => {
                      const Icon = plan.icon;

                      return (
                        <Card
                          key={plan.name}
                          className="group/plan rounded-[24.33px] border-[1.16px] border-[#dfdfdf] bg-white shadow-none transition-transform duration-300 ease-out hover:-translate-y-1"
                        >
                          <CardContent className="flex flex-col gap-[19.7px] p-5 sm:p-[20px]">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex min-w-0 items-center gap-3">
                                <div
                                  className={`flex h-[33.6px] w-[33.6px] shrink-0 items-center justify-center rounded-[16.8px] ${plan.iconBackground}`}
                                >
                                  <Icon className="h-[18.54px] w-[18.54px] text-[#0e0e0e]" />
                                </div>
                                <div className="flex min-w-0 flex-col gap-[5px]">
                                  <h4 className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-[16.2px] font-semibold leading-[11.6px] tracking-[0] text-black">
                                    {plan.name}
                                  </h4>
                                  <p className="whitespace-nowrap [font-family:'Plus_Jakarta_Sans',Helvetica] text-[11.6px] font-semibold leading-[11.6px] tracking-[0] text-[#7e7e7e]">
                                    {plan.description}
                                  </p>
                                </div>
                              </div>
                              <span className="shrink-0 rounded-[11.59px] bg-[#d9d9d9] px-[10.43px] py-[10.43px] [font-family:'Plus_Jakarta_Sans',Helvetica] text-xs font-semibold leading-[11.6px] tracking-[0] text-black">
                                {plan.rate}
                              </span>
                            </div>
                            <div className="flex items-end justify-between gap-3">
                              <ul className="flex flex-col gap-[7px]">
                                {plan.benefits.map((benefit) => (
                                  <li
                                    key={benefit}
                                    className="flex items-center gap-[3.48px] [font-family:'Plus_Jakarta_Sans',Helvetica] text-[11.6px] font-medium leading-[15.9px] tracking-[0] text-[#7e7e7e]"
                                  >
                                    <CheckIcon className="h-[11.59px] w-[11.59px] shrink-0 text-[#058d39]" />
                                    <span className="whitespace-nowrap">
                                      {benefit}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                              <Button
                                type="button"
                                size="icon"
                                aria-label={`View ${plan.name} details`}
                                onClick={() => {
                                  window.location.href = `/?plan=${encodeURIComponent(plan.name)}#contact-us`;
                                }}
                                className={`h-[32.44px] w-[32.44px] shrink-0 rounded-[16.22px] p-0 text-white transition-colors duration-300 group-hover/plan:bg-[#059FDE] hover:opacity-90 ${plan.actionBackground}`}
                              >
                                <ArrowUpRightIcon className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </HoverableCard>
            <HoverableCard className="financial-services-card group relative h-[700px] overflow-hidden rounded-[30px] border-[0.89px] border-[#cecece] bg-[linear-gradient(270deg,rgba(229,228,227,1)_0%,rgba(218,218,217,1)_100%)] shadow-none transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                alt="Mask group"
                src="images/qpos.png"
              />
              <CardContent className="relative z-10 flex h-full flex-col p-[26px]">
                <div className="flex flex-col gap-[13px]">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="max-w-[224px] [font-family:'Plus_Jakarta_Sans',Helvetica] text-[28.5px] font-semibold leading-[30.2px] tracking-[0] text-[#0e0e0e]">
                      Payments made simple
                    </h3>
                    <ArrowButton label="Explore payments made simple" href="/payment" />
                  </div>
                  <p className="max-w-[309px] [font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-medium leading-[22.4px] tracking-[0] text-[#0e0e0e]">
                    Simple payments, from QR codes to cards, for everyone.
                  </p>
                </div>
              </CardContent>
            </HoverableCard>
          </div>
          <HoverableCard className="financial-services-card group overflow-hidden rounded-[30px] border-0 bg-[#e0dfdf] shadow-none transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl">
            <CardContent className="p-5 sm:p-10">
              <div className="flex flex-col gap-[60px]">
                <div className="flex flex-col gap-[7px]">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-[28.5px] font-semibold leading-[30.2px] tracking-[0] text-[#0e0e0e]">
                      Loans for every need
                    </h3>
                    <ArrowButton label="Explore loans for every need" href="/loan" />
                  </div>
                  <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-medium leading-[22.4px] tracking-[0] text-[#0e0e0e]">
                    Get the funding you need, fast. Flexible loans with quick
                    approval.
                  </p>
                </div>
                <div className="grid min-h-[310px] grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_minmax(520px,779px)_1fr] lg:gap-0">
                  <img
                    className="order-2 mx-auto h-auto w-full max-w-[295px] lg:order-1"
                    alt="Falling money notes"
                    src="images/falling-money.png"
                  />
                  <Card className="order-1 rounded-[30px] border-0 bg-white shadow-none lg:order-2">
                    <CardContent className="p-0">
                      <div className="flex flex-col gap-10 pt-[23px]">
                        <div className="flex items-center gap-5 px-7 sm:px-[50px]">
                          <div className="flex h-[78.83px] w-[78.83px] shrink-0 items-center justify-center rounded-full bg-[#ddffde]">
                            <img
                              className="h-[46.81px] w-[46.81px]"
                              alt="CheckIcon contained"
                              src="images/checked.svg"
                            />
                          </div>
                          <div className="flex flex-col gap-[7px]">
                            <h4 className="whitespace-nowrap [font-family:'Plus_Jakarta_Sans',Helvetica] text-2xl font-semibold leading-7 tracking-[0] text-black">
                              You&apos;re Approved
                            </h4>
                            <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-semibold leading-[18px] tracking-[0] text-[#7e7e7e]">
                              Credit
                            </p>
                          </div>
                        </div>
                        <div className="rounded-b-[30px] border-t border-[#eeeeee] px-5 py-9 sm:px-[60px] sm:py-[51px]">
                          <dl className="grid grid-cols-3 gap-3 sm:gap-[29px]">
                            {loanDetails.map((detail) => (
                              <div key={detail.label} className="min-w-0">
                                <dt className="whitespace-nowrap [font-family:'Plus_Jakarta_Sans',Helvetica] text-xs font-semibold leading-[22.5px] tracking-[0] text-[#7e7e7e] sm:text-base">
                                  {detail.label}
                                </dt>
                                <dd className="mt-2 whitespace-nowrap [font-family:'Plus_Jakarta_Sans',Helvetica] text-lg font-semibold leading-[39px] tracking-[0] text-black sm:text-[32px]">
                                  {detail.value}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <img
                    className="order-3 mx-auto h-auto w-full max-w-[281px]"
                    alt="Gold coin naira"
                    src="/images/gold-coin-naira.png"
                  />
                </div>
              </div>
            </CardContent>
          </HoverableCard>
        </div>
      </div>
    </section>
  );
};
