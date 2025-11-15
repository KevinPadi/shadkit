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
};

const Hero5 = () => {
  return (
    <section className="py-32 px-5 sm:px-12">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center gap-6 max-w-lg md:max-w-xl mx-auto">
          <h1 className="text-balance font-semibold text-4xl lg:text-7xl tracking-tight">
            {data.heading}
          </h1>
          <p className="text-secondary-foreground lg:max-w-lg lg:text-xl leading-snug text-balance">
            {data.description}
          </p>
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
      </div>
    </section>
  );
};

export { Hero5 };
