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
  links: {
    column1: [
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
    column2: [
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
    column3: [
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
  },
  socials: [
    { href: "#", icon: "Apple" },
    { href: "#", icon: "Google" },
    { href: "#", icon: "Facebook" },
    { href: "#", icon: "X" },
    { href: "#", icon: "LinkedIn" },
  ],
};

const Footer3 = () => {
  return (
    <footer className="py-8">
      <div className="container px-4 mx-auto flex-col md:flex-row items-center">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-5 flex-wrap justify-between pb-10">
          <div className=" flex flex-col gap-8 w-full max-w-sm">
            <Image
              src="/logoipsum.svg"
              alt="Logo"
              width={150}
              height={50}
              className="dark:invert"
            />
            <form>
              <Field>
                <FieldLabel className="font-normal" htmlFor="email">
                  Join our newsletter to stay up to date on features and
                  releases.
                </FieldLabel>
                <div className="flex items-center gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <Button type="submit">Subscribe</Button>
                </div>
                <FieldDescription>
                  By subscribing you agree to with our Privacy Policy and
                  provide consent to receive updates from our company.{" "}
                </FieldDescription>
              </Field>
            </form>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full lg:w-auto gap-10 [&>div>h3]:font-medium [&>div>h3]:pb-3 [&>div>a>button]:font-normal [&>div>a>button]:p-0 [&>div>a>button]:w-full [&>div>a>button]:justify-start">
            <div className="flex flex-col w-full md:w-32">
              <h3 className="">Company</h3>
              {data.links.column1.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button size="sm" variant="link">
                    {link.text}
                  </Button>
                </Link>
              ))}
            </div>
            <div className="flex flex-col w-full md:w-32">
              <h3 className="">Products</h3>
              {data.links.column2.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button size="sm" variant="link">
                    {link.text}
                  </Button>
                </Link>
              ))}
            </div>
            <div className="flex flex-col w-full md:w-32">
              <h3 className="">Resources</h3>
              {data.socials.map((social) => {
                const Icon = icons[social.icon];

                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="link">
                      <Icon className="size-5" />
                      {social.icon}
                    </Button>
                  </Link>
                );
              })}
            </div>
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

export { Footer3 };
