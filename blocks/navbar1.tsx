import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

const data = {
  links: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  buttons: {
    primary: {
      label: "Register",
      href: "#",
    },
    secondary: {
      label: "Login",
      href: "#",
    },
  },
};

const Navbar1 = () => {
  return (
    <section>
      {/* Desktop */}
      <div className="hidden md:block container mx-auto">
        <nav>
          <ul className="w-full flex items-center justify-between">
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

            <div className="flex items-end">
              {data.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <Button variant="link">{l.label}</Button>
                  </Link>
                </li>
              ))}
            </div>
            <div className="flex gap-2 items-center">
              {data.buttons.secondary && (
                <Link href={data.buttons.secondary.href}>
                  <Button variant="secondary">
                    {data.buttons.secondary.label}
                  </Button>
                </Link>
              )}
              {data.buttons.primary && (
                <Link href={data.buttons.primary.href}>
                  <Button>{data.buttons.primary.label}</Button>
                </Link>
              )}
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
            <div className="flex flex-col gap-2 items-center *:w-full w-full px-4">
              {data.buttons.secondary && (
                <Button asChild>
                  <Link href={data.buttons.secondary.href}>
                    {data.buttons.secondary.label}
                  </Link>
                </Button>
              )}
              {data.buttons.primary && (
                <Button asChild variant="outline">
                  <Link href={data.buttons.primary.href}>
                    {data.buttons.primary.label}
                  </Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export { Navbar1 };
