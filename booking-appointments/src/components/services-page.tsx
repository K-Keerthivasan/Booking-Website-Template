"use client";

import Link from "next/link";
import { useState } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { packageDeals, services, type ServiceCategory } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

const categories: ServiceCategory[] = ["Hair", "Skin", "Nails", "Body"];

export function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("Hair");
  const filteredServices = services.filter((service) => service.category === activeCategory);

  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-20">
        <SectionHeading
          eyebrow="Services"
          title="A menu designed for premium treatment positioning."
          description="Category tabs keep discovery simple while service cards stay commercially useful with duration, price, and a direct booking action."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-3 text-sm transition ${
                activeCategory === category
                  ? "bg-[var(--color-plum)] text-white"
                  : "border border-[var(--color-border)] bg-white/70 dark:bg-[rgba(23,16,48,0.70)] text-[var(--color-plum-900)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {filteredServices.map((service) => (
            <Card key={service.id} className="rounded-[2rem] p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.26em] text-[var(--color-plum-700)]">
                    {service.category}
                  </p>
                  <h3 className="mt-3 font-heading text-4xl leading-none">{service.name}</h3>
                </div>
                <p className="text-lg font-semibold text-[var(--color-plum)]">
                  {formatCurrency(service.price)}
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--color-plum-700)]">
                {service.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-[var(--color-plum-700)]">{service.duration} min</span>
                <Link href="/book">
                  <Button>Book Now</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <section className="mt-20">
          <SectionHeading
            eyebrow="Package Deals"
            title="Built-in bundles for higher average order value."
            description="These sample packages are presented like editorial collections instead of discount offers, which better supports a luxury positioning."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {packageDeals.map((deal, index) => (
              <Card
                key={deal.id}
                className={`rounded-[2rem] p-7 ${index === 1 ? "bg-[var(--color-plum)] text-white" : ""}`}
              >
                <p
                  className={`text-sm uppercase tracking-[0.28em] ${
                    index === 1 ? "text-white/70" : "text-[var(--color-plum-700)]"
                  }`}
                >
                  Featured package
                </p>
                <h3 className="mt-4 font-heading text-4xl">{deal.name}</h3>
                <p
                  className={`mt-4 text-sm leading-7 ${
                    index === 1 ? "text-white/78" : "text-[var(--color-plum-700)]"
                  }`}
                >
                  {deal.includes}
                </p>
                <p className="mt-8 text-2xl font-semibold">{formatCurrency(deal.price)}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
