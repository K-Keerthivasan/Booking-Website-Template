"use client";

import { useMemo, useState } from "react";

import { bookings, getServiceById, getStaffById } from "@/data/mock-data";
import { formatDate, formatTime } from "@/lib/utils";

const weekDays = Array.from({ length: 7 }, (_, index) => {
  const date = new Date("2026-03-21T00:00:00-04:00");
  date.setDate(date.getDate() + index);
  return date;
});

export function BookingsManager() {
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(null);
  const grouped = useMemo(
    () =>
      weekDays.map((day) => ({
        day,
        bookings: bookings.filter(
          (booking) =>
            new Date(booking.start).toDateString() === day.toDateString(),
        ),
      })),
    [],
  );

  const selectedBooking = bookings.find((booking) => booking.id === selectedBookingId);
  const selectedService = selectedBooking ? getServiceById(selectedBooking.serviceId) : null;
  const selectedStaff = selectedBooking ? getStaffById(selectedBooking.staffId) : null;

  return (
    <>
      <section className="luxury-panel rounded-[2.5rem] p-5 md:p-8">
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
          {grouped.map(({ day, bookings: dayBookings }) => (
            <div
              key={day.toISOString()}
              className="rounded-[1.75rem] border border-[var(--color-border)] bg-white/50 dark:bg-[rgba(23,16,48,0.50)] p-3 md:p-4"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-plum-700)]">
                {day.toLocaleDateString("en-US", { weekday: "short" })}
              </p>
              <p className="mt-2 font-heading text-2xl md:text-3xl">
                {day.toLocaleDateString("en-US", { day: "numeric" })}
              </p>
              <div className="mt-3 space-y-2 md:mt-4 md:space-y-3">
                {dayBookings.map((booking) => (
                  <button
                    key={booking.id}
                    type="button"
                    onClick={() => setSelectedBookingId(booking.id)}
                    className="w-full rounded-[1.25rem] bg-[var(--color-rose)]/55 p-2 text-left transition hover:bg-[var(--color-rose)] md:p-3"
                  >
                    <p className="text-xs font-medium text-[var(--color-plum-900)] md:text-sm">
                      {booking.client}
                    </p>
                    <p className="mt-1 text-xs text-[var(--color-plum-700)]">
                      {formatTime(booking.start)}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(36,19,53,0.28)] dark:bg-[rgba(0,0,0,0.60)] p-4 sm:p-6">
          <div className="luxury-panel w-full max-w-xl rounded-[2.25rem] p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-plum-700)]">
                  Booking detail
                </p>
                <h2 className="mt-3 font-heading text-3xl md:text-4xl">{selectedBooking.client}</h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBookingId(null)}
                className="rounded-full border border-[var(--color-border)] px-3 py-1 text-sm shrink-0"
              >
                Close
              </button>
            </div>
            <div className="mt-6 grid gap-3 grid-cols-2 md:mt-8 md:gap-4">
              <Detail label="Service" value={selectedService?.name ?? ""} />
              <Detail label="Staff" value={selectedStaff?.name ?? ""} />
              <Detail label="Date" value={formatDate(selectedBooking.start)} />
              <Detail label="Time" value={`${formatTime(selectedBooking.start)} – ${formatTime(selectedBooking.end)}`} />
              <Detail label="Status" value={selectedBooking.status} />
              <Detail label="Phone" value={selectedBooking.phone} />
            </div>
            <div className="mt-5 rounded-[1.5rem] bg-[var(--color-cream)] px-4 py-4 md:mt-6">
              <p className="text-sm font-medium text-[var(--color-plum-900)]">Notes</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-plum-700)]">
                {selectedBooking.notes}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] bg-white/60 dark:bg-[rgba(23,16,48,0.60)] px-4 py-4">
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-plum-700)]">{label}</p>
      <p className="mt-2 text-sm text-[var(--color-plum-900)]">{value}</p>
    </div>
  );
}
