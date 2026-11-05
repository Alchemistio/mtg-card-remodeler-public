# Exports

## SVG
Le SVG exporté est rendu autonome : l'illustration distante est récupérée puis incorporée en data URI. Le fichier reste donc consultable hors connexion après l'export. Si le serveur d'image refuse les requêtes CORS, l'export affiche une erreur explicite au lieu de générer un fichier incomplet.

## PNG
Le pipeline rasterise le SVG autonome dans un canvas à une échelle configurable. Le réglage par défaut est 3× (2250 × 3150 px), soit 900 DPI pour le format physique standard 63,5 × 88,9 mm.

## PDF prêt à imprimer
Par défaut, l'export PDF utilise :
- Format fini : 63,5 × 88,9 mm.
- Fond perdu : 3 mm sur les quatre côtés.
- Traits de coupe : activés, placés à l'extérieur du fond perdu.
- Résolution de rendu : 900 DPI.

Le document PDF inclut donc une zone de fond perdu de 69,5 × 94,9 mm, ainsi qu'une marge externe pour les repères de coupe. Les bandes de fond perdu prolongent les bords du cadre pour éviter les liserés transparents.

L'API d'export accepte aussi `{ bleedMm, cropMarks }` pour adapter le fond perdu (0 à 5 mm) et activer/désactiver les traits de coupe.

## Cartes multi-faces et personnalisations
Les exports reçoivent la face sélectionnée et les personnalisations actives (cadre, taille de police, texte, etc.). Le contenu de la carte source reste stocké séparément dans le projet.

## Limites
Les polices externes doivent être chargées avant rasterisation. Les illustrations distantes doivent autoriser CORS pour être intégrées au fichier exporté. Les profils d'impression propres à certains imprimeurs (traits de sécurité, marges techniques spécifiques, CMJN et profils ICC) restent à développer.
