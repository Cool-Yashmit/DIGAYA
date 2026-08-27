import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  CalendarDays,
  Check,
  FileText,
  Globe2,
  GraduationCap,
  MessageCircleMore,
  ShoppingBag,
  Sparkles,
  Store,
  TicketCheck,
  UserRound,
  Users,
} from "lucide-react";

const audiences = [
  {
    icon: Sparkles,
    eyebrow: "Creators",
    title: "Creators building an online business",
    description:
      "Turn your audience, content and ideas into products and services you can sell online.",
    items: [
      {
        icon: Globe2,
        text: "Build your website and Link-in-Bio",
      },
      {
        icon: ShoppingBag,
        text: "Sell digital products and downloads",
      },
      {
        icon: MessageCircleMore,
        text: "Use Instagram and WhatsApp automations",
      },
    ],
    surface: "bg-[#eff7ff]",
    border: "border-[#dbe8f7]",
    iconSurface: "bg-[#e6f0ff]",
    iconColor: "text-[#1266f6]",
  },
  {
    icon: UserRound,
    eyebrow: "Coaches & Consultants",
    title: "People who sell their time and expertise",
    description:
      "Take paid bookings, teach what you know and create more ways for clients to work with you.",
    items: [
      {
        icon: CalendarDays,
        text: "Accept 1:1 bookings and consultations",
      },
      {
        icon: BookOpen,
        text: "Create courses and memberships",
      },
      {
        icon: TicketCheck,
        text: "Run webinars and group sessions",
      },
    ],
    surface: "bg-[#fff7ef]",
    border: "border-[#f0e2d5]",
    iconSurface: "bg-[#fff0e1]",
    iconColor: "text-[#d66f38]",
  },
  {
    icon: GraduationCap,
    eyebrow: "Educators",
    title: "Course creators and educators",
    description:
      "Create a learning business with courses, resources, student access and digital learning products.",
    items: [
      {
        icon: BookOpen,
        text: "Build courses with modules and lessons",
      },
      {
        icon: FileText,
        text: "Add resources, quizzes and downloads",
      },
      {
        icon: ShoppingBag,
        text: "Sell courses and learning bundles",
      },
    ],
    surface: "bg-[#f5f2ff]",
    border: "border-[#e4ddf5]",
    iconSurface: "bg-[#eee8ff]",
    iconColor: "text-[#7656d8]",
  },
  {
    icon: Store,
    eyebrow: "Freelancers & Services",
    title: "Freelancers and service businesses",
    description:
      "Build a professional online presence and make it easier for customers to discover, contact and buy from you.",
    items: [
      {
        icon: Globe2,
        text: "Create a professional business website",
      },
      {
        icon: CalendarDays,
        text: "Let clients book your services",
      },
      {
        icon: ShoppingBag,
        text: "Sell templates, files and resources",
      },
    ],
    surface: "bg-[#effaf6]",
    border: "border-[#d8ede5]",
    iconSurface: "bg-[#e3f7ef]",
    iconColor: "text-[#15946c]",
  },
];

const businessTypes = [
  {
    icon: Globe2,
    label: "Website",
  },
  {
    icon: ShoppingBag,
    label: "Products",
  },
  {
    icon: BookOpen,
    label: "Courses",
  },
  {
    icon: CalendarDays,
    label: "Bookings",
  },
  {
    icon: Users,
    label: "Memberships",
  },
  {
    icon: TicketCheck,
    label: "Events",
  },
];

export function WhoItsForSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f6f8ff_0%,#ffffff_20%,#fbfcff_100%)] py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[280px] top-[220px] size-[520px] rounded-full bg-[radial-gradient(circle,rgba(18,102,246,0.055),transparent_70%)]" />

        <div className="absolute -right-[270px] bottom-[120px] size-[500px] rounded-full bg-[radial-gradient(circle,rgba(28,183,137,0.055),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dfe5ed] bg-white px-3 py-1.5 shadow-[0_4px_16px_rgba(41,57,76,0.04)]">
            <Users size={11} className="text-[#1266f6]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#7c8795] sm:text-[10px]">
              Who DIGAYA is for
            </span>
          </div>

          <h2 className="mx-auto mt-4 max-w-[760px] text-[30px] font-[700] leading-[1.04] tracking-[-0.05em] text-[#111722] sm:text-[40px] lg:text-[48px]">
            Who can use
            <span className="text-[#1266f6]"> DIGAYA?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-[12px] leading-6 text-[#747f8d] sm:text-[14px] sm:leading-7">
            DIGAYA is built for people who want to sell their knowledge,
            services, content or digital products online.
          </p>
        </div>

        <div className="mx-auto mt-9 grid max-w-[1160px] gap-4 lg:mt-11 lg:grid-cols-2">
          {audiences.map((audience) => (
            <AudienceCard
              key={audience.eyebrow}
              audience={audience}
            />
          ))}
        </div>

        <div className="mx-auto mt-5 max-w-[1080px] overflow-hidden rounded-[22px] border border-[#dfe5eb] bg-white shadow-[0_14px_40px_rgba(41,57,76,0.05)]">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="border-b border-[#e6eaf0] px-5 py-5 sm:px-6 lg:border-b-0 lg:border-r">
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#7d8896]">
                Start simple
              </p>

              <h3 className="mt-2 text-[20px] font-[690] leading-[1.1] tracking-[-0.035em] text-[#1a222d] sm:text-[23px]">
                Start with what you need today.
              </h3>

              <p className="mt-2 text-[10px] leading-5 text-[#7b8693] sm:text-[11px]">
                You do not need to use every DIGAYA feature at once. Start
                with one part of your business and add more when you need it.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-3 sm:p-4">
              {businessTypes.map((type) => {
                const Icon = type.icon;

                return (
                  <div
                    key={type.label}
                    className="flex min-h-[58px] min-w-0 items-center gap-2.5 rounded-[13px] border border-[#e4e9ef] bg-[#fafbfd] px-3"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-[9px] bg-[#edf4ff] text-[#1266f6]">
                      <Icon size={12} strokeWidth={1.9} />
                    </div>

                    <span className="truncate text-[9px] font-semibold text-[#5f6b7a]">
                      {type.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-[900px] items-start justify-center gap-2 text-center">
          <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#e8f8f1] text-[#15946c]">
            <Check size={10} strokeWidth={2.3} />
          </div>

          <p className="text-[9px] leading-4 text-[#7d8895] sm:text-[10px]">
            Whether you are starting with one product or building a complete
            digital business, you can grow your DIGAYA workspace over time.
          </p>
        </div>
      </div>
    </section>
  );
}

function AudienceCard({
  audience,
}: {
  audience: {
    icon: LucideIcon;
    eyebrow: string;
    title: string;
    description: string;
    items: {
      icon: LucideIcon;
      text: string;
    }[];
    surface: string;
    border: string;
    iconSurface: string;
    iconColor: string;
  };
}) {
  const Icon = audience.icon;

  return (
    <article
      className={`min-w-0 rounded-[23px] border ${audience.border} ${audience.surface} p-5 sm:p-6 lg:p-7`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex size-11 shrink-0 items-center justify-center rounded-[13px] ${audience.iconSurface} ${audience.iconColor}`}
        >
          <Icon size={16} strokeWidth={1.9} />
        </div>

        <div className="min-w-0">
          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#7e8995]">
            {audience.eyebrow}
          </span>
        </div>
      </div>

      <h3 className="mt-4 max-w-[430px] text-[21px] font-[690] leading-[1.08] tracking-[-0.04em] text-[#1a222c] sm:text-[25px]">
        {audience.title}
      </h3>

      <p className="mt-2.5 max-w-[500px] text-[10px] leading-5 text-[#747f8b] sm:text-[11px]">
        {audience.description}
      </p>

      <div className="mt-5 rounded-[16px] border border-black/[0.055] bg-white/75 p-3.5 sm:p-4">
        <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#929ba6]">
          Use DIGAYA to
        </p>

        <div className="mt-3 space-y-2.5">
          {audience.items.map((item) => (
            <AudienceItem
              key={item.text}
              icon={item.icon}
              text={item.text}
              iconColor={audience.iconColor}
              iconSurface={audience.iconSurface}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

function AudienceItem({
  icon: Icon,
  text,
  iconSurface,
  iconColor,
}: {
  icon: LucideIcon;
  text: string;
  iconSurface: string;
  iconColor: string;
}) {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <div
        className={`flex size-7 shrink-0 items-center justify-center rounded-[8px] ${iconSurface} ${iconColor}`}
      >
        <Icon size={11} strokeWidth={1.9} />
      </div>

      <span className="min-w-0 text-[9px] font-medium leading-4 text-[#5f6b78] sm:text-[10px]">
        {text}
      </span>
    </div>
  );
}