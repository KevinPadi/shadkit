import { Hero1 } from "@/blocks/hero1";
import { Hero2 } from "@/blocks/hero2";
import { Hero3 } from "@/blocks/hero3";
import { Hero4 } from "@/blocks/hero4";
import { Hero5 } from "@/blocks/hero5";

const blocks = {
  hero1: <Hero1 />,
  hero2: <Hero2 />,
  hero3: <Hero3 />,
  hero4: <Hero4 />,
  hero5: <Hero5 />,
};

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const block = blocks[category];

  if (!block) return <div className="text-center">Block not found</div>;
  return <div className="md:p-4 lg:p-6">{block}</div>;
}
