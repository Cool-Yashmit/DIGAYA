import { ArrowUpRight, Plus } from "lucide-react";

const faqs = [
  {
    question: "What is DIGAYA?",
    answer:
      "DIGAYA is a connected business platform for building your online presence, creating offers, working with customers and automating repetitive customer journeys from one workspace.",
  },
  {
    question: "Do I need to use every DIGAYA tool?",
    answer:
      "No. You can start with the tools your business needs first and add more as you grow. The goal is to let each part of your business stay connected when you choose to expand.",
  },
  {
    question: "Can I build a website or Link-in-Bio with DIGAYA?",
    answer:
      "DIGAYA is designed to let you create your online business home through a website or Link-in-Bio experience, with your offers and customer actions connected to the same workspace.",
  },
  {
    question: "What can I sell through DIGAYA?",
    answer:
      "DIGAYA is being built around digital products, courses, bookings, memberships, events and other creator or service-based offers. Availability can depend on the features enabled for your account.",
  },
  {
    question: "How does Instagram automation work?",
    answer:
      "You can configure an interaction such as a comment or message to trigger a prepared response or next step. The customer journey can then continue through lead capture, a resource, an offer or another configured action.",
  },
  {
    question: "Can customers book sessions with me?",
    answer:
      "DIGAYA includes booking-focused experiences for consultations, sessions and related services. Scheduling connections and availability depend on your workspace configuration.",
  },
  {
    question: "Can I connect my own domain?",
    answer:
      "DIGAYA is designed to support a DIGAYA-hosted address and custom-domain experiences depending on the plan and domain configuration available to your account.",
  },
  {
    question: "How do payments work?",
    answer:
      "Customers can move from an offer into checkout using the payment methods enabled by the configured payment provider. Supported methods, fees and settlement behavior depend on that provider and your account setup.",
  },
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f7faff] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1180px]">
        <div
          data-scroll-reveal
          className="grid gap-6 lg:grid-cols-[0.62fr_1.38fr] lg:gap-14"
        >
          <div>
            <p className="text-[10px] font-[750] uppercase tracking-[0.15em] text-[#5a7ba2]">
              Questions, answered
            </p>

            <h2 className="mt-3 text-[clamp(34px,3.4vw,49px)] font-[730] leading-[1.05] tracking-[-0.05em] text-[#102139]">
              Everything you need
              <span className="block text-[#176df3]">to get started.</span>
            </h2>

            <p className="mt-4 max-w-[390px] text-[13px] leading-[1.65] text-[#6c7f94]">
              A quick overview of how DIGAYA fits into your business and what
              you can connect as you grow.
            </p>

            <a
              href="mailto:support@digaya.in"
              className="group mt-6 inline-flex items-center gap-2 text-[12px] font-[700] text-[#176cf1]"
            >
              Ask another question
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div data-scroll-stagger className="space-y-2.5">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[17px] border border-[#d8e3ee] bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-4.5 sm:px-6">
                  <span className="text-[13px] font-[700] text-[#2a445f] sm:text-[14px]">
                    {faq.question}
                  </span>

                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#edf4ff] text-[#086af5]">
                    <Plus
                      size={14}
                      className="transition-transform duration-300 group-open:rotate-45"
                    />
                  </span>
                </summary>

                <div className="px-5 pb-5 pr-14 sm:px-6 sm:pb-6 sm:pr-16">
                  <p className="text-[11px] font-[500] leading-[1.7] text-[#73869a] sm:text-[12px]">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}