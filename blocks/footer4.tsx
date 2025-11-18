import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import AppleIcon from "@/components/icons/Apple";
import GoogleIcon from "@/components/icons/Google";
import FacebookIcon from "@/components/icons/Facebook";
import XIcon from "@/components/icons/X";
import LinkedInIcon from "@/components/icons/LinkedIn";
import { Separator } from "@/components/ui/separator";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type IconName = keyof typeof icons;

interface Social {
  href: string;
  icon: IconName;
}

interface Link {
  href: string;
  text: string;
}

const icons = {
  Apple: AppleIcon,
  Google: GoogleIcon,
  Facebook: FacebookIcon,
  X: XIcon,
  LinkedIn: LinkedInIcon,
};

const data: {
  links: {
    column1: Link[];
    column2: Link[];
    column3: Link[];
    column4: Link[];
    column5: Link[];
  };
  socials: Social[];
} = {
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
    column4: [
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
    column5: [
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

const Footer4 = () => {
  return (
    <footer className="py-8">
      <div className="container px-4 mx-auto flex-col md:flex-row items-center">
        <div>
          <form>
            <Field className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-6 sm:gap-10">
              <div>
                <FieldTitle className="text-lg">Newsletter</FieldTitle>
                <FieldLabel className="font-normal" htmlFor="email">
                  Join our newsletter to stay up to date on features and
                  releases.
                </FieldLabel>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 w-full">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <Button type="submit">Subscribe</Button>
                </div>
                <FieldDescription>
                  By subscribing you agree to with our Privacy Policy and
                  provide consent to receive updates from our company.
                </FieldDescription>
              </div>
            </Field>
          </form>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-5 flex-wrap justify-between py-10">
          <div className="flex flex-col gap-8">
            <Image
              src="/logoipsum.svg"
              alt="Logo"
              width={150}
              height={50}
              className="dark:invert"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-20 w-full lg:w-auto justify-end [&>div>h3]:font-medium [&>div>h3]:pb-3 [&>div>a>button]:font-normal [&>div>a>button]:p-0 [&>div>a>button]:w-full [&>div>a>button]:justify-start">
            <div className="flex flex-col w-full md:w-fit">
              <h3 className="">Company</h3>
              {data.links.column1.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button size="sm" variant="link">
                    {link.text}
                  </Button>
                </Link>
              ))}
            </div>
            <div className="flex flex-col w-full md:w-fit">
              <h3 className="">Products</h3>
              {data.links.column2.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button size="sm" variant="link">
                    {link.text}
                  </Button>
                </Link>
              ))}
            </div>
            <div className="flex flex-col w-full md:w-fit">
              <h3 className="">Resources</h3>
              {data.links.column3.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button size="sm" variant="link">
                    {link.text}
                  </Button>
                </Link>
              ))}
            </div>
            <div className="flex flex-col w-full md:w-fit">
              <h3 className="">Company</h3>
              {data.links.column4.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button size="sm" variant="link">
                    {link.text}
                  </Button>
                </Link>
              ))}
            </div>
            <div className="flex flex-col w-full md:w-fit">
              <h3 className="">Resources</h3>
              {data.links.column5.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button size="sm" variant="link">
                    {link.text}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col-reverse md:flex-row gap-4 items-start justify-between py-4 text-muted-foreground">
          <div>
            <ul className="flex flex-col md:flex-row items-start justify-end gap-2">
              <li className="mr-4 order-3 md:order-1">
                <p className="text-sm">
                  © 2025 Your Company. All rights reserved.
                </p>
              </li>
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
      </div>
    </footer>
  );
};

export { Footer4 };
