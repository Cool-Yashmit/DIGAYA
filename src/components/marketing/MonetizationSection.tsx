import type { ElementType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  CircleDollarSign,
  Clock3,
  ShoppingBag,
  TicketCheck,
  Users,
} from "lucide-react";

const digitalProductFeatures = [
  "Ebooks, PDFs & guides",
  "Templates & downloadable files",
  "Bundles and digital resources",
];

const courseFeatures = [
  "Modules and lessons",
  "Videos, quizzes & resources",
  "Student access and progress",
];

export function MonetizationSection() {
  return (
    <section
      id="monetize"
      className="relative overflow-hidden bg-[#f7f9fc] py-14 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[260px] top-[120px] size-[520px] rounded-full bg-[radial-gradient(circle,rgba(45,190,151,0.08),transparent_70%)]" />

        <div className="absolute -right-[250px] top-[350px] size-[520px] rounded-full bg-[radial-gradient(circle,rgba(42,126,255,0.08),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dfe5e9] bg-white px-3 py-1.5 shadow-[0_4px_16px_rgba(41,57,76,0.04)]">
            <CircleDollarSign
              size={11}
              className="text-[#15946c]"
            />

            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#7c8794] sm:text-[10px]">
              Sell with DIGAYA
            </span>
          </div>

          <h2 className="mt-4 text-[30px] font-[700] leading-[1.04] tracking-[-0.05em] text-[#111722] sm:text-[40px] lg:text-[48px]">
            What can you sell
            <span className="text-[#1266f6]"> with DIGAYA?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-[12px] leading-6 text-[#747f8d] sm:text-[14px] sm:leading-7">
            Sell digital products, create courses, take bookings, launch
            memberships and host events — all from one place.
          </p>
        </div>

        <div className="mx-auto mt-9 max-w-[1160px] space-y-4 lg:mt-11">
          <article className="overflow-hidden rounded-[24px] border border-[#d8ebe4] bg-[#eefaf6]">
            <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
              <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-[11px] bg-white text-[#15946c] shadow-[0_4px_14px_rgba(39,83,67,0.06)]">
                    <ShoppingBag
                      size={14}
                      strokeWidth={1.9}
                    />
                  </div>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#66897d]">
                    Digital Products
                  </span>
                </div>

                <h3 className="mt-4 text-[24px] font-[690] leading-[1.07] tracking-[-0.04em] text-[#15241f] sm:text-[30px]">
                  Sell digital products.
                </h3>

                <p className="mt-3 max-w-[470px] text-[11px] leading-5 text-[#667b74] sm:text-[12px]">
                  Upload your digital files, set a price and sell them directly
                  through your DIGAYA store.
                </p>

                <div className="mt-5 space-y-2.5">
                  {digitalProductFeatures.map((feature) => (
                    <FeatureRow
                      key={feature}
                      label={feature}
                      color="green"
                    />
                  ))}
                </div>

                <Link
                  href="/pricing"
                  className="mt-6 inline-flex h-[42px] w-fit items-center justify-center gap-2 rounded-[11px] bg-[#1266f6] px-5 text-[10px] font-semibold text-white shadow-[0_8px_22px_rgba(18,102,246,0.18)] transition hover:bg-[#0d5be0]"
                >
                  Start for free
                  <ArrowRight size={12} />
                </Link>
              </div>

              <div className="relative min-h-[260px] overflow-hidden bg-[#dff6ed] sm:min-h-[330px] lg:min-h-[360px]">
                <Image
                  src="/assets/home/cards/digaya-digital-store.png"
                  alt="DIGAYA digital store"
                  fill
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-[24px] border border-[#d9e5f7] bg-[#f0f6ff]">
            <div className="grid lg:grid-cols-[1.14fr_0.86fr]">
              <div className="relative order-2 min-h-[260px] overflow-hidden bg-[#e1ecff] sm:min-h-[330px] lg:order-1 lg:min-h-[360px]">
                <Image
                  src="/assets/home/cards/digaya-course-builder-feature.png"
                  alt="DIGAYA course builder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="object-cover object-center"
                />
              </div>

              <div className="order-1 flex flex-col justify-center p-5 sm:p-7 lg:order-2 lg:p-8">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-[11px] bg-white text-[#1266f6] shadow-[0_4px_14px_rgba(41,71,118,0.06)]">
                    <BookOpen
                      size={14}
                      strokeWidth={1.9}
                    />
                  </div>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#6880a7]">
                    Courses
                  </span>
                </div>

                <h3 className="mt-4 text-[24px] font-[690] leading-[1.07] tracking-[-0.04em] text-[#172033] sm:text-[30px]">
                  Create and sell courses.
                </h3>

                <p className="mt-3 max-w-[470px] text-[11px] leading-5 text-[#6f7d92] sm:text-[12px]">
                  Organize your knowledge into lessons and modules, then give
                  students their own learning access.
                </p>

                <div className="mt-5 space-y-2.5">
                  {courseFeatures.map((feature) => (
                    <FeatureRow
                      key={feature}
                      label={feature}
                      color="blue"
                    />
                  ))}
                </div>

                <Link
                  href="/pricing"
                  className="mt-6 inline-flex h-[42px] w-fit items-center justify-center gap-2 rounded-[11px] bg-[#1266f6] px-5 text-[10px] font-semibold text-white shadow-[0_8px_22px_rgba(18,102,246,0.18)] transition hover:bg-[#0d5be0]"
                >
                  Start for free
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </article>

          <div className="grid items-stretch gap-4 lg:grid-cols-3">
            <SimpleServiceCard
              icon={CalendarDays}
              eyebrow="Bookings"
              title="Offer 1:1 bookings."
              description="Let customers choose a time and book consultations, coaching calls or paid sessions with you."
              features={["Consultations", "Coaching", "Paid sessions"]}
              surface="bg-[#fff6ef]"
              border="border-[#efdfd2]"
              iconColor="text-[#d66f38]"
            >
              <BookingVisual />
            </SimpleServiceCard>

            <SimpleServiceCard
              icon={Users}
              eyebrow="Memberships"
              title="Launch memberships."
              description="Charge monthly or yearly for exclusive content, resources and member-only access."
              features={["Monthly plans", "Yearly plans", "Member access"]}
              surface="bg-[#f6f2ff]"
              border="border-[#e5dcf5]"
              iconColor="text-[#7656d8]"
            >
              <MembershipVisual />
            </SimpleServiceCard>

            <SimpleServiceCard
              icon={TicketCheck}
              eyebrow="Events & Webinars"
              title="Host events."
              description="Create free or paid webinars, workshops and group events with registrations and attendees."
              features={["Registrations", "Paid events", "Webinars"]}
              surface="bg-[#fff3f8]"
              border="border-[#eedbe5]"
              iconColor="text-[#bd4d84]"
            >
              <EventVisual />
            </SimpleServiceCard>
          </div>

          <div className="rounded-[20px] border border-[#dfe5e9] bg-white px-4 py-4 shadow-[0_10px_32px_rgba(41,57,76,0.045)] sm:px-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[10px] font-semibold text-[#2f3945]">
                  You can sell more than one thing.
                </p>

                <p className="mt-1 text-[9px] leading-4 text-[#838e9b]">
                  A single DIGAYA business can have products, courses,
                  memberships, bookings and events together.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <TypePill icon={ShoppingBag} label="Products" />
                <TypePill icon={BookOpen} label="Courses" />
                <TypePill icon={CalendarDays} label="Bookings" />
                <TypePill icon={Users} label="Memberships" />
                <TypePill icon={TicketCheck} label="Events" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  label,
  color,
}: {
  label: string;
  color: "green" | "blue";
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`flex size-5 shrink-0 items-center justify-center rounded-full ${
          color === "green"
            ? "bg-[#dff5ec] text-[#15946c]"
            : "bg-[#dfebff] text-[#1266f6]"
        }`}
      >
        <Check
          size={10}
          strokeWidth={2.2}
        />
      </div>

      <span className="text-[10px] font-medium text-[#5e6976] sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}

function SimpleServiceCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  features,
  surface,
  border,
  iconColor,
  children,
}: {
  icon: ElementType;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  surface: string;
  border: string;
  iconColor: string;
  children: ReactNode;
}) {
  return (
    <article
      className={`flex min-w-0 flex-col overflow-hidden rounded-[22px] border ${border} ${surface}`}
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2.5">
          <div
            className={`flex size-9 items-center justify-center rounded-[11px] bg-white shadow-[0_4px_14px_rgba(47,52,64,0.05)] ${iconColor}`}
          >
            <Icon
              size={14}
              strokeWidth={1.9}
            />
          </div>

          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#7e8490]">
            {eyebrow}
          </span>
        </div>

        <h3 className="mt-4 text-[21px] font-[690] leading-[1.08] tracking-[-0.04em] text-[#1d232c] sm:text-[23px]">
          {title}
        </h3>

        <p className="mt-2.5 text-[10px] leading-5 text-[#777f8a] sm:text-[11px]">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-black/[0.055] bg-white/65 px-2.5 py-1 text-[8px] font-medium text-[#68727f]"
            >
              {feature}
            </span>
          ))}
        </div>

        <Link
          href="/pricing"
          className="mt-5 inline-flex h-[39px] items-center justify-center gap-2 rounded-[10px] bg-[#172033] px-4 text-[9px] font-semibold text-white transition hover:bg-[#0e141e]"
        >
          Start for free
          <ArrowRight size={11} />
        </Link>
      </div>

      <div className="mt-auto px-4 pb-4">
        {children}
      </div>
    </article>
  );
}

function BookingVisual() {
  return (
    <div className="rounded-[16px] border border-[#eadfd6] bg-white p-3.5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-semibold text-[#343b43]">
            Strategy call
          </p>

          <p className="mt-0.5 text-[7px] text-[#969da6]">
            Choose a time
          </p>
        </div>

        <span className="text-[9px] font-semibold text-[#d66f38]">
          ₹499
        </span>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-1.5">
        <TimeSlot label="10:00" />
        <TimeSlot label="12:30" />
        <TimeSlot label="03:00" active />
        <TimeSlot label="05:30" />
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-[7px] text-[#8e969f]">
        <Clock3 size={9} />
        30 minute session
      </div>
    </div>
  );
}

function TimeSlot({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-[8px] px-1 py-2 text-center text-[7px] font-semibold ${
        active
          ? "bg-[#d66f38] text-white"
          : "bg-[#faf7f4] text-[#7b756f]"
      }`}
    >
      {label}
    </div>
  );
}

function MembershipVisual() {
  return (
    <div className="rounded-[16px] border border-[#e3dcf1] bg-white p-3.5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-semibold text-[#383342]">
            Creator Membership
          </p>

          <p className="mt-0.5 text-[7px] text-[#9890a2]">
            Exclusive member access
          </p>
        </div>

        <span className="rounded-full bg-[#eee7ff] px-2 py-1 text-[7px] font-semibold text-[#7656d8]">
          Monthly
        </span>
      </div>

      <div className="mt-4 flex items-end gap-1">
        <span className="text-[20px] font-[700] tracking-[-0.04em] text-[#282331]">
          ₹499
        </span>

        <span className="pb-1 text-[7px] text-[#98909f]">
          /month
        </span>
      </div>

      <div className="mt-3 space-y-1.5">
        <MiniCheck text="Exclusive resources" />
        <MiniCheck text="Member-only updates" />
      </div>
    </div>
  );
}

function MiniCheck({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex size-4 items-center justify-center rounded-full bg-[#eee7ff] text-[#7656d8]">
        <Check size={8} />
      </div>

      <span className="text-[7px] text-[#77707e]">
        {text}
      </span>
    </div>
  );
}

function EventVisual() {
  return (
    <div className="overflow-hidden rounded-[16px] border border-[#ead9e3] bg-white">
      <div className="bg-[linear-gradient(135deg,#fff0f6,#f6edff)] p-3.5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white px-2 py-1 text-[7px] font-semibold text-[#bd4d84]">
            Live webinar
          </span>

          <TicketCheck
            size={12}
            className="text-[#bd4d84]"
          />
        </div>

        <p className="mt-3 text-[11px] font-semibold leading-4 text-[#40313b]">
          Build Your Digital Business
        </p>

        <div className="mt-2 flex items-center gap-3">
          <div className="flex items-center gap-1">
            <CalendarDays
              size={9}
              className="text-[#a55c81]"
            />

            <span className="text-[7px] text-[#75656e]">
              28 Aug
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Clock3
              size={9}
              className="text-[#a55c81]"
            />

            <span className="text-[7px] text-[#75656e]">
              7:00 PM
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-3.5 py-3">
        <span className="text-[7px] text-[#968a92]">
          Free or paid registration
        </span>

        <span className="rounded-[8px] bg-[#bd4d84] px-2.5 py-1.5 text-[7px] font-semibold text-white">
          Register
        </span>
      </div>
    </div>
  );
}

function TypePill({
  icon: Icon,
  label,
}: {
  icon: ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-[#e1e6ea] bg-[#fafcfd] px-2.5 py-1.5">
      <Icon
        size={9}
        className="text-[#1266f6]"
      />

      <span className="text-[7px] font-semibold text-[#677382]">
        {label}
      </span>
    </div>
  );
}