import NavBar from "@/components/ui/navbar";
import Image from "next/image";
import Link from "next/link";
import blocks from "@/blocks.json";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <main className="flex w-full flex-col gap-20 items-center justify-between py-32 px-4 md:px-16">
        <div className="flex flex-col items-center gap-6 text-center max-w-6xl">
          <h1 className="max-w-xs md:max-w-full text-3xl md:text-6xl font-medium tracking-tight text-primary text-balance">
            Build your site faster with ready-to-use blocks
          </h1>
          <p className="max-w-md md:max-w-xl md:text-xl text-muted-foreground text-tight leading-snug text-balance">
            A curated collection of modern, copy-paste components for Shadcn UI
            and Tailwind CSS.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {blocks &&
            blocks.categories.map((category) => (
              <Link
                className="group"
                key={category.id}
                href={`/blocks/${category.id}`}
              >
                <div className="p-6 bg-neutral-200 dark:bg-neutral-900/30 border border-black/7 dark:border-white/7 rounded-2xl group-hover:bg-neutral-300 dark:group-hover:bg-neutral-900/40 group-hover:border-black/15 dark:group-hover:border-white/15 aspect-square transition duration-300">
                  <Image
                    className="size-full invert dark:invert-0"
                    src={`/illustrations/${category.id}.svg`}
                    alt={category.name}
                    width={100}
                    height={70}
                  />
                </div>
                <div className="py-2 flex flex-col items-center">
                  <p className="text-primary font-medium">{category.name}</p>
                  <p className="text-muted-foreground">
                    {category.blocks.length} Blocks
                  </p>
                </div>
              </Link>
            ))}
          <div className="col-span-full text-center mt-10">
            <span className="text-xl text-muted-foreground">
              More blocks coming soon
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
