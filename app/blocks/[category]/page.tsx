import fs from "fs";
import path from "path";

export type Category = {
  id: string;
  name: string;
  blocks: Block[];
};

export type Block = {
  id: string;
  name: string;
  path: string;
};

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // leer el JSON
  const filePath = path.join(process.cwd(), "blocks.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  // buscar la categoría
  const cat = data.categories.find((c: Category) => c.id === category);

  if (!cat) return <div>Category not found</div>;

  return (
    <div className="">
      <h1 className="text-xl font-semibold mb-4">{cat.name}</h1>
      <ul className="flex flex-col gap-4">
        {cat.blocks.length === 0 ? (
          <li className="text-sm text-zinc-500">No blocks yet</li>
        ) : (
          cat.blocks.map((b: Block) => (
            <li key={b.id} className="p-2 border rounded-xl w-full h-[1000px] ">
              {b.name}
              <iframe src={b.path} className="w-full " />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
