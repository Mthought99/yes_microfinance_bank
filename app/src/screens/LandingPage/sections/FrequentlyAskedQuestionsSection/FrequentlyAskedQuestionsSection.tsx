"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

const frequentlyAskedQuestions = [
  "How Is Yes Bank Different from Other Banks?",
  "Is My Money Safe with Yes MFB?",
  "Why do you need my BVN and NIN",
  "How do I apply for a loan?",
  "How long does it take to get approved and what are the repayment terms?",
  "What documents do I need?",
  "Can I repay my loan early?",
  "What happens if I miss a payment?",
  "Is my personal information secure?",
];

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  return (
    <section
      id="faq"
      aria-labelledby="frequently-asked-questions-heading"
      className="w-full bg-neutral-50 px-4 py-[120px] sm:px-6"
    >
      <div className="mx-auto flex w-full max-w-[838px] flex-col">
        <header className="flex justify-center">
          <h2
            id="frequently-asked-questions-heading"
            className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-center text-4xl font-medium leading-[48px] tracking-[-1.44px] text-[#0e0e0e] sm:text-5xl sm:leading-[60px]"
          >
            <span className="block">Commonly Asked</span>
            <span className="block">Questions</span>
          </h2>
        </header>
        <Accordion type="single" collapsible className="mt-8 w-full">
          {frequentlyAskedQuestions.map((question, index) => (
            <AccordionItem
              key={question}
              value={`question-${index + 1}`}
              className="border-b border-[#1c1c1c1a] px-4 py-0"
            >
              <AccordionTrigger className="min-h-[126px] py-12 text-left hover:no-underline [&>svg]:h-6 [&>svg]:w-6 [&>svg]:shrink-0 [&>svg]:text-[#0e0e0e]">
                <span
                  className={`[font-family:'Plus_Jakarta_Sans',Helvetica] pr-4 text-xl font-medium leading-[30px] tracking-[0] text-[#0e0e0e] sm:text-2xl ${
                    index === 4 ? "max-w-[510px]" : ""
                  }`}
                >
                  {question}
                </span>
              </AccordionTrigger>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="pt-12">
          <div className="flex min-h-[75px] w-full items-center justify-between gap-4 rounded-[48px] border border-solid border-[#04040433] py-2 pl-5 pr-2 sm:pl-8">
            <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-semibold leading-[25px] tracking-[0] text-[#0e0e0e] sm:text-xl">
              Have a diffrent question
            </p>
            <Button
              type="button"
              onClick={() => {
                document.getElementById("contact-us")?.scrollIntoView({
                  behavior: "smooth",
                });
                document.getElementById("full-name")?.focus();
              }}
              className="[font-family:'Plus_Jakarta_Sans',Helvetica] h-[57px] shrink-0 rounded-[30px] bg-[#059fde] px-5 text-sm font-medium leading-[25.2px] text-white hover:bg-[#059fde] sm:w-[209px] sm:px-10 sm:text-lg"
            >
              Ask Something
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
