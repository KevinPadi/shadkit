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
import { cn } from "@/lib/utils";
import Image from "next/image";

const data = [
  {
    title: "Responsive Design",
    description: "Automatically adapts to mobile, tablet, and desktop layouts.",
    button: "Get started",
    image:
      "https://images.unsplash.com/photo-1677311573471-fcd492a8b2d9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Fully Customizable",
    description: "Adjust colors, typography, and layout to match your brand.",
    button: "Get started",
    image:
      "https://images.unsplash.com/photo-1761483548106-9f225d1e4313?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Easy Integration",
    description: "Works seamlessly with any modern tech stack.",
    button: "Get started",
    image:
      "https://images.unsplash.com/photo-1757600797704-300d69978b8c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Feature3 = () => {
  return (
    <section className="py-32 px-2 md:px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-4xl font-medium">Why Choose Us</h2>
          <ItemGroup className="grid grid-cols-1 md:grid-cols-3 gap-5 w-fit mx-auto">
            {data.map((item, index) => (
              <Item key={index} className="max-w-md h-full rounded-2xl p-0">
                <ItemHeader>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={128}
                    height={128}
                    className="aspect-video w-full rounded-lg object-cover"
                  />
                </ItemHeader>
                <ItemContent className="flex flex-col items-center justify-center gap-4">
                  <ItemTitle className="text-xl text-center">
                    {item.title}
                  </ItemTitle>
                  <ItemDescription className="text-center text-base leading-tight line-clamp-none">
                    {item.description}
                  </ItemDescription>
                  <ItemActions>
                    <Button variant={"outline"} size={"sm"}>
                      {item.button}
                    </Button>
                  </ItemActions>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </div>
      </div>
    </section>
  );
};

export { Feature3 };
