import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const perks = [
    {
      name: "Instant Access",
      Icon: ArrowDownToLine,
      description:
        "Access your UI and code assets instantly. No delays, just quick and easy downloads.",
    },
    {
      name: "Premium Quality",
      Icon: CheckCircle,
      description:
        "Each asset is meticulously vetted by our experts to meet the highest standards. Not satisfied? Enjoy a 30-day money-back guarantee.",
    },
    {
      name: "Eco-Friendly",
      Icon: Leaf,
      description:
        "UIExchange is committed to sustainability. We've pledged 1% of sales to environmental conservation efforts.",
    },
  ];

  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your destination for top-notch{" "}
            <span className="text-blue-600">UI and code assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to UIExchange. Discover expertly crafted UI components and
            high-quality code resources, all verified by professionals to meet
            the highest standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Explore Bestsellers
            </Link>
            <Button variant="ghost">Our quality assurance &rarr;</Button>
          </div>
        </div>
        <ProductReel
          query={{ sort: "desc", limit: 4 }}
          href="/products?sort=recent"
          title="Brand new"
        />
        {/* product list left */}
      </MaxWidthWrapper>

      {/*  section  */}
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
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
