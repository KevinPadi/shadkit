import { Button } from "./button";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

const NavBar = () => {
  return (
    <header className="fixed max-w-md w-[calc(100%-32px)] top-4 left-1/2 -translate-x-1/2 flex items-center justify-between p-2 rounded-xl bg-background/50 backdrop-blur border border-border z-9999">
      <Link href="/">
        <Button variant={"ghost"} className="text-md px-2">
          ShadKit
        </Button>
      </Link>
      <div className="flex items-center gap-2">
        <Link
          href={"https://github.com/KevinPadi/shadkit"}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Button
            variant={"outline"}
            size={"icon"}
            className="hover:cursor-pointer"
          >
            <Image
              className="invert dark:invert-0"
              src={"/github.svg"}
              alt="github logo"
              height={24}
              width={24}
            />
          </Button>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default NavBar;
