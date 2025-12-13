import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { PencilIcon } from "lucide-react";
import Image from "next/image";

const data = [
  {
    title: "Optimized and Fully Responsive Design System",
    description:
      "Automatically adapts to any screen size, ensuring a smooth and consistent experience across mobile phones, tablets, and desktop devices without extra configuration.",
    button: "Get started",
    icon: PencilIcon,
  },
  {
    title: "Advanced and Deeply Customizable Interface Options",
    description:
      "Easily tailor colors, spacing, typography, and layout options so your interface feels truly aligned with your brand and design guidelines.",
    button: "Get started",
    icon: PencilIcon,
  },
  {
    title: "Seamless and Effortless Integration With Modern Tech Stacks",
    description:
      "Connects effortlessly with modern frameworks and workflows, allowing quick setup and compatibility with virtually any tech stack.",
    button: "Get started",
    icon: PencilIcon,
  },
];

const Feature5 = () => {
  return (
    <section className="py-32 px-2 md:px-4">
      <div className="container flex flex-col items-center mx-auto px-4 gap-20">
        <h2 className="text-4xl font-medium">Why Choose Us</h2>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 sticky top-10">
          <ItemGroup className="space-y-20 lg:space-y-52">
            {data.map((item, index) => (
              <Item
                variant={"default"}
                key={index}
                className="rounded-2xl flex flex-col items-start"
              >
                <ItemContent className="space-y-3">
                  <ItemMedia variant={"icon"} className="size-8">
                    <item.icon className="size-5" />
                  </ItemMedia>
                  <ItemTitle className="text-3xl md:line-clamp-3 text-balance">
                    {item.title}
                  </ItemTitle>
                  <ItemDescription className="text-base line-clamp-none">
                    {item.description}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant={"outline"} size={"sm"}>
                    {item.button}
                  </Button>
                </ItemActions>
              </Item>
            ))}
          </ItemGroup>

          <div className="hidden lg:block">
            <div className="sticky top-40">
              {/* <div className="flex h-[400px] w-full items-center justify-center rounded-2xl bg-linear-to-br from-blue-400 via-purple-500 to-pink-500 shadow-2xl">
                <span className="text-2xl font-semibold text-white">
                  Product Image
                </span>
              </div> */}
              <Image
                src="https://images.unsplash.com/photo-1757600797704-300d69978b8c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={400}
                height={220}
                alt="Features image"
                className="size-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom spacing */}
      <div className="hidden lg:block mt-96" />
    </section>
  );
};

export { Feature5 };
