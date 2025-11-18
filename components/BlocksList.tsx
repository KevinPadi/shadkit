import { Block } from "@/app/blocks/[category]/page";
import { BlockPreview } from "./BlockPreview";
import { MoveLeft } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const BlocksList = ({
  blocks,
  category,
}: {
  blocks: Block[];
  category: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-20 p-4 py-20 lg:p-20 relative">
      <div className="absolute top-4 left-4">
        <Link href={"/"}>
          <Button variant="ghost" className="group">
            <MoveLeft className="group-hover:-translate-x-0.5 transition" />
            Back
          </Button>
        </Link>
      </div>
      <div className="text-center">
        <h2 className="text-5xl md:text-7xl font-medium text-primary first-letter:capitalize">
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
