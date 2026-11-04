# Feuille de route

## Phase 1 — Fondations et premier éditeur (en cours)
- [x] Initialiser React, TypeScript et Vite.
- [x] Définir un modèle de carte interne validé.
- [x] Rechercher les cartes via Scryfall avec filtre français.
- [x] Préserver les données de cartes multi-faces.
- [x] Analyser les symboles de règles et les retours à la ligne.
- [x] Produire un premier rendu SVG.
- [x] Ajouter un ajustement typographique et un diagnostic de débordement.
- [x] Ajouter une bibliothèque locale IndexedDB avec repli localStorage.
- [x] Ajouter des exports SVG, PNG 3× et PDF au format physique standard.
- [x] Ajouter des tests unitaires et une CI.
- [ ] Valider le pipeline de compilation et corriger tous les défauts détectés.

## Phase 2 — Fidélité des cartes
- [ ] Rendu des symboles de mana et d'activation avec glyphes vectoriels.
- [ ] Layouts dédiés : Aventure, Saga, planeswalker, split, transform, modal DFC, bataille et classe.
- [ ] Rendu des coûts alternatifs, rappels, marqueurs et capacités structurées.
- [ ] Gestion des polices locales et de métriques typographiques reproductibles.
- [ ] Corpus visuel de référence et tests de régression par famille de cartes.

## Phase 3 — Atelier de personnalisation
- [ ] Registre d'assets local : cadres, textures, symboles, polices et masques.
- [ ] Éditeur de cadres et de zones de texte.
- [ ] Séparation des données Scryfall et des surcharges utilisateur.
- [ ] Gestion des projets, favoris, collections et import en lot.
- [ ] Cache d'images et de données, synchronisation et nettoyage.

## Phase 4 — Bureau et impression
- [ ] Portage vers Tauri 2.
- [ ] Base SQLite et migrations.
- [ ] Export PDF avec fond perdu, traits de coupe et profils d'impression.
- [ ] Export PNG à résolution réglable et traitement des images distantes.
- [ ] Packaging Windows, macOS et Linux.
- [ ] Tests de bout en bout et documentation utilisateur.

## Critères de qualité
- Les données sources restent intactes et traçables.
- Les modifications de l'utilisateur sont stockées séparément.
- Aucun texte de règle ne disparaît silencieusement.
- Les dimensions d'export sont documentées et reproductibles.
- Les cartes multi-faces sont représentées explicitement.
- Les ressources graphiques respectent les droits et licences applicables.
