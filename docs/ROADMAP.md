# Feuille de route

## Phase 0 — Clôture du cahier des charges et autorisation de développement (préalable obligatoire)

**Statut au 15 novembre 2026 : en cours — cahier des charges V3.128, dernière décision Q806 / section 10.775. L'index contient 753 entrées uniques, vérifiées sans erreur. V3.128 est la version courante ; V3.126, V3.127 et V3.128 sont les trois versions conservées dans main.** Cette phase ne modifie pas le code produit. Elle transforme les points de préparation identifiés en contrôles traçables et vérifiables. Les éléments déjà présents dans le code sont évalués comme existant technique, jamais comme preuve qu'une exigence est spécifiée ou acceptée.

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

**Jalon de distribution séparé :** les contrôles juridiques non résolus n'autorisent jamais la redistribution. Ils ne bloquent l'entrée en développement que si le développement lui-même exige un usage non autorisé ; sinon, les ressources en attente sont isolées et les builds contenant ces ressources restent strictement internes. Aucun binaire ni code sous licence personnalisée ne doit être distribué avant revue du texte et des droits.

- [ ] Achever l'audit des licences et provenances de FeSens, Figma MTG Card Designer, polices, symboles, cadres et collections d'assets ; exclure par défaut les ressources dont les droits ne sont pas établis.
- [ ] Définir les notices, attributions et conditions de distribution nécessaires ; faire relire le texte de licence du projet avant toute distribution.
- [ ] Vérifier séparément les droits sur les données, noms, symboles et illustrations MTG ; une provenance documentée ne vaut pas autorisation de redistribution.
- [ ] Vérifier les dépendances, leurs versions, licences, vulnérabilités connues et modalités de mise à jour.

### 0.4 Préparation de la réalisation

#### Audit des assets — état réel au 15 novembre 2026

- [x] Inventorier les 37 371 fichiers des cinq collections source et produire les métadonnées individuelles.
- [x] Définir la politique : aucune ressource pending-review ou de provenance inconnue ne peut entrer dans un paquet distribué.
- [ ] Exécuter le générateur visuel sur un clone complet et examiner les planches de contact.
- [ ] Compléter les droits par ressource et ne sélectionner que des lots dont l'usage et la redistribution sont autorisés.
- [ ] Vérifier les six chemins déclarés par src/assets/manifest.ts : les SVG attendus ne sont pas présents dans l'arborescence examinée.
- [ ] Ajouter une validation de build qui refuse tout asset embarqué dont le statut et la preuve de droits ne satisfont pas Q802.
- [ ] Réconcilier le manifeste runtime avec les assets réellement présents et testés.

L'inventaire de 37 371 fichiers est un inventaire de sources, pas une bibliothèque d'assets approuvés. Assets/LIBRARY reste vide volontairement. Le contrôle de droits du packaging est spécifié mais pas encore implémenté.

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
- [x] Décomposer le périmètre complet en sept lots ordonnés, avec dépendances, risques, tests et critères de sortie.
- [x] Définir les critères d'entrée en développement, les contrôles CI obligatoires et la procédure de validation des lots.
- [ ] Vérifier qu'aucun arbitrage fonctionnel crucial ne reste sans réponse ; soumettre à l'utilisateur un unique bloc compact si nécessaire.
- [ ] Publier une version finale du cahier des charges, recalculer et vérifier intégralement son index, et ne conserver que les trois dernières versions dans la branche principale.
- [ ] Produire un rapport de préparation au développement avec écarts résiduels, risques acceptés, prérequis et plan de lots.
- [ ] Obtenir la clôture explicite du cahier des charges et l'autorisation distincte de l'utilisateur avant toute modification du code produit.

**Règle de sortie — prêt à entrer en développement :** la phase 0 est prête lorsque le cahier des charges est complet, cohérent et testable ; les contrats techniques, plateformes, performances, formats et critères d'acceptation sont établis ; l'état réel du dépôt et de la CI est comparé à la spécification ; les dépendances sont identifiées ; les risques de droits non résolus sont soit levés, soit explicitement exclus de tout artefact distribué ; et le plan de lots ainsi que les critères d'entrée sont prêts. Les ressources FeSens/Figma et autres assets non vérifiés peuvent rester en usage interne de développement uniquement si cet usage est autorisé, mais aucun artefact les contenant ne peut être distribué avant clarification des droits. La rédaction/relecture de la licence personnalisée du code et la validation des droits de chaque asset constituent un **jalon distinct de distribution**, pas une raison pour modifier le code avant la clôture du cahier des charges. La clôture explicite du cahier des charges et l'autorisation distincte de l'utilisateur restent obligatoires avant toute modification du code produit. Une case cochée doit être étayée par une preuve ou un lien de vérification.

---
### Contrôle documentaire V3.125

- [x] Formaliser la liste des layouts Scryfall et la politique de repli pour les layouts inconnus (Q804).
- [x] Formaliser les champs de faces, relations meld et structures mécaniques (Q805).
- [ ] Implémenter et tester chaque layout ; la définition fonctionnelle ne vaut pas réalisation.

### Contrôle documentaire V3.126

- [x] Définir le parcours d'import de decks publics par URL et ses contrôles de sécurité réseau (Q806).
- [ ] Implémenter le service réseau natif et les tests de fournisseurs/SSRF ; l'exigence est définie, pas réalisée.

### Contrôle documentaire V3.127

- [x] Auditer les 75 décisions techniques Q519–Q593 auparavant marquées recommandées.
- [x] Les adopter comme décisions techniques prises par l'assistant, sans nouvel arbitrage utilisateur.
- [x] Recalculer les références de l'index après mise à jour des statuts.

### Contrôle documentaire V3.128

- [x] Retirer le bloc 10.348 obsolète, dupliqué et non indexé.
- [x] Vérifier que les 753 questions indexées sont conservées et que les sections numérotées retrouvent leur ordre.
- [x] Recalculer les références de lignes après la suppression.

### Contrôle documentaire V3.128 — rétention

- [x] Vérifier 753 questions, 753 entrées d'index, zéro erreur et ordre strict des sections.
- [x] Conserver V3.126, V3.127 et V3.128 dans main ; V3.125 retirée, historique Git préservé.

## Plan de lots pour le développement complet — préparé, non autorisé à démarrer

Ce plan organise la réalisation sans réduire le périmètre final validé. Il s'agit d'un plan de préparation : aucun lot ne peut commencer avant clôture explicite du cahier des charges et autorisation distincte de l'utilisateur.

### Lot A — Reproductibilité, persistance et fondations
**Dépendances :** aucune ; premier lot obligatoire.

- Ajouter et versionner le lockfile npm ; remplacer npm install par npm ci dans la CI.
- Épingler mtg-card à la version exacte approuvée et documenter les mises à jour contrôlées.
- Aligner les adaptateurs SQLite Tauri et IndexedDB navigateur sur les contrats Q774–Q778.
- Remplacer le repli localStorage des cartes/projets par une migration contrôlée des anciennes données et un état dégradé sûr.
- Ajouter les tests de contrat des deux adaptateurs, des migrations, de la récupération et des quotas.
- Réconcilier les documents d'architecture avec la différence entre l'existant et la cible.

**Sortie du lot :** installation reproductible, build/test reproductibles, données préservées, migration vérifiée, aucun stockage principal non conforme.

### Lot B — Rendu, layouts et typographie
**Dépendances :** Lot A ; s'appuie sur les contrats FeSens Q784–Q788.

- Compléter les layouts split, bataille, classe, prototype et modal DFC.
- Compléter les coûts alternatifs, rappels, marqueurs et capacités structurées.
- Unifier les données et l'adaptateur FeSens sans fuite de types tiers dans le modèle interne.
- Préserver le moteur SVG local pour les cas non couverts et documenter la nature raster/vectorielle des sorties.
- Stabiliser les polices, métriques, retours à la ligne et diagnostics de débordement.
- Construire le corpus visuel d'au moins 100 fixtures, cinq par layout, avec droits vérifiés ou données synthétiques.

**Sortie du lot :** chaque layout déclaré pris en charge passe ses tests de rendu et de régression visuelle ; aucun texte ou symbole n'est tronqué silencieusement.

### Lot C — Gouvernance et bibliothèque d'assets
**Dépendances :** peut avancer en parallèle du lot B, mais aucun asset non vérifié n'est intégré au runtime distribué.

- Réconcilier le manifeste TypeScript avec les fichiers réellement présents ; supprimer ou corriger les chemins invalides.
- Exécuter le générateur de catalogue sur un clone complet et examiner les planches de contact.
- Terminer la revue de provenance et de droits par ressource ; ne sélectionner que des assets visuellement et juridiquement validés.
- Construire la bibliothèque normalisée et son manifeste, avec dimensions, empreintes, provenance, licence et compatibilité.
- Implémenter le contrôle de build Q802 : toute ressource non autorisée bloque le packaging distribué.
- Conserver les sources historiques immuables et isoler les assets en attente.

**Sortie du lot :** aucune référence runtime cassée ; inventaire traçable ; build distribuable impossible si un asset sans droit vérifié est embarqué.

### Lot D — Éditeur et gestion des projets
**Dépendances :** Lots A et B ; Lot C pour les assets personnalisés.

- Compléter l'éditeur de cadres, de zones de texte et les outils de personnalisation définis dans les chapitres fonctionnels.
- Finaliser la séparation des données Scryfall et des surcharges utilisateur.
- Compléter la gestion avancée des projets, favoris, collections, variantes et composants réutilisables.
- Implémenter le format portable ZIP Q779–Q783 : manifeste, chemins relatifs, intégrité, versionnement et refus sûr des formats futurs.
- Tester sauvegardes, restauration, import/export, récupération après interruption et compatibilité des projets existants.

**Sortie du lot :** les projets sont éditables, portables et récupérables sans perte silencieuse ; les personnalisations ne modifient jamais les données source.

### Lot E — Import, catalogue et fonctionnement hors ligne
**Dépendances :** Lots A et D.

- Finaliser l'import des decklists et la résolution groupée Scryfall.
- Stabiliser les imports Moxfield/Archidekt en respectant leurs interfaces publiques disponibles et leurs limites ; conserver le collage/export texte comme repli.
- Compléter le cache des images et des données, les synchronisations, les mises à jour de catalogue et le nettoyage.
- Garantir l'ouverture, la modification et l'export des projets locaux sans réseau.
- Vérifier les annulations, reprises réseau, limites de débit et erreurs externes déjà spécifiées.

**Sortie du lot :** aucun service externe n'est requis pour les fonctions locales ; les imports incomplets ou refusés ne corrompent pas les projets.

### Lot F — Impression et exports
**Dépendances :** Lots B, C et D.

- Compléter les profils d'impression, marges de sécurité et paramètres de découpe.
- Étudier et intégrer les profils colorimétriques CMJN/ICC dans les limites des formats et moteurs réellement utilisés.
- Garantir la cohérence géométrique entre aperçu, SVG, PNG et PDF, en signalant les contenus rasterisés.
- Finaliser les exports individuels et par lots, planches, résolutions et contrôles qualité.
- Vérifier les sorties sur lecteurs PDF et imprimantes de référence.

**Sortie du lot :** les dimensions physiques, fonds perdus, traits de coupe, résolutions et avertissements correspondent aux critères d'acceptation.

### Lot G — Multiplateforme, sécurité et préparation de livraison
**Dépendances :** Lots A à F.

- Ajouter les validations CI Windows, macOS et Linux selon la matrice Q799.
- Produire NSIS/MSI, DMG/.app, AppImage et DEB selon Q803 ; tester chaque artefact sur machine propre.
- Mettre en place les signatures, notarisation, attestations, empreintes et analyses de dépendances requises par Q660–Q663.
- Ajouter les tests bout en bout, visuels et scénarios de récupération sur les plateformes annoncées.
- Terminer la documentation utilisateur, les notices et le texte de licence personnalisé.
- Vérifier les droits de toutes les ressources embarquées ; aucune distribution contenant un asset en attente n'est permise.

**Sortie du lot :** zéro défaut connu, aucun écart non arbitré, tous les critères d'acceptation prouvés sur les plateformes annoncées et rapport d'audit global remis à l'utilisateur.

### Critères d'entrée dans le premier lot de développement

1. Cahier des charges déclaré complet et cohérent par audit ; index vérifié et trois dernières versions conservées.
2. Aucun arbitrage fonctionnel crucial non résolu.
3. Contrats techniques et critères d'acceptation établis ; risques de droits non résolus isolés hors des artefacts distribuables.
4. État de la branche principale, de la CI et des écarts actuels documenté.
5. Plan de lots et dépendances approuvés comme méthode de réalisation.
6. Autorisation explicite de l'utilisateur pour commencer les modifications du code produit.

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
- [ ] Implémenter et valider la matrice exhaustive des layouts Scryfall définie en Q804–Q805 (normal, split, flip, transform, modal DFC, meld, leveler, class, saga, adventure, planar, scheme, vanguard, token, double-faced token, emblem, augment, host, art series, reversible card, mutate, prototype, battle, case et layouts futurs) ; uniformiser le rendu des deux moteurs.
- [ ] Implémenter le modèle structuré des faces, relations meld, coûts/statistiques alternatifs, chapitres/niveaux, textes de rappel et marqueurs défini en Q805.
- [ ] Gestion des polices locales et de métriques typographiques reproductibles.
- [ ] Corpus visuel de référence et tests de régression par famille de cartes.

## Phase 3 — Atelier de personnalisation
- [x] Ajouter une dépendance versionnée au paquet de cadres FeSens (SVG, textures et glyphes).
- [ ] Registre d’assets local unifié : cadres, textures, symboles, polices et masques, avec inventaire de licences.
- [ ] Éditeur de cadres et de zones de texte.
- [ ] Séparation des données Scryfall et des surcharges utilisateur.
- [x] Import de decklists texte/TXT/CSV avec quantités, sections de deck et résolution en lots Scryfall.\n- [x] Import best-effort des decks publics Moxfield et Archidekt (les API tierces peuvent bloquer les requêtes).\n- [ ] Gestion avancée des projets, favoris et collections.
- [ ] Implémenter l'import direct des URLs tierces selon Q806 : accès réseau natif Tauri, hôtes autorisés, protections SSRF et repli fichier/texte dans le navigateur sans proxy.
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
