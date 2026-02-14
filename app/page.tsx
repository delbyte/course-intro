
import { Presentation } from "@/components/PresentationMode";
import {
  HeroSlide,
  PhilosophySlide,
  Phase1Slide,
  Phase2Slide,
  RalphSwitchSlide,
  SolopreneurSlide,
  ResourcesSlide
} from "@/components/Slides";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090A]">
      <Presentation>
        <HeroSlide />
        <ManifestoSlide />
        <PhilosophySlide />
        <Phase1Slide />
        <Phase2Slide />
        <RalphSwitchSlide />
        <SolopreneurSlide />
        <ResourcesSlide />
      </Presentation>
    </main>
  );
}
