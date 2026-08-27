import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Check,
  CircleUserRound,
  CreditCard,
  KeyRound,
  Layers3,
  LockKeyhole,
  PackageCheck,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

export function PaymentsExperienceSection() {
  return (
    <section
      id="payments"
      className="relative isolate overflow-hidden bg-[#f7faff] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <SectionBackground />

      <div className="relative mx-auto max-w-[1380px]">
        <div
          data-scroll-reveal
          className="mx-auto max-w-[820px] text-center"
        >
          <p className="text-[10px] font-[750] uppercase tracking-[0.15em] text-[#5e7fa5]">
            Checkout & customer journey
          </p>

          <h2 className="mt-3 text-[clamp(34px,4vw,54px)] font-[730] leading-[1.04] tracking-[-0.052em] text-[#102139]">
            Turn an offer into
            <span className="block bg-[linear-gradient(90deg,#176df3_0%,#596ee9_52%,#238fa9_100%)] bg-clip-text text-transparent">
              a connected customer.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-[14px] font-[470] leading-[1.7] text-[#667a90] sm:text-[15px]">
            Give people a clear way to choose what you offer, complete
            checkout and continue into the right access, booking or customer
            journey.
          </p>
        </div>

        <div
          data-scroll-stagger
          className="relative mx-auto mt-10 max-w-[1180px]"
        >
          <div className="hidden lg:block">
            <DesktopJourney />
          </div>

          <div className="lg:hidden">
            <MobileJourney />
          </div>
        </div>

        <div
          data-scroll-reveal
          className="mx-auto mt-9 grid max-w-[1180px] gap-3 sm:grid-cols-3"
        >
          <JourneyBenefit
            icon={<CreditCard size={16} />}
            title="Clear checkout"
            text="Customers know exactly what happens next."
          />

          <JourneyBenefit
            icon={<CircleUserRound size={16} />}
            title="Customer connected"
            text="Purchases and activity stay with the customer journey."
          />

          <JourneyBenefit
            icon={<Sparkles size={16} />}
            title="Ready for the next step"
            text="Access, booking or follow-up can continue from there."
          />
        </div>

        <div
          data-scroll-reveal
          className="mx-auto mt-7 flex max-w-[1180px] flex-col items-center justify-between gap-4 rounded-[19px] border border-[#d4e1ef] bg-white/90 px-5 py-5 shadow-[0_18px_50px_rgba(42,78,124,0.05)] sm:flex-row sm:px-6"
        >
          <div>
            <p className="text-[15px] font-[720] tracking-[-0.02em] text-[#17314e]">
              Your pricing stays yours.
            </p>

            <p className="mt-1 max-w-[620px] text-[10px] font-[500] leading-[1.55] text-[#7d8fa2]">
              Create your offer and decide its pricing separately. This section
              shows how the customer journey stays connected after checkout.
            </p>
          </div>

          <Link
            href="/pricing"
            className="group inline-flex h-[44px] shrink-0 items-center justify-center gap-2 rounded-[11px] bg-[#086af5] px-6 text-[13px] font-[700] text-white shadow-[0_12px_28px_rgba(8,106,245,0.17)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#005fe2]"
          >
            Start for free
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function DesktopJourney() {
  return (
    <div className="relative">
      <div className="absolute left-[11%] right-[11%] top-[71px] h-px bg-[#b9cfe9]" />

      <div className="grid grid-cols-4 gap-5">
        <JourneyStage
          number="01"
          icon={<ShoppingBag size={18} />}
          label="Offer"
          title="Customer chooses"
          text="A product, course, booking, membership or another offer."
        >
          <OfferPreview />
        </JourneyStage>

        <JourneyStage
          number="02"
          icon={<CreditCard size={18} />}
          label="Checkout"
          title="They complete checkout"
          text="Move from the offer into the enabled checkout experience."
        >
          <CheckoutPreview />
        </JourneyStage>

        <JourneyStage
          number="03"
          icon={<CircleUserRound size={18} />}
          label="Customer"
          title="The customer connects"
          text="Keep the purchase and important activity with the same journey."
        >
          <CustomerPreview />
        </JourneyStage>

        <JourneyStage
          number="04"
          icon={<PackageCheck size={18} />}
          label="Next step"
          title="Deliver what comes next"
          text="Continue into access, a booking or another configured action."
        >
          <DeliveryPreview />
        </JourneyStage>
      </div>
    </div>
  );
}

function MobileJourney() {
  return (
    <div className="space-y-3">
      <MobileStage
        number="01"
        icon={<ShoppingBag size={16} />}
        title="Customer chooses an offer"
        text="Product, course, booking or membership."
      />

      <Connector />

      <MobileStage
        number="02"
        icon={<CreditCard size={16} />}
        title="Checkout happens"
        text="The customer completes the enabled checkout flow."
      />

      <Connector />

      <MobileStage
        number="03"
        icon={<CircleUserRound size={16} />}
        title="Customer stays connected"
        text="Their purchase and important activity remain together."
      />

      <Connector />

      <MobileStage
        number="04"
        icon={<PackageCheck size={16} />}
        title="DIGAYA continues the journey"
        text="Access, booking or another next step can follow."
      />
    </div>
  );
}

function JourneyStage({
  number,
  icon,
  label,
  title,
  text,
  children,
}: {
  number: string;
  icon: ReactNode;
  label: string;
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <div className="relative min-w-0">
      <div className="relative z-10 mx-auto flex size-[64px] items-center justify-center rounded-[18px] border border-[#b9d0ec] bg-white text-[#086af5] shadow-[0_12px_32px_rgba(40,79,127,0.08)]">
        {icon}

        <span className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full border border-[#bed3ed] bg-[#eff5ff] text-[8px] font-[750] text-[#176df3]">
          {number}
        </span>
      </div>

      <div className="mt-5 text-center">
        <p className="text-[9px] font-[750] uppercase tracking-[0.12em] text-[#6281a7]">
          {label}
        </p>

        <h3 className="mt-2 text-[17px] font-[720] leading-[1.25] tracking-[-0.025em] text-[#1f3753]">
          {title}
        </h3>

        <p className="mx-auto mt-2 min-h-[48px] max-w-[240px] text-[10px] font-[500] leading-[1.55] text-[#788ba0]">
          {text}
        </p>
      </div>

      <div className="mt-5">{children}</div>
    </div>
  );
}

function OfferPreview() {
  return (
    <div className="rounded-[18px] border border-[#cbdced] bg-white p-4 shadow-[0_18px_45px_rgba(44,80,124,0.07)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[7px] font-[750] uppercase tracking-[0.1em] text-[#8497aa]">
            Your offer
          </p>

          <p className="mt-1 text-[11px] font-[700] text-[#2a4561]">
            Ready to choose
          </p>
        </div>

        <span className="flex size-9 items-center justify-center rounded-[10px] bg-[#eaf2ff] text-[#086af5]">
          <ShoppingBag size={14} />
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <OfferType text="Product" />
        <OfferType text="Course" />
        <OfferType text="Booking" />
        <OfferType text="Membership" />
      </div>

      <div className="mt-3 flex h-[38px] items-center justify-center rounded-[9px] bg-[#176df3] text-[9px] font-[700] text-white">
        Continue
      </div>
    </div>
  );
}

function CheckoutPreview() {
  return (
    <div className="rounded-[18px] border border-[#cbdced] bg-white p-4 shadow-[0_18px_45px_rgba(44,80,124,0.07)]">
      <div className="rounded-[13px] bg-[#edf4ff] p-3">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-[9px] bg-[#dce9ff] text-[#086af5]">
            <CreditCard size={13} />
          </span>

          <div>
            <p className="text-[7px] font-[750] uppercase tracking-[0.08em] text-[#7890aa]">
              Checkout
            </p>

            <p className="mt-0.5 text-[10px] font-[700] text-[#314b67]">
              Ready for payment
            </p>
          </div>

          <Check size={12} className="ml-auto text-[#168f69]" />
        </div>
      </div>

      <div className="mt-3 space-y-2">
        <CheckoutLine title="Customer details" />
        <CheckoutLine title="Payment method" />
        <CheckoutLine title="Confirmation" />
      </div>
    </div>
  );
}

function CustomerPreview() {
  return (
    <div className="rounded-[18px] border border-[#cbdced] bg-white p-4 shadow-[0_18px_45px_rgba(44,80,124,0.07)]">
      <div className="flex items-center">
        <div className="flex -space-x-1.5">
          <Avatar text="01" />
          <Avatar text="02" />
          <Avatar text="+4" />
        </div>

        <Check size={13} className="ml-auto text-[#168f69]" />
      </div>

      <p className="mt-4 text-[11px] font-[700] text-[#2c4661]">
        Customer connected
      </p>

      <p className="mt-1 text-[8px] leading-[1.5] text-[#8293a5]">
        Order, access and activity stay with the same journey.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <CustomerData label="Order" value="Connected" />
        <CustomerData label="Activity" value="Saved" />
      </div>
    </div>
  );
}

function DeliveryPreview() {
  return (
    <div className="rounded-[18px] border border-[#bcd2ed] bg-[#102b4d] p-4 text-white shadow-[0_18px_45px_rgba(34,67,110,0.14)]">
      <DeliveryLine
        icon={<KeyRound size={12} />}
        label="Access"
        value="Ready"
      />

      <div className="my-2 flex justify-center">
        <ArrowRight size={11} className="rotate-90 text-[#7899bd]" />
      </div>

      <DeliveryLine
        icon={<PackageCheck size={12} />}
        label="Next step"
        value="Connected"
      />

      <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3">
        <span className="size-1.5 rounded-full bg-[#4dd5a7]" />

        <p className="text-[8px] font-[600] text-[#95aec8]">
          Customer journey continues
        </p>
      </div>
    </div>
  );
}

function OfferType({ text }: { text: string }) {
  return (
    <div className="rounded-[8px] bg-[#eff4fb] px-2 py-2 text-center text-[8px] font-[650] text-[#607994]">
      {text}
    </div>
  );
}

function CheckoutLine({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 rounded-[9px] border border-[#e0e8f1] px-2.5 py-2">
      <span className="size-1.5 rounded-full bg-[#2475ed]" />
      <span className="text-[8px] font-[600] text-[#60758c]">{title}</span>
      <Check size={9} className="ml-auto text-[#168f69]" />
    </div>
  );
}

function Avatar({ text }: { text: string }) {
  return (
    <span className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-[#dbe8fb] text-[7px] font-[750] text-[#4b72a3]">
      {text}
    </span>
  );
}

function CustomerData({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[9px] bg-[#f0f5fb] p-2.5">
      <p className="text-[6px] font-[750] uppercase tracking-[0.08em] text-[#8b9caf]">
        {label}
      </p>

      <p className="mt-1 text-[8px] font-[700] text-[#48627d]">{value}</p>
    </div>
  );
}

function DeliveryLine({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[10px] bg-[#173b63] px-3 py-3">
      <span className="flex size-8 items-center justify-center rounded-[9px] bg-[#204a77] text-[#83b7fb]">
        {icon}
      </span>

      <div>
        <p className="text-[6px] font-[750] uppercase tracking-[0.08em] text-[#809dbd]">
          {label}
        </p>

        <p className="mt-0.5 text-[9px] font-[700] text-white">{value}</p>
      </div>

      <Check size={10} className="ml-auto text-[#4bd2a5]" />
    </div>
  );
}

function MobileStage({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-[17px] border border-[#d1e0ef] bg-white p-4 shadow-[0_12px_34px_rgba(43,77,118,0.05)]">
      <span className="relative flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-[#eaf2ff] text-[#086af5]">
        {icon}

        <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full border border-[#c7d9ee] bg-white text-[7px] font-[750]">
          {number}
        </span>
      </span>

      <div>
        <p className="text-[12px] font-[700] text-[#2d4864]">{title}</p>

        <p className="mt-1 text-[9px] font-[500] leading-[1.55] text-[#7d8fa2]">
          {text}
        </p>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="ml-[21px] h-5 w-px bg-[#b7cdea]" />
  );
}

function JourneyBenefit({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[16px] border border-[#d6e2ee] bg-white px-4 py-4 shadow-[0_10px_30px_rgba(44,77,116,0.04)]">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-[11px] bg-[#eaf2ff] text-[#086af5]">
        {icon}
      </span>

      <div>
        <p className="text-[11px] font-[700] text-[#304b67]">{title}</p>

        <p className="mt-0.5 text-[9px] leading-[1.5] text-[#8192a4]">
          {text}
        </p>
      </div>
    </div>
  );
}

function SectionBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#f6faff_46%,#f4f9ff_100%)]" />

      <div className="pointer-events-none absolute left-[-12%] top-[12%] -z-20 h-[540px] w-[640px] rounded-full bg-[#dceaff]/55 blur-[145px]" />

      <div className="pointer-events-none absolute right-[-12%] bottom-[-24%] -z-20 h-[560px] w-[660px] rounded-full bg-[#dff5f7]/38 blur-[155px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] [background-image:linear-gradient(rgba(56,97,146,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(56,97,146,0.15)_1px,transparent_1px)] [background-size:76px_76px]" />
    </>
  );
}