# Checklist — audit et constitution de la bibliothèque Assets

Référence : [ASSETS_REFERENCE.md](./ASSETS_REFERENCE.md)  
Dépôt : Alchemistio/mtg-card-remodeler-public · Branche : main · Date de suivi : 2026-11-10

Statuts : [x] terminé · [~] partiel/en cours · [ ] à faire · [!] bloquant/à arbitrer

## Phase A — Sécurisation et inventaire des sources
- [x] Confirmer les cinq collections sources sous `Assets/` et distinguer `Assets/METADATA`.
- [x] Recenser tous les fichiers et dossiers via l'arbre Git récursif.
- [x] Relever taille, extension et SHA Git de chaque fichier.
- [x] Calculer les groupes de doublons binaires exacts.
- [x] Produire des manifestes techniques exhaustifs par collection (fichiers CSV shardés).
- [x] Conserver la référence temporelle et la branche de l'inventaire (`main`, 2026-11-10).
- [ ] Ajouter les licences et attributions vérifiées pour chaque collection.
- [ ] Vérifier les archives et dépendances internes avant toute déduplication.

## Phase B — Analyse visuelle et classification
- [~] Déduire les grandes familles à partir des noms, extensions et structures des packages.
- [ ] Extraire et examiner les aperçus de tous les PNG/JPEG/WebP pertinents.
- [ ] Générer des planches de contact par collection et sous-famille.
- [ ] Rendre/inspecter les SVG et identifier leurs dimensions/viewBox.
- [ ] Inspecter le contenu de toutes les archives ZIP et formats propriétaires (dont PFI/MSE).
- [ ] Identifier les doublons visuels et les variantes quasi identiques.
- [ ] Valider chaque ressource candidate : catégorie, style, couleur, layout, qualité.
- [ ] Écarter les HTML de récupération web inutiles, fichiers temporaires et ressources invalides après vérification.
- [ ] Produire un catalogue visuel avec ID, vignette, chemin source et statut.

## Phase C — Bibliothèque sélectionnée et manifeste
- [x] Définir l'arborescence cible SOURCE / LIBRARY / METADATA.
- [x] Définir les catégories fonctionnelles FRM/CMP/SYM/FNT/TOK/LAY.
- [x] Définir le schéma d'une entrée de manifeste runtime.
- [x] Générer un inventaire machine-readable exhaustif des cinq collections sources (CSV shardés avec chemins, tailles, SHA Git et extensions).
- [ ] Sélectionner les ressources après validation visuelle (dépend de Phase B).
- [ ] Extraire les ressources approuvées dans la bibliothèque normalisée.
- [ ] Convertir les formats nécessaires (SVG/PNG) et documenter les transformations.
- [ ] Compléter le manifeste runtime avec dimensions, compatibilités, licence et chemin final.
- [ ] Vérifier les chemins et l'intégrité de chaque ressource extraite.
- [ ] Créer les tests de chargement du manifeste.

## Phase D — Intégration applicative (hors périmètre demandé pour cette passe)
- [ ] Raccorder le manifeste au moteur de rendu.
- [ ] Ajouter les composants graphiques modulaires.
- [ ] Ajouter tests visuels et tests d'export.
- [ ] Mesurer l'impact sur les performances et le poids des builds.

## Phase E — Validation
- [ ] Comparer les rendus avec les références.
- [ ] Valider exports SVG, PNG et PDF.
- [ ] Valider droits de redistribution et attributions.
- [ ] Valider la distribution des ressources et leur versionnement.

## Journal d'exécution
### 2026-11-10
- Inventaire Git récursif réalisé sur le commit `2ada6c1342a61763a849cd869937dfad6245e220`.
- Collections trouvées à la racine : Full-Magic-Pack-main, Big Pack, MtgCard Builder, MANA, Fonts.
- 37371 fichiers et 1772 dossiers recensés.
- 12 fichiers CSV de manifestes techniques créés (chemin, taille, SHA, extension).
- Les originaux n'ont pas été déplacés ni modifiés.
- Phase B reste partielle : pas d'inspection visuelle exhaustive ; la sélection et l'extraction de Phase C sont donc volontairement non réalisées.
