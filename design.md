# Design System — Audit GLE

## Concept

Rapport d'audit consultant, présenté comme un document web long-format. Ton : sobre, technique, crédible — pas une landing page marketing. La structure doit se lire comme un livrable client : numérotation visible, hiérarchie forte, données mises en avant.

Le site reprend les couleurs de marque de Global Engineering (bleu marine + orange) pour que le livrable apparaisse comme fait *pour eux*, mais appliquées avec la discipline qui manque justement à leur site actuel — exactement 2 couleurs de marque, 3 neutres, une échelle typographique fixe. Le site est la démonstration de la recommandation.

## Couleurs

```css
--navy-900: #0E1A33;   /* fonds sombres, sections d'ouverture */
--navy-700: #1B2D52;   /* surfaces sombres secondaires */
--navy: #244790;       /* primaire — marque GLE, titres, liens */
--orange: #FFA300;     /* accent — numéros, badges, soulignés */
--orange-700: #D67524; /* hover sur accent */

--ink: #14181F;        /* texte principal */
--slate: #5A6475;      /* texte secondaire */
--line: #E3E7EE;       /* bordures, séparateurs */
--paper: #FFFFFF;      /* fond principal */
--paper-alt: #F6F8FB;  /* fond de section alterné */
```

Règle : l'orange est réservé aux accents de repérage (numéros de section, badges de priorité, soulignés de titres, puces d'impact). Jamais pour des blocs pleins de grande surface. Le navy porte la structure.

## Typographie

- **Display / titres** : `Sora` (600, 700) — géométrique, technique, adapté à l'ingénierie.
- **Corps / UI** : `Poppins` (400, 500, 600).
- **Données / labels** : `Poppins` 500 avec `letter-spacing: 0.08em` en majuscules pour les eyebrows.

Échelle fixe (7 pas, pas un de plus) :

```
xs   13px  labels, légendes
sm   15px  texte secondaire, notes
base 17px  corps de texte
lg   21px  chapeau, intro de section
xl   28px  titres de sous-section
2xl  40px  titres de section
3xl  64px  titre du rapport (48px en mobile)
```

Interlignage : 1.7 pour le corps, 1.15 pour les titres. Largeur de lecture max 72ch.

## Mise en page

- Colonne de lecture centrée (max 1100px) avec une **navigation latérale collante** à gauche en desktop (≥1280px) listant les 7 sections, masquée en mobile au profit d'une barre supérieure compacte.
- Sections numérotées 01 → 07, numéro en orange, aligné à gauche du titre, dépassant légèrement de la colonne (grid-breaking discret).
- Alternance de fonds : `paper` / `paper-alt`, avec les sections d'ouverture et de synthèse sur `navy-900`.
- Cartes de constats : fond blanc, bordure `line` 1px, pas d'ombre portée lourde, `border-radius: 8px` — deux valeurs de radius sur tout le site (8px cartes, 999px pills).
- Captures d'écran du site audité présentées dans un cadre navette avec légende, comme des pièces à conviction.

## Composants

- **Eyebrow** : majuscules, 13px, letter-spacing large, orange ou slate.
- **Badge priorité** : pill, fond orange 12% / texte orange-700 pour "Impact élevé", fond slate 8% / texte slate pour "Effort faible".
- **Carte de constat** : numéro, titre, corps, et le cas échéant une donnée chiffrée mise en exergue (ex. "27 couleurs").
- **Stat block** : chiffre en Sora 40px navy, label 13px slate en majuscules.
- **Tableau de phases** : lignes fines, en-tête navy, phase en orange, pas de zébrage.

## Motion

Une seule orchestration au chargement : les blocs de la section d'ouverture apparaissent en fondu + translation de 12px, décalés de 80ms. Au scroll, les sections se révèlent une fois (fade + 16px) via IntersectionObserver, sans rejouer. Pas d'animation sur les survols autres que couleur de lien et fond de bouton (150ms).

## Anti-patterns à éviter ici

- Pas de dégradé violet/bleu sur blanc.
- Pas de grille de cartes arrondies uniformes pour les recommandations — elles sont hiérarchisées, donc affichées en liste priorisée.
- Pas d'icônes décoratives sans fonction : une icône n'apparaît que si elle porte une information (type de constat, sévérité).
