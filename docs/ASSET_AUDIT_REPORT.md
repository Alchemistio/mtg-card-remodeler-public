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
