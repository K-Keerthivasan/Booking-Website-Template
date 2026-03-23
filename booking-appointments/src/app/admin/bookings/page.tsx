import { AdminShell } from "@/components/admin/admin-shell";
import { BookingsManager } from "@/components/admin/bookings-manager";

export default function AdminBookingsPage() {
  return (
    <AdminShell
      title="Bookings Manager"
      description="The weekly grid shows appointment density by day, and the modal demonstrates the shape of a staff-side booking detail view."
    >
      <BookingsManager />
    </AdminShell>
  );
}
