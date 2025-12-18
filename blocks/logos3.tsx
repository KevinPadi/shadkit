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

const Logos3 = () => {
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
          </div>{" "}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="border aspect-square p-6 place-items-center place-content-center bg-muted/50 hover:bg-primary transition duration-300 group"
              >
                <Image
                  className="w-32 sm:w-40 dark:invert group-hover:invert dark:group-hover:invert-0 transition duration-300"
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

export { Logos3 };
