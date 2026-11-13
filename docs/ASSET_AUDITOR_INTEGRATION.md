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

## État au 2026-11-13

Le dépôt Rust a été initialisé. Le premier socle comprend une interface desktop, l'exploration initiale d'un arbre GitHub, la sélection et le téléchargement de blobs vers un workspace. La résolution de la branche par défaut et la protection contre l'écrasement de fichiers locaux sont ajoutées.

Les phases d'analyse locale, d'analyse visuelle, de provenance/licences et de rapports restent à développer. Le workflow Windows GitHub Actions est en cours de première exécution ; aucun exécutable n'est déclaré validé à ce stade.

Aucune ressource de Assets/ n'a été déplacée, modifiée ou supprimée par ce développement.