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
- **Données** : client Scryfall, recherche française, normalisation Zod et cache persistant à expiration (12 h).
- **Règles** : tokeniseur des symboles entre accolades.
- **Typographie** : mesure Canvas lorsque disponible, repli déterministe et recherche dichotomique de taille.
- **Layouts** : registre des familles de cartes et prise en charge des faces.
- **Rendu** : moteur `mtg-card` (FeSens) pour les cadres standard, Saga, planeswalker et Aventure ; SVG local de secours pour les layouts non couverts.
- **Assets** : manifeste local et paquet npm FeSens pour les SVG, textures et symboles ; inventaire de licences à compléter.
- **Persistance desktop** : SQLite via le plugin SQL Tauri (cartes, projets et cache Scryfall).
- **Persistance web** : IndexedDB, repli localStorage (cartes, projets et cache Scryfall).
- **Export** : SVG/PNG/PDF. Le rendu FeSens est capturé en PNG haute résolution avant export ; les compositions locales restent vectorielles.
- **Tests** : Vitest.

## Cibles de l'architecture complète
- **Application de bureau** : Tauri 2.
- **Assets** : cadres, textures, glyphes et polices locales avec licences/attributions.
- **Export raster/PDF** : profils d'impression, fond perdu, traits de coupe et dimensions explicites.
- **Tests visuels** : Playwright pour les parcours et les rendus de référence.

## Dimensions
Le format standard est 63,5 × 88,9 mm (ratio proche de 5:7). Le canevas de travail est 750 × 1050 unités. L'export PNG 3× produit 2250 × 3150 pixels. Le PDF respecte le format fini 63,5 × 88,9 mm avec fond perdu réglable et traits de coupe. Les profils CMJN/ICC restent à implémenter.

## Sécurité et données
- Les textes provenant de Scryfall sont échappés avant insertion dans le SVG.
- Les données de cartes ne sont pas exécutées comme du HTML.
- Les chemins d'assets sont contrôlés pour refuser les chemins absolus et les segments parent.
- Les images distantes peuvent être soumises aux restrictions CORS du navigateur.
