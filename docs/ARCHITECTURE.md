# Architecture technique

## Principes
1. Le modèle interne ne dépend pas du format de réponse de Scryfall.
2. Les données distantes et les personnalisations utilisateur sont séparées.
3. Le rendu est vectoriel (SVG) pour conserver une géométrie précise et permettre les exports.
4. Les layouts sont des stratégies indépendantes du type de carte : une carte peut combiner plusieurs caractéristiques.
5. Le moteur typographique doit diagnostiquer le débordement plutôt que couper du texte.

## Couches actuelles
- **Interface** : React + TypeScript.
- **Validation** : Zod.
- **Données** : client HTTP Scryfall, normalisation vers `Card`.
- **Règles** : tokeniseur des symboles entre accolades.
- **Rendu** : générateur SVG expérimental.
- **Export** : téléchargement du SVG généré.

## Cibles de l'architecture complète
- **Application de bureau** : Tauri 2.
- **Persistance** : SQLite, avec cache fichier pour les images et ressources.
- **Assets** : manifeste local versionné (cadres, textures, glyphes, polices).
- **Export raster/PDF** : pipeline dédié, avec dimensions d'impression explicites.
- **Tests** : Vitest pour les unités, Playwright pour les parcours et les rendus de référence.

## Dimensions
Le ratio de carte standard est 63,5 × 88,9 mm (ratio proche de 5:7). Le canevas de travail actuel est 750 × 1050 unités. La conversion d'impression à 300 DPI devra être définie dans le pipeline d'export, et non déduite de la taille CSS de l'aperçu.
