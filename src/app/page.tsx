import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    desciption:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    desciption:
      "Every asset on our platform is verified by our team to ensure our highest quality standarts.",
  },
  {
    name: "For the Planet",
    icon: Leaf,
    desciption:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality{" "}
            <span className="text-blue-600">digital assets</span>.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-muted-foreground">
            Welcome to DigitalHippo. Every asset on out platform is verified by
            our team to ensure our highest quality standarts
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>

        <ProductReel
          title="Brand new"
          href="/products"
          query={{ sort: "desc", limit: 4 }}
        />
        {/* todo: list prowducts */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="flex justify-center md:flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.icon className="size-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.desciption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
