import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { SiInstagram } from "react-icons/si";

const platformLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Automations", href: "#automation" },
  { label: "Workspace", href: "#workspace" },
  { label: "Payments", href: "#payments" },
  { label: "Integrations", href: "#integrations" },
];

const businessLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "FAQs", href: "#faq" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#061322] px-4 pb-8 pt-14 text-white sm:px-6 lg:px-8 lg:pt-16">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid gap-10 border-b border-white/10 pb-11 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-[13px] bg-white/[0.06]">
                <Image
                  src="/brand/digaya-logo.png"
                  alt="DIGAYA"
                  width={38}
                  height={38}
                  className="size-[38px] object-contain"
                />
              </div>

              <div>
                <p className="text-[16px] font-[750] tracking-[-0.02em]">
                  DIGAYA
                </p>

                <p className="mt-0.5 text-[8px] font-[650] uppercase tracking-[0.16em] text-[#7891ad]">
                  Creator Business
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-[390px] text-[11px] leading-[1.7] text-[#8fa6bf]">
              Build your online presence, create what you offer, connect
              customers and automate repetitive business journeys from one
              workspace.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.instagram.com/digaya.foundation/"
                target="_blank"
                rel="noreferrer"
                aria-label="DIGAYA on Instagram"
                className="flex size-10 items-center justify-center rounded-[11px] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                <SiInstagram size={17} color="#E4405F" />
              </a>

              <a
                href="mailto:support@digaya.in"
                aria-label="Email DIGAYA"
                className="flex size-10 items-center justify-center rounded-[11px] border border-white/10 bg-white/[0.04] text-[#9eb5ce] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] hover:text-white"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <FooterColumn title="Platform" links={platformLinks} />

          <div>
            <p className="text-[10px] font-[750] uppercase tracking-[0.14em] text-[#718ba8]">
              Business
            </p>

            <div className="mt-4 space-y-3">
              {businessLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block w-fit text-[11px] font-[550] text-[#9bb0c7] transition duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="https://store.digaya.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-[550] text-[#9bb0c7] transition duration-300 hover:text-white"
              >
                DIGAYA Store
                <ArrowUpRight size={11} />
              </a>
            </div>
          </div>

          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] leading-[1.6] text-[#7289a3]">
            © {new Date().getFullYear()} DIGAYA. All rights reserved.
          </p>

          <p className="max-w-[680px] text-[8px] leading-[1.6] text-[#607891] sm:text-right">
            DIGAYA and its original brand assets, product interface designs and
            original content are proprietary to DIGAYA unless otherwise stated.
            Third-party names, logos and trademarks belong to their respective
            owners.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <div>
      <p className="text-[10px] font-[750] uppercase tracking-[0.14em] text-[#718ba8]">
        {title}
      </p>

      <div className="mt-4 space-y-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="block w-fit text-[11px] font-[550] text-[#9bb0c7] transition duration-300 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}