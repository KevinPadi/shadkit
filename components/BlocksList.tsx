import { Block } from "@/app/blocks/[category]/page";
import { BlockPreview } from "./BlockPreview";
import NavBar from "./ui/navbar";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export const BlocksList = ({
  blocks,
  category,
}: {
  blocks: Block[];
  category: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-20 p-4 py-28 relative">
      <NavBar />
      <div className="flex flex-col items-center gap-1">
        <Link href="/" className="text-muted-foreground group">
          <Button variant={"ghost"} size={"sm"}>
            <ChevronLeft className="size-4 group-hover:-translate-x-0.5 transition" />
            Back to home
          </Button>
        </Link>
        <h2 className="leading-none tracking-tight text-5xl md:text-6xl font-medium text-primary first-letter:capitalize">
          {category} Blocks
        </h2>
      </div>
      <ul className="flex flex-col gap-6 w-full max-w-7xl">
        {blocks.map((block) => (
          <BlockPreview key={block.id} block={block} />
        ))}
      </ul>
    </div>
  );
};
