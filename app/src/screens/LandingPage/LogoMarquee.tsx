"use client";

import { motion } from "framer-motion";

interface Logo {
  alt: string;
  className: string;
  src: string;
}

export const LogoMarquee = ({ logos }: { logos: Logo[] }): JSX.Element => {
  const maskStyle = {
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black, black, transparent)",
    maskImage:
      "linear-gradient(to right, transparent, black, black, transparent)",
  };

  return (
    <section className="flex w-full items-center justify-center overflow-hidden bg-white px-6 py-[46px] sm:px-10">
      <div
        className="w-full max-w-[1024px] overflow-hidden"
        style={maskStyle}
      >
        <motion.div
          className="flex w-max items-center gap-x-[78.91px]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={`${logo.src}-${i}`}
              className={`${logo.className} shrink-0 object-contain`}
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};