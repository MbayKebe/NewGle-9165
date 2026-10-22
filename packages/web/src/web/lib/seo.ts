import { useEffect } from "react";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

type Seo = {
  title: string;
  description: string;
  /** Image absolue ou chemin public utilisé pour le partage social. */
  image?: string;
};

/** Met à jour le titre et les balises meta de la page courante. */
export function useSeo({ title, description, image }: Seo) {
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    if (image) setMeta("property", "og:image", image);
    setMeta("name", "twitter:card", "summary_large_image");

    const url = window.location.href;
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
    setMeta("property", "og:url", url);
  }, [title, description, image]);
}

/** Injecte un bloc JSON-LD dans le <head> le temps de vie du composant. */
export function useJsonLd(data: unknown, id: string) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [data, id]);
}
