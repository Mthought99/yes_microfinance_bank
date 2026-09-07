"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "FAQ", href: "#faq" },
];

export const SiteHeaderSection = (): JSX.Element => {
  const pathname = usePathname();
  const [activeNavigation, setActiveNavigation] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (href: string) =>
    pathname === "/" ? href : `/${href}`;

  const handleNavigation = (label: string) => {
    setActiveNavigation(label);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 flex min-h-[97px] w-full px-5 pb-[15px] pt-[27px] transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-white/90 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-md"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1310px] flex-wrap items-start justify-between gap-6">
        <Link
          href={getHref("#home")}
          aria-label="Yes Microfinance Bank home"
          onClick={() => handleNavigation("Home")}
          className="flex w-[243px] flex-col items-start justify-center gap-[7px]"
        >
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
        </Link>
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex w-[237px] items-start justify-center gap-[30px]">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={getHref(item.href)}
                  aria-current={activeNavigation === item.label ? "page" : undefined}
                  onClick={() => handleNavigation(item.label)}
                  className="relative inline-flex py-1 text-[#0e0e0e] [font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-normal leading-normal tracking-[0] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#059fde] after:transition-transform hover:after:scale-x-100 aria-[current=page]:font-semibold aria-[current=page]:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          type="button"
          onClick={() => {
            handleNavigation("Resources");
            window.location.href = getHref("#contact-us-heading");
          }}
          className="hidden h-[41px] w-40 rounded-[20px] bg-[#059fde] px-[18px] py-[11px] text-white shadow-none [font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-normal leading-normal tracking-[0] hover:bg-[#059fde] md:inline-flex"
        >
          Cooperate Banking
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="text-[#0e0e0e] hover:bg-transparent md:hidden"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {isMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full border-t border-[#0e0e0e1a] bg-white px-5 py-5 shadow-lg md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={getHref(item.href)}
                  onClick={() => handleNavigation(item.label)}
                  className="block py-2 [font-family:'Plus_Jakarta_Sans',Helvetica] text-sm text-[#0e0e0e]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={getHref("#contact-us-heading")}
                onClick={() => handleNavigation("Resources")}
                className="block rounded-[20px] bg-[#059fde] px-4 py-3 text-center [font-family:'Plus_Jakarta_Sans',Helvetica] text-sm text-white"
              >
                Cooperate Banking
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
