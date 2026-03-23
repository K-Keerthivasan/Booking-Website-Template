import { AdminShell } from "@/components/admin/admin-shell";
import { Card } from "@/components/ui/card";
import { services, staffMembers } from "@/data/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function AdminServicesPage() {
  return (
    <AdminShell
      title="Services Manager"
      description="The services admin view includes a list table and a sample add-edit form layout for pricing, duration, categorization, and staff assignment."
    >
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-hidden rounded-[2.5rem] p-0">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--color-rose)]/55 text-[var(--color-plum-700)]">
              <tr>
                <th className="px-6 py-4 font-medium">Service</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Duration</th>
                <th className="px-6 py-4 font-medium">Price</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-t border-[var(--color-border)]">
                  <td className="px-6 py-4 text-[var(--color-plum-900)]">{service.name}</td>
                  <td className="px-6 py-4 text-[var(--color-plum-700)]">{service.category}</td>
                  <td className="px-6 py-4 text-[var(--color-plum-700)]">{service.duration} min</td>
                  <td className="px-6 py-4 font-medium text-[var(--color-plum)]">
                    {formatCurrency(service.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="rounded-[2.5rem] p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-plum-700)]">
            Add / Edit service
          </p>
          <h2 className="mt-3 font-heading text-4xl">Service form</h2>
          <div className="mt-6 space-y-4">
            <Field label="Name" value="Luxury Scalp Renewal" />
            <Field label="Category" value="Hair" />
            <Field label="Duration" value="45 minutes" />
            <Field label="Price" value="$72" />
            <Field
              label="Description"
              value="Cooling scalp treatment with tension relief massage and glossing finish."
              multiline
            />
            <div className="rounded-[1.5rem] bg-white/60 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-plum-700)]">
                Staff who offer it
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {staffMembers.map((staff) => (
                  <span
                    key={staff.id}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-rose)]/45 px-3 py-2 text-xs text-[var(--color-plum-900)]"
                  >
                    {staff.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AdminShell>
  );
}

function Field({
  label,
  value,
  multiline = false,
}: {
  label: string;
  value: string;
  multiline?: boolean;
}) {
  return (
    <div className="rounded-[1.5rem] bg-white/60 px-4 py-4">
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-plum-700)]">{label}</p>
      <p className={`mt-2 text-sm text-[var(--color-plum-900)] ${multiline ? "leading-7" : ""}`}>
        {value}
      </p>
    </div>
  );
}
