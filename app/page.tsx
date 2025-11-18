import NavBar from "@/components/ui/navbar";
import { categories } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <main className="flex w-full flex-col gap-20 items-center justify-between py-32 px-4 md:px-16">
        <div className="flex flex-col items-center gap-6 text-center max-w-6xl">
          <h1 className="max-w-xs md:max-w-full text-3xl md:text-6xl font-medium tracking-tight text-primary text-balance">
            Build your site faster with ready-to-use blocks
          </h1>
          <p className="max-w-md md:max-w-xl md:text-lg text-muted-foreground text-balance leading-snug">
            A curated collection of modern, copy-paste components for Shadcn UI
            and Tailwind CSS. From heroes to dashboards, each block is
            responsive, accessible, and easy to drop into your project.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 w-full">
          {categories.map((category) => (
            <Link
              className="p-4 bg-neutral-200 dark:bg-neutral-900/30 border border-black/7 dark:border-white/7 rounded-[26px] hover:bg-neutral-300 dark:hover:bg-neutral-900/40 hover:border-black/15 dark:hover:border-white/15 transition duration-300 group"
              key={category}
              href={`/blocks/${category}`}
            >
              <div>
                <Image
                  className="size-full invert dark:invert-0"
                  src={`/illustrations/${category}.svg`}
                  alt={category}
                  width={100}
                  height={70}
                />
              </div>
              <div className="py-2">
                <p className="text-muted-foreground group-hover:text-primary font-medium first-letter:uppercase">
                  {category}
                </p>
              </div>
            </Link>
          ))}
          <div className="col-span-full text-center">
            <span className="text-lg text-muted-foreground">
              More blocks coming soon
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
