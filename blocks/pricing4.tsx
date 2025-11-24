"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const data = [
  {
    title: "Free Plan",
    priceMonthly: "Free",
    priceYearly: "Free",
    action: "Start Now",
    content: ["Basic features", "One project"],
  },
  {
    title: "Starter Plan",
    priceMonthly: "$5",
    priceYearly: "$20",
    action: "Start Now",
    content: [
      "Basic features",
      "Email support",
      "Up to 3 projects",
      "Standard analytics",
    ],
  },
  {
    title: "Pro Plan",
    priceMonthly: "$19",
    priceYearly: "$49",
    action: "Get Started",
    content: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Team collaboration tools",
    ],
  },
];

const Pricing4 = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-32 px-2 md:px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <h1 className="my-6 text-balance font-medium text-4xl lg:text-5xl tracking-tight lg:max-w-lg">
              Pricing Plans
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground uppercase">
              <span className={`${!isYearly && "text-primary"}`}>Monthly</span>
              <Switch onCheckedChange={() => setIsYearly(!isYearly)} />
              <span className={`${isYearly && "text-primary"}`}>Annual</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center w-full mx-auto">
            {data.map((item, index) => (
              <Card
                key={index}
                className="w-full max-w-xs sm:max-w-none flex sm:flex-row"
              >
                <CardHeader className="flex flex-col gap-4 items-center sm:items-start flex-1">
                  <CardTitle className="text-lg font-normal">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-6xl font-medium text-primary ">
                    {isYearly ? item.priceYearly : item.priceMonthly}
                  </CardDescription>
                  <span className="text-muted-foreground text-xs">
                    {isYearly ? "per year" : "per month"}
                  </span>
                </CardHeader>
                <CardContent className="flex flex-col justify-center gap-3 items-center text-center text-sm  flex-1">
                  {item.content.map((feature, index) => (
                    <p key={index}>{feature}</p>
                  ))}
                </CardContent>
                <CardFooter className="flex-1 flex items-center justify-center sm:justify-end">
                  <Button size={"lg"} className="w-full">
                    {item.action}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing4 };
