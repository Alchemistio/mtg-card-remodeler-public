# Feuille de route

## Phase 0 — Clôture du cahier des charges et autorisation de développement (préalable obligatoire)

**Statut au 15 novembre 2026 : en cours — cahier des charges V3.124, dernière décision Q803 / section 10.772. L'index contient 745 entrées uniques et ses références de ligne sont vérifiées.** Cette phase ne modifie pas le code produit. Elle transforme les points de préparation identifiés en contrôles traçables et vérifiables. Les éléments déjà présents dans le code sont évalués comme existant technique, jamais comme preuve qu'une exigence est spécifiée ou acceptée.

### Avancement de la phase 0 — contrôle du 15 novembre 2026

- [x] La phase de clôture préalable est formalisée et intégrée au workflow.
- [x] Les décisions techniques Q774–Q798 ont précisé les contrats de persistance, le format de projet, l'intégration FeSens, les politiques OS/WebView, les budgets de performance et les validations.
- [ ] L'audit fonctionnel global et la vérification de toutes les interactions restent à effectuer.
- [ ] Les preuves d'exécution sur les plateformes cibles et la comparaison exhaustive entre le dépôt, la CI et les exigences restent à effectuer.
- [ ] Les licences et droits des collections d'assets, des polices et des ressources Figma/FeSens restent bloquants tant qu'ils ne sont pas établis ou que les ressources concernées ne sont pas exclues.
- [ ] La rédaction et la revue du texte de licence du projet restent à effectuer avant toute distribution.
- [ ] Le rapport final de préparation et la clôture explicite par l'utilisateur restent à obtenir.

### Contrôle documentaire V3.123

- [x] Publier V3.123 avec 25 décisions techniques supplémentaires (Q774–Q798).
- [x] Recalculer et vérifier 745 entrées uniques de l'index, avec zéro erreur de référence.
- [x] Appliquer la règle de rétention : V3.121, V3.122 et V3.123 uniquement dans la branche principale ; V3.120 retirée, historique Git préservé.

### Contrôle documentaire V3.124

- [x] Fixer une matrice initiale des OS et architectures à partir des cycles de support officiels.
- [x] Définir le profil matériel de référence des mesures de performance.
- [x] Définir le minimum et les critères de couverture du corpus visuel.
- [x] Définir le contrôle bloquant des droits d'assets avant inclusion dans un paquet distribué.
- [x] Définir les formats d'artefacts Windows, macOS et Linux, avec conditions de validation.

Les cases cochées dans la section 0.2 signifient que les contrats et politiques sont maintenant définis dans V3.123 ; elles ne signifient pas que les fonctionnalités sont implémentées ni que les validations de plateforme ou de conformité ont été exécutées.

---

### 0.1 Audit documentaire et fonctionnel
- [x] Consulter à chaque reprise le rappel de workflow, le présent document, l'index, puis les sections pertinentes de la dernière version du cahier des charges.
- [ ] Vérifier chaque thème de la feuille de route contre l'index et le texte intégral ; éliminer les doublons et distinguer les décisions utilisateur des décisions techniques de l'assistant.
- [ ] Auditer les interactions entre fonctionnalités, cas limites, erreurs, sécurité, accessibilité, données, import/export, hors ligne, sauvegardes, migrations et récupération.
- [ ] Vérifier que chaque exigence est précise, non contradictoire, traçable et associée à un critère d'acceptation vérifiable.
- [ ] Réaliser une revue finale de cohérence globale et clôturer explicitement les lacunes fonctionnelles.

### 0.2 Contrats techniques et politiques définis — preuves opérationnelles encore à réunir
- [x] Définir le contrat d'intégration FeSens : version et provenance exactes, API utilisée, compatibilité des layouts, stratégie de mise à jour, comportement de repli, tests de non-régression et limites des exports.
- [x] Réconcilier l'architecture de persistance spécifiée avec l'existant constaté : SQLite dans Tauri, IndexedDB dans le navigateur et éventuel repli localStorage ; préciser les responsabilités, migrations, transactions, sauvegardes et règles de cohérence.
- [x] Définir le format de projet et les contrats de fichiers : versionnement de schéma, manifeste, dépendances, ressources embarquées/liées, intégrité, import/export et compatibilité ascendante.
- [x] Confirmer les versions minimales et architectures prises en charge pour Windows, macOS et Linux, sur la base de la matrice Tauri/WebView et des environnements de build réellement supportés.
- [x] Fixer des objectifs mesurables de performance, de mémoire, de taille de catalogue et de temps de réponse, avec matériel de référence et protocole de mesure.
- [x] Définir les garanties de cohérence entre aperçu, SVG, PNG et PDF, y compris les cas FeSens rasterisés, la typographie, les polices, les couleurs et la reproductibilité.
- [x] Vérifier la couverture des tests unitaires, intégration, visuels, bout en bout, migration, restauration, sécurité et multiplateforme.

### 0.3 Dépendances, ressources et conformité
- [ ] Achever l'audit des licences et provenances de FeSens, Figma MTG Card Designer, polices, symboles, cadres et collections d'assets ; exclure par défaut les ressources dont les droits ne sont pas établis.
- [ ] Définir les notices, attributions et conditions de distribution nécessaires ; faire relire le texte de licence du projet avant toute distribution.
- [ ] Vérifier séparément les droits sur les données, noms, symboles et illustrations MTG ; une provenance documentée ne vaut pas autorisation de redistribution.
- [ ] Vérifier les dépendances, leurs versions, licences, vulnérabilités connues et modalités de mise à jour.

### 0.4 Préparation de la réalisation

#### Audit initial du code et des workflows — 15 novembre 2026

- [~] Audit comparatif commencé ; rapport détaillé : [docs/PROJECT_STATUS.md](PROJECT_STATUS.md), section 8.
- [ ] Corriger lors du développement le repli localStorage des cartes/projets, qui contredit la cible Q776.
- [ ] Ajouter un lockfile, utiliser npm ci et épingler mtg-card à une version exacte, conformément à Q659 et Q784.
- [ ] Mettre en place les tests visuels et le corpus Playwright prévus par Q755, Q766 et Q797.
- [ ] Ajouter les validations CI macOS et compléter la validation Windows/Linux sur les environnements officiellement annoncés.
- [ ] Rédiger la licence du projet et achever les vérifications de droits avant toute distribution.
- [ ] Exécuter les workflows et tests sur les commits candidats ; ne pas déduire leur réussite de la seule présence des fichiers de configuration.

**Écarts vérifiés :** aucun fichier de verrouillage npm/pnpm/yarn, aucun fichier LICENSE racine, aucune configuration Playwright dédiée ; le code écrit actuellement cartes et projets dans localStorage lorsque IndexedDB est indisponible ; package.json déclare mtg-card avec la plage ^0.1.1 ; la CI générale vérifiée est Linux et le workflow Windows produit des artefacts temporaires. Aucun code produit n'a été modifié pendant cet audit.

- [ ] Comparer l'état réel de la branche principale, la CI et les documents d'état avec les exigences consolidées ; marquer chaque fonctionnalité comme absente, partielle, présente ou vérifiée.
- [ ] Décomposer le périmètre complet en lots de développement ordonnés, sans réduire les exigences finales, avec dépendances, risques, tests et critères de sortie.
- [ ] Définir les critères d'entrée en développement, les contrôles CI obligatoires et la procédure de validation des lots.
- [ ] Vérifier qu'aucun arbitrage fonctionnel crucial ne reste sans réponse ; soumettre à l'utilisateur un unique bloc compact si nécessaire.
- [ ] Publier une version finale du cahier des charges, recalculer et vérifier intégralement son index, et ne conserver que les trois dernières versions dans la branche principale.
- [ ] Produire un rapport de préparation au développement avec écarts résiduels, risques acceptés, prérequis et plan de lots.
- [ ] Obtenir la clôture explicite du cahier des charges et l'autorisation distincte de l'utilisateur avant toute modification du code produit.

**Règle de sortie :** la phase 0 ne peut être déclarée terminée que lorsque tous les contrôles bloquants sont satisfaits, les exigences sont testables, les droits et dépendances critiques sont clarifiés, la CI et l'état réel sont audités, et l'utilisateur a explicitement clôturé le cahier des charges puis autorisé le développement. Une case cochée doit être étayée par une preuve ou un lien de vérification.

---
## Phase 1 — Fondations et premier éditeur (en cours)
- [x] Initialiser React, TypeScript et Vite.
- [x] Définir un modèle de carte interne validé.
- [x] Rechercher les cartes via Scryfall avec filtre français.
- [x] Préserver les données de cartes multi-faces.
- [x] Analyser les symboles de règles et les retours à la ligne.
- [x] Produire un premier rendu SVG.
- [x] Ajouter un ajustement typographique et un diagnostic de débordement.
- [x] Ajouter une bibliothèque locale IndexedDB avec repli localStorage.
- [x] Mettre en cache les recherches Scryfall pendant 12 h en mémoire et dans le stockage persistant.
- [x] Ajouter une persistance SQLite dans l'application Tauri, y compris le cache Scryfall.
- [x] Ajouter des exports SVG, PNG 3× et PDF au format physique standard.
- [x] Ajouter un shell desktop Tauri 2 et un manifeste d'assets.
- [x] Ajouter des tests unitaires et une CI web.
- [x] Valider la CI web, la compilation TypeScript et la vérification Tauri/Rust sur la branche principale avant l’intégration du moteur FeSens.
- [x] Revalider la CI après l’intégration du moteur FeSens et corriger les régressions détectées.
- [ ] Valider un installateur Windows final sur une machine Windows propre.

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
- [x] Import de decklists texte/TXT/CSV avec quantités, sections de deck et résolution en lots Scryfall.\n- [x] Import best-effort des decks publics Moxfield et Archidekt (les API tierces peuvent bloquer les requêtes).\n- [ ] Gestion avancée des projets, favoris et collections.
- [ ] Import direct des URLs tierces sans dépendre des politiques CORS du WebView.
- [ ] Cache d'images et de données, synchronisation et nettoyage.

## Phase 4 — Export et distribution
- [x] Export PDF avec fond perdu de 0/3/5 mm et traits de coupe.
- [x] Export PDF multi-pages en planches avec papier A4/A3/Letter/Legal/personnalisé, orientation, marges indépendantes, grille, espacement, dimensions de cartes, fond perdu et traits de coupe.\n- [ ] Profils d’impression, CMJN/ICC et marges de sécurité propres aux imprimeurs.
- [x] Export PNG haute définition 3× pour les rendus SVG locaux et FeSens.
- [x] Réglage de résolution PDF (300/600/900/1200 DPI) pour les planches d'impression.\n- [ ] Pipeline d’images distantes plus complet.
- [ ] Packaging Windows, macOS et Linux.
- [ ] Tests de bout en bout et documentation utilisateur.

## Critères de qualité
- Les données sources restent intactes et traçables.
- Les modifications de l'utilisateur sont stockées séparément.
- Aucun texte de règle ne disparaît silencieusement.
- Les dimensions d'export sont documentées et reproductibles.
- Les cartes multi-faces sont représentées explicitement.
- Les ressources graphiques respectent les droits et licences applicables.
