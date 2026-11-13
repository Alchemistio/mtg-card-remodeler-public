# Outil externe d'audit des assets

Le développement de l'application Windows native en Rust est suivi dans un dépôt séparé :
- Dépôt : https://github.com/Alchemistio/mtg_card_auditory
- Application : MTG Asset Auditor
- Cible : Windows x64
- Source : dossier local ou dépôt GitHub librement choisi par l'utilisateur.

## Exigences de connexion au dépôt

L'application doit pouvoir explorer le dépôt GitHub configuré (propriétaire, nom, branche/tag/commit, sous-répertoire), public ou privé, sans coder en dur ce dépôt de référence. Elle doit résoudre et enregistrer le commit SHA exact, explorer l'arbre Git, télécharger sélectivement les fichiers nécessaires et conserver les sources distantes intactes. Pour un dépôt privé, un jeton à permissions minimales est utilisé sans être enregistré dans les rapports.

Le dépôt MTG Card Remodeler est le premier cas de test de référence :
- dépôt : Alchemistio/mtg-card-remodeler-public
- branche : main
- dossier : Assets/
- inventaire de référence : 37 371 fichiers, environ 1,75 Go.

Ces chiffres ne doivent pas être codés en dur dans l'application. Le logiciel doit lire le manifeste présent dans le dépôt s'il existe et vérifier l'arbre réel.

## Fonctionnalités attendues

Le cahier des charges complet est maintenu dans le dépôt de l'outil, fichier docs/REQUIREMENTS.md. Les fonctions incluent l'inventaire local et distant, SHA-256 binaire, métadonnées raster/SVG/fonts, inspection sûre des ZIP et packages MSE, planches de contact, galerie HTML, détection de doublons, classification assistée, provenance/licences, revue humaine persistante, rapports JSON/CSV/HTML, cache, reprise, progression et annulation.

## État au 2026-11-13 — mise à jour

Le dépôt Rust dispose désormais, en plus du socle GitHub initial, d'un premier moteur de scan local récursif en lecture seule. Il calcule les SHA-256 en flux, produit un inventaire JSON versionné (schéma v1) et un CSV UTF-8, classe les fichiers de façon indicative par extension et refuse les exports placés dans le dossier source analysé. L'interface permet de choisir le dossier, lancer le scan et exporter les résultats. L'interface GitHub accepte maintenant une URL de dépôt ou owner/repo ; les branches/tags/commits sont résolus en SHA de commit avant lecture de l'arbre.

La CI Windows a passé Clippy, les tests, le build Release et l'upload d'artefact sur le commit `45e601e` (scan local parallèle, analyse raster/SVG/polices et inspection ZIP avec correctifs). Le commit `6310f92` a ensuite passé à son tour Clippy, tests, build Release et upload d'artefact. Il comprend les workers d'arrière-plan, la détection de doublons exacts, le rapport HTML autonome et la vue filtrable. Le dernier ajout (type de canaux et présence d'alpha raster) est en cours de validation CI.

Le moteur local calcule SHA-256 en flux, relève des métadonnées raster/SVG/polices/ZIP, détecte les doublons binaires sans suppression et exporte JSON/CSV/HTML autonome. Les opérations réseau et le scan local sont exécutés dans des workers d'arrière-plan. Les exports restent hors de l'arborescence source.

Restent à développer : arbres tronqués par parcours de sous-arbres, téléchargement streaming/cache/reprise, gestion sécurisée persistante du jeton, filtres avancés, métadonnées visuelles et analyseurs SVG/fonts/ZIP/MSE, galerie/planches, provenance/licences, revue humaine, rapport HTML et release Windows. Aucun asset du dépôt principal n'a été déplacé, modifié, supprimé ou intégré à LIBRARY.
