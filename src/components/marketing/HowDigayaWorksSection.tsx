import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  CircleCheck,
  ExternalLink,
  Globe2,
  Link2,
  ShoppingBag,
  Sparkles,
  TicketCheck,
  Users,
} from "lucide-react";

const workspaceOptions = [
  {
    icon: Globe2,
    label: "Website",
  },
  {
    icon: Link2,
    label: "Link-in-Bio",
  },
  {
    icon: ShoppingBag,
    label: "Digital Store",
    selected: true,
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
];

const reassurances = [
  "No coding required",
  "Start with one feature",
  "Add more anytime",
  "Publish when ready",
];

export function HowDigayaWorksSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_18%,#f6f8ff_100%)] pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[280px] top-[420px] size-[520px] rounded-full bg-[radial-gradient(circle,rgba(18,102,246,0.06),transparent_70%)]" />

        <div className="absolute -right-[280px] bottom-[180px] size-[520px] rounded-full bg-[radial-gradient(circle,rgba(78,196,160,0.06),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dfe5ed] bg-white px-3 py-1.5 shadow-[0_4px_16px_rgba(41,57,76,0.04)]">
            <Sparkles size={11} className="text-[#1266f6]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#7c8795] sm:text-[10px]">
              How DIGAYA works
            </span>
          </div>

          <h2 className="mx-auto mt-4 max-w-[780px] text-[30px] font-[700] leading-[1.04] tracking-[-0.05em] text-[#111722] sm:text-[40px] lg:text-[48px]">
            Start your business in
            <span className="text-[#1266f6]"> three simple steps.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[670px] text-[12px] leading-6 text-[#747f8d] sm:text-[14px] sm:leading-7">
            Create your DIGAYA workspace, add what you want to sell and publish
            your business when you are ready.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[1160px] space-y-5 sm:mt-12 lg:space-y-6">
          <StepSection
            number="01"
            label="Create your workspace"
            title="Choose what you want to build."
            description="Start with the part of DIGAYA you need. Build a website, create a store, launch a course, take bookings or set up a membership."
          >
            <WorkspaceVisual />
          </StepSection>

          <StepSection
            number="02"
            label="Add your content"
            title="Add what you want to sell."
            description="Add your title, image, price and content. DIGAYA keeps the setup simple so you can focus on your product or service."
            reverse
          >
            <OfferBuilderVisual />
          </StepSection>

          <StepSection
            number="03"
            label="Publish & share"
            title="Go live when you are ready."
            description="Publish your page, share your DIGAYA link with your audience and start sending people to your business."
          >
            <PublishVisual />
          </StepSection>
        </div>

        <div className="mx-auto mt-5 max-w-[1040px] rounded-[18px] border border-[#e1e6ed] bg-white px-4 py-4 shadow-[0_10px_30px_rgba(41,57,76,0.04)] sm:px-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {reassurances.map((item) => (
              <div
                key={item}
                className="flex min-w-0 items-center gap-2"
              >
                <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#e8f8f1] text-[#15946c]">
                  <Check size={10} strokeWidth={2.2} />
                </div>

                <span className="text-[9px] font-medium leading-4 text-[#687584] sm:text-[10px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepSection({
  number,
  label,
  title,
  description,
  children,
  reverse = false,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-[24px] border border-[#e0e5eb] bg-white shadow-[0_18px_55px_rgba(41,57,76,0.055)]">
      <div
        className={`grid items-stretch lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="flex min-w-0 flex-col justify-center p-5 sm:p-7 lg:p-9">
          <div className="flex items-center gap-3">
            <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#1266f6] px-2 text-[10px] font-bold text-white">
              {number}
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#778495]">
              {label}
            </span>
          </div>

          <h3 className="mt-5 max-w-[470px] text-[24px] font-[690] leading-[1.08] tracking-[-0.04em] text-[#18202a] sm:text-[30px]">
            {title}
          </h3>

          <p className="mt-3 max-w-[500px] text-[11px] leading-5 text-[#747f8c] sm:text-[12px] sm:leading-6">
            {description}
          </p>
        </div>

        <div className="flex min-h-[300px] items-center justify-center border-t border-[#e5e9ee] bg-[#f5f8fd] p-4 sm:min-h-[360px] sm:p-6 lg:min-h-[390px] lg:border-l lg:border-t-0 lg:p-7">
          {children}
        </div>
      </div>
    </article>
  );
}

function WorkspaceVisual() {
  return (
    <div className="w-full max-w-[520px] overflow-hidden rounded-[20px] border border-[#dce4ed] bg-white shadow-[0_16px_40px_rgba(42,63,91,0.08)]">
      <div className="border-b border-[#e7ebf0] px-4 py-4 sm:px-5">
        <p className="text-[11px] font-semibold text-[#293443] sm:text-[12px]">
          What do you want to build?
        </p>

        <p className="mt-1 text-[9px] leading-4 text-[#8b96a4]">
          Choose a starting point. You can add more later.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-3 sm:p-4">
        {workspaceOptions.map((option) => {
          const Icon = option.icon;

          return (
            <div
              key={option.label}
              className={`relative flex min-h-[88px] flex-col items-center justify-center rounded-[14px] border px-2 text-center ${
                option.selected
                  ? "border-[#1266f6] bg-[#eef4ff] shadow-[0_6px_18px_rgba(18,102,246,0.08)]"
                  : "border-[#e3e8ee] bg-[#fbfcfd]"
              }`}
            >
              {option.selected && (
                <div className="absolute right-2 top-2 flex size-4 items-center justify-center rounded-full bg-[#1266f6] text-white">
                  <Check size={9} strokeWidth={2.4} />
                </div>
              )}

              <div
                className={`flex size-9 items-center justify-center rounded-[11px] ${
                  option.selected
                    ? "bg-white text-[#1266f6]"
                    : "bg-[#f0f3f7] text-[#788597]"
                }`}
              >
                <Icon size={14} strokeWidth={1.9} />
              </div>

              <span
                className={`mt-2 text-[9px] font-semibold ${
                  option.selected
                    ? "text-[#1266f6]"
                    : "text-[#566272]"
                }`}
              >
                {option.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between border-t border-[#e7ebf0] px-4 py-3.5 sm:px-5">
        <span className="text-[9px] text-[#8a95a3]">
          Selected: Digital Store
        </span>

        <button
          type="button"
          className="rounded-[10px] bg-[#1266f6] px-4 py-2.5 text-[9px] font-semibold text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

function OfferBuilderVisual() {
  return (
    <div className="w-full max-w-[520px] overflow-hidden rounded-[20px] border border-[#dce4ed] bg-white shadow-[0_16px_40px_rgba(42,63,91,0.08)]">
      <div className="flex items-center justify-between border-b border-[#e7ebf0] px-4 py-3.5 sm:px-5">
        <div>
          <p className="text-[11px] font-semibold text-[#293443]">
            Add digital product
          </p>

          <p className="mt-1 text-[8px] text-[#8f99a6]">
            Add the details customers will see.
          </p>
        </div>

        <span className="rounded-full bg-[#eef4ff] px-2.5 py-1 text-[8px] font-semibold text-[#1266f6]">
          Draft
        </span>
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-[120px_1fr] sm:p-5">
        <div className="flex min-h-[115px] items-center justify-center rounded-[14px] border border-dashed border-[#cfd8e4] bg-[#f7f9fc]">
          <div className="text-center">
            <div className="mx-auto flex size-9 items-center justify-center rounded-[10px] bg-white text-[#1266f6] shadow-sm">
              <ShoppingBag size={14} />
            </div>

            <p className="mt-2 text-[8px] font-medium text-[#7b8796]">
              Product image
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Field
            label="Product name"
            value="Creator Toolkit"
          />

          <div className="grid grid-cols-2 gap-2">
            <Field
              label="Price"
              value="₹499"
            />

            <Field
              label="Type"
              value="Digital file"
              dropdown
            />
          </div>
        </div>
      </div>

      <div className="mx-4 mb-4 rounded-[14px] border border-[#e4e9ef] bg-[#fafbfd] p-3 sm:mx-5 sm:mb-5">
        <p className="text-[9px] font-semibold text-[#5c6876]">
          Customer receives
        </p>

        <div className="mt-2.5 grid gap-2 sm:grid-cols-3">
          <IncludedItem label="PDF guide" />
          <IncludedItem label="Templates" />
          <IncludedItem label="Resources" />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[#e7ebf0] px-4 py-3.5 sm:px-5">
        <span className="text-[8px] text-[#8d97a4]">
          Save changes anytime
        </span>

        <button
          type="button"
          className="rounded-[10px] bg-[#1266f6] px-4 py-2.5 text-[9px] font-semibold text-white"
        >
          Save product
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  dropdown = false,
}: {
  label: string;
  value: string;
  dropdown?: boolean;
}) {
  return (
    <div>
      <p className="mb-1.5 text-[8px] font-medium text-[#7c8795]">
        {label}
      </p>

      <div className="flex h-[39px] items-center justify-between rounded-[10px] border border-[#dfe5eb] bg-white px-3">
        <span className="truncate text-[9px] font-medium text-[#424d5c]">
          {value}
        </span>

        {dropdown && (
          <ChevronDown size={11} className="shrink-0 text-[#9aa4b1]" />
        )}
      </div>
    </div>
  );
}

function IncludedItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-[9px] bg-white px-2.5 py-2">
      <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#e8f8f1] text-[#15946c]">
        <Check size={8} strokeWidth={2.2} />
      </div>

      <span className="truncate text-[8px] font-medium text-[#637080]">
        {label}
      </span>
    </div>
  );
}

function PublishVisual() {
  return (
    <div className="w-full max-w-[520px] overflow-hidden rounded-[20px] border border-[#dce4ed] bg-white shadow-[0_16px_40px_rgba(42,63,91,0.08)]">
      <div className="flex items-center justify-between border-b border-[#e7ebf0] px-4 py-3.5 sm:px-5">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-[10px] bg-[#e8f8f1] text-[#15946c]">
            <CircleCheck size={13} />
          </div>

          <div>
            <p className="text-[10px] font-semibold text-[#293443]">
              Your business is live
            </p>

            <p className="mt-0.5 text-[8px] text-[#8b96a4]">
              Published successfully
            </p>
          </div>
        </div>

        <span className="rounded-full bg-[#e8f8f1] px-2.5 py-1 text-[8px] font-semibold text-[#15946c]">
          Live
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="rounded-[14px] border border-[#e2e7ed] bg-[#fafbfd] p-3">
          <p className="text-[8px] font-medium text-[#8893a1]">
            Your DIGAYA link
          </p>

          <div className="mt-2 flex items-center gap-2 rounded-[10px] border border-[#dfe5eb] bg-white px-3 py-2.5">
            <Globe2 size={12} className="shrink-0 text-[#1266f6]" />

            <span className="min-w-0 flex-1 truncate text-[9px] font-medium text-[#485463]">
              yourname.digaya.in
            </span>

            <ExternalLink size={11} className="shrink-0 text-[#8b96a4]" />
          </div>
        </div>

        <div className="mt-3 overflow-hidden rounded-[15px] border border-[#e2e7ed]">
          <div className="bg-[linear-gradient(135deg,#eef4ff,#f4fbf8)] px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-full bg-white text-[#1266f6] shadow-sm">
                <ShoppingBag size={16} />
              </div>

              <div>
                <p className="text-[11px] font-semibold text-[#2d3947]">
                  Your Digital Business
                </p>

                <p className="mt-1 text-[8px] text-[#7f8b99]">
                  Products, courses and services in one place.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 bg-white p-3">
            <PublicPageItem
              icon={ShoppingBag}
              label="Store"
            />

            <PublicPageItem
              icon={BookOpen}
              label="Course"
            />

            <PublicPageItem
              icon={TicketCheck}
              label="Event"
            />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            className="flex h-[41px] items-center justify-center rounded-[10px] border border-[#dfe5eb] bg-white text-[9px] font-semibold text-[#5f6b7a]"
          >
            Copy link
          </button>

          <button
            type="button"
            className="flex h-[41px] items-center justify-center rounded-[10px] bg-[#1266f6] text-[9px] font-semibold text-white"
          >
            View live page
          </button>
        </div>
      </div>
    </div>
  );
}

function PublicPageItem({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <div className="flex min-h-[68px] flex-col items-center justify-center rounded-[11px] bg-[#f7f9fc]">
      <Icon size={13} className="text-[#1266f6]" />

      <span className="mt-2 text-[8px] font-semibold text-[#606c7b]">
        {label}
      </span>
    </div>
  );
}