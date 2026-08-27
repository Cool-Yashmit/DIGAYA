import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, Mail, PlugZap } from "lucide-react";
import {
  SiGooglecalendar,
  SiInstagram,
  SiTelegram,
  SiWhatsapp,
} from "react-icons/si";

export function IntegrationsSection() {
  return (
    <section
      id="integrations"
      className="relative isolate overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <SectionBackground />

      <div className="relative mx-auto max-w-[1380px]">
        <div
          data-scroll-reveal
          className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end"
        >
          <div>
            <p className="text-[10px] font-[750] uppercase tracking-[0.15em] text-[#54789f]">
              Connected channels
            </p>

            <h2 className="mt-3 max-w-[560px] text-[clamp(34px,3.5vw,50px)] font-[730] leading-[1.05] tracking-[-0.05em] text-[#102139]">
              Connect the channels
              <span className="block text-[#176df3]">
                your business already uses.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-[560px] text-[14px] leading-[1.7] text-[#667a91]">
              Bring conversations, scheduling and audience communication closer
              to the same DIGAYA customer journey instead of treating every
              channel like a separate business.
            </p>

            <Link
              href="#automation"
              className="group mt-4 inline-flex items-center gap-2 text-[12px] font-[700] text-[#176cf1]"
            >
              Explore automation
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div
          data-scroll-stagger
          className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          <IntegrationCard
            icon={
              <Image
                src="/brand/integrations/meta.svg"
                alt="Meta"
                width={76}
                height={30}
                className="h-auto w-[76px] object-contain"
              />
            }
            iconWide
            title="Meta"
            text="Business messaging ecosystem"
            tag="Tech Provider"
          />

          <IntegrationCard
            icon={<SiInstagram size={27} color="#E4408C" />}
            title="Instagram"
            text="Comments, DMs and automation triggers"
            tag="Audience"
          />

          <IntegrationCard
            icon={<SiWhatsapp size={27} color="#25D366" />}
            title="WhatsApp"
            text="Lead and customer conversations"
            tag="Messaging"
          />

          <IntegrationCard
            icon={<SiGooglecalendar size={27} color="#4285F4" />}
            title="Google Calendar"
            text="Bookings and scheduling workflows"
            tag="Scheduling"
          />

          <IntegrationCard
            icon={<Mail size={27} />}
            iconClassName="text-[#e75d4d]"
            title="Email"
            text="Campaigns, updates and follow-ups"
            tag="Communication"
          />

          <IntegrationCard
            icon={<SiTelegram size={27} color="#26A5E4" />}
            title="Telegram"
            text="Audience and community communication"
            tag="Messaging"
          />
        </div>

        <div
          data-scroll-reveal
          className="mt-5 flex flex-col gap-4 rounded-[18px] border border-[#d8e3ee] bg-[#f8fbff] px-5 py-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-[11px] bg-[#eaf2ff] text-[#086af5]">
              <PlugZap size={16} />
            </span>

            <div>
              <p className="text-[12px] font-[700] text-[#304a66]">
                Your connections depend on your DIGAYA workspace.
              </p>

              <p className="mt-1 text-[9px] leading-[1.5] text-[#8192a4]">
                Integration availability and supported actions depend on the
                services and connection configuration enabled for your account.
              </p>
            </div>
          </div>

          <span className="inline-flex shrink-0 items-center gap-2 text-[10px] font-[650] text-[#537292]">
            <Check size={13} className="text-[#179c73]" />
            Add connections as you grow
          </span>
        </div>
      </div>
    </section>
  );
}

function IntegrationCard({
  icon,
  title,
  text,
  tag,
  iconWide = false,
  iconClassName = "",
}: {
  icon: ReactNode;
  title: string;
  text: string;
  tag: string;
  iconWide?: boolean;
  iconClassName?: string;
}) {
  return (
    <div className="group rounded-[20px] border border-[#d8e3ee] bg-white p-5 shadow-[0_12px_34px_rgba(46,76,112,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#bfd2e7] hover:shadow-[0_20px_44px_rgba(46,76,112,0.075)]">
      <div className="flex items-start justify-between gap-4">
        <span
          className={`flex ${
            iconWide ? "h-[54px] w-[104px]" : "size-[54px]"
          } items-center justify-center rounded-[15px] border border-[#e0e8f1] bg-[#f8fbff] ${iconClassName}`}
        >
          {icon}
        </span>

        <span className="rounded-full bg-[#f0f5fb] px-2.5 py-1.5 text-[8px] font-[700] text-[#6d849d]">
          {tag}
        </span>
      </div>

      <p className="mt-5 text-[15px] font-[720] text-[#233d59]">{title}</p>

      <p className="mt-1.5 text-[10px] font-[500] leading-[1.55] text-[#7a8da1]">
        {text}
      </p>
    </div>
  );
}

function SectionBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)]" />
      <div className="pointer-events-none absolute right-[-10%] top-[-20%] -z-20 h-[540px] w-[620px] rounded-full bg-[#e1edff]/55 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[-30%] left-[-10%] -z-20 h-[480px] w-[560px] rounded-full bg-[#e5f5fa]/38 blur-[145px]" />
    </>
  );
}