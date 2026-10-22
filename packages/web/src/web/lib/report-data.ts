export type Section = {
  id: string;
  num: string;
  nav: string;
  title: string;
};

export const sections: Section[] = [
  { id: "synthese", num: "01", nav: "Synthèse", title: "Résumé exécutif" },
  { id: "acquis", num: "02", nav: "Ce qui fonctionne", title: "Les acquis du site actuel" },
  { id: "constats", num: "03", nav: "Points faibles", title: "Points faibles identifiés" },
  { id: "preuves", num: "04", nav: "Captures", title: "Le site aujourd'hui" },
  {
    id: "medias",
    num: "05",
    nav: "Photos & vidéos",
    title: "Les actifs visuels dormants",
  },
  {
    id: "presence",
    num: "06",
    nav: "Présence en ligne",
    title: "Présence en ligne hors du site",
  },
  {
    id: "recommandations",
    num: "07",
    nav: "Recommandations",
    title: "Recommandations priorisées",
  },
  { id: "plan", num: "08", nav: "Plan d'action", title: "Plan d'action par phases" },
  { id: "methodologie", num: "09", nav: "Méthodologie", title: "Méthodologie et limites" },
];

export const meta = {
  client: "Global Engineering SARL (GLE)",
  site: "globalengineering.sn",
  date: "13 septembre 2026",
  scope: "21 pages, 119 médias et 10 canaux externes — desktop & mobile",
  sector: "Énergies renouvelables & réseaux électriques MT/BT — Dakar, Sénégal",
};

export const headlineStats = [
  { value: "27", label: "couleurs actives", note: "8 à 12 recommandées" },
  { value: "12", label: "tailles de police", note: "5 à 7 recommandées" },
  { value: "119", label: "médias sur le serveur", note: "dont 5 vidéos jamais mises en avant" },
  { value: "3", label: "articles de blog", note: "depuis fin 2024" },
];

export const executiveSummary = [
  "Le site de Global Engineering SARL remplit sa fonction de base — présentation, services, réalisations, contact — mais il ne convertit pas. Quatre freins dominent : une identité visuelle dispersée qui affaiblit la crédibilité, un portfolio de réalisations trop mince pour convaincre des décideurs institutionnels, un parcours de contact générique, et un référencement qui ne capitalise ni sur l'ancrage local (Dakar, Sénégal) ni sur le positionnement sectoriel (ASER, ECREEE, électrification rurale).",
  "Le site est construit sur WordPress avec un thème générique, ce qui explique la dérive visuelle typique de ces outils lorsqu'aucune charte graphique ne les encadre.",
  "Le même déséquilibre se retrouve à l'extérieur du site. GLE a construit une audience réelle — 3 023 abonnés sur LinkedIn, 3,1 K sur Facebook — sans qu'aucun de ces canaux ne ramène le visiteur vers une page de conversion, tandis que les deux points de contact qui déclenchent réellement un appel au Sénégal, la fiche Google et WhatsApp Business, sont l'un non piloté et l'autre absent du site.",
  "Une bonne nouvelle domine cependant ce diagnostic : la matière première manque beaucoup moins qu'il n'y paraît. Le serveur de GLE héberge déjà 119 fichiers médias — 107 photos de chantiers et d'équipes, et 5 vidéos — dont l'essentiel n'atteint jamais un visiteur. Un film professionnel de deux minutes sur l'électrification rurale de la région de Diourbel est en ligne depuis février 2025 sans être publié sur une seule page. La majeure partie des gains décrits dans ce rapport ne demande donc aucune production nouvelle, seulement de remonter à la surface ce qui existe déjà.",
];

export const recommendationHeadline =
  "Resserrer la charte graphique, renforcer la preuve sociale, et optimiser le SEO local et sectoriel pour capter la demande institutionnelle et privée en énergie solaire au Sénégal et en Afrique de l'Ouest.";

export const strengths = [
  {
    title: "Proposition de valeur claire",
    body: "Le positionnement est annoncé dès la page d'accueil : « Votre partenaire leader dans les énergies renouvelables et les réseaux électriques MT/BT. »",
  },
  {
    title: "Partenaires crédibilisants",
    body: "ASER, AXITEC, ECREEE et ICS figurent sur la page d'accueil — des références fortes, mais sous-exploitées visuellement et jamais rattachées à des projets précis.",
  },
  {
    title: "Navigation logique",
    body: "L'arborescence Accueil / Services / Réalisations / Blog / À propos / Contact correspond aux attentes du secteur et reste lisible.",
  },
  {
    title: "Blog avec du contenu métier",
    body: "Trois articles techniques pertinents (solaire photovoltaïque, extension de réseau BT, innovations énergétiques) : la base d'une stratégie de contenu existe déjà.",
  },
  {
    title: "Formulaire avec pièce jointe",
    body: "L'upload de fichier sur la page contact est adapté au métier : un prospect peut transmettre plans et documents techniques avec sa demande.",
  },
  {
    title: "Bases techniques saines",
    body: "HTTPS actif, meta description et Open Graph présents, balise lang=\"fr-FR\" correctement déclarée, viewport mobile configuré.",
  },
];

export type Finding = {
  num: string;
  title: string;
  severity: "Critique" | "Élevé" | "Moyen";
  stat?: { value: string; label: string };
  body: string[];
};

export const findings: Finding[] = [
  {
    num: "01",
    title: "Identité visuelle dispersée",
    severity: "Élevé",
    stat: { value: "27", label: "couleurs relevées sur la page d'accueil" },
    body: [
      "L'audit technique relève 27 couleurs actives (bleu marine, bleu vif, orange, orange foncé, bleu-violet…) et 12 tailles de police réparties sur 3 familles — apple-system, Roboto et Open Sans — avec des poids 400 à 700 utilisés sans règle.",
      "C'est la signature d'un thème WordPress non personnalisé où chaque bloc importe son propre style. Le site paraît improvisé alors que le secteur BTP-énergie, et notamment les marchés publics, valorise la rigueur et la confiance.",
    ],
  },
  {
    num: "02",
    title: "Portfolio riche en images, pauvre en informations",
    severity: "Critique",
    stat: { value: "59", label: "mots sur la fiche du projet Camberène" },
    body: [
      "Huit fiches projet sont publiées, et chacune contient déjà six à sept photos de chantier authentiques. Le problème n'est donc pas l'absence de matière visuelle, mais l'absence de texte autour : la fiche du projet Camberène compte 59 mots, celle de l'électrification rurale 97 mots. Aucune ne donne la puissance installée en kWc, le client, le maître d'ouvrage, la durée du chantier, ni le nombre de foyers ou de villages raccordés.",
      "La page « Nos réalisations » n'affiche que trois fiches à la fois : les cinq autres ne sont accessibles qu'en passant par la pagination, à deux clics ou plus de l'accueil. La page d'accueil, elle, ne montre aucune de ces photos de chantier.",
      "Pour une entreprise dont l'argument central est l'expérience — « 23+ projets réalisés, 8+ en cours » — c'est le point le plus pénalisant. Les visiteurs, souvent des décideurs institutionnels ou des bailleurs, cherchent des preuves chiffrées avant de prendre contact. Les images existent : il manque les données qui les transforment en références.",
    ],
  },
  {
    num: "03",
    title: "Formulaire peu orienté conversion",
    severity: "Élevé",
    body: [
      "Un formulaire unique et générique (nom, email, téléphone, « comment nous avez-vous connu ? », demande libre) traite indifféremment trois intentions très différentes : devis solaire résidentiel ou tertiaire, appel d'offres institutionnel, partenariat fournisseur.",
      "Un seul appel à l'action — « Contactez-nous » — est répété sur tout le site, sans variation selon le profil du visiteur ni promesse de délai de réponse.",
    ],
  },
  {
    num: "04",
    title: "SEO et visibilité locale sous-exploités",
    severity: "Élevé",
    body: [
      "Le titre de la page d'accueil, « Accueil - énergies renouvelables., électricité », est générique : il n'inclut ni la localisation (Dakar, Sénégal) ni la marque GLE, ce qui prive le site des recherches locales du type « énergie solaire Dakar » ou « réseau MT/BT Sénégal ».",
      "Aucune donnée structurée LocalBusiness n'est repérée, ce qui empêche tout affichage enrichi dans Google (adresse, horaires, avis). Les requêtes institutionnelles à fort potentiel — électrification rurale, appels d'offres énergie, programmes ASER — ne sont pas ciblées alors que l'entreprise réalise précisément ce type de projets.",
      "Le blog, avec trois articles depuis fin 2024, ne construit pas d'autorité organique dans la durée.",
    ],
  },
  {
    num: "05",
    title: "Accessibilité et hygiène technique",
    severity: "Moyen",
    body: [
      "Un lien et un bouton sans texte accessible sont détectés — vraisemblablement des icônes de réseaux sociaux sans aria-label — ce qui pénalise à la fois l'accessibilité et le référencement.",
      "24 alertes navigateur liées à des cookies tiers (Google) apparaissent sans bandeau de consentement visible : un risque de non-conformité si le site s'adresse à une audience européenne ou à des bailleurs internationaux.",
      "Douze valeurs de border-radius différentes cohabitent, autre symptôme de l'absence de design system.",
    ],
  },
  {
    num: "06",
    title: "Expérience mobile perfectible",
    severity: "Moyen",
    body: [
      "Sur mobile, les blocs de services s'empilent correctement mais restent très saturés (orange vif, bleu vif) sans hiérarchie claire entre titre, sous-titre et appel à l'action.",
      "Le premier écran mobile est dominé par des blocs de couleur pleine largeur sans photo, ce qui rend le début de la navigation peu engageant avant d'atteindre le contenu réellement informatif.",
    ],
  },
];

export type Shot = {
  src: string;
  caption: string;
  label: string;
  frame: "desktop" | "mobile";
};

export const evidence: Shot[] = [
  {
    src: "/images/home-hero.png",
    caption:
      "Page d'accueil, desktop — le hero occupe presque tout l'écran avec un titre en deux poids de police et un seul appel à l'action peu visible.",
    label: "Accueil / desktop",
    frame: "desktop",
  },
  {
    src: "/images/home-mid.png",
    caption:
      "Section partenaires et statistiques — logos alignés sans lien vers les projets concernés, et cinq teintes différentes cohabitent sur une même hauteur d'écran.",
    label: "Accueil / partenaires",
    frame: "desktop",
  },
  {
    src: "/images/home-mobile.png",
    caption:
      "Vue mobile de l'accueil — blocs de couleur pleine largeur empilés, logos partenaires réduits, et quatre teintes de texte différentes sur une seule hauteur d'écran.",
    label: "Accueil / mobile",
    frame: "mobile",
  },
];

export const mediaIntro = [
  "Le constat le plus frappant de cet audit n'est pas un manque, c'est un gaspillage. La médiathèque du serveur de globalengineering.sn contient 119 fichiers — 107 photos et 5 vidéos — dont une grande partie n'atteint jamais un visiteur. Les images ci-dessous sont toutes des fichiers réels récupérés depuis le site de GLE : chantiers d'éclairage public, centrales solaires, salles d'onduleurs, équipes en intervention.",
  "Aucune stratégie de contenu à produire n'est nécessaire pour corriger cela. Le matériel est déjà là, il est de bonne qualité, et il documente précisément ce que les décideurs institutionnels cherchent à vérifier. Il suffit de le remonter à la surface.",
];

export const mediaStats = [
  { value: "119", label: "fichiers médias", note: "107 photos, 5 vidéos, 7 documents" },
  { value: "0", label: "vidéo sur l'accueil", note: "ni sur Services ou À propos" },
  { value: "17", label: "logos partenaires", note: "4 visibles à la fois en carrousel" },
  { value: "8", label: "fiches projet illustrées", note: "3 visibles avant pagination" },
];

export type VideoAsset = {
  src: string;
  poster: string;
  captions: string;
  title: string;
  meta: string;
  status: "Diffusée en profondeur" | "Jamais diffusée";
  note: string;
  portrait?: boolean;
};

export const videoAssets: VideoAsset[] = [
  {
    src: "/videos/diourbel-electrification-2025.mp4",
    captions: "/videos/diourbel-electrification-2025.vtt",
    poster: "/images/posters/diourbel-electrification-2025.jpg",
    title: "Électrification rurale — région de Diourbel",
    meta: "2 min 09 · janvier 2025 · tournage professionnel",
    status: "Jamais diffusée",
    note: "Un reportage monté avec habillage graphique et bandeaux de localisation — « Diourbel, arrondissement de Ndindy » — qui suit les équipes jusqu'aux raccordements de nuit. C'est la seule vidéo de facture professionnelle du lot. Hébergée sur le serveur depuis février 2025, elle n'est intégrée sur aucune des 21 pages du site : l'actif le plus précieux de GLE est aussi le seul qui ne soit jamais montré.",
  },
  {
    src: "/videos/eclairage-diouloulou.mp4",
    captions: "/videos/eclairage-diouloulou.vtt",
    poster: "/images/posters/eclairage-diouloulou.jpg",
    title: "Autopont de Diouloulou — pose des réseaux",
    meta: "0 min 17 · novembre 2024 · format vertical",
    status: "Diffusée en profondeur",
    note: "Terrassement et pose de fourreaux pour l'alimentation de l'éclairage : tranchée, gaine déroulée, pelle mécanique. Intégrée uniquement sur la fiche projet correspondante, accessible via la deuxième page de la pagination des réalisations.",
    portrait: true,
  },
  {
    src: "/videos/electrification-rurale.mp4",
    captions: "/videos/electrification-rurale.vtt",
    poster: "/images/posters/electrification-rurale.jpg",
    title: "Montage de réseau rural en plein champ",
    meta: "0 min 15 · novembre 2024 · format vertical",
    status: "Diffusée en profondeur",
    note: "Poteau béton en place et déroulage de conducteur par deux techniciens. Présente sur une fiche projet, absente de la page d'accueil et de la page Services qui décrivent pourtant cette activité.",
    portrait: true,
  },
  {
    src: "/videos/tirage-cable.mp4",
    captions: "/videos/tirage-cable.vtt",
    poster: "/images/posters/tirage-cable.jpg",
    title: "Tirage de câble — Front de Terre",
    meta: "0 min 10 · novembre 2024",
    status: "Diffusée en profondeur",
    note: "Tirage en tranchée sous l'ouvrage, dévidoir et engin de chantier sur place. Séquence de savoir-faire technique idéale pour illustrer la page Services : elle n'y figure pas.",
  },
  {
    src: "/videos/eclairage-bourguiba.mp4",
    captions: "/videos/eclairage-bourguiba.vtt",
    poster: "/images/posters/eclairage-bourguiba.jpg",
    title: "Pose de luminaires — OA-14 Bourguiba",
    meta: "0 min 13 · novembre 2024",
    status: "Diffusée en profondeur",
    note: "Deux techniciens fixent les luminaires sous l'ouvrage depuis une nacelle élévatrice — une image de moyens et de méthode. Elle aussi cantonnée à la troisième page de navigation.",
  },
];

export type PhotoAsset = {
  src: string;
  caption: string;
  span?: boolean;
};

export const photoAssets: PhotoAsset[] = [
  {
    src: "/images/gle/IMG-20241014-WA0059-1536x1023.jpg",
    caption:
      "Autopont éclairé en service de nuit — le type d'image qui prouve un chantier livré et fonctionnel.",
    span: true,
  },
  {
    src: "/images/gle/IMG-20240930-WA0131.jpg",
    caption: "Champ de panneaux photovoltaïques au sol, installation solaire en exploitation.",
  },
  {
    src: "/images/gle/IMG-20241017-WA0033.jpg",
    caption: "Salle technique : onduleurs et parc de batteries câblés et mis en service.",
  },
  {
    src: "/images/gle/IMG-20241014-WA0060-1536x1023.jpg",
    caption: "Techniciens GLE en intervention sous l'ouvrage, éclairage en fonctionnement.",
  },
  {
    src: "/images/gle/IMG-20241014-WA0067-1536x1023.jpg",
    caption: "Pose de candélabres sur une promenade urbaine — éclairage public en cours de montage.",
  },
  {
    src: "/images/gle/IMG-20241026-WA0156.jpg",
    caption: "Visite de réception de chantier en tenue de sécurité, voirie et éclairage terminés.",
    span: true,
  },
  {
    src: "/images/gle/AZFC8051-1536x1024.jpg",
    caption:
      "Photo d'équipe complète en tenue GLE : la démonstration visuelle des effectifs mobilisables.",
    span: true,
  },
  {
    src: "/images/gle/AZFC7927-1536x1024.jpg",
    caption: "Briefing d'équipe — utile pour une page À propos qui incarne l'entreprise.",
  },
  {
    src: "/images/gle/AZFC7980-1-1536x1024.jpg",
    caption: "Personnel technique rassemblé, uniformes et identité visuelle cohérents sur le terrain.",
  },
];

export const partnerLogos = [
  { src: "/images/partners/Senelec.jpg", name: "Senelec", shown: false },
  { src: "/images/partners/ASER.png", name: "ASER", shown: true },
  { src: "/images/partners/PUDC.png", name: "PUDC", shown: false },
  { src: "/images/partners/Ageroute.jpeg", name: "Ageroute", shown: true },
  { src: "/images/partners/ECREEE.png", name: "ECREEE", shown: true },
  { src: "/images/partners/Axitec.png", name: "Axitec", shown: true },
  { src: "/images/partners/ICS.png", name: "ICS", shown: false },
  { src: "/images/partners/Plan-international.png", name: "Plan International", shown: false },
  { src: "/images/partners/Vivo-Energy.png", name: "Vivo Energy", shown: false },
  { src: "/images/partners/Sar.png", name: "SAR", shown: false },
  { src: "/images/partners/Enda-energie.jpg", name: "Enda Énergie", shown: false },
  { src: "/images/partners/Lvia.jpg", name: "LVIA", shown: false },
  { src: "/images/partners/Excellec.jpg", name: "Excellec", shown: false },
  { src: "/images/partners/AFEER.png", name: "AFEER", shown: false },
  { src: "/images/partners/Matiere-senegal.jpg", name: "Matière Sénégal", shown: false },
  { src: "/images/partners/SEM.jpg", name: "SEM", shown: false },
  { src: "/images/partners/tecogas.jpg", name: "Tecogas", shown: false },
];

export const mediaActions = [
  "Remonter le film de Diourbel en tête de page d'accueil, en arrière-plan silencieux du hero ou en lecture au clic derrière une vignette. C'est l'action la plus rentable du site : l'actif est déjà produit et payé.",
  "Illustrer chaque service de la page Services avec une des séquences courtes existantes — tirage de câble, pose de candélabres, mise en service d'onduleurs.",
  "Supprimer la pagination de la page « Nos réalisations » pour afficher les huit fiches projet ensemble, avec une photo de couverture par projet.",
  "Compléter chaque fiche projet avec un encadré de données : client, localisation, puissance installée, foyers ou villages raccordés, durée du chantier, année de livraison.",
  "Remplacer le carrousel de partenaires par une grille statique affichant les 17 logos simultanément : Senelec, Ageroute, le PUDC et Vivo Energy portent autant de crédibilité que les quatre actuellement visibles.",
  "Utiliser les photos d'équipe sur la page À propos, et créer une galerie « Nos chantiers » alimentée par les 107 photos déjà hébergées.",
];

export const presenceIntro = [
  "Un site ne se visite pas tout seul : il se remplit par ce qui l'entoure. Nous avons donc audité tout ce qui, hors du site, envoie ou devrait envoyer du trafic vers globalengineering.sn — réseaux sociaux, fiche Google, annuaires professionnels, plateformes de marchés publics, contenu éditorial.",
  "Le constat est le même que pour les médias : les actifs existent, mais ils ne travaillent pas ensemble. GLE a réuni plus de 6 000 abonnés sur LinkedIn et Facebook sans qu'un seul de ces comptes ne pousse vers une page de conversion du site. À l'inverse, les deux canaux qui décident réellement d'un appel entrant au Sénégal — la fiche Google et WhatsApp Business — sont respectivement non maîtrisée et totalement absente.",
];

export const presenceStats = [
  { value: "3 023", label: "abonnés LinkedIn", note: "le meilleur actif marketing de GLE" },
  { value: "61", label: "abonnés Instagram", note: "pour 79 publications produites" },
  { value: "1", label: "avis sur la page Facebook", note: "« Not yet rated »" },
  { value: "0", label: "lien WhatsApp sur le site", note: "canal n° 1 du B2B sénégalais" },
];

export type Channel = {
  name: string;
  handle: string;
  audience: string;
  state: "Actif" | "Sous-exploité" | "Abandonné" | "Inexistant" | "Non maîtrisé";
  note: string;
};

export const channels: Channel[] = [
  {
    name: "LinkedIn",
    handle: "company/globalengineering-sarl",
    audience: "3 023 abonnés",
    state: "Sous-exploité",
    note: "C'est le canal le plus aligné avec la cible de GLE : ASER, Ageroute, Senelec, bailleurs, directions techniques. La page publie, mais le site ne l'affiche qu'en pied de page, ne reprend aucune de ses publications, et le balisage structuré du site ne la déclare même pas.",
  },
  {
    name: "Facebook",
    handle: "globalengineeringsarl",
    audience: "3,1 K abonnés",
    state: "Actif",
    note: "Page la plus suivie et la plus vivante (photos de chantiers, reels). Mais l'engagement reste faible au regard de l'audience — une douzaine de réactions par publication — et la page affiche « Not yet rated » avec un seul avis, alors que Facebook est encore un réflexe de vérification au Sénégal.",
  },
  {
    name: "Instagram",
    handle: "global_engineerings_officiel",
    audience: "61 abonnés · 79 publications",
    state: "Sous-exploité",
    note: "L'effort de production est réel — 79 publications — pour une audience quasi nulle. Le compte ne suit que 5 comptes et n'est relié ni aux partenaires, ni aux institutions, ni aux clients. C'est du contenu payé deux fois : produit, puis jamais vu.",
  },
  {
    name: "X (Twitter)",
    handle: "@SarlEngineering",
    audience: "activité arrêtée vers 2022",
    state: "Abandonné",
    note: "Le compte existe toujours et remonte dans les recherches sur « Global Engineering Sarl », mais il n'est plus alimenté depuis environ quatre ans et n'est pas relié au site. Un compte figé donne l'image d'une entreprise qui s'est arrêtée.",
  },
  {
    name: "YouTube",
    handle: "aucune chaîne identifiée",
    audience: "—",
    state: "Inexistant",
    note: "GLE possède cinq vidéos de chantier, dont un film professionnel de 2 min 09 (section 05), et aucune chaîne pour les héberger. C'est aussi le deuxième moteur de recherche mondial, et le seul endroit où une vidéo continue d'être trouvée des années après sa publication.",
  },
  {
    name: "Google Business Profile",
    handle: "158 Sacré Cœur VDN Extension, Dakar",
    audience: "≈ 9 avis, note ≈ 4,2/5 (source annuaire)",
    state: "Non maîtrisé",
    note: "Une fiche existe et remonte dans les annuaires, mais elle n'est manifestement pas pilotée : très peu d'avis, aucune photo récente des chantiers, et au moins un doublon mal orthographié sur les cartes (« Globale ingrering », Sacré Cœur 3 Extension, sans numéro de téléphone) qui dilue les recherches locales.",
  },
  {
    name: "WhatsApp Business",
    handle: "aucun lien wa.me sur le site",
    audience: "—",
    state: "Inexistant",
    note: "Au Sénégal, une demande de devis part de WhatsApp avant de partir d'un formulaire. Le site n'offre qu'un numéro fixe, un email et un formulaire générique : la friction est maximale sur mobile.",
  },
  {
    name: "Marchés publics (ARCOP / marchespublics.sn)",
    handle: "marchespublics.sn",
    audience: "portail national des appels d'offres",
    state: "Sous-exploité",
    note: "L'essentiel du chiffre d'affaires du secteur passe par le portail national des marchés publics et les plans de passation. Le site de GLE n'affiche ni page « Appels d'offres et partenariats », ni références classées par autorité contractante, ni dossier de qualification téléchargeable — les trois documents qu'un acheteur public cherche avant de retenir une entreprise.",
  },
  {
    name: "Annuaires B2B régionaux",
    handle: "Go Africa Online et équivalents",
    audience: "aucune fiche sénégalaise identifiée",
    state: "Inexistant",
    note: "Nos recherches ne font ressortir aucune fiche GLE Sénégal sur les grands annuaires B2B d'Afrique de l'Ouest — seules des sociétés homonymes du Togo et du Ghana apparaissent. En revanche, des agrégateurs recopient déjà les coordonnées de GLE sans son contrôle : l'information circule, mais mal.",
  },
  {
    name: "Blog du site",
    handle: "globalengineering.sn/blog",
    audience: "3 articles depuis fin 2024",
    state: "Sous-exploité",
    note: "Trois articles en presque deux ans ne construisent aucune position organique. C'est pourtant la matière qui alimenterait LinkedIn, et la seule façon de capter les recherches « électrification rurale Sénégal », « installation solaire entreprise Dakar », « réglementation ASER ».",
  },
];

export type PresenceTrack = {
  label: string;
  title: string;
  impact: "Impact élevé" | "Impact moyen";
  effort: "Effort faible" | "Effort moyen" | "Effort faible à moyen";
  actions: string[];
};

export const presenceTracks: PresenceTrack[] = [
  {
    label: "Chantier 1",
    title: "Reprendre la main sur la fiche Google",
    impact: "Impact élevé",
    effort: "Effort faible",
    actions: [
      "Revendiquer la fiche Google Business Profile, compléter catégories, horaires, zone d'intervention et description, et signaler le doublon mal orthographié pour fusion ou suppression.",
      "Publier une dizaine des photos de chantier déjà hébergées (section 05) sur la fiche, puis une publication Google par mois.",
      "Mettre en place une demande d'avis systématique en fin de chantier — un SMS ou un WhatsApp avec le lien direct. Objectif : 20 à 30 avis en six mois, contre une dizaine aujourd'hui.",
      "Aligner le NAP (nom, adresse, téléphone) à l'identique sur le site, Google, Facebook, LinkedIn et les annuaires : c'est le premier signal de confiance local pour Google.",
    ],
  },
  {
    label: "Chantier 2",
    title: "Faire de LinkedIn le canal B2B principal",
    impact: "Impact élevé",
    effort: "Effort moyen",
    actions: [
      "Cadence d'une à deux publications par semaine, centrées sur les chantiers livrés : localisation, puissance installée, villages ou foyers raccordés, photo. La matière est déjà sur le serveur.",
      "Mentionner systématiquement les donneurs d'ordre et partenaires — ASER, Ageroute, Senelec, PUDC, ECREEE — pour capter leurs audiences institutionnelles.",
      "Faire relayer chaque publication par la direction et les ingénieurs : sur LinkedIn, la portée des profils dépasse toujours celle de la page.",
      "Ajouter la page LinkedIn au balisage sameAs du site, aujourd'hui limité à Facebook, et afficher les dernières publications sur la page d'accueil.",
    ],
  },
  {
    label: "Chantier 3",
    title: "Ouvrir une chaîne YouTube et distribuer les vidéos",
    impact: "Impact moyen",
    effort: "Effort faible",
    actions: [
      "Créer la chaîne et y publier les cinq vidéos existantes avec des titres orientés recherche : « Électrification rurale — région de Diourbel », « Pose de luminaires — OA-14 Bourguiba ».",
      "Intégrer le film de Diourbel sur la page d'accueil et les séquences courtes sur les pages Services : le site gagne en preuve, la chaîne gagne en vues.",
      "Découper les rushes en formats verticaux courts pour Instagram et Facebook, où la production existe déjà mais tourne à vide.",
    ],
  },
  {
    label: "Chantier 4",
    title: "Se rendre visible sur le circuit des marchés publics",
    impact: "Impact élevé",
    effort: "Effort faible à moyen",
    actions: [
      "Créer sur le site une page « Appels d'offres et partenariats » : domaines d'intervention, agréments, capacités techniques, dossier de qualification en PDF téléchargeable, contact dédié.",
      "Classer les réalisations par autorité contractante (ASER, Ageroute, collectivités, privés) pour qu'un acheteur public retrouve immédiatement une référence comparable à son marché.",
      "Organiser une veille hebdomadaire sur le portail national des marchés publics et les plans de passation des structures énergie, et publier les marchés remportés — un marché annoncé est aussi un argument commercial.",
      "Créer des fiches maîtrisées sur les annuaires B2B régionaux, avec lien vers le site, pour occuper les recherches où GLE est aujourd'hui absente.",
    ],
  },
  {
    label: "Chantier 5",
    title: "Contenu éditorial et acquisition payante ciblée",
    impact: "Impact moyen",
    effort: "Effort moyen",
    actions: [
      "Passer de 3 articles en deux ans à deux par mois, sur des sujets à demande réelle : coût d'une installation solaire pour une PME à Dakar, entretien des panneaux en climat sahélien, fonctionnement d'un marché d'électrification rurale.",
      "Réutiliser chaque article en trois publications LinkedIn : un seul effort rédactionnel alimente le blog, le SEO et le réseau social.",
      "Réserver l'acquisition payante à un budget test mesurable — LinkedIn pour les décideurs institutionnels, Meta pour la demande PME et résidentielle — et ne l'ouvrir qu'après la refonte des appels à l'action, sinon le trafic acheté se perd sur un formulaire générique.",
      "Poser un suivi minimal avant toute dépense : Google Analytics et Search Console reliés, liens sociaux marqués en UTM, conversions du formulaire et des clics WhatsApp comptabilisées.",
    ],
  },
];

export type Recommendation = {
  priority: string;
  title: string;
  impact: "Impact élevé" | "Impact moyen";
  effort: "Effort faible" | "Effort moyen" | "Effort faible à moyen";
  actions: string[];
};

export const recommendations: Recommendation[] = [
  {
    priority: "Priorité 1",
    title: "Design visuel et charte graphique",
    impact: "Impact élevé",
    effort: "Effort moyen",
    actions: [
      "Réduire la palette à une couleur primaire (le bleu marine #244790 déjà présent), une couleur d'accent (l'orange #FFA300 déjà présent) et trois neutres — blanc, gris foncé pour le texte, gris clair pour les fonds. Supprimer les bleus et oranges secondaires redondants.",
      "Fixer une échelle typographique de 5 à 7 tailles maximum (14 / 16 / 18 / 24 / 32 / 48 px), avec une police de titres et une police de corps, en abandonnant apple-system par défaut.",
      "Standardiser les rayons de bordure : 8 px pour les cartes, pill pour les boutons. Deux valeurs suffisent.",
      "Remplacer les blocs de couleur plate par de vraies photos de chantiers et d'équipe, en hero et en fond de section, pour asseoir la crédibilité terrain. Ces photos n'ont pas à être produites : 107 sont déjà hébergées sur le serveur du site (voir section 05).",
    ],
  },
  {
    priority: "Priorité 2",
    title: "Portfolio de réalisations étoffé",
    impact: "Impact élevé",
    effort: "Effort moyen",
    actions: [
      "Transformer « Nos réalisations » en véritables études de cas : 3 à 5 photos par projet, puissance installée en kWc, localisation, client (ASER, mairie, entreprise privée), durée et résultat chiffré — « 133 villages électrifiés », « X foyers raccordés ».",
      "Ajouter des filtres par type de projet (solaire photovoltaïque, réseaux MT/BT, éclairage public, éolien) pour que chaque visiteur trouve vite une référence comparable à son besoin.",
      "Rattacher les logos de clients et partenaires institutionnels — ASER, ECREEE, ICS, déjà disponibles — aux projets qu'ils concernent, plutôt que de les afficher en bandeau générique.",
    ],
  },
  {
    priority: "Priorité 3",
    title: "Formulaire et appels à l'action différenciés",
    impact: "Impact élevé",
    effort: "Effort faible",
    actions: [
      "Créer trois parcours distincts : « Demander un devis solaire » pour les particuliers et entreprises, « Appel d'offres / partenariat institutionnel », et « Devenir fournisseur ».",
      "Ajouter un numéro WhatsApp Business cliquable, très utilisé au Sénégal, en complément du téléphone et de l'email : le site ne contient aujourd'hui aucun lien wa.me, alors que c'est le premier réflexe de contact sur mobile.",
      "Afficher une confirmation claire après envoi du formulaire — « Nous répondons sous 48 h » — pour rassurer le prospect.",
    ],
  },
  {
    priority: "Priorité 4",
    title: "SEO local et sectoriel",
    impact: "Impact élevé",
    effort: "Effort faible à moyen",
    actions: [
      "Réécrire titres et meta descriptions selon le modèle : [Sujet] | GLE — Énergies renouvelables Dakar, Sénégal.",
      "Ajouter les données structurées LocalBusiness et compléter l'entité Organization : le balisage Yoast en place ne déclare ni adresse, ni téléphone, ni horaires, et son sameAs ne cite que Facebook — LinkedIn et Instagram, pourtant en pied de page, en sont absents.",
      "Publier un à deux articles par mois sur des sujets à forte demande locale : électrification rurale, appels d'offres énergie, réglementation ASER, entretien des panneaux en climat sahélien.",
      "Créer et optimiser une fiche Google Business Profile reliée au site (158, Sacré Cœur VDN Extension, Dakar) pour capter les recherches locales et collecter des avis. Une fiche existe déjà mais n'est pas pilotée, et un doublon la concurrence sur les cartes : le détail est en section 06.",
    ],
  },
  {
    priority: "Priorité 5",
    title: "Conformité et accessibilité",
    impact: "Impact moyen",
    effort: "Effort faible",
    actions: [
      "Ajouter des aria-label sur les icônes de réseaux sociaux et tous les boutons sans texte.",
      "Mettre en place un bandeau de consentement cookies conforme, indispensable si le site s'adresse à des bailleurs internationaux ou à des visiteurs européens.",
      "Vérifier les contrastes de texte sur fonds vifs — orange sur blanc, blanc sur bleu clair — pour atteindre le niveau WCAG AA.",
    ],
  },
  {
    priority: "Priorité 6",
    title: "Performance et maintenance technique",
    impact: "Impact moyen",
    effort: "Effort faible",
    actions: [
      "Auditer et retirer les plugins et scripts WordPress non essentiels : le nombre de cookies tiers Google relevés suggère plusieurs scripts analytics redondants.",
      "Compresser et redimensionner les images, notamment les visuels solaires pleine largeur, et servir du WebP.",
      "Activer un cache et un CDN si l'hébergement ne le fait pas déjà, pour absorber la variabilité de connectivité en Afrique de l'Ouest.",
    ],
  },
];

export const phases = [
  {
    phase: "Phase 1",
    name: "Fondations design",
    actions:
      "Charte graphique resserrée (couleurs, typo, rayons), refonte des sections hero et services",
    duration: "1 à 2 semaines",
    impact: "Image de marque cohérente et professionnelle",
  },
  {
    phase: "Phase 2",
    name: "Preuve sociale",
    actions: "Portfolio projets enrichi (photos, chiffres, filtres), section témoignages clients",
    duration: "2 à 3 semaines",
    impact: "Conversion des visiteurs qualifiés",
  },
  {
    phase: "Phase 3",
    name: "Conversion",
    actions: "Appels à l'action différenciés, WhatsApp, formulaire multi-intention",
    duration: "3 à 5 jours",
    impact: "Plus de demandes de devis qualifiées",
  },
  {
    phase: "Phase 4",
    name: "Présence en ligne",
    actions:
      "Reprise de la fiche Google et des avis, cadence LinkedIn, chaîne YouTube, page « Appels d'offres », fiches annuaires",
    duration: "2 semaines puis en continu",
    impact: "Trafic entrant et crédibilité hors du site",
  },
  {
    phase: "Phase 5",
    name: "SEO & contenu",
    actions:
      "Meta-données, données structurées et sameAs complet, calendrier éditorial de deux articles par mois, suivi analytics et UTM",
    duration: "En continu",
    impact: "Trafic organique local et sectoriel",
  },
  {
    phase: "Phase 6",
    name: "Conformité & performance",
    actions: "Accessibilité, consentement cookies, optimisation images et scripts",
    duration: "3 à 5 jours",
    impact: "Conformité et temps de chargement",
  },
];

export const methodology = [
  "Analyse réalisée par navigation directe du site le 13 septembre 2026. Les pages Accueil, Nos services, Nos réalisations, À propos, Blog et Contact ont été inspectées : contenu textuel, captures desktop et mobile, et audit technique automatisé des couleurs, typographies, espacements, accessibilité et SEO on-page.",
  "L'inventaire des médias de la section 05 a été établi en recensant les 21 URL déclarées dans le sitemap XML du site, puis en interrogeant la médiathèque publique du serveur : 119 fichiers, dont 107 photos et 5 vidéos. Chaque page a ensuite été analysée pour vérifier quels fichiers y sont réellement intégrés, ce qui a permis d'identifier les médias hébergés mais jamais diffusés. Les photos et vidéos reproduites dans ce rapport sont les fichiers originaux de GLE, redimensionnés et compressés pour l'affichage web.",
  "L'audit de présence en ligne (section 06) a porté sur dix canaux externes. Les comptes sociaux déclarés par le site ont été relevés dans son code, puis chaque compte a été consulté publiquement le 13 septembre 2026 pour en mesurer l'audience et l'activité. Les comptes non déclarés par le site ont été retrouvés par recherche sur le nom de l'entreprise. Le balisage structuré du site a été extrait et analysé, ce qui a révélé une entité Organization sans adresse ni téléphone et un sameAs limité à Facebook.",
  "Aucune donnée d'analytics interne (trafic réel, taux de conversion) n'était disponible. Les recommandations s'appuient sur les standards UX et SEO du secteur BTP-énergie et sur l'observation directe de la structure et des contenus publiés.",
];

export const limits = [
  "Pas d'accès aux données Google Analytics ou Search Console : la priorisation repose sur les bonnes pratiques et l'observation, non sur des données de trafic réel.",
  "Les temps de chargement réels mesurés depuis le Sénégal (latence locale) n'ont pas été testés et pourraient révéler des besoins de performance supplémentaires.",
  "Analyse limitée aux pages publiques : aucune vérification effectuée dans l'administration WordPress.",
  "Les audiences sociales sont celles affichées publiquement le 13 septembre 2026 ; la note et le nombre d'avis Google proviennent d'un annuaire tiers, la fiche Google n'ayant pas pu être consultée directement pendant l'audit. Ces volumes sont à reconfirmer depuis les comptes administrés par GLE.",
];
