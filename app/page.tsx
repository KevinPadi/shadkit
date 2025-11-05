import { Button } from "@/components/ui/button";
import NavBar from "@/components/ui/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <main className="flex w-full max-w-3xl flex-col gap-6 items-center justify-between py-32 px-4 md:px-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-xs md:max-w-full text-3xl md:text-5xl font-medium tracking-tight text-black dark:text-zinc-50 text-balance">
            Build your site faster with ready-to-use blocks
          </h1>
          <p className="max-w-md md:max-w-xl md:text-lg text-zinc-800 dark:text-zinc-400 text-balance leading-snug">
            A curated collection of modern, copy-paste components for Shadcn UI
            and Tailwind CSS. From heroes to dashboards, each block is
            responsive, accessible, and easy to drop into your project.
          </p>
        </div>
        <div>
          <Link href={"/blocks"}>
            <Button size={"lg"}>Explore blocks</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
