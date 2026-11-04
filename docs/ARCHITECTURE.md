# Architecture technique

## Principes
1. Le modèle interne ne dépend pas du format de réponse de Scryfall.
2. Les données distantes et les personnalisations utilisateur restent séparées.
3. Le rendu est vectoriel (SVG) pour conserver une géométrie précise.
4. Les layouts sont des stratégies indépendantes du type de carte.
5. Le moteur typographique diagnostique les débordements plutôt que de couper le texte.
6. Les composants d'accès aux données et d'export ne sont pas couplés à l'interface.

## Couches présentes
- **Interface** : React + TypeScript.
- **Validation** : Zod.
- **Données** : client Scryfall, recherche française et normalisation.
- **Règles** : tokeniseur des symboles entre accolades.
- **Typographie** : mesure Canvas lorsque disponible, repli déterministe et recherche dichotomique de taille.
- **Layouts** : registre des familles de cartes et prise en charge des faces.
- **Rendu** : SVG avec couleurs de cadre provisoires.
- **Persistance web** : IndexedDB, repli localStorage.
- **Export** : SVG, PNG 3× et PDF au format physique standard.
- **Tests** : Vitest.

## Cibles de l'architecture complète
- **Application de bureau** : Tauri 2.
- **Persistance bureau** : SQLite avec migrations ; cache fichier pour images et ressources.
- **Assets** : manifeste local versionné (cadres, textures, glyphes, polices).
- **Export raster/PDF** : profils d'impression, fond perdu, traits de coupe et dimensions explicites.
- **Tests visuels** : Playwright pour les parcours et les rendus de référence.

## Dimensions
Le format standard est 63,5 × 88,9 mm (ratio proche de 5:7). Le canevas de travail est 750 × 1050 unités. L'export PNG 3× produit 2250 × 3150 pixels. Le PDF place le rendu dans une page physique de 63,5 × 88,9 mm ; le fond perdu et les traits de coupe restent à implémenter.

## Sécurité et données
- Les textes provenant de Scryfall sont échappés avant insertion dans le SVG.
- Les données de cartes ne sont pas exécutées comme du HTML.
- Le cache local ne contient pas de secrets.
- Les images distantes peuvent être soumises aux restrictions CORS du navigateur.
