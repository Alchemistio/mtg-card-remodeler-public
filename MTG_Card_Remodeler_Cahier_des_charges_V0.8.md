# MTG Card Remodeler
# Cahier des charges fonctionnel et technique

**Version :** 0.8  
**Date :** 6 novembre 2026  
**Statut :** En cours de définition — décisions validées et questions ouvertes  
**Dépôt :** https://github.com/Alchemistio/mtg-card-remodeler-public

---

## Historique des versions

| Version | Description |
|---|---|
| V0.1 | Première structuration du cahier des charges |
| V0.2 | Installation, données, sauvegardes et premières décisions sur les sets et l'éditeur |
| V0.3 | Consolidation des décisions et ajout des composants, prévisualisations, contrôles de mise en page et gestion adaptative des textes |
| V0.4 | Validation de la gestion complète des polices et des profils typographiques réutilisables |
| V0.5 | Validation du système complet de gestion des couleurs, palettes et styles réutilisables |
| V0.6 | Validation de la gestion des illustrations et des compositions Over Art multicouches |
| V0.7 | Ajout de l'association automatique des illustrations selon les variantes et leurs règles |
| V0.8 | Validation de la gestion complète des symboles Magic, des icônes personnalisées et de leur prévisualisation contextuelle |

# 1. Présentation générale

## 1.1 Objectif

MTG Card Remodeler est une application de bureau destinée à créer, personnaliser, organiser et exporter des cartes personnalisées de Magic: The Gathering. Elle doit fournir un environnement de création graphique spécialisé, permettant de concevoir des templates, des variantes, des composants réutilisables et d'associer automatiquement les données des cartes aux éléments visuels.

## 1.2 Utilisation prévue

- Création de cartes personnalisées et de proxies pour impression personnelle à domicile.
- Refonte graphique de cartes existantes.
- Création de templates, variantes et éditions personnalisées.
- Gestion de bibliothèques graphiques, de projets et de listes de cartes.
- Export individuel ou par lots.

Le projet est destiné à un usage personnel, non à la distribution commerciale de proxies.

## 1.3 Direction artistique

Référence esthétique principale : Final Fantasy XII: The Zodiac Age.

- **Thème sombre :** interface principale, éditeur, bibliothèque, gestion des ressources et impression.
- **Thème parchemin :** réservé aux futurs écrans de lecture et de consultation.

## 1.4 Technologies existantes

- Tauri 2, React, TypeScript et Vite.
- SQLite et/ou IndexedDB selon les besoins de stockage.
- Moteur de rendu SVG.
- Intégration des cadres FeSens.
- API Scryfall pour la recherche et les données de cartes.

Les évolutions devront préserver autant que possible la compatibilité avec l'architecture et les projets existants.

# 2. Installation et gestion des données

## 2.1 Modes d'installation

L'application propose deux modes :
1. Installation classique.
2. Version portable.

Les deux modes permettent de configurer indépendamment l'emplacement des données.

## 2.2 Installation classique

- Choix libre du dossier d'installation, sur tout lecteur accessible.
- Séparation du dossier du programme et du dossier des données utilisateur.

## 2.3 Version portable

- Par défaut, les données sont stockées à proximité du programme.
- Au premier lancement, l'utilisateur peut choisir un autre emplacement.
- L'emplacement peut ensuite être modifié dans les paramètres.
- Le déplacement de l'application et de son dossier de données doit rester récupérable.

## 2.4 Organisation des données

Organisation hybride :
- Un dossier racine configurable.
- Des sous-dossiers créés automatiquement par catégorie.
- Possibilité de remplacer individuellement certains emplacements.

Catégories : base de données, éditions, templates, variantes, ressources graphiques, projets, decklists, exports, sauvegardes et cache.

## 2.5 Déplacement des données

Le déplacement doit être sécurisé :
1. Vérifier la destination.
2. Copier les fichiers.
3. Vérifier l'intégrité des copies.
4. Mettre à jour les références.
5. Valider le nouvel emplacement.
6. Effectuer un retour arrière automatique en cas d'échec.

L'application ne doit jamais écraser silencieusement une bibliothèque existante lorsqu'un emplacement est indisponible.

## 2.6 Sauvegardes

- Sauvegarde automatique quotidienne lorsque l'application est utilisée.
- Conservation des 7 dernières sauvegardes quotidiennes.
- Conservation des 4 dernières sauvegardes hebdomadaires.
- Sauvegardes manuelles conservées sans limite applicative, dans la limite de l'espace disque.
- Sauvegarde avant toute mise à jour majeure et avant les migrations importantes de base de données.
- Destination des sauvegardes configurable.

Les sauvegardes comprennent la base de données, les projets, templates, variantes, ressources graphiques, éditions personnalisées et configurations. Le cache reconstructible est exclu par défaut.

## 2.7 Restauration

- Restauration complète ou sélective.
- Vérification d'intégrité avant restauration.

## 2.8 Mises à jour

Trois modes :
- Automatique.
- Notification avec installation à la demande.
- Vérification manuelle uniquement.

L'utilisateur peut différer une mise à jour. Les données, emplacements personnalisés et configurations doivent être préservés. Les migrations doivent inclure des contrôles de compatibilité.

# 3. Gestion des éditions et des sets

## 3.1 Définition d'un set

Un set est une organisation hybride pouvant réunir :
- Identité d'une édition.
- Ressources graphiques.
- Templates.
- Variantes.
- Règles d'affectation.

Les données d'édition, ressources graphiques et templates peuvent également être utilisés indépendamment. Un set peut être associé à une édition officielle tout en possédant une identité graphique propre. L'identité de la carte et son habillage graphique restent distincts.

## 3.2 Héritage

Les modifications d'un set dérivé ne doivent pas modifier le set d'origine. Les templates et variantes peuvent être réutilisés dans plusieurs sets.

## 3.3 Sources de ressources graphiques

La bibliothèque peut accueillir :
- Ressources officielles lorsqu'elles sont techniquement et légalement accessibles.
- Bibliothèques externes.
- Packs communautaires.
- Créations personnelles.
- Ressources importées par l'utilisateur.

Il faut distinguer les images complètes de cartes des éléments graphiques indépendants et modifiables. Une image de carte issue de Scryfall ne signifie pas que ses calques ou fichiers sources sont disponibles.

## 3.4 Métadonnées

Chaque ressource peut conserver : origine, auteur, licence, catégorie, dimensions, compatibilité, version et dépendances. L'application ne doit pas prétendre vérifier les droits d'utilisation lorsqu'elle ne dispose pas des informations nécessaires. Les attributions doivent être préservées.

## 3.5 Accès aux ressources

Interface unifiée pour les ressources locales et en ligne :
- Recherche et filtres.
- Prévisualisation avant téléchargement.
- Téléchargement sélectif et conservation locale.
- Disponibilité hors ligne des ressources téléchargées.
- Agrégation de plusieurs sources lorsque techniquement possible.

L'application ne doit pas embarquer inutilement une bibliothèque graphique volumineuse.

## 3.6 Packs graphiques

Deux types : packs complets et packs modulaires, combinables librement.

Le système doit :
- Détecter les dépendances et proposer le téléchargement des ressources manquantes.
- Autoriser un pack complet à référencer des modules externes.
- Suivre les versions et compatibilités pour éviter de casser les sets existants.
- Permettre import/export sans perte de configuration.
- Valider les ressources avant activation.
- Signaler les dépendances manquantes ou incompatibles.
- Préserver les métadonnées de provenance et de licence.

# 4. Moteur de variantes

## 4.1 Trois niveaux de complexité

1. **Simple :** conditions prédéfinies.
2. **Avancé :** conditions composables ET/OU, exclusions, intervalles et critères multiples.
3. **Expert :** expressions personnalisées pour les règles complexes.

## 4.2 Critères possibles

Type, sous-type, rareté, nombre de couleurs, identité couleur, caractère légendaire, valeur de mana, caractéristiques, édition d'origine, nom exact, identifiant de carte et présence d'illustrations alternatives. La liste doit rester extensible.

## 4.3 Correspondances multiples

Lorsqu'une carte correspond à plusieurs variantes :
- Système de priorité automatique.
- Possibilité de sélection manuelle.
- Consultation des variantes alternatives correspondantes.
- Conservation possible des choix manuels pour les imports futurs.

## 4.4 Prévisualisation des règles

Avant application à un set ou à un deck, l'utilisateur doit pouvoir visualiser les cartes concernées.

## 4.5 Modifications et héritage des variantes

Tous les éléments sont modifiables sans restriction : position, dimensions, forme, couleur, texture, visibilité, apparence, ajout et suppression de composants.

Le template principal constitue la source d'héritage par défaut. Une variante ne surcharge que les propriétés qu'elle modifie. Les changements du parent peuvent être propagés de manière contrôlée. Les personnalisations locales sont préservées tant que l'utilisateur ne décide pas de les remplacer. Chaque propriété peut être réinitialisée à sa valeur héritée.

# 5. Éditeur visuel

## 5.1 Positionnement hybride

Association de zones prédéfinies, de guides et de contraintes, tout en conservant une liberté de positionnement manuel. L'utilisateur peut déplacer, redimensionner, superposer ou détacher les éléments. Aucune organisation prédéfinie ne doit empêcher une composition personnalisée.

## 5.2 Gestion complète des calques

- Création, suppression et réorganisation.
- Groupes et sous-groupes.
- Verrouillage et déverrouillage.
- Visibilité et opacité.
- Modes de fusion.
- Ordre de superposition.

Les éléments peuvent être regroupés et déplacés ensemble.

## 5.3 Outils de précision

- Grille personnalisable, espacement réglable et activation/désactivation.
- Magnétisme intelligent sur bords, centres, guides et autres éléments.
- Guides horizontaux et verticaux déplaçables.
- Coordonnées X/Y, largeur, hauteur et rotation précises.
- Alignement multiple et distribution régulière.
- Historique Annuler/Rétablir.
- Zoom libre, ajustement à la carte et déplacement de la vue.

Grille, guides et magnétisme sont contrôlables indépendamment.

## 5.4 Système Flex / Auto Layout

Système de mise en page flexible inspiré de Flexbox et de Figma Auto Layout.

Fonctionnalités :
- Disposition horizontale et verticale.
- Espacement réglable entre éléments.
- Marges externes et internes.
- Alignements horizontal et vertical.
- Dimensions fixes ou adaptatives.
- Étirement et distribution de l'espace disponible.
- Dimensions minimales et maximales.
- Réorganisation automatique lorsque le contenu ou les dimensions changent.
- Groupes imbriqués.
- Réorganisation manuelle au sein d'un groupe.
- Désactivation de l'Auto Layout sur un élément ou un groupe et retour au positionnement libre.

Exemples : rangées de symboles de mana, blocs de texte, groupes d'icônes et compositions répétitives.

## 5.5 Catalogue initial des éléments graphiques

Le catalogue est une référence évolutive, non une limite à la création. Il doit être étendu pour couvrir les types de cartes et leurs particularités.

### A. Éléments textuels
Nom de carte, coût de mana, ligne de type, texte de règles, texte d'ambiance, force, endurance, loyauté, défense, modificateurs numériques et texte personnalisé libre.

### B. Images et ressources
Illustration principale, images secondaires, arrière-plans, textures, symboles, logos, images décoratives et images importées.

### C. Formes vectorielles
Rectangles, carrés, cercles, ellipses, polygones, lignes, tracés, formes libres et formes personnalisées.

### D. Symboles et icônes
Symboles de mana coloré, générique, hybride et phyrexian ; symboles d'édition ; indicateurs de rareté ; icônes de type et sous-type ; icônes personnalisées et marqueurs.

### E. Effets graphiques
Couleurs unies, dégradés, contours, ombres, flou, masques, transparence, textures, motifs et modes de fusion.

### F. Champs dynamiques issus des cartes
Nom, coût de mana, couleurs, identité couleur, type, sous-types, texte de règles, texte d'ambiance, force, endurance, loyauté, défense, rareté, édition, numéro de collection, illustrateur, informations sur l'illustration, identifiant de carte et autres champs disponibles dans les sources.

### G. Éléments personnalisés
Objets graphiques créés par l'utilisateur, enregistrables dans une bibliothèque, intégrables aux groupes, calques et layouts Flex, avec propriétés configurables et liaisons éventuelles aux données.

### H. Classification

Chaque élément doit pouvoir être classé comme :
- Élément intégré par défaut.
- Champ dynamique issu des données.
- Ressource importée.
- Objet personnalisé.
- Élément conditionnel affiché uniquement pour certains types de cartes.

# 6. Système de composants

## 6.1 Trois niveaux

1. **Objets simples :** texte, image, forme, symbole, icône, etc.
2. **Composants réutilisables :** groupes d'objets configurables, enregistrables et réutilisables dans plusieurs templates.
3. **Composants intelligents :** objets disposant de propriétés, règles et comportements automatiques.

Exemples de composants intelligents : coût de mana adaptatif, bloc de texte de règles, statistiques et éléments conditionnels.

## 6.2 Conversion entre niveaux

L'utilisateur peut :
- Convertir plusieurs objets en composant réutilisable.
- Transformer un groupe en composant intelligent.
- Modifier un composant sans perdre ses propriétés.
- Enregistrer des composants dans sa bibliothèque personnelle.
- Réutiliser les composants dans plusieurs templates et variantes.

## 6.3 Héritage hybride

Les instances héritent du modèle d'origine, mais peuvent posséder des modifications locales.

- Héritage activé par défaut.
- Modifications locales possibles.
- Propagation contrôlée des changements du modèle.
- Préservation des personnalisations locales.
- Remplacement uniquement sur décision explicite.
- Réinitialisation d'une propriété ou d'une instance vers le modèle.
- Visualisation des différences entre modèle et instance.

## 6.4 Modification complète

Après insertion dans un template ou une variante, une instance reste entièrement modifiable. L'utilisateur peut modifier toutes les propriétés, accéder à la structure interne, ajouter/supprimer/réorganiser les éléments, modifier groupes, sous-groupes et calques, règles, comportements automatiques et liaisons aux données.

L'héritage ne doit jamais limiter la liberté de modification.

## 6.5 Paramètres des composants

Configuration complète des composants :
- Paramètres exposés.
- Valeurs par défaut.
- Paramètres liés aux données.
- Paramètres conditionnels.
- Options propres à chaque instance.
- Interface simplifiée pour les paramètres courants.
- Accès avancé à toute la structure interne.

L'auteur peut définir des paramètres simplifiés sans empêcher l'accès complet au composant.

# 7. Prévisualisation des cartes

Trois modes indépendants, sélectionnables à tout moment.

## 7.1 Prévisualisation individuelle

- Choix manuel d'une carte.
- Utilisation de ses véritables données.
- Actualisation du rendu pendant les modifications.

## 7.2 Prévisualisation multiple

- Affichage simultané de plusieurs cartes.
- Sélection manuelle des cartes à tester.
- Vérification des noms courts et longs, coûts de mana variés, textes courts et volumineux, couleurs, types, sous-types et caractéristiques numériques.

## 7.3 Prévisualisation automatique

- Sélection automatique de cartes représentatives.
- Identification des cas susceptibles de provoquer des problèmes.
- Détection des débordements, chevauchements et éléments manquants.

Le changement de mode ne doit pas faire perdre les modifications en cours.

# 8. Détection et correction des problèmes de mise en page

Trois mécanismes complémentaires sont validés.

## 8.1 Signalement visuel

Signalement et encadrement des débordements, chevauchements, contenus manquants, problèmes de lisibilité, mauvais positionnements et éléments hors cadre. Les niveaux de gravité distinguent erreurs et avertissements.

## 8.2 Correction automatique

Lorsque cela est possible :
- Ajustement des dimensions et positions.
- Ajustement des espacements.
- Réorganisation des éléments Flex / Auto Layout.
- Adaptation des blocs de texte.

Les corrections respectent les contraintes du template et des composants.

## 8.3 Suggestions

Lorsque plusieurs solutions sont possibles :
- Proposer plusieurs corrections.
- Présenter un aperçu.
- Permettre l'acceptation ou le refus individuel.

## 8.4 Réversibilité

Toute correction automatique doit pouvoir être annulée. Aucune personnalisation ne doit être écrasée silencieusement et le template d'origine ne doit pas être modifié définitivement par une correction appliquée à une instance.

# 9. Gestion adaptative des textes

## 9.1 Principe par défaut

Chaque élément textuel dispose de comportements configurables. Le comportement principal et activé par défaut est la **réduction automatique de la taille de police afin que le texte reste dans son cadre**.

## 9.2 Réduction automatique

- Réduction progressive de la taille.
- Taille minimale et maximale configurables.
- Conservation du cadre.
- Avertissement si le texte ne tient toujours pas à la taille minimale.

## 9.3 Autres comportements disponibles

- **Agrandissement automatique du cadre :** extension de la zone lorsque l'espace le permet.
- **Retour à la ligne automatique :** répartition du texte sur plusieurs lignes.
- **Ajustement de l'espacement :** réglage de l'interligne et de l'espacement entre caractères.
- **Débordement contrôlé :** conservation de la taille du texte, avec signalement du dépassement.

## 9.4 Priorités et configuration

L'utilisateur peut activer ou désactiver chaque comportement, définir l'ordre de priorité des comportements secondaires et fixer les limites de taille.

La configuration peut être définie au niveau du template, du composant ou de l'élément individuel. Une configuration locale peut remplacer les valeurs héritées.

# 10. Questions ouvertes et chapitres à approfondir

## 10.1 Gestion des polices — Question 22, validée

L'application doit proposer une gestion complète des polices :
- Bibliothèque de polices intégrée.
- Import de polices personnelles : TTF, OTF et WOFF/WOFF2 si compatibles.
- Prévisualisation avant sélection.
- Gestion des graisses et styles (normal, gras, italique, etc.).
- Association de polices à des rôles : nom, coût de mana, type, règles, texte d'ambiance et statistiques.
- Conservation des polices utilisées dans les projets.
- Détection des polices manquantes et proposition de remplacement.
- Intégration des polices dans les exports lorsque leur licence le permet.
- Création de profils typographiques personnalisés, enregistrables et réutilisables dans plusieurs templates et variantes.

Un profil typographique peut définir une police et un style pour chaque rôle typographique, par exemple le nom, le texte de règles et les statistiques. Toutes les fonctionnalités ci-dessus sont validées.

## 10.2 Gestion des couleurs — Question 23, validée

L'éditeur doit proposer un système complet de gestion des couleurs et de leurs réutilisations.

### Sélecteur de couleurs
- Sélection à l'aide d'une roue chromatique.
- Saisie et édition des valeurs RGB, HEX et HSL.
- Gestion de la transparence (alpha).

### Palettes et nuanciers
- Création, modification et sauvegarde de palettes personnalisées.
- Nuanciers propres à un projet, un set ou un template.
- Bibliothèque de couleurs favorites.
- Historique des couleurs récemment utilisées.

### Dégradés
- Création de dégradés linéaires et radiaux.
- Configuration personnalisée des couleurs, transitions et paramètres du dégradé.

### Styles de couleurs réutilisables
- Enregistrement d'une couleur ou d'un dégradé comme style.
- Réutilisation des styles dans les éléments, composants, templates et variantes.
- Modification d'un style réutilisable et gestion de ses occurrences selon les règles d'héritage.

### Remplacement global
- Recherche et remplacement d'une couleur dans un template, un composant ou une variante.
- Possibilité de contrôler la portée du remplacement avant application.

### Héritage des couleurs
- Les variantes héritent par défaut des couleurs du template principal.
- Une variante peut remplacer localement une couleur ou un style.
- Les changements hérités sont propagés de manière contrôlée, sans écraser silencieusement les personnalisations locales.
- Possibilité de réinitialiser une couleur vers sa valeur héritée.

### Associations d'illustrations par carte et par variante — Question 25, validée

Chaque carte peut disposer de plusieurs configurations graphiques indépendantes :
- Illustration principale.
- Illustration alternative.
- Illustration spécifique à une variante.
- Plusieurs images superposées pour composer un Over Art.
- Réutilisation d'une même illustration sur plusieurs cartes.

Le moteur de variantes peut associer automatiquement des illustrations différentes en fonction des critères et règles définis par l'utilisateur. Cette association doit fonctionner avec les priorités et le système de correspondances multiples du moteur de variantes. L'utilisateur doit pouvoir prévisualiser les associations, consulter les choix possibles et remplacer manuellement une illustration lorsque nécessaire.

Toutes les fonctionnalités de cette section sont validées.

## 10.3 Gestion des illustrations — Question 24, validée

L'application doit proposer une gestion complète des illustrations, de leur importation à leur intégration dans les templates et variantes.

### Sources et formats
- Import d'images locales : PNG, JPG, JPEG, WebP et SVG.
- Recherche et récupération d'illustrations depuis des sources en ligne compatibles.
- Gestion de plusieurs illustrations pour une même carte.
- Prise en charge des illustrations alternatives (*alternate arts*).
- Conservation de l'image originale afin de permettre un retour à la source.

### Ajustement et traitement
- Recadrage, déplacement, zoom et ajustement de l'image dans son cadre.
- Filtres et effets visuels non destructifs.
- Remplacement d'une illustration sans perdre les réglages de positionnement, de cadrage et d'affichage associés à son emplacement.

### Bibliothèque d'illustrations
- Bibliothèque personnelle d'illustrations.
- Classement par tags et catégories.
- Réutilisation des illustrations dans plusieurs cartes, templates, variantes et projets.

### Over Art et compositions multicouches

L'application doit permettre de reproduire les compositions dites *Over Art*, dans lesquelles une partie de l'illustration dépasse de son emplacement habituel et passe visuellement devant certains éléments du cadre ou de l'interface de la carte.

Fonctionnalités requises :
- Positionner une illustration à différents niveaux de la pile de calques, y compris entre les calques d'information et les calques du cadre.
- Faire passer certaines parties de l'illustration devant des éléments précis du cadre, tout en laissant d'autres éléments au-dessus de l'illustration.
- Contrôler indépendamment l'ordre de superposition des illustrations, des textes, des formes, des symboles et des éléments de frame.
- Définir des masques et des zones de découpe pour déterminer précisément quelles parties de l'illustration sont visibles ou masquées.
- Autoriser les débordements contrôlés hors de la zone d'illustration habituelle.
- Combiner plusieurs calques ou parties d'illustration pour construire un effet de profondeur et de chevauchement.
- Préserver la structure, les masques, les positions et les règles de superposition dans les templates, composants, variantes et projets.

Le système Over Art doit s'appuyer sur la gestion générale des calques et rester entièrement éditable : l'utilisateur doit pouvoir ajuster les zones visibles, les masques et l'ordre de superposition sans être limité à un effet prédéfini.

Toutes les fonctionnalités de cette section sont validées.

## 10.4 Gestion des symboles Magic et des icônes — Question 26, validée

L'application doit proposer une gestion complète des symboles Magic, ainsi que l'import et l'utilisation d'icônes personnalisées.

### Bibliothèque de symboles
- Symboles de mana officiels : génériques, colorés, hybrides, phyrexians, neigeux et autres symboles pris en charge par les données de cartes.
- Symboles d'édition et de rareté.
- Symboles de types et sous-types.
- Symboles personnalisés importés ou créés par l'utilisateur.
- Bibliothèque centralisée avec recherche, classement et prévisualisation.
- Création et réutilisation de combinaisons de symboles personnalisées.

### Import des icônes personnalisées
- Import de fichiers d'icônes dans plusieurs formats graphiques compatibles, notamment les formats vectoriels et matriciels adaptés à l'affichage dans l'application.
- Prise en charge des formats compatibles sans imposer un format unique à l'utilisateur.
- Prévisualisation avant ajout à la bibliothèque.
- Conservation des fichiers sources lorsque cela est possible, avec gestion d'une version exploitable pour le rendu si une conversion est nécessaire.
- Classement, réutilisation et gestion des icônes importées comme des symboles natifs.

### Personnalisation visuelle
Chaque symbole ou icône peut être ajusté selon les possibilités de son format :
- Taille et proportions.
- Couleur et opacité.
- Contour.
- Effets graphiques.
- Espacement et marges autour du symbole.

### Intégration dans les cartes
- Gestion des symboles dans les textes de règles.
- Gestion des symboles dans le coût de mana.
- Intégration possible dans les cadres, composants et autres éléments graphiques.
- Remplacement automatique des codes de mana (par exemple `{W}`, `{2}`, `{G/U}`) par les symboles graphiques correspondants.
- Gestion de symboles côte à côte et de combinaisons complexes.

### Prévisualisation contextuelle et réglages par emplacement

L'utilisateur doit pouvoir visualiser l'impact réel d'un symbole dans son contexte avant de valider ses réglages :
- Prévisualisation d'un symbole intégré dans un texte de règles.
- Prévisualisation d'un symbole dans le coût de mana d'une carte.
- Réglage indépendant de la taille selon son emplacement.
- Réglage des marges, espacements et alignements selon l'emplacement.
- Possibilité de définir des profils de réglages distincts pour les textes, les coûts de mana et les autres zones d'utilisation.
- Vérification du rendu avec plusieurs symboles consécutifs et dans des textes de longueurs différentes.

Un même symbole peut ainsi avoir une taille et des espacements différents dans le coût de mana et dans le texte de règles. Ces réglages contextuels doivent pouvoir être enregistrés et réutilisés dans les templates, composants et variantes.

Toutes les fonctionnalités de cette section sont validées.

## 10.5 Chapitres restant à développer

- Bibliothèque de cartes.
- Recherche et import de cartes.
- Illustrations et versions alternatives.
- Éditions et symboles.
- Decks et listes de cartes.
- Gestion des projets.
- Moteur de rendu.
- Export individuel et par lots.
- Mise en page pour impression.
- Formats papier, marges, fonds perdus et traits de coupe.
- Recto-verso et cartes à plusieurs faces.
- Profils d'impression.
- Interface et ergonomie détaillées.
- Paramètres généraux.
- Performances.
- Sécurité et intégrité des données.
- Tests et critères de validation.
- Architecture technique détaillée.

# 11. Principes généraux de conception

1. **Liberté de création :** ne pas imposer de limites artificielles à la personnalisation graphique.
2. **Modularité :** permettre la réutilisation des templates, composants, ressources et variantes.
3. **Héritage contrôlé :** préserver les relations entre modèles et instances sans empêcher les personnalisations locales.
4. **Réversibilité :** toute modification importante doit pouvoir être annulée ou restaurée.
5. **Sécurité des données :** ne jamais écraser ou déplacer silencieusement les données utilisateur.
6. **Compatibilité :** préserver autant que possible les projets et configurations existants.
7. **Extensibilité :** permettre l'ajout de nouveaux éléments, règles, composants et fonctionnalités.
8. **Prévisualisation :** permettre de vérifier les résultats avant application définitive.
9. **Automatisation contrôlée :** assister l'utilisateur sans lui retirer le contrôle.
10. **Cohérence graphique :** garantir une expérience homogène entre les écrans et outils.

# 12. État du cahier des charges

**Version actuelle : V0.8**

Cette version consolide les décisions validées jusqu'à la question 26 incluse. Elle comprend également la gestion complète des symboles Magic, l'import d'icônes personnalisées multiformats et leur prévisualisation contextuelle.

Ce document constitue une base de référence pour les prochaines étapes de conception. Les fonctionnalités ne doivent pas être considérées comme implémentées tant qu'elles n'ont pas été développées et testées dans l'application.

À partir de V0.8, la gestion des polices, des couleurs, des illustrations, des compositions Over Art, des associations automatiques d'illustrations et des symboles/icônes décrite dans ce document constitue un ensemble de fonctionnalités validées. Toute nouvelle décision validée devra être ajoutée à une nouvelle version du cahier des charges, sans suppression des décisions antérieures.
