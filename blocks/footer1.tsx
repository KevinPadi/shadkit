import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import AppleIcon from "@/components/icons/Apple";
import GoogleIcon from "@/components/icons/Google";
import FacebookIcon from "@/components/icons/Facebook";
import XIcon from "@/components/icons/X";
import LinkedInIcon from "@/components/icons/LinkedIn";
import { Separator } from "@/components/ui/separator";
import { JSX } from "react/jsx-dev-runtime";

const icons = {
  Apple: AppleIcon,
  Google: GoogleIcon,
  Facebook: FacebookIcon,
  X: XIcon,
  LinkedIn: LinkedInIcon,
};

const data = {
  links: [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/about",
      text: "About",
    },
    {
      href: "/contact",
      text: "Contact",
    },
    {
      href: "/blog",
      text: "Blog",
    },
    {
      href: "/faq",
      text: "FAQ",
    },
  ],
  socials: [
    { href: "#", icon: "Apple" },
    { href: "#", icon: "Google" },
    { href: "#", icon: "Facebook" },
    { href: "#", icon: "X" },
    { href: "#", icon: "LinkedIn" },
  ],
};

const Footer1 = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto flex-col md:flex-row items-center">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-5 flex-wrap justify-between pb-10">
          <div className="">
            <Image
              src="/logoipsum.svg"
              alt="Logo"
              width={150}
              height={50}
              className="dark:invert"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center ">
            {data.links.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="link">{link.text}</Button>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {data.socials.map((social) => {
              const Icon = icons[social.icon];

              return (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="text-muted-foreground"
                  >
                    <Icon className="size-6" />
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between py-4  text-muted-foreground">
          <div className="order-2 md:order-1">
            <p className="text-sm">
              © 2025 Your Company. All rights reserved.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <ul className="flex flex-col md:flex-row items-center justify-end gap-2">
              <li className="mr-4">
                <a href="#" className="text-sm hover:text-primary underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-sm hover:text-primary underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer1 };
