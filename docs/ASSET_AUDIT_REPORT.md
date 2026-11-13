# Rapport d'avancement — audit du patrimoine Assets

Date : 2026-11-10  
Dépôt : `Alchemistio/mtg-card-remodeler-public`  
Branche : `main`

## 1. Résumé

Après la création du référentiel d'audit et du manifeste de collections, l'étape suivante a consisté à préparer une méthode reproductible de catalogue visuel. Un script en lecture seule a été ajouté au dépôt. Une inspection structurelle ciblée de la collection MANA et des sous-dossiers de MtgCard Builder a également été réalisée.

**La revue visuelle exhaustive n'est pas encore terminée** : les fichiers binaires ne sont pas récupérables par l'interface GitHub texte utilisée ici. Le script doit être exécuté sur un clone local complet du dépôt pour générer les planches de contact et les métadonnées détaillées. Aucune ressource n'a été déplacée, renommée, supprimée ou intégrée au renderer.

## 2. Nouveau livrable

- `scripts/assets/build_asset_catalog.py` : générateur local de catalogue JSON/CSV, métadonnées d'images, hash SHA-256, inspection des ZIP et planches de contact.
- Le script écrit exclusivement dans le dossier indiqué par `--out` ; il ne modifie jamais les assets sources.
- Pillow est requis pour les dimensions et planches raster. CairoSVG est facultatif pour produire les vignettes des SVG.
- Les catégories calculées automatiquement sont heuristiques ; aucune licence n'est inférée et les ZIP ne sont pas extraits.

Commande recommandée :

```bash
python -m pip install Pillow CairoSVG
python scripts/assets/build_asset_catalog.py --root Assets --out /tmp/mtg-assets-catalog
```

Sorties : `assets.catalog.json`, `assets.catalog.csv` et `contact-sheets/*.jpg`.

## 3. Constatations ciblées

- `Assets/MANA/SVG/` contient six fichiers : Blanc, Bleu, Noir, Rouge, Vert et Less.
- Les six SVG déclarent le même viewBox : `0 0 82.56 82.56`.
- `Assets/MANA/Flat/` comprend des noms explicites pour les cinq couleurs, le mana incolore, des symboles hybrides et plusieurs symboles phyrexians/spéciaux.
- `Assets/MtgCard Builder/Regular/` comporte des sous-dossiers explicites comme `Regular Frame`, `EnchantmentFrame Nyx` et `Mana Symbol`, mais aussi des fichiers numérotés génériques.
- Le dossier `Token/` contient également des fichiers numérotés génériques ; leur identification nécessite les planches de contact.

Ces constats sont structurels ou issus de la lecture des en-têtes SVG ; ils ne constituent pas une validation de l'apparence, de la qualité, de la compatibilité ou des droits.

## 4. État des phases

- **Phase A :** inventaire et contexte documentés ; licences et snapshot immuable à faire.
- **Phase B :** taxonomie et script prêts ; génération/examen réel des planches et comparaison visuelle encore à faire.
- **Phase C :** manifeste de collections et schéma prêts ; catalogue individuel exhaustif, sélection, normalisation et contrôle juridique restent à faire.
- **Phase D :** non commencée.

## 5. Limites et décisions de prudence

L'interface GitHub utilisée pour cet audit renvoie les fichiers texte, mais ne permet pas de récupérer directement les PNG binaires pour fabriquer les planches dans cet environnement. Il serait incorrect d'affirmer que les PNG ont été examinés visuellement. Le script a donc été commité pour permettre une exécution reproductible dans l'environnement local du projet.

Aucun déplacement de source ni déduplication destructive n'a été réalisé. Les licences restent `pending-review`. Les assets restent non approuvés pour redistribution.

## 6. Prochaine action

Exécuter le script sur un clone complet, puis examiner en priorité les planches MANA, les dossiers Regular Frame / EnchantmentFrame Nyx / Mana Symbol et Token. À partir du catalogue produit, enrichir le manifeste asset par asset et décider d'un premier lot de ressources candidates, sans modifier les sources.


## 7. Mise à jour — inventaire individuel des sources

Un inventaire individuel de métadonnées a été créé pour les 37 371 fichiers des cinq collections, à partir de l'arbre Git récursif. Les fichiers JSON sont rangés sous `Assets/METADATA/inventory-*.json` ; Full-Magic-Pack est fractionné en dix parties. Le manifeste principal référence maintenant ces inventaires.

Un validateur indépendant a été ajouté : `scripts/assets/validate_asset_inventory.py`. Il contrôle la validité JSON, le nombre de fiches, les IDs/chemins uniques, les champs requis et la forme des Git blob SHA. Il peut aussi vérifier l'existence des fichiers avec `--root .`.

**Limite importante :** le validateur n'a pas été exécuté dans un clone local complet dans cet environnement. Aucun PNG/JPEG/TTF binaire n'a été téléchargé ici. Les fiches sont donc des métadonnées Git, non des analyses visuelles ou des validations de licence. Le script de catalogue local reste nécessaire pour dimensions, SHA-256 des octets et planches de contact.

`Assets/LIBRARY/README.md` formalise les critères d'entrée dans la future bibliothèque normalisée. Aucun fichier graphique n'y est encore approuvé.


## 8. Revue de provenance et décision sur la phase C

La recherche de fichiers de licence et de notices a permis d'identifier un seul texte de licence explicite dans les sources examinées : le MIT du package `magic-m15-bigtext.mse-style`, limité à ce package. Les READMEs de `magic-modules.mse-include` décrivent des dépendances partagées/versionnées et un ordre Z de couches ; cette architecture doit être conservée lors d'une conversion. Le README Phyrexian mentionne des crédits et un `license.txt` d'accompagnement qui n'a pas été retrouvé dans l'arbre Git consulté. Les polices, MANA, MtgCard Builder et Big Pack restent sans preuve globale de droits.

Le registre détaillé est `Assets/METADATA/PROVENANCE_AND_LICENSE_REVIEW.md`. La bibliothèque `Assets/LIBRARY/` est créée mais ne contient aucun asset de production : c'est volontaire, car aucun lot n'a été validé à la fois visuellement et juridiquement.

### État de clôture

L'inventaire individuel des 37 371 fichiers est terminé et ses 23 fichiers JSON ont été relus : 37 371 fiches, aucun JSON invalide, aucun identifiant ou chemin dupliqué détecté. Le générateur de catalogue visuel et le validateur local sont livrés.

**La phase C n'est pas déclarée entièrement terminée.** La normalisation et la sélection de ressources sont bloquées par l'absence de revue visuelle des binaires et par les droits non établis. Le faire malgré ces incertitudes créerait un risque de redistribution non autorisée et pourrait casser les dépendances MSE. Aucun original n'a été modifié.

Pour terminer réellement la phase C, il faut exécuter le générateur sur un clone complet, examiner les planches, confirmer les licences des lots retenus, puis seulement extraire/normaliser ces fichiers dans `Assets/LIBRARY/` et enrichir le manifeste runtime.


## 9. Amélioration du lancement local — environnement autonome

Le générateur dispose maintenant d'un lanceur interactif : `scripts/assets/run_asset_audit.py`, accompagné d'un raccourci Windows `scripts/assets/run_asset_audit.bat`. L'utilisateur choisit le dossier de travail dans une fenêtre de sélection. Le lanceur crée un environnement virtuel dans ce dossier, installe Pillow et CairoSVG sans modifier Python global, exécute le catalogue, puis supprime l'environnement temporaire. Les résultats sont conservés dans le sous-dossier `catalog/` du dossier choisi.

La documentation d'utilisation est dans `scripts/assets/README.md`. Python 3.10+ doit être installé une fois au préalable et une connexion Internet est nécessaire pour installer les dépendances. Le dossier de travail doit être hors de `Assets/` afin d'éviter que les résultats ne soient réinventoriés comme sources.

Cette amélioration est commise, mais **pas encore testée sur le poste local avec le clone complet**. La génération visuelle des assets reste donc à effectuer. Un arrêt forcé du système peut laisser le dossier temporaire `.asset-audit-runtime`, qui est alors supprimable manuellement.


## 10. État intermédiaire du projet Rust — 2026-11-13

Le dépôt dédié `Alchemistio/mtg_card_auditory` a reçu un moteur d'inventaire local initial : parcours récursif sans suivi des liens symboliques, calcul SHA-256 par blocs, classification indicative par extension, inventaire JSON versionné et export CSV UTF-8. L'interface permet de lancer l'analyse et d'exporter les deux formats. Les exports dans la source analysée sont refusés. L'outil GitHub accepte une URL de dépôt et résout les refs en SHA de commit.

La CI Windows a mis en évidence une erreur Clippy bloquante, corrigée dans un commit ultérieur. Les runs associés aux nouveaux commits sont encore en cours ; aucun succès de compilation ou d'exécution des tests n'est revendiqué. Les fonctions avancées et l'analyse de 37 371 assets restent à faire.


## 11. Renforcement du parcours distant et raster — 2026-11-13

L'exploration GitHub a été renforcée : la référence branche/tag/commit est résolue vers le SHA du commit et le SHA de l'arbre est extrait explicitement. Si l'arbre récursif est tronqué, l'application descend dans les sous-arbres en protégeant les cycles et la profondeur. Les chemins de téléchargement contrôlent les composants et rejettent les liens symboliques. Le scan local relève maintenant le format et les dimensions raster sans décoder les pixels. Les vérifications CI Windows associées sont encore en cours.


## 12. Analyse SVG, polices et ZIP — 2026-11-13

Le scan local contrôle les SVG comme XML sans les exécuter, extrait le viewBox et signale les références externes détectées. Les polices prises en charge fournissent famille et sous-famille. Les archives ZIP sont inspectées sans extraction : nombre d'entrées, taille décompressée déclarée, chemins suspects et ratios inhabituels. Les limites de taille et d'entrées protègent le scan. La CI sur le commit SVG/polices a passé Clippy et les tests ; le build Release restait en cours. Le code ZIP, ajouté ensuite, attend sa propre validation CI.


## 13. Validation CI et fonctionnalités d'interface — 2026-11-13

Le commit `45e601e` du dépôt Rust a passé le pipeline Windows complet : formatage, Clippy, tests, compilation Release et upload de l'artefact. Il inclut le scan local parallèle, SHA-256, métadonnées raster/SVG/polices et inspection ZIP sans extraction. Après ce jalon, le développement a ajouté les workers d'arrière-plan, la détection des doublons binaires et le rapport HTML autonome ; ces changements sont en cours de revalidation CI. Aucun binaire issu du commit intermédiaire n'est présenté comme la livraison finale.


## 14. Validation complète du prototype enrichi — 2026-11-13

Le commit `6310f92` a passé l'intégralité de la CI Windows : formatage, Clippy, tests, build Release et upload de l'artefact. Cette validation couvre les workers d'arrière-plan, la détection des doublons exacts, la vue filtrable et le rapport HTML autonome. Le code ajoute ensuite le type de canaux et la présence d'alpha raster ; sa CI reste en cours.


## 15. Première planche de contact et métadonnées alpha — 2026-11-13

Une fonction d'export PNG paginée (16 images/page) a été ajoutée, accompagnée d'un index texte. Le SHA-256 source est recalculé avant rendu et les liens symboliques sont refusés. Le décodeur raster fournit également type de canaux et présence d'alpha sans décodage complet des pixels lors de l'inventaire. La CI de ces ajouts est en cours.


## 16. Comparaison d'inventaires et diagnostics de quota — 2026-11-13

L'application compare les inventaires JSON par chemin et SHA-256, classe ajouts/suppressions/modifications/fichiers inchangés et exporte un rapport JSON hors des sources comparées. Les champs optionnels manquants des anciens inventaires v1 sont désormais tolérés. Le client GitHub applique un timeout HTTP et identifie les réponses 429 ainsi que les 403 dus à l'épuisement du quota. Le commit `a4a099e` a passé la CI Windows complète ; les derniers changements restent à vérifier.
