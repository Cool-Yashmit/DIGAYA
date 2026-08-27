"use client";

import Image from "next/image";
import {
  BookOpen,
  CalendarDays,
  Globe2,
  MessageCircle,
  Package,
  Plus,
  Send,
  ShoppingBag,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

const workspaceNavigation = [
  {
    label: "Website",
    icon: Globe2,
    active: true,
  },
  {
    label: "Store",
    icon: ShoppingBag,
  },
  {
    label: "Courses",
    icon: BookOpen,
  },
  {
    label: "Bookings",
    icon: CalendarDays,
  },
  {
    label: "Audience",
    icon: Users,
  },
  {
    label: "Automations",
    icon: Workflow,
  },
];

const platformCapabilities = [
  {
    title: "Digital storefront",
    description: "Products, courses and offers",
    icon: ShoppingBag,
    iconSurface: "bg-[#eaf2ff]",
    iconStyle: "text-[#1266f6]",
  },
  {
    title: "Course builder",
    description: "Lessons, students and access",
    icon: BookOpen,
    iconSurface: "bg-[#f3ecff]",
    iconStyle: "text-[#7954d8]",
  },
  {
    title: "Bookings",
    description: "Sessions and appointments",
    icon: CalendarDays,
    iconSurface: "bg-[#e8f8f2]",
    iconStyle: "text-[#11986f]",
  },
  {
    title: "Automations",
    description: "Conversation to customer",
    icon: Workflow,
    iconSurface: "bg-[#fff2e6]",
    iconStyle: "text-[#d97706]",
  },
];

export function HeroProductPreview() {
  return (
    <div className="relative w-full">
      <div className="lg:hidden">
        <MobileProductPreview />
      </div>

      <div className="hidden lg:block">
        <DesktopProductPreview />
      </div>
    </div>
  );
}

function MobileProductPreview() {
  return (
    <div className="relative mx-auto max-w-[350px]">
      <div className="absolute -left-16 top-8 size-44 rounded-full bg-blue-200/25 blur-[80px]" />

      <div className="absolute -right-16 bottom-4 size-44 rounded-full bg-cyan-200/20 blur-[80px]" />

      <div className="relative rounded-[24px] border border-[#dfe4eb] bg-white p-[6px] shadow-[0_24px_65px_rgba(31,50,82,0.13)]">
        <div className="relative aspect-[5/4] overflow-hidden rounded-[19px] bg-[#f5f7fc]">
          <Image
            src="/assets/home/cards/digaya-link-in-bio-builder.png"
            alt="DIGAYA link-in-bio builder"
            fill
            priority
            sizes="(max-width: 768px) 350px, 700px"
            className="object-cover object-top"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/65 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-4 flex w-[88%] items-center gap-2.5 rounded-[16px] border border-[#e1e5eb] bg-white/95 px-3 py-2.5 shadow-[0_12px_34px_rgba(34,51,78,0.1)] backdrop-blur-xl">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-[#eaf2ff] text-[#1266f6]">
          <Sparkles size={13} />
        </div>

        <div className="min-w-0 flex-1 text-left">
          <p className="truncate text-[9px] font-semibold text-[#2c3442]">
            Build your internet home
          </p>

          <p className="mt-0.5 truncate text-[7px] text-[#929aa7]">
            Page, products, bookings and links
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-[#ebf8f2] px-2 py-1 text-[7px] font-semibold text-[#16845f]">
          Live
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {platformCapabilities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-[15px] border border-[#e3e7ed] bg-white p-3 text-left shadow-[0_5px_15px_rgba(28,45,72,0.04)]"
            >
              <div
                className={`flex size-8 items-center justify-center rounded-[10px] ${item.iconSurface} ${item.iconStyle}`}
              >
                <Icon size={12} />
              </div>

              <p className="mt-2.5 text-[9px] font-semibold text-[#343c4a]">
                {item.title}
              </p>

              <p className="mt-1 text-[7px] leading-3 text-[#939baa]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DesktopProductPreview() {
  return (
    <div className="relative mx-auto max-w-[1060px] px-5">
      <div className="absolute left-[8%] top-[8%] h-[280px] w-[330px] rounded-full bg-blue-300/15 blur-[100px]" />

      <div className="absolute bottom-[4%] right-[7%] h-[280px] w-[350px] rounded-full bg-cyan-300/15 blur-[100px]" />

      <div className="relative overflow-hidden rounded-[27px] border border-[#dce2ea] bg-[#f7f8fa] shadow-[0_30px_85px_rgba(37,56,88,0.13)]">
        <div className="relative flex h-[43px] items-center border-b border-[#e2e6ec] bg-[#fbfbfc] px-4">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-[#d4d9e1]" />
            <span className="size-2 rounded-full bg-[#d4d9e1]" />
            <span className="size-2 rounded-full bg-[#d4d9e1]" />
          </div>

          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-lg border border-[#e0e4e9] bg-white px-3 py-1.5 text-[8px] font-medium text-[#8891a1]">
            <Globe2 size={9} />
            workspace.digaya.in
          </div>

          <span className="ml-auto rounded-lg bg-[#1266f6] px-3 py-1.5 text-[8px] font-semibold text-white">
            Publish
          </span>
        </div>

        <div className="grid min-h-[460px] grid-cols-[145px_minmax(0,1fr)_205px]">
          <aside className="border-r border-[#e3e7ed] bg-[#fafbfc] p-3.5">
            <div className="flex items-center gap-2">
              <Image
                src="/brand/digaya-logo.png"
                alt="DIGAYA"
                width={27}
                height={27}
                className="size-[27px] object-contain"
              />

              <div>
                <p className="text-[9px] font-bold tracking-[-0.02em] text-[#161c29]">
                  DIGAYA
                </p>

                <p className="text-[6px] font-medium uppercase tracking-[0.12em] text-[#9aa2af]">
                  Workspace
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-1">
              {workspaceNavigation.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`flex h-[30px] items-center gap-2 rounded-lg px-2 text-[8px] font-medium ${
                      item.active
                        ? "bg-[#edf3ff] text-[#1266f6]"
                        : "text-[#7c8594]"
                    }`}
                  >
                    <Icon size={11} />
                    {item.label}
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-xl border border-[#e2e7ef] bg-white p-2.5">
              <div className="flex items-center gap-2">
                <div className="flex size-6 items-center justify-center rounded-lg bg-[#eaf3ff] text-[#1266f6]">
                  <Sparkles size={10} />
                </div>

                <div>
                  <p className="text-[7px] font-semibold text-[#424a57]">
                    Workspace setup
                  </p>

                  <p className="text-[6px] text-[#9aa2af]">
                    Almost ready
                  </p>
                </div>
              </div>

              <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-[#edf0f4]">
                <div className="h-full w-[76%] rounded-full bg-[#1266f6]" />
              </div>
            </div>
          </aside>

          <div className="min-w-0 bg-[#f3f5f7] p-4">
            <div className="mx-auto max-w-[540px] overflow-hidden rounded-[17px] border border-[#dde2e8] bg-white shadow-[0_9px_28px_rgba(40,55,80,0.06)]">
              <div className="relative overflow-hidden bg-[#f5faff] px-6 pb-7 pt-7">
                <div className="absolute right-[-55px] top-[-68px] size-[180px] rounded-full bg-[#daf4ff]" />

                <div className="absolute -left-16 bottom-[-100px] size-[170px] rounded-full bg-[#e5ecff]" />

                <div className="relative">
                  <div className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-full bg-[#151b28] text-[8px] font-bold text-white">
                      AC
                    </div>

                    <div>
                      <p className="text-[8px] font-semibold text-[#252c39]">
                        Creator Studio
                      </p>

                      <p className="text-[7px] text-[#8a93a2]">
                        Digital business
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 max-w-[380px]">
                    <span className="rounded-full border border-[#dae5f6] bg-white px-2.5 py-1 text-[7px] font-semibold text-[#1266f6]">
                      Creator website
                    </span>

                    <h3 className="mt-3 text-[27px] font-[700] leading-[1.02] tracking-[-0.045em] text-[#111622]">
                      Create what you love.
                      <span className="block text-[#1266f6]">
                        Sell it your way.
                      </span>
                    </h3>

                    <p className="mt-3 max-w-[320px] text-[8px] leading-4 text-[#747e8f]">
                      Products, courses and sessions together in one
                      beautifully connected home.
                    </p>

                    <button
                      type="button"
                      className="mt-4 h-8 rounded-lg bg-[#1266f6] px-3 text-[8px] font-semibold text-white"
                    >
                      Explore products
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[7px] font-semibold uppercase tracking-[0.1em] text-[#9ca4b1]">
                      Featured
                    </p>

                    <p className="mt-1 text-[10px] font-semibold text-[#282f3b]">
                      Digital offers
                    </p>
                  </div>

                  <span className="text-[7px] font-semibold text-[#1266f6]">
                    View all
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  <ProductCard
                    title="Creator Course"
                    value="₹999"
                    icon={BookOpen}
                    surface="bg-[#e8f0ff]"
                    iconStyle="text-[#1266f6]"
                  />

                  <ProductCard
                    title="Resource Pack"
                    value="₹299"
                    icon={Package}
                    surface="bg-[#e5faf2]"
                    iconStyle="text-[#11986f]"
                  />

                  <ProductCard
                    title="Strategy Call"
                    value="Book"
                    icon={CalendarDays}
                    surface="bg-[#f6eaff]"
                    iconStyle="text-[#8057d6]"
                  />
                </div>
              </div>
            </div>
          </div>

          <aside className="border-l border-[#e2e6ec] bg-[#fafbfc] p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[8px] font-semibold text-[#313946]">
                  Automations
                </p>

                <p className="text-[6px] text-[#9aa1ae]">
                  Customer journey
                </p>
              </div>

              <div className="flex size-7 items-center justify-center rounded-lg bg-[#eaf2ff] text-[#1266f6]">
                <Workflow size={11} />
              </div>
            </div>

            <div className="mt-4">
              <AutomationStep
                icon={MessageCircle}
                title="New conversation"
                subtitle="Keyword detected"
                iconSurface="bg-[#f0eaff]"
                iconStyle="text-[#7550d8]"
              />

              <div className="mx-auto h-3 w-px bg-[#d9dee6]" />

              <AutomationStep
                icon={Send}
                title="Send message"
                subtitle="Deliver resource"
                iconSurface="bg-[#eaf2ff]"
                iconStyle="text-[#1266f6]"
              />

              <div className="mx-auto h-3 w-px bg-[#d9dee6]" />

              <AutomationStep
                icon={Users}
                title="Save lead"
                subtitle="Add to audience"
                iconSurface="bg-[#e9f8f2]"
                iconStyle="text-[#0f9c70]"
              />
            </div>

            <button
              type="button"
              className="mt-3 flex h-8 w-full items-center justify-center gap-1 rounded-lg border border-dashed border-[#d7dce4] text-[7px] font-semibold text-[#7d8695]"
            >
              <Plus size={9} />
              Add step
            </button>

            <div className="mt-4 rounded-xl bg-[#111722] p-3 text-white">
              <div className="flex items-center justify-between">
                <div className="flex size-7 items-center justify-center rounded-lg bg-white/10">
                  <Workflow size={10} />
                </div>

                <span className="rounded-full bg-[#1f9c70]/20 px-2 py-1 text-[6px] font-semibold text-[#74e2b8]">
                  Active
                </span>
              </div>

              <p className="mt-3 text-[8px] font-semibold">
                Everything connected
              </p>

              <p className="mt-1 text-[6px] leading-3 text-[#aeb7c7]">
                Turn conversations into customers from one workspace.
              </p>
            </div>
          </aside>
        </div>
      </div>

      <div className="mx-auto mt-4 grid max-w-[900px] grid-cols-2 gap-3 xl:grid-cols-4">
        {platformCapabilities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-[16px] border border-[#e3e7ed] bg-white px-3.5 py-3 shadow-[0_7px_20px_rgba(28,45,72,0.045)]"
            >
              <div
                className={`flex size-9 shrink-0 items-center justify-center rounded-[11px] ${item.iconSurface} ${item.iconStyle}`}
              >
                <Icon size={13} />
              </div>

              <div className="min-w-0">
                <p className="truncate text-[9px] font-semibold text-[#343c4a]">
                  {item.title}
                </p>

                <p className="mt-0.5 truncate text-[7px] text-[#939baa]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type ProductCardProps = {
  title: string;
  value: string;
  icon: React.ElementType;
  surface: string;
  iconStyle: string;
};

function ProductCard({
  title,
  value,
  icon: Icon,
  surface,
  iconStyle,
}: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#e1e5ea] bg-white">
      <div className={`h-[55px] p-2 ${surface}`}>
        <div
          className={`flex size-6 items-center justify-center rounded-lg bg-white shadow-sm ${iconStyle}`}
        >
          <Icon size={10} />
        </div>
      </div>

      <div className="p-2">
        <p className="truncate text-[7px] font-semibold text-[#343b47]">
          {title}
        </p>

        <p className="mt-1 text-[7px] font-bold text-[#151b27]">
          {value}
        </p>
      </div>
    </div>
  );
}

type AutomationStepProps = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  iconSurface: string;
  iconStyle: string;
};

function AutomationStep({
  icon: Icon,
  title,
  subtitle,
  iconSurface,
  iconStyle,
}: AutomationStepProps) {
  return (
    <div className="rounded-xl border border-[#e0e5ec] bg-white p-2.5">
      <div className="flex items-center gap-2">
        <div
          className={`flex size-7 items-center justify-center rounded-lg ${iconSurface} ${iconStyle}`}
        >
          <Icon size={10} />
        </div>

        <div>
          <p className="text-[7px] font-semibold text-[#454c59]">
            {title}
          </p>

          <p className="text-[6px] text-[#a0a7b3]">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}