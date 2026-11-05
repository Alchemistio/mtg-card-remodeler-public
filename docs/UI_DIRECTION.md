# Direction artistique — MTG Card Remodeller

Cette direction reprend les deux références HTML fournies : `showcase-da.html` et `showcase_menu.html`. Elles servent de référence visuelle et de comportement d'interface.

## Principe de composition

- **Thème Nuit** pour les écrans de gestion : recherche, bibliothèque, édition, comparaison, réglages et export. C'est le thème principal de l'atelier.
- **Thème Parchemin** pour les écrans de consultation : fiches de cartes, encyclopédie, historique et documentation. Ne pas mélanger les deux thèmes sur un même écran.
- Menus à sections, bandeau d'aide en haut, contenu central sombre et bandeau descriptif en bas lorsque le flux d'écran s'y prête.
- Sélection lisible par un reflet or/ivoire et une barre latérale lumineuse ; navigation clavier et focus visibles.
- Chiffres, quantités, statistiques et références avec une police à chasse fixe ou condensée.

## Tokens repris des références

| Usage | Valeur |
|---|---|
| Nuit claire | `#2a343a` |
| Nuit profonde | `#161c20` |
| Bandeaux | `#000000` |
| Texte principal | `#f4f1e8` |
| Texte secondaire | `#8f9aa0` |
| En-têtes de colonnes | `#aab4b8` |
| Sélection nuit | `rgba(188,172,116,.78)` |
| Or / aide | `#e8b422` |
| Barre de défilement | `#f2d21b` |
| Parchemin clair | `#dccaa3` |
| Parchemin moyen | `#cdb98f` |
| Bord du parchemin | `#8a7655` |
| Encre | `#3b2a1c` |
| Sélection parchemin | `rgba(176,108,98,.72)` |
| Fenêtre bleue | `rgba(46,76,118,.94)` |

## Typographie

- Texte d'interface : Segoe UI, avec Arimo comme alternative libre.
- Chiffres : Miedinger si la police est disponible, sinon Arimo.
- Titres de dialogue uniquement : Zilvertype Pro si disponible, sinon EB Garamond.
- Les polices propriétaires citées dans les références ne sont pas embarquées. Le projet utilise des alternatives libres et ne doit pas redistribuer ces fontes sans licence.

## Application actuelle

La première passe applique le thème Nuit à l'atelier existant : barre supérieure sombre, panneau de bibliothèque structuré, sélection dorée, scène d'aperçu sombre, champs de réglage et commandes d'export assortis. La logique fonctionnelle et les moteurs de rendu ne sont pas modifiés par cette couche visuelle.

## À faire pour la finition

1. Revoir les captures réelles sur Windows et corriger les espacements à la taille de fenêtre native.
2. Décliner le thème Parchemin pour les futures vues de consultation.
3. Ajouter une navigation clavier cohérente dans les listes et panneaux.
4. Vérifier le contraste et le comportement en réduction de mouvement.
5. Tester les longues chaînes françaises et les cartes à nombreuses capacités.
