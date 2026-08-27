import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Check,
  Gift,
  Link2,
  Mail,
  MessageCircle,
  MessageSquareText,
  Send,
  UserRoundPlus,
  Zap,
} from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export function GrowAutomationSection() {
  return (
    <section
      id="automation"
      className="relative isolate overflow-hidden bg-[#fffafb] px-4 py-[72px] sm:px-6 lg:px-8 lg:py-[88px]"
    >
      <SectionBackground />

      <div className="relative mx-auto max-w-[1380px]">
        <div
          data-scroll-reveal
          className="mx-auto max-w-[860px] text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#eadde8] bg-white/90 px-3.5 py-2 shadow-[0_8px_28px_rgba(80,50,80,0.05)]">
            <span className="flex size-6 items-center justify-center rounded-full bg-[#fff0f7] text-[#e4408c]">
              <Zap size={12} />
            </span>

            <span className="text-[10px] font-[750] uppercase tracking-[0.14em] text-[#9b6d87]">
              Smart automations
            </span>
          </div>

          <h2 className="mt-5 text-[clamp(34px,4vw,56px)] font-[730] leading-[1.04] tracking-[-0.052em] text-[#111d2d]">
            Turn Instagram attention into
            <span className="block bg-[linear-gradient(90deg,#e2438d_0%,#8b5ee9_45%,#2673f2_100%)] bg-clip-text text-transparent">
              the next business step.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[720px] text-[14px] font-[470] leading-[1.7] text-[#68798c] sm:text-[15px]">
            When someone comments or sends a DM, DIGAYA can reply, deliver the
            right resource, capture the lead and keep the follow-up connected.
          </p>
        </div>

        <div
          data-scroll-stagger
          className="mt-10 overflow-hidden rounded-[28px] border border-[#e1dce7] bg-white shadow-[0_30px_90px_rgba(64,52,83,0.1)]"
        >
          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            <div className="relative flex flex-col border-b border-[#ece6ee] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-9">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-[13px] bg-[#fff0f7]">
                  <SiInstagram size={23} color="#E4408C" />
                </span>

                <div>
                  <p className="text-[10px] font-[750] uppercase tracking-[0.13em] text-[#ba668c]">
                    Instagram automation
                  </p>

                  <p className="mt-1 text-[12px] font-[550] text-[#7b8999]">
                    Comments, DMs and lead capture
                  </p>
                </div>
              </div>

              <h3 className="mt-7 max-w-[430px] text-[clamp(28px,2.6vw,39px)] font-[730] leading-[1.08] tracking-[-0.045em] text-[#142033]">
                Someone comments.
                <span className="block text-[#176df3]">
                  DIGAYA handles what happens next.
                </span>
              </h3>

              <p className="mt-4 max-w-[440px] text-[14px] font-[470] leading-[1.7] text-[#66788c]">
                Choose the comment or DM trigger once, prepare the response and
                let DIGAYA run the same journey automatically.
              </p>

              <div className="mt-7 space-y-3">
                <AutomationBenefit
                  icon={<MessageCircle size={16} />}
                  title="Detect the interest"
                  text='A comment like “GUIDE” can start the automation.'
                />

                <AutomationBenefit
                  icon={<Send size={16} />}
                  title="Send the right response"
                  text="Deliver the message, link or resource you prepared."
                />

                <AutomationBenefit
                  icon={<UserRoundPlus size={16} />}
                  title="Keep the lead connected"
                  text="Save the interested person for the next customer step."
                />
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/pricing"
                  className="group inline-flex h-[46px] items-center justify-center gap-2 rounded-[12px] bg-[#086af5] px-6 text-[13px] font-[700] text-white shadow-[0_14px_34px_rgba(8,106,245,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#005fe2]"
                >
                  Start for free
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  href="#workspace"
                  className="group inline-flex h-[46px] items-center justify-center gap-2 rounded-[12px] border border-[#d6dde8] bg-white px-6 text-[13px] font-[680] text-[#344c67] transition duration-300 hover:-translate-y-0.5 hover:border-[#b8c8db]"
                >
                  Explore automations
                  <ArrowRight
                    size={14}
                    className="text-[#7e94ad] transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>

            <InstagramAutomationVisual />
          </div>
        </div>

        <div
          data-scroll-reveal
          className="mt-9 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="text-[10px] font-[750] uppercase tracking-[0.14em] text-[#8391a5]">
              More automation tools
            </p>

            <h3 className="mt-2 text-[25px] font-[720] tracking-[-0.035em] text-[#18283b]">
              Automate the channels your audience already uses.
            </h3>
          </div>

          <p className="max-w-[420px] text-[12px] font-[500] leading-[1.6] text-[#78889b] lg:text-right">
            Start with one channel and connect more as your business grows.
          </p>
        </div>

        <div
          data-scroll-stagger
          className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          <ChannelCard
            icon={
              <SiWhatsapp
                size={22}
                color="#25D366"
              />
            }
            title="WhatsApp"
            text="Customer replies and updates."
          />

          <ChannelCard
            icon={<Mail size={20} />}
            iconClassName="bg-[#fff0ed] text-[#e35d4d]"
            title="Email"
            text="Welcome emails and follow-ups."
          />

          <ChannelCard
            icon={<Gift size={20} />}
            iconClassName="bg-[#f2edff] text-[#7556e8]"
            title="Lead Magnets"
            text="Free resources that capture leads."
          />

          <ChannelCard
            icon={<MessageSquareText size={20} />}
            iconClassName="bg-[#ebf3ff] text-[#1870e9]"
            title="Audience workflows"
            text="Keep customer actions connected."
          />
        </div>
      </div>
    </section>
  );
}

function InstagramAutomationVisual() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(135deg,#fff5f8_0%,#f6f1ff_48%,#edf5ff_100%)] p-5 sm:p-7 lg:p-8">
      <div className="pointer-events-none absolute left-[10%] top-[8%] h-[280px] w-[280px] rounded-full bg-[#f08abb]/16 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-[3%] right-[5%] h-[320px] w-[320px] rounded-full bg-[#7b7cff]/15 blur-[90px]" />

      <div className="relative mx-auto grid max-w-[760px] gap-4 md:grid-cols-[1.02fr_0.98fr]">
        <InstagramPost />

        <div className="flex flex-col gap-4">
          <InstagramDM />

          <div className="grid grid-cols-2 gap-3">
            <ResultCard
              icon={<UserRoundPlus size={16} />}
              title="Lead captured"
              text="Contact stays connected"
              green
            />

            <ResultCard
              icon={<Check size={16} />}
              title="Follow-up ready"
              text="Next step is saved"
            />
          </div>

          <div className="rounded-[18px] border border-[#d9dcec] bg-white/88 p-4 shadow-[0_14px_36px_rgba(57,62,92,0.055)] backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-[11px] bg-[#edf3ff]">
                <Image
                  src="/brand/digaya-logo.png"
                  alt="DIGAYA"
                  width={30}
                  height={30}
                  className="size-[30px] object-contain"
                />
              </div>

              <div className="min-w-0">
                <p className="text-[12px] font-[700] text-[#30465e]">
                  Automated by DIGAYA
                </p>

                <p className="mt-0.5 text-[10px] font-[500] text-[#8593a4]">
                  Comment → reply → lead → next step
                </p>
              </div>

              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[#effaf6] px-2.5 py-1.5 text-[9px] font-[700] text-[#16825e]">
                <span className="size-1.5 rounded-full bg-[#25b987]" />
                Live
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InstagramPost() {
  return (
    <div className="overflow-hidden rounded-[22px] border border-[#dedbe7] bg-white shadow-[0_24px_60px_rgba(67,53,80,0.09)]">
      <div className="flex items-center gap-3 px-4 py-3.5">
        <div className="rounded-full bg-[linear-gradient(135deg,#ff7a59,#e4408c,#7655ea)] p-[2px]">
          <div className="flex size-9 items-center justify-center rounded-full bg-white">
            <span className="flex size-7 items-center justify-center rounded-full bg-[#f1f3f8] text-[11px] font-[750] text-[#65758a]">
              YB
            </span>
          </div>
        </div>

        <div>
          <p className="text-[12px] font-[720] text-[#1d2a3c]">
            yourbusiness
          </p>

          <p className="mt-0.5 text-[10px] font-[500] text-[#8b95a3]">
            Digital business
          </p>
        </div>

        <div className="ml-auto flex gap-1">
          <span className="size-1 rounded-full bg-[#4a5565]" />
          <span className="size-1 rounded-full bg-[#4a5565]" />
          <span className="size-1 rounded-full bg-[#4a5565]" />
        </div>
      </div>

      <div className="relative aspect-[1/0.83] overflow-hidden bg-[linear-gradient(135deg,#d73d9a_0%,#9358e9_48%,#426ff0_100%)]">
        <div className="absolute -left-[12%] top-[8%] size-[220px] rounded-full bg-[#ff73ac]/45 blur-[40px]" />
        <div className="absolute -right-[8%] bottom-[-8%] size-[240px] rounded-full bg-[#416fff]/45 blur-[45px]" />

        <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
          <span className="w-fit rounded-full bg-white/18 px-3 py-1.5 text-[9px] font-[750] uppercase tracking-[0.1em] text-white backdrop-blur-md">
            Free resource
          </span>

          <div className="rounded-[20px] border border-white/30 bg-white/12 p-5 backdrop-blur-sm">
            <p className="text-[11px] font-[700] uppercase tracking-[0.08em] text-white/80">
              Free business guide
            </p>

            <p className="mt-2 max-w-[270px] text-[26px] font-[750] leading-[1.02] tracking-[-0.04em] text-white">
              Build your online business.
            </p>

            <p className="mt-3 text-[12px] font-[600] text-white/85">
              Comment GUIDE to get it.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 pt-3">
        <div className="flex items-center gap-4 text-[#202936]">
          <MessageCircle size={20} />
          <Send size={19} />
          <span className="ml-auto">
            <Link2 size={18} />
          </span>
        </div>

        <p className="mt-3 text-[11px] font-[720] text-[#263347]">
          Get the free guide automatically.
        </p>

        <p className="mt-2 text-[11px] leading-[1.55] text-[#4e5c6e]">
          <span className="font-[700] text-[#253247]">yourbusiness</span>{" "}
          Want the guide? Comment{" "}
          <span className="font-[720] text-[#253247]">GUIDE</span>.
        </p>

        <div className="mt-4 flex items-center gap-3 border-t border-[#edf0f4] pt-3">
          <span className="flex size-8 items-center justify-center rounded-full bg-[#eef2f7] text-[9px] font-[700] text-[#65778c]">
            VS
          </span>

          <div className="min-w-0 flex-1">
            <p className="text-[11px] text-[#354458]">
              <span className="font-[700]">visitor</span> GUIDE 🙌
            </p>

            <p className="mt-1 text-[9px] font-[500] text-[#a0a8b2]">
              Now · Reply
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#effaf6] px-2.5 py-1.5 text-[8px] font-[700] text-[#16815e]">
            <Zap size={9} />
            Triggered
          </span>
        </div>
      </div>
    </div>
  );
}

function InstagramDM() {
  return (
    <div className="overflow-hidden rounded-[22px] border border-[#dedbe8] bg-white shadow-[0_22px_55px_rgba(65,52,80,0.085)]">
      <div className="flex items-center gap-3 border-b border-[#eceaf0] px-4 py-3.5">
        <span className="flex size-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#e4408c,#7655ea)] text-white">
          <SiInstagram size={18} />
        </span>

        <div>
          <p className="text-[12px] font-[720] text-[#253246]">
            Automated conversation
          </p>

          <p className="mt-0.5 text-[10px] font-[500] text-[#8995a4]">
            Instagram DM
          </p>
        </div>

        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[#effaf6] px-2.5 py-1.5 text-[9px] font-[700] text-[#16815e]">
          <span className="size-1.5 rounded-full bg-[#25b987]" />
          Live
        </span>
      </div>

      <div className="space-y-3 p-4">
        <div className="ml-auto w-fit max-w-[78%] rounded-[15px] rounded-tr-[5px] bg-[#eef0f4] px-4 py-3 text-[11px] font-[550] text-[#5b6573]">
          GUIDE
        </div>

        <div className="max-w-[91%] rounded-[17px] rounded-tl-[5px] bg-[linear-gradient(135deg,#8954db,#e7468c)] px-4 py-3.5 text-white">
          <p className="text-[11px] font-[600] leading-[1.5]">
            Hey 👋 Here’s the guide you asked for.
          </p>
        </div>

        <div className="overflow-hidden rounded-[15px] border border-[#e0dbea] bg-[#faf8ff]">
          <div className="bg-[#f2edff] px-4 py-3">
            <p className="text-[9px] font-[750] uppercase tracking-[0.1em] text-[#8c75b2]">
              Free guide
            </p>

            <p className="mt-1 text-[12px] font-[720] text-[#2b3142]">
              Build Your Online Business
            </p>
          </div>

          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-[10px] font-[700] text-[#126bf2]">
              Open guide
            </span>

            <Link2 size={13} className="text-[#126bf2]" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 pt-1 text-[9px] font-[550] text-[#9aa3af]">
          <Zap size={11} className="text-[#2373ef]" />
          Sent automatically by DIGAYA
        </div>
      </div>
    </div>
  );
}

function AutomationBenefit({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-[11px] bg-[#eef4ff] text-[#086af5]">
        {icon}
      </span>

      <div>
        <p className="text-[13px] font-[700] text-[#26394f]">
          {title}
        </p>

        <p className="mt-1 text-[11px] font-[500] leading-[1.55] text-[#7a899b]">
          {text}
        </p>
      </div>
    </div>
  );
}

function ResultCard({
  icon,
  title,
  text,
  green = false,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  green?: boolean;
}) {
  return (
    <div className="rounded-[18px] border border-[#dcdfea] bg-white p-4 shadow-[0_14px_34px_rgba(58,59,84,0.055)]">
      <span
        className={`flex size-9 items-center justify-center rounded-[10px] ${
          green
            ? "bg-[#e8f8f2] text-[#10a377]"
            : "bg-[#f0ecff] text-[#7155e5]"
        }`}
      >
        {icon}
      </span>

      <p className="mt-3 text-[11px] font-[700] text-[#304257]">
        {title}
      </p>

      <p className="mt-1 text-[9px] font-[500] leading-[1.45] text-[#8694a4]">
        {text}
      </p>
    </div>
  );
}

function ChannelCard({
  icon,
  title,
  text,
  iconClassName = "bg-[#eafaf1] text-[#21a966]",
}: {
  icon: ReactNode;
  title: string;
  text: string;
  iconClassName?: string;
}) {
  return (
    <div className="group rounded-[18px] border border-[#dce3ec] bg-white p-4 shadow-[0_12px_32px_rgba(49,66,90,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(49,66,90,0.075)]">
      <div
        className={`flex size-11 items-center justify-center rounded-[12px] ${iconClassName}`}
      >
        {icon}
      </div>

      <p className="mt-4 text-[13px] font-[720] text-[#26394f]">
        {title}
      </p>

      <p className="mt-1.5 text-[10px] font-[500] leading-[1.55] text-[#7d8da0]">
        {text}
      </p>

      <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-[700] text-[#176cf1]">
        Explore
        <ArrowRight
          size={11}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </span>
    </div>
  );
}

function SectionBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#fffafb_34%,#f9f8ff_70%,#ffffff_100%)]" />

      <div className="pointer-events-none absolute left-[-13%] top-[22%] -z-20 h-[520px] w-[600px] rounded-full bg-[#ffdce9]/38 blur-[135px]" />

      <div className="pointer-events-none absolute right-[-10%] top-[18%] -z-20 h-[560px] w-[640px] rounded-full bg-[#e2ddff]/44 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[-24%] left-[38%] -z-20 h-[460px] w-[560px] rounded-full bg-[#dbe9ff]/32 blur-[140px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] [background-image:linear-gradient(rgba(75,76,110,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(75,76,110,0.13)_1px,transparent_1px)] [background-size:76px_76px]" />
    </>
  );
}