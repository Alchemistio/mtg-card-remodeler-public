# Exports

## PNG
Le pipeline rasterise le SVG dans un canvas à une échelle configurable. Le réglage par défaut de l'export applicatif est 3× (2250 × 3150 px), supérieur à 300 DPI pour le format physique 63,5 × 88,9 mm.

## PDF
L'export PDF crée une page au format physique 63,5 × 88,9 mm et y place le rendu raster 3×. Cette version ne contient pas encore de fond perdu ni de traits de coupe ; ceux-ci seront ajoutés avec les profils d'impression.

## Limites
Les polices externes et images distantes doivent être chargées et autorisées par le navigateur avant rasterisation. Les politiques CORS des images peuvent bloquer l'export PNG/PDF ; une future couche de cache local des illustrations évitera cette dépendance.
