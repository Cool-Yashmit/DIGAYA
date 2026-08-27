import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-20">
      <div
        data-scroll-reveal
        className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[30px] bg-[#08182d] px-6 py-14 text-center text-white sm:px-8 lg:py-16"
      >
        <div className="pointer-events-none absolute left-[-12%] top-[-70%] h-[500px] w-[620px] rounded-full bg-[#185ec9]/28 blur-[130px]" />
        <div className="pointer-events-none absolute right-[-10%] bottom-[-75%] h-[520px] w-[620px] rounded-full bg-[#188c9c]/22 blur-[140px]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(112,157,219,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(112,157,219,0.16)_1px,transparent_1px)] [background-size:74px_74px]" />

        <div className="relative mx-auto max-w-[790px]">
          <div className="mx-auto flex size-14 items-center justify-center rounded-[17px] border border-white/12 bg-white/[0.07]">
            <Image
              src="/brand/digaya-logo.png"
              alt="DIGAYA"
              width={42}
              height={42}
              className="size-[42px] object-contain"
            />
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-2">
            <Sparkles size={11} className="text-[#79afff]" />

            <span className="text-[9px] font-[750] uppercase tracking-[0.13em] text-[#9eb7d3]">
              Start simple. Grow from one workspace.
            </span>
          </div>

          <h2 className="mt-5 text-[clamp(36px,4.5vw,62px)] font-[730] leading-[1.02] tracking-[-0.055em]">
            Build your business.
            <span className="block bg-[linear-gradient(90deg,#75a9ff,#928cff,#5fc8db)] bg-clip-text text-transparent">
              Keep the journey connected.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[13px] leading-[1.7] text-[#a5bad0] sm:text-[14px]">
            Start with the tools you need now and add more when your business is
            ready for the next step.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="group inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-[12px] bg-[#1672f7] px-7 text-[13px] font-[700] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#0c66e6] sm:w-auto"
            >
              Start for free
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="#platform"
              className="group inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-[12px] border border-white/16 bg-white/[0.06] px-7 text-[13px] font-[700] text-white transition duration-300 hover:bg-white/[0.1] sm:w-auto"
            >
              Explore DIGAYA
              <ArrowRight
                size={14}
                className="text-[#9bb9dc] transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <MiniBenefit text="No code required" />
            <MiniBenefit text="Start with one tool" />
            <MiniBenefit text="Add more as you grow" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniBenefit({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[9px] font-[600] text-[#90a9c5]">
      <span className="flex size-5 items-center justify-center rounded-full bg-[#103c3c] text-[#4bd4a7]">
        <Check size={9} strokeWidth={2.5} />
      </span>
      {text}
    </span>
  );
}