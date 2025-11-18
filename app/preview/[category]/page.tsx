import dynamic from "next/dynamic";

const componentMap = {
  hero1: dynamic(() => import("@/blocks/hero1").then((mod) => mod.Hero1)),
  hero2: dynamic(() => import("@/blocks/hero2").then((mod) => mod.Hero2)),
  hero3: dynamic(() => import("@/blocks/hero3").then((mod) => mod.Hero3)),
  hero4: dynamic(() => import("@/blocks/hero4").then((mod) => mod.Hero4)),
  hero5: dynamic(() => import("@/blocks/hero5").then((mod) => mod.Hero5)),
  navbar1: dynamic(() => import("@/blocks/navbar1").then((mod) => mod.Navbar1)),
  navbar2: dynamic(() => import("@/blocks/navbar2").then((mod) => mod.Navbar2)),
  navbar3: dynamic(() => import("@/blocks/navbar3").then((mod) => mod.Navbar3)),
  navbar4: dynamic(() => import("@/blocks/navbar4").then((mod) => mod.Navbar4)),
  navbar5: dynamic(() => import("@/blocks/navbar5").then((mod) => mod.Navbar5)),
  footer1: dynamic(() => import("@/blocks/footer1").then((mod) => mod.Footer1)),
  footer2: dynamic(() => import("@/blocks/footer2").then((mod) => mod.Footer2)),
  footer3: dynamic(() => import("@/blocks/footer3").then((mod) => mod.Footer3)),
  footer4: dynamic(() => import("@/blocks/footer4").then((mod) => mod.Footer4)),
  footer5: dynamic(() => import("@/blocks/footer5").then((mod) => mod.Footer5)),
};

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const Component = componentMap[category as keyof typeof componentMap];

  if (!Component) return <div>Block not found</div>;

  return (
    <div>
      <Component />
    </div>
  );
}
