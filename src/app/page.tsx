import { FAQSection } from "@/components/marketing/FAQSection";
import { FinalCTASection } from "@/components/marketing/FinalCTASection";
import { GrowAutomationSection } from "@/components/marketing/GrowAutomationSection";
import { HeroSection } from "@/components/marketing/HeroSection";
import { IntegrationStrip } from "@/components/marketing/IntegrationStrip";
import { IntegrationsSection } from "@/components/marketing/IntegrationsSection";
import { PaymentsExperienceSection } from "@/components/marketing/PaymentsExperienceSection";
import { PlatformEcosystemSection } from "@/components/marketing/PlatformEcosystemSection";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { UnifiedWorkspaceSection } from "@/components/marketing/UnifiedWorkspaceSection";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <IntegrationStrip />
      <PlatformEcosystemSection />
      <GrowAutomationSection />
      <UnifiedWorkspaceSection />
      <PaymentsExperienceSection />
      <IntegrationsSection />
      <FAQSection />
      <FinalCTASection />
      <SiteFooter />
    </main>
  );
}