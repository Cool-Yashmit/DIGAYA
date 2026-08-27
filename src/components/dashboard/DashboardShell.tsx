"use client";

import {
  BarChart3,
  Bell,
  CalendarDays,
  ChevronDown,
  CreditCard,
  Globe2,
  GraduationCap,
  Home,
  Camera,
  LayoutTemplate,
  Mail,
  Menu,
  Package,
  Plus,
  Settings,
  Users,
  WalletCards,
  Workflow,
  X,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { DigayaMark } from "@/components/brand/DigayaMark";

const navigation = [
  {
    label: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Creator Page",
    href: "/dashboard/page",
    icon: LayoutTemplate,
  },
  {
    label: "Website",
    href: "/dashboard/website",
    icon: Globe2,
  },
  {
    label: "Products",
    href: "/dashboard/products",
    icon: Package,
  },
  {
    label: "Courses",
    href: "/dashboard/courses",
    icon: GraduationCap,
  },
  {
    label: "Bookings",
    href: "/dashboard/bookings",
    icon: CalendarDays,
  },
  {
    label: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    label: "Instagram",
    href: "/dashboard/instagram",
    icon: Camera,
  },
  {
    label: "Email",
    href: "/dashboard/email",
    icon: Mail,
  },
  {
    label: "Automations",
    href: "/dashboard/automations",
    icon: Workflow,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    label: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    label: "Settlements",
    href: "/dashboard/settlements",
    icon: WalletCards,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {sidebarOpen && (
        <button
          type="button"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-[2px] lg:hidden"
          aria-label="Close navigation"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[72px] items-center justify-between px-5">
          <DigayaMark />

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="flex size-9 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mx-4 rounded-2xl border border-slate-200 bg-slate-50 p-2">
          <div className="flex items-center gap-3 rounded-xl p-2">
            <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-bold text-white">
              Y
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-900">
                My Workspace
              </p>
              <p className="text-xs text-slate-500">Free plan</p>
            </div>

            <ChevronDown size={15} className="text-slate-400" />
          </div>
        </div>

        <nav className="mt-4 flex-1 overflow-y-auto px-4 pb-5">
          <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">
            Workspace
          </p>

          <div className="space-y-1">
            {navigation.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex h-10 items-center gap-3 rounded-xl px-3 text-[13px] font-medium transition ${
                    index === 0
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  <Icon
                    size={17}
                    strokeWidth={1.9}
                    className={
                      index === 0 ? "text-blue-600" : "text-slate-400"
                    }
                  />

                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-slate-200 p-4">
          <div className="rounded-2xl bg-slate-950 p-4 text-white">
            <p className="text-sm font-semibold">Grow with DIGAYA</p>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              Unlock more products, pages and automation tools.
            </p>

            <button
              type="button"
              className="mt-4 h-9 w-full rounded-xl bg-white text-xs font-semibold text-slate-950"
            >
              Explore plans
            </button>
          </div>
        </div>
      </aside>

      <div className="lg:pl-[270px]">
        <header className="sticky top-0 z-30 flex h-[72px] items-center border-b border-slate-200 bg-white/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="mr-3 flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 lg:hidden"
          >
            <Menu size={18} />
          </button>

          <div>
            <p className="text-sm font-semibold text-slate-950">Dashboard</p>
            <p className="hidden text-xs text-slate-400 sm:block">
              Manage your DIGAYA business
            </p>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              className="hidden h-10 items-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 sm:flex"
            >
              <Plus size={17} />
              Create
            </button>

            <button
              type="button"
              className="relative flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            >
              <Bell size={18} />
              <span className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-blue-600" />
            </button>

            <button
              type="button"
              className="ml-1 flex size-10 items-center justify-center rounded-xl bg-slate-950 text-xs font-bold text-white"
            >
              YK
            </button>
          </div>
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
}