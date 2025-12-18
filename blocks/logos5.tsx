"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Fragment } from "react/jsx-runtime";

const data = [
  {
    logo: "/logoipsum.svg",
  },
  {
    logo: "/logoipsum2.svg",
  },
  {
    logo: "/logoipsum3.svg",
  },
  {
    logo: "/logoipsum4.svg",
  },
  {
    logo: "/logoipsum2.svg",
  },
  {
    logo: "/logoipsum4.svg",
  },
  {
    logo: "/logoipsum.svg",
  },
  {
    logo: "/logoipsum3.svg",
  },
];

const Logos5 = () => {
  return (
    <section className="py-32 px-2 md:px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start gap-16 md:gap-10 w-fit mx-auto">
          <div className="flex flex-col gap-4 text-center md:text-left my-auto w-full">
            <h2 className="text-4xl font-medium text-balance">
              Trusted by companies worldwide
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Teams and businesses that rely on our service.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-10 my-auto w-full">
            <div className="flex overflow-hidden h-fit mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] w-full">
              <motion.div
                animate={{
                  x: "-50%",
                }}
                transition={{
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="flex flex-none gap-16 pr-16"
              >
                {Array.from({ length: 2 }).map((_, i) => (
                  <Fragment key={i}>
                    {data.map((item, index) => (
                      <Image
                        src={item.logo}
                        key={index}
                        alt={`Logo ${index + 1}`}
                        width={100}
                        height={100}
                        className="w-32 sm:w-40 dark:invert"
                      />
                    ))}
                  </Fragment>
                ))}
              </motion.div>
            </div>
            <div className="flex overflow-hidden h-fit mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] w-full">
              <motion.div
                animate={{
                  x: "0%",
                }}
                initial={{ x: "-50%" }}
                transition={{
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="flex flex-none gap-16 pr-16"
              >
                {Array.from({ length: 2 }).map((_, i) => (
                  <Fragment key={i}>
                    {data.map((item, index) => (
                      <Image
                        src={item.logo}
                        key={index}
                        alt={`Logo ${index + 1}`}
                        width={100}
                        height={100}
                        className="w-32 sm:w-40 dark:invert"
                      />
                    ))}
                  </Fragment>
                ))}
              </motion.div>
            </div>
            <div className="flex overflow-hidden h-fit mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] w-full">
              <motion.div
                animate={{
                  x: "-50%",
                }}
                transition={{
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="flex flex-none gap-16 pr-16"
              >
                {Array.from({ length: 2 }).map((_, i) => (
                  <Fragment key={i}>
                    {data.map((item, index) => (
                      <Image
                        src={item.logo}
                        key={index}
                        alt={`Logo ${index + 1}`}
                        width={100}
                        height={100}
                        className="w-32 sm:w-40 dark:invert"
                      />
                    ))}
                  </Fragment>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos5 };
