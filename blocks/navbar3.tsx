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
  links: {
    left: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
    ],
    right: [
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

const Navbar3 = () => {
  return (
    <section>
      {/* Desktop */}
      <div className="hidden md:block container mx-auto">
        <nav>
          <ul className="w-full flex items-center justify-between">
            <div className="flex items-center gap-5 mx-auto">
              {data.links.left.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <Button variant="link">{l.label}</Button>
                  </Link>
                </li>
              ))}

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
                {data.links.right.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>
                      <Button variant="link">{l.label}</Button>
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          </ul>
        </nav>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden mx-auto items-center p-2 relative border border-border">
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
          <SheetTrigger className="ml-auto" asChild>
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
              {data.links.left.map((l) => (
                <li key={l.href} className="w-full">
                  <Link href={l.href}>
                    <Button className="justify-start w-full p-0" variant="link">
                      {l.label}
                    </Button>
                  </Link>
                </li>
              ))}
              {data.links.right.map((l) => (
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

export { Navbar3 };
