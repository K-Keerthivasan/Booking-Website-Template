import { addDays, addMinutes, set } from "date-fns";

export type ServiceCategory = "Hair" | "Skin" | "Nails" | "Body";

export type Service = {
  id: string;
  name: string;
  category: ServiceCategory;
  duration: number;
  price: number;
  description: string;
  featured?: boolean;
};

export type StaffMember = {
  id: string;
  name: string;
  role: string;
  specialties: ServiceCategory[];
  bio: string;
  initials: string;
  accent: string;
};

export type Booking = {
  id: string;
  client: string;
  serviceId: string;
  staffId: string;
  start: string;
  end: string;
  notes: string;
  status: "Confirmed" | "Pending" | "Completed";
  phone: string;
  email: string;
};

export type Review = {
  id: string;
  name: string;
  service: string;
  date: string;
  rating: number;
  copy: string;
};

export const services: Service[] = [
  { id: "svc-signature-blowout", name: "Signature Silk Blowout", category: "Hair", duration: 60, price: 95, description: "Glossing wash, sculpted blow-dry, and weightless finishing veil.", featured: true },
  { id: "svc-luminous-color", name: "Luminous Color Ritual", category: "Hair", duration: 120, price: 185, description: "Dimensional color refresh with bond care and tailored tone glazing." },
  { id: "svc-bridal-hair", name: "Bridal Hair Preview", category: "Hair", duration: 90, price: 145, description: "Consultation-led styling preview for wedding or event looks." },
  { id: "svc-radiance-facial", name: "Radiance Reset Facial", category: "Skin", duration: 75, price: 135, description: "Enzyme polish, sculpting massage, and glow infusion for luminous skin.", featured: true },
  { id: "svc-hydra-facial", name: "Hydra Veil Infusion", category: "Skin", duration: 60, price: 120, description: "Hydrating treatment designed to calm, replenish, and refine texture." },
  { id: "svc-brow-lash", name: "Brow & Lash Polish", category: "Skin", duration: 45, price: 78, description: "Soft tint, shape definition, and conditioning finish for eyes and brows." },
  { id: "svc-luxe-manicure", name: "Velvet Luxe Manicure", category: "Nails", duration: 50, price: 62, description: "Cuticle refinement, hand masque, and high-shine longwear lacquer." },
  { id: "svc-gel-overlay", name: "Rose Quartz Gel Overlay", category: "Nails", duration: 70, price: 85, description: "Strengthening gel overlay with elegant shaping and gloss seal.", featured: true },
  { id: "svc-botanical-pedicure", name: "Botanical Pedicure Ceremony", category: "Nails", duration: 65, price: 88, description: "Warm soak, smoothing exfoliation, tension-relief massage, and polish." },
  { id: "svc-sculpt-massage", name: "Sculpt & Soothe Massage", category: "Body", duration: 90, price: 170, description: "Aromatherapy full-body massage focused on release, circulation, and calm." },
  { id: "svc-body-polish", name: "Milk Rose Body Polish", category: "Body", duration: 60, price: 118, description: "Creamy exfoliation with hydration wrap to soften and brighten skin." },
  { id: "svc-restorative-cocoon", name: "Restorative Body Cocoon", category: "Body", duration: 75, price: 148, description: "Gentle tension relief ritual with grounding oils and soothing wrap." },
];

export const staffMembers: StaffMember[] = [
  { id: "stf-aria", name: "Aria Laurent", role: "Creative Hair Director", specialties: ["Hair"], bio: "Refined editorial styling with soft movement and luminous finishes.", initials: "AL", accent: "from-rose-200 to-rose-100" },
  { id: "stf-selene", name: "Selene March", role: "Skin Ritualist", specialties: ["Skin", "Body"], bio: "Known for calming facials and restorative touch-led treatments.", initials: "SM", accent: "from-sage-200 to-emerald-50" },
  { id: "stf-noemi", name: "Noemi Vale", role: "Nail Atelier Lead", specialties: ["Nails"], bio: "Precision manicures and polished finishes with a couture eye.", initials: "NV", accent: "from-fuchsia-100 to-rose-50" },
  { id: "stf-clara", name: "Clara Duvall", role: "Wellness Therapist", specialties: ["Body", "Skin"], bio: "Deeply grounding bodywork paired with elegant, unhurried care.", initials: "CD", accent: "from-amber-100 to-orange-50" },
];

const baseDate = new Date("2026-03-21T00:00:00-04:00");

const bookingRows: Array<[string, string, string, number, number, number, number, Booking["status"]]> = [
  ["Evelyn Reed", "svc-radiance-facial", "stf-selene", 0, 10, 0, 75, "Completed"],
  ["Madison Cole", "svc-signature-blowout", "stf-aria", 0, 11, 0, 60, "Confirmed"],
  ["Sofia Lin", "svc-gel-overlay", "stf-noemi", 0, 13, 30, 70, "Pending"],
  ["Harper James", "svc-sculpt-massage", "stf-clara", 0, 15, 0, 90, "Confirmed"],
  ["Nora Bell", "svc-hydra-facial", "stf-selene", 1, 9, 0, 60, "Confirmed"],
  ["Amelia Brooks", "svc-luminous-color", "stf-aria", 1, 11, 30, 120, "Pending"],
  ["Lily Carter", "svc-luxe-manicure", "stf-noemi", 1, 14, 0, 50, "Completed"],
  ["Emma Watts", "svc-body-polish", "stf-clara", 1, 16, 0, 60, "Confirmed"],
  ["Ava Nguyen", "svc-botanical-pedicure", "stf-noemi", 2, 10, 0, 65, "Confirmed"],
  ["Isla Morgan", "svc-radiance-facial", "stf-selene", 2, 12, 30, 75, "Completed"],
  ["Zoey Harper", "svc-bridal-hair", "stf-aria", 2, 15, 0, 90, "Confirmed"],
  ["Grace Ellis", "svc-restorative-cocoon", "stf-clara", 2, 17, 0, 75, "Pending"],
  ["Charlotte Dean", "svc-signature-blowout", "stf-aria", 3, 9, 30, 60, "Confirmed"],
  ["Mila Foster", "svc-brow-lash", "stf-selene", 3, 11, 0, 45, "Completed"],
  ["Lucy Bennett", "svc-gel-overlay", "stf-noemi", 3, 13, 0, 70, "Confirmed"],
  ["Ella Price", "svc-sculpt-massage", "stf-clara", 4, 10, 30, 90, "Confirmed"],
  ["Scarlett Hayes", "svc-hydra-facial", "stf-selene", 4, 14, 0, 60, "Pending"],
  ["Penelope Scott", "svc-luminous-color", "stf-aria", 5, 11, 0, 120, "Confirmed"],
  ["Camila Ross", "svc-botanical-pedicure", "stf-noemi", 5, 15, 0, 65, "Completed"],
  ["Layla Stone", "svc-restorative-cocoon", "stf-clara", 6, 12, 0, 75, "Confirmed"],
];

export const bookings: Booking[] = bookingRows.map(
  ([client, serviceId, staffId, dayOffset, hour, minute, duration, status], index) => {
    const start = set(addDays(baseDate, dayOffset), {
      hours: hour,
      minutes: minute,
      seconds: 0,
      milliseconds: 0,
    });

    return {
      id: `bk-${index + 1}`,
      client,
      serviceId,
      staffId,
      start: start.toISOString(),
      end: addMinutes(start, duration).toISOString(),
      notes:
        index % 3 === 0
          ? "Prefers quiet appointment and herbal tea on arrival."
          : "First visit. Review consultation notes before treatment.",
      status,
      phone: "(555) 204-1188",
      email: `${client.toLowerCase().replaceAll(" ", ".")}@example.com`,
    };
  },
);

export const reviews: Review[] = [
  { id: "rvw-1", name: "Monica Ray", service: "Radiance Reset Facial", date: "2026-03-18", rating: 5, copy: "The facial was immaculate. Every detail felt considered, from the scent in the room to the way my skin looked two days later." },
  { id: "rvw-2", name: "Danielle Price", service: "Signature Silk Blowout", date: "2026-03-14", rating: 5, copy: "Aria gave me the kind of polished blowout that makes the whole week feel easier. The space feels expensive in the best possible way." },
  { id: "rvw-3", name: "Keisha Moore", service: "Botanical Pedicure Ceremony", date: "2026-03-11", rating: 4, copy: "Beautiful atmosphere, very calm team, and the pedicure was immaculate. I stayed for tea after and booked my next visit before leaving." },
  { id: "rvw-4", name: "Talia Brooks", service: "Sculpt & Soothe Massage", date: "2026-03-05", rating: 5, copy: "Clara is exceptional. I walked in tense and left genuinely reset. This is the first spa in a while that feels luxurious without being stiff." },
  { id: "rvw-5", name: "Ariana Wells", service: "Rose Quartz Gel Overlay", date: "2026-02-27", rating: 5, copy: "The nail work is pristine and the entire appointment moved at an unhurried, premium pace. It feels like a ritual rather than an errand." },
  { id: "rvw-6", name: "Jade Kim", service: "Hydra Veil Infusion", date: "2026-02-19", rating: 5, copy: "My skin looked calm, plush, and bright by the time I got to dinner. The treatment room alone deserves five stars." },
];

export const packageDeals = [
  { id: "pkg-1", name: "The Golden Hour", includes: "Blowout, brow polish, and express manicure", price: 210 },
  { id: "pkg-2", name: "Rose Garden Escape", includes: "Hydra facial, body polish, and tea lounge access", price: 295 },
  { id: "pkg-3", name: "Bridal Prelude", includes: "Hair preview, skin consultation, and gel overlay", price: 340 },
];

export const heroStats = [
  { label: "Guest satisfaction", value: "4.9/5" },
  { label: "Average response time", value: "< 10 min" },
  { label: "Curated rituals", value: "12" },
];

export const howItWorks = [
  { step: "01", title: "Choose a ritual", description: "Select a service or package tailored to beauty, recovery, or occasion styling." },
  { step: "02", title: "Match with an expert", description: "Book with a specialist whose pace and craft suits the experience you want." },
  { step: "03", title: "Arrive and exhale", description: "Check in, settle with tea, and let the studio handle the rest with unhurried care." },
];

export const instagramMoments = [
  "Rose quartz nail detail",
  "Facial room with linen canopy",
  "Styling chair with fresh florals",
  "Tea lounge and product shelf",
];

export function getServiceById(id: string) {
  return services.find((service) => service.id === id);
}

export function getStaffById(id: string) {
  return staffMembers.find((staff) => staff.id === id);
}
