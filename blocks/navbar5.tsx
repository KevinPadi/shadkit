import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import Image from "next/image";
const data = {
  links: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

const Navbar5 = () => {
  return (
    <section className="p-4">
      {/* Desktop */}
      <div className="hidden md:block container mx-auto">
        <nav>
          <ul className="w-full flex items-center justify-between">
            <div className="flex items-center gap-5">
              <li>
                <Link href="/">
                  <Image
                    className="dark:invert"
                    src="/logoipsum.svg"
                    alt="Logo"
                    width={128}
                    height={50}
                  />
                </Link>
              </li>

              <div>
                <InputGroup>
                  <InputGroupInput placeholder="I'm searching for..." />
                  <InputGroupAddon>
                    <SearchIcon />
                  </InputGroupAddon>
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton>Search</InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </div>
            <div className="flex items-end">
              {data.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <Button variant="link">{l.label}</Button>
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden container mx-auto items-center justify-between p-2">
        <Link href="/">
          <Image
            className="dark:invert"
            src="/logoipsum.svg"
            alt="Logo"
            width={128}
            height={50}
          />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon-sm" variant="ghost">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-lg uppercase font-bold">
                <Image
                  className="dark:invert"
                  src="/logoipsum.svg"
                  alt="Logo"
                  width={128}
                  height={50}
                />
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-2 items-center *:w-full w-full px-4">
              <InputGroup>
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  <InputGroupButton>Search</InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <ul className="flex flex-col items-start gap-2 p-4">
              {data.links.map((l) => (
                <li key={l.href} className="w-full">
                  <Link href={l.href}>
                    <Button className="justify-start w-full p-0" variant="link">
                      {l.label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export { Navbar5 };
