import { Hero } from "../components/hero";
import { DormantMedia } from "../components/media";
import { OnlinePresence } from "../components/presence";
import {
  Evidence,
  ExecutiveSummary,
  Findings,
  Footer,
  Methodology,
  Plan,
  Recommendations,
  Strengths,
} from "../components/sections";
import { SideNav, TopBar } from "../components/side-nav";
import { useReveal } from "../hooks/use-reveal";
import { useSeo } from "../lib/seo";

function Index() {
  useReveal();
  useSeo({
    title: "Audit globalengineering.sn — Analyse & recommandations",
    description:
      "Audit du site globalengineering.sn : constats, points faibles, recommandations priorisées et plan d'action en 5 phases.",
  });

  return (
    <div className="min-h-screen bg-paper">
      <SideNav />
      <div className="xl:pl-[230px]">
        <TopBar />
        <main>
          <Hero />
          <ExecutiveSummary />
          <Strengths />
          <Findings />
          <Evidence />
          <DormantMedia />
          <OnlinePresence />
          <Recommendations />
          <Plan />
          <Methodology />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Index;
