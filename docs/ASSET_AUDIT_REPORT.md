# Rapport de réalisation — audit du patrimoine Assets

Date : 2026-11-10  
Dépôt : `Alchemistio/mtg-card-remodeler-public`  
Branche : `main`

## 1. Résumé exécutif

Les phases d'inventaire, de contextualisation et de préparation du référentiel ont été réalisées. Le manifeste de source et les documents de gouvernance ont été créés. Les collections originales n'ont pas été déplacées ni modifiées.

**La Phase C n'est pas entièrement terminée au sens de l'extraction et de la normalisation des fichiers graphiques** : l'inspection visuelle exhaustive, l'extraction des archives, le contrôle juridique et la conversion ne peuvent être validés à partir des seules métadonnées Git. Ces tâches restent explicitement ouvertes dans la checklist. Le manifeste créé est un manifeste d'inventaire des sources, pas encore un catalogue exhaustif de chaque asset validé pour la production.

## 2. Documents créés

- `docs/ASSET_AUDIT_REFERENCE.md` : contexte technique, inventaire, taxonomie, règles de gouvernance, schéma d'asset et liens vers les documents.
- `docs/ASSET_AUDIT_CHECKLIST.md` : suivi opérationnel avec statuts réalisés, partiels et à faire.
- `docs/ASSET_AUDIT_REPORT.md` : présent rapport.
- `Assets/METADATA/assets.manifest.json` : manifeste machine-readable des collections sources et de leur état d'analyse.
- `Assets/METADATA/ASSET_INDEX.md` : index humain des collections, contenus recensés et familles fonctionnelles cibles.

## 3. Résultats d'inventaire

| Collection | Fichiers | Volume indicatif |
|---|---:|---:|
| Full-Magic-Pack-main | 34 441 | 934,7 Mo |
| Big Pack | 1 996 | 441,7 Mo |
| MtgCard Builder | 610 | 375 Mo |
| MANA | 314 | 2,2 Mo |
| Fonts | 10 | 0,57 Mo |
| **Total** | **37 371** | **environ 1,75 Go** |

L'arbre MSE de Full-Magic-Pack comprend notamment 371 styles, 32 includes, 76 symbol fonts, 13 locales, 7 définitions de jeu et 22 modèles d'export.

L'analyse par SHA a relevé 3 875 groupes de fichiers avec contenus binaires identiques (12 299 chemins concernés, soit 8 424 copies supplémentaires). Estimation de volume redondant : environ 337,4 Mo. Ce chiffre ne constitue pas une recommandation de suppression : certains packages peuvent nécessiter des copies autonomes.

## 4. Contexte applicatif

Le projet utilise React/TypeScript/Vite/Tauri 2, un renderer FeSens pour certaines familles et un renderer SVG local. Le renderer local dépend actuellement de palettes définies dans `src/assets/framePresets.ts`. Le registre `src/assets/manifest.ts` référence six SVG de cadres dans `assets/frames/` qui ne sont pas présents à ces chemins dans l'arbre observé. L'intégration des collections racine n'est donc pas démontrée.

Le dossier `Assets/` est une bibliothèque source de référence et non une bibliothèque de production branchée sur le renderer.

## 5. Décisions prises

1. Préserver les sources originales.
2. Séparer les archives sources de la bibliothèque normalisée.
3. Organiser la bibliothèque cible par familles fonctionnelles : Frames, Components, Symbols, Tokens, Fonts.
4. Exiger provenance, hash, format, dimensions, statut juridique et compatibilités avant validation d'un asset.
5. Ne jamais supprimer automatiquement un doublon sur la seule base du hash.
6. Ne pas intégrer de ressource dont les droits de redistribution ne sont pas établis.

## 6. Travaux non exécutés / limites

- Pas de génération de planches de contact ni d'inspection visuelle exhaustive des images.
- Les archives ZIP n'ont pas été ouvertes et inventoriées individuellement.
- Les fichiers MSE propriétaires n'ont pas été convertis en SVG/PNG.
- Les licences des polices, images, packs MSE et symboles n'ont pas été vérifiées.
- Aucune ressource candidate n'a été déplacée vers `Assets/LIBRARY/` : sans revue visuelle et juridique, une extraction prétendument validée serait trompeuse.
- Aucun changement de code applicatif n'a été effectué ; le renderer et le registre TypeScript existants sont inchangés.
- Aucun build/test n'a été lancé dans un environnement local de compilation.

## 7. Suites prioritaires

1. Générer des planches de contact à partir d'un clone local ou d'une archive du dépôt.
2. Inspecter les ZIP, packages MSE, PFI et fichiers génériques.
3. Faire la revue juridique des sources et fontes.
4. Sélectionner un premier lot d'assets à forte valeur : mana SVG, symboles et cadres ciblés.
5. Extraire et normaliser ce lot dans `Assets/LIBRARY/`.
6. Enrichir le manifeste asset par asset et ajouter une validation automatisée des chemins/IDs.
7. Faire évoluer le registre TypeScript et le renderer dans une intervention distincte, avec tests visuels.

## 8. Conclusion

Le patrimoine est riche et pertinent pour l'évolution du produit, mais la valeur applicative dépend de la sélection, de la conversion et de la traçabilité. Le référentiel et la checklist sont désormais en place pour poursuivre ce travail sans confondre inventaire, validation graphique et autorisation de redistribution.
