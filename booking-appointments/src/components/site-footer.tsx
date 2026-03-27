export function SiteFooter() {
  return (
    <footer>
      <div className="border-t border-[var(--color-border)] bg-white/50 dark:bg-[rgba(23,16,48,0.50)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 text-sm text-[var(--color-plum-700)] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="font-heading text-2xl text-[var(--color-plum)]">Veloura Atelier</p>
            <p>Luxury salon and spa booking template for K2 Digital Media.</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <p>142 Grandview Avenue, Toronto, ON</p>
            <p>Open daily from 9:00 AM to 8:00 PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
