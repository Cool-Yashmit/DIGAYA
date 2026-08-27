import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Globe2,
  GraduationCap,
  ShoppingBag,
  TicketCheck,
  UsersRound,
  Video,
} from "lucide-react";

export function PlatformEcosystemSection() {
  return (
    <section
      id="platform"
      className="relative isolate overflow-hidden bg-[#071426] px-4 py-[72px] text-white sm:px-6 lg:px-8 lg:py-[88px]"
    >
      <SectionBackground />

      <div className="relative mx-auto max-w-[1380px]">
        <div
          data-scroll-reveal
          className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-[760px]">
            <p className="text-[11px] font-[700] uppercase tracking-[0.16em] text-[#72a7ff]">
              DIGAYA Platform
            </p>

            <h2 className="mt-3 text-[clamp(34px,4vw,58px)] font-[720] leading-[1.03] tracking-[-0.05em] text-white">
              Choose what your business needs.
              <span className="mt-1 block bg-[linear-gradient(90deg,#70a4ff_0%,#8d8cff_48%,#67d1df_100%)] bg-clip-text text-transparent">
                Keep everything connected.
              </span>
            </h2>

            <p className="mt-4 max-w-[670px] text-[14px] font-[450] leading-[1.7] text-[#aabbd0] sm:text-[15px]">
              Build your presence, sell what you create, teach, take bookings,
              run memberships and host events without stitching together
              separate tools.
            </p>
          </div>

          <Link
            href="/pricing"
            className="group inline-flex h-[45px] w-fit items-center justify-center gap-2 rounded-[12px] border border-white/15 bg-white px-5 text-[13px] font-[700] text-[#10243f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#edf5ff]"
          >
            Explore the platform
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div
          data-scroll-stagger
          className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-12"
        >
          <WebsiteFeature />

          <StoreFeature />

          <CourseFeature />

          <BookingsFeature />

          <MembershipFeature />

          <EventsFeature />
        </div>

        <div
          data-scroll-reveal
          className="mt-5 flex flex-col gap-4 rounded-[18px] border border-white/10 bg-white/[0.055] px-5 py-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between lg:px-6"
        >
          <div>
            <p className="text-[15px] font-[700] tracking-[-0.015em] text-white">
              Start with one tool. Add the rest when you need them.
            </p>

            <p className="mt-1 text-[11px] font-[500] text-[#8fa6c0]">
              Your business stays connected inside the same DIGAYA workspace.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <ConnectedPill label="One workspace" />
            <ConnectedPill label="One customer journey" />
            <ConnectedPill label="Connected tools" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WebsiteFeature() {
  return (
    <article className="group relative overflow-hidden rounded-[26px] border border-[#284368] bg-[linear-gradient(135deg,#102543_0%,#142c51_48%,#183d63_100%)] lg:col-span-7 lg:min-h-[430px]">
      <div className="grid h-full lg:grid-cols-[0.88fr_1.12fr]">
        <div className="relative z-10 flex flex-col p-6 sm:p-7 lg:p-8">
          <FeatureIdentity
            icon={<Globe2 size={17} />}
            eyebrow="Website + Link-in-Bio"
          />

          <h3 className="mt-6 max-w-[360px] text-[30px] font-[720] leading-[1.08] tracking-[-0.04em] text-white">
            Give your business a home online.
          </h3>

          <p className="mt-3 max-w-[360px] text-[13px] font-[450] leading-[1.65] text-[#a8bad0]">
            Create a professional website or Link-in-Bio where visitors can
            discover your brand, content, offers and services.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <FeaturePill label="Multi-page website" />
            <FeaturePill label="Link-in-Bio" />
            <FeaturePill label="Custom domain" />
          </div>

          <FeatureLink label="Build your presence" />
        </div>

        <div className="relative min-h-[300px] overflow-hidden bg-[linear-gradient(145deg,#182e50_0%,#243f70_50%,#2b5674_100%)] lg:min-h-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(107,141,255,0.3),transparent_52%)]" />

          <div className="absolute inset-x-[-8%] bottom-[-8%] top-[7%] transition-transform duration-700 group-hover:-translate-y-1">
            <Image
              src="/assets/home/cards/digaya-link-in-bio-profile.png"
              alt="DIGAYA Website and Link-in-Bio"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain object-bottom"
            />
          </div>

          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#071a32]/75 px-3 py-2 backdrop-blur-md">
            <p className="flex items-center gap-2 text-[9px] font-[700] text-[#dce9ff]">
              <span className="size-2 rounded-full bg-[#5ca1ff]" />
              Your online home
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function StoreFeature() {
  return (
    <article className="group relative overflow-hidden rounded-[26px] border border-[#293f62] bg-[#0e213b] lg:col-span-5 lg:min-h-[430px]">
      <div className="relative h-[215px] overflow-hidden bg-[linear-gradient(145deg,#0e2a3a,#12424b)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(54,211,169,0.17),transparent_58%)]" />

        <div className="absolute inset-x-3 bottom-[-13%] top-4 transition-transform duration-700 group-hover:-translate-y-1">
          <Image
            src="/assets/home/cards/digaya-digital-store.png"
            alt="DIGAYA Digital Store"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <FeatureIdentity
          icon={<ShoppingBag size={17} />}
          eyebrow="Digital Store"
        />

        <h3 className="mt-4 text-[25px] font-[720] tracking-[-0.035em] text-white">
          Sell what you create.
        </h3>

        <p className="mt-2 text-[12px] font-[450] leading-[1.65] text-[#a5b7cb]">
          Publish digital products, files, guides and bundles from your own
          storefront.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <FeaturePill label="Digital products" />
          <FeaturePill label="Bundles" />
          <FeaturePill label="Orders" />
        </div>
      </div>
    </article>
  );
}

function CourseFeature() {
  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-[#302f61] bg-[linear-gradient(145deg,#171c3c,#20224f)] lg:col-span-5 lg:min-h-[350px]">
      <div className="grid h-full sm:grid-cols-[0.92fr_1.08fr] lg:grid-cols-1 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 p-6">
          <FeatureIdentity
            icon={<GraduationCap size={18} />}
            eyebrow="Courses"
          />

          <h3 className="mt-4 text-[24px] font-[720] leading-[1.12] tracking-[-0.035em] text-white">
            Turn knowledge into a learning experience.
          </h3>

          <p className="mt-3 text-[12px] font-[450] leading-[1.65] text-[#abaed0]">
            Organize lessons, resources and student progress inside one course
            experience.
          </p>

          <div className="mt-4 space-y-2">
            <CompactBenefit label="Modules and lessons" />
            <CompactBenefit label="Student progress" />
            <CompactBenefit label="Course resources" />
          </div>
        </div>

        <div className="relative min-h-[220px] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(114,101,255,0.27),transparent_58%)]" />

          <div className="absolute inset-x-[-8%] bottom-[-12%] top-[8%] transition-transform duration-700 group-hover:-translate-y-1">
            <Image
              src="/assets/home/cards/digaya-course-builder-feature.png"
              alt="DIGAYA Course Builder"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function BookingsFeature() {
  return (
    <article className="relative overflow-hidden rounded-[24px] border border-[#27416a] bg-[linear-gradient(145deg,#102441,#123052)] lg:col-span-7 lg:min-h-[350px]">
      <div className="grid h-full gap-5 p-6 sm:grid-cols-[0.9fr_1.1fr] sm:p-7">
        <div>
          <FeatureIdentity
            icon={<CalendarDays size={17} />}
            eyebrow="Bookings"
          />

          <h3 className="mt-4 text-[25px] font-[720] leading-[1.12] tracking-[-0.035em] text-white">
            Let customers book your time.
          </h3>

          <p className="mt-3 max-w-[330px] text-[12px] font-[450] leading-[1.65] text-[#a5b9cf]">
            Set your availability and let customers choose a time without
            managing every booking manually.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <FeaturePill label="1:1 sessions" />
            <FeaturePill label="Availability" />
            <FeaturePill label="Paid bookings" />
          </div>
        </div>

        <BookingPreview />
      </div>
    </article>
  );
}

function MembershipFeature() {
  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-[#31406a] bg-[#111f3a] lg:col-span-6 lg:min-h-[325px]">
      <div className="grid h-full sm:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 p-6">
          <FeatureIdentity
            icon={<UsersRound size={17} />}
            eyebrow="Memberships"
          />

          <h3 className="mt-4 text-[24px] font-[720] leading-[1.12] tracking-[-0.035em] text-white">
            Build recurring access around your work.
          </h3>

          <p className="mt-3 text-[12px] font-[450] leading-[1.65] text-[#a8b7ce]">
            Offer monthly or yearly access to exclusive content, resources and
            member experiences.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <FeaturePill label="Monthly plans" />
            <FeaturePill label="Yearly access" />
          </div>
        </div>

        <div className="relative min-h-[220px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,91,255,0.22),transparent_60%)]" />

          <div className="absolute inset-x-[-5%] bottom-[-10%] top-[7%] transition-transform duration-700 group-hover:-translate-y-1">
            <Image
              src="/assets/home/cards/digaya-memberships.png"
              alt="DIGAYA Memberships"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function EventsFeature() {
  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-[#283f64] bg-[linear-gradient(145deg,#0d213b,#112b4d)] lg:col-span-6 lg:min-h-[325px]">
      <div className="grid h-full sm:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10 p-6">
          <FeatureIdentity
            icon={<TicketCheck size={17} />}
            eyebrow="Events & Webinars"
          />

          <h3 className="mt-4 text-[24px] font-[720] leading-[1.12] tracking-[-0.035em] text-white">
            Host live experiences.
          </h3>

          <p className="mt-3 text-[12px] font-[450] leading-[1.65] text-[#a5b7ce]">
            Create free or paid events, webinars and group sessions with
            registrations in one place.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <FeaturePill label="Registrations" />
            <FeaturePill label="Paid events" />
            <FeaturePill label="Webinars" />
          </div>
        </div>

        <div className="relative min-h-[220px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(61,145,255,0.2),transparent_58%)]" />

          <div className="absolute inset-x-[-6%] bottom-[-10%] top-[7%] transition-transform duration-700 group-hover:-translate-y-1">
            <Image
              src="/assets/home/cards/digaya-bookings-events.png"
              alt="DIGAYA Events and Webinars"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function BookingPreview() {
  return (
    <div className="self-center rounded-[19px] border border-[#37557b] bg-[#0b1c33] p-4 shadow-[0_22px_50px_rgba(0,0,0,0.15)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-[700] uppercase tracking-[0.1em] text-[#7898bb]">
            Schedule
          </p>

          <p className="mt-1 text-[13px] font-[700] text-white">
            Strategy consultation
          </p>
        </div>

        <span className="flex size-9 items-center justify-center rounded-[11px] bg-[#173b67] text-[#76adff]">
          <CalendarDays size={14} />
        </span>
      </div>

      <div className="mt-4 grid grid-cols-5 gap-1.5">
        <CalendarDay day="MON" date="21" />
        <CalendarDay day="TUE" date="22" />
        <CalendarDay day="WED" date="23" active />
        <CalendarDay day="THU" date="24" />
        <CalendarDay day="FRI" date="25" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <TimeSlot time="11:00 AM" />
        <TimeSlot time="2:30 PM" />
        <TimeSlot time="4:00 PM" selected />
        <TimeSlot time="6:30 PM" />
      </div>

      <div className="mt-4 flex items-center justify-between rounded-[11px] bg-[#112c4d] px-3 py-3">
        <div className="flex items-center gap-2">
          <Clock3 size={12} className="text-[#72a9ff]" />

          <span className="text-[9px] font-[650] text-[#c3d5e9]">
            45 minute session
          </span>
        </div>

        <Check size={12} className="text-[#78b2ff]" />
      </div>
    </div>
  );
}

function CalendarDay({
  day,
  date,
  active = false,
}: {
  day: string;
  date: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-[9px] px-1 py-2 text-center ${
        active
          ? "bg-[#086af5] text-white"
          : "bg-[#132b49] text-[#9bb3cb]"
      }`}
    >
      <p className="text-[7px] font-[700]">{day}</p>
      <p className="mt-1 text-[10px] font-[700]">{date}</p>
    </div>
  );
}

function TimeSlot({
  time,
  selected = false,
}: {
  time: string;
  selected?: boolean;
}) {
  return (
    <div
      className={`rounded-[8px] border px-2 py-2 text-center text-[8px] font-[650] ${
        selected
          ? "border-[#5594ec] bg-[#173e6d] text-white"
          : "border-[#29496f] bg-[#102744] text-[#9db5ce]"
      }`}
    >
      {time}
    </div>
  );
}

function FeatureIdentity({
  icon,
  eyebrow,
}: {
  icon: ReactNode;
  eyebrow: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex size-10 items-center justify-center rounded-[12px] border border-[#31517a] bg-[#173a65] text-[#78adff]">
        {icon}
      </span>

      <span className="text-[10px] font-[700] uppercase tracking-[0.13em] text-[#7fa6d2]">
        {eyebrow}
      </span>
    </div>
  );
}

function FeaturePill({ label }: { label: string }) {
  return (
    <span className="inline-flex min-h-[28px] items-center rounded-full border border-white/10 bg-white/[0.07] px-3 text-[9px] font-[600] text-[#bed0e3]">
      {label}
    </span>
  );
}

function CompactBenefit({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-[600] text-[#bdc8dd]">
      <span className="flex size-[20px] items-center justify-center rounded-full bg-[#26305e] text-[#8896ff]">
        <Check size={9} strokeWidth={2.5} />
      </span>

      {label}
    </div>
  );
}

function FeatureLink({ label }: { label: string }) {
  return (
    <Link
      href="/pricing"
      className="group mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[11px] font-[700] text-[#8bb8ff]"
    >
      {label}

      <ArrowRight
        size={13}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}

function ConnectedPill({ label }: { label: string }) {
  return (
    <span className="inline-flex h-[31px] items-center gap-2 rounded-full border border-[#314969] bg-[#102541] px-3 text-[9px] font-[650] text-[#b8cbe0]">
      <span className="flex size-4 items-center justify-center rounded-full bg-[#183d69] text-[#78aeff]">
        <Check size={8} strokeWidth={2.5} />
      </span>

      {label}
    </span>
  );
}

function SectionBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(180deg,#081526_0%,#09182b_42%,#071321_100%)]" />

      <div className="pointer-events-none absolute left-[-15%] top-[8%] -z-20 h-[650px] w-[760px] rounded-full bg-[#0c66d9]/15 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-14%] top-[22%] -z-20 h-[650px] w-[720px] rounded-full bg-[#2a7f9f]/12 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-18%] left-[30%] -z-20 h-[520px] w-[720px] rounded-full bg-[#463cba]/10 blur-[160px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.055] [background-image:linear-gradient(rgba(115,160,222,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(115,160,222,0.16)_1px,transparent_1px)] [background-size:72px_72px]" />
    </>
  );
}