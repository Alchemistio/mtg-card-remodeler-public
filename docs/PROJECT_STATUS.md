# Rapport d'état — MTG Card Remodeller

**Rapport initial : 5 novembre 2026 — audit complémentaire : 15 novembre 2026**  
**Dépôt :** https://github.com/Alchemistio/mtg-card-remodeler-public  
**Branche de travail :** `feat/frames-fesens` (fusionnée dans `main`)  
**Pull request :** [#4 — fusionnée](https://github.com/Alchemistio/mtg-card-remodeler-public/pull/4)

## 1. Synthèse

Le dépôt contient déjà un prototype fonctionnel de recherche, d'édition, de sauvegarde et d'export de cartes. Les fondations techniques sont en place : React, TypeScript, Vite, Zod, Tauri 2, SQLite, IndexedDB, client Scryfall, moteur SVG local et tests Vitest.

Les deux améliorations majeures déjà intégrées à `main` sont :
- les premières compositions avancées et les symboles inline du moteur local ;
- l'export PDF au format physique standard avec fond perdu de 3 mm et traits de coupe configurables.

La PR #4 a été fusionnée dans `main` : elle ajoute le moteur de cadres FeSens, le raccordement des données Scryfall à ses composants et un cache persistant des recherches. Les tests web et le build ont passé sur la branche de travail ; une vérification CI supplémentaire est lancée sur le commit de fusion.

**État global : prototype avancé en préparation du premier build desktop Windows.** Les fonctionnalités essentielles existent, tandis que la couverture des familles de cartes, les tests visuels, les profils d'impression et la validation des droits graphiques restent incomplets.

## 2. État technique de l'existant

| Domaine | État | Détails |
|---|---|---|
| Interface | En cours de finition | React + TypeScript + Vite ; première passe de la DA FF XII Zodiac Age intégrée, contrôle visuel Windows restant |
| Application desktop | Partiel | Shell Tauri 2, configuration et SQLite présents ; les paquets finaux ne sont pas encore produits |
| Données cartes | Réalisé | Modèle interne Zod, conservation du JSON Scryfall brut et des faces |
| Recherche | Réalisé | Recherche Scryfall, préférence française, recherche par nom et identifiant |
| Cache Scryfall | En cours dans PR #4 | Cache mémoire et persistant de 12 h prévu pour SQLite, IndexedDB et localStorage |
| Bibliothèque | Réalisé | Sauvegarde des cartes et projets personnalisés |
| Séparation source/personnalisation | Réalisé | Snapshot source conservé et surcharges stockées dans le projet |
| Rendu local | Réalisé | Génération SVG, dimensions de travail 750 × 1050 |
| Rendu FeSens | En cours dans PR #4 | Paquet `mtg-card@0.1.1` pour standard, Saga, planeswalker et Aventure |
| Symboles de mana | Partiel | Le paquet FeSens apporte des glyphes riches ; le moteur local utilise encore des symboles provisoires |
| Typographie | Partiel | Ajustement automatique et diagnostic dans le moteur local ; adaptation DOM ajoutée au rendu FeSens, à vérifier visuellement |
| Exports | Partiel | SVG, PNG 3× et PDF ; le SVG FeSens encapsule une image PNG haute résolution |
| Tests | Partiel | Tests unitaires Vitest et CI ; pas encore de tests visuels Playwright sur un corpus représentatif |

## 3. Comparaison avec le cahier des charges

### 3.1 Récupération des données Scryfall

**État : bien avancé**

- Recherche avec filtre français par défaut.
- Normalisation des champs dans un modèle interne validé par Zod.
- Conservation des données brutes pour éviter la perte d'informations.
- Gestion des cartes multi-faces et des champs force, endurance, loyauté et défense.
- Récupération de l'illustration et des métadonnées de collection.
- Cache de recherche de 12 h intégré, avec cadence minimale de 100 ms et reprises automatiques sur les erreurs 429/503. Une indisponibilité ou une entrée corrompue du cache ne bloque pas l’accès direct à Scryfall.

**Reste à faire :** import du catalogue Bulk Data de Scryfall, stratégie de rafraîchissement du cache, contrôle du débit de requêtes et gestion plus poussée des erreurs réseau.

### 3.2 Cadres, textures et symboles

**État : partiel**

La PR #4 utilise le paquet FeSens comme base graphique au lieu de continuer à développer uniquement des cadres simplifiés. Il fournit des cadres colorés, des textures, des éléments SVG et des symboles de mana.

Compositions raccordées :
- carte standard ;
- Saga ;
- planeswalker ;
- Aventure.

Le moteur SVG local reste actif pour les compositions qui ne sont pas encore correctement couvertes par FeSens : cartes fractionnées, Batailles, Classes et certains cas particuliers. Les cartes transformables et recto-verso peuvent utiliser la sélection de face, mais leur rendu doit encore être vérifié sur des exemples réels.

**Reste à faire :** unifier les deux moteurs, ajouter les layouts manquants et construire un registre local complet des assets avec leurs licences et attributions.

### 3.3 Reconstruction et typographie

**État : partiel**

- Les champs de carte peuvent être personnalisés sans modifier la source Scryfall.
- Le moteur local calcule la mise en page du texte et signale les débordements.
- La PR #4 applique une réduction typographique au rendu FeSens en mesurant les zones de texte dans le DOM.
- Les symboles entre accolades sont interprétés comme des symboles de mana dans les moteurs qui les prennent en charge.

**Reste à faire :** garantir le même comportement pour chaque layout, mieux gérer les textes longs et les capacités structurées, contrôler les polices et créer des tests de régression visuelle.

### 3.4 Édition et sauvegarde

**État : bien avancé**

- Recherche et sélection d'une carte.
- Modification du nom, du type, du texte de règles, de la force et de l'endurance.
- Choix de certains presets de cadres et réglage de la taille du texte.
- Sauvegarde d'une carte source et d'un projet personnalisé.
- Stockage SQLite dans Tauri, IndexedDB dans le navigateur et repli localStorage.

**Reste à faire :** éditeur visuel de cadres et de zones, gestion des calques, des masques, des polices et des collections, import et édition en lot.

### 3.5 Exports et impression

**État : partiel**

- SVG autonome pour le moteur local.
- PNG de 2250 × 3150 px, soit 900 DPI au format fini 63,5 × 88,9 mm.
- PDF au format fini 63,5 × 88,9 mm.
- Fond perdu réglable de 0, 3 ou 5 mm.
- Traits de coupe activables et placés hors du fond perdu.

**Limite importante :** le SVG des cartes FeSens est un conteneur SVG avec une image PNG intégrée. Il est autonome, mais ses éléments ne sont pas éditables individuellement comme des calques vectoriels. Le pipeline CMJN/ICC, les profils d'imprimeurs et les zones de sécurité restent à développer.

### 3.6 Distribution

**État : à faire**

- Shell Tauri 2 présent.
- La CI contrôle le build web et vérifie le code Rust avec `cargo fmt` et `cargo check`.
- Un workflow manuel Windows est ajouté pour produire les installateurs NSIS (.exe) et MSI comme artefacts temporaires ; il reste à exécuter et valider.
- La signature des applications et les mises à jour automatiques ne sont pas configurées.

## 4. Feuille de route par phase

| Phase | Objectif | Avancement |
|---|---|---|
| 1 — Fondations | Modèle, recherche, édition, sauvegarde, premier export, shell desktop | **Majoritairement réalisée** ; cache Scryfall et validation finale de la PR #4 en cours |
| 2 — Fidélité | Cadres, symboles, layouts, typographie, tests visuels | **Partielle** ; quatre familles raccordées à FeSens, layouts supplémentaires à faire |
| 3 — Personnalisation | Éditeur de cadres, registre d'assets, collections et imports | **Débutée** ; presets et projets existent, éditeur avancé absent |
| 4 — Production | Exports d'impression, profils, packaging et documentation | **Partielle** ; PDF avec fond perdu réalisé, profils et installateurs absents |

## 5. Points de vigilance et interventions humaines

### A. Droits sur les cadres FeSens — à confirmer avant publication

Le manifeste npm et le README de FeSens déclarent une licence MIT pour `mtg-card@0.1.1`. Toutefois, le dépôt GitHub consulté ne contient pas de fichier `LICENSE` séparé. Son README précise également que les SVG de cadres et la mise en page sont basés sur le fichier communautaire Figma **MTG Card Designer** de **@ux_andrew**.

Avant de distribuer publiquement l'application ou ses installateurs, il faut obtenir une confirmation des droits de redistribution et des attributions requises pour cette source Figma et ses éléments. La PR conserve la provenance dans `docs/THIRD_PARTY_NOTICES.md`, mais cette note ne remplace pas une autorisation.

### B. Licence du projet — décision du propriétaire

Le dépôt principal ne définit pas encore de licence pour son propre code. Il faut choisir si le projet sera open source (et sous quelle licence), source-available ou privé avant d'encourager les contributions ou une redistribution externe.

### C. Validation visuelle — intervention nécessaire

La CI prouve que les tests automatisés et le build passent, mais ne garantit pas que chaque cadre ressemble au résultat attendu. Une vérification dans l'application est nécessaire sur :
- une carte commune, rare et multicolore ;
- un terrain de base et un artefact ;
- une Saga avec trois chapitres ;
- un planeswalker avec plusieurs capacités ;
- une carte Aventure ;
- une carte recto-verso ;
- une carte à texte de règles très long.

Il faudra confirmer les proportions, la taille des polices, l'illustration, les symboles, les marges et les exports obtenus.

### D. Polices et assets

Les familles Beleren, Merriweather et Source Sans Pro sont référencées par le moteur FeSens, mais leur disponibilité et leurs droits de redistribution doivent être vérifiés ou remplacés par des polices dont la licence est compatible avec le projet.

### E. Distribution multi-plateforme

La création et la signature des installateurs demandent des environnements de build et, selon la plateforme, des certificats/comptes de signature. Cette étape ne peut pas être considérée comme terminée depuis la seule CI Linux.

## 6. Prochaines étapes techniques recommandées

1. Terminer et fusionner la PR #4 lorsque les contrôles web et Rust sont verts.
2. Faire valider visuellement les quatre compositions FeSens et les exports dans l'application.
3. Compléter les layouts split, bataille, classe et prototype.
4. Ajouter les tests visuels Playwright et un corpus de référence d'au moins 100 cartes.
5. Développer l'import Bulk Data Scryfall et la gestion des collections/imports en lot.
6. Créer un véritable éditeur de cadres et un registre d'assets avec métadonnées de licence.
7. Finaliser les profils d'impression et les packages Windows/macOS/Linux après validation des droits.

## 7. Conclusion

Le projet a dépassé le stade d'une simple maquette : il dispose d'un socle applicatif, d'une recherche Scryfall, d'une bibliothèque locale, d'un moteur de rendu, d'une personnalisation et d'un export PDF avec fond perdu.

L'intégration FeSens est une avancée importante pour la fidélité graphique, mais elle ne couvre pas encore toutes les familles de cartes et transforme ses rendus en images pour les exports. Le prochain jalon réaliste est une version bêta utilisable, après validation de la PR #4, des droits graphiques et des rendus sur des cartes réelles.


## 7. Mise à jour — direction artistique et build Windows

- Les références utilisateur `showcase-da.html` et `showcase_menu.html` ont été analysées. Le thème Nuit est appliqué à l'atelier de gestion ; le thème Parchemin est réservé aux futures vues de consultation.
- Les tokens de couleur, les contrastes, les sélections dorées et les alternatives typographiques ont été documentés dans [UI_DIRECTION.md](UI_DIRECTION.md).
- Une première couche CSS reprend la palette nuit, les bandeaux noirs, les sélections dorées, les champs sombres et les panneaux d'aperçu.
- Un workflow manuel Windows produit les installateurs NSIS et MSI en artefacts éphémères (14 jours). Aucun Release public automatique n'est créé.
- La validation visuelle sur la machine cible et l'exécution réelle du workflow d'installation restent à faire.


## 8. Audit de cohérence au 15 novembre 2026

Cet addendum actualise l'état documentaire après comparaison de fichiers de code, configuration, workflows et cahier des charges V3.123. Il ne remplace pas les tests d'exécution ; aucune modification du code produit n'a été réalisée pendant cet audit.

### Éléments constatés dans le dépôt

- La persistance desktop utilise SQLite via le plugin SQL Tauri, avec migrations versionnées et cache Scryfall.
- La persistance navigateur utilise IndexedDB, avec repli localStorage actuellement employé pour les cartes, projets et cache lorsque IndexedDB est indisponible.
- Le moteur FeSens est utilisé via le paquet npm mtg-card ; le code adapte le modèle interne et conserve le moteur SVG local pour les layouts non couverts.
- Le projet contient une CI Linux pour les tests web, le build Vite et la compilation Tauri/Rust, ainsi qu'un workflow Windows produisant des artefacts NSIS/MSI.
- Le workflow Windows est déclenché manuellement et lors des push sur main ; les artefacts sont conservés 14 jours.
- Le dépôt ne contient actuellement aucun package-lock.json, npm-shrinkwrap.json, pnpm-lock.yaml ou yarn.lock.
- Le dépôt ne contient actuellement aucun fichier LICENSE racine ou LICENSE.md, ni configuration Playwright dédiée.

### Écarts avec les décisions du cahier des charges V3.123

| Sujet | État observé | Exigence de référence | Suite nécessaire |
|---|---|---|---|
| Repli localStorage | Écrit les cartes et projets si IndexedDB est indisponible | Q776 : localStorage limité aux préférences et à la migration de compatibilité | Remplacer le repli de persistance par un état dégradé sûr et une migration contrôlée |
| Verrouillage des dépendances | Aucun fichier de verrouillage présent ; CI utilise npm install | Q659 et Q784 : dépendances reproductibles et FeSens épinglé | Générer et versionner un lockfile, passer à npm ci et épingler mtg-card |
| FeSens | package.json déclare mtg-card avec la plage ^0.1.1 | Q784–Q788 : version exacte, adaptateur, tests et contrôle des droits | Fixer la version approuvée et compléter la revue de provenance/licence |
| Tests visuels | Aucun Playwright ni corpus de snapshots identifié | Q755, Q766 et Q797–Q798 | Ajouter une suite visuelle reproductible et des références légalement utilisables |
| Matrice de plateformes | CI générale Linux ; workflow de packaging Windows ; aucune CI macOS identifiée dans les workflows examinés | Q758–Q763 et Q767 | Ajouter les validations par cible et tester les installateurs sur environnements propres |
| Licence du projet | Aucun fichier LICENSE racine | Q632 et feuille de route phase 0.3 | Rédiger et faire relire le texte de licence personnelle non commerciale retenu |

### Limites de la vérification

- Les fichiers de workflow ont été lus, mais aucun résultat de CI concluant n'a été obtenu pour le commit documentaire courant ; un statut vide ne constitue pas une preuve de réussite.
- Le rapport d'état et certains documents d'architecture décrivent l'implémentation présente, y compris le repli localStorage. Ils ne doivent pas être interprétés comme la cible normative après V3.123.
- Les droits des ressources FeSens/Figma, des polices et des collections graphiques ne sont pas établis par cet audit technique.
- La présence d'un build ou d'un artefact CI ne vaut pas validation d'installation, de rendu ou de conformité sur une machine propre.

**Conclusion :** le dépôt contient un prototype avancé, mais il ne satisfait pas encore toutes les conditions de reproductibilité, de conformité documentaire, de validation visuelle et de distribution définies par V3.123. Les écarts ci-dessus doivent être traités dans les lots de développement et de préparation de publication ; ils ne justifient pas de modifier le périmètre fonctionnel déjà spécifié.


## 9. Complément de spécification V3.124

La V3.124 précise les versions minimales de systèmes et architectures, le profil de machine de référence, le corpus visuel minimal, le filtrage des ressources selon les droits et les formats de livraison.

Ces décisions ne signifient pas que les builds ou tests multiplateformes existent déjà. Le dépôt doit encore :
- ajouter les validations Windows et macOS et les paquets Linux annoncés ;
- exécuter les installateurs sur des machines propres ;
- remplacer le repli localStorage de cartes/projets par le comportement cible défini en Q776 ;
- ajouter un lockfile npm et utiliser npm ci ; épingler mtg-card sans plage flottante ;
- ajouter le corpus de 100 fixtures minimum et les tests visuels ;
- exclure des paquets distribués les assets dont les droits ne sont pas établis.

La matrice initiale de support est définie dans Q799, mais la compatibilité effective de chaque build reste à démontrer. Le statut des licences FeSens/Figma et des autres assets en attente demeure un blocage à toute distribution contenant ces ressources. Le texte définitif de licence du code, demandé par Q632, reste à rédiger et faire relire avant toute diffusion autorisée du code.



## 10. Audit complémentaire du registre d'assets — 15 novembre 2026

- L'inventaire source couvre 37 371 fichiers répartis en cinq collections, pour environ 1,75 Go. Cet inventaire décrit les sources ; il ne constitue pas une validation visuelle, juridique ou d'intégration.
- Les cinq collections restent au statut global pending-review pour les droits ; les planches de contact n'ont pas été générées et examinées dans un clone local complet.
- Le registre Assets/LIBRARY ne contient volontairement aucun asset de production approuvé.
- Le validateur Python contrôle la structure des inventaires, les identifiants/chemins uniques, les statuts et les Git blob SHA ; il ne certifie ni la licence ni l'apparence ni les dimensions binaires.
- Le manifeste TypeScript src/assets/manifest.ts déclare six fichiers assets/frames/*.svg comme project-generated, mais le rapport d'audit indique que ces fichiers ne sont pas présents à ces emplacements. Leur usage réel dans le rendu reste à démontrer.
- Le manifeste TypeScript n'impose pas encore le statut de droits requis par Q802 ; son type actuel distingue user-provided, open-license et project-generated, sans lien vers une preuve de licence.
- Q802 exige que le packaging refuse tout asset dont les droits de redistribution ne sont pas établis. Ce contrôle n'est pas encore implémenté ni testé.

**Conclusion :** les assets sources restent en inventaire et hors de la bibliothèque runtime approuvée. Aucun lot graphique issu des collections historiques ne doit être intégré à un artefact distribué avant inspection visuelle, vérification de licence et validation technique. Le registre runtime actuel doit être réconcilié avec les fichiers réellement présents avant de déclarer la gestion des assets prête.


## 11. Matrice des layouts Scryfall — V3.125

L'audit fonctionnel a montré que la spécification reconnaissait les types de cartes mais ne listait pas explicitement tous les layouts Scryfall. Les questions Q804–Q805 ajoutent cette matrice et le traitement des faces, côtés, relations meld, coûts et statistiques alternatifs, chapitres, niveaux, marqueurs et textes de rappel.

La matrice fonctionnelle est désormais définie ; le code actuel ne couvre pas encore l'ensemble des layouts. Le statut de réalisation reste donc partiel et doit être vérifié layout par layout avec les fixtures visuelles de Q801/Q797. Les layouts inconnus doivent conserver leurs données et utiliser un repli générique clairement signalé.


## 12. Import direct des decks par URL — V3.126

Q806 formalise l'import des decks publics par URL avec un service réseau natif dans Tauri, des fournisseurs autorisés, des protections SSRF, des limites de réponse et un repli fichier/texte lorsque le navigateur bloque l'accès. Le code actuel ne possède pas encore ce parcours sécurisé complet ; l'import reste best-effort et soumis aux possibilités d'accès des plateformes. La fonctionnalité est spécifiée mais non réalisée.


## 13. Adoption des décisions techniques recommandées — V3.127

Les 75 sections Q519–Q593 (10.514–10.588) ont été relues. Elles couvrent l'interface du gestionnaire d'extensions, la validation de leurs paramètres, les autorisations et la sécurité d'exécution/installation, la résolution des dépendances, la géométrie et la composition SVG, la gestion ICC, la résolution d'image, l'imposition, ainsi que la traçabilité et la publication sûre des générations.

Ces recommandations ont été adoptées comme décisions techniques prises par l'assistant dans V3.127. Les sujets sont donc définis au niveau du cahier des charges ; leur implémentation et leurs tests restent des tâches de développement. Aucune décision fonctionnelle supplémentaire de l'utilisateur n'est nécessaire pour ce bloc.


## 14. Nettoyage structurel V3.128

La section non indexée 10.348, intitulée « Chapitres restant à développer », était placée après 10.503, répétait trois fois une liste devenue obsolète et résumait des sujets désormais couverts par les sections détaillées. Elle a été retirée de V3.128. Les 753 sections/questions indexées sont conservées, leur ordre est strictement croissant et toutes les références de titres/lignes ont été recalculées. La branche main conserve V3.126, V3.127 et V3.128.


## 15. Restauration des exigences d'animation Q478/Q483 — V3.129

L'audit de testabilité avait repéré deux sections sans corps. Les phrases correspondantes existaient mais avaient été placées après Q488 : l'animation de glissement a été replacée sous Q478 et l'adaptation au redimensionnement sous Q483. Q488 conserve désormais uniquement l'exigence d'annonce du panneau aux technologies d'assistance. Les identifiants et le nombre de questions ne changent pas.


## 16. Consolidation des doublons — V3.130

L'audit de similarité a identifié deux paires redondantes. Q437 était identique à Q440 ; Q489 reformulait la même règle de focus que Q485. Les exigences normatives sont conservées en Q440 et Q485. Q437 et Q489 sont désormais des entrées de traçabilité indiquant leur fusion, sans exigence autonome. L'index compte 753 identifiants, dont 751 exigences actives et deux identifiants fusionnés.
