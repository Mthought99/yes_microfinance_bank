"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

const frequentlyAskedQuestions = [
  {
    question: "How Is Yes Bank Different from Other Banks?",
    answer:
      "Yes Bank is designed for simple, secure, and convenient everyday banking. We combine digital-first access, responsive support, and practical financial products such as loans, payments, and savings options in one place.",
  },
  {
    question: "Is My Money Safe with Yes MFB?",
    answer:
      "Yes. We use secure banking systems, encrypted data handling, and strong verification checks to protect your account and transactions. Our processes are designed to help keep your money and personal information safe.",
  },
  {
    question: "Why do you need my BVN and NIN",
    answer:
      "We request your BVN and NIN to verify your identity, prevent fraud, and comply with banking regulations. This helps us process account openings, loan applications, and other services securely.",
  },
  {
    question: "How do I apply for a loan?",
    answer:
      "You can apply online through our website or mobile banking platform. Simply complete your details, upload the required documents, and submit your application for review. Our team will guide you through the next steps.",
  },
  {
    question:
      "How long does it take to get approved and what are the repayment terms?",
    answer:
      "Approval times vary depending on the product and how quickly your documents are verified. In most cases, applications are reviewed within a few business days. Repayment terms are clearly outlined before you proceed, with flexible options available based on your loan type.",
  },
  {
    question: "What documents do I need?",
    answer:
      "Common requirements include a valid ID, BVN or NIN, proof of address, and basic financial information. The exact documents may vary depending on the product you are applying for.",
  },
  {
    question: "Can I repay my loan early?",
    answer:
      "Yes, early repayment is usually available and can help reduce the overall interest you pay. Please check your loan agreement for any applicable terms or fees before making an early repayment.",
  },
  {
    question: "What happens if I miss a payment?",
    answer:
      "A missed payment may lead to late charges and could affect your account standing. If this happens, please contact our support team as soon as possible so we can help you find the best next step.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes. We use secure systems, access controls, and privacy measures to protect your personal and financial information. We only share data where required by law or with your explicit consent.",
  },
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
          {frequentlyAskedQuestions.map(({ question, answer }, index) => (
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
              <AccordionContent className="pb-4">
                <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] max-w-[760px] text-base leading-7 tracking-[0] text-[#0e0e0e]/80 sm:text-lg pb-4">
                  {answer}
                </p>
              </AccordionContent>
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
