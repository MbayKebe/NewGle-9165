import { useSeo } from "@/lib/seo";
import { Container, Cta } from "@/components/site/bits";

export default function NotFound() {
  useSeo({
    title: "Page introuvable — Global Engineering SARL",
    description: "La page demandée n'existe pas ou a été déplacée.",
  });

  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow text-orange-700">Erreur 404</p>
      <h1 className="mt-5 text-2xl font-bold text-navy-900">
        Cette page n'existe pas
      </h1>
      <p className="reading mt-4 text-slate">
        Le lien est peut-être ancien ou mal orthographié. Revenez à l'accueil ou
        parcourez nos réalisations.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Cta href="/">Retour à l'accueil</Cta>
        <Cta href="/realisations" variant="outline">
          Nos réalisations
        </Cta>
      </div>
    </Container>
  );
}
