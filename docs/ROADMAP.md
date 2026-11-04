# Feuille de route

## Phase 1 — Fondations et premier rendu (en cours)
- [x] Initialiser React, TypeScript et Vite.
- [x] Définir un modèle de carte interne validé.
- [x] Rechercher les cartes via Scryfall en privilégiant le français.
- [x] Analyser les symboles de règles et les retours à la ligne.
- [x] Produire un premier rendu SVG et l'exporter.
- [ ] Ajouter un corpus de cartes de référence et des tests visuels.
- [ ] Améliorer la gestion des erreurs réseau et la limitation de débit.

## Phase 2 — Fidélité typographique et symboles
- Mesurer le texte avec les métriques des polices réellement utilisées.
- Calculer automatiquement la taille de police et l'interlignage.
- Signaler tout débordement sans jamais tronquer silencieusement le texte.
- Remplacer les caractères provisoires des coûts par des glyphes de mana.
- Ajouter les symboles d'activation et les rappels de règles.

## Phase 3 — Familles de cartes et personnalisation
- Concevoir un moteur de mise en page modulaire.
- Prendre en charge les cartes recto-verso, Aventure, Saga et planeswalker.
- Indexer les cadres, textures, polices et autres ressources locales.
- Séparer strictement les données Scryfall des modifications personnelles.

## Phase 4 — Export et application de bureau
- Exporter en PNG haute définition.
- Générer des PDF d'impression à 300 DPI avec fond perdu et traits de coupe.
- Ajouter une base locale SQLite et un cache des cartes et assets.
- Emballer l'application avec Tauri 2.
- Ajouter des tests automatisés et une suite de comparaison visuelle.

## Critères de qualité
- Les données originales récupérées restent intactes.
- Les modifications de l'utilisateur sont stockées séparément.
- Aucun texte de règle ne disparaît en cas de manque de place : le moteur retourne un diagnostic.
- Les exports ont des dimensions reproductibles et documentées.
- Les cas multi-visages sont représentés explicitement dans le modèle.
