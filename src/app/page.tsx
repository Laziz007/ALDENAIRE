import { Benefits } from "@/components/sections/benefits";
import { DashboardPreview } from "@/components/sections/dashboard-preview";
import { FAQ } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Integrations } from "@/components/sections/integrations";
import { Navbar } from "@/components/sections/navbar";
import { Pricing } from "@/components/sections/pricing";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Security } from "@/components/sections/security";
import { SocialProof } from "@/components/sections/social-proof";
import { UseCases } from "@/components/sections/use-cases";
import { PageTransition } from "@/components/page-transition";

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <main className="pt-10">
        <Hero />
        <DashboardPreview />
        <ProblemSolution />
        <Features />
        <Integrations />
        <HowItWorks />
        <UseCases />
        <Security />
        <Benefits />
        <SocialProof />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </PageTransition>
  );
}
