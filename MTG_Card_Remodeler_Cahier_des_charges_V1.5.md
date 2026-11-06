# MTG Card Remodeler
# Cahier des charges fonctionnel et technique

**Version :** 1.5  
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
| V0.9 | Validation de la gestion complète des frames, de leur modularité et de leur compatibilité Over Art |
| V1.0 | Validation de la reconnaissance des types de cartes et de l'adaptation des structures et champs graphiques |
| V1.1 | Validation de la bibliothèque centralisée de cartes, de sa recherche avancée, de ses collections et de sa gestion hors ligne |
| V1.2 | Validation de la recherche multicritère et des méthodes d'importation individuelles, par lots, par decklist et depuis des fichiers locaux, avec gestion des impressions, langues et mises à jour préservant les personnalisations |
| V1.3 | Validation de la gestion complète des decks : bibliothèque, organisation, sections, quantités, contrôles, statistiques, associations graphiques, synchronisation, historique et export |
| V1.4 | Validation de la gestion des projets : regroupement des ressources, paramètres dédiés, travail multi-projets, sauvegardes, historique, duplication, import/export avec dépendances et transfert entre ordinateurs |
| V1.5 | Validation du moteur de rendu : vectoriel, haute résolution, temps réel, multicouche, transparences et fusion, typographie, images, profils distincts, optimisation, cohérence aperçu/export, gestion des erreurs et rendu par lots |

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

## 10.5 Gestion des cadres (Frames) — Question 27, validée

L'application doit proposer un système complet de gestion, de création et de personnalisation des cadres de cartes (*frames*).

### Bibliothèque et import
- Bibliothèque de frames officielles et personnalisées.
- Import de frames depuis des packs graphiques compatibles.
- Classement, prévisualisation et réutilisation des frames.
- Conservation des métadonnées et dépendances des ressources importées.

### Création et modularité
- Création de frames directement dans l'éditeur visuel.
- Décomposition des frames en éléments indépendants et modifiables : bordures, fonds, cartouches de nom, zones de texte, encadrés de statistiques et autres éléments constitutifs.
- Modification complète de chaque élément : position, dimensions, apparence, couleurs, effets, visibilité et ordre de superposition.
- Possibilité de combiner plusieurs frames ou éléments de frames pour créer des compositions personnalisées.

### Types de frames et règles conditionnelles
- Gestion des frames multicolores et hybrides.
- Frames conditionnelles selon le type de carte, sa couleur, sa rareté ou tout autre critère pris en charge par le moteur de variantes.
- Possibilité d'associer automatiquement une frame ou une composition de frames à une carte selon les règles et priorités définies.
- Prévisualisation des correspondances et possibilité de choix ou de remplacement manuel.

### Héritage et variantes
- Héritage des frames depuis un template principal.
- Création de variantes de frames.
- Modifications locales sans altération de la frame d'origine.
- Propagation contrôlée des changements et réinitialisation vers les valeurs héritées.

### Compatibilité avec l'éditeur et l'Over Art
- Compatibilité complète avec la gestion des calques, groupes et sous-groupes.
- Compatibilité avec les masques et zones de découpe.
- Contrôle précis de la superposition entre illustrations, frames, textes, symboles et autres éléments.
- Possibilité de placer des parties d'illustration devant ou derrière des éléments précis de frame pour construire des compositions Over Art.
- Conservation de la structure modulaire et des réglages dans les templates, composants, variantes et projets.

Toutes les fonctionnalités de cette section sont validées.

## 10.6 Gestion intelligente des types de cartes — Question 28, validée

L'application doit reconnaître les types et sous-types des cartes Magic afin d'adapter automatiquement les champs de données, les éléments disponibles et les structures graphiques pertinentes dans l'éditeur. Cette adaptation doit assister l'utilisateur sans restreindre sa liberté de création.

### Reconnaissance des types de cartes
- Reconnaissance des types principaux : créature, terrain, éphémère, rituel, artefact, enchantement, planeswalker, bataille et autres types pris en charge par les données de cartes.
- Reconnaissance des sous-types et super-types.
- Gestion des cartes possédant plusieurs types ou combinant plusieurs catégories.
- Architecture extensible permettant d'ajouter de nouveaux types, sous-types et catégories personnalisées.

### Adaptation des champs et caractéristiques
L'application doit pouvoir afficher et gérer les champs pertinents selon les caractéristiques de la carte, notamment :
- Force et endurance pour les créatures.
- Loyauté pour les planeswalkers.
- Défense pour les batailles.
- Caractéristiques et statistiques spécifiques à d'autres types de cartes.
- Champs supplémentaires ou personnalisés définis par l'utilisateur.

Les champs non pertinents pour une carte donnée peuvent être masqués ou désactivés selon la configuration, sans supprimer les données ni empêcher leur réactivation.

### Structures graphiques conditionnelles
- Mise à disposition de structures et composants graphiques adaptés aux différents types de cartes.
- Affichage conditionnel des zones, statistiques, symboles et éléments spécifiques.
- Prise en charge des cartes multitypes et des combinaisons de caractéristiques.
- Possibilité d'associer des structures ou composants à des règles du moteur de variantes.
- Prévisualisation du résultat pour les différents types de cartes.

### Personnalisation et extensibilité
- L'utilisateur conserve la possibilité de modifier librement les champs, éléments et structures proposés.
- Possibilité de créer des types, sous-types, champs et structures personnalisés.
- Les règles automatiques doivent rester configurables et réversibles.
- Les types et champs personnalisés doivent pouvoir être intégrés aux templates, composants, variantes et projets.

Toutes les fonctionnalités de cette section sont validées.

## 10.7 Bibliothèque de cartes — Question 29, validée

L'application doit proposer une bibliothèque centralisée permettant de retrouver, consulter, classer et gérer les cartes enregistrées. Les cartes et données déjà stockées localement doivent rester accessibles hors ligne.

### Organisation et consultation
- Bibliothèque locale centralisée regroupant les cartes enregistrées dans l'application.
- Accès aux fiches individuelles des cartes.
- Conservation des données et ressources déjà téléchargées pour consultation hors ligne.
- Distinction entre une carte, ses différentes impressions/éditions et ses variantes graphiques personnalisées.

### Recherche et filtres
- Recherche par nom de carte.
- Recherche et filtres par type et sous-type, couleur, identité couleur, coût ou valeur de mana, rareté, édition et autres champs disponibles.
- Filtres combinables pour affiner les résultats selon plusieurs critères simultanément.
- Architecture de recherche extensible aux champs personnalisés et aux futures données intégrées.

### Modes d'affichage
L'utilisateur peut choisir entre plusieurs présentations :
- Grille visuelle avec illustrations.
- Liste détaillée.
- Tableau avec colonnes d'informations personnalisables.

Le mode d'affichage doit pouvoir être adapté aux besoins de consultation et de gestion.

### Fiches individuelles
Chaque fiche doit pouvoir présenter, selon les données disponibles :
- Informations et caractéristiques de la carte.
- Édition et impression concernées.
- Illustration et illustrations alternatives.
- Variantes graphiques personnalisées associées.
- Historique des modifications et versions graphiques conservées.

### Classement personnel
- Gestion des favoris.
- Création de collections personnalisées.
- Étiquettes (*tags*) définies par l'utilisateur.
- Catégories et classements personnels.
- Possibilité de retrouver et filtrer les cartes à partir de ces classements.

### Doublons et impressions
- Détection des cartes identiques ou correspondant à plusieurs impressions d'une même carte.
- Distinction entre les différentes impressions, éditions et versions d'une carte.
- Présentation claire des correspondances afin d'éviter de confondre une réimpression avec une variante graphique créée par l'utilisateur.
- Conservation des différentes versions graphiques d'une même carte sans écrasement involontaire.

### Gestion des versions graphiques
- Conservation de plusieurs versions personnalisées d'une même carte.
- Possibilité de consulter et de retrouver les versions précédentes.
- Association des versions aux templates, variantes et illustrations utilisés, lorsque ces informations sont disponibles.
- Préservation des versions existantes lors de nouvelles modifications.

Toutes les fonctionnalités de cette section sont validées.

## 10.8 Recherche et importation des cartes — Question 30, validée

L'application doit proposer un système complet de recherche et d'importation de cartes, connecté à des sources de données compatibles et conçu pour alimenter la bibliothèque locale. L'importation doit préserver la distinction entre les données de référence d'une carte, ses différentes impressions et les personnalisations graphiques réalisées dans l'application.

### Sources et recherche
- Intégration de Scryfall comme source de recherche et de données de cartes.
- Recherche multicritère à partir du nom, du texte, de la couleur, de l'identité couleur, du type, du sous-type, de l'édition, de la rareté et des autres champs disponibles.
- Combinaison de plusieurs critères et filtres.
- Prise en charge des capacités de recherche offertes par la source distante, dans la mesure de leur disponibilité.
- Présentation des résultats avec les informations utiles pour identifier la carte et l'impression correspondante.

### Importation individuelle et par lots
- Importation d'une carte depuis sa fiche ou ses résultats de recherche.
- Importation de plusieurs cartes en une seule opération.
- Prévisualisation des éléments sélectionnés avant import.
- Indication des cartes déjà présentes dans la bibliothèque et gestion explicite des doublons.
- Possibilité de choisir les informations et ressources à récupérer lorsque la source le permet.

### Importation de decklists
- Importation de listes de cartes depuis des fichiers TXT et CSV.
- Prise en charge de decklists provenant de plateformes compatibles, notamment Moxfield et Archidekt, sous réserve de leurs formats et possibilités d'accès.
- Analyse de la liste, reconnaissance des noms et quantités, puis présentation d'un bilan avant import.
- Signalement des entrées non reconnues, ambiguës ou indisponibles, avec possibilité de les résoudre manuellement.
- Conservation des quantités et de l'organisation de la liste lorsque le format source les fournit.

### Résolution des correspondances
- Résolution automatique des cartes même lorsque les noms, accents, ponctuations, langues ou présentations diffèrent légèrement.
- Proposition de correspondances alternatives en cas d'ambiguïté.
- Validation ou correction manuelle par l'utilisateur avant import définitif lorsque la correspondance n'est pas certaine.
- Préservation de l'entrée originale de la decklist pour faciliter le contrôle et la correction.

### Choix des impressions et illustrations
- Possibilité de sélectionner l'impression souhaitée d'une carte.
- Choix de l'édition et de l'illustration parmi les impressions disponibles.
- Présentation des différentes impressions afin de distinguer clairement les rééditions et les illustrations alternatives.
- Conservation du lien entre l'identité de la carte et l'impression effectivement sélectionnée.

### Gestion des langues
- Recherche des versions linguistiques disponibles pour une carte.
- Possibilité de sélectionner et d'importer la version linguistique souhaitée.
- Affichage clair de la langue des données et, lorsque disponible, de l'impression.
- Gestion des cas où certaines langues ou impressions ne sont pas disponibles auprès de la source.

### Mise à jour des données importées
- Possibilité de mettre à jour les données de cartes déjà présentes dans la bibliothèque.
- Les mises à jour des données de référence ne doivent jamais écraser silencieusement les personnalisations graphiques, templates, variantes, illustrations ou réglages propres à l'utilisateur.
- Séparation entre données issues des sources et données ou modifications locales.
- Prévisualisation des changements et traitement explicite des conflits avant application.
- Conservation des versions et de l'historique lorsque des données importantes sont remplacées.

### Importation hors ligne
- Importation de cartes et de données depuis des fichiers locaux compatibles.
- Possibilité d'utiliser des fichiers de données préparés à l'avance lorsque la connexion Internet ou la source distante n'est pas disponible.
- Vérification du format, de l'intégrité et de la cohérence des données avant intégration.
- Signalement des données manquantes ou incompatibles sans interrompre silencieusement l'ensemble de l'import.
- Les cartes importées et enregistrées localement restent consultables hors ligne.

Toutes les fonctionnalités de cette section sont validées. Les possibilités dépendant de plateformes ou de sources externes devront respecter leurs formats, API, conditions d'accès et disponibilités techniques ; aucune disponibilité externe ne doit être présumée.

## 10.9 Gestion des decks et listes de cartes — Question 31, validée

L'application doit proposer un système complet de création, d'organisation, de consultation et de gestion des decks. Ce système s'appuie sur la bibliothèque de cartes et le mécanisme d'importation, tout en permettant d'associer des choix graphiques aux cartes d'un deck. Les decks doivent rester des entités indépendantes des cartes et de leurs impressions.

### Bibliothèque et gestion des decks
- Créer, enregistrer, modifier et supprimer des decks.
- Dupliquer un deck pour créer une nouvelle version ou une variante de construction.
- Consulter l'ensemble des decks dans une bibliothèque dédiée.
- Conserver les decks et leurs données localement pour un accès hors ligne.
- Distinguer clairement les decks enregistrés des listes temporaires en cours d'importation ou de modification.

### Organisation
- Classement des decks dans des dossiers et catégories.
- Ajout de tags personnalisés.
- Gestion des favoris.
- Recherche et filtres dans la bibliothèque de decks.
- Possibilité de réorganiser les decks sans modifier leur contenu.

### Structure des decks
- Gestion de sections distinctes, notamment main deck, réserve, commandant, compagnon et autres sections personnalisables.
- Possibilité d'ajouter, renommer, réorganiser ou supprimer des sections selon les besoins du format.
- Conservation de la structure et de l'ordre des sections lors des imports et exports lorsque le format utilisé le permet.
- Gestion des règles de construction propres aux formats lorsque les informations nécessaires sont disponibles ; ces contrôles doivent rester configurables et ne pas empêcher la création de decks personnalisés.

### Gestion des quantités
- Ajouter et retirer rapidement des cartes.
- Modifier le nombre d'exemplaires d'une carte.
- Déplacer une carte d'une section à une autre.
- Afficher les quantités par section et le total du deck.
- Préserver les quantités lors de l'import, de la duplication, de la synchronisation et de l'export.

### Contrôle et validation
- Détection des cartes manquantes ou non résolues.
- Détection des doublons et des quantités potentiellement incorrectes.
- Signalement des problèmes selon les règles de construction du format sélectionné, lorsque celles-ci sont disponibles.
- Présentation des erreurs et avertissements sans supprimer ni corriger automatiquement les entrées.
- Possibilité de contrôler ou désactiver les règles de validation pour les decks personnalisés.

### Statistiques et analyse
- Courbe de valeur de mana.
- Répartition des couleurs et de l'identité couleur.
- Répartition par types et sous-types de cartes.
- Nombre total de cartes et quantités par section.
- Statistiques calculées à partir des données disponibles, avec actualisation après modification du deck.
- Présentation synthétique et détaillée des résultats.

### Associations graphiques
- Appliquer un template, une édition graphique ou une variante à l'ensemble d'un deck.
- Appliquer des choix graphiques uniquement à certaines cartes ou sections.
- Autoriser des associations différentes carte par carte au sein d'un même deck.
- Prévisualiser les associations avant application.
- Préserver les personnalisations individuelles lorsqu'une règle graphique globale est modifiée, sauf remplacement explicitement demandé.
- Réutiliser les règles et le moteur de variantes existants pour automatiser les associations lorsque cela est souhaité.

### Synchronisation et actualisation
- Actualiser les données des cartes du deck depuis les sources disponibles.
- Préserver les choix graphiques, les templates, variantes, illustrations et réglages locaux lors de la synchronisation.
- Signaler les cartes devenues indisponibles, renommées ou dont les données ont changé.
- Prévisualiser les changements et demander une validation en cas de conflit ou de remplacement significatif.
- Permettre une actualisation manuelle et, si les sources le permettent, proposer des mécanismes d'actualisation assistée.

### Historique et versions
- Conserver les versions précédentes d'un deck.
- Consulter les changements entre deux versions.
- Restaurer une version antérieure sans écraser silencieusement la version courante.
- Associer les versions à leurs choix graphiques et à leurs données de cartes lorsque cela est pertinent.
- Préserver l'historique lors de la duplication et des opérations de synchronisation.

### Export des decks
- Exporter les listes dans des formats compatibles avec les plateformes et outils externes.
- Prendre en charge les formats TXT et CSV lorsque leur structure le permet.
- Préserver les sections, quantités et informations disponibles dans le format cible.
- Prévisualiser le contenu exporté et signaler les informations qui ne peuvent pas être représentées dans le format choisi.
- Ne pas supposer la compatibilité d'une plateforme sans vérifier ses formats et possibilités d'accès.

Toutes les fonctionnalités de cette section sont validées. Les règles de construction, statistiques et intégrations externes dépendant de formats ou de sources devront tenir compte des données réellement disponibles et rester configurables.

## 10.10 Gestion des projets — Question 32, validée

L'application doit proposer un système de projets indépendants permettant de regrouper et d'organiser l'ensemble des éléments nécessaires à un travail de création graphique. Un projet constitue un espace de travail cohérent, dont les ressources, paramètres, dépendances et versions peuvent être conservés, déplacés ou transférés.

### Création et gestion des projets
- Créer, nommer, enregistrer, modifier et supprimer des projets.
- Ouvrir et gérer plusieurs projets distincts.
- Dupliquer un projet sans modifier ni altérer le projet d'origine.
- Identifier clairement le projet actif et les projets récemment utilisés.
- Conserver les projets dans les emplacements de données configurés par l'utilisateur.

### Regroupement des ressources
Un projet peut regrouper et référencer les éléments nécessaires à sa réalisation, notamment :
- Cartes et impressions sélectionnées.
- Decks et listes de cartes.
- Templates et variantes.
- Illustrations et images alternatives.
- Frames et éléments graphiques.
- Symboles, icônes et polices.
- Composants personnalisés et autres ressources utilisées.

Le système doit distinguer les ressources intégrées au projet de celles simplement référencées dans une bibliothèque partagée. Il doit préserver les liens et dépendances nécessaires au bon fonctionnement du projet.

### Paramètres propres au projet
Chaque projet peut disposer de ses propres paramètres, indépendamment des autres projets :
- Dimensions et formats de travail.
- Résolution et paramètres graphiques.
- Profils et préférences de rendu.
- Préférences d'organisation et de présentation.
- Autres paramètres propres au flux de travail du projet.

Les paramètres globaux de l'application et les paramètres locaux d'un projet doivent être distingués. Une modification propre à un projet ne doit pas changer involontairement les réglages des autres projets.

### Travail multi-projets
- Possibilité de travailler sur plusieurs projets simultanément.
- Passage d'un projet à un autre sans perdre les modifications en cours.
- Identification claire du contexte et du projet actif afin d'éviter les modifications involontaires dans le mauvais projet.
- Gestion indépendante de l'enregistrement, des paramètres et des ressources de chaque projet.

### Sauvegarde et récupération
- Sauvegarde automatique des projets selon les mécanismes généraux de sauvegarde de l'application.
- Possibilité de déclencher une sauvegarde manuelle d'un projet.
- Préservation des ressources, paramètres, références et dépendances nécessaires.
- Détection des modifications non enregistrées avant fermeture ou changement de projet.
- Récupération cohérente après une fermeture inattendue ou un incident, lorsque les données de récupération sont disponibles.

### Historique et versions
- Conservation de l'historique des modifications du projet.
- Possibilité de créer et conserver plusieurs versions identifiées.
- Consultation des versions précédentes et des changements entre versions.
- Restauration d'une version antérieure sans écraser silencieusement la version courante.
- Conservation des liens vers les ressources et paramètres correspondant à chaque version lorsque cela est possible.

### Duplication
- Duplication complète d'un projet pour créer une nouvelle branche de travail.
- Préservation de la structure, des paramètres et des ressources nécessaires.
- Possibilité de personnaliser la copie indépendamment de l'original.
- Gestion explicite des ressources partagées ou copiées afin d'éviter les modifications croisées involontaires.

### Importation et exportation
- Export complet d'un projet dans un format de projet exploitable par l'application.
- Inclusion des paramètres, ressources intégrées, références et dépendances nécessaires.
- Possibilité d'inclure les ressources référencées afin de produire un projet autonome et transférable.
- Importation d'un projet avec vérification de son intégrité et de sa compatibilité.
- Prévisualisation du contenu et des éventuels conflits avant intégration.
- Préservation de la structure et des paramètres lors des opérations d'import/export.

### Détection des ressources et dépendances
- Vérification des ressources requises à l'ouverture d'un projet.
- Détection des fichiers manquants, déplacés, incompatibles ou dont la version pose problème.
- Identification des dépendances internes et externes.
- Proposition de retrouver, relier, importer ou remplacer les ressources manquantes.
- Signalement clair des éléments qui ne peuvent pas être restaurés automatiquement.
- Aucun remplacement silencieux d'une ressource manquante par une autre.

### Transfert entre ordinateurs
- Possibilité de déplacer ou transférer un projet vers un autre ordinateur.
- Conservation de sa structure, de ses paramètres, de ses ressources et de ses dépendances.
- Vérification de la compatibilité de la version de l'application et des ressources à l'ouverture sur l'autre ordinateur.
- Signalement et résolution guidée des éventuelles dépendances indisponibles.
- Le transfert ne doit pas imposer de reconstruire manuellement le projet lorsque les ressources nécessaires ont été incluses.

Toutes les fonctionnalités de cette section sont validées. L'autonomie d'un projet transféré dépendra du choix d'inclure ou non ses ressources référencées ; l'application devra rendre ce choix explicite et signaler les dépendances externes restantes.

## 10.11 Moteur de rendu — Question 33, validée

L'application doit disposer d'un moteur de rendu fiable, précis et performant, capable de restituer fidèlement les compositions graphiques complexes des cartes, aussi bien pendant leur édition que lors de leur exportation et de leur préparation à l'impression.

### Rendu vectoriel et qualité
- Privilégier un rendu vectoriel SVG indépendant de la résolution lorsque cela est adapté aux éléments concernés.
- Produire des rendus haute résolution adaptés à l'affichage à l'écran et à l'impression.
- Préserver la précision des formes, tracés, contours, textes et autres éléments graphiques.
- Adapter la qualité de sortie au profil et à la destination du rendu.

### Actualisation en temps réel
- Actualiser le rendu pendant les modifications de l'utilisateur.
- Afficher les changements sans nécessiter de relancer manuellement le rendu complet.
- Maintenir une interaction fluide autant que possible, y compris sur les compositions comportant de nombreux éléments.

### Rendu multicouche et effets
- Respecter la structure complète des calques, groupes et sous-groupes.
- Gérer les masques, effets, opacités, transparences et canaux alpha.
- Prendre en charge les modes de fusion et les superpositions entre éléments.
- Restituer correctement les compositions Over Art, y compris les éléments répartis sur plusieurs calques et les transitions entre différentes couches d'information.
- Préserver l'ordre de superposition et les relations entre les éléments.

### Rendu typographique
- Respecter les polices, styles, graisses, tailles et propriétés typographiques configurés.
- Restituer correctement les symboles Magic et les icônes intégrées au texte.
- Préserver les espacements, alignements, retours à la ligne et comportements adaptatifs.
- Appliquer les règles de réduction ou d'ajustement du texte définies dans les templates et composants.

### Rendu des images et ressources
- Respecter les dimensions, proportions, recadrages et points de focalisation configurés.
- Appliquer les filtres et effets graphiques pris en charge.
- Préserver la qualité des images selon la résolution et le profil de sortie.
- Restituer les images principales, secondaires, textures, masques et ressources superposées.

### Profils de rendu
- Proposer des profils distincts pour l'aperçu dans l'éditeur, l'export et l'impression.
- Permettre d'adapter les compromis de qualité, de précision et de performance selon la destination.
- Maintenir une représentation cohérente des propriétés graphiques entre les différents profils.
- Signaler les différences ou limitations éventuelles lorsqu'un effet ne peut pas être reproduit à l'identique dans un profil donné.

### Optimisation des performances
- Mettre en place un cache intelligent des éléments et résultats de rendu lorsque cela est pertinent.
- Privilégier le rendu partiel et ne recalculer que les éléments affectés par une modification.
- Éviter les recalculs inutiles des calques, groupes et ressources inchangés.
- Gérer efficacement les compositions complexes et les traitements de nombreuses cartes.

### Cohérence entre aperçu et export
- Garantir autant que possible la fidélité entre le rendu affiché dans l'éditeur et le résultat exporté.
- Utiliser des règles de rendu cohérentes pour les dimensions, polices, symboles, images, effets et superpositions.
- Signaler les différences inévitables liées aux formats ou profils de sortie.
- Permettre de contrôler le résultat final avant export ou impression.

### Gestion des erreurs et compatibilité
- Détecter les ressources absentes ou inaccessibles.
- Identifier les effets, propriétés ou opérations incompatibles avec le profil de rendu utilisé.
- Signaler les erreurs de rendu et fournir des informations permettant de les corriger.
- Éviter qu'une erreur affectant un élément provoque silencieusement la disparition ou l'altération d'autres éléments.
- Préserver autant que possible le reste de la composition lorsqu'un élément ne peut pas être rendu.

### Rendu par lots
- Permettre de traiter plusieurs cartes sans devoir les ouvrir individuellement dans l'éditeur.
- Prendre en charge le rendu de lots issus d'une bibliothèque, d'un deck ou d'un projet.
- Afficher l'état d'avancement et signaler les éventuels échecs par carte.
- Permettre de poursuivre le traitement des autres cartes lorsqu'un rendu individuel échoue, et de retrouver les résultats et erreurs du lot.

Toutes les fonctionnalités de cette section sont validées. Les formats, effets et opérations effectivement disponibles devront être déterminés par les capacités techniques des moteurs et formats utilisés ; toute limitation devra être signalée clairement.

## 10.12 Chapitres restant à développer

- Illustrations et versions alternatives.
- Éditions et symboles.
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

**Version actuelle : V1.5**

Cette version consolide les décisions validées jusqu'à la question 33 incluse. Elle confirme la gestion complète des decks et des projets indépendants, et valide le moteur de rendu : rendu vectoriel et haute résolution, actualisation en temps réel, gestion multicouche et Over Art, transparences et modes de fusion, typographie, images, profils de rendu distincts, optimisation, cohérence entre aperçu et export, gestion des erreurs et traitement par lots.

Ce document constitue une base de référence pour les prochaines étapes de conception. Les fonctionnalités ne doivent pas être considérées comme implémentées tant qu'elles n'ont pas été développées et testées dans l'application.

À partir de V1.5, la bibliothèque de cartes, la recherche et l'importation des cartes, la gestion des decks et listes de cartes, la gestion des projets, le moteur de rendu, la gestion des types de cartes, des polices, des couleurs, des illustrations, des compositions Over Art, des associations automatiques d'illustrations, des symboles/icônes et des frames décrites dans ce document constituent un ensemble de fonctionnalités validées. Toute nouvelle décision validée devra être ajoutée à une nouvelle version du cahier des charges, sans suppression des décisions antérieures.
