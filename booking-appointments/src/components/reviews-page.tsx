import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { reviews } from "@/data/mock-data";
import { formatDate } from "@/lib/utils";

export function ReviewsPage() {
  const average =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        <section className="luxury-panel rounded-[2.5rem] p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-plum-700)]">
            Guest sentiment
          </p>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-heading text-6xl leading-none md:text-8xl">{average.toFixed(1)}</h1>
              <p className="mt-3 text-lg text-[var(--color-plum-700)]">
                {"★".repeat(5)} based on {reviews.length} recent reviews
              </p>
            </div>
            <p className="max-w-xl text-base leading-8 text-[var(--color-plum-700)]">
              The review page keeps social proof prominent while still making room for richer,
              editorial-feeling feedback cards.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading
            eyebrow="Recent Reviews"
            title="Language that sells the experience."
            description="Every card includes service context, date, star rating, and written review content so the page feels credible and conversion-oriented."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {reviews.map((review) => (
              <Card key={review.id} className="rounded-[2rem] p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-rose)] font-heading text-2xl text-[var(--color-plum)]">
                      {review.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-plum-900)]">{review.name}</p>
                      <p className="text-sm text-[var(--color-plum-700)]">{review.service}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-plum-700)]">{formatDate(review.date)}</p>
                </div>
                <p className="mt-6 text-sm uppercase tracking-[0.22em] text-[var(--color-plum-700)]">
                  {"★".repeat(review.rating)}
                </p>
                <p className="mt-4 text-base leading-8 text-[var(--color-plum-900)]">{review.copy}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
