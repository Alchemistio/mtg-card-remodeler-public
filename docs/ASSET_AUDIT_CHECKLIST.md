# Checklist opérationnelle — audit des assets

Dernière mise à jour : 2026-11-10  
Dépôt : `Alchemistio/mtg-card-remodeler-public` — branche `main`.

Légende : [x] réalisé et vérifié ; [~] partiel / inventorié mais non validé ; [ ] à faire.

## Phase A — Sécurisation et inventaire des sources

- [x] Confirmer le dépôt, la branche et le répertoire racine `Assets/`.
- [x] Inventorier récursivement les fichiers et dossiers Git.
- [x] Recenser les cinq collections de premier niveau.
- [x] Relever les tailles, formats et empreintes SHA disponibles dans l'arbre Git.
- [x] Calculer les groupes de fichiers ayant le même blob SHA.
- [x] Documenter le contexte technique et les points d'intégration de l'application.
- [~] Documenter les provenances connues et les risques de licence.
- [ ] Vérifier les licences de chaque source, package, police, symbole et archive.
- [ ] Vérifier et archiver une photographie immuable de l'inventaire source (commit SHA dédié).

## Phase B — Analyse et classification visuelle

- [x] Identifier les familles de ressources à partir de l'arborescence et des formats MSE.
- [x] Établir la taxonomie cible : Frames, Components, Symbols, Tokens, Fonts.
- [x] Créer un générateur reproductible de catalogue JSON/CSV et de planches de contact : `scripts/assets/build_asset_catalog.py`.
- [x] Confirmer structurellement les six SVG de `Assets/MANA/SVG/` et leur viewBox commun `0 0 82.56 82.56`.
- [~] Relever la nomenclature des symboles `MANA/Flat/` (mana coloré, hybride, phyrexian et spéciaux) ; couverture à confirmer par génération du catalogue.
- [~] Repérer les zones nécessitant une inspection visuelle (noms génériques, variantes, HTML, ZIP, PFI).
- [ ] Exécuter le générateur sur un clone local complet avec Pillow installé.
- [ ] Générer et examiner les planches de contact des PNG/JPEG/WebP.
- [ ] Générer et examiner les planches de contact des SVG (installer CairoSVG pour les vignettes SVG).
- [ ] Ouvrir et inventorier le contenu de chaque archive ZIP.
- [ ] Comparer visuellement les cadres similaires et identifier les variantes uniques.
- [ ] Identifier les dimensions, viewBox, transparences et résolutions de tous les fichiers candidats.
- [ ] Associer chaque ressource candidate à une famille de cartes/layout.
- [ ] Marquer les doublons visuels et les fichiers inutiles après revue.
- [ ] Faire valider les choix de sélection avant toute suppression.

## Phase C — Bibliothèque normalisée et manifeste

- [x] Définir la structure cible et les règles de nommage.
- [x] Définir le schéma du manifeste et les statuts de validation.
- [x] Créer un manifeste source des cinq collections avec volumes, chemins et limites.
- [x] Créer l'index humain des collections et leur correspondance avec les familles fonctionnelles.
- [x] Ajouter un outil de génération locale d'un catalogue détaillé sans modifier les sources.
- [ ] Générer le catalogue exhaustif des fichiers individuels et intégrer ses résultats au manifeste de travail.
- [ ] Extraire les ressources candidates validées vers `Assets/LIBRARY/`.
- [ ] Renommer les ressources identifiées avec des noms stables.
- [ ] Convertir/normaliser les formats selon les besoins réels du renderer.
- [ ] Renseigner dimensions, hash, provenance, licence et compatibilités pour chaque asset normalisé.
- [ ] Valider les licences et attributions avant distribution.
- [ ] Ajouter des tests de cohérence du manifeste (chemins existants, IDs uniques, hash, formats).
- [ ] Connecter le manifeste aux composants de rendu sans casser le moteur existant.
- [ ] Vérifier build, tests et rendus visuels après intégration.

## Phase D — Intégration applicative

- [ ] Définir le chargement lazy et le budget de poids des bundles.
- [ ] Intégrer les cadres et composants validés.
- [ ] Ajouter les layouts non couverts et tests visuels.
- [ ] Valider les exports SVG/PNG/PDF et l'impression.

## Exécution du catalogue

Depuis la racine du dépôt :

```bash
python -m pip install Pillow CairoSVG
python scripts/assets/build_asset_catalog.py --root Assets --out /tmp/mtg-assets-catalog
```

Le script génère `assets.catalog.json`, `assets.catalog.csv` et les planches JPEG dans le répertoire de sortie. CairoSVG est facultatif pour les vignettes SVG ; Pillow est requis pour les dimensions et planches raster. Les catégories automatiques sont heuristiques et doivent être revues. Le script ne modifie jamais les sources.

## Règles de sécurité

- Ne pas supprimer les sources originales sur la seule base d'un hash identique.
- Ne pas renommer un fichier dont le rôle n'a pas été identifié.
- Ne pas déclarer une licence vérifiée sans preuve consultable.
- Ne pas inclure les archives sources dans les bundles de production.
- Toute opération destructive exige un inventaire avant/après et une validation.


## Avancement complémentaire — inventaire individuel

- [x] Générer les fiches de métadonnées des 37 371 fichiers des cinq collections source à partir de l'arbre Git.
- [x] Fractionner l'inventaire Full-Magic-Pack en dix-neuf fichiers JSON pour respecter des tailles de commit raisonnables.
- [x] Ajouter les inventaires individuels MANA (314), Fonts (10), MtgCard Builder (610), Big Pack (1 996) et Full-Magic-Pack (34 441).
- [x] Ajouter un validateur de cohérence : `scripts/assets/validate_asset_inventory.py`.
- [x] Définir les règles d'admission de `Assets/LIBRARY/` dans son README.
- [ ] Exécuter le validateur sur un clone local complet et corriger les éventuelles anomalies.
- [ ] Exécuter le catalogue visuel (dimensions, SHA-256 du contenu et planches de contact).
- [ ] Effectuer la revue visuelle et juridique, puis sélectionner/normaliser le premier lot.

**Important :** les enregistrements individuels contiennent le SHA Git (SHA-1), pas le SHA-256 des octets. Les classifications sont heuristiques. Ils ne certifient ni le contenu visuel ni les droits.


## Revue de provenance et état de clôture de la phase C

- [x] Rechercher les fichiers LICENSE/LICENCE/NOTICE/README repérables dans l'arbre Git.
- [x] Lire le texte MIT du package M15 Big Text (périmètre limité à ce package).
- [x] Lire les notices MSE de magic-modules et relever dépendances/version et ordre des couches.
- [x] Lire le README Phyrexian et relever les crédits ainsi que la référence à un `license.txt` absent de l'arbre examiné.
- [x] Créer `Assets/METADATA/PROVENANCE_AND_LICENSE_REVIEW.md`.
- [x] Contrôler les 23 inventaires JSON : 37 371 fiches analysées, IDs et chemins uniques, JSON valides.
- [ ] Vérifier les licences de chaque famille source et des polices.
- [ ] Produire les planches de contact et effectuer la revue visuelle.
- [ ] Extraire/normaliser le premier lot d'assets dont les droits et l'usage sont confirmés.
- [ ] Ajouter les assets approuvés au manifeste runtime et valider les rendus.

**Clôture :** l'inventaire et la préparation documentaire de la phase C sont terminés. La phase C complète n'est pas déclarée close : la bibliothèque normalisée reste volontairement vide, car les droits et la sélection visuelle ne sont pas établis.
