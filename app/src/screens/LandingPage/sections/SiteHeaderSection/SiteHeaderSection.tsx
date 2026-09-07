"use client";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = ["Home", "Products", "Resources"];

export const SiteHeaderSection = (): JSX.Element => {
  const [activeNavigation, setActiveNavigation] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex min-h-[97px] w-full px-5 pb-[15px] pt-[27px] transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-white/90 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-md"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1310px] flex-wrap items-start justify-between gap-6">
        <div className="flex w-[243px] flex-col items-start justify-center gap-[7px]">
          <div className="flex w-full items-end gap-2.5">
            <img
              className="h-[40px] w-[40px]"
              alt="Yeslogo"
              src="/images/yeslogo.svg"
            />
            <div className="inline-flex h-[34px] items-start">
              <span className="mt-[-1px] flex h-[17px] w-[82px] items-center text-[#0d68b1] [font-family:'Montserrat',Helvetica] text-[43.8px] font-extrabold leading-[10px] tracking-[0]">
                yes
              </span>
              <span className="mt-[-1px] h-[21px] w-[113px] text-[#0d68b1] [font-family:'Montserrat',Helvetica] text-[13.3px] font-extrabold leading-[11.8px] tracking-[0]">
                MICROFINANCE
                <br />
                BANK
              </span>
            </div>
          </div>
          <p className="w-full text-[#059fde] [font-family:'Montserrat',Helvetica] text-[10px] font-medium italic leading-normal tracking-[0.7px]">
            Always with you...
          </p>
        </div>
        <nav aria-label="Primary navigation">
          <ul className="flex w-[237px] items-start justify-center gap-[30px]">
            {navigationItems.map((item) => (
              <li key={item}>
                <Button
                  type="button"
                  variant="ghost"
                  aria-pressed={activeNavigation === item}
                  onClick={() => setActiveNavigation(item)}
                  className="h-auto rounded-none p-0 text-[#0e0e0e] [font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-normal leading-normal tracking-[0] hover:bg-transparent hover:text-[#0e0e0e]"
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          type="button"
          className="h-[41px] w-40 rounded-[20px] bg-[#059fde] px-[18px] py-[11px] text-white shadow-none [font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-normal leading-normal tracking-[0] hover:bg-[#059fde]"
        >
          Cooperate Banking
        </Button>
      </div>
    </header>
  );
};
