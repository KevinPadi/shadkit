import { Hero1 } from "@/blocks/hero1";
import { Hero2 } from "@/blocks/hero2";

const blocks = {
  hero1: <Hero1 />,
  hero2: <Hero2 />,
};

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const block = blocks[category];

  if (!block) return <div className="text-center">Block not found</div>;
  return <div className="p-6">{block}</div>;
}
