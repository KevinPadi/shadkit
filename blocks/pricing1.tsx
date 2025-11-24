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

const data = {
  title: "Pro Plan",
  price: "$19",
  action: "Get Started",
  content: [
    "Unlimited projects",
    "Advanced analytics",
    "Priority support",
    "Team collaboration tools",
  ],
};

const Pricing1 = () => {
  return (
    <section className="py-32 px-2 md:px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
          <h1 className="my-6 text-balance font-medium text-4xl lg:text-5xl tracking-tight lg:max-w-lg">
            Pricing
          </h1>
          <div className="w-full">
            <Card className="w-full max-w-sm mx-auto">
              <CardHeader className="flex flex-col gap-4 items-center h-fit">
                <CardTitle className="text-lg font-normal">
                  {data.title}
                </CardTitle>
                <CardDescription className="text-6xl font-medium text-primary">
                  {data.price}
                </CardDescription>
                <span className="text-muted-foreground text-xs">per month</span>
                <CardAction className="w-full">
                  <Button className="w-full">{data.action}</Button>
                </CardAction>
              </CardHeader>
              <Separator className="max-w-xs mx-auto" />
              <CardContent className="text-center text-sm space-y-3">
                {data.content.map((feature, index) => (
                  <p key={index}>{feature}</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing1 };
