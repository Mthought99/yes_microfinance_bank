import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    name: "Chinedu A.,",
    role: "Small Business Owner",
    avatarClass: "bg-[url(/images/avatar-1.png)]",
    quote:
      "The Yes MFBank App has made banking so much easier for me. Transfers are instant, and I can manage my finances anytime without visiting a branch.",
  },
  {
    name: "Aisha M.,",
    role: "Entrepreneur",
    avatarClass: "bg-[url(/images/avatar-2.png)]",
    quote:
      "I love how simple and secure the app is. Paying bills and sending money takes just a few taps, and I always receive instant notifications.",
  },
  {
    name: "Tolu O.,",
    role: "Freelancer",
    avatarClass: "bg-[url(/images/avatar-3.png)]",
    quote:
      "The savings features have helped me stay disciplined with my finances. It's the best digital banking experience I've had.",
  },
  {
    name: "Emeka N.,",
    role: "Business Consultant",
    avatarClass: "bg-[url(/images/avatar-4.png)]",
    quote:
      "The Yes MFBank App has made banking so much easier for me. Transfers are instant, and I can manage my finances anytime without visiting a branch.",
  },
  {
    name: "Fatima B.,",
    role: "Marketing Executive",
    avatarClass: "bg-[url(/images/avatar-5.png)]",
    quote:
      "Whether I'm at home or on the move, I can access my account anytime. The app is secure, convenient, and incredibly easy to use.",
  },
  {
    name: "David E.,",
    role: "Software Developer",
    avatarClass: "bg-[url(/images/avatar-6.png)]",
    quote:
      "I switched to Yes MFBank because I wanted a bank that fits my lifestyle. So far, it has exceeded my expectations with its speed and convenience.",
  },
];

const ratingStars = Array.from({ length: 5 }, (_, index) => ({
  id: `star-${index + 1}`,
}));

export const CustomerTestimonialsSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="customer-testimonials-heading"
      className="flex w-full flex-col items-center justify-center bg-white px-5 py-[120px] sm:px-8"
    >
      <div className="flex w-full max-w-[745px] flex-col items-center gap-12">
        <header className="flex w-full max-w-[555px] flex-col items-center gap-5 text-center">
          <h2
            id="customer-testimonials-heading"
            className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-4xl font-medium leading-[1.24] tracking-[0] text-[#0e0e0e] sm:text-5xl sm:leading-[59.5px]"
          >
            What Our Customers Are Saying
          </h2>
          <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-normal leading-[22.4px] tracking-[-0.32px] text-[#7e7e7e]">
            Customer satisfaction drives everything we do. Read authentic
            stories
            <br />
            from people who trust Yes MFBank to help them achieve
            <br />
            their financial goals with confidence and ease.
          </p>
        </header>
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="h-[234.2px] rounded-3xl border-[#eeeeeeee] bg-neutral-50 shadow-none"
            >
              <CardContent className="flex h-full flex-col items-start gap-[17px] p-0 pl-[25px] pr-6 py-[21px]">
                <header className="inline-flex items-center gap-[7px]">
                  <div
                    aria-hidden="true"
                    className={`h-9 w-9 shrink-0 rounded-[18px] bg-[#7e7e7e] bg-[100%_100%] ${testimonial.avatarClass}`}
                  />
                  <div className="flex w-[98px] flex-col items-start">
                    <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] -mt-px flex w-full items-center text-sm font-medium leading-[22.4px] tracking-[-0.32px] text-[#0e0e0e]">
                      {testimonial.name}
                    </h3>
                    <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] flex h-2 w-full items-center whitespace-nowrap text-[10px] font-normal leading-[22.4px] tracking-[-0.32px] text-[#7e7e7e]">
                      {testimonial.role}
                    </p>
                  </div>
                </header>
                <blockquote className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-xs font-medium leading-[19px] tracking-[-0.32px] text-[#7e7e7e]">
                  {testimonial.quote}
                </blockquote>
                {/* <img
                  className="mt-auto w-full"
                  alt="Frame"
                  src="/frame-94.svg"
                /> */}

                <div
                  className="flex h-[15.09px] w-[83.49px] items-center gap-[5px]"
                  aria-label="5 star rating"
                  role="img"
                >
                  {ratingStars.map((star) => (
                    <img
                      key={star.id}
                      className="h-3 w-3"
                      alt=""
                      aria-hidden="true"
                      src="/images/star.svg"
                    />
                  ))}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
