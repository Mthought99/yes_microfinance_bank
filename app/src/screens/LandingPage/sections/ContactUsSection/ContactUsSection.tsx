"use client";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

const contactDetails = [
  {
    label: "Email",
    content: "care@yesmfbank.com",
    href: "mailto:care@yesmfbank.com",
  },
  {
    label: "Contact",
    content: "(+234)817 584 7841,  (+234)903 617 8647",
  },
  {
    label: "Address",
    content: "4, Adenubi Close, Off Majekodunmi Street, Allen Avenue, Ikeja.",
  },
];

const formFields = [
  {
    id: "full-name",
    label: "Full Name",
    placeholder: "Enter your full name...",
    type: "text",
  },
  {
    id: "email",
    label: "Email Address",
    placeholder: "name@yourbusines.com",
    type: "email",
  },
];

export const ContactUsSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="contact-us-heading"
      className="w-full bg-[linear-gradient(0deg,rgba(255,255,255,1)_65%,rgba(5,159,222,1)_100%)] px-6 py-20 sm:px-10 lg:min-h-[773px] lg:px-[max(2rem,calc((100%-1125px)/2))] lg:py-[120px]"
    >
      <div className="mx-auto grid max-w-[1125px] gap-16 lg:grid-cols-[434px_528px] lg:items-start lg:gap-[163px]">
        <div className="flex flex-col lg:min-h-[521px]">
          <header className="flex flex-col gap-[5px]">
            <h2
              id="contact-us-heading"
              className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-4xl font-medium leading-[60px] tracking-[-1.44px] text-[#0e0e0e] sm:text-5xl"
            >
              Let&apos;s Connect
            </h2>
            <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-normal leading-[22.4px] text-[#7e7e7e]">
              Whether you have a question, need support, or want to explore
              partnership opportunities, the YES Microfinance Bank team is here
              to help.
            </p>
          </header>
          <address className="mt-16 flex not-italic flex-col gap-[15px] lg:mt-[207px]">
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex flex-col items-start gap-[3px]"
              >
                <dt className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-medium leading-5 text-[#7e7e7e]">
                  {detail.label}
                </dt>
                <dd className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-normal leading-5 text-[#0e0e0e]">
                  {detail.href ? (
                    <a
                      className="whitespace-nowrap"
                      href={detail.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {detail.content}
                    </a>
                  ) : (
                    detail.content
                  )}
                </dd>
              </div>
            ))}
          </address>
        </div>
        <form
          className="flex w-full flex-col"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="flex flex-col gap-[26px]">
            <div className="grid gap-[22px] sm:grid-cols-2">
              {formFields.map((field) => (
                <div key={field.id} className="flex flex-col gap-[15px]">
                  <Label
                    htmlFor={field.id}
                    className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-semibold leading-5 text-[#0e0e0e]"
                  >
                    {field.label}
                  </Label>
                  <Input
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    type={field.type}
                    className="h-[45px] rounded-[10px] border-[#dfdfdfee] bg-[#fcfcfc] px-3.5 py-3 [font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-normal leading-5 text-[#0e0e0e] placeholder:text-[#7e7e7e] focus-visible:ring-[#059fde]"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[15px]">
              <Label
                htmlFor="subject"
                className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-semibold leading-5 text-[#0e0e0e]"
              >
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Tell us what you need"
                type="text"
                className="h-[45px] rounded-[10px] border-[#dfdfdfee] bg-[#fcfcfc] px-3.5 py-3 [font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-normal leading-5 text-[#0e0e0e] placeholder:text-[#7e7e7e] focus-visible:ring-[#059fde]"
              />
            </div>
            <div className="flex flex-col gap-[15px]">
              <Label
                htmlFor="message"
                className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-semibold leading-5 text-[#0e0e0e]"
              >
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Share your thought here..."
                className="h-48 resize-none rounded-[10px] border-[#dfdfdfee] bg-[#fcfcfc] px-3.5 py-3 [font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-normal leading-5 text-[#0e0e0e] placeholder:text-[#7e7e7e] focus-visible:ring-[#059fde]"
              />
            </div>
          </div>
          <Button
            type="submit"
            className="mt-[37px] h-[45px] w-full rounded-[20px] bg-[#059fde] [font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-semibold leading-5 text-white hover:bg-[#059fde]/90"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};
