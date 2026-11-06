# MTG Card Remodeler
# Cahier des charges fonctionnel et technique

**Version :** 2.12  
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
| V1.6 | Validation du système d'export : formats PNG, JPEG, SVG et PDF, export individuel, par sélection, par deck et par projet |
| V1.7 | Validation de la mise en page pour impression : formats papier, imposition des cartes, marges et repères, recto-verso, cartes à plusieurs faces, inclusion automatique des tokens, impression séparée des versos et profils réutilisables |
| V1.8 | Validation de la gestion des travaux d'impression enregistrables et réutilisables, avec conservation des cartes, quantités, tokens, profils, paramètres, modifications et prévisualisations |
| V1.9 | Validation de l'historique des impressions effectuées, avec conservation des configurations, contenus, feuilles générées, avertissements, erreurs et résultats, ainsi que la duplication des anciens travaux |
| V2.0 | Validation de la génération et de la remise des fichiers à l'utilisateur dans le format choisi, avec choix du dossier de destination et gestion des fichiers laissée entièrement à l'utilisateur hors de l'application |
| V2.1 | Validation de la génération en fichier unique ou multiple, du découpage par deck, groupe, recto/verso ou planche/page, de la prévisualisation des fichiers et des profils et optimisations avancées d'export PDF |
| V2.2 | Validation des normes PDF/X-1a et PDF/X-4 lorsque prises en charge, de l'export PDF haute qualité, des profils ICC personnalisés, du contrôle de conformité et des réglages guidés et experts |
| V2.3 | Validation des formats de sortie complémentaires : PDF avec calques lorsque pris en charge, TIFF, PNG, JPEG, SVG et regroupement ponctuel des fichiers dans une archive ZIP ; exclusion du PDF interactif |
| V2.4 | Validation des profils d'export personnalisables pour TIFF, PNG, JPEG et SVG, avec préréglages, paramètres propres aux formats et contrôle de compatibilité |
| V2.5 | Validation de la gestion des métadonnées des fichiers exportés : champs descriptifs, valeurs globales ou propres aux cartes, et contrôle de leur intégration selon les formats |
| V2.6 | Validation des fonds perdus, de l'extension automatique de matière pour éviter les bords blancs, des zones de sécurité et de la personnalisation des repères de coupe |
| V2.7 | Validation de la préparation de tracés de découpe vectoriels, de leurs paramètres de compensation, de la compatibilité avec les logiciels et machines de découpe et des profils réutilisables |
| V2.8 | Validation des formes de cartes personnalisées, des découpes intérieures, de l'édition vectorielle des contours et de modèles de formes réutilisables |
| V2.9 | Validation d'un contrôle qualité automatique avant génération des fichiers d'impression et de découpe, avec rapports, niveaux de gravité et corrections soumises à validation |
| V2.10 | Validation d'une sélection simple des contrôles qualité à lancer en fin de préparation, au moyen de cases à cocher et d'une commande de lancement, sans profils de contrôle enregistrés |
| V2.11 | Validation d'une sélection vide par défaut des contrôles qualité, avec mémorisation facultative des préférences de sélection via une option désactivée par défaut |
| V2.12 | Validation du lancement des contrôles qualité immédiatement avant la génération des fichiers, après la préparation et la sélection des vérifications |

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
- Téléchargement sélectif et conservation locale.- Disponibilité hors ligne des ressources téléchargées.- Agrégation de plusieurs sources lorsque techniquement possible.L'application ne doit pas embarquer inutilement une bibliothèque graphique volumineuse.## 3.6 Packs graphiques
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
- Choix manuel d'une carte.- Utilisation de ses véritables données.- Actualisation du rendu pendant les modifications.## 7.2 Prévisualisation multiple- Affichage simultané de plusieurs cartes.
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

### Bibliothèque de symboles- Symboles de mana officiels : génériques, colorés, hybrides, phyrexians, neigeux et autres symboles pris en charge par les données de cartes.
- Symboles d'édition et de rareté.- Symboles de types et sous-types.
- Symboles personnalisés importés ou créés par l'utilisateur.- Bibliothèque centralisée avec recherche, classement et prévisualisation.
- Création et réutilisation de combinaisons de symboles personnalisées.
### Import des icônes personnalisées- Import de fichiers d'icônes dans plusieurs formats graphiques compatibles, notamment les formats vectoriels et matriciels adaptés à l'affichage dans l'application.
- Prise en charge des formats compatibles sans imposer un format unique à l'utilisateur.- Prévisualisation avant ajout à la bibliothèque.
- Conservation des fichiers sources lorsque cela est possible, avec gestion d'une version exploitable pour le rendu si une conversion est nécessaire.- Classement, réutilisation et gestion des icônes importées comme des symboles natifs.

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

### Importation individuelle et par lots- Importation d'une carte depuis sa fiche ou ses résultats de recherche.
- Importation de plusieurs cartes en une seule opération.
- Prévisualisation des éléments sélectionnés avant import.- Indication des cartes déjà présentes dans la bibliothèque et gestion explicite des doublons.
- Possibilité de choisir les informations et ressources à récupérer lorsque la source le permet.
### Importation de decklists
- Importation de listes de cartes depuis des fichiers TXT et CSV.
- Prise en charge de decklists provenant de plateformes compatibles, notamment Moxfield et Archidekt, sous réserve de leurs formats et possibilités d'accès.- Analyse de la liste, reconnaissance des noms et quantités, puis présentation d'un bilan avant import.
- Signalement des entrées non reconnues, ambiguës ou indisponibles, avec possibilité de les résoudre manuellement.
- Conservation des quantités et de l'organisation de la liste lorsque le format source les fournit.
### Résolution des correspondances
- Résolution automatique des cartes même lorsque les noms, accents, ponctuations, langues ou présentations diffèrent légèrement.- Proposition de correspondances alternatives en cas d'ambiguïté.
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
- Préservation de la structure, des paramètres et des ressources nécessaires.- Possibilité de personnaliser la copie indépendamment de l'original.
- Gestion explicite des ressources partagées ou copiées afin d'éviter les modifications croisées involontaires.

### Importation et exportation- Export complet d'un projet dans un format de projet exploitable par l'application.
- Inclusion des paramètres, ressources intégrées, références et dépendances nécessaires.
- Possibilité d'inclure les ressources référencées afin de produire un projet autonome et transférable.
- Importation d'un projet avec vérification de son intégrité et de sa compatibilité.- Prévisualisation du contenu et des éventuels conflits avant intégration.
- Préservation de la structure et des paramètres lors des opérations d'import/export.

### Détection des ressources et dépendances- Vérification des ressources requises à l'ouverture d'un projet.
- Détection des fichiers manquants, déplacés, incompatibles ou dont la version pose problème.
- Identification des dépendances internes et externes.
- Proposition de retrouver, relier, importer ou remplacer les ressources manquantes.- Signalement clair des éléments qui ne peuvent pas être restaurés automatiquement.
- Aucun remplacement silencieux d'une ressource manquante par une autre.

### Transfert entre ordinateurs- Possibilité de déplacer ou transférer un projet vers un autre ordinateur.
- Conservation de sa structure, de ses paramètres, de ses ressources et de ses dépendances.
- Vérification de la compatibilité de la version de l'application et des ressources à l'ouverture sur l'autre ordinateur.
- Signalement et résolution guidée des éventuelles dépendances indisponibles.- Le transfert ne doit pas imposer de reconstruire manuellement le projet lorsque les ressources nécessaires ont été incluses.

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

## 10.12 Export des cartes — Question 34, validée

L'application doit proposer un système d'export complet permettant de produire des fichiers de cartes personnalisées dans plusieurs formats, individuellement ou en lots. L'export doit exploiter le moteur de rendu et les profils de sortie définis dans le projet, tout en préservant autant que possible la fidélité du résultat affiché dans l'éditeur.

### Formats d'export
- **PNG :** export d'images matricielles avec gestion de la transparence lorsque le format et le contenu le permettent.
- **JPEG :** export d'images matricielles avec paramètres de qualité configurables.
- **SVG :** export vectoriel lorsque les éléments et effets utilisés sont compatibles avec une restitution vectorielle.
- **PDF :** export de documents adaptés à la consultation et à l'impression, pouvant contenir une ou plusieurs cartes selon le mode choisi.
- Présenter clairement les caractéristiques et limites propres à chaque format.
- Ne pas convertir silencieusement ou supprimer des propriétés qui ne seraient pas prises en charge par le format choisi ; signaler les éventuelles pertes ou adaptations nécessaires.

### Modes d'export
- **Export individuel :** exporter une carte depuis sa fiche ou l'éditeur.
- **Export par sélection :** exporter plusieurs cartes choisies manuellement dans la bibliothèque ou une liste.
- **Export par deck :** exporter les cartes d'un deck en tenant compte de ses sections et quantités lorsque cela est pertinent.
- **Export par projet :** exporter les cartes et éléments prévus dans le périmètre du projet actif.
- Permettre de sélectionner les cartes et versions graphiques à exporter.
- Préserver l'ordre et l'organisation des sélections lorsque le format de sortie le permet.

### Paramètres de sortie
- Choix du format et des paramètres propres à celui-ci.
- Choix de la qualité et de la résolution pour les formats matriciels.
- Choix des dimensions de sortie et respect des proportions de la carte.
- Gestion de la transparence lorsque le format la prend en charge.
- Utilisation des profils de rendu adaptés à l'aperçu, à l'export ou à l'impression.
- Possibilité de définir des paramètres communs pour un lot et, lorsque cela est nécessaire, des réglages spécifiques à certaines cartes.
- Présentation des dimensions et caractéristiques du fichier final avant lancement de l'export.

### Organisation des fichiers exportés
- Choix du dossier de destination.
- Définition du nom des fichiers et possibilité d'utiliser des modèles de nommage.
- Éviter les collisions de noms et proposer une résolution explicite en cas de fichier déjà présent.
- Possibilité d'organiser les résultats dans des sous-dossiers selon le deck, le projet, l'édition ou d'autres critères disponibles.
- Préserver les fichiers existants : aucun remplacement ne doit être effectué silencieusement.

### Prévisualisation et contrôle
- Prévisualiser le résultat avec les paramètres d'export sélectionnés lorsque cela est possible.
- Vérifier les dimensions, la résolution, la transparence et les éventuelles limitations du format.
- Signaler les ressources manquantes, polices indisponibles, effets incompatibles ou erreurs susceptibles d'altérer le résultat.
- Permettre de revenir aux paramètres avant de lancer l'export définitif.

### Traitement par lots
- Exporter plusieurs cartes en une seule opération.
- Afficher la progression globale et l'état de chaque carte.
- Signaler les réussites, avertissements et échecs individuellement.
- Permettre de poursuivre le traitement des autres cartes lorsqu'un élément échoue.
- Faciliter l'accès aux fichiers produits et au bilan du traitement.
- Éviter de devoir ouvrir individuellement chaque carte pour l'exporter.

### Cohérence et intégrité
- Garantir autant que possible la cohérence entre le rendu de l'éditeur et le fichier exporté.
- Préserver les personnalisations graphiques, variantes, illustrations, symboles, icônes et compositions Over Art.
- Ne pas modifier les cartes, decks, projets ou ressources sources pendant l'export.
- Distinguer clairement les fichiers exportés des données de travail de l'application.

Toutes les fonctionnalités de cette section sont validées. La prise en charge effective des effets, transparences et propriétés dépendra des capacités du format choisi ; les limitations éventuelles devront être indiquées avant l'export.

## 10.13 Mise en page pour impression — Question 35, validée

L'application doit proposer un système complet de préparation des cartes à l'impression. Il doit permettre de composer des feuilles adaptées au support choisi, de contrôler précisément la disposition des cartes et de gérer les différentes configurations de faces, tout en offrant une prévisualisation fiable avant la production des fichiers ou le lancement de l'impression.

### Formats papier et disposition
- Prendre en charge les formats papier courants, notamment **A4, A3 et Letter**.
- Permettre de définir des formats de papier personnalisés.
- Choisir le nombre de cartes par feuille.
- Proposer une disposition automatique optimisant l'utilisation de la surface imprimable.
- Permettre également une disposition manuelle, avec contrôle de la position et de l'organisation des cartes.
- Adapter la composition aux dimensions réelles des cartes et aux contraintes du format papier sélectionné.

### Marges et repères de coupe
- Configurer les marges de la feuille et les espacements entre les cartes.
- Gérer les fonds perdus lorsque le visuel doit déborder du format final de la carte.
- Ajouter des traits ou repères de coupe configurables.
- Prévisualiser les marges, espacements, fonds perdus et repères afin de vérifier qu'ils ne gênent pas les cartes.
- Signaler les éléments qui dépassent de la zone imprimable ou les contraintes incompatibles avec le format choisi.

### Recto-verso et alignement des faces
- Prendre en charge l'impression recto-verso des cartes.
- Gérer l'alignement entre les faces avant et arrière d'une même carte.
- Permettre de configurer le retournement de la feuille selon le mode d'impression disponible, notamment le retournement sur le bord long ou le bord court.
- Prévisualiser la correspondance entre chaque recto et son verso avant impression.
- Signaler les risques de décalage ou les configurations qui ne peuvent pas être garanties par le matériel d'impression.

### Cartes à plusieurs faces- Reconnaître les cartes comportant plusieurs faces et gérer leurs différentes faces dans la préparation à l'impression.
- Associer correctement les faces avant et arrière selon les données disponibles.
- Permettre de choisir quelles faces doivent être imprimées et selon quelle organisation.
- Préserver l'ordre et la correspondance des faces lors de l'imposition.
### Inclusion automatique des tokens
- Détecter, à partir des cartes sélectionnées et de leurs données disponibles, les tokens associés ou requis par ces cartes.
- Proposer leur inclusion automatique dans la préparation à l'impression.
- Déterminer les tokens nécessaires et leurs quantités à partir des informations disponibles, sans inventer de correspondances absentes des sources.
- Éviter les doublons dans la sélection des tokens et regrouper les exemplaires nécessaires lorsque cela est pertinent.- Permettre à l'utilisateur de vérifier, ajouter ou retirer les tokens proposés avant de valider la feuille d'impression.
- Signaler les tokens introuvables ou dont les données ne permettent pas de déterminer précisément la correspondance.

### Impression séparée des versos
- Proposer une option permettant de préparer et d'imprimer les versos séparément des rectos.- Dans ce mode, regrouper les versos sur des feuilles dédiées, imprimées sur une seule face (recto simple).
- Préserver la correspondance entre chaque verso et la carte ou le recto auquel il appartient.
- Permettre de choisir cette méthode indépendamment du mode d'impression recto-verso classique.
- Prévisualiser les feuilles de versos séparées et leur ordre afin de faciliter leur association ultérieure avec les rectos.
### Prévisualisation des feuilles
- Afficher une prévisualisation de chaque feuille avant impression.
- Permettre de parcourir les feuilles et de contrôler la disposition, le contenu, les faces et les repères.
- Identifier clairement les rectos, les versos et les éventuelles feuilles de versos séparées.
- Signaler les cartes manquantes, les faces non associées, les ressources absentes et les problèmes de disposition.- Permettre de revenir aux paramètres de mise en page et de corriger la composition avant validation.

### Profils d'impression
- Permettre d'enregistrer plusieurs profils d'impression réutilisables.
- Conserver dans chaque profil les paramètres de papier, disposition, marges, espacements, fonds perdus, repères, recto-verso et organisation des faces.- Permettre de modifier, dupliquer, renommer et supprimer les profils.
- Proposer un profil par défaut, sans empêcher l'utilisation de réglages ponctuels propres à une impression.
- Préserver les profils lors des sauvegardes et, lorsque cela est pertinent, dans les paramètres des projets.

Toutes les fonctionnalités de cette section sont validées. Les possibilités d'alignement physique et de recto-verso dépendront également des capacités et réglages de l'imprimante utilisée ; l'application devra rendre ces contraintes visibles et ne pas garantir une précision matérielle qu'elle ne peut pas contrôler.

## 10.14 Gestion des travaux d'impression — Question 36, validée

L'application doit permettre de créer, enregistrer et gérer plusieurs travaux d'impression indépendants. Un travail d'impression représente une préparation complète qui peut être conservée, rouverte, modifiée et relancée ultérieurement sans devoir reconstruire toute sa configuration.

### Création et gestion des travaux
- Créer un nouveau travail d'impression à partir d'une sélection de cartes, d'un deck, d'un projet ou d'une autre source compatible.
- Donner un nom à chaque travail et conserver ses informations d'identification.
- Enregistrer, modifier, dupliquer, archiver et supprimer des travaux d'impression.
- Gérer plusieurs travaux indépendants sans mélanger leurs cartes, paramètres ou résultats.
- Afficher clairement le travail actif et son état.
- Permettre de rouvrir un travail enregistré pour le consulter ou le modifier.

### Contenu conservé
Chaque travail doit conserver les informations nécessaires à sa reconstitution, notamment :
- Les cartes sélectionnées et leurs quantités.
- Les versions graphiques ou impressions choisies pour chaque carte.
- Les tokens détectés et ajoutés automatiquement, ainsi que leurs quantités et les éventuelles modifications manuelles.
- Les associations entre les rectos, les versos et les différentes faces des cartes.
- Le profil d'impression utilisé.
- Le format papier, la disposition, les marges, espacements, fonds perdus et repères de coupe.
- Les paramètres d'impression recto-verso ou d'impression séparée des versos.
- Les modifications manuelles apportées à la composition des feuilles.
- La prévisualisation et les informations relatives à l'état de préparation du travail.

### Reprise et modification
- Permettre de reprendre un travail exactement à partir de sa dernière configuration enregistrée.
- Autoriser la modification des cartes, quantités, tokens, paramètres et dispositions sans affecter les autres travaux.
- Permettre de remplacer le profil d'impression ou d'ajuster ponctuellement ses paramètres pour le travail concerné.
- Préserver les choix et modifications manuels lors de la réouverture.
- Signaler les changements de ressources, de données de cartes ou de profils susceptibles d'affecter le résultat depuis le dernier enregistrement.
- Présenter les conséquences des changements détectés et demander une validation avant toute actualisation susceptible de modifier la préparation.

### Prévisualisation et état du travail
- Conserver les informations nécessaires pour retrouver la prévisualisation du travail.
- Permettre de recalculer la prévisualisation lorsque les données ou paramètres ont changé.
- Identifier clairement les travaux prêts, incomplets ou présentant des avertissements ou erreurs.
- Signaler les cartes, tokens, faces ou ressources devenus indisponibles.
- Permettre de consulter les feuilles et leur organisation avant de lancer une nouvelle impression.

### Sécurité et intégrité
- Enregistrer les travaux indépendamment des cartes, decks, projets et profils sources.
- Ne pas modifier les données ou personnalisations des cartes lors de la préparation d'un travail.
- Éviter toute perte des modifications non enregistrées et avertir avant fermeture ou suppression d'un travail modifié.
- Préserver les travaux lors des sauvegardes générales de l'application.
- Ne jamais remplacer silencieusement un travail existant lors d'une duplication, d'un import ou d'un enregistrement sous un autre nom.

Toutes les fonctionnalités de cette section sont validées. La conservation d'une prévisualisation peut nécessiter un nouveau rendu si les ressources ou moteurs de rendu ont évolué ; dans ce cas, l'application devra signaler cette actualisation et préserver les paramètres et choix du travail.

## 10.15 Historique des impressions — Question 37, validée

L'application doit conserver un historique des opérations d'impression effectuées, distinct des travaux d'impression encore en préparation. Cet historique doit permettre de retrouver les impressions passées, de consulter leur configuration et leur résultat, et de repartir d'une impression antérieure pour en effectuer une nouvelle.

### Informations conservées
Pour chaque opération d'impression, conserver lorsque ces informations sont disponibles :
- La date et l'heure de l'opération.
- Le travail d'impression utilisé et sa configuration au moment de l'opération.
- Les cartes sélectionnées, leurs versions graphiques et les quantités préparées.
- Les tokens inclus, leurs quantités et leurs associations avec les cartes concernées.
- Les associations entre rectos, versos et différentes faces.
- Le nombre de feuilles générées et leur organisation.
- Les paramètres et le profil d'impression utilisés, y compris les éventuelles modifications ponctuelles.
- Les avertissements, erreurs et informations de diagnostic rencontrés pendant la préparation ou la génération.
- Le résultat de l'opération : terminée, interrompue ou partiellement réussie.

### Consultation et recherche
- Proposer une vue dédiée à l'historique, distincte de la liste des travaux en cours ou enregistrés.
- Permettre de consulter le détail d'une opération passée, sa configuration, les cartes et quantités concernées, les feuilles générées et son bilan.
- Distinguer clairement les opérations terminées, interrompues et partiellement réussies.
- Permettre de retrouver les avertissements et erreurs associés à chaque opération.
- Faciliter l'identification des impressions anciennes afin de pouvoir les réutiliser ou les reproduire.

### Réutilisation et réimpression
- Permettre de dupliquer un ancien travail ou une préparation issue de l'historique afin de créer un nouveau travail d'impression.
- Préserver la configuration historique d'origine : une duplication ou une réutilisation ne doit pas modifier l'entrée passée.
- Permettre de relancer une impression à partir d'une configuration antérieure, après vérification de la disponibilité des cartes, illustrations, tokens, profils et autres ressources nécessaires.
- Signaler les différences entre la configuration historique et les ressources ou données actuellement disponibles.
- Demander une validation avant toute actualisation susceptible de modifier le résultat par rapport à l'impression d'origine.

### Intégrité et conservation
- Conserver l'historique indépendamment de la modification ou de la suppression ultérieure du travail d'impression source, dans la mesure nécessaire à la consultation des informations passées.
- Ne pas présenter une impression comme physiquement terminée si l'application ne peut confirmer que la feuille a effectivement été imprimée ; distinguer la génération des fichiers, l'envoi à l'imprimante et tout état réellement vérifiable.
- Préserver les informations de diagnostic et le bilan de chaque opération.
- Intégrer l'historique aux mécanismes de sauvegarde de l'application.
- Permettre une gestion de la conservation de l'historique sans supprimer silencieusement les informations.

Toutes les fonctionnalités de cette section sont validées. Le niveau de confirmation d'une impression physique dépendra des informations réellement accessibles auprès du système et du pilote d'impression ; l'application devra distinguer les étapes qu'elle peut vérifier de celles qui ne peuvent pas être confirmées.

## 10.16 Génération et remise des fichiers d'impression — Question 38, validée

L'application doit générer les fichiers correspondant aux travaux préparés et les remettre à l'utilisateur dans le format sélectionné au cours des étapes précédentes. La gestion des fichiers après leur génération relève de l'utilisateur et s'effectue en dehors de l'application.

### Choix du dossier et du format
- Permettre à l'utilisateur de choisir le dossier de destination avant la génération du fichier.
- Respecter le format de sortie sélectionné lors des étapes précédentes, parmi les formats effectivement proposés et compatibles avec le travail préparé.
- Conserver les paramètres de sortie associés au format choisi, notamment les dimensions, la qualité, la résolution et les options pertinentes.
- Présenter le nom du fichier et sa destination avant de lancer la génération.
- Signaler les erreurs empêchant l'écriture du fichier dans le dossier sélectionné.

### Génération et remise à l'utilisateur
- Générer le fichier final à partir de la préparation et des paramètres validés.
- Une fois la génération réussie, proposer le fichier à l'utilisateur afin qu'il puisse le récupérer, l'ouvrir ou l'enregistrer selon les possibilités de l'environnement.
- Indiquer clairement le résultat de la génération et permettre d'accéder au fichier produit.
- Ne pas annoncer un fichier comme disponible si sa génération a échoué ou si son écriture à destination n'a pas été confirmée.

### Gestion des fichiers après génération
- Après la remise du fichier, l'utilisateur est entièrement responsable de sa gestion en dehors de l'application.
- L'application n'a pas vocation à organiser, classer, archiver, déplacer, synchroniser ou supprimer les fichiers générés après leur remise.
- Ne pas mettre en place de gestionnaire permanent de fichiers générés ni de système de classement automatique par projet, deck, travail ou date.
- L'utilisateur reste libre de déplacer, renommer, copier, archiver ou supprimer les fichiers avec les outils de son système.
- L'historique des impressions peut conserver les informations relatives à l'opération, à sa configuration et à son résultat, mais ne doit pas imposer la conservation ni la gestion des fichiers générés eux-mêmes.

Toutes les fonctionnalités de cette section sont validées. La manière exacte de proposer le fichier à l'utilisateur dépendra de l'environnement d'exécution de l'application ; le choix du dossier et la remise du fichier devront rester explicites, sans transférer à l'application la responsabilité de sa gestion ultérieure.

## 10.17 Génération de plusieurs fichiers et optimisation de l'export PDF — Question 39, validée

L'application doit permettre de choisir précisément la manière dont les fichiers issus d'un travail d'impression sont générés. L'utilisateur doit pouvoir produire un fichier unique ou plusieurs fichiers distincts, organiser les sorties selon les cartes, les decks, les groupes ou les pages, et ajuster les paramètres de qualité et d'optimisation du PDF à l'aide de réglages comparables à ceux proposés par les logiciels de publication assistée par ordinateur, notamment Adobe InDesign.

### Modes de génération et découpage des fichiers
- Permettre de générer un PDF unique regroupant toutes les cartes et toutes les feuilles du travail d'impression.
- Permettre de générer plusieurs PDF distincts, notamment par deck, par groupe ou selon les regroupements définis par l'utilisateur.
- Permettre de générer des fichiers séparés pour les rectos et les versos.
- Permettre une exportation distincte **par planche ou par page**, chaque planche/page pouvant ainsi être remise dans un fichier indépendant.
- Laisser choisir entre un fichier unique et plusieurs fichiers, ainsi que le mode de découpage souhaité lorsqu'il est applicable.
- Préserver l'ordre des cartes, des faces et des pages, ainsi que les correspondances recto-verso et l'organisation définie dans le travail d'impression.
- Permettre de combiner les critères de séparation lorsque cela a du sens, par exemple un fichier par deck, puis une séparation par recto/verso ou par page.
- Ne pas imposer un découpage incompatible avec le format ou le contenu demandé ; expliquer les limites éventuelles.

### Prévisualisation des fichiers à générer
- Avant la génération, présenter la liste prévisionnelle de tous les fichiers qui seront produits.
- Pour chaque fichier, afficher au minimum son nom proposé, son format, son contenu ou groupe de pages, le nombre de pages/planches et, lorsque pertinent, la répartition rectos/versos.
- Permettre de vérifier l'organisation et les règles de nommage avant validation.
- Signaler les noms en conflit ou les destinations susceptibles d'entraîner un écrasement, et demander une décision explicite.
- La prévisualisation ne doit pas créer ni modifier les fichiers définitifs.

### Qualité et optimisation de l'export PDF
- Proposer des profils ou préréglages d'export PDF adaptés à différents usages, par exemple qualité élevée pour impression, qualité standard ou fichier optimisé pour réduire la taille.
- Fournir des réglages détaillés inspirés des options avancées d'export PDF des logiciels de publication tels qu'Adobe InDesign, sans supposer une compatibilité exacte avec toutes leurs options ou tous leurs profils.
- Permettre de contrôler, lorsque le format et le moteur PDF le permettent :
  - la résolution et le rééchantillonnage des images couleur, en niveaux de gris et monochromes ;
  - la compression des images et le niveau de qualité associé ;
  - la conservation ou la réduction de la résolution des illustrations ;
  - la gestion des transparences et leur aplatissement uniquement lorsque nécessaire ;
  - l'incorporation des polices, ou leur conversion en tracés lorsque cette option est prise en charge et choisie explicitement ;
  - la conservation des profils colorimétriques et les options de conversion des couleurs ;
  - l'espace colorimétrique et les paramètres de sortie adaptés à l'impression lorsque ces informations sont disponibles ;
  - les paramètres de compatibilité PDF et les fonctions avancées réellement prises en charge par le moteur d'export ;
  - l'inclusion éventuelle des fonds perdus, repères et autres éléments de production définis dans le travail.
- Présenter des propositions d'optimisation en fonction du contenu du document et de son usage prévu : impression haute qualité, impression standard ou réduction du poids du fichier.
- Expliquer les compromis entre qualité visuelle, fidélité colorimétrique, compatibilité et taille du fichier.- Permettre à l'utilisateur d'accepter une proposition d'optimisation, de la modifier ou de conserver ses réglages personnalisés.
- Afficher une estimation de la taille du fichier lorsque cela est techniquement possible, en précisant qu'elle reste indicative avant génération.
- Ne jamais dégrader silencieusement les images, les couleurs, les transparences ou les polices pour réduire la taille du fichier.
- Signaler les options indisponibles ou non prises en charge par le moteur PDF, et ne pas présenter comme garanties les propriétés qui ne peuvent pas être vérifiées.

### Profils et réutilisation des paramètres- Permettre d'enregistrer, renommer, modifier, dupliquer et supprimer des profils d'export PDF personnalisés.
- Proposer des préréglages de base, tout en laissant l'utilisateur ajuster chaque paramètre compatible.
- Permettre de conserver les paramètres d'export avec le travail d'impression et de les réutiliser lors d'une génération ultérieure.
- Distinguer les paramètres de mise en page pour impression des paramètres techniques d'export PDF.
- Préserver les paramètres du travail et les profils existants lorsqu'un autre profil est choisi ; aucune modification ne doit être appliquée silencieusement.
### Génération et remise des fichiers
- Générer les fichiers conformément à la liste prévisualisée et aux paramètres validés.
- Signaler le succès ou l'échec de chaque fichier séparément lorsqu'une génération multiple est lancée.
- Permettre de poursuivre les autres générations lorsqu'un fichier individuel échoue, puis présenter un bilan global et détaillé.
- Respecter les règles de choix du dossier de destination et de remise des fichiers définies à la section 10.16.
- Après leur remise, laisser entièrement à l'utilisateur la gestion des fichiers en dehors de l'application ; ne pas ajouter de classement, d'archivage ou de gestionnaire automatique des fichiers générés.
Toutes les fonctionnalités de cette section sont validées. Les options exactes disponibles dépendront des capacités du moteur PDF retenu et des profils colorimétriques, polices et ressources disponibles. L'application devra distinguer les paramètres effectivement appliqués de ceux qui ne sont pas pris en charge, et ne jamais annoncer une conformité PDF ou une qualité d'impression qu'elle ne peut pas vérifier.

## 10.18 Normes et compatibilité PDF — Question 40, validée

L'application doit proposer des options de génération PDF adaptées aux différents flux d'impression, en prenant en charge des normes et profils de sortie reconnus lorsque le moteur PDF et les ressources disponibles le permettent. Le choix d'une norme doit guider les paramètres d'export et permettre de vérifier les incompatibilités avant la génération.
### Normes PDF prises en charge
- Proposer le format **PDF/X-1a** pour les flux d'impression qui nécessitent cette compatibilité.
- Proposer le format **PDF/X-4**, notamment pour les flux modernes nécessitant la conservation des transparences et une gestion avancée des couleurs.
- Proposer également un export PDF haute qualité sans imposer de norme PDF/X, lorsque ce choix est plus adapté à l'usage.
- Présenter clairement les différences d'usage et les contraintes principales de chaque option.- Ne proposer comme norme effectivement conforme que les variantes et versions que le moteur d'export est capable de produire et de vérifier.

### Profils colorimétriques ICC
- Permettre l'utilisation de profils ICC adaptés au flux de sortie.
- Permettre l'importation de profils ICC personnalisés par l'utilisateur, sous réserve de leur format et de leur validité.
- Permettre de sélectionner le profil de sortie lorsqu'il est disponible et compatible avec la norme choisie.
- Distinguer la conservation des profils incorporés, la conversion vers un profil de sortie et les cas où aucune conversion n'est appliquée.
- Afficher les informations disponibles sur le profil sélectionné et signaler les profils absents, invalides ou incompatibles.
- Préserver les couleurs autant que possible et expliquer les conséquences potentielles d'une conversion colorimétrique.
- Ne jamais prétendre garantir le rendu physique des couleurs sans tenir compte du matériel, des encres, du papier et de la chaîne d'impression.

### Vérification de conformité avant export
- Proposer une vérification préalable des paramètres et contenus du document par rapport à la norme PDF choisie.
- Contrôler, lorsque cela est techniquement possible, les polices, images, résolutions, espaces colorimétriques, profils ICC, transparences, fonds perdus, repères et autres exigences propres au profil sélectionné.
- Identifier les éléments conformes, les avertissements et les erreurs bloquantes.
- Présenter les problèmes détectés avec leur emplacement ou l'élément concerné lorsque cette information est disponible.
- Proposer des corrections ou adaptations lorsque cela est possible, avec prévisualisation et validation explicite de l'utilisateur.
- Ne jamais appliquer une correction qui dégrade ou modifie le document sans l'annoncer et obtenir l'accord de l'utilisateur.
- Permettre de relancer le contrôle après correction.
- Distinguer clairement une simple vérification interne d'une validation certifiée par un outil spécialisé externe ; ne pas revendiquer une certification que l'application ne peut pas fournir.

### Réglages guidés et mode expert
- Adapter automatiquement les paramètres d'export aux exigences de la norme ou du profil sélectionné, dans la limite des capacités réelles du moteur PDF.
- Signaler les réglages imposés, recommandés, incompatibles ou non modifiables pour le profil choisi.
- Conserver un mode expert permettant de consulter et d'ajuster manuellement les paramètres compatibles.
- Prévenir l'utilisateur lorsqu'un réglage manuel entre en conflit avec la norme ou le profil de sortie.
- Permettre de revenir aux réglages recommandés par la norme sans perdre silencieusement les autres profils personnalisés.
- Enregistrer et réutiliser des profils d'export associant norme PDF, paramètres techniques et profil ICC.

### Rapport de contrôle et génération
- Présenter un rapport de contrôle avant génération, récapitulant la norme choisie, le profil colorimétrique, les paramètres appliqués, les avertissements et les erreurs détectées.
- Permettre à l'utilisateur de consulter les détails et de décider de corriger, modifier le profil ou poursuivre lorsque les erreurs ne sont pas bloquantes.
- Bloquer la déclaration de conformité lorsque des exigences obligatoires ne sont pas satisfaites ou ne peuvent pas être vérifiées.
- Après génération, fournir un bilan indiquant la norme et les paramètres effectivement utilisés ainsi que le résultat des vérifications disponibles.
- Respecter les règles de génération multiple, de prévisualisation et de remise des fichiers définies aux sections 10.16 et 10.17.

Toutes les fonctionnalités de cette section sont validées. La prise en charge effective des normes, versions PDF/X et contrôles dépendra du moteur PDF retenu et des outils de validation intégrés ou disponibles. L'application devra distinguer les options simplement proposées, les contrôles réellement effectués et toute conformité effectivement vérifiée, sans revendiquer de certification non démontrée.

## 10.19 Formats de sortie supplémentaires — Question 41, validée

L'application doit proposer plusieurs formats de sortie complémentaires afin de répondre aux besoins de consultation, de conservation des éléments graphiques et de production d'images destinées à l'impression. Les formats proposés doivent être sélectionnables individuellement ou combinés au sein d'un même travail, dans la limite des capacités réelles des moteurs et des bibliothèques utilisés.

### Formats complémentaires
- **PDF avec calques :** permettre, lorsque le moteur PDF le prend réellement en charge, de conserver certaines séparations visuelles sous forme de calques afin de faciliter la consultation ou l'exploitation du document. Signaler les limites de conservation, de visibilité ou de compatibilité des calques selon les lecteurs PDF.
- **TIFF :** proposer l'export d'images TIFF, notamment pour les besoins d'impression haute qualité et les flux de production qui privilégient ce format. Permettre de régler les paramètres disponibles, notamment la résolution, la compression et les options colorimétriques compatibles.
- **PNG :** conserver la possibilité d'exporter des images matricielles avec transparence lorsque nécessaire, en proposant les réglages de dimensions, résolution et profil adaptés.
- **JPEG :** conserver la possibilité d'exporter des images matricielles compressées, avec réglage du niveau de qualité et des paramètres compatibles.
- **SVG :** permettre de conserver les éléments vectoriels dans un format exploitable, dans la limite des fonctionnalités et ressources effectivement exportables.
- **ZIP :** permettre de regrouper ponctuellement plusieurs fichiers générés au cours d'un même travail dans une archive unique, afin de faciliter leur remise à l'utilisateur. Cette archive est un mode de regroupement à la génération, et non un système de classement ou d'archivage permanent dans l'application.

### Choix et combinaison des formats
- Laisser l'utilisateur sélectionner un ou plusieurs formats de sortie pour un même travail lorsque cela est pertinent.
- Permettre de combiner plusieurs formats au sein d'une même opération, par exemple un PDF et des images individuelles, ou des fichiers SVG et PNG.
- Prévisualiser la liste des fichiers et formats qui seront produits, en cohérence avec les règles déjà définies aux sections 10.16 et 10.17.
- Appliquer à chaque format les paramètres de sortie qui lui sont propres et signaler clairement les réglages communs ou spécifiques.
- Ne proposer que les options réellement prises en charge par le moteur ou les bibliothèques utilisés. Signaler les fonctions indisponibles ou les différences de compatibilité entre formats.
- Préserver le contenu, l'ordre, les dimensions, les faces et les associations recto-verso définis dans le travail d'impression, dans la mesure où le format choisi permet de les représenter.
- Pour le ZIP, permettre de choisir les fichiers à inclure parmi ceux générés au cours de l'opération et présenter le contenu prévu avant création de l'archive.
- Respecter le choix du dossier de destination et les règles de remise des fichiers définies à la section 10.16. Après remise, la gestion des fichiers et archives reste entièrement à la charge de l'utilisateur ; aucune organisation ou conservation permanente n'est ajoutée dans l'application.

Toutes les fonctionnalités de cette section sont validées. L'export PDF interactif n'est pas demandé et ne doit pas être ajouté au périmètre sur la base de cette décision. La prise en charge des PDF avec calques dépendra des capacités réelles du moteur et des lecteurs utilisés ; l'application devra signaler les limites éventuelles et ne pas garantir une compatibilité universelle. Les caractéristiques précises des exports TIFF, PNG, JPEG et SVG dépendront également des outils retenus. Le ZIP constitue uniquement un regroupement ponctuel des fichiers sélectionnés lors de la génération, sans gestionnaire d'archives ni classement permanent dans l'application.

## 10.20 Profils d'export pour les formats image — Question 42, validée

L'application doit proposer des profils d'export personnalisables pour les formats image TIFF, PNG, JPEG et SVG. Ces profils doivent permettre de mémoriser et de réutiliser les réglages adaptés aux différents usages, sans les confondre avec les profils d'export PDF définis aux sections précédentes.

### Paramètres des profils
Les profils doivent pouvoir conserver, selon les possibilités propres à chaque format :
- Les dimensions de sortie et les règles de redimensionnement.
- La résolution d'export lorsqu'elle s'applique.
- Les paramètres de qualité et de compression.
- La gestion de la transparence et, lorsque pertinent, le choix d'un arrière-plan.
- Le profil colorimétrique ICC, sa conservation ou la conversion vers un profil de sortie compatible.
- Les paramètres spécifiques au format concerné, notamment les options vectorielles du SVG et les options de compression ou d'encodage des formats matriciels.
- Les autres réglages de sortie disponibles et compatibles avec le moteur utilisé.

### Gestion et réutilisation
- Permettre de créer, enregistrer, nommer, renommer, modifier, dupliquer et supprimer des profils d'export personnalisés.
- Proposer des préréglages de base adaptés à différents usages, tout en laissant l'utilisateur modifier les paramètres compatibles.
- Permettre de sélectionner un profil pour un export individuel ou un traitement par lots.
- Préserver les paramètres propres à chaque format et signaler clairement les options qui ne s'appliquent pas à certains formats.
- Permettre de modifier les réglages pour une opération ponctuelle sans altérer le profil enregistré, sauf validation explicite de l'utilisateur.
- Conserver avec le travail d'impression ou d'export les références aux profils et les réglages effectivement utilisés, afin de pouvoir reproduire une génération ultérieure dans la mesure où les ressources et moteurs nécessaires restent disponibles.

### Contrôle et compatibilité
- Présenter les paramètres du profil sélectionné avant la génération.
- Signaler les profils ICC absents, invalides ou incompatibles et les options non prises en charge.
- Distinguer les réglages demandés des réglages effectivement appliqués par le moteur d'export.
- Ne jamais modifier silencieusement les dimensions, la résolution, la compression, la transparence ou les couleurs pour contourner une limitation technique.
- Respecter les règles de prévisualisation, de génération et de remise des fichiers définies aux sections 10.16 à 10.19.

Toutes les fonctionnalités de cette section sont validées. Les paramètres disponibles dépendront des capacités réelles des moteurs d'export et des formats concernés. Les profils d'export image restent distincts des profils PDF ; les réglages incompatibles ou sans effet pour un format donné devront être clairement signalés.

## 10.21 Métadonnées des fichiers exportés — Question 43, validée

L'application doit permettre de renseigner, conserver et intégrer des métadonnées dans les fichiers exportés lorsque le format et les outils utilisés prennent en charge ces informations. Ces métadonnées facilitent l'identification, la recherche et la traçabilité des fichiers produits.

### Types de métadonnées
Les champs proposés doivent pouvoir inclure :
- Le titre du fichier ou de la création.
- Le nom de l'auteur ou du créateur.
- Une description.
- Des mots-clés et tags.
- La date de création et les informations relatives au logiciel utilisé pour générer le fichier, lorsque ces données peuvent être renseignées de manière fiable.
- Les informations de copyright, de licence ou de provenance, lorsque l'utilisateur souhaite les indiquer.
- Des champs de métadonnées personnalisés, dans la limite des possibilités du format de sortie.

### Saisie et application aux exports
- Permettre de renseigner les métadonnées avant la génération des fichiers.
- Permettre de définir des valeurs communes pour l'ensemble d'un export ou d'un lot.
- Permettre de personnaliser les métadonnées pour chaque carte ou fichier lorsque cela est pertinent.
- Prévoir une règle de priorité claire entre les valeurs globales, celles du projet, celles du travail d'impression et les valeurs propres à chaque carte ou fichier.
- Présenter un récapitulatif des métadonnées qui seront intégrées avant la génération.
- Permettre de modifier les valeurs pour une opération ponctuelle sans écraser les valeurs enregistrées dans le projet ou les profils, sauf validation explicite.
- Préserver les métadonnées disponibles lors d'une nouvelle génération ou d'une conversion de format lorsque cela est techniquement possible.

### Compatibilité et transparence
- Intégrer uniquement les champs réellement pris en charge par le format et les bibliothèques utilisées.
- Signaler les métadonnées qui ne peuvent pas être écrites, conservées ou transférées dans un format donné.
- Distinguer les métadonnées saisies, celles effectivement intégrées au fichier et celles qui ont été ignorées pour des raisons de compatibilité.
- Ne pas annoncer qu'une métadonnée est présente dans le fichier si son écriture n'a pas été confirmée.
- Ne pas modifier silencieusement les informations de provenance ou de copyright ; leur saisie et leur exactitude restent sous la responsabilité de l'utilisateur.
- Respecter les paramètres et règles de génération, de prévisualisation et de remise des fichiers définis aux sections précédentes.

Toutes les fonctionnalités de cette section sont validées. La prise en charge et la structure des métadonnées dépendront des formats de sortie et des outils retenus. L'application devra indiquer les champs réellement intégrés et signaler les pertes ou limitations lors d'une conversion, sans garantir une conservation universelle des métadonnées.

## 10.22 Fonds perdus, extension de matière et zones de sécurité — Question 44, validée

L'application doit proposer un système complet de préparation des bords et des zones de coupe afin de réduire les risques de bordures blanches ou de contenu important coupé lors de l'impression et du massicotage. Les réglages doivent être configurables et adaptés aux différents formats de cartes, templates et profils d'impression.

### Fonds perdus et extension de matière
- Définir des fonds perdus configurables, exprimés dans une unité adaptée à la mise en page et à l'impression.
- Permettre de prolonger la matière graphique au-delà des dimensions finales de la carte, jusqu'à la limite extérieure du fond perdu.
- Proposer un mécanisme d'extension automatique de la matière en fonction du contenu présent au bord de la carte : prolongement des illustrations et arrière-plans, continuité des textures, couleurs et éléments décoratifs lorsque cela est pertinent.
- L'extension doit chercher à produire une continuité visuelle naturelle sans étirer ou déformer de manière inappropriée les éléments importants, personnages, textes, symboles ou motifs reconnaissables.
- Prévoir des méthodes d'extension adaptées au contenu et aux ressources disponibles, ainsi qu'une possibilité de contrôle et d'ajustement manuel lorsque le résultat automatique est insuffisant.
- Afficher une prévisualisation du résultat étendu et permettre de comparer le contenu original avec la zone ajoutée.
- Signaler les zones pour lesquelles l'extension automatique n'est pas fiable ou ne peut pas être produite correctement ; ne jamais masquer une insuffisance par un remplissage arbitraire présenté comme fidèle.
- Permettre de régler l'extension indépendamment selon les côtés de la carte si nécessaire.
- L'objectif est qu'un léger décalage de coupe ne révèle pas le support blanc autour de la carte : la matière graphique doit donc dépasser la ligne de coupe sur toute la zone de fond perdu prévue.

### Zones de sécurité et limites physiques
- Définir séparément les dimensions physiques finales de la carte, la ligne de coupe, la zone de fond perdu et la zone de sécurité.
- La zone de sécurité doit maintenir les éléments essentiels — textes, coûts, symboles, icônes, cadres ou autres informations importantes — à une distance configurable de la ligne de coupe.
- Permettre de configurer les marges de sécurité indépendamment des fonds perdus, éventuellement avec des valeurs différentes selon les côtés.
- Permettre de définir des réglages distincts selon le format de carte, le template ou le profil d'impression.
- Détecter les éléments importants qui empiètent sur la zone de sécurité ou dépassent les limites prévues, puis afficher des alertes identifiant si possible les éléments concernés.
- Permettre à l'utilisateur de décider de corriger, déplacer ou conserver un élément signalé ; les alertes ne doivent pas entraîner de modification automatique non validée.

### Repères et guides de coupe
- Afficher des guides visuels distincts pour les dimensions finales, les limites physiques, les fonds perdus et la zone de sécurité.
- Permettre d'activer ou de désactiver individuellement ces guides dans l'éditeur et dans les prévisualisations concernées.
- Permettre de personnaliser les repères de coupe : positionnement et décalage, longueur, épaisseur ou taille du trait, couleur et visibilité.
- Prévoir des réglages de repères adaptés au format papier, à la disposition des cartes et au profil d'impression.
- Permettre de choisir si les repères sont générés ou non dans les fichiers d'impression, indépendamment de leur affichage temporaire dans l'éditeur.
- Éviter que les repères de coupe empiètent sur les cartes, leurs fonds perdus ou les autres repères ; signaler les conflits de placement lorsque cela est possible.

### Profils et réutilisation
- Intégrer les paramètres de fonds perdus, d'extension de matière, de zone de sécurité et de repères de coupe aux profils d'impression et aux templates, selon leur portée.
- Permettre de définir des valeurs par défaut et des exceptions propres à un format ou à un template.
- Conserver les paramètres réellement utilisés avec le travail d'impression afin de pouvoir reproduire sa configuration.
- Prévisualiser les effets des réglages avant génération et signaler les différences entre l'affichage de l'éditeur et les éléments effectivement inclus dans le fichier final.

Toutes les fonctionnalités de cette section sont validées. Les possibilités d'extension automatique dépendront des techniques de traitement d'image et du moteur de rendu retenus ; l'application devra distinguer clairement les extensions générées, les ajustements manuels et les zones pour lesquelles un résultat fiable ne peut être garanti. Les fonds perdus, la zone de sécurité, les dimensions physiques et les repères de coupe sont des paramètres distincts et ne doivent pas être confondus.

## 10.23 Découpe assistée par machine — Question 45, validée

L'application doit permettre de préparer des tracés de découpe destinés aux machines et logiciels spécialisés, en complément des repères de coupe destinés à l'impression.

### Contours et tracés
- Générer des contours vectoriels précis correspondant aux dimensions finales des cartes et aux formes personnalisées définies.
- Distinguer les tracés de découpe des illustrations, fonds perdus, zones de sécurité et repères d'impression.
- Gérer les contours individuels et les planches de plusieurs cartes, en préservant dimensions, proportions, espacements et positions.
- Prendre en charge les formes rectangulaires ou personnalisées, ainsi que les segments, courbes et tracés fermés lorsque le format cible le permet.

### Paramètres de découpe
- Régler le décalage du tracé par rapport au contour théorique de la carte.
- Prévoir les paramètres de compensation et de décalage de lame lorsque la machine ou le logiciel les expose.
- Configurer marges, espacements, distances de sécurité et contraintes propres à la machine ou au matériau.
- Prévisualiser les tracés, points de départ et de fin et ordre de découpe lorsque ces informations sont disponibles.
- Détecter et signaler, dans la mesure du possible, les tracés ouverts, intersections, doublons, chevauchements et géométries problématiques.
- Laisser l'utilisateur corriger ou valider les avertissements avant export.

### Compatibilité et formats
- Prévoir des exports adaptés aux logiciels et machines courants, notamment les écosystèmes Cricut et Silhouette, sous réserve de compatibilité réellement vérifiée.
- Étudier les formats d'échange pertinents, notamment SVG, DXF ou d'autres formats pris en charge par les logiciels ciblés.
- Permettre des fichiers de découpe séparés des fichiers d'impression ou combinés lorsque le flux cible le permet.
- Préserver la correspondance entre les cartes imprimées et leurs tracés de découpe.
- Présenter les formats disponibles et signaler les limites, conversions et incompatibilités ; ne jamais annoncer une compatibilité non vérifiée.

### Profils et flux de travail
- Créer et réutiliser des profils de découpe associés à une machine, un logiciel ou un matériau.
- Permettre de créer, nommer, modifier, dupliquer et supprimer les profils sans altérer les travaux déjà enregistrés.
- Conserver le profil et les paramètres utilisés avec chaque travail.
- Prévisualiser le résultat et contrôler les dimensions avant remise du fichier.
- L'application génère et remet les fichiers ; l'utilisateur les utilise ensuite dans le logiciel ou sur la machine externe.
- Ne pas prétendre piloter une machine ni confirmer une découpe physique sans intégration matérielle fiable et vérifiée.

Toutes les fonctionnalités de cette section sont validées. La compatibilité réelle dépendra des formats, logiciels, machines et capacités techniques disponibles. L'application devra distinguer la génération d'un fichier de découpe, son ouverture dans un logiciel externe et l'exécution effective d'une découpe physique.

## 10.24 Formes et découpes personnalisées — Question 46, validée

L'application doit permettre de concevoir des cartes dont la forme physique ne se limite pas au rectangle standard. Les formes extérieures et les découpes intérieures doivent pouvoir être définies, modifiées, prévisualisées et préparées pour l'impression et la découpe, en cohérence avec les systèmes de fonds perdus, de zones de sécurité et de découpe assistée par machine des sections 10.22 et 10.23.

### Formes extérieures personnalisées
- Proposer des formes prédéfinies, notamment rectangles, rectangles aux coins arrondis, cercles, ellipses, hexagones, polygones et autres silhouettes adaptées à la création de cartes.
- Permettre de créer des formes libres et des contours entièrement personnalisés.
- Autoriser le réglage précis des dimensions, proportions, rayons, angles, points et courbes du contour.
- Permettre de modifier indépendamment les différents segments et points du tracé, dans la limite des capacités de l'éditeur vectoriel.
- Préserver les dimensions physiques finales et les unités de mesure associées à chaque forme.

### Découpes intérieures
- Permettre de définir des ouvertures, fenêtres et zones retirées à l'intérieur de la surface extérieure de la carte.
- Prendre en charge plusieurs découpes intérieures sur une même carte lorsque la géométrie et le procédé de fabrication le permettent.
- Distinguer clairement les surfaces conservées, les zones traversantes retirées et les éventuelles zones décoratives qui ne constituent pas une découpe physique.
- Contrôler les dimensions minimales, les distances entre découpes et les épaisseurs de matière restantes lorsque ces contraintes peuvent être évaluées.
- Signaler les formes ou ouvertures susceptibles de fragiliser la carte ou de poser problème lors de l'impression, de la manipulation ou de la découpe.

### Édition et importation vectorielles
- Fournir des outils de création et de modification des contours vectoriels : ajout, suppression et déplacement de points, réglage des poignées et courbes, fermeture et fusion de tracés, ainsi que modification des segments.
- Permettre l'importation de tracés vectoriels depuis des fichiers SVG lorsque leur structure est compatible.
- Permettre de corriger, simplifier, redimensionner et positionner les tracés importés sans perdre inutilement leur précision.
- Détecter et signaler les tracés ouverts, auto-intersections, doublons, contours superposés ou autres anomalies géométriques susceptibles d'empêcher une découpe correcte.
- Préserver la distinction entre le contour physique de la carte, les découpes intérieures, les illustrations, les fonds perdus, les zones de sécurité et les repères d'impression.

### Adaptation de la composition et préparation à la fabrication
- Permettre de visualiser la forme finale de la carte et les zones qui seront retirées.
- Prévoir des masques ou limites de composition afin que les illustrations, textures, fonds et autres éléments graphiques puissent être adaptés à la forme extérieure et aux ouvertures intérieures.
- Adapter les fonds perdus et l'extension de matière au contour réel, y compris autour des découpes intérieures lorsque cela est nécessaire et pertinent.
- Adapter les zones de sécurité aux contours et aux ouvertures, afin de maintenir les textes, symboles et informations importantes dans les surfaces réellement conservées.
- Générer les tracés vectoriels de découpe correspondants et les transmettre au flux de découpe assistée par machine défini à la section 10.23.
- Prévisualiser séparément le rendu imprimé, les surfaces conservées et les tracés de découpe ; signaler les incompatibilités ou les zones nécessitant une intervention manuelle.
- Préserver les formes personnalisées lors de l'export et de la génération des fichiers compatibles, dans la limite des capacités de chaque format et logiciel cible.

### Modèles de formes réutilisables
- Permettre d'enregistrer une forme personnalisée comme modèle réutilisable dans la bibliothèque.
- Conserver dans chaque modèle ses dimensions, son contour extérieur, ses découpes intérieures, ses paramètres géométriques et les éventuelles contraintes associées.
- Permettre de nommer, classer, rechercher, modifier, dupliquer et supprimer les modèles.
- Permettre d'appliquer un modèle à plusieurs cartes ou templates, avec possibilité d'ajustements locaux sans altérer le modèle d'origine.
- Prévoir une gestion contrôlée des modifications d'un modèle afin de signaler les cartes et templates qui l'utilisent, sans écrasement silencieux de leurs personnalisations.

Toutes les fonctionnalités de cette section sont validées. La faisabilité des géométries, contrôles de fragilité et procédés de fabrication dépendra des formats, moteurs et machines ciblés. L'application devra distinguer la prévisualisation d'une forme, la génération d'un tracé de découpe compatible et la réalisation physique effective de la découpe. Les formes personnalisées ne devront pas être limitées aux seuls exemples cités dans cette section.

## 10.25 Contrôle qualité avant impression et découpe — Question 47, validée

L'application doit proposer un contrôle qualité automatique avant la génération des fichiers d'impression et de découpe. Ce contrôle doit aider l'utilisateur à détecter les erreurs, incompatibilités et risques susceptibles d'affecter le rendu, la fabrication ou la découpe des cartes. Il doit s'appuyer sur les paramètres du projet, du travail, des profils d'impression et de découpe, des formats et des formes personnalisées concernés.

### Contrôles de préparation à l'impression
- Vérifier les dimensions physiques des cartes, les dimensions des feuilles et la disposition des éléments sur chaque planche.
- Contrôler les fonds perdus, l'extension de matière, les zones de sécurité, les limites physiques et le positionnement des repères de coupe.
- Vérifier que les éléments importants ne sont pas coupés, masqués ou placés dans des zones présentant un risque de découpe.
- Contrôler la résolution effective des images selon les dimensions et la qualité de sortie demandées, et signaler les ressources insuffisantes ou potentiellement dégradées.
- Détecter les illustrations, textures, polices, symboles, icônes ou autres ressources manquantes, indisponibles ou incompatibles.
- Vérifier les polices et leur mode de traitement prévu à l'export, notamment leur incorporation ou leur conversion lorsque ces possibilités sont réellement prises en charge.
- Contrôler les profils colorimétriques, profils ICC, espaces colorimétriques, transparences et paramètres de conversion lorsque ces contrôles sont applicables au format choisi.
- Vérifier les paramètres et contraintes du format de sortie, notamment les options de compression, les dimensions, les fonds perdus, les repères et les exigences PDF/X lorsqu'une telle norme est sélectionnée.
- Signaler les éventuelles différences entre la prévisualisation, les paramètres demandés et les capacités effectives du moteur de rendu ou d'export.

### Contrôles de préparation à la découpe
- Vérifier la fermeture et la cohérence géométrique des tracés de découpe.
- Détecter, lorsque cela est possible, les tracés ouverts, auto-intersections, doublons, superpositions, segments inutiles et géométries susceptibles de provoquer une découpe incorrecte.
- Contrôler la correspondance entre les tracés et les contours physiques des cartes, y compris les formes extérieures personnalisées et les découpes intérieures.
- Vérifier les dimensions, espacements, marges et zones de sécurité selon les contraintes connues de la machine, du logiciel ou du matériau sélectionné.
- Contrôler les paramètres de décalage et de compensation de lame lorsqu'ils sont disponibles et pertinents pour le profil choisi.
- Signaler les détails trop fins, les parties trop fragiles ou les distances insuffisantes entre contours lorsque des seuils de contrôle sont définis.
- Vérifier la cohérence entre les fichiers d'impression et les fichiers de découpe, notamment l'alignement, l'échelle et la correspondance des cartes.

### Rapport et niveaux de gravité
- Produire un rapport avant génération, présentant les contrôles effectués et leur résultat.
- Distinguer clairement les erreurs bloquantes, qui empêchent une génération fiable ou conforme aux paramètres sélectionnés, les avertissements qui signalent un risque ou une limitation, et les suggestions d'amélioration qui ne constituent pas nécessairement un défaut.
- Pour chaque problème détecté, indiquer si possible l'élément, la carte, la page, la planche ou le tracé concerné, ainsi que sa localisation.
- Expliquer la cause du problème, ses conséquences possibles et les paramètres ou ressources concernés.
- Permettre de filtrer et consulter les résultats par catégorie, gravité, carte, page ou type de fichier.
- Présenter un bilan global et un état distinct pour les fichiers d'impression et de découpe.
- Conserver le rapport et les résultats du contrôle avec le travail concerné et l'historique de génération, afin de pouvoir consulter les vérifications réalisées.

### Corrections et validation utilisateur
- Lorsque cela est possible, proposer des corrections ou des pistes de résolution adaptées à chaque problème.
- Permettre de consulter les changements proposés et leur effet attendu avant de les appliquer.
- Ne jamais déplacer, redimensionner, remplacer, convertir, supprimer ou modifier automatiquement un élément sans validation explicite de l'utilisateur.
- Permettre à l'utilisateur de corriger manuellement les problèmes dans l'éditeur ou les paramètres concernés, puis de relancer les contrôles.
- Autoriser la poursuite malgré certains avertissements, après information claire de l'utilisateur et confirmation lorsque cela est nécessaire.
- Les erreurs bloquantes doivent empêcher la génération uniquement lorsqu'elles compromettent réellement la production du fichier ou une exigence explicitement sélectionnée. L'application doit expliquer le motif du blocage et, si une dérogation sûre est possible, la soumettre à une décision explicite.
- Permettre de conserver les problèmes acceptés comme dérogations avec leur justification ou confirmation, sans les présenter comme corrigés.

### Portée, fiabilité et traçabilité
- Permettre de lancer le contrôle sur une carte, une sélection, un deck, une planche, un travail complet ou un projet selon le contexte.
- Effectuer les contrôles pertinents pour les formats et procédés sélectionnés, sans afficher comme applicables des vérifications qui ne concernent pas le type de sortie.
- Distinguer les contrôles réellement effectués, ceux qui n'ont pas pu être réalisés et ceux qui ne sont pas applicables.
- Ne pas annoncer une conformité générale ou certifiée lorsque seuls certains contrôles internes ont été effectués.
- Préciser les limites des contrôles qui dépendent d'informations inconnues, de profils externes, de logiciels tiers, de machines ou de matériaux.
- Conserver la date, les paramètres et les versions des ressources ou profils pertinents pour contextualiser le rapport, dans la mesure où ces informations sont disponibles.
- Permettre de relancer le contrôle après toute modification pertinente et signaler qu'un rapport précédent peut ne plus refléter l'état actuel du travail.

Toutes les fonctionnalités de cette section sont validées. Le contrôle qualité doit assister l'utilisateur sans garantir un résultat physique ou une conformité que l'application ne peut pas vérifier. Les résultats doivent refléter uniquement les contrôles effectivement exécutés et les informations disponibles. Aucun correctif ne doit être appliqué sans validation explicite ; la génération, les avertissements acceptés et les éventuelles dérogations doivent rester traçables.

## 10.27 Sélection des contrôles qualité à lancer — Question 48, validée

À la fin de la préparation d'un travail d'impression et/ou de découpe, l'application doit proposer à l'utilisateur de sélectionner les contrôles qualité qu'il souhaite exécuter. Le fonctionnement doit rester simple et direct : une liste de cases à cocher permet de choisir les vérifications, puis un bouton « Lancer les contrôles » démarre leur exécution.

### Sélection des contrôles
- Présenter les contrôles qualité disponibles sous forme de cases à cocher, regroupées de manière compréhensible par catégorie, notamment impression et découpe.
- Permettre à l'utilisateur de sélectionner un ou plusieurs contrôles selon ses besoins.
- Ne proposer que les contrôles pertinents pour le contenu et le type de sortie du travail en cours ; les contrôles non applicables doivent être clairement identifiés ou ne pas être proposés dans la sélection.
- Permettre de sélectionner séparément les contrôles d'impression, les contrôles de découpe ou les deux lorsque le travail comprend ces deux préparations.
- Prévoir une action explicite « Lancer les contrôles » après la sélection. Aucun contrôle ne doit être considéré comme exécuté avant le déclenchement de cette action.
- Ne pas introduire de système de profils de contrôle qualité enregistrables, nommables ou réutilisables : la sélection des vérifications à lancer suffit.

### Exécution et résultats
- Exécuter uniquement les contrôles sélectionnés et techniquement disponibles.
- Présenter les résultats selon les règles définies dans la section 10.25 : erreurs bloquantes, avertissements et suggestions, avec leur cause, leur portée et leur localisation lorsque ces informations sont disponibles.
- Distinguer les contrôles effectués, ceux qui n'ont pas pu être réalisés et ceux qui ne sont pas applicables.
- Si un contrôle sélectionné ne peut pas être effectué, l'indiquer clairement sans le présenter comme réussi.
- Conserver les résultats et les paramètres du contrôle lancé avec le travail et son historique, conformément aux exigences de traçabilité de la section 10.25.
- Permettre à l'utilisateur de corriger les problèmes puis de relancer les contrôles souhaités après les modifications pertinentes.
- La sélection des contrôles ne doit pas modifier automatiquement les cartes, les tracés, les paramètres ou les ressources. Les corrections restent soumises à validation explicite selon la section 10.25.

Toutes les fonctionnalités de cette section sont validées. Le contrôle qualité repose sur une sélection ponctuelle et explicite des vérifications à effectuer, au moyen de cases à cocher et d'un bouton de lancement. Aucun système de profils de contrôle qualité n'est prévu à ce stade. Les résultats doivent respecter les exigences de fiabilité, de présentation et de traçabilité définies en section 10.25.

## 10.28 Mémorisation facultative des préférences de contrôle qualité — Question 49, validée

La sélection des contrôles qualité doit commencer sans aucune case cochée par défaut. L'utilisateur choisit explicitement les vérifications qu'il souhaite lancer à chaque utilisation, sauf s'il active volontairement une option de mémorisation de ses préférences.

### Comportement par défaut
- À l'ouverture de l'étape de sélection, toutes les cases de contrôle doivent être décochées.
- Aucun contrôle ne doit être présélectionné implicitement lorsque la mémorisation des préférences est désactivée.
- L'utilisateur choisit librement les contrôles à effectuer, puis déclenche leur exécution avec le bouton « Lancer les contrôles ».

### Option de mémorisation
- Proposer un bouton glissant intitulé « Se rappeler de mes préférences ».
- Cette option doit être désactivée par défaut.
- Lorsque l'option est activée, mémoriser la sélection de contrôles de l'utilisateur afin de pouvoir la lui reproposer lors des prochaines utilisations.
- Lorsque l'option est désactivée, ne pas appliquer de sélection mémorisée : chaque nouvelle sélection commence avec toutes les cases décochées.
- La sélection reproposée grâce à cette option reste modifiable librement avant le lancement des contrôles.
- La mémorisation porte uniquement sur les préférences de sélection des contrôles ; elle ne remplace pas les résultats des contrôles précédents et ne modifie pas les rapports conservés avec les travaux.
- Ne pas confondre ces préférences avec des profils de contrôle qualité : aucun système de profils enregistrables n'est introduit.

Toutes les fonctionnalités de cette section sont validées. Le comportement initial reste une sélection entièrement vide. La mémorisation est facultative, explicite et désactivée par défaut ; elle sert uniquement à reproposer les choix précédents lorsque l'utilisateur le souhaite.

## 10.29 Moment d'exécution des contrôles qualité — Question 50, validée

Les contrôles qualité sélectionnés par l'utilisateur doivent être exécutés juste avant la génération des fichiers d'impression et/ou de découpe. Ils interviennent après la préparation du travail, le choix des paramètres et la sélection des vérifications à effectuer, et constituent la dernière étape de vérification avant la génération.

- Placer l'étape de sélection et de lancement des contrôles qualité immédiatement avant la commande de génération des fichiers.
- Conserver le fonctionnement défini dans les sections 10.25 à 10.28 : sélection manuelle des contrôles, aucune case cochée par défaut et mémorisation facultative des préférences si l'utilisateur a activé l'option correspondante.
- Une fois les contrôles lancés, présenter les résultats avant de démarrer la génération.
- Si des erreurs bloquantes sont détectées, empêcher la génération conformément aux règles de la section 10.25 et expliquer les problèmes à résoudre.
- Si seuls des avertissements ou suggestions sont présents, appliquer les règles de confirmation et de dérogation explicite définies en section 10.25.
- Après une correction ou une modification pertinente effectuée à la suite du contrôle, permettre de relancer les vérifications concernées avant la génération.
- Si une modification affecte la préparation après le contrôle, signaler que les résultats peuvent être obsolètes et demander une nouvelle vérification lorsque cela est nécessaire.
- Ne pas imposer un contrôle supplémentaire pendant les étapes antérieures de préparation : le moment prévu pour ce contrôle est juste avant la génération.

Toutes les fonctionnalités de cette section sont validées. Le contrôle qualité constitue la dernière étape de vérification avant la génération des fichiers. Il ne doit pas être confondu avec la génération elle-même ni avec la confirmation d'une impression ou d'une découpe physique.

## 10.30 Chapitres restant à développer

- Illustrations et versions alternatives.
- Éditions et symboles.
- Export individuel et par lots.
- Interface et ergonomie détaillées.
- Paramètres généraux.
- Performances.
- Sécurité et intégrité des données.
- Tests et critères de validation.
- Architecture technique détaillée.

# 11. Principes généraux de conception

1. **Liberté de création :** ne pas imposer de limites artificielles à la personnalisation graphique.2. **Modularité :** permettre la réutilisation des templates, composants, ressources et variantes.
3. **Héritage contrôlé :** préserver les relations entre modèles et instances sans empêcher les personnalisations locales.
4. **Réversibilité :** toute modification importante doit pouvoir être annulée ou restaurée.
5. **Sécurité des données :** ne jamais écraser ou déplacer silencieusement les données utilisateur.
6. **Compatibilité :** préserver autant que possible les projets et configurations existants.
7. **Extensibilité :** permettre l'ajout de nouveaux éléments, règles, composants et fonctionnalités.
8. **Prévisualisation :** permettre de vérifier les résultats avant application définitive.
9. **Automatisation contrôlée :** assister l'utilisateur sans lui retirer le contrôle.
10. **Cohérence graphique :** garantir une expérience homogène entre les écrans et outils.

# 12. État du cahier des charges

**Version actuelle : V2.12**

Cette version consolide les décisions validées jusqu'à la question 50 incluse. Elle confirme la gestion complète des decks et des projets indépendants, valide le moteur de rendu et le système d'export des cartes en PNG, JPEG, SVG et PDF, puis ajoute la préparation complète des feuilles d'impression : formats papier courants et personnalisés, disposition automatique ou manuelle, marges et repères, recto-verso, cartes à plusieurs faces, inclusion automatique des tokens associés, impression séparée des versos sur une seule face, prévisualisation des feuilles et profils d'impression réutilisables. Elle valide également la gestion de travaux d'impression enregistrables et réutilisables, conservant les cartes, quantités, tokens, profils, paramètres, modifications manuelles, prévisualisations et états de préparation, ainsi qu'un historique des impressions effectuées permettant de consulter les configurations, contenus, feuilles générées, avertissements, erreurs et résultats, puis de dupliquer une ancienne préparation pour la réutiliser. Elle définit également la génération des fichiers d'impression dans le format choisi, le choix du dossier de destination et la remise du fichier à l'utilisateur, qui en assure ensuite seul la gestion en dehors de l'application. Enfin, elle ajoute la génération d'un fichier unique ou de plusieurs fichiers, le découpage par deck, groupe, recto/verso ou planche/page, une prévisualisation de la liste des fichiers à produire et des réglages avancés d'optimisation de la qualité et du poids des PDF, inspirés des outils d'export des logiciels de publication assistée par ordinateur. Elle ajoute la prise en charge guidée des normes PDF/X-1a et PDF/X-4 lorsque le moteur le permet, un export PDF haute qualité sans norme PDF/X imposée, l'import et l'utilisation de profils ICC personnalisés, ainsi qu'un contrôle préalable de conformité avec rapport, signalement des incompatibilités et distinction entre contrôles effectués et conformité réellement vérifiée. La question 41 ajoute les formats de sortie complémentaires PDF avec calques lorsque pris en charge, TIFF, PNG, JPEG et SVG, ainsi qu'un regroupement ponctuel des fichiers sélectionnés dans une archive ZIP ; le PDF interactif est explicitement exclu. La question 42 valide des profils d'export personnalisables et réutilisables pour les formats TIFF, PNG, JPEG et SVG, avec des paramètres adaptés à chaque format. La question 43 ajoute la gestion des métadonnées des fichiers exportés, avec des champs descriptifs, des valeurs communes ou propres à chaque carte et un contrôle de leur intégration selon les formats. La question 44 définit la préparation des bords de carte avec fonds perdus configurables, extension automatique de matière adaptée au contenu pour limiter les bords blancs, zones de sécurité, limites physiques et repères de coupe personnalisables. La question 45 valide la préparation de tracés vectoriels pour la découpe assistée par machine, avec paramètres de compensation, prévisualisation, contrôles géométriques, exports compatibles et profils réutilisables. La question 46 étend ces possibilités aux formes physiques personnalisées : contours extérieurs libres ou prédéfinis, découpes intérieures, édition et importation vectorielles, adaptation des compositions, fonds perdus, zones de sécurité et tracés de découpe, ainsi que modèles de formes réutilisables. La question 47 valide un contrôle qualité automatique avant génération des fichiers d'impression et de découpe, couvrant les dimensions, fonds perdus, zones de sécurité, ressources, résolutions, paramètres colorimétriques et géométrie des tracés, avec rapports détaillés, niveaux de gravité, propositions de correction soumises à validation et traçabilité des contrôles effectués. La question 48 valide une sélection ponctuelle des contrôles qualité à effectuer en fin de préparation, au moyen de cases à cocher regroupées par catégorie et d'un bouton « Lancer les contrôles » ; seuls les contrôles sélectionnés et applicables sont exécutés, sans création de profils de contrôle qualité enregistrables. La question 49 précise que toutes les cases de contrôle qualité sont décochées par défaut ; une option glissante « Se rappeler de mes préférences », désactivée par défaut, permet de mémoriser et reproposer les choix précédents sans créer de profils de contrôle. La question 50 fixe le lancement des contrôles qualité juste avant la génération des fichiers, après la préparation et la sélection des vérifications, avec prise en compte des erreurs bloquantes, avertissements, corrections et rapports potentiellement obsolètes.
Ce document constitue une base de référence pour les prochaines étapes de conception. Les fonctionnalités ne doivent pas être considérées comme implémentées tant qu'elles n'ont pas été développées et testées dans l'application.

À partir de V2.12, la bibliothèque de cartes, la recherche et l'importation des cartes, la gestion des decks et listes de cartes, la gestion des projets, le moteur de rendu, la gestion des types de cartes, des polices, des couleurs, des illustrations, des compositions Over Art, des associations automatiques d'illustrations, des symboles/icônes et des frames décrites dans ce document constituent un ensemble de fonctionnalités validées. La préparation à l'impression inclut les fonds perdus, l'extension de matière adaptée au contenu pour limiter les bords blancs, les zones de sécurité, les limites physiques et les repères de coupe personnalisables. La préparation de découpe assistée par machine est également validée : tracés vectoriels, compensation, prévisualisation, contrôles géométriques, exports compatibles et profils réutilisables. Les formes physiques personnalisées sont prises en charge dans la conception : contours extérieurs libres ou prédéfinis, découpes intérieures, édition et importation vectorielles, adaptation des zones de composition et modèles réutilisables. Un contrôle qualité automatique avant impression et découpe complète ces préparatifs, avec rapports, niveaux de gravité, propositions de correction soumises à validation et traçabilité des contrôles réellement effectués. La question 47 valide un contrôle qualité automatique avant génération des fichiers d'impression et de découpe, couvrant les dimensions, fonds perdus, zones de sécurité, ressources, résolutions, paramètres colorimétriques et géométrie des tracés, avec rapports détaillés, niveaux de gravité, propositions de correction soumises à validation et traçabilité des contrôles effectués. La question 48 précise que l'utilisateur choisit ponctuellement les contrôles à lancer à la fin de la préparation, au moyen de cases à cocher et d'un bouton de lancement, sans profils de contrôle qualité enregistrables. La question 49 impose une sélection vide par défaut et ajoute une option glissante facultative « Se rappeler de mes préférences », désactivée par défaut, pour reproposer les choix précédents. Toute nouvelle décision validée devra être ajoutée à une nouvelle version du cahier des charges, sans suppression des décisions antérieures.