# Registre de provenance et de revue des licences — Assets

Date de revue : 2026-11-10  
Périmètre : fichiers et notices textuelles repérés dans les cinq collections source.  
Statut général : **non autorisé à la redistribution tant que la revue par ressource n'est pas terminée**.

## 1. Résultats vérifiés

| Source / famille | Éléments de preuve observés | Conclusion prudente | Statut |
|---|---|---|---|
| `Full-Magic-Pack-main/data/magic-m15-bigtext.mse-style/` | Fichier `LICENSE` présent, texte MIT, Copyright (c) 2025 Sam Boosalis. README identifie « M15 Big Text » pour MSE v2.5+. | Licence MIT explicite pour ce package et les éléments qu'elle couvre. Vérifier les notices des fichiers tiers inclus et conserver LICENSE. | `verified-package-license` (scope limité) |
| `Full-Magic-Pack-main/data/magic-modules.mse-include/` | README principal décrit les modules, les dépendances, les conventions d'index Z et l'ordre de superposition. Plusieurs sous-modules ont leur propre README. | Documentation technique utile, mais aucun texte de licence global identifié dans les notices examinées. Dépendance/version à préserver. | `pending-review` |
| `Full-Magic-Pack-main/Magic - Fonts/template specific fonts/Magic - Phyrexian/` | README attribue le mapping à Savil et d'autres utilisateurs MTG Salvation, le template à Anuttymous, la police à Anuttymous/Fontstruct, et indique qu'un fichier `license.txt` doit accompagner l'archive. | Le README seul ne fournit pas les termes de licence. Le fichier `license.txt` attendu n'a pas été trouvé dans l'arborescence Git examinée. Ne pas redistribuer cette police avant d'avoir retrouvé les termes et l'ensemble de l'archive. | `pending-review` / blocage |
| `Assets/Fonts/` | Dix fontes présentes, noms de familles visibles dans l'arbre Git ; aucun fichier de licence propre à ce dossier n'a été repéré dans l'inventaire de noms licence/readme. | La présence dans le dépôt ne donne pas les droits d'incorporation ou redistribution. Examiner les métadonnées internes et obtenir les licences. | `pending-review` |
| `Assets/MANA/` | Fichiers de symboles PNG/SVG et fontes ; pas de licence générale repérée dans les noms de fichiers de la collection. | Source, auteur et droits non établis. Ne pas intégrer à un build distribué avant clarification. | `pending-review` |
| `Assets/MtgCard Builder/` | Images, SVG, HTML et archives ; les fichiers génériques et archives nécessitent une attribution/source par lot. | Aucun droit global démontré. Les archives doivent être inspectées et leur provenance remontée. | `pending-review` |
| `Assets/Big Pack/` | Styles, ressources et polices ; aucun fichier de licence racine unique identifié lors du repérage des noms. | Les packages peuvent avoir des licences distinctes. Une licence d'un package ne couvre pas les autres. | `pending-review` |
| `mtg-card` / FeSens (dépendance npm, hors assets source racine) | `docs/THIRD_PARTY_NOTICES.md` rapporte une licence MIT déclarée en amont et une provenance graphique MTG Card Designer Figma par @ux_andrew. | La MIT du paquet ne remplace pas les conditions des ressources Figma d'origine. Le dépôt amont ne contient pas de LICENSE séparée selon la notice du projet. | `pending-review` pour redistribution des ressources |

## 2. Contrainte technique MSE

Le README de `magic-modules.mse-include` décrit une architecture de couches et un ordre Z : backboard, illustration, fond/cadre, trim, pinlines, border, éléments de plaque, watermarks, attachments, texte, overlays et corners. Il indique aussi des dépendances vers le package `magic-modules.mse-include`, version `2024-10-01`, pour certains modules.

Conséquences :
- ne pas extraire un fichier graphique isolé sans noter son package et ses dépendances ;
- conserver les packages MSE comme sources autonomes ;
- pour une conversion en composants React/SVG, documenter explicitement l'ordre de couches, les masques et les éléments qui débordent du cadre ;
- ne pas considérer le nom de fichier comme une preuve suffisante de compatibilité.

## 3. Règles de décision

1. Une licence n'est vérifiée que pour son périmètre explicite. Le MIT de M15 Big Text ne couvre pas automatiquement les autres styles du pack.
2. Une attribution ou un README n'est pas un substitut au texte de licence.
3. Les polices doivent être examinées individuellement : licence d'usage desktop, web embedding, modification et redistribution sont des droits distincts.
4. En cas d'absence de preuve : `pending-review`, pas d'intégration à la bibliothèque runtime distribuée.
5. Conserver les fichiers LICENSE/NOTICE/README requis dans la bibliothèque normalisée.
6. Les noms de marques, symboles et illustrations Magic: The Gathering peuvent relever de droits distincts ; ce registre ne constitue pas un avis juridique.

## 4. Prochaines vérifications bloquantes

- Retrouver le `license.txt` de l'archive Phyrexian et vérifier les droits de la police et du mapping.
- Identifier l'origine et la licence de chacune des dix fontes de `Assets/Fonts/`.
- Obtenir les licences/provenances des collections MANA, MtgCard Builder et Big Pack.
- Pour Full-Magic-Pack, relever chaque package ayant un LICENSE/NOTICE/README et cartographier les dépendances ; étendre la recherche aux archives imbriquées.
- Faire confirmer les droits de redistribution des assets Figma MTG Card Designer utilisés par FeSens si les ressources sont distribuées autrement que via le paquet npm.
