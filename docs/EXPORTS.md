# Exports

## SVG
Le SVG exporté est rendu autonome : l'illustration distante est récupérée puis incorporée en data URI. Le fichier reste donc consultable hors connexion après l'export. Si le serveur d'image refuse les requêtes CORS, l'export affiche une erreur explicite au lieu de générer un fichier incomplet.

## PNG
Le pipeline rasterise le SVG autonome dans un canvas à une échelle configurable. Le réglage par défaut est 3× (2250 × 3150 px), soit 900 DPI pour le format physique standard 63,5 × 88,9 mm.

## PDF
L'export PDF crée une page au format physique 63,5 × 88,9 mm et y place le rendu raster 3×. Cette version ne contient pas encore de fond perdu ni de traits de coupe.

## Cartes multi-faces et personnalisations
Les exports reçoivent la face sélectionnée et les personnalisations actives (cadre, taille de police, texte, etc.). Le contenu de la carte source reste stocké séparément dans le projet.

## Limites
Les polices externes doivent être chargées avant rasterisation. Les illustrations distantes doivent autoriser CORS pour être intégrées au fichier exporté. Les profils d'impression avec fond perdu, repères de coupe et variantes d'imprimeurs restent à développer.
