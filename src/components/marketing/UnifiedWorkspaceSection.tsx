import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  CircleUserRound,
  Globe2,
  Layers3,
  ShoppingBag,
  Sparkles,
  UsersRound,
  Zap,
} from "lucide-react";

export function UnifiedWorkspaceSection() {
  return (
    <section
      id="workspace"
      className="relative isolate overflow-hidden bg-[#f8fbff] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <SectionBackground />

      <div className="relative mx-auto max-w-[1380px]">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-14">
          <div data-scroll-reveal>
            <p className="text-[11px] font-[750] uppercase tracking-[0.15em] text-[#5e7fa5]">
              One connected workspace
            </p>

            <h2 className="mt-3 max-w-[560px] text-[clamp(34px,3.6vw,52px)] font-[730] leading-[1.04] tracking-[-0.05em] text-[#102139]">
              One customer.
              <span className="block bg-[linear-gradient(90deg,#126cf4,#596be8,#168ca7)] bg-clip-text text-transparent">
                One connected journey.
              </span>
            </h2>

            <p className="mt-4 max-w-[540px] text-[14px] font-[480] leading-[1.7] text-[#61758d] sm:text-[15px]">
              Keep offers, purchases, bookings, access and follow-ups connected
              to the same customer instead of managing separate pieces across
              different tools.
            </p>

            <div className="mt-7 space-y-4">
              <ValueRow
                icon={<CircleUserRound size={16} />}
                title="Know who your customer is"
                text="Keep their important activity connected in one place."
              />

              <ValueRow
                icon={<Layers3 size={16} />}
                title="See the complete relationship"
                text="Offers, bookings, access and customer activity stay together."
              />

              <ValueRow
                icon={<Zap size={16} />}
                title="Use activity to trigger the next step"
                text="Let automation continue the journey without rebuilding it elsewhere."
              />
            </div>

            <Link
              href="/pricing"
              className="group mt-8 inline-flex h-[46px] items-center justify-center gap-2 rounded-[12px] bg-[#086af5] px-6 text-[13px] font-[700] text-white shadow-[0_14px_34px_rgba(8,106,245,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#005fe2]"
            >
              Start for free
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div data-scroll-stagger className="relative min-w-0">
            <WorkspaceVisual />
          </div>
        </div>

        <div
          data-scroll-reveal
          className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          <WorkspaceBenefit
            icon={<Globe2 size={16} />}
            title="Presence"
            text="Website and Link-in-Bio"
          />

          <WorkspaceBenefit
            icon={<ShoppingBag size={16} />}
            title="Offers"
            text="Products, courses and bookings"
          />

          <WorkspaceBenefit
            icon={<UsersRound size={16} />}
            title="Customers"
            text="One connected relationship"
          />

          <WorkspaceBenefit
            icon={<Zap size={16} />}
            title="Automation"
            text="Triggers, actions and follow-ups"
          />
        </div>
      </div>
    </section>
  );
}

function WorkspaceVisual() {
  return (
    <div className="relative mx-auto max-w-[760px]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2e75f0]/10 blur-[100px]" />

      <div className="relative overflow-hidden rounded-[27px] border border-[#c7d7ea] bg-white shadow-[0_28px_80px_rgba(43,79,126,0.11)]">
        <div className="h-[3px] bg-[linear-gradient(90deg,#086af5,#5f70ec,#1b95ac)]" />

        <div className="flex items-center justify-between border-b border-[#dde6f0] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-[12px] bg-[#edf4ff]">
              <Image
                src="/brand/digaya-logo.png"
                alt="DIGAYA"
                width={34}
                height={34}
                className="size-[34px] object-contain"
              />
            </div>

            <div>
              <p className="text-[13px] font-[720] text-[#213b59]">
                DIGAYA Workspace
              </p>

              <p className="mt-0.5 text-[9px] font-[500] text-[#8192a6]">
                Customer journey
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe8df] bg-[#effaf6] px-3 py-2 text-[9px] font-[700] text-[#16805d]">
            <span className="size-1.5 rounded-full bg-[#22b484]" />
            Connected
          </span>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-[#dde6f0] bg-[#f8fbff] p-5 sm:p-6 lg:border-b-0 lg:border-r">
            <p className="text-[9px] font-[750] uppercase tracking-[0.12em] text-[#7188a1]">
              Customer
            </p>

            <div className="mt-4 rounded-[18px] border border-[#d4e1ef] bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-[#dce9ff] text-[12px] font-[750] text-[#3472cd]">
                  C
                </div>

                <div className="min-w-0">
                  <p className="text-[13px] font-[720] text-[#263f5a]">
                    Customer connected
                  </p>

                  <p className="mt-0.5 text-[9px] text-[#8594a5]">
                    One customer record
                  </p>
                </div>

                <Check size={15} className="ml-auto text-[#159b70]" />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <DataCard label="Offer" value="Strategy session" />
                <DataCard label="Payment" value="Received" />
                <DataCard label="Access" value="Granted" />
                <DataCard label="Booking" value="Confirmed" />
              </div>
            </div>

            <div className="mt-3 rounded-[15px] border border-[#d6e2ef] bg-white px-4 py-3.5">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-[10px] bg-[#eaf2ff] text-[#086af5]">
                  <UsersRound size={14} />
                </span>

                <div>
                  <p className="text-[10px] font-[700] text-[#38516d]">
                    Journey stays together
                  </p>

                  <p className="mt-0.5 text-[8px] text-[#8697a9]">
                    Customer activity remains connected
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-[9px] font-[750] uppercase tracking-[0.12em] text-[#7188a1]">
              What DIGAYA can do next
            </p>

            <div className="mt-4 space-y-3">
              <JourneyAction
                number="01"
                icon={<ShoppingBag size={14} />}
                title="Offer purchased"
                text="Keep the purchase connected to the customer."
              />

              <JourneyAction
                number="02"
                icon={<CalendarDays size={14} />}
                title="Session booked"
                text="Booking activity becomes part of the same journey."
              />

              <JourneyAction
                number="03"
                icon={<Zap size={14} />}
                title="Follow-up triggered"
                text="Automation can continue with the next useful action."
                active
              />
            </div>

            <div className="mt-4 rounded-[17px] bg-[#102744] p-4 text-white">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-[10px] bg-[#173b65] text-[#75adff]">
                  <Sparkles size={14} />
                </span>

                <div>
                  <p className="text-[11px] font-[700]">
                    Customer journey connected
                  </p>

                  <p className="mt-0.5 text-[8px] text-[#91a9c3]">
                    Less switching. Less manual syncing.
                  </p>
                </div>

                <span className="ml-auto size-2 rounded-full bg-[#38d19c]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function JourneyAction({
  number,
  icon,
  title,
  text,
  active = false,
}: {
  number: string;
  icon: ReactNode;
  title: string;
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-[16px] border p-3.5 ${
        active
          ? "border-[#b8cfee] bg-[#edf4ff]"
          : "border-[#d8e3ef] bg-[#fbfdff]"
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`flex size-9 shrink-0 items-center justify-center rounded-[10px] ${
            active
              ? "bg-[#dce9ff] text-[#086af5]"
              : "bg-[#eef3f8] text-[#5c7898]"
          }`}
        >
          {icon}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[11px] font-[700] text-[#314a65]">{title}</p>
            <span className="text-[8px] font-[750] text-[#8ba0b8]">
              {number}
            </span>
          </div>

          <p className="mt-1 text-[9px] font-[500] leading-[1.5] text-[#7e90a3]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function ValueRow({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex max-w-[530px] items-start gap-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-[11px] border border-[#d4e1ef] bg-white text-[#086af5]">
        {icon}
      </span>

      <div>
        <p className="text-[13px] font-[700] text-[#29435e]">{title}</p>
        <p className="mt-1 text-[11px] font-[500] leading-[1.55] text-[#77899c]">
          {text}
        </p>
      </div>
    </div>
  );
}

function DataCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[11px] bg-[#f2f6fb] p-3">
      <p className="text-[7px] font-[750] uppercase tracking-[0.08em] text-[#8b9bad]">
        {label}
      </p>
      <p className="mt-1 text-[9px] font-[700] text-[#3d566f]">{value}</p>
    </div>
  );
}

function WorkspaceBenefit({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[16px] border border-[#d7e2ed] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(47,78,114,0.04)]">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-[11px] bg-[#eaf2ff] text-[#086af5]">
        {icon}
      </span>

      <div>
        <p className="text-[11px] font-[700] text-[#304a65]">{title}</p>
        <p className="mt-0.5 text-[9px] text-[#8191a3]">{text}</p>
      </div>
    </div>
  );
}

function SectionBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_45%,#f5f9ff_100%)]" />
      <div className="pointer-events-none absolute left-[-10%] top-[18%] -z-20 h-[520px] w-[620px] rounded-full bg-[#dce9ff]/52 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-8%] bottom-[-20%] -z-20 h-[520px] w-[620px] rounded-full bg-[#dff6f4]/36 blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] [background-image:linear-gradient(rgba(55,96,145,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(55,96,145,0.16)_1px,transparent_1px)] [background-size:76px_76px]" />
    </>
  );
}