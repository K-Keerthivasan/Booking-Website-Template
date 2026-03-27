"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

const K2_DEMO_CONFIG = {
  backUrl: "https://k2digitalmedia.ca",
  logoUrl: "/Logo.png",
  businessName: "K2 Digital Media",
} as const;

function DemoLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={K2_DEMO_CONFIG.backUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export function K2HomePopup() {
  const [isSideOpen, setIsSideOpen] = useState(true);
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);
  const topStripRef = useRef<HTMLDivElement>(null);
  const footerStripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;

    const syncOffsets = () => {
      const topHeight = topStripRef.current?.offsetHeight ?? 34;
      const bottomHeight = footerStripRef.current?.offsetHeight ?? 30;

      root.style.setProperty("--k2-demo-top-offset", `${topHeight}px`);
      root.style.setProperty("--k2-demo-bottom-offset", `${bottomHeight}px`);
    };

    syncOffsets();

    const resizeObserver = new ResizeObserver(() => {
      syncOffsets();
    });

    if (topStripRef.current) {
      resizeObserver.observe(topStripRef.current);
    }

    if (footerStripRef.current) {
      resizeObserver.observe(footerStripRef.current);
    }

    window.addEventListener("resize", syncOffsets);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncOffsets);
      root.style.removeProperty("--k2-demo-top-offset");
      root.style.removeProperty("--k2-demo-bottom-offset");
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-[99999] flex flex-wrap items-center justify-center gap-2 border-b border-[#2fa8c740] bg-[linear-gradient(90deg,#0b1224,#0d1a30)] px-3 py-[7px] text-center text-[10px] uppercase tracking-[0.12em] text-white/55 sm:gap-2.5 sm:px-4 sm:text-[11px]"
        ref={topStripRef}
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2fa8c7] shadow-[0_0_8px_#2fa8c7] animate-[k2pulse_2s_ease-in-out_infinite]" />
        <span className="leading-tight">This is a demo site built by</span>
        <DemoLink className="border-b border-[#2fa8c766] pb-px font-bold text-[#2fa8c7] transition hover:text-white">
          {K2_DEMO_CONFIG.businessName}
        </DemoLink>
        <span className="hidden text-white/25 sm:inline">-</span>
        <DemoLink className="rounded-full border border-[#2fa8c759] px-2.5 py-1 text-[9px] text-white/55 transition hover:border-[#2fa8c7cc] hover:text-white sm:px-3 sm:text-[10px]">
          Go Back -&gt;
        </DemoLink>
      </div>

      <div className="fixed top-1/2 right-0 z-[99998] flex -translate-y-1/2 items-center max-md:hidden">
        <button
          aria-expanded={isSideOpen}
          aria-label="Toggle demo panel"
          className="flex cursor-pointer items-center gap-1 rounded-l-lg border border-r-0 border-[#2fa8c74d] bg-[#0d1a30] px-[6px] py-2.5 text-[9px] uppercase tracking-[0.15em] text-[#2fa8c7] transition hover:bg-[#2fa8c726] [text-orientation:mixed] [writing-mode:vertical-rl]"
          onClick={() => setIsSideOpen((value) => !value)}
          type="button"
        >
          <span aria-hidden="true" className="text-sm">
            {isSideOpen ? ">" : "<"}
          </span>
          Demo
        </button>

        <div
          className={`flex flex-col items-center gap-3 overflow-hidden rounded-l-2xl border border-r-0 border-[#2fa8c740] bg-[linear-gradient(135deg,#080f1e,#0d1a30)] shadow-[-4px_0_24px_rgba(0,0,0,0.4)] transition-[width,padding] duration-300 ease-out ${
            isSideOpen ? "w-[200px] px-[18px] py-5" : "w-0 px-0 py-0"
          }`}
        >
          <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#2fa8c733] bg-[#2fa8c714]">
            <Image
              alt={K2_DEMO_CONFIG.businessName}
              className="h-12 w-12 object-contain"
              height={48}
              src={K2_DEMO_CONFIG.logoUrl}
              width={48}
            />
          </div>

          <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#2fa8c74d] bg-[#2fa8c71a] px-2.5 py-1 text-[9px] uppercase tracking-[0.15em] text-[#2fa8c7]">
            <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#2fa8c7] shadow-[0_0_6px_#2fa8c7] animate-[k2pulse_2s_ease-in-out_infinite]" />
            Demo Site
          </div>

          <p className="text-center text-xs leading-[1.55] text-white/60">
            This is a demo built by <strong className="font-bold text-white">K2 Digital Media</strong>
          </p>

          <DemoLink className="block w-full rounded-full bg-[linear-gradient(135deg,#2fa8c7,#1d7a99)] px-3 py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_4px_14px_rgba(47,168,199,0.3)] transition hover:scale-[0.97] hover:opacity-85">
            {"<- Back to K2DM"}
          </DemoLink>
        </div>
      </div>

      <div
        className="fixed inset-x-0 bottom-0 z-[99997] flex flex-wrap items-center justify-center gap-2 border-t border-[#2fa8c726] bg-[rgba(8,15,30,0.96)] px-3 py-1.5 text-center text-[9px] uppercase tracking-[0.1em] text-white/35 backdrop-blur-xl sm:gap-2.5 sm:px-4 sm:text-[10px]"
        ref={footerStripRef}
      >
        <Image
          alt={K2_DEMO_CONFIG.businessName}
          className="h-[18px] w-[18px] object-contain opacity-70"
          height={18}
          src={K2_DEMO_CONFIG.logoUrl}
          width={18}
        />
        <span>Demo by</span>
        <DemoLink className="font-bold text-[#2fa8c7] transition hover:underline">
          {K2_DEMO_CONFIG.businessName}
        </DemoLink>
        <span className="text-white/15">|</span>
        <DemoLink className="text-white/40 transition hover:text-white">
          Visit Main Site -&gt;
        </DemoLink>
      </div>

      <div className="fixed right-3 bottom-[calc(var(--k2-demo-bottom-offset,0px)+12px)] z-[99998] md:hidden">
        <div
          className={`overflow-hidden rounded-[22px] border border-[#2fa8c740] bg-[linear-gradient(135deg,rgba(8,15,30,0.96),rgba(13,26,48,0.96))] shadow-[0_12px_28px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 ${
            isMobilePanelOpen ? "w-[min(280px,calc(100vw-24px))]" : "w-auto"
          }`}
        >
          <button
            aria-expanded={isMobilePanelOpen}
            aria-label="Toggle demo panel"
            className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left"
            onClick={() => setIsMobilePanelOpen((value) => !value)}
            type="button"
          >
            <span className="flex min-w-0 items-center gap-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#2fa8c733] bg-[#2fa8c714]">
                <Image
                  alt={K2_DEMO_CONFIG.businessName}
                  className="h-8 w-8 object-contain"
                  height={32}
                  src={K2_DEMO_CONFIG.logoUrl}
                  width={32}
                />
              </span>
              <span className="min-w-0">
                <span className="block text-[9px] uppercase tracking-[0.16em] text-[#2fa8c7]">
                  Demo Site
                </span>
                <span className="block truncate text-[12px] text-white/72">
                  Built by {K2_DEMO_CONFIG.businessName}
                </span>
              </span>
            </span>
            <span className="shrink-0 text-xs text-[#2fa8c7]">{isMobilePanelOpen ? "Close" : "Open"}</span>
          </button>

          {isMobilePanelOpen ? (
            <div className="border-t border-[#2fa8c726] px-3 pb-3">
              <p className="pt-3 text-sm leading-6 text-white/62">
                This demo stays connected to the live K2 Digital Media brand so visitors can get back to the main site quickly.
              </p>
              <DemoLink className="mt-3 block rounded-full bg-[linear-gradient(135deg,#2fa8c7,#1d7a99)] px-4 py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_4px_14px_rgba(47,168,199,0.3)]">
                Visit K2 Digital Media
              </DemoLink>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
