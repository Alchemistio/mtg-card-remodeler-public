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
- [~] Repérer les zones nécessitant une inspection visuelle (noms génériques, variantes, HTML, ZIP, PFI).
- [ ] Générer des planches de contact des PNG/JPEG/WebP.
- [ ] Générer des planches de contact des SVG après rendu sécurisé.
- [ ] Ouvrir et inventorier le contenu de chaque archive ZIP.
- [ ] Comparer visuellement les cadres similaires et identifier les variantes uniques.
- [ ] Identifier les dimensions, viewBox, transparences et résolutions.
- [ ] Associer chaque ressource candidate à une famille de cartes/layout.
- [ ] Marquer les doublons visuels et les fichiers inutiles après revue.
- [ ] Faire valider les choix de sélection avant toute suppression.

## Phase C — Bibliothèque normalisée et manifeste

- [x] Définir la structure cible et les règles de nommage.
- [x] Définir le schéma du manifeste et les statuts de validation.
- [x] Créer un manifeste source des cinq collections avec volumes, chemins et limites.
- [x] Créer l'index humain des collections et leur correspondance avec les familles fonctionnelles.
- [ ] Extraire les ressources candidates validées vers `Assets/LIBRARY/`.
- [ ] Renommer les ressources identifiées avec des noms stables.
- [ ] Convertir/normaliser les formats selon les besoins réels du renderer.
- [ ] Renseigner dimensions, hash, provenance, licence et compatibilités pour chaque asset normalisé.
- [ ] Valider les licences et attributions avant distribution.
- [ ] Ajouter des tests de cohérence du manifeste (chemins existants, IDs uniques, hash, formats).
- [ ] Connecter le manifeste aux composants de rendu sans casser le moteur existant.
- [ ] Vérifier build, tests et rendus visuels après intégration.

## Phase D — Intégration applicative (hors périmètre de cette intervention)

- [ ] Définir le chargement lazy et le budget de poids des bundles.
- [ ] Intégrer les cadres et composants validés.
- [ ] Ajouter les layouts non couverts et tests visuels.
- [ ] Valider les exports SVG/PNG/PDF et l'impression.

## Règles de sécurité

- Ne pas supprimer les sources originales sur la seule base d'un hash identique.
- Ne pas renommer un fichier dont le rôle n'a pas été identifié.
- Ne pas déclarer une licence vérifiée sans preuve consultable.
- Ne pas inclure les archives sources dans les bundles de production.
- Toute opération destructive exige un inventaire avant/après et une validation.
