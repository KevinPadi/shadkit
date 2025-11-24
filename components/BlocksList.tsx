import { Block } from "@/app/blocks/[category]/page";
import { BlockPreview } from "./BlockPreview";
import NavBar from "./ui/navbar";

export const BlocksList = ({
  blocks,
  category,
}: {
  blocks: Block[];
  category: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-20 p-4 py-20 lg:p-20 relative">
      <NavBar />
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
