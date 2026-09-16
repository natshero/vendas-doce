import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionPillars } from "@/components/SolutionPillars";
import { VisualJourney } from "@/components/VisualJourney";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { ModulesTimeline } from "@/components/ModulesTimeline";
import { DessertGallery } from "@/components/DessertGallery";
import { HowItWorks } from "@/components/HowItWorks";
import { AudienceFit } from "@/components/AudienceFit";
import { Testimonials } from "@/components/Testimonials";
import { OfferBox } from "@/components/OfferBox";
import { Guarantee } from "@/components/Guarantee";
import { ResultsDisclaimer } from "@/components/ResultsDisclaimer";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionPillars />
        <VisualJourney />
        <BenefitsGrid />
        <ModulesTimeline />
        <DessertGallery />
        <HowItWorks />
        <AudienceFit />
        <Testimonials />
        <OfferBox />
        <Guarantee />
        <ResultsDisclaimer />
        <FAQAccordion />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
