"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import Calendar from "react-calendar";
import { useForm } from "react-hook-form";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/ui/section-heading";
import { Textarea } from "@/components/ui/textarea";
import { services, staffMembers, type Service } from "@/data/mock-data";
import { cn, formatCurrency } from "@/lib/utils";

type ContactValues = {
  fullName: string;
  email: string;
  phone: string;
  notes: string;
};

const steps = [
  "Select service",
  "Choose staff member",
  "Pick date & time",
  "Contact details",
];

const slotLabels = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"];

const unselectedItem =
  "border-[var(--color-border)] bg-white/70 dark:bg-[rgba(23,16,48,0.70)]";

export function BookingFlow() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState<Service | null>(services[0]);
  const [selectedStaffId, setSelectedStaffId] = useState(staffMembers[0]?.id ?? "");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date("2026-03-21T00:00:00-04:00"));
  const [selectedSlot, setSelectedSlot] = useState(slotLabels[2]);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  const eligibleStaff = useMemo(() => {
    if (!selectedService) {
      return [];
    }
    return staffMembers.filter((member) =>
      member.specialties.includes(selectedService.category),
    );
  }, [selectedService]);

  const next = () => setStep((current) => Math.min(current + 1, steps.length - 1));
  const back = () => setStep((current) => Math.max(current - 1, 0));

  const handleSubmit = form.handleSubmit(() => {
    setSubmitted(true);
  });

  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* Sidebar — step list + summary */}
          <div>
            <SectionHeading
              eyebrow="Book Now"
              title="A four-step reservation flow with gentle motion."
              description="The sample flow demonstrates service selection, staff pairing, scheduling, and lead capture using Framer Motion, React Calendar, and React Hook Form."
            />
            <div className="mt-8 space-y-3">
              {steps.map((label, index) => (
                <Card
                  key={label}
                  className={cn(
                    "rounded-[1.75rem] p-4",
                    index === step && "border-[var(--color-plum)] bg-[var(--color-rose)]/50",
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm",
                        index <= step
                          ? "border-[var(--color-plum)] bg-[var(--color-plum)] text-white"
                          : "border-[var(--color-border)] bg-white/70 dark:bg-[rgba(23,16,48,0.70)] text-[var(--color-plum-700)]",
                      )}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--color-plum-900)]">{label}</p>
                      <p className="text-xs text-[var(--color-plum-700)]">
                        {index === 0 && "Choose the ritual"}
                        {index === 1 && "Pair with a specialist"}
                        {index === 2 && "Reserve a time"}
                        {index === 3 && "Capture lead details"}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <Card className="mt-8 rounded-[2rem] bg-[var(--color-plum)] text-white">
              <p className="text-sm uppercase tracking-[0.24em] text-white/70">Selected summary</p>
              <div className="mt-4 space-y-2 text-sm text-white/84">
                <p>Service: {selectedService?.name ?? "Not selected"}</p>
                <p>Staff: {staffMembers.find((staff) => staff.id === selectedStaffId)?.name ?? "Not selected"}</p>
                <p>Date: {selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric" })}</p>
                <p>Time: {selectedSlot}</p>
              </div>
            </Card>
          </div>

          {/* Main step panel */}
          <Card className="rounded-[2.5rem] p-5 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {step === 0 && (
                  <div>
                    <h2 className="font-heading text-4xl sm:text-5xl">Select your service</h2>
                    <div className="mt-8 grid gap-4">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => setSelectedService(service)}
                          className={cn(
                            "rounded-[1.75rem] border p-5 text-left transition",
                            selectedService?.id === service.id
                              ? "border-[var(--color-plum)] bg-[var(--color-rose)]/50"
                              : unselectedItem,
                          )}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-plum-700)]">
                                {service.category}
                              </p>
                              <h3 className="mt-2 font-heading text-3xl">{service.name}</h3>
                            </div>
                            <p className="shrink-0 font-semibold text-[var(--color-plum)]">
                              {formatCurrency(service.price)}
                            </p>
                          </div>
                          <p className="mt-3 text-sm leading-7 text-[var(--color-plum-700)]">
                            {service.description}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div>
                    <h2 className="font-heading text-4xl sm:text-5xl">Choose your specialist</h2>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {eligibleStaff.map((member) => (
                        <button
                          key={member.id}
                          type="button"
                          onClick={() => setSelectedStaffId(member.id)}
                          className={cn(
                            "rounded-[1.75rem] border p-5 text-left transition",
                            selectedStaffId === member.id
                              ? "border-[var(--color-plum)] bg-[var(--color-rose)]/50"
                              : unselectedItem,
                          )}
                        >
                          <div
                            className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${member.accent} font-heading text-2xl text-[var(--color-plum)]`}
                          >
                            {member.initials}
                          </div>
                          <p className="mt-5 text-sm uppercase tracking-[0.24em] text-[var(--color-plum-700)]">
                            {member.role}
                          </p>
                          <h3 className="mt-2 font-heading text-3xl">{member.name}</h3>
                          <p className="mt-3 text-sm leading-7 text-[var(--color-plum-700)]">
                            {member.bio}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                      <h2 className="font-heading text-4xl sm:text-5xl">Pick a date</h2>
                      <div className="mt-8 rounded-[2rem] border border-[var(--color-border)] bg-white/70 dark:bg-[rgba(23,16,48,0.70)] p-4">
                        <Calendar
                          className="calendar-luxury"
                          value={selectedDate}
                          onChange={(value) => setSelectedDate(value as Date)}
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="font-heading text-4xl sm:text-5xl">Choose a time</h2>
                      <div className="mt-8 grid gap-3 grid-cols-2">
                        {slotLabels.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={cn(
                              "rounded-[1.5rem] border px-4 py-4 text-left transition",
                              selectedSlot === slot
                                ? "border-[var(--color-plum)] bg-[var(--color-plum)] text-white"
                                : cn(unselectedItem, "text-[var(--color-plum-900)]"),
                            )}
                          >
                            <p className="font-medium">{slot}</p>
                            <p
                              className={cn(
                                "mt-1 text-xs",
                                selectedSlot === slot
                                  ? "text-white/72"
                                  : "text-[var(--color-plum-700)]",
                              )}
                            >
                              {selectedService?.duration} min
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <form onSubmit={handleSubmit}>
                    <h2 className="font-heading text-4xl sm:text-5xl">Enter contact details</h2>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <Input
                          placeholder="Full name"
                          {...form.register("fullName", { required: true })}
                        />
                      </div>
                      <Input
                        placeholder="Email address"
                        type="email"
                        {...form.register("email", { required: true })}
                      />
                      <Input
                        placeholder="Phone number"
                        {...form.register("phone", { required: true })}
                      />
                      <div className="sm:col-span-2">
                        <Textarea
                          placeholder="Add any appointment notes"
                          {...form.register("notes")}
                        />
                      </div>
                    </div>
                    {submitted && (
                      <p className="mt-4 text-sm text-[var(--color-sage-deep)]">
                        Mock booking submitted. Replace this with a Supabase write in production.
                      </p>
                    )}
                    <div className="mt-6">
                      <Button type="submit" className="w-full sm:w-auto">Confirm Reservation</Button>
                    </div>
                  </form>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between border-t border-[var(--color-border)] pt-6">
              <Button variant="ghost" onClick={back} disabled={step === 0}>
                Back
              </Button>
              {step < steps.length - 1 && (
                <Button onClick={next}>Continue</Button>
              )}
            </div>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
