import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  heroStats,
  howItWorks,
  instagramMoments,
  reviews,
  services,
  staffMembers,
} from "@/data/mock-data";
import { formatCurrency } from "@/lib/utils";

const featuredServices = services.filter((service) => service.featured);

export function MarketingHome() {
  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-plum-700)]">
              Soft luxury spa
            </p>
            <h1 className="font-heading text-5xl leading-[0.92] text-[var(--color-plum-900)] sm:text-6xl md:text-8xl">
              Beauty rituals staged with calm, polish, and intention.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-plum-700)] sm:text-lg">
              A booking boilerplate built to sell premium salon and spa experiences with warmth,
              trust, and an unmistakably elevated atmosphere.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-plum)] px-6 py-3 text-sm font-medium text-white shadow-[0_14px_30px_rgba(59,7,100,0.24)]"
              >
                Book an Appointment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white/70 dark:bg-[rgba(23,16,48,0.70)] px-6 py-3 text-sm font-medium text-[var(--color-plum-900)]"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-10 grid gap-4 grid-cols-3">
              {heroStats.map((stat) => (
                <Card key={stat.label} className="rounded-[1.75rem] p-4 sm:p-5">
                  <p className="text-2xl font-semibold text-[var(--color-plum)] sm:text-3xl">{stat.value}</p>
                  <p className="mt-2 text-xs text-[var(--color-plum-700)] sm:text-sm">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Hero visual grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            <Card className="overflow-hidden rounded-[2.5rem] bg-[linear-gradient(160deg,#fde8e8_0%,#fff8f3_45%,#f8f0e2_100%)] dark:bg-[linear-gradient(160deg,#2d1424_0%,#171030_45%,#0d0820_100%)] p-0 sm:col-span-2">
              <div className="grid min-h-[340px] gap-0 md:grid-cols-[1.05fr_0.95fr] md:min-h-[420px]">
                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.26em] text-[var(--color-plum-700)]">
                      Signature atmosphere
                    </p>
                    <h2 className="mt-4 font-heading text-4xl leading-none text-[var(--color-plum-900)] md:text-5xl">
                      Candlelight softness, sculpted details, and room to linger.
                    </h2>
                  </div>
                  <p className="max-w-md text-sm leading-7 text-[var(--color-plum-700)]">
                    Design cues suggest premium care without relying on dark luxury tropes:
                    cream light, blush warmth, sage calm, and rich plum contrast.
                  </p>
                </div>
                <div className="relative min-h-[200px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.95),transparent_24%),linear-gradient(180deg,rgba(59,7,100,0.1),rgba(167,196,160,0.1)),linear-gradient(135deg,#f3d6d6,#fef9f0_54%,#dbe8d8)] dark:bg-[linear-gradient(135deg,#2d1424,#171030_54%,#1a2d18)] md:min-h-auto">
                  <div className="absolute left-8 top-10 h-40 w-32 rounded-t-[4rem] rounded-b-[1rem] border border-white/60 bg-white/30 backdrop-blur-md dark:border-white/10 dark:bg-white/5" />
                  <div className="absolute bottom-10 left-24 h-44 w-48 rounded-[2rem] border border-white/70 bg-[rgba(255,255,255,0.36)] backdrop-blur-xl dark:border-white/10 dark:bg-[rgba(23,16,48,0.36)]" />
                  <div className="absolute right-12 top-16 h-56 w-40 rounded-[2rem] border border-white/50 bg-[linear-gradient(180deg,rgba(59,7,100,0.18),rgba(253,232,232,0.12))] dark:bg-[linear-gradient(180deg,rgba(184,126,232,0.18),rgba(45,20,36,0.12))]" />
                </div>
              </div>
            </Card>
            <Card className="rounded-[2rem] bg-[var(--color-plum)] text-white">
              <p className="text-xs uppercase tracking-[0.32em] text-white/70">Packages</p>
              <p className="mt-4 font-heading text-3xl md:text-4xl">High-value bundles designed to upsell.</p>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Featured rituals are staged as occasion-worthy indulgences rather than simple
                add-ons.
              </p>
            </Card>
            <Card className="rounded-[2rem] bg-[var(--color-sage)]/20">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-plum-700)]">
                Membership
              </p>
              <p className="mt-4 font-heading text-3xl text-[var(--color-plum-900)] md:text-4xl">
                Retention-friendly premium cadence.
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-plum-700)]">
                Copy and layout leave room for loyalty tiers, skincare plans, and seasonal rituals.
              </p>
            </Card>
          </div>
        </section>

        {/* Featured Services */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
          <SectionHeading
            eyebrow="Service Highlights"
            title="Featured rituals that feel worth booking."
            description="Three premium treatments framed for immediate desirability, each with clear positioning, timing, and pricing."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {featuredServices.map((service, index) => (
              <Card key={service.id} className="rounded-[2rem] p-6 md:p-7">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-rose)] text-xl text-[var(--color-plum)]">
                  {index === 0 ? "S" : index === 1 ? "G" : "N"}
                </div>
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-plum-700)]">
                  {service.category}
                </p>
                <h3 className="mt-3 font-heading text-3xl leading-none md:text-4xl">{service.name}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-plum-700)]">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span>{service.duration} min</span>
                  <span className="font-semibold text-[var(--color-plum)]">
                    {formatCurrency(service.price)}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Staff */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
          <SectionHeading
            eyebrow="Our Team"
            title="Craft specialists with distinct points of view."
            description="Four mock staff profiles demonstrate how the template can sell expertise and encourage provider-led bookings."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {staffMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden rounded-[2rem] p-0">
                <div className={`h-52 bg-gradient-to-br ${member.accent} p-6`}>
                  <div className="flex h-full items-end">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-white/40 font-heading text-3xl text-[var(--color-plum)]">
                      {member.initials}
                    </div>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-plum-700)]">
                    {member.role}
                  </p>
                  <h3 className="mt-3 font-heading text-3xl leading-none md:text-4xl">{member.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-plum-700)]">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white/40 dark:bg-[rgba(23,16,48,0.40)] py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <SectionHeading
              eyebrow="How It Works"
              title="A calm three-step path from interest to arrival."
              description="The structure is simple enough for conversion, but elevated enough to support a premium price position."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {howItWorks.map((item) => (
                <Card key={item.step} className="rounded-[2rem] p-6 md:p-7">
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-sage-deep)]">
                    {item.step}
                  </p>
                  <h3 className="mt-4 font-heading text-3xl md:text-4xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-plum-700)]">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
          <SectionHeading
            eyebrow="Reviews"
            title="Guest language that reinforces trust and desire."
            description="Social proof is styled as premium editorial content rather than generic testimonial blocks."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <Card key={review.id} className="rounded-[2rem]">
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-plum-700)]">
                  {"★".repeat(review.rating)}
                </p>
                <p className="mt-4 text-base leading-8 text-[var(--color-plum-900)]">
                  "{review.copy}"
                </p>
                <div className="mt-6 text-sm text-[var(--color-plum-700)]">
                  <p className="font-semibold text-[var(--color-plum-900)]">{review.name}</p>
                  <p>{review.service}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-10 lg:pb-16">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Instagram Moments"
              title="A gallery strip built for visual appetite."
              description="Use this row for UGC, treatment reveals, product close-ups, or environmental storytelling."
            />
            <Link href="/reviews" className="hidden shrink-0 text-sm text-[var(--color-plum)] md:block">
              See all reviews
            </Link>
          </div>
          <div className="mt-10 grid gap-5 grid-cols-2 lg:grid-cols-4">
            {instagramMoments.map((moment, index) => (
              <div
                key={moment}
                className="luxury-panel aspect-square rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,#fde8e8,#fef9f0_55%,#dce8d8)] dark:bg-[linear-gradient(135deg,#2d1424,#171030_55%,#1a2d18)] p-4 sm:p-5"
              >
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/55 dark:border-white/10 bg-white/20 dark:bg-[rgba(23,16,48,0.30)] p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-plum-700)]">
                    0{index + 1}
                  </p>
                  <p className="font-heading text-2xl leading-tight text-[var(--color-plum-900)] sm:text-3xl">
                    {moment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
