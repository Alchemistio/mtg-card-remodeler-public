# Exports

## SVG
Pour le moteur SVG local, l’illustration distante est récupérée puis incorporée en data URI. Pour les cadres FeSens, le fichier SVG contient une image PNG haute résolution intégrée : il reste autonome, mais ses éléments ne sont pas éditables individuellement comme des vecteurs. Les illustrations distantes et symboles de set chargés depuis un CDN doivent autoriser CORS.

## PNG
Le moteur SVG local est rasterisé depuis son SVG autonome. Les cartes FeSens sont capturées depuis le composant DOM puis rasterisées à 2250 × 3150 px (3× le canevas de travail, environ 900 DPI au format 63,5 × 88,9 mm).

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
