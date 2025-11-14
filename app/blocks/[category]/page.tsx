import { BlocksList } from "@/components/BlocksList";
import fs from "fs";
import path from "path";
import { codeToHtml } from "shiki";

export type Category = {
  id: string;
  name: string;
  blocks: Block[];
};

export type Block = {
  id: string;
  name: string;
  path: string;
  code: string;
  highlightedCode: string;
};

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const filePath = path.join(process.cwd(), "blocks.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const cat = data.categories.find((c: Category) => c.id === category);
  if (!cat) return <div>Category not found</div>;

  // Resaltar código aquí (en el servidor)
  const blocksWithCode = await Promise.all(
    cat.blocks.map(async (block: Block) => {
      try {
        const blockName = block.path.split("/").pop();
        const blockFilePath = path.join(
          process.cwd(),
          "blocks",
          `${blockName}.tsx`,
        );

        const code = fs.readFileSync(blockFilePath, "utf8");

        // 🎨 Resaltar con Shiki en el servidor
        const highlightedCode = await codeToHtml(code, {
          lang: "tsx",
          themes: {
            light: "github-light",
            dark: "vesper",
          },
        });

        return {
          ...block,
          code,
          highlightedCode, // ← Pasar el HTML ya resaltado
        };
      } catch (error) {
        console.error(`Error reading ${block.path}:`, error);
        return {
          ...block,
          code: "// Error loading block code",
          highlightedCode: "<pre>Error loading code</pre>",
        };
      }
    }),
  );

  return (
    <>
      {blocksWithCode.length === 0 ? (
        <li className="text-sm text-zinc-500">No blocks yet</li>
      ) : (
        <BlocksList category={category} blocks={blocksWithCode} />
      )}
    </>
  );
}
