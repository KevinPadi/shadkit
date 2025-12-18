import Image from "next/image";

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

const Logos2 = () => {
  return (
    <section className="py-32 px-2 md:px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-20">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-4xl font-medium">
              Trusted by companies worldwide
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Teams and businesses that rely on our service.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-10">
            {data.map((item, index) => (
              <div key={index}>
                <Image
                  className="w-32 sm:w-40 dark:invert"
                  src={item.logo}
                  alt={`Logo ${index + 1}`}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos2 };
