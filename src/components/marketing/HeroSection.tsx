import Link from "next/link";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Check,
  CreditCard,
  Globe2,
  MessageCircleMore,
  Package,
  Send,
  ShoppingBag,
  UserRoundPlus,
  UsersRound,
  Zap,
} from "lucide-react";
import {
  SiGooglecalendar,
  SiInstagram,
  SiMeta,
  SiWhatsapp,
} from "react-icons/si";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export function HeroSection() {
  return (
    <>
      <section
        id="home"
        className={`${geist.className} relative isolate overflow-hidden text-[#0b1930] antialiased`}
        style={{
          textRendering: "geometricPrecision",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <HeroBackground />

        <div className="relative z-10 mx-auto max-w-[1500px] px-4 pb-[86px] pt-[112px] sm:px-6 sm:pb-[96px] lg:px-8 lg:pb-[112px] lg:pt-[108px]">
          <div
            className="mx-auto max-w-[880px] text-center [transform:none!important]"
            style={{
              textRendering: "geometricPrecision",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            <h1 className="tracking-[-0.045em]">
              <span className="block text-[clamp(35px,3.15vw,50px)] font-[720] leading-[1.04] text-[#091628]">
                Set up your business.
              </span>

              <span className="mt-1 block bg-[linear-gradient(90deg,#0768f5_0%,#2875ed_56%,#138da9_100%)] bg-clip-text text-[clamp(35px,3.15vw,50px)] font-[720] leading-[1.04] text-transparent">
                Run it all with DIGAYA.
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-[660px] text-[14px] font-[500] leading-[1.6] tracking-[-0.006em] text-[#385776]">
              Build your online home, add what you offer, connect customers and
              automate what happens next.
            </p>

            <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <Link
                href="/pricing"
                className="group inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-[11px] bg-[#086af5] px-7 text-[13px] font-[650] text-white shadow-[0_13px_30px_rgba(8,106,245,0.2)] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#005de1] hover:shadow-[0_16px_34px_rgba(8,106,245,0.25)] sm:w-auto"
              >
                Start for free
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="#platform"
                className="group inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-[11px] border border-[#8aa9d1] bg-[#f3f8ff]/85 px-7 text-[13px] font-[650] text-[#294764] transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#7297c7] hover:bg-white sm:w-auto"
              >
                See how it works
                <ArrowRight
                  size={14}
                  className="text-[#5c7c9f] transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
              <HeroPoint label="No code required" />
              <HeroPoint label="Start with one tool" />
              <HeroPoint label="Everything stays connected" />
            </div>
          </div>

          <div className="mx-auto mt-7 hidden max-w-[1240px] lg:block">
            <DesktopBusinessJourney />
          </div>

          <div className="mx-auto mt-7 max-w-[620px] lg:hidden">
            <MobileBusinessJourney />
          </div>
        </div>
      </section>

      <ConnectedChannels />
    </>
  );
}

function HeroBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-40 bg-[#d5e5ff]" />

      <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(118deg,#d8e7ff_0%,#c7dcff_48%,#c8e9ec_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[310px] bg-[linear-gradient(180deg,rgba(245,249,255,0.75)_0%,rgba(231,241,255,0.32)_67%,transparent_100%)]" />

      <div className="pointer-events-none absolute left-[-12%] top-[150px] -z-20 h-[500px] w-[650px] rounded-full bg-[#91b9ff]/25 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-8%] top-[170px] -z-20 h-[520px] w-[620px] rounded-full bg-[#8edee4]/24 blur-[125px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(24,72,135,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(24,72,135,0.12)_1px,transparent_1px)] [background-size:78px_78px]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[300px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(244,249,255,0.12)_18%,rgba(245,250,255,0.36)_38%,rgba(249,252,255,0.72)_67%,rgba(255,255,255,0.94)_86%,#ffffff_100%)]" />
    </>
  );
}

function DesktopBusinessJourney() {
  return (
    <div
      data-scroll-surface
      className="relative h-[394px]"
      style={{
        textRendering: "geometricPrecision",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div
        data-scroll-stagger
        className="absolute inset-x-0 top-0 flex items-end justify-center"
      >
        <BusinessHome />

        <FlowConnector label="Next" />

        <BusinessOffer />

        <FlowConnector label="Connect" />

        <BusinessCustomer />

        <FlowConnector label="Automate" />

        <BusinessAutomation />
      </div>
    </div>
  );
}

function BusinessHome() {
  return (
    <article className="relative z-10 w-[315px]">
      <StepLabel
        number="01"
        icon={<Globe2 size={15} />}
        label="Build"
        title="Create your business home"
      />

      <div className="mt-4 overflow-hidden rounded-[20px] border border-[#82a8d9] bg-white shadow-[0_22px_48px_rgba(35,70,115,0.12)]">
        <div className="flex items-center gap-1.5 border-b border-[#d1dfed] bg-[#f8fbff] px-3.5 py-2.5">
          <span className="size-[7px] rounded-full bg-[#8db3e7]" />
          <span className="size-[7px] rounded-full bg-[#6596d9]" />
          <span className="size-[7px] rounded-full bg-[#427bc7]" />

          <div className="ml-2 h-2 flex-1 rounded-full bg-[#dbe5ef]" />
        </div>

        <div className="bg-[#edf4ff] p-4">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-[#d8e7ff] text-[#086af5]">
              <Globe2 size={16} />
            </span>

            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-[700] leading-none text-[#173552]">
                Your business
              </p>

              <p className="mt-1.5 text-[10px] font-[500] text-[#557493]">
                Website · Link-in-Bio · Brand
              </p>
            </div>

            <span className="rounded-full bg-[#d9e8ff] px-2.5 py-1.5 text-[9px] font-[700] text-[#086af5]">
              Live
            </span>
          </div>

          <div className="mt-4 flex h-10 items-center justify-between rounded-[9px] bg-[#086af5] px-3.5 text-white">
            <span className="text-[10px] font-[650]">
              Explore your business
            </span>

            <ArrowRight size={12} />
          </div>

          <div className="mt-2.5 grid grid-cols-2 gap-2">
            <MiniOption
              icon={<Package size={11} />}
              label="Your offers"
            />

            <MiniOption
              icon={<CalendarDays size={11} />}
              label="Bookings"
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#d6e2ef] bg-white px-4 py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-[9px] bg-[#e2edff] text-[#086af5]">
              <Check size={12} strokeWidth={2.4} />
            </span>

            <div className="min-w-0">
              <p className="text-[9px] font-[700] uppercase tracking-[0.07em] text-[#6d84a0]">
                Setup complete
              </p>

              <p className="mt-0.5 text-[10px] font-[650] text-[#355676]">
                Business home ready
              </p>
            </div>
          </div>

          <span className="size-2 shrink-0 rounded-full bg-[#086af5]" />
        </div>
      </div>
    </article>
  );
}

function BusinessOffer() {
  return (
    <article className="relative z-20 mb-[18px] w-[245px]">
      <StepLabel
        number="02"
        icon={<ShoppingBag size={15} />}
        label="Offer"
        title="Add what you offer"
      />

      <div className="mt-4 rounded-[19px] border border-[#82a8d9] bg-white p-4 shadow-[0_22px_48px_rgba(35,70,115,0.12)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-[700] uppercase tracking-[0.08em] text-[#53769b]">
              Your offer
            </p>

            <p className="mt-1.5 text-[13px] font-[700] leading-[1.3] text-[#1c3a56]">
              Give people a next step
            </p>
          </div>

          <span className="flex size-9 shrink-0 items-center justify-center rounded-[11px] bg-[#deebff] text-[#086af5]">
            <ShoppingBag size={14} />
          </span>
        </div>

        <p className="mt-3 text-[10px] font-[500] leading-[1.55] text-[#587795]">
          Choose what people can buy, book, learn from or join.
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <OfferChoice label="Product" />
          <OfferChoice label="Course" />
          <OfferChoice label="Booking" />
          <OfferChoice label="Membership" />
        </div>

        <div className="mt-3 flex h-9 items-center justify-center rounded-[9px] bg-[#086af5] text-[10px] font-[650] text-white">
          Offer ready
        </div>
      </div>
    </article>
  );
}

function BusinessCustomer() {
  return (
    <article className="relative z-30 mb-[43px] w-[255px]">
      <StepLabel
        number="03"
        icon={<UsersRound size={15} />}
        label="Customer"
        title="Keep customers connected"
      />

      <div className="mt-4 space-y-2.5">
        <CustomerActivity
          icon={<CreditCard size={14} />}
          eyebrow="Checkout"
          title="Payment received"
        />

        <div className="flex items-center gap-3 rounded-[16px] border border-[#82a8d9] bg-white p-3.5 shadow-[0_18px_40px_rgba(35,70,115,0.1)]">
          <div className="flex -space-x-2">
            <Avatar label="01" />
            <Avatar label="02" />
            <Avatar label="+4" />
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-[700] text-[#1e3b56]">
              Customer connected
            </p>

            <p className="mt-1 text-[9px] font-[500] text-[#607b98]">
              Order · access · activity
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-[16px] border border-[#82a8d9] bg-white p-3.5 shadow-[0_18px_40px_rgba(35,70,115,0.1)]">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#deebff] text-[#086af5]">
            <UserRoundPlus size={13} />
          </span>

          <p className="text-[10px] font-[650] text-[#355a7b]">
            Customer journey stays together
          </p>

          <Check
            size={12}
            className="ml-auto shrink-0 text-[#086af5]"
          />
        </div>
      </div>
    </article>
  );
}

function CustomerActivity({
  icon,
  eyebrow,
  title,
}: {
  icon: ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[16px] border border-[#82a8d9] bg-white p-3.5 shadow-[0_18px_40px_rgba(35,70,115,0.1)]">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-[11px] bg-[#deebff] text-[#086af5]">
        {icon}
      </span>

      <div>
        <p className="text-[9px] font-[700] uppercase tracking-[0.07em] text-[#597a9c]">
          {eyebrow}
        </p>

        <p className="mt-1 text-[11px] font-[700] text-[#1e3b56]">
          {title}
        </p>
      </div>

      <Check
        size={13}
        className="ml-auto text-[#086af5]"
      />
    </div>
  );
}

function BusinessAutomation() {
  return (
    <article className="relative z-40 w-[275px]">
      <StepLabel
        number="04"
        icon={<Zap size={15} />}
        label="Automate"
        title="Let DIGAYA handle what follows"
      />

      <div className="mt-4 rounded-[20px] border border-[#234f83] bg-[#102a4d] p-3.5 shadow-[0_24px_52px_rgba(19,49,88,0.2)]">
        <AutomationRow
          icon={MessageCircleMore}
          label="Trigger"
          value="New interest"
        />

        <AutomationArrow />

        <AutomationRow
          icon={Send}
          label="Action"
          value="Send the next step"
        />

        <AutomationArrow />

        <AutomationRow
          icon={Zap}
          label="Follow-up"
          value="Continue automatically"
        />

        <div className="mt-3 flex items-center gap-2 border-t border-[#315276] pt-3">
          <span className="size-2 rounded-full bg-[#69a7ff]" />

          <span className="text-[9px] font-[600] text-[#b9d0eb]">
            Runs in the background
          </span>
        </div>
      </div>
    </article>
  );
}

function StepLabel({
  number,
  icon,
  label,
  title,
}: {
  number: string;
  icon: ReactNode;
  label: string;
  title: string;
}) {
  return (
    <div
      className="text-center [transform:none!important]"
      style={{
        textRendering: "geometricPrecision",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div className="mx-auto flex items-center justify-center">
        <span className="relative flex size-12 items-center justify-center rounded-[14px] border border-[#82a8d9] bg-[#f2f7ff] text-[#086af5] shadow-[0_9px_22px_rgba(40,74,118,0.07)]">
          {icon}

          <span className="absolute -right-2 -top-2 flex size-[24px] items-center justify-center rounded-full border border-[#8eaed5] bg-[#e0ecff] text-[9px] font-[700] text-[#086af5]">
            {number}
          </span>
        </span>
      </div>

      <p className="mt-2.5 text-[10px] font-[700] uppercase tracking-[0.1em] text-[#34689f]">
        {label}
      </p>

      <h2 className="mx-auto mt-1.5 max-w-[280px] text-[15px] font-[700] leading-[1.25] tracking-[-0.018em] text-[#122f4b]">
        {title}
      </h2>
    </div>
  );
}

function FlowConnector({
  label,
}: {
  label: string;
}) {
  return (
    <div className="relative z-10 mb-[92px] flex w-[58px] shrink-0 flex-col items-center">
      <div className="flex w-full items-center">
        <span className="h-px flex-1 bg-[#628dc8]" />

        <span className="flex size-8 items-center justify-center rounded-full border border-[#7fa3d1] bg-[#edf5ff] text-[#086af5] shadow-[0_8px_18px_rgba(42,76,120,0.07)]">
          <ArrowRight size={12} />
        </span>

        <span className="h-px flex-1 bg-[#628dc8]" />
      </div>

      <span className="mt-2 text-[8px] font-[700] uppercase tracking-[0.07em] text-[#4a75a6]">
        {label}
      </span>
    </div>
  );
}

function MiniOption({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-[9px] border border-[#c8d9ea] bg-white px-2.5 py-2.5">
      <span className="text-[#086af5]">{icon}</span>

      <span className="text-[9px] font-[650] text-[#3f6384]">
        {label}
      </span>
    </div>
  );
}

function OfferChoice({
  label,
}: {
  label: string;
}) {
  return (
    <div className="flex h-9 items-center justify-center rounded-[8px] bg-[#edf4ff] text-[9px] font-[650] text-[#3f6283]">
      {label}
    </div>
  );
}

function Avatar({
  label,
}: {
  label: string;
}) {
  return (
    <span className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-[#d7e5fa] text-[8px] font-[700] text-[#365f92]">
      {label}
    </span>
  );
}

function AutomationRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Zap;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[11px] bg-[#193c65] px-3 py-3">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#22548b] text-[#9ac4ff]">
        <Icon size={12} />
      </span>

      <div className="min-w-0">
        <p className="text-[8px] font-[700] uppercase tracking-[0.08em] text-[#9bb6d6]">
          {label}
        </p>

        <p className="mt-1 truncate text-[10px] font-[650] text-white">
          {value}
        </p>
      </div>

      <span className="ml-auto size-1.5 rounded-full bg-[#69a7ff]" />
    </div>
  );
}

function AutomationArrow() {
  return (
    <div className="flex h-[15px] items-center justify-center">
      <ArrowDown size={10} className="text-[#89add7]" />
    </div>
  );
}

function MobileBusinessJourney() {
  return (
    <div data-scroll-stagger className="space-y-3">
      <MobileStep
        number="01"
        icon={<Globe2 size={16} />}
        label="Build"
        title="Create your business home"
        description="Website, Link-in-Bio and your brand in one place."
      />

      <MobileConnector />

      <MobileStep
        number="02"
        icon={<ShoppingBag size={16} />}
        label="Offer"
        title="Add what you offer"
        description="Products, courses, memberships or bookings."
      />

      <MobileConnector />

      <MobileStep
        number="03"
        icon={<UsersRound size={16} />}
        label="Customer"
        title="Keep customers connected"
        description="Payments, access and activity stay together."
      />

      <MobileConnector />

      <MobileStep
        number="04"
        icon={<Zap size={16} />}
        label="Automate"
        title="Handle what happens next"
        description="Replies, actions and follow-ups run automatically."
      />
    </div>
  );
}

function MobileStep({
  number,
  icon,
  label,
  title,
  description,
}: {
  number: string;
  icon: ReactNode;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <article className="flex items-center gap-3 rounded-[16px] border border-[#83a7d4] bg-white/90 p-4 shadow-[0_11px_26px_rgba(41,75,117,0.07)]">
      <span className="relative flex size-12 shrink-0 items-center justify-center rounded-[13px] bg-[#deebff] text-[#086af5]">
        {icon}

        <span className="absolute -right-1.5 -top-1.5 flex size-[22px] items-center justify-center rounded-full border border-[#91afd5] bg-white text-[8px] font-[700] text-[#086af5]">
          {number}
        </span>
      </span>

      <div className="min-w-0">
        <p className="text-[9px] font-[700] uppercase tracking-[0.09em] text-[#4270a1]">
          {label}
        </p>

        <p className="mt-1 text-[14px] font-[700] leading-[1.25] tracking-[-0.012em] text-[#173651]">
          {title}
        </p>

        <p className="mt-1 text-[10px] font-[500] leading-[1.5] text-[#557491]">
          {description}
        </p>
      </div>
    </article>
  );
}

function MobileConnector() {
  return (
    <div className="flex h-5 items-center justify-center">
      <ArrowDown size={13} className="text-[#086af5]" />
    </div>
  );
}

function ConnectedChannels() {
  return (
    <section
      className={`${geist.className} relative overflow-hidden bg-white px-4 py-10 antialiased sm:px-6 lg:px-8 lg:py-12`}
      style={{
        textRendering: "geometricPrecision",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div
        data-scroll-reveal
        className="relative mx-auto max-w-[1260px]"
      >
        <div className="grid gap-8 lg:grid-cols-[360px_1fr] lg:items-center lg:gap-10">
          <div>
            <p className="text-[10px] font-[700] uppercase tracking-[0.12em] text-[#426d9c]">
              Connected channels
            </p>

            <h2 className="mt-2 max-w-[345px] text-[24px] font-[720] leading-[1.15] tracking-[-0.03em] text-[#122d48]">
              Connect the tools your business already uses.
            </h2>

            <p className="mt-2.5 max-w-[350px] text-[12px] font-[500] leading-[1.6] text-[#56728e]">
              Bring conversations, scheduling and customer activity closer to
              the same DIGAYA journey.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Channel
              icon={<SiMeta size={34} color="#0866FF" />}
              title="Meta"
              text="Business ecosystem"
            />

            <Channel
              icon={<SiInstagram size={34} color="#E1306C" />}
              title="Instagram"
              text="Comments & messages"
            />

            <Channel
              icon={<SiWhatsapp size={34} color="#25D366" />}
              title="WhatsApp"
              text="Customer conversations"
            />

            <Channel
              icon={<SiGooglecalendar size={34} color="#4285F4" />}
              title="Google Calendar"
              text="Bookings & schedule"
            />
          </div>
        </div>

        <div className="mt-7 border-t border-[#d8e3ef] pt-4">
          <p className="text-center text-[10px] font-[500] leading-[1.5] text-[#70859b]">
            Integration availability depends on the connections enabled for
            your DIGAYA workspace.
          </p>
        </div>
      </div>
    </section>
  );
}

function Channel({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group min-w-0 rounded-[17px] border border-[#ccdbea] bg-[#fbfdff] px-4 py-4 transition-[transform,border-color,box-shadow,background-color] duration-300 hover:-translate-y-1 hover:border-[#a6bfdd] hover:bg-white hover:shadow-[0_14px_32px_rgba(40,73,113,0.07)]">
      <span className="flex size-[56px] items-center justify-center rounded-[14px] border border-[#dae5ef] bg-white shadow-[0_6px_18px_rgba(36,64,100,0.04)]">
        {icon}
      </span>

      <p className="mt-3 text-[13px] font-[700] tracking-[-0.008em] text-[#1c3852]">
        {title}
      </p>

      <p className="mt-1 text-[10px] font-[500] leading-[1.45] text-[#5e7791]">
        {text}
      </p>
    </div>
  );
}

function HeroPoint({
  label,
}: {
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-[600] text-[#3f6080]">
      <span className="flex size-5 items-center justify-center rounded-full bg-[#e1edff] text-[#086af5]">
        <Check size={9} strokeWidth={2.2} />
      </span>

      {label}
    </span>
  );
}