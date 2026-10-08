import React from 'react';
import HeroSection from '@/app/components/hero/HeroSection';
import EcosystemSection from '@/app/components/ecosystem/EcosystemSection';
import StudioSection from '@/app/components/studio/StudioSection';
import SpeakingSection from '@/app/components/speaking/SpeakingSection';
import ResearchSection from '@/app/components/research/ResearchSection';
import CTASection from '@/app/components/cta/CTASection';
import ProjectGallerySection from "@/app/components/projects/ProjectGallerySection";

export default function Home() {
  return (
      <main className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
        <HeroSection />
        <ProjectGallerySection />
        <EcosystemSection />
        <StudioSection />
        <SpeakingSection />
          <CTASection />
        <ResearchSection />

      </main>
  );
}