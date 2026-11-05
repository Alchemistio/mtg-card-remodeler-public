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
- [x] Ajouter une persistance SQLite dans l'application Tauri.
- [x] Ajouter des exports SVG, PNG 3× et PDF au format physique standard.
- [x] Ajouter un shell desktop Tauri 2 et un manifeste d'assets.
- [x] Ajouter des tests unitaires et une CI web.
- [x] Valider la CI web, la compilation TypeScript et la vérification Tauri/Rust sur la branche principale avant l’intégration du moteur FeSens.
- [ ] Revalider la CI après l’intégration du moteur FeSens.

## Phase 2 — Fidélité des cartes
- [x] Rendu inline des symboles de mana et d'activation sous forme de glyphes vectoriels provisoires.
- [x] Compositions initiales pour Saga, split, planeswalker, recto-verso et bataille dans le moteur local.
- [x] Intégrer le moteur FeSens pour les cadres classique, Saga, planeswalker et Aventure.
- [ ] Layouts complets split, bataille, classe, prototype et modal DFC ; uniformiser le rendu des layouts pris en charge par les deux moteurs.
- [ ] Rendu des coûts alternatifs, rappels, marqueurs et capacités structurées.
- [ ] Gestion des polices locales et de métriques typographiques reproductibles.
- [ ] Corpus visuel de référence et tests de régression par famille de cartes.

## Phase 3 — Atelier de personnalisation
- [x] Ajouter une dépendance versionnée au paquet de cadres FeSens (SVG, textures et glyphes).
- [ ] Registre d’assets local unifié : cadres, textures, symboles, polices et masques, avec inventaire de licences.
- [ ] Éditeur de cadres et de zones de texte.
- [ ] Séparation des données Scryfall et des surcharges utilisateur.
- [ ] Gestion des projets, favoris, collections et import en lot.
- [ ] Cache d'images et de données, synchronisation et nettoyage.

## Phase 4 — Export et distribution
- [x] Export PDF avec fond perdu de 0/3/5 mm et traits de coupe.
- [ ] Profils d’impression, CMJN/ICC et marges de sécurité propres aux imprimeurs.
- [x] Export PNG haute définition 3× pour les rendus SVG locaux et FeSens.
- [ ] Réglage de résolution et pipeline d’images distantes plus complet.
- [ ] Packaging Windows, macOS et Linux.
- [ ] Tests de bout en bout et documentation utilisateur.

## Critères de qualité
- Les données sources restent intactes et traçables.
- Les modifications de l'utilisateur sont stockées séparément.
- Aucun texte de règle ne disparaît silencieusement.
- Les dimensions d'export sont documentées et reproductibles.
- Les cartes multi-faces sont représentées explicitement.
- Les ressources graphiques respectent les droits et licences applicables.
