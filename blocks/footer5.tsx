import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import AppleIcon from "@/components/icons/Apple";
import GoogleIcon from "@/components/icons/Google";
import FacebookIcon from "@/components/icons/Facebook";
import XIcon from "@/components/icons/X";
import LinkedInIcon from "@/components/icons/LinkedIn";
import { Separator } from "@/components/ui/separator";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

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

const Footer5 = () => {
  return (
    <footer className="py-8">
      <div className="container px-4 mx-auto flex-col md:flex-row items-center">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-5 justify-between pb-10">
          <div className=" flex flex-col gap-8 w-full max-w-sm">
            <Image
              src="/logoipsum.svg"
              alt="Logo"
              width={150}
              height={50}
              className="dark:invert"
            />
            <div className="flex flex-col md:flex-row items-start gap-5">
              {data.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button variant="link" size="sm" className="p-0 font-normal">
                    {link.text}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full max-w-sm">
            <form>
              <Field>
                <FieldLabel className="text-base" htmlFor="email">
                  Join our newsletter
                </FieldLabel>
                <div className="flex flex-row items-center gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <Button type="submit">Subscribe</Button>
                </div>
                <FieldDescription>
                  By subscribing you agree to with our Privacy Policy
                </FieldDescription>
              </Field>
            </form>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col md:flex-row gap-4 items-start justify-between py-4 text-muted-foreground">
          <div className="order-2 md:order-1">
            <p className="text-sm">
              © 2025 Your Company. All rights reserved.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <ul className="flex flex-col md:flex-row items-start justify-end gap-2">
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

export { Footer5 };
