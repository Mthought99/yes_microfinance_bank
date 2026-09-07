"use client";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const footerNavigation = [
  {
    title: "Products",
    links: ["Loan", "Terminal", "Banking", "Investment"],
  },
  {
    title: "Company",
    links: ["About Us", "FAQ", "Contact Us"],
  },
  {
    title: "Policies",
    links: ["Terms & Condition", "Cookies & Policy", "Privacy Policy"],
  },
];

const socialLinks = [
  { src: "/images/instagram.svg", alt: "Link" },
  { src: "/images/facebook.svg", alt: "Link" },
  { src: "/images/twitter.svg", alt: "Link" },
  { src: "/images/linkedin.svg", alt: "Link" },
];

export const SiteFooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#025597] px-6 py-16 text-white sm:px-10 lg:px-0 lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1208px] flex-col gap-[30px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[318px_111px_104px_155px_336px] lg:justify-center lg:gap-11">
          <section className="flex flex-col items-start gap-6">
            <div
              className="flex h-[62px] w-[224px] items-center gap-[7.29px]"
              aria-label="Yes Microfinance Bank"
            >
              <img
                className="h-[38.29px] w-[37.38px]"
                alt="Yeslogo"
                src="/images/yeslogo-white.svg"
              />
              <div className="flex h-[62px] items-start">
                <span className="[font-family:'Montserrat',Helvetica] text-[43.8px] font-extrabold leading-[normal] tracking-[0]">
                  yes
                </span>
                <div className="mt-4 -ml-[3px] flex flex-col [font-family:'Montserrat',Helvetica] font-extrabold leading-[normal]">
                  <span className="whitespace-nowrap text-center text-[11.3px] tracking-[0]">
                    MICROFINANCE
                  </span>
                  <span className="ml-[3px] text-[11.3px] tracking-[0]">
                    BANK
                  </span>
                  <span className="ml-[3px] mt-[1px] text-[4.6px] tracking-[0.32px]">
                    RC: 1319067
                  </span>
                </div>
              </div>
            </div>
            <p className="font-normal leading-normal [font-family:'Inter',Helvetica] text-base tracking-[0]">
              Grow wealth, transfer funds, go cashless,
              <br />
              save,and earn competitive interest at
              <br />
              Yes Microfinance Bank.
            </p>
            <div
              className="flex items-center gap-[12.03px]"
              aria-label="Social media links"
            >
              {socialLinks.slice(0, 4).map((socialLink) => (
                <Button
                  key={socialLink.src}
                  type="button"
                  variant="ghost"
                  className="h-[55px] w-[55px] shrink-0 rounded-none p-0 hover:bg-transparent"
                  aria-label={socialLink.alt}
                >
                  <img
                    className="h-[55px] w-[55px]"
                    alt=""
                    src={socialLink.src}
                  />
                </Button>
              ))}
            </div>
          </section>
          {footerNavigation.map((navigationGroup) => (
            <nav key={navigationGroup.title} aria-label={navigationGroup.title}>
              <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-lg font-semibold leading-[22.4px] tracking-[0]">
                {navigationGroup.title}
              </h2>
              <ul className="mt-5 flex flex-col gap-2.5">
                {navigationGroup.links.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-left text-base font-normal leading-[22.4px] tracking-[0] transition-opacity hover:opacity-80"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <section className="flex flex-col items-start gap-5">
            <p className="max-w-80 [font-family:'Plus_Jakarta_Sans',Helvetica] text-lg font-medium leading-[22.4px] tracking-[0]">
              Stay ahead with early updates on new{" "}
              <strong className="font-semibold">YesMFBank app</strong> features.
              Join thousands of users today.
            </p>
            <form
              className="flex w-full max-w-[336px] items-center gap-[7px]"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="sr-only" htmlFor="footer-email">
                Your email
              </label>
              <Input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="h-[42px] w-[220px] rounded-[10px] border-[#ffffffcc] bg-transparent px-3 py-3 [font-family:'Plus_Jakarta_Sans',Helvetica] text-base text-white placeholder:text-white focus-visible:ring-[#04b3fb]"
              />
              <Button
                type="submit"
                className="h-[42px] w-[109px] rounded-[10px] bg-[#04b3fb] px-3 [font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-normal text-white hover:bg-[#04b3fb]/90"
              >
                Subscribe
              </Button>
            </form>
          </section>
        </div>
        <div className="flex flex-col items-center gap-8 pt-10">
          <div className="h-px w-full bg-[#eeeeee33]" />
          <p className="text-center [font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-normal leading-[22.4px] tracking-[0]">
            © Copyright 2026 | Design &amp; Developed By C24 Technology Solution
          </p>
          <div className="h-px w-full bg-[#eeeeee33]" />
        </div>
      </div>
    </footer>
  );
};
