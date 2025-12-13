import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { PencilIcon, TabletSmartphone } from "lucide-react";
import Image from "next/image";

const data = [
  {
    title: "Responsive Design",
    description: "Automatically adapts to mobile, tablet, and desktop layouts.",
    button: "Get started",
    icon: TabletSmartphone,
  },
  {
    title: "Fully Customizable",
    description: "Adjust colors, typography, and layout to match your brand.",
    button: "Get started",
    icon: PencilIcon,
  },
];

const Feature4 = () => {
  return (
    <section className="py-32 px-2 md:px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-4xl font-medium">Why Choose Us</h2>
          <ItemGroup className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {data.map((item, index) => (
              <Item
                variant={"outline"}
                key={index}
                className="rounded-2xl flex flex-col items-start sm:col-span-2 md:col-span-1"
              >
                <ItemContent className="space-y-3">
                  <ItemMedia variant={"icon"}>
                    <item.icon className="size-5" />
                  </ItemMedia>
                  <ItemTitle className="text-xl ">{item.title}</ItemTitle>
                  <ItemDescription className="text-base leading-tight line-clamp-none">
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
            <Item
              variant={"outline"}
              className="rounded-2xl sm:col-span-4 md:col-span-2 flex flex-row gap-0 p-0"
            >
              <ItemHeader className="mr-auto flex-1 size-full">
                <Image
                  src="https://images.unsplash.com/photo-1757600797704-300d69978b8c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Easy Integration"
                  width={128}
                  height={128}
                  className="size-full rounded-l-lg object-cover"
                />
              </ItemHeader>
              <ItemContent className="p-4 flex-1 flex flex-col items-start justify-center gap-4 size-full ml-auto">
                <ItemTitle className="text-xl">Easy Integration</ItemTitle>
                <ItemDescription className="text-base leading-tight">
                  Works seamlessly with any modern tech stack.
                </ItemDescription>
                <ItemActions>
                  <Button variant={"outline"} size={"sm"}>
                    Get Started
                  </Button>
                </ItemActions>
              </ItemContent>
            </Item>
          </ItemGroup>
        </div>
      </div>
    </section>
  );
};

export { Feature4 };
