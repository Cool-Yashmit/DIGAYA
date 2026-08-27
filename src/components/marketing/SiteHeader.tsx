"use client";

import Image from "next/image";
import Link from "next/link";
import { Geist } from "next/font/google";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

const navigation = [
  {
    label: "Platform",
    href: "#platform",
  },
  {
    label: "Solutions",
    href: "#solutions",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Resources",
    href: "#resources",
  },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`${geist.className} absolute inset-x-0 top-0 z-50 bg-transparent`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1540px] items-center justify-between px-4 sm:px-6 lg:h-[74px] lg:px-8 xl:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="DIGAYA home"
        >
          <Image
            src="/brand/digaya-logo.png"
            alt="DIGAYA"
            width={43}
            height={43}
            priority
            className="size-[37px] object-contain lg:size-[40px]"
          />

          <div className="leading-none">
            <span className="block text-[16px] font-[750] tracking-[-0.025em] text-[#101827]">
              DIGAYA
            </span>

            <span className="mt-[5px] block text-[8px] font-[600] uppercase tracking-[0.18em] text-[#7a8ba3]">
              Creator Business
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[14px] font-[500] text-[#43536b] transition-colors duration-200 hover:text-[#176df5]"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://store.digaya.in"
            className="text-[14px] font-[500] text-[#43536b] transition-colors duration-200 hover:text-[#176df5]"
          >
            Store
          </a>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/login"
            className="text-[14px] font-[500] text-[#34445a] transition-colors duration-200 hover:text-[#176df5]"
          >
            Log in
          </Link>

          <Link
            href="/pricing"
            className="inline-flex h-[42px] items-center justify-center rounded-[12px] bg-[#101827] px-5 text-[13px] font-[650] text-white shadow-[0_10px_24px_rgba(15,23,42,0.13)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#176df5]"
          >
            Start for free
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="flex size-10 items-center justify-center rounded-[11px] border border-[#c5d4e7] bg-white/80 text-[#172033] lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute left-4 right-4 top-[64px] rounded-[18px] border border-[#c9d8ea] bg-white p-3 shadow-[0_20px_55px_rgba(26,51,88,0.16)] sm:left-6 sm:right-6">
          <div className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-[10px] px-3 py-3 text-[14px] font-[550] text-[#34465f] transition-colors hover:bg-[#edf4ff] hover:text-[#176df5]"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://store.digaya.in"
              className="rounded-[10px] px-3 py-3 text-[14px] font-[550] text-[#34465f] transition-colors hover:bg-[#edf4ff] hover:text-[#176df5]"
            >
              Store
            </a>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-[#e1e9f3] pt-3">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex h-[43px] items-center justify-center rounded-[10px] border border-[#ccd9e8] text-[13px] font-[650] text-[#34465f]"
            >
              Log in
            </Link>

            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="flex h-[43px] items-center justify-center rounded-[10px] bg-[#176df5] text-[13px] font-[650] text-white"
            >
              Start for free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}