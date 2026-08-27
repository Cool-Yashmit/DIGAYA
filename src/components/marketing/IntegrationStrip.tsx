import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Link2,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  UserRoundPlus,
  Zap,
} from "lucide-react";
import { SiInstagram } from "react-icons/si";

export function IntegrationStrip() {
  return (
    <section
      id="meta"
      className="relative isolate overflow-hidden bg-[#f7f9ff] px-4 py-14 sm:px-6 lg:px-8 lg:py-18"
    >
      <SectionBackground />

      <div className="relative mx-auto max-w-[1380px]">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14">
          <div data-scroll-reveal className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7e3f3] bg-white px-3 py-2 shadow-[0_8px_26px_rgba(37,70,111,0.05)]">
              <span className="flex size-6 items-center justify-center rounded-full bg-[#edf4ff] text-[#086af5]">
                <ShieldCheck size={12} strokeWidth={2} />
              </span>

              <span className="text-[10px] font-[700] uppercase tracking-[0.13em] text-[#557497]">
                Business messaging infrastructure
              </span>
            </div>

            <div className="mt-7 flex items-center gap-5">
              <div className="flex h-[94px] w-[184px] shrink-0 items-center justify-center rounded-[22px] border border-[#d6e1ef] bg-white px-4 shadow-[0_18px_45px_rgba(30,65,110,0.08)]">
                <Image
                  src="/brand/integrations/meta.svg"
                  alt="Meta"
                  width={150}
                  height={58}
                  className="h-auto w-[150px] max-w-full object-contain"
                  priority
                />
              </div>

              <div className="min-w-0">
                <p className="text-[12px] font-[650] text-[#58728e]">
                  Meta developer ecosystem
                </p>

                <h2 className="mt-1 text-[29px] font-[730] tracking-[-0.035em] text-[#10233a] sm:text-[33px]">
                  Tech Provider
                </h2>
              </div>
            </div>

            <h3 className="mt-7 max-w-[570px] text-[clamp(30px,2.8vw,44px)] font-[740] leading-[1.07] tracking-[-0.045em] text-[#0e1e32]">
              Turn social conversations into{" "}
              <span className="bg-[linear-gradient(90deg,#086af5,#4d70ed,#168fa8)] bg-clip-text text-transparent">
                useful business actions.
              </span>
            </h3>

            <p className="mt-4 max-w-[555px] text-[14px] font-[480] leading-[1.7] text-[#536d89]">
              Connect customer interest with DIGAYA so replies, leads, bookings
              and offers can move through one connected journey.
            </p>

            <div className="mt-6 grid max-w-[570px] grid-cols-3 gap-2.5">
              <TrustPoint
                icon={<MessageCircleMore size={15} />}
                title="Conversation"
                text="Interest starts"
              />

              <TrustPoint
                icon={<Zap size={15} />}
                title="Automation"
                text="DIGAYA responds"
              />

              <TrustPoint
                icon={<UserRoundPlus size={15} />}
                title="Customer"
                text="Journey continues"
              />
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/pricing"
                className="group inline-flex h-[44px] items-center justify-center gap-2 rounded-[11px] bg-[#086af5] px-6 text-[13px] font-[680] text-white shadow-[0_14px_32px_rgba(8,106,245,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#005ee0]"
              >
                Start for free
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="#automation"
                className="group inline-flex h-[44px] items-center justify-center gap-2 rounded-[11px] border border-[#c5d4e6] bg-white px-6 text-[13px] font-[650] text-[#2d4b6a] transition duration-300 hover:-translate-y-0.5 hover:border-[#a8bed8]"
              >
                See Instagram automation
                <ArrowRight
                  size={14}
                  className="text-[#6784a3] transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <p className="mt-5 max-w-[520px] text-[10px] font-[480] leading-[1.55] text-[#8293a7]">
              Meta and related trademarks belong to their respective owners.
            </p>
          </div>

          <div data-scroll-stagger className="relative min-w-0">
            <AutomationRoute />
          </div>
        </div>

        <div data-scroll-reveal className="mt-9 lg:mt-10">
          <JourneyRail />
        </div>
      </div>
    </section>
  );
}

function AutomationRoute() {
  return (
    <div className="relative mx-auto max-w-[760px]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3e7df4]/10 blur-[90px]" />

      <div className="relative hidden min-h-[520px] lg:block">
        <div className="absolute left-0 top-[90px] w-[218px]">
          <SignalCard />
        </div>

        <div className="absolute left-[235px] top-[166px] h-px w-[67px] bg-[linear-gradient(90deg,#e4408c,#5478ef)]">
          <span className="absolute right-[-5px] top-1/2 size-2.5 -translate-y-1/2 rounded-full border-2 border-white bg-[#5678ef]" />
        </div>

        <div className="absolute left-1/2 top-[50px] w-[270px] -translate-x-1/2">
          <DigayaEngine />
        </div>

        <div className="absolute right-[184px] top-[166px] h-px w-[70px] bg-[linear-gradient(90deg,#5478ef,#21aa87)]">
          <span className="absolute right-[-5px] top-1/2 size-2.5 -translate-y-1/2 rounded-full border-2 border-white bg-[#20ad88]" />
        </div>

        <div className="absolute right-0 top-[52px] w-[200px] space-y-3">
          <OutcomeCard
            icon={<UserRoundPlus size={15} />}
            eyebrow="Lead"
            title="Capture interest"
            text="Save the interested person."
          />

          <OutcomeCard
            icon={<CalendarDays size={15} />}
            eyebrow="Booking"
            title="Move to a session"
            text="Guide them into your booking flow."
          />

          <OutcomeCard
            icon={<Link2 size={15} />}
            eyebrow="Offer"
            title="Share the next step"
            text="Send a product, course or offer."
          />
        </div>
      </div>

      <div className="space-y-4 lg:hidden">
        <SignalCard />

        <MobileRouteArrow />

        <DigayaEngine />

        <MobileRouteArrow />

        <div className="grid gap-3 sm:grid-cols-3">
          <OutcomeCard
            icon={<UserRoundPlus size={15} />}
            eyebrow="Lead"
            title="Capture interest"
            text="Save the interested person."
          />

          <OutcomeCard
            icon={<CalendarDays size={15} />}
            eyebrow="Booking"
            title="Move to a session"
            text="Guide them into your booking flow."
          />

          <OutcomeCard
            icon={<Link2 size={15} />}
            eyebrow="Offer"
            title="Share the next step"
            text="Send a product or offer."
          />
        </div>
      </div>
    </div>
  );
}

function SignalCard() {
  return (
    <div className="overflow-hidden rounded-[19px] border border-[#efd5e1] bg-white shadow-[0_18px_48px_rgba(55,71,101,0.075)]">
      <div className="flex items-center gap-3 border-b border-[#f1e1e8] px-4 py-3.5">
        <span className="flex size-10 items-center justify-center rounded-[12px] bg-[#fff0f6]">
          <SiInstagram size={21} color="#E4408C" />
        </span>

        <div>
          <p className="text-[9px] font-[700] uppercase tracking-[0.1em] text-[#b1517c]">
            Incoming interest
          </p>

          <p className="mt-0.5 text-[12px] font-[700] text-[#253b55]">
            Instagram
          </p>
        </div>

        <span className="ml-auto size-2 rounded-full bg-[#E4408C]" />
      </div>

      <div className="p-4">
        <div className="rounded-[13px] bg-[#fff6fa] p-3">
          <p className="text-[10px] font-[600] text-[#55708e]">
            Someone comments
          </p>

          <div className="mt-2 flex items-center justify-between gap-3">
            <span className="text-[13px] font-[720] text-[#253a54]">
              “GUIDE”
            </span>

            <span className="rounded-full bg-[#ffe5f1] px-2.5 py-1 text-[8px] font-[700] text-[#cc3b7a]">
              Detected
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 text-[9px] font-[600] text-[#6a8097]">
          <MessageCircleMore size={12} className="text-[#E4408C]" />
          Comment or message starts the journey
        </div>
      </div>
    </div>
  );
}

function DigayaEngine() {
  return (
    <div className="relative overflow-hidden rounded-[25px] border border-[#b9cbea] bg-[linear-gradient(145deg,#f7f9ff_0%,#eaf1ff_55%,#f1efff_100%)] p-5 shadow-[0_26px_65px_rgba(48,75,135,0.13)]">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#086af5,#6657ec,#2a91b0)]" />

      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#cfdaee] bg-white/90 px-3 py-2 text-[9px] font-[700] uppercase tracking-[0.1em] text-[#58749a]">
          <span className="size-2 rounded-full bg-[#1ab889]" />
          Automation live
        </span>

        <Zap size={16} className="text-[#086af5]" />
      </div>

      <div className="mt-5 flex items-center gap-3">
        <div className="flex size-[62px] shrink-0 items-center justify-center rounded-[18px] border border-white bg-white shadow-[0_12px_25px_rgba(50,72,115,0.08)]">
          <Image
            src="/brand/digaya-logo.png"
            alt="DIGAYA"
            width={47}
            height={47}
            className="h-[47px] w-[47px] object-contain"
          />
        </div>

        <div>
          <p className="text-[9px] font-[700] uppercase tracking-[0.12em] text-[#7284a2]">
            DIGAYA
          </p>

          <h3 className="mt-1 text-[21px] font-[730] tracking-[-0.03em] text-[#172b46]">
            Automation Engine
          </h3>
        </div>
      </div>

      <p className="mt-4 text-[11px] font-[500] leading-[1.6] text-[#5c7390]">
        Decide what should happen after someone shows interest.
      </p>

      <div className="mt-5 rounded-[16px] border border-[#cfdaed] bg-white p-3.5">
        <p className="text-[8px] font-[700] uppercase tracking-[0.1em] text-[#7a8ca3]">
          Example route
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#fff0f6] text-[#E4408C]">
            <MessageCircleMore size={13} />
          </span>

          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-[600] text-[#617793]">
              Trigger
            </p>

            <p className="mt-0.5 truncate text-[11px] font-[700] text-[#253d58]">
              Comment “GUIDE”
            </p>
          </div>

          <ChevronRight size={14} className="text-[#91a5bc]" />

          <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e8f1ff] text-[#086af5]">
            <Zap size={13} />
          </span>
        </div>

        <div className="mt-3 rounded-[10px] bg-[#edf4ff] px-3 py-2.5">
          <p className="text-[10px] font-[700] text-[#1769d8]">
            Reply → capture → route
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-[14px] border border-[#cfd9eb] bg-white/95 px-3.5 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-[40px] w-[108px] shrink-0 items-center justify-center">
            <Image
              src="/brand/integrations/meta.svg"
              alt="Meta"
              width={105}
              height={40}
              className="h-auto w-[105px] object-contain"
            />
          </div>

          <span className="h-8 w-px shrink-0 bg-[#d4deeb]" />

          <div className="min-w-0 flex-1">
            <p className="text-[8px] font-[700] uppercase tracking-[0.09em] text-[#8392a7]">
              Meta ecosystem
            </p>

            <p className="mt-0.5 text-[10px] font-[700] text-[#30465f]">
              Tech Provider
            </p>
          </div>

          <ShieldCheck
            size={16}
            className="shrink-0 text-[#086af5]"
          />
        </div>
      </div>
    </div>
  );
}

function OutcomeCard({
  icon,
  eyebrow,
  title,
  text,
}: {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[16px] border border-[#cfe3dc] bg-white p-3.5 shadow-[0_13px_32px_rgba(45,76,99,0.055)]">
      <div className="flex items-start gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e8f8f2] text-[#10a377]">
          {icon}
        </span>

        <div className="min-w-0">
          <p className="text-[8px] font-[700] uppercase tracking-[0.1em] text-[#5a927f]">
            {eyebrow}
          </p>

          <p className="mt-1 text-[11px] font-[700] text-[#263d56]">
            {title}
          </p>

          <p className="mt-1 text-[9px] font-[500] leading-[1.45] text-[#728399]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function JourneyRail() {
  return (
    <div className="relative overflow-hidden rounded-[18px] border border-[#cfdbeb] bg-white shadow-[0_16px_38px_rgba(45,72,108,0.055)]">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,#E4408C_0%,#086af5_50%,#19a87c_100%)]" />

      <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
        <RailStage
          icon={<SiInstagram size={20} color="#E4408C" />}
          eyebrow="Interest"
          title="Conversation starts"
        />

        <RailConnector />

        <RailStage
          icon={<Sparkles size={17} />}
          eyebrow="DIGAYA"
          title="Automation runs"
          blue
        />

        <RailConnector />

        <RailStage
          icon={<Check size={17} />}
          eyebrow="Business"
          title="Next action happens"
          success
        />
      </div>
    </div>
  );
}

function RailStage({
  icon,
  eyebrow,
  title,
  blue = false,
  success = false,
}: {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  blue?: boolean;
  success?: boolean;
}) {
  return (
    <div className="flex min-w-0 items-center gap-3 px-5 py-4 lg:px-6">
      <span
        className={`flex size-10 shrink-0 items-center justify-center rounded-[11px] ${
          success
            ? "bg-[#e8f8f2] text-[#10a377]"
            : blue
              ? "bg-[#e8f1ff] text-[#086af5]"
              : "bg-[#fff0f6] text-[#E4408C]"
        }`}
      >
        {icon}
      </span>

      <div className="min-w-0">
        <p className="text-[8px] font-[700] uppercase tracking-[0.1em] text-[#7389a3]">
          {eyebrow}
        </p>

        <p className="mt-1 whitespace-nowrap text-[11px] font-[700] text-[#29435f]">
          {title}
        </p>
      </div>
    </div>
  );
}

function RailConnector() {
  return (
    <div className="hidden items-center lg:flex">
      <span className="h-px w-14 bg-[#cfdae8]" />

      <ArrowRight size={13} className="mx-2 text-[#7893b2]" />

      <span className="h-px w-14 bg-[#cfdae8]" />
    </div>
  );
}

function MobileRouteArrow() {
  return (
    <div className="flex h-7 items-center justify-center">
      <ArrowRight
        size={16}
        className="rotate-90 text-[#6585ac]"
      />
    </div>
  );
}

function TrustPoint({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="min-w-0 rounded-[14px] border border-[#d5e0ee] bg-white/80 p-3">
      <span className="flex size-8 items-center justify-center rounded-[9px] bg-[#eaf2ff] text-[#086af5]">
        {icon}
      </span>

      <p className="mt-2.5 text-[10px] font-[700] text-[#29445f]">
        {title}
      </p>

      <p className="mt-1 text-[8px] font-[500] leading-[1.4] text-[#718398]">
        {text}
      </p>
    </div>
  );
}

function SectionBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#f7f9ff_28%,#f4f7ff_100%)]" />

      <div className="pointer-events-none absolute left-[-10%] top-[15%] -z-20 h-[500px] w-[560px] rounded-full bg-[#ffd9e9]/30 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-8%] top-[8%] -z-20 h-[520px] w-[620px] rounded-full bg-[#dbe7ff]/58 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-25%] left-[45%] -z-20 h-[440px] w-[520px] rounded-full bg-[#d6f5eb]/32 blur-[130px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(rgba(27,67,122,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(27,67,122,0.16)_1px,transparent_1px)] [background-size:72px_72px]" />
    </>
  );
}