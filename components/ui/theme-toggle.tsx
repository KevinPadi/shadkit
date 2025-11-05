"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      type="button"
      variant={"outline"}
      size={"icon"}
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <span className="sr-only">Toggle theme</span>
      <Image
        className="invert dark:invert-0"
        src={"/theme-toggle.svg"}
        alt="theme toggle icon"
        height={24}
        width={24}
      />
    </Button>
  );
}
