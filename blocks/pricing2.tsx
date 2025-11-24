"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const data = [
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

const Pricing2 = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-32 px-2 md:px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
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
          <div className="flex flex-col gap-4 items-center justify-center md:flex-row w-full mx-auto">
            {data.map((item, index) => (
              <Card key={index} className="w-full max-w-xs">
                <CardHeader className="flex flex-col gap-4 items-center h-fit">
                  <CardTitle className="text-lg font-normal">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-6xl font-medium text-primary">
                    {isYearly ? item.priceYearly : item.priceMonthly}
                  </CardDescription>
                  <span className="text-muted-foreground text-xs">
                    {isYearly ? "per year" : "per month"}
                  </span>
                  <CardAction className="w-full">
                    <Button className="w-full">{item.action}</Button>
                  </CardAction>
                </CardHeader>
                <Separator className="max-w-xs mx-auto" />
                <CardContent className="text-center text-sm space-y-3">
                  {item.content.map((feature, index) => (
                    <p key={index}>{feature}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing2 };
