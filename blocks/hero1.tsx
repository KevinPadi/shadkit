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

const Hero1 = () => {
  return (
    <section className="py-32 px-2 md:px-4">
      <div className="container mx-auto">
        <div className="grid items-center gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center lg:justify-between lg:gap-4">
            <h1 className="my-6 text-balance font-medium text-4xl lg:text-5xl tracking-tight lg:max-w-lg">
              {data.heading}
            </h1>
            <div className="w-full lg:w-fit flex flex-col justify-end gap-6 md:gap-3">
              <div className="flex gap-4">
                {data.buttons.primary && (
                  <Button asChild>
                    <a href={data.buttons.primary.url}>
                      {data.buttons.primary.text}
                    </a>
                  </Button>
                )}
                {data.buttons.secondary && (
                  <Button asChild variant="link">
                    <a href={data.buttons.secondary.url}>
                      {data.buttons.secondary.text}
                    </a>
                  </Button>
                )}
              </div>
              <p className="text-muted-foreground lg:max-w-lg lg:text-lg leading-snug">
                {data.description}
              </p>
            </div>
          </div>
          <Image
            src={data.image.src}
            alt={data.image.alt}
            className="max-h-[400px] w-full rounded-xl object-cover"
            width={"1200"}
            height={"600"}
          />
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
