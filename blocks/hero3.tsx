import Image from "next/image";
import { Button } from "@/components/ui/button";

const data = {
  heading: "Blocks built with Shadcn & Tailwind",
  description:
    "Built for developers, we provide a curated collection of reusable Shadcn and Tailwind blocks, ready to copy-paste and speed up modern interface building.",
  buttons: {
    primary: {
      text: "Explore blocks",
      url: "#",
    },
    secondary: {
      text: "Read the docs",
      url: "#",
    },
  },
  image: {
    src: "https://plus.unsplash.com/premium_photo-1754513910317-2e1fe59ddd38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2060",
    alt: "Hero section image",
  },
};

const Hero3 = () => {
  return (
    <section className="py-32 px-5 md:px-8 rounded-2xl bg-zinc-100 dark:bg-neutral-900">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex flex-col gap-4 max-w-lg">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-balance">
            {data.heading}
          </h1>
          <p className="md:text-xl text-balance">{data.description}</p>
          <div className="flex gap-4">
            {data.buttons.primary && (
              <Button asChild>
                <a href={data.buttons.primary.url}>
                  {data.buttons.primary.text}
                </a>
              </Button>
            )}
            {data.buttons.secondary && (
              <Button asChild variant="secondary">
                <a href={data.buttons.secondary.url}>
                  {data.buttons.secondary.text}
                </a>
              </Button>
            )}
          </div>
        </div>
        <div>
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={500}
            height={500}
            className="rounded-lg aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero3 };
