import Image from "next/image";

export function DigayaMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-10 items-center justify-center rounded-xl bg-white">
        <Image
          src="/brand/digaya-logo.png"
          alt="DIGAYA"
          width={38}
          height={38}
          priority
          className="h-9 w-9 object-contain"
        />
      </div>

      <div>
        <p className="text-[15px] font-bold tracking-[-0.03em] text-slate-950">
          DIGAYA
        </p>
        <p className="text-[9px] font-semibold tracking-[0.12em] text-slate-400">
          CREATOR BUSINESS
        </p>
      </div>
    </div>
  );
}