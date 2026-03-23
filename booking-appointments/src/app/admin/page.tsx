import { AdminShell } from "@/components/admin/admin-shell";
import { Card } from "@/components/ui/card";
import { bookings, getServiceById } from "@/data/mock-data";
import { formatCurrency, formatTime } from "@/lib/utils";

const today = "2026-03-21";
const todaysBookings = bookings.filter((booking) => booking.start.startsWith(today));
const hours = Array.from({ length: 11 }, (_, index) => index + 9);
const revenueToday = todaysBookings.reduce((sum, booking) => {
  const service = getServiceById(booking.serviceId);
  return sum + (service?.price ?? 0);
}, 0);

export default function AdminDashboardPage() {
  return (
    <AdminShell
      title="Dashboard"
      description="This admin dashboard combines quick stats with a same-day timeline so staff can understand bookings, utilization, and revenue at a glance."
    >
      <section className="grid gap-5 md:grid-cols-3">
        <Card className="rounded-[2rem]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-plum-700)]">
            Bookings today
          </p>
          <p className="mt-4 font-heading text-5xl">{todaysBookings.length}</p>
        </Card>
        <Card className="rounded-[2rem]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-plum-700)]">
            Revenue today
          </p>
          <p className="mt-4 font-heading text-5xl">{formatCurrency(revenueToday)}</p>
        </Card>
        <Card className="rounded-[2rem]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-plum-700)]">
            Next available slot
          </p>
          <p className="mt-4 font-heading text-5xl">5:30 PM</p>
        </Card>
      </section>

      <section className="luxury-panel rounded-[2.5rem] p-6 md:p-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--color-plum-700)]">
              Today&apos;s calendar
            </p>
            <h2 className="mt-3 font-heading text-4xl">Hourly timeline</h2>
          </div>
          <p className="text-sm text-[var(--color-plum-700)]">Saturday, March 21, 2026</p>
        </div>
        <div className="space-y-4">
          {hours.map((hour) => {
            const matching = todaysBookings.filter(
              (booking) => new Date(booking.start).getHours() === hour,
            );
            return (
              <div key={hour} className="grid gap-4 rounded-[1.75rem] border border-[var(--color-border)] p-4 md:grid-cols-[100px_1fr]">
                <div className="text-sm font-medium text-[var(--color-plum-700)]">
                  {hour > 12 ? `${hour - 12}:00 PM` : `${hour}:00 AM`}
                </div>
                <div className="grid gap-3">
                  {matching.length > 0 ? (
                    matching.map((booking) => {
                      const service = getServiceById(booking.serviceId);
                      return (
                        <div
                          key={booking.id}
                          className="rounded-[1.25rem] bg-[var(--color-rose)]/50 px-4 py-3"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                              <p className="font-medium text-[var(--color-plum-900)]">
                                {booking.client}
                              </p>
                              <p className="text-sm text-[var(--color-plum-700)]">{service?.name}</p>
                            </div>
                            <p className="text-sm text-[var(--color-plum-700)]">
                              {formatTime(booking.start)} - {formatTime(booking.end)}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-sm text-[var(--color-plum-700)]">No appointments scheduled.</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </AdminShell>
  );
}
