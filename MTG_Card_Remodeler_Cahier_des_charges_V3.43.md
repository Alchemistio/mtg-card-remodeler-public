# MTG Card Remodeler
# Cahier des charges fonctionnel et technique

**Version :** 3.43  
**Date :** 10 novembre 2026  
**Statut :** En cours de définition — décisions validées et questions ouvertes  
**Dépôt :** https://github.com/Alchemistio/mtg-card-remodeler-public

---

## Historique des versions

| Version | Description |
|---|---|
| V3.43 | Validation des contrôles d'intégrité, de la récupération sécurisée des projets, des points de restauration avant opérations sensibles, de la vérification approfondie des imports et du journal détaillé des opérations |
| V3.41 | Validation des préférences de langue, des thèmes visuels, de la mise à l'échelle de l'interface, des mises à jour et de l'écran d'accueil au démarrage |
| V3.40 | Validation de l'organisation des paramètres par catégories, de leur application après validation, de leur stockage local, de la recherche globale et des niveaux de réinitialisation avec aperçu |
| V3.39 | Validation des paramètres globaux et par catégorie des notifications, des réglages sonores indépendants, de la priorité des notifications importantes, de la lisibilité et de la limitation des répétitions |
| V3.38 | Validation des informations affichées dans les notifications, de l'identification de leur origine, de l'affichage de l'heure, des icônes par catégorie et du contenu non personnalisable |
| V3.37 | Validation de l'interaction avec les notifications, de leur fermeture manuelle, de la distinction des notifications importantes et de leur comportement pendant une action |\n| V3.36 | Validation des notifications visuelles et sonores configurables, de leur emplacement, de leur durée, de leur regroupement et de leur conservation pendant la session |
| V3.35 | Décision de ne conserver aucun historique des modifications de raccourcis ; seule la dernière modification reste disponible pour l'annulation |
| V3.34 | Validation du dialogue de résolution des conflits pendant une annulation, de la valeur présélectionnée, des conséquences du choix, de la synchronisation et du comportement en cas d'annulation du dialogue |
| V3.33 | Consolidation des décisions sur l'annulation des raccourcis, la gestion des conflits et la confirmation avant restauration |
| V3.32 | Validation du remplacement confirmé des raccourcis personnalisés, de l'annulation immédiate, de l'enregistrement durable et de la synchronisation entre fenêtres avec gestion des modifications simultanées |
| V3.31 | Validation de la saisie des raccourcis, des conflits, de l'interruption de capture et du retour visuel après modification |
| V3.30 | Validation de la modification des raccourcis depuis le panneau de détails, de l'annulation, du refus des conflits et du traitement des erreurs de validation |
| V3.29 | Validation du comportement du panneau de détails lors des changements de page, des commandes hors filtre, des modifications de raccourcis et des changements de sélection |
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
| V2.13 | Validation d'une confirmation manuelle explicite de l'utilisateur pour lancer la génération après consultation des résultats du contrôle qualité |
| V2.14 | Validation de l'affichage du rapport de contrôle qualité dans une fenêtre séparée avant le retour à l'écran de génération |
| V2.15 | Validation de la conservation temporaire du rapport qualité uniquement pendant le travail en cours, avec remplacement au prochain contrôle |
| V2.16 | Validation d'une confirmation avant fermeture de la fenêtre du rapport qualité |
| V2.17 | Validation d'un rappel dans la confirmation indiquant que le rapport restera accessible depuis l'écran principal |
| V2.18 | Validation d'un accès discret au rapport qualité depuis la page d'aperçu du projet concerné |
| V2.19 | Ajout d'un indicateur discret de l'état du rapport qualité dans l'accès depuis l'aperçu du projet et suppression des anciens cahiers des charges V0.x et V1.x du dépôt |
| V2.20 | Ajout d'icônes discrètes associées aux quatre états de l'indicateur du rapport qualité |
| V2.21 | Confirmation de la conservation du seul rapport qualité courant, sans historique des rapports remplacés |
| V2.22 | Conservation indépendante du rapport qualité courant pour chaque projet |
| V2.23 | Suppression définitive du rapport qualité courant lors de la suppression de son projet |
| V2.24 | Conservation du rapport qualité courant lors du renommage de son projet |
| V2.25 | Absence de copie du rapport qualité courant lors de la duplication d'un projet |
| V2.26 | Exclusion du rapport qualité courant lors de l'export et de l'import d'un projet |
| V2.27 | Exclusion du rapport qualité courant des sauvegardes restaurées |
| V2.28 | Conservation des rapports qualité courants à la fermeture de l'application |
| V2.29 | Obsolescence automatique du rapport après des modifications pertinentes du projet |
| V2.30 | Détection des modifications pertinentes des ressources utilisées |
| V2.31 | Obsolescence du rapport en cas de ressource utilisée supprimée ou introuvable |
| V2.32 | Consultation des causes d'obsolescence du rapport qualité |
| V2.33 | Conservation de toutes les causes d'obsolescence jusqu'au prochain contrôle |
| V2.34 | Enregistrement de la date et de l'heure de détection de chaque cause d'obsolescence |
| V2.35 | Regroupement des causes d'obsolescence similaires avec conservation de leurs événements et horodatages |
| V2.36 | Absence de filtres par catégorie dans la consultation des causes d'obsolescence |
| V2.37 | Rapport qualité non exportable : consultation uniquement dans l'application |
| V2.38 | Résumé comparatif avant remplacement du rapport qualité courant |
| V2.39 | Comparaison limitée à un résumé global, sans détail carte par carte |
| V2.40 | Résumé comparatif temporaire, supprimé après remplacement du rapport |
| V2.41 | Résumé comparatif intégré à la boîte de dialogue de confirmation |
| V2.42 | Premier rapport enregistré directement, sans confirmation supplémentaire |
| V2.43 | Annulation du remplacement : abandon du nouveau rapport, qui devra être recalculé lors d'un prochain contrôle |
| V2.44 | Aucune notification après annulation du remplacement ; retour direct à l'écran précédent |
| V2.45 | Après annulation, réinitialisation de l'état d'obsolescence de l'ancien rapport |
| V2.46 | Aucune indication particulière sur l'ancienneté du rapport après réinitialisation de son obsolescence |
| V2.47 | Aucune confirmation supplémentaire après remplacement du rapport qualité |
| V2.48 | En cas d'échec technique du remplacement, afficher une erreur et conserver l'ancien rapport |
| V2.49 | Proposer un bouton « Réessayer » après un échec de remplacement du rapport |
| V2.50 | Conservation persistante du nouveau rapport temporaire après abandon des tentatives, y compris après fermeture et réouverture de l'application |
| V2.51 | Signalement d'un rapport temporaire en attente par un indicateur discret et une proposition automatique de reprise à l'ouverture du projet |
| V2.52 | Présentation de la reprise du rapport temporaire dans un panneau discret intégré à la page d'aperçu du projet, sans fenêtre modale |
| V2.53 | Affichage de la date et de l'heure du dernier échec technique dans le panneau de reprise du rapport temporaire |
| V2.54 | Conservation et consultation de l'historique des échecs successifs de remplacement du rapport qualité, avec date et heure pour chaque échec |
| V2.55 | Limitation de l'historique à 20 échecs techniques de remplacement les plus récents |
| V2.56 | Affichage des trois échecs les plus récents dans le panneau de reprise, avec accès à l'historique complet |
| V2.57 | Ouverture de l'historique complet des échecs dans une fenêtre séparée |
| V2.58 | Affichage du détail technique disponible pour chaque échec dans l'historique |
| V2.59 | Copie individuelle des détails techniques depuis la fenêtre d'historique |
| V2.60 | Confirmation visuelle discrète après la copie d'un détail technique |
| V2.61 | Ordre chronologique fixe de l'historique des échecs, du plus récent au plus ancien |
| V2.62 | Absence de numérotation des échecs dans l'historique complet |
| V2.63 | Présentation compacte de l'historique complet sous forme de liste |
| V2.64 | Aperçu court des détails techniques longs, avec développement individuel |
| V2.65 | Affichage du détail développé sous l'aperçu, qui reste visible |
| V2.66 | Développement simultané de plusieurs détails techniques |
| V2.67 | Réinitialisation des détails développés à la réouverture de l'historique |
| V2.68 | Retour en haut de la liste à chaque réouverture de l'historique |
| V2.69 | Historique chronologique sans champ de recherche |
| V2.70 | Absence de compteur du nombre d'échecs conservés dans l'historique |
| V2.71 | Historique vide sans message spécifique lorsqu'aucun échec n'est enregistré |
| V2.72 | Fenêtre d'historique à taille fixe, sans redimensionnement manuel |
| V2.73 | Fenêtre d'historique déplaçable librement à l'écran |
| V2.74 | Mémorisation de la dernière position de la fenêtre d'historique |
| V2.75 | Repositionnement automatique si la position mémorisée n'est plus visible |
| V2.76 | Position mémorisée commune à tous les projets |
| V2.77 | Fenêtre d'historique au comportement classique, sans priorité permanente au premier plan |
| V2.78 | Fermeture immédiate de la fenêtre d'historique, sans confirmation |
| V2.79 | Restitution automatique du focus à la fenêtre précédemment active après fermeture de l'historique |
| V2.80 | Réactivation au premier plan de la fenêtre d'historique déjà ouverte lorsqu'une nouvelle ouverture est demandée |
| V2.81 | Conservation de l'état de consultation lors d'une nouvelle demande d'ouverture de l'historique déjà ouvert |
| V2.82 | Réinitialisation de l'état de consultation après fermeture puis réouverture de l'historique |
| V2.83 | Ouverture de l'historique au premier plan avec prise immédiate du focus |
| V2.84 | Restitution du focus à la fenêtre précédemment active parmi les fenêtres ouvertes |
| V2.85 | Solution de repli si la fenêtre précédemment active a été fermée |
| V2.86 | Retour à la fenêtre principale si aucune fenêtre antérieure n'est encore ouverte |
| V2.87 | Priorité à la fenêtre secondaire depuis laquelle l'historique a été demandé pour la restitution du focus |
| V2.88 | Maintien de la priorité de la fenêtre d'origine même si elle devient inactive avant la fermeture de l'historique |
| V2.89 | Restauration de la priorité au profit d'une fenêtre secondaire recréée correspondant à la fenêtre d'origine |
| V2.90 | En cas de recréations multiples, priorité à la fenêtre secondaire correspondante créée le plus récemment |
| V2.91 | Si la fenêtre secondaire recréée la plus récemment est fermée, application directe des règles générales de repli |
| V2.92 | En cas de repli après fermeture de la fenêtre secondaire prioritaire, restitution du focus à la dernière fenêtre précédemment active encore ouverte |
| V2.93 | Exclusion des fenêtres secondaires fermées puis recréées dans la sélection de la fenêtre de repli |
| V2.94 | Recherche successive des fenêtres précédemment actives admissibles jusqu'à en trouver une encore ouverte |
| V2.95 | Prise en compte des fenêtres minimisées dans la restitution du focus |
| V2.96 | Gestion du focus des fenêtres masquées, du déplacement entre écrans et des bureaux virtuels |
| V2.97 | Gestion de la restitution du focus lorsque les écrans changent ou deviennent indisponibles |
| V2.98 | Gestion des écrans de repli, de la sélection de l'écran cible et de la mémorisation des positions après repositionnement automatique |
| V2.99 | Départage des écrans de repli, priorité aux déplacements manuels et restauration des fenêtres au retour d'un écran |
| V3.00 | Restauration indépendante des fenêtres, adaptation proportionnelle aux résolutions et maintien du focus lors du retour d'un écran |
| V3.01 | Gestion des déconnexions répétées, mémorisation des redimensionnements manuels et repositionnement au lancement si l'écran d'origine reste indisponible |
| V3.02 | Gestion du retour d'un écran après redémarrage, conservation de la position initiale de restauration et report de la restauration lorsque l'application est inactive |
| V3.03 | Restauration simultanée des fenêtres, ordre de traitement selon la déconnexion et priorité à la restauration malgré un déplacement manuel sur l'écran de repli |
| V3.04 | Gestion des déconnexions répétées avant réactivation, restauration sans réagencement des fenêtres qui se chevauchent et réduction proportionnelle en cas de résolution insuffisante |
| V3.05 | Conservation des dimensions de référence après réduction, adaptation à une résolution ultérieurement accrue et mémorisation des redimensionnements manuels après restauration |
| V3.06 | Adaptation immédiate aux changements de résolution, maintien des chevauchements après agrandissement et priorité à la visibilité sans taille minimale |
| V3.07 | Adaptation pendant l'inactivité, traitement direct de la dernière résolution détectée et recalcul à partir des dimensions de référence lors du retour à une résolution antérieure |
| V3.08 | Interruption de l'adaptation en cas de déconnexion, calcul indépendant selon chaque écran et priorité de l'adaptation pendant une action manuelle |
| V3.09 | Navigation combinant barre latérale et commandes contextuelles, projets en onglets, panneaux déplaçables et redimensionnables, disposition commune et raccourcis clavier personnalisables |
| V3.11 | Enregistrement automatique de la disposition des panneaux, réinitialisation confirmée, activation des projets déjà ouverts, protection contre la fermeture avec modifications non enregistrées et interdiction des raccourcis en doublon |
| V3.12 | Conservation de l'ordre des onglets, identification visuelle de l'onglet actif, navigation dans une barre d'onglets saturée, menu contextuel et détachement des projets dans des fenêtres indépendantes |
| V3.13 | Réintégration des projets détachés, onglets dans les fenêtres indépendantes, mémorisation de leur géométrie, restauration du mode fenêtre et fermeture coordonnée de l'application |
| V3.14 | Identification et navigation entre fenêtres indépendantes, synchronisation configurable de l'interface, ouverture des projets déjà présents dans une autre fenêtre et choix de fermeture ou de réintégration des projets |
| V3.15 | Destination des nouveaux projets, création et fermeture des fenêtres indépendantes, indépendance des projets actifs et présentation du menu de navigation entre fenêtres |
| V3.16 | Identification des fenêtres dans la barre des tâches, minimisation et restauration individuelles, maintien du mode fenêtré et mémorisation de la taille initiale des nouvelles fenêtres indépendantes |
| V3.17 | Position et écran d'ouverture des nouvelles fenêtres indépendantes, comportement de regroupement dans la barre des tâches, fermeture d'une fenêtre à projet unique et restauration de l'état maximisé |
| V3.18 | Ordre et visibilité des fenêtres dans le menu de navigation, identification des fenêtres minimisées, actualisation immédiate du menu et navigation entre bureaux virtuels |
| V3.19 | Raccourcis de navigation entre fenêtres, ordre du parcours, inclusion des fenêtres minimisées, navigation circulaire et validation de la sélection |
| V3.20 | Validation de la consultation, de la recherche, de l'affectation, de la réinitialisation et du transfert des raccourcis clavier personnalisés |
| V3.21 | Validation de la résolution des conflits à l'importation, du filtrage des combinaisons réservées, de la disponibilité contextuelle, de la configuration globale et de la confirmation des réinitialisations |
| V3.22 | Validation des méthodes d'attribution, des séquences successives, des règles de modification et de l'export complet des raccourcis clavier |
| V3.23 | Validation de la présentation graphique des séquences, du délai configurable, du retour visuel et de l'organisation des raccourcis par catégories avec recherche globale |
| V3.24 | Validation du classement des catégories et commandes, de leur affichage repliable, de l'identification des personnalisations et des filtres par type d'affectation |
| V3.25 | Validation des informations affichées pour chaque raccourci, de la consultation des détails, des méthodes de modification et des accès à la réinitialisation individuelle |
| V3.26 | Validation de l'affichage des commandes sans raccourci, de l'interaction recherche-filtre, de la réinitialisation de l'état de la page et de la mise en évidence des commandes sélectionnées |
| V3.27 | Validation du panneau de détails des commandes : position, actualisation lors d'une nouvelle sélection, fermeture, conservation du défilement et attribution des raccourcis absents |
| V3.28 | Précisions sur l'ouverture, la largeur, les informations, la sélection et le comportement du panneau de détails selon les filtres |
| V3.10 | Réorganisation libre des onglets, indicateur de modifications non enregistrées, commandes de fermeture groupée, restauration sélective des projets au démarrage et confirmations individuelles à la fermeture de l'application |

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

## 10.30 Confirmation manuelle avant génération après contrôle qualité — Question 51, validée

Après l'exécution des contrôles qualité et la présentation de leurs résultats, l'application doit attendre une action explicite de l'utilisateur avant de générer les fichiers.

- Présenter le rapport et le bilan des contrôles avant toute génération.
- Ne jamais démarrer automatiquement la génération, même si aucun problème bloquant n'a été détecté.
- Proposer une commande distincte et clairement identifiable « Générer les fichiers » après consultation des résultats.
- L'utilisateur doit cliquer lui-même sur « Générer les fichiers » pour confirmer qu'il souhaite poursuivre.
- Si des erreurs bloquantes sont présentes, la génération reste empêchée selon les règles de la section 10.25 ; la confirmation manuelle ne permet pas de contourner un blocage.
- Si des avertissements ou suggestions sont présents, appliquer les règles de confirmation et de dérogation explicite définies en section 10.25, puis demander l'action manuelle de génération.
- Si l'utilisateur revient modifier la préparation après le contrôle, signaler que le rapport peut être obsolète et relancer les contrôles pertinents avant d'autoriser la génération.
- Distinguer clairement la validation des résultats du contrôle qualité de la confirmation de génération : ce sont deux étapes successives et explicites.

Toutes les fonctionnalités de cette section sont validées. La génération des fichiers nécessite toujours une action manuelle explicite après présentation des résultats du contrôle qualité. Aucun lancement automatique n'est autorisé.

## 10.31 Affichage du rapport qualité dans une fenêtre séparée — Question 52, validée

Les résultats des contrôles qualité doivent être présentés dans une fenêtre séparée de l'écran principal de préparation et de génération.

- À la fin des contrôles, ouvrir une fenêtre dédiée au rapport qualité.
- Présenter dans cette fenêtre le bilan global, les états distincts pour l'impression et la découpe, les contrôles effectués, non réalisés ou non applicables, ainsi que les erreurs bloquantes, avertissements et suggestions conformément à la section 10.25.
- Permettre à l'utilisateur de consulter les détails des problèmes, leur cause, leurs conséquences et les éléments concernés, dans les limites des informations disponibles.
- La fenêtre doit permettre de terminer la consultation puis de revenir à l'écran de préparation et de génération.
- Le retour à l'écran principal ne déclenche jamais la génération automatiquement.
- Après consultation, l'utilisateur doit toujours cliquer explicitement sur « Générer les fichiers », conformément à la section 10.30.
- Si des erreurs bloquantes existent, la génération reste empêchée. La fenêtre séparée ne permet pas de contourner les règles de contrôle qualité.
- Si la préparation est modifiée après le contrôle, signaler que le rapport peut être obsolète et demander les vérifications pertinentes avant d'autoriser la génération.
- La fenêtre de rapport ne doit pas modifier la préparation ni les fichiers sources par le simple fait de consulter les résultats.

Toutes les fonctionnalités de cette section sont validées. Le rapport qualité est consulté dans une fenêtre séparée ; l'utilisateur revient ensuite à l'écran principal et déclenche lui-même la génération si les conditions le permettent.

## 10.32 Conservation temporaire du rapport qualité — Question 53, validée

Le rapport qualité doit être conservé uniquement pendant le travail en cours.

- Le rapport reste consultable après sa fermeture et le retour à l'écran principal, tant que le travail en cours se poursuit et qu'aucun nouveau contrôle ne l'a remplacé.
- Lorsqu'un nouveau contrôle qualité est lancé et produit un nouveau rapport, celui-ci remplace le rapport précédent pour le travail en cours.
- Le rapport précédent n'est pas conservé comme entrée distincte dans l'historique.
- Le rapport temporaire doit rester associé au travail concerné et ne pas être confondu avec les rapports d'autres travaux.
- Si la préparation est modifiée et que le rapport devient obsolète, son état doit être signalé jusqu'à ce qu'un nouveau contrôle produise un rapport actualisé.
- Cette conservation temporaire ne modifie pas les règles générales de sauvegarde du travail et de son historique définies dans les autres sections ; elle concerne uniquement le rapport détaillé issu du contrôle qualité.
- La consultation ou le remplacement du rapport ne déclenche jamais la génération des fichiers.

Toutes les fonctionnalités de cette section sont validées. Un seul rapport qualité courant est conservé par travail en cours ; le prochain contrôle le remplace et les rapports précédents ne sont pas archivés.

## 10.33 Confirmation avant fermeture de la fenêtre du rapport qualité — Question 54, validée

Si l'utilisateur demande à fermer la fenêtre du rapport qualité, l'application doit demander une confirmation avant de la fermer.

- Afficher une boîte de dialogue de confirmation avant toute fermeture demandée par l'utilisateur.
- La boîte de dialogue doit demander explicitement si l'utilisateur souhaite fermer la fenêtre du rapport.
- Permettre à l'utilisateur d'annuler la fermeture et de poursuivre la consultation du rapport.
- Permettre à l'utilisateur de confirmer la fermeture et de revenir à l'écran principal.
- Après fermeture, le rapport courant reste accessible pendant le travail en cours, conformément à la section 10.32, jusqu'à son remplacement par un nouveau contrôle.
- La fermeture de la fenêtre, qu'elle soit confirmée ou annulée, ne doit ni modifier la préparation ni déclencher la génération des fichiers.
- Cette confirmation concerne la fermeture de la fenêtre de rapport ; elle ne remplace pas la confirmation distincte « Générer les fichiers » définie en section 10.30.

Toutes les fonctionnalités de cette section sont validées. La fermeture de la fenêtre du rapport nécessite une confirmation explicite ; l'utilisateur peut annuler et continuer sa consultation ou confirmer pour revenir à l'écran principal. Le rapport reste accessible et aucune génération n'est déclenchée par cette fermeture.

## 10.34 Rappel de l'accessibilité du rapport dans la confirmation de fermeture — Question 55, validée

La boîte de dialogue affichée avant la fermeture de la fenêtre du rapport qualité doit rappeler explicitement à l'utilisateur que le rapport restera accessible depuis l'écran principal du travail en cours.

- Afficher un message indiquant que la fermeture de la fenêtre ne supprime pas le rapport et que celui-ci restera consultable depuis l'écran principal pendant le travail en cours.
- Conserver les commandes « Fermer » et « Annuler ».
- « Fermer » confirme la fermeture de la fenêtre et ramène l'utilisateur à l'écran principal.
- « Annuler » ferme la boîte de dialogue et laisse la fenêtre du rapport ouverte afin que l'utilisateur puisse poursuivre sa consultation.
- Le rappel ne doit pas laisser entendre que le rapport est archivé : sa conservation reste limitée au travail en cours et il sera remplacé par le rapport du prochain contrôle, conformément à la section 10.32.
- La fermeture de la fenêtre et la confirmation associée ne déclenchent jamais la génération des fichiers. La génération nécessite toujours l'action distincte « Générer les fichiers » définie en section 10.30.

Toutes les fonctionnalités de cette section sont validées. La confirmation de fermeture rappelle que le rapport reste accessible depuis l'écran principal et propose « Fermer » ou « Annuler ».

## 10.35 Accès au rapport qualité depuis l'aperçu du projet — Question 56, validée

Après la fermeture de la fenêtre séparée du rapport qualité, l'utilisateur doit pouvoir retrouver le rapport courant par un accès discret intégré à la page d'aperçu du projet concerné.

- Ne pas ajouter de bouton permanent et proéminent dans l'écran principal de préparation.
- Placer un accès discret depuis la page d'aperçu du projet auquel appartient le travail en cours.
- Cet accès permet de consulter le rapport qualité courant associé à ce travail, dans les limites de sa conservation temporaire définie en section 10.32.
- L'accès doit être identifiable et disponible tant que le rapport courant existe, y compris lorsqu'il est signalé comme obsolète.
- Si aucun rapport n'existe ou si le rapport a été remplacé par un nouveau contrôle, l'accès doit refléter cet état et ne pas présenter un ancien rapport comme toujours disponible.
- La consultation depuis la page d'aperçu ne modifie pas le rapport, ne lance pas de nouveau contrôle et ne déclenche jamais la génération des fichiers.
- Les règles de fermeture, de confirmation et de retour à l'écran principal définies aux sections 10.33 et 10.34 restent applicables à la fenêtre du rapport.

Toutes les fonctionnalités de cette section sont validées. Le rapport qualité reste accessible de manière discrète depuis la page d'aperçu du projet concerné, sans bouton permanent dans l'écran principal.

## 10.36 Indicateur discret de l'état du rapport qualité dans l'aperçu du projet — Question 57, validée

L'accès discret au rapport qualité depuis la page d'aperçu du projet concerné doit également communiquer l'état du rapport courant, sans devenir un élément visuel proéminent.

- Afficher un indicateur discret associé à l'accès « Rapport qualité ».
- Prévoir les états suivants, selon le résultat du dernier contrôle : « Contrôle réussi », « Avertissements », « Erreurs bloquantes » et « Rapport obsolète ».
- L'état « Rapport obsolète » doit signaler que la préparation a changé depuis le contrôle et que les résultats ne reflètent plus nécessairement la situation actuelle.
- L'état affiché doit correspondre au rapport courant du travail concerné et être actualisé lorsqu'un nouveau contrôle le remplace.
- Ne pas afficher un état de réussite si des avertissements ou des erreurs bloquantes sont présents ; conserver une distinction explicite entre les résultats.
- Si aucun rapport courant n'est disponible, l'accès ne doit pas afficher un état de contrôle comme s'il avait été effectué.
- L'indicateur sert uniquement à informer et à accéder au rapport ; il ne lance ni contrôle qualité ni génération de fichiers.
- Conserver le caractère discret de l'accès depuis la page d'aperçu du projet défini en section 10.35.

Toutes les fonctionnalités de cette section sont validées. L'accès discret au rapport qualité depuis l'aperçu du projet affiche également un indicateur d'état : contrôle réussi, avertissements, erreurs bloquantes ou rapport obsolète.

## 10.37 Icônes associées aux états de l'indicateur du rapport qualité — Question 58, validée

L'indicateur discret de l'état du rapport qualité défini en section 10.36 doit associer une icône au libellé de chacun des quatre états.

- « Contrôle réussi » : afficher une icône de coche.
- « Avertissements » : afficher une icône de triangle d'avertissement.
- « Erreurs bloquantes » : afficher une icône signalant une erreur ou un blocage.
- « Rapport obsolète » : afficher une icône évoquant une actualisation nécessaire ou un état périmé.
- Conserver systématiquement le libellé textuel avec l'icône : l'information ne doit jamais dépendre uniquement de la couleur ou du pictogramme.
- Les quatre états doivent être représentés de manière cohérente, immédiatement distinguable et accessible, tout en conservant un affichage discret dans la page d'aperçu du projet.
- Les icônes ne doivent pas masquer les différences entre les états ni suggérer qu'un contrôle a été effectué lorsqu'aucun rapport courant n'existe.
- L'indicateur et ses icônes restent informatifs : ils ne lancent aucun contrôle qualité et aucune génération de fichiers.

Toutes les fonctionnalités de cette section sont validées. Chacun des quatre états du rapport qualité est présenté avec une icône dédiée et son libellé textuel.

## 10.38 Conservation du seul rapport qualité courant — Question 59, validée

Le fonctionnement de conservation temporaire du rapport qualité défini en section 10.32 est confirmé : seul le dernier rapport qualité du travail en cours est conservé.

- Ne pas créer d'historique des rapports qualité successifs.
- Lorsqu'un nouveau contrôle qualité produit un rapport, celui-ci remplace le rapport précédent.
- Les rapports remplacés ne doivent plus être consultables depuis le projet et ne doivent pas être archivés comme des rapports distincts.
- Le rapport courant reste associé au travail concerné et accessible selon les modalités des sections 10.32 à 10.37.
- Cette règle ne modifie pas la conservation des informations de contrôle et de diagnostic déjà prévues dans l'historique des travaux d'impression, lorsqu'elles y sont explicitement enregistrées ; elle exclut uniquement un historique autonome des rapports qualité successifs.

Toutes les fonctionnalités de cette section sont validées. Un seul rapport qualité courant est conservé par travail en cours ; aucun historique des rapports remplacés n'est prévu.

## 10.39 Rapport qualité courant indépendant pour chaque projet — Question 60, validée

Chaque projet possède son propre rapport qualité courant, indépendant des autres projets.

- Le rapport qualité courant est associé au projet et au travail concerné.
- La consultation du rapport depuis l'aperçu d'un projet affiche uniquement le rapport courant associé à ce projet.
- Les rapports qualité des autres projets restent distincts et ne sont ni remplacés ni modifiés lorsqu'un contrôle est lancé dans le projet actif.
- Le lancement d'un nouveau contrôle dans un projet remplace uniquement le rapport courant précédent de ce même projet, conformément à la section 10.38.
- Le changement de projet ne doit pas faire apparaître le rapport d'un autre projet comme s'il appartenait au projet affiché.
- Les indicateurs, icônes et accès au rapport qualité décrits aux sections 10.35 à 10.37 reflètent le rapport courant du projet concerné.
- Cette organisation ne crée pas d'historique des rapports remplacés et ne modifie pas les règles de conservation définies à la section 10.38.

Toutes les fonctionnalités de cette section sont validées. Chaque projet conserve son propre rapport qualité courant ; les rapports courants des différents projets sont indépendants les uns des autres.

## 10.40 Suppression du rapport qualité avec son projet — Question 61, validée

Lorsqu'un projet est supprimé, son rapport qualité courant est supprimé définitivement avec lui.

- La suppression du projet entraîne la suppression de son rapport qualité courant associé.
- Le rapport supprimé ne doit pas être conservé dans un historique autonome ni rester accessible depuis un autre projet.
- Les rapports qualité courants des autres projets ne sont pas affectés.
- Cette règle s'applique au rapport courant propre au projet, conformément aux sections 10.38 et 10.39.
- Les éventuelles informations de contrôle déjà enregistrées séparément dans l'historique des travaux d'impression restent régies par les règles propres à cet historique ; elles ne constituent pas une conservation du rapport qualité courant supprimé.

Toutes les fonctionnalités de cette section sont validées. La suppression d'un projet entraîne la suppression définitive de son rapport qualité courant, sans affecter les rapports des autres projets.

## 10.41 Conservation du rapport qualité lors du renommage du projet — Question 62, validée

Le rapport qualité courant reste associé à son projet lorsque celui-ci est renommé.

- Le renommage d'un projet ne supprime pas son rapport qualité courant.
- Le rapport conserve son association avec le même projet, indépendamment du nom affiché de celui-ci.
- Le contenu du rapport, ses résultats, son état et son éventuel statut obsolète sont préservés sans modification liée au renommage.
- L'accès au rapport depuis l'aperçu du projet continue de fonctionner sous le nouveau nom.
- Les indicateurs et icônes associés au rapport restent cohérents après le renommage.
- Cette règle ne modifie pas les règles de remplacement du rapport lors d'un nouveau contrôle, ni celles de suppression définitive du rapport avec son projet.

Toutes les fonctionnalités de cette section sont validées. Renommer un projet ne modifie ni ne supprime son rapport qualité courant, qui reste attaché au projet renommé.

## 10.42 Absence de copie du rapport qualité lors de la duplication d'un projet — Question 63, validée

Lorsqu'un projet est dupliqué, le rapport qualité courant du projet d'origine n'est pas copié dans le nouveau projet.

- Le projet dupliqué commence sans rapport qualité courant.
- Le nouveau projet ne reprend ni le contenu, ni les résultats, ni l'état du rapport qualité du projet d'origine.
- Le rapport qualité courant du projet d'origine reste associé à celui-ci et n'est ni modifié ni supprimé par la duplication.
- Le nouveau projet devra lancer ses propres contrôles qualité pour obtenir son propre rapport.
- Cette règle préserve l'indépendance des rapports qualité entre projets, conformément aux sections 10.38 à 10.41.

Toutes les fonctionnalités de cette section sont validées. La duplication d'un projet ne copie pas son rapport qualité courant ; le nouveau projet commence sans rapport et doit effectuer ses propres contrôles.

## 10.43 Exclusion du rapport qualité lors de l'export et de l'import d'un projet — Question 64, validée

Le rapport qualité courant n'est pas inclus dans l'export d'un projet. Lorsqu'un projet exporté est importé sur un autre ordinateur, il ne récupère donc aucun rapport qualité courant.

- Ne pas inclure le rapport qualité courant dans les fichiers d'export du projet.
- Le projet importé commence sans rapport qualité courant, même si le projet d'origine en possédait un.
- Le nouveau projet devra effectuer ses propres contrôles qualité pour obtenir un rapport correspondant à son environnement, à ses ressources et à sa préparation.
- Le rapport qualité courant du projet d'origine reste inchangé et continue de suivre les règles de conservation qui lui sont propres.
- Cette règle ne modifie pas l'export des autres données, ressources, paramètres et dépendances du projet défini dans les sections consacrées à l'import/export des projets.

Toutes les fonctionnalités de cette section sont validées. Le rapport qualité courant est exclu de l'export/import d'un projet ; le projet importé commence sans rapport et doit effectuer ses propres contrôles.

## 10.44 Exclusion du rapport qualité lors de la restauration d'une sauvegarde — Question 65, validée

Lorsqu'une sauvegarde contenant un projet est restaurée, le rapport qualité courant n'est pas restauré avec ce projet.

- Ne pas inclure le rapport qualité courant dans les données restaurées à partir d'une sauvegarde.
- Après restauration, le projet ne possède aucun rapport qualité courant, même si le projet sauvegardé en possédait un au moment de la sauvegarde.
- L'utilisateur devra lancer de nouveaux contrôles qualité pour obtenir un rapport correspondant à l'état restauré du projet.
- Cette règle ne remet pas en cause la restauration des autres données, ressources, paramètres et dépendances du projet prévues par le système de sauvegarde.
- Les rapports qualité courants des autres projets ne sont pas affectés par la restauration du projet concerné.

Toutes les fonctionnalités de cette section sont validées. La restauration d'une sauvegarde rétablit le projet sans son rapport qualité courant ; de nouveaux contrôles doivent être effectués.

## 10.45 Conservation des rapports qualité courants à la fermeture de l'application — Question 66, validée

La fermeture complète de MTG Card Remodeler ne supprime pas les rapports qualité courants des projets.

- Conserver les rapports qualité courants associés à chaque projet lorsque l'utilisateur ferme l'application.
- À la prochaine ouverture, chaque rapport courant doit rester accessible depuis l'aperçu de son projet, avec son état et son icône correspondants.
- La fermeture et la réouverture de l'application ne doivent ni remplacer, ni réinitialiser, ni archiver les rapports courants.
- Les rapports restent soumis aux règles déjà définies : remplacement par un nouveau contrôle, suppression avec le projet, absence de copie lors d'une duplication, exclusion de l'export/import et des sauvegardes restaurées.
- Cette conservation ne crée pas d'historique des rapports remplacés.

Toutes les fonctionnalités de cette section sont validées. Les rapports qualité courants des projets sont conservés à la fermeture de l'application et restent accessibles lors de sa prochaine ouverture, sous réserve des autres règles de gestion définies dans ce cahier des charges.

## 10.46 Détection des modifications pertinentes après réouverture du projet — Question 67, validée

Après la réouverture de l'application, les modifications apportées à un projet doivent être prises en compte pour déterminer si son rapport qualité courant est toujours valable.

- Détecter les modifications du projet susceptibles d'affecter les résultats des contrôles qualité précédemment effectués.
- Lorsqu'une modification pertinente est détectée, marquer automatiquement le rapport qualité courant du projet comme « Rapport obsolète ».
- Ne pas marquer le rapport comme obsolète pour les changements qui ne peuvent pas affecter les contrôles concernés, dans la mesure où l'application est en mesure de les distinguer.
- Préserver le contenu et les résultats du rapport devenu obsolète jusqu'à son remplacement par un nouveau contrôle ou sa suppression selon les règles définies.
- Actualiser l'indicateur et l'icône du rapport dans l'aperçu du projet afin de signaler son obsolescence.
- Le statut obsolète informe l'utilisateur que les résultats ne reflètent plus nécessairement l'état actuel du projet ; il ne constitue pas un nouveau contrôle et ne corrige aucun problème.
- Le rapport redevient un rapport courant à jour uniquement après l'exécution d'un nouveau contrôle qualité produisant un nouveau rapport.
- Cette règle s'applique également aux projets dont les rapports ont été conservés lors de la fermeture puis de la réouverture de l'application.

Toutes les fonctionnalités de cette section sont validées. Toute modification du projet susceptible d'affecter les résultats des contrôles qualité entraîne le marquage automatique du rapport courant comme obsolète ; les modifications sans incidence sur les contrôles concernés ne doivent pas le rendre obsolète.

## 10.47 Détection des modifications pertinentes des ressources utilisées — Question 68, validée

L'évaluation de la validité du rapport qualité courant doit également prendre en compte les ressources utilisées par le projet.

- Détecter les modifications ou mises à jour des ressources utilisées par le projet lorsqu'elles sont susceptibles d'affecter les résultats des contrôles qualité.
- Cette règle concerne notamment les illustrations, polices, frames, profils d'impression, profils colorimétriques, éléments graphiques et autres ressources ou dépendances effectivement utilisées par le projet.
- Lorsqu'une modification pertinente d'une ressource est détectée, marquer automatiquement le rapport qualité courant comme « Rapport obsolète ».
- Ne pas rendre le rapport obsolète pour une ressource qui n'est pas utilisée par le projet ou pour une modification qui ne peut pas affecter les contrôles concernés, dans la mesure où l'application est en mesure de l'établir.
- Préserver le contenu et les résultats du rapport devenu obsolète ; ne pas lancer automatiquement de nouveaux contrôles.
- Actualiser l'indicateur et l'icône du rapport dans l'aperçu du projet.
- Un nouveau contrôle qualité est nécessaire pour produire un rapport reflétant les ressources dans leur état actualisé.
- Cette règle complète la détection des modifications directes du projet définie à la section 10.46.

Toutes les fonctionnalités de cette section sont validées. Les modifications pertinentes des ressources et dépendances effectivement utilisées par un projet doivent être détectées et rendre son rapport qualité courant obsolète lorsque les résultats des contrôles peuvent en être affectés.

## 10.48 Obsolescence du rapport en cas de ressource utilisée supprimée ou introuvable — Question 69, validée

La disparition ou la perte d'accès à une ressource utilisée par un projet entraîne automatiquement l'obsolescence de son rapport qualité courant.

- Détecter lorsqu'une ressource référencée et utilisée par le projet est supprimée, déplacée, inaccessible ou introuvable.
- Marquer automatiquement le rapport qualité courant du projet comme « Rapport obsolète », même lorsque l'application ne peut pas déterminer précisément si cette disparition affecte un contrôle qualité particulier.
- Cette règle s'applique aux ressources locales, aux ressources partagées et aux dépendances externes utilisées par le projet.
- Ne pas appliquer cette règle aux ressources qui ne sont pas utilisées ou référencées par le projet.
- Préserver le contenu et les résultats du rapport précédent afin qu'ils restent consultables avec leur statut obsolète.
- Signaler séparément la ressource manquante ou inaccessible afin que l'utilisateur puisse identifier la cause de l'obsolescence.
- Ne pas remplacer, supprimer ou rechercher automatiquement une ressource de substitution sans action explicite de l'utilisateur.
- Après rétablissement ou remplacement explicite de la ressource, le rapport reste obsolète jusqu'à l'exécution d'un nouveau contrôle qualité.

Toutes les fonctionnalités de cette section sont validées. Toute ressource utilisée par le projet qui devient supprimée, déplacée, inaccessible ou introuvable rend automatiquement le rapport qualité courant obsolète, même si l'incidence exacte sur les contrôles ne peut pas être déterminée.

## 10.49 Consultation des causes d'obsolescence du rapport qualité — Question 70, validée

L'aperçu du projet doit permettre à l'utilisateur de consulter les causes détectées qui ont rendu le rapport qualité courant obsolète.

- Afficher les raisons identifiées de l'obsolescence du rapport qualité courant.
- Présenter les modifications pertinentes du projet détectées depuis le contrôle précédent.
- Présenter les modifications ou mises à jour des ressources utilisées qui ont été détectées.
- Signaler les ressources utilisées supprimées, déplacées, inaccessibles ou introuvables.
- Identifier les éléments concernés aussi précisément que les informations disponibles le permettent : nom de la ressource, carte, composant, profil, dépendance ou autre élément concerné.
- Distinguer les causes confirmées des situations dont l'incidence exacte sur les contrôles ne peut pas être déterminée.
- Si plusieurs causes sont détectées, les présenter ensemble sans en masquer aucune.
- Si l'application ne peut pas identifier précisément une cause ou l'élément concerné, l'indiquer explicitement plutôt que de fournir une supposition.
- L'accès à ces informations reste disponible depuis l'aperçu du projet, en complément de l'indicateur discret « Rapport obsolète ».
- La consultation des causes ne relance aucun contrôle, ne modifie pas le rapport et ne déclenche aucune génération.

Toutes les fonctionnalités de cette section sont validées. Depuis l'aperçu du projet, l'utilisateur peut consulter les causes connues de l'obsolescence de son rapport qualité, ainsi que les éléments concernés et les éventuelles limites de détection.

## 10.50 Historique des causes d'obsolescence jusqu'au prochain contrôle — Question 71, validée

L'application doit conserver l'ensemble des causes d'obsolescence détectées pour le rapport qualité courant depuis le dernier contrôle qualité.

- Enregistrer chaque nouvelle cause détectée qui rend le rapport courant obsolète, qu'elle provienne d'une modification du projet, d'une modification de ressource ou de la disparition/perte d'accès à une ressource utilisée.
- Conserver toutes ces causes successives jusqu'à l'exécution d'un nouveau contrôle qualité produisant un nouveau rapport.
- Ne pas remplacer une cause précédente par une cause plus récente ; les causes déjà détectées doivent rester consultables.
- Présenter la liste des causes depuis l'aperçu du projet, en complément du statut « Rapport obsolète ».
- Pour chaque cause, afficher les informations disponibles permettant de comprendre l'événement et d'identifier les éléments concernés, sans inventer d'informations lorsque la détection est incomplète.
- Si plusieurs événements concernent le même élément, conserver les informations de manière à rendre leur succession compréhensible, sans créer de doublons inutiles pour un même événement détecté.
- L'exécution d'un nouveau contrôle qualité remplace le rapport courant et clôt la liste des causes associées à l'ancien rapport. Les causes de l'ancien rapport ne sont pas transférées au nouveau rapport.
- La fermeture et la réouverture de l'application ne doivent pas effacer les causes déjà enregistrées avec le rapport courant.
- La consultation de cette liste ne relance aucun contrôle et ne modifie ni le rapport ni le projet.

Toutes les fonctionnalités de cette section sont validées. Toutes les causes d'obsolescence détectées depuis le dernier contrôle qualité restent consultables avec le rapport courant jusqu'à ce qu'un nouveau contrôle produise un rapport de remplacement.

## 10.51 Horodatage des causes d'obsolescence — Question 72, validée

Chaque cause d'obsolescence enregistrée pour le rapport qualité courant doit comporter sa date et son heure de détection.

- Enregistrer la date et l'heure auxquelles chaque cause d'obsolescence est détectée par l'application.
- Associer cet horodatage à l'événement concerné et aux informations de cause déjà prévues à la section 10.50.
- Permettre de consulter les causes dans leur ordre chronologique, avec leur date et heure de détection.
- Conserver ces horodatages avec les causes pendant toute la durée de conservation du rapport qualité courant.
- Préserver les causes et leurs horodatages après fermeture et réouverture de l'application.
- Lorsqu'un nouveau contrôle qualité remplace le rapport courant, clôturer la liste des causes et horodatages associée à l'ancien rapport, conformément à la section 10.50.
- Ne pas inventer d'horodatage lorsqu'une date ou une heure fiable n'est pas disponible ; signaler explicitement cette limite.
- L'enregistrement et la consultation des horodatages ne lancent aucun contrôle et ne modifient pas le projet.

Toutes les fonctionnalités de cette section sont validées. Chaque cause d'obsolescence doit être accompagnée de sa date et de son heure de détection afin de rendre la chronologie des événements consultable.

## 10.52 Regroupement des causes d'obsolescence similaires — Question 73, validée

L'application doit pouvoir regrouper les causes d'obsolescence similaires afin de faciliter leur consultation, tout en préservant le détail de chaque événement détecté.

- Regrouper dans une même entrée les événements similaires concernant une même ressource ou un même élément, lorsque leur nature permet de les considérer comme une même catégorie de cause.
- Conserver chaque événement détecté au sein du regroupement, sans supprimer ni fusionner ses informations individuelles.
- Préserver pour chaque événement sa date et son heure de détection, conformément à la section 10.51.
- Permettre de consulter la chronologie complète des événements d'un regroupement.
- Identifier clairement l'élément concerné et la nature de la cause regroupée.
- Ne pas regrouper des événements distincts lorsque cela risquerait de masquer une différence utile à la compréhension ou au diagnostic.
- Si le regroupement est incertain, conserver les événements séparément plutôt que de les associer de manière arbitraire.
- Maintenir les regroupements et leurs événements jusqu'au prochain contrôle qualité produisant un nouveau rapport, conformément à la section 10.50.
- Le regroupement ne modifie ni le rapport d'origine ni le projet et ne lance aucun contrôle qualité.

Toutes les fonctionnalités de cette section sont validées. Les causes similaires peuvent être présentées ensemble, mais chaque événement et son horodatage individuel doivent rester consultables.

## 10.53 Présentation des causes d'obsolescence sans filtres par catégorie — Question 74, validée

La consultation des causes d'obsolescence depuis l'aperçu du projet présente l'ensemble des causes dans une liste unique, sans filtres par catégorie.

- Afficher ensemble toutes les causes et tous les regroupements disponibles pour le rapport qualité courant.
- Ne pas ajouter de filtres permettant de masquer ou de sélectionner les causes par catégorie.
- Conserver le regroupement des causes similaires défini à la section 10.52.
- Préserver pour chaque événement son horodatage individuel et la possibilité de consulter sa chronologie.
- Cette présentation ne modifie pas les causes enregistrées et ne lance aucun contrôle qualité.

Toutes les fonctionnalités de cette section sont validées. Les causes d'obsolescence sont consultées dans une liste unique, sans filtrage par catégorie.

## 10.55 Consultation du rapport qualité sans export externe — Question 75, validée

Le rapport qualité courant reste consultable uniquement dans l'application. Aucune fonction d'export autonome du rapport vers un fichier externe n'est prévue.

- Ne pas proposer d'export du rapport qualité en PDF, HTML ou dans un autre format de fichier.
- La consultation du rapport s'effectue depuis l'application, selon les modalités déjà définies pour l'aperçu du projet et la fenêtre dédiée.
- Cette décision concerne uniquement l'export du rapport qualité ; elle ne modifie pas les fonctions d'export des cartes, des planches ou des autres fichiers du projet.
- Les règles de conservation du rapport courant, de remplacement lors d'un nouveau contrôle et d'association à chaque projet restent inchangées.

Toutes les fonctionnalités de cette section sont validées. Le rapport qualité n'est pas exportable en fichier externe et reste consultable dans l'application.

## 10.57 Résumé comparatif avant remplacement du rapport qualité — Question 76, validée

Lorsqu'un nouveau contrôle qualité produit un rapport qui doit remplacer le rapport courant du projet, l'application présente auparavant un résumé des différences entre les deux rapports.

- Comparer le rapport courant avec le nouveau rapport avant son remplacement.
- Présenter un résumé lisible des évolutions détectées : problèmes résolus, nouveaux problèmes, problèmes toujours présents et changements d'état, dans la limite des informations réellement comparables.
- Distinguer clairement les erreurs bloquantes, avertissements et suggestions lorsque ces éléments sont disponibles dans les deux rapports.
- Ne pas présenter comme résolu un problème qui n'apparaît plus si la comparaison ne permet pas de le confirmer ; signaler les éléments non comparables ou dont le suivi est incertain.
- Le résumé est informatif et ne modifie ni les rapports ni le projet.
- Le nouveau rapport ne remplace le rapport courant qu'après présentation du résumé et validation explicite de l'utilisateur.
- Si l'utilisateur annule ou refuse le remplacement, conserver le rapport courant sans le modifier et abandonner le nouveau rapport : il n'est pas conservé temporairement et devra être recalculé lors d'un prochain contrôle qualité.
- Une fois le remplacement confirmé, appliquer les règles existantes : le nouveau rapport devient le seul rapport qualité courant du projet et l'ancien rapport n'est pas conservé dans un historique autonome.
- Si aucun rapport courant n'existe, il n'y a pas de comparaison à présenter ; le nouveau rapport suit le processus normal de validation et de remplacement.

Toutes les fonctionnalités de cette section sont validées. Un résumé comparatif est présenté avant le remplacement du rapport qualité courant, et le remplacement nécessite une validation explicite.

## 10.59 Niveau de détail de la comparaison des rapports qualité — Question 77, validée

La comparaison entre le rapport qualité courant et le nouveau rapport se limite à un résumé global.

- Présenter les grandes évolutions détectées : problèmes résolus, nouveaux problèmes, problèmes toujours présents et changements d'état, dans la limite des informations réellement comparables.
- Ne pas proposer d'ouverture d'un détail des différences carte par carte, composant par composant ou élément par élément.
- Le résumé global doit rester suffisamment clair pour permettre à l'utilisateur de décider s'il souhaite confirmer le remplacement.
- Les limites de comparaison et les éléments non comparables doivent être signalés sans supposition.
- La validation explicite du remplacement et la possibilité d'annuler restent définies à la section 10.57.

Toutes les fonctionnalités de cette section sont validées. La comparaison reste synthétique et globale, sans vue détaillée des différences.

## 10.61 Conservation du résumé comparatif — Question 78, validée

Le résumé comparatif présenté avant le remplacement du rapport qualité courant est temporaire.

- Le résumé est affiché avant la confirmation du remplacement, conformément à la section 10.57.
- Lorsque l'utilisateur confirme le remplacement et que le nouveau rapport devient le rapport courant, le résumé comparatif disparaît.
- Le résumé n'est pas conservé dans le projet, dans le rapport courant ni dans un historique séparé.
- Si l'utilisateur annule le remplacement, le rapport courant reste inchangé ; le résumé n'est pas conservé comme document ou historique consultable.
- Cette règle ne modifie pas la conservation du rapport qualité courant, ni l'absence d'historique des rapports remplacés.
- Le résumé comparatif ne constitue pas un rapport qualité supplémentaire.

Toutes les fonctionnalités de cette section sont validées. Le résumé comparatif disparaît après le remplacement confirmé et n'est pas consultable ultérieurement.

## 10.63 Présentation du résumé comparatif — Question 79, validée

Le résumé comparatif est présenté directement dans une boîte de dialogue de confirmation du remplacement du rapport qualité courant.

- Intégrer le résumé global des différences dans la boîte de dialogue qui demande à l'utilisateur de confirmer ou d'annuler le remplacement.
- Ne pas ouvrir de fenêtre dédiée ni d'écran séparé pour cette comparaison.
- La boîte de dialogue présente les évolutions globales utiles à la décision, selon les règles de comparaison de la section 10.57 et le niveau de détail limité défini à la section 10.59.
- Proposer clairement deux actions distinctes : confirmer le remplacement ou l'annuler.
- En cas d'annulation, conserver le rapport qualité courant sans modification.
- En cas de confirmation, remplacer le rapport courant et faire disparaître le résumé comparatif, conformément à la section 10.61.
- Si aucun rapport courant n'existe, aucune comparaison n'est affichée ; le processus normal de validation du nouveau rapport s'applique.

Toutes les fonctionnalités de cette section sont validées. Le résumé comparatif est intégré à la boîte de dialogue de confirmation, sans fenêtre dédiée.

## 10.65 Enregistrement du premier rapport qualité — Question 80, validée

Lorsqu'aucun rapport qualité courant n'existe encore pour le projet, le premier rapport est enregistré directement après l'exécution des contrôles, sans boîte de dialogue de confirmation supplémentaire.

- Ne pas afficher de résumé comparatif lorsqu'il n'existe aucun rapport précédent.
- Ne pas afficher de boîte de dialogue dédiée pour confirmer l'enregistrement du premier rapport.
- Après les contrôles, appliquer le processus normal de génération et d'enregistrement du rapport qualité courant.
- Les règles de présentation des résultats, de blocage en cas d'erreurs, de validation manuelle de la génération des fichiers et de conservation du rapport restent inchangées.
- Cette validation directe concerne uniquement l'enregistrement du premier rapport qualité ; elle ne déclenche jamais automatiquement la génération des fichiers d'impression ou de découpe.
- Les règles de comparaison et de confirmation explicite restent applicables lorsqu'un rapport qualité courant existe déjà et doit être remplacé.

Toutes les fonctionnalités de cette section sont validées. Le premier rapport qualité est enregistré directement après les contrôles, sans confirmation supplémentaire.

## 10.67 Annulation du remplacement du rapport qualité — Question 81, validée

Lorsque l'utilisateur annule le remplacement d'un rapport qualité courant après avoir consulté le résumé comparatif :

- Conserver le rapport qualité courant sans aucune modification, conformément à la section 10.57.
- Abandonner le nouveau rapport produit par le contrôle qui devait le remplacer.
- Ne pas conserver ce nouveau rapport temporairement, en cache consultable ou dans un espace de brouillon.
- Ne pas créer d'historique des rapports abandonnés.
- Pour disposer d'un nouveau rapport ultérieurement, l'utilisateur devra relancer le contrôle qualité ; le rapport devra alors être recalculé.
- L'annulation du remplacement ne déclenche aucune génération de fichier et ne modifie pas le projet.

Toutes les fonctionnalités de cette section sont validées. En cas d'annulation, seul le rapport qualité courant est conservé ; le nouveau rapport est abandonné et devra être recalculé lors d'un prochain contrôle.

## 10.68 Retour après annulation du remplacement — Question 82, validée

Lorsque l'utilisateur annule le remplacement du rapport qualité après consultation du résumé comparatif :

- Revenir simplement à l'écran précédent.
- Ne pas afficher de notification, message de confirmation supplémentaire, bannière ou alerte indiquant l'abandon du nouveau rapport.
- Le rapport qualité courant reste conservé sans modification, conformément à la section 10.67.
- Le nouveau rapport est abandonné et devra être recalculé lors d'un prochain contrôle qualité, conformément à la section 10.67.
- L'absence de notification ne doit pas laisser entendre que le remplacement a été effectué.
- Cette action ne déclenche aucune génération de fichier et ne modifie pas le projet.

Toutes les fonctionnalités de cette section sont validées. Après annulation, l'application revient à l'écran précédent sans notification ; le rapport courant demeure inchangé et le nouveau rapport est abandonné.

## 10.70 Réinitialisation de l'état du rapport après annulation — Question 83, validée

Lorsque l'utilisateur annule le remplacement d'un rapport qualité courant qui était déjà marqué comme obsolète :

- Réinitialiser l'état d'obsolescence de l'ancien rapport à la suite de l'annulation.
- Ne plus afficher pour ce rapport l'état « Rapport obsolète » ni l'indicateur associé.
- Effacer les causes d'obsolescence enregistrées pour ce rapport, y compris leurs regroupements et horodatages.
- Conserver le contenu et les résultats du rapport qualité courant ; l'annulation ne le remplace pas par le nouveau rapport abandonné.
- Le nouveau rapport reste abandonné et devra être recalculé lors d'un prochain contrôle qualité, conformément à la section 10.67.
- Ne pas afficher de notification après cette opération, conformément à la section 10.68.
- Cette réinitialisation ne déclenche aucun contrôle qualité ni aucune génération de fichier et ne modifie pas le contenu du projet.

Toutes les fonctionnalités de cette section sont validées. Après annulation du remplacement, l'ancien rapport est conservé mais son état d'obsolescence et les causes associées sont réinitialisés.

## 10.71 Absence d'indication sur l'ancienneté du rapport après réinitialisation — Question 84, validée

Après l'annulation du remplacement et la réinitialisation de l'état d'obsolescence définie à la section 10.70 :

- Ne pas afficher d'indication particulière précisant que le rapport qualité conservé provient d'un contrôle antérieur.
- Ne pas ajouter de badge, libellé, avertissement, date mise en avant ou autre marqueur spécifique signalant cette ancienneté.
- Le rapport reste consultable selon les modalités habituelles, avec son contenu et ses résultats conservés.
- Cette absence d'indication ne modifie pas les règles de réinitialisation de l'état d'obsolescence et d'effacement des causes associées définies à la section 10.70.

Toutes les fonctionnalités de cette section sont validées. Aucun indicateur particulier ne signale que le rapport conservé est issu d'un contrôle antérieur après la réinitialisation de son obsolescence.

## 10.73 Absence de confirmation supplémentaire après remplacement — Question 85, validée

Lorsque l'utilisateur confirme le remplacement du rapport qualité courant après consultation du résumé comparatif :

- Effectuer le remplacement conformément à la validation explicite de l'utilisateur.
- Ne pas afficher de notification, message de succès, bannière, alerte ou dialogue supplémentaire pour confirmer que le remplacement a été effectué.
- Revenir directement à l'écran précédent après le remplacement.
- Le nouveau rapport devient le seul rapport qualité courant du projet ; l'ancien rapport n'est pas conservé dans un historique, conformément aux règles existantes.
- Cette absence de confirmation supplémentaire ne doit pas remettre en cause la validation explicite requise avant le remplacement.
- Le remplacement ne déclenche aucune génération de fichier : celle-ci reste soumise à son propre processus de confirmation.

Toutes les fonctionnalités de cette section sont validées. Après confirmation du remplacement, l'application effectue l'opération puis revient directement à l'écran précédent, sans confirmation supplémentaire.

## 10.75 Gestion d'un échec technique du remplacement du rapport qualité — Question 86, validée

Si une erreur technique empêche le remplacement du rapport qualité après que l'utilisateur a confirmé cette opération :

- Afficher un message d'erreur explicite informant l'utilisateur que le remplacement du rapport n'a pas pu être effectué.
- Le message doit être compréhensible et, lorsque les informations sont disponibles, préciser la cause de l'échec ou la marche à suivre, sans inventer de diagnostic.
- Conserver l'ancien rapport qualité courant sans aucune modification.
- Ne pas supprimer, altérer ni remplacer partiellement l'ancien rapport.
- Ne pas présenter le nouveau rapport comme étant devenu le rapport courant.
- Ne pas déclencher de génération de fichier du fait de cet échec.
- L'erreur technique ne doit pas être confondue avec une annulation volontaire de l'utilisateur : la règle d'absence de notification après annulation ne s'applique pas à cet échec.
- Une fois le message d'erreur présenté, l'utilisateur doit pouvoir revenir à l'écran précédent sans perte de l'ancien rapport.

Toutes les fonctionnalités de cette section sont validées. En cas d'échec technique du remplacement, l'application signale explicitement l'erreur et préserve intégralement l'ancien rapport qualité courant.

## 10.77 Nouvelle tentative après un échec de remplacement — Question 87, validée

Lorsqu'une erreur technique empêche le remplacement du rapport qualité, le message d'erreur doit proposer un bouton « Réessayer ».

- Le bouton « Réessayer » permet de relancer immédiatement l'opération de remplacement du rapport qualité.
- Lorsque le nouveau rapport calculé précédemment est encore disponible, réutiliser ce même résultat pour la nouvelle tentative ; ne pas relancer inutilement les contrôles qualité.
- Tant que le remplacement n'a pas réussi, conserver l'ancien rapport qualité courant sans aucune modification, conformément à la section 10.75.
- Ne considérer le nouveau rapport comme rapport courant qu'après confirmation effective de la réussite du remplacement.
- Si une nouvelle tentative échoue, conserver l'ancien rapport et afficher de nouveau un message d'erreur explicite avec la possibilité de réessayer.
- Le nouveau rapport temporaire utilisé pour la tentative ne constitue pas un rapport courant ni un historique ; il peut être conservé le temps nécessaire aux nouvelles tentatives dans le cadre de cette opération.
- Si le résultat temporaire n'est plus disponible, ne pas prétendre pouvoir relancer directement le remplacement avec ce résultat ; informer l'utilisateur et lui permettre de reprendre le processus de contrôle qualité.
- L'utilisateur doit également pouvoir quitter le message d'erreur et revenir à l'écran précédent, sans perte ni altération de l'ancien rapport.
- Une nouvelle tentative ne déclenche aucune génération de fichier.

Toutes les fonctionnalités de cette section sont validées. Après un échec technique du remplacement, l'utilisateur peut relancer immédiatement l'opération avec le bouton « Réessayer », tout en conservant l'ancien rapport jusqu'à la réussite effective du remplacement.

## 10.79 Conservation persistante du rapport temporaire après abandon des tentatives — Question 88, validée

Lorsque l'utilisateur quitte le message d'erreur après un ou plusieurs échecs techniques de remplacement du rapport qualité, le nouveau rapport temporaire doit être conservé afin de permettre une reprise ultérieure, y compris après la fermeture complète puis la réouverture de l'application.

- Enregistrer durablement le résultat temporaire et les informations nécessaires à la reprise de la tentative de remplacement.
- À la réouverture de l'application, permettre à l'utilisateur de retrouver et de reprendre cette opération pour le projet concerné, sans devoir relancer inutilement les contrôles qualité lorsque le résultat temporaire est toujours exploitable.
- Le rapport temporaire reste strictement distinct de l'ancien rapport qualité courant : il ne le remplace pas automatiquement et ne devient courant qu'après réussite effective du remplacement.
- Le rapport temporaire ne constitue ni un rapport qualité courant ni un historique des rapports remplacés.
- Tant que le remplacement n'a pas réussi, l'ancien rapport courant reste intact et consultable.
- Si le résultat temporaire est devenu indisponible ou inutilisable, informer l'utilisateur et lui permettre de reprendre le processus de contrôle qualité, sans prétendre pouvoir réutiliser ce résultat.
- La suppression du projet entraîne également la suppression du rapport temporaire qui lui est associé.
- La conservation persistante du rapport temporaire ne modifie pas les règles d'annulation volontaire du remplacement : elle concerne uniquement le résultat temporaire conservé après un ou plusieurs échecs techniques et l'abandon de la séquence de tentatives.

Toutes les fonctionnalités de cette section sont validées. Après un ou plusieurs échecs techniques, le rapport temporaire peut être retrouvé après fermeture et réouverture de l'application afin de reprendre le remplacement, tout en préservant l'ancien rapport courant jusqu'à la réussite effective de l'opération.

## 10.81 Signalement et reprise d'un rapport temporaire en attente — Question 89, validée

Lorsqu'un projet possède un rapport temporaire conservé après un ou plusieurs échecs techniques de remplacement, l'application doit signaler cette opération en attente par deux moyens complémentaires :

- Afficher un indicateur discret dans la page d'aperçu du projet concerné. Cet indicateur permet à l'utilisateur d'accéder à l'opération en attente et de reprendre le remplacement.
- À chaque ouverture du projet concerné, proposer automatiquement à l'utilisateur de reprendre l'opération de remplacement en attente.
- La proposition automatique ne doit pas déclencher elle-même le remplacement : l'utilisateur conserve la maîtrise de la reprise et doit choisir explicitement de poursuivre.
- La reprise doit réutiliser le rapport temporaire persistant lorsqu'il est encore disponible et exploitable, sans relancer inutilement les contrôles qualité.
- Tant que le remplacement n'a pas réussi, l'ancien rapport qualité courant reste intact et consultable.
- Après réussite du remplacement, supprimer l'indicateur et ne plus proposer la reprise ; le nouveau rapport devient alors le rapport qualité courant selon les règles existantes.
- Si le rapport temporaire est devenu indisponible ou inutilisable, informer l'utilisateur et lui permettre de reprendre le processus de contrôle qualité selon les règles définies à la section 10.79.

Toutes les fonctionnalités de cette section sont validées. Un rapport temporaire en attente est signalé à la fois par un indicateur discret dans l'aperçu du projet et par une proposition automatique de reprise à l'ouverture de ce projet. La reprise reste soumise à une action explicite de l'utilisateur.

## 10.83 Présentation de la reprise du rapport temporaire — Question 90, validée

Lorsqu'un projet possède un rapport temporaire en attente de reprise après un ou plusieurs échecs techniques de remplacement, la proposition de reprise doit être présentée sous la forme d'un panneau discret intégré à la page d'aperçu du projet.

- Ne pas ouvrir de fenêtre modale ni de boîte de dialogue automatique à l'ouverture du projet.
- Le panneau doit signaler clairement qu'une opération de remplacement du rapport qualité est en attente et permettre à l'utilisateur d'accéder à sa reprise.
- Le panneau doit rester cohérent avec l'indicateur discret défini à la section 10.81 ; il constitue la présentation intégrée de l'information et de l'accès à la reprise.
- La reprise du remplacement ne doit jamais être déclenchée automatiquement : l'utilisateur doit effectuer une action explicite depuis le panneau.
- Utiliser le rapport temporaire persistant lorsqu'il est toujours disponible et exploitable, sans relancer inutilement les contrôles qualité.
- Tant que le remplacement n'a pas réussi, l'ancien rapport qualité courant reste intact et consultable.
- Après réussite du remplacement, retirer le panneau et l'indicateur associé, puisque l'opération n'est plus en attente.
- Si le rapport temporaire est devenu indisponible ou inutilisable, l'indiquer dans le panneau et permettre à l'utilisateur de reprendre le processus de contrôle qualité selon les règles de la section 10.79.

Toutes les fonctionnalités de cette section sont validées. La reprise d'un rapport temporaire en attente est présentée dans un panneau discret intégré à la page d'aperçu du projet, sans fenêtre modale ; aucune opération n'est lancée sans action explicite de l'utilisateur.

## 10.85 Date et heure du dernier échec technique — Question 91, validée

Le panneau discret de reprise intégré à la page d'aperçu du projet doit afficher la date et l'heure du dernier échec technique ayant empêché le remplacement du rapport qualité.

- Afficher la date et l'heure correspondant à la tentative de remplacement la plus récente ayant échoué techniquement.
- Mettre à jour cette information à chaque nouvel échec technique de remplacement.
- Conserver cette information avec le rapport temporaire persistant afin qu'elle reste disponible après fermeture et réouverture de l'application.
- Ne pas confondre cette date avec celle de création du rapport temporaire, du dernier contrôle qualité ou d'une précédente tentative.
- Cette information complète le signalement de l'opération en attente ; elle ne déclenche pas automatiquement la reprise et ne modifie pas le comportement de l'ancien rapport qualité courant.

Toutes les fonctionnalités de cette section sont validées. Le panneau de reprise affiche la date et l'heure du dernier échec technique de remplacement.

## 10.87 Historique des échecs techniques de remplacement — Question 92, validée

Le panneau discret de reprise du rapport temporaire doit permettre de consulter l'historique des échecs techniques successifs survenus lors des tentatives de remplacement du rapport qualité.

- Conserver chaque échec technique de remplacement, et pas uniquement le plus récent.
- Associer à chaque événement sa date et son heure propres, correspondant au moment où l'échec s'est produit.
- Présenter les événements dans un ordre chronologique clairement identifiable, du plus récent au plus ancien.
- Rendre cet historique consultable depuis le panneau de reprise intégré à la page d'aperçu du projet.
- Conserver l'historique avec le rapport temporaire persistant, y compris après fermeture et réouverture de l'application.
- Ajouter une nouvelle entrée à chaque nouvel échec technique ; ne pas écraser les événements précédents.
- Ne pas enregistrer les annulations volontaires comme des échecs techniques.
- La consultation de l'historique ne déclenche aucune reprise et ne modifie ni le rapport temporaire ni l'ancien rapport qualité courant.
- Supprimer cet historique avec le projet auquel le rapport temporaire est associé.

Toutes les fonctionnalités de cette section sont validées. L'utilisateur peut consulter depuis le panneau de reprise l'historique complet des échecs techniques de remplacement, avec la date et l'heure de chaque événement.

## 10.88 Limite de conservation de l'historique des échecs — Question 93, validée

L'historique des échecs techniques de remplacement du rapport qualité est limité aux 20 événements les plus récents pour chaque projet.

- Conserver au maximum les 20 derniers échecs techniques de remplacement, avec leur date et leur heure propres.
- Présenter les événements conservés du plus récent au plus ancien.
- Lorsqu'un nouvel échec est ajouté et que la limite de 20 événements est dépassée, supprimer automatiquement l'entrée la plus ancienne afin de respecter cette limite.
- Ne jamais supprimer une entrée plus récente au profit d'une entrée plus ancienne.
- La limite s'applique séparément à chaque projet et à son rapport temporaire associé.
- Les annulations volontaires ne sont pas comptabilisées dans cet historique.
- L'historique reste consultable depuis le panneau de reprise et est conservé après fermeture et réouverture de l'application, dans la limite définie.
- La suppression du projet entraîne la suppression de son historique.

Toutes les fonctionnalités de cette section sont validées. Chaque projet conserve un historique consultable comprenant au maximum les 20 échecs techniques de remplacement les plus récents.

## 10.89 Présentation de l'historique dans le panneau de reprise — Question 94, validée

Le panneau discret de reprise intégré à la page d'aperçu du projet présente une vue synthétique de l'historique des échecs techniques de remplacement.

- Afficher directement dans le panneau les trois échecs techniques les plus récents, avec la date et l'heure propres à chaque événement.
- Présenter ces trois événements du plus récent au plus ancien.
- Ajouter un bouton intitulé « Voir l'historique complet » permettant d'accéder à la consultation de l'ensemble des événements conservés.
- L'historique complet accessible par ce bouton respecte la limite de conservation de 20 événements définie à la section 10.88.
- Si l'historique comporte trois événements ou moins, afficher tous les événements disponibles ; ne pas ajouter de lignes fictives.
- Si aucun échec technique n'est enregistré, ne pas afficher de liste d'événements ni de bouton d'accès à un historique vide.
- La consultation de l'historique complet ne déclenche aucune tentative de reprise et ne modifie pas les rapports ni les événements enregistrés.
- Les trois événements présentés dans le panneau et l'historique complet doivent refléter les mêmes données conservées pour le projet.

Toutes les fonctionnalités de cette section sont validées. Le panneau affiche les trois derniers échecs techniques et propose un bouton « Voir l'historique complet » pour consulter jusqu'à 20 événements.

## 10.90 Ouverture de l'historique complet — Question 95, validée

Lorsque l'utilisateur sélectionne le bouton « Voir l'historique complet » depuis le panneau de reprise, l'historique des échecs techniques de remplacement doit s'ouvrir dans une fenêtre séparée.

- Ouvrir une fenêtre dédiée à la consultation de l'historique complet, distincte de la page d'aperçu du projet et du panneau de reprise.
- Afficher dans cette fenêtre tous les événements conservés pour le projet, dans la limite maximale de 20 échecs définie à la section 10.88.
- Présenter les événements du plus récent au plus ancien, avec la date et l'heure de chaque échec.
- Ne pas transformer cette consultation en action de reprise : aucune tentative de remplacement ne doit être lancée par l'ouverture ou la fermeture de cette fenêtre.
- La fenêtre est consacrée à la consultation ; elle ne permet pas de modifier ou supprimer individuellement les événements de l'historique.
- La fermeture de cette fenêtre ramène l'utilisateur à l'écran précédent, sans modifier le panneau de reprise, le rapport temporaire, le rapport courant ou l'historique conservé.

Toutes les fonctionnalités de cette section sont validées. Le bouton « Voir l'historique complet » ouvre une fenêtre séparée, dédiée à la consultation des événements conservés.

## 10.91 Détail technique des échecs dans l'historique — Question 96, validée

La fenêtre séparée de consultation de l'historique complet doit afficher, pour chaque échec technique de remplacement, le motif ou le détail technique disponible en complément de sa date et de son heure.

- Associer à chaque événement son motif ou son détail technique lorsqu'il a été fourni ou enregistré par le système au moment de l'échec.
- Afficher ce détail à côté des informations temporelles de l'événement, de manière à permettre à l'utilisateur de distinguer et comprendre les différents échecs.
- Présenter le message ou motif technique réellement disponible, sans inventer de cause ni déduire une explication non confirmée.
- Si aucun détail technique n'a pu être récupéré ou enregistré pour un événement, l'indiquer clairement comme indisponible ; conserver néanmoins l'événement et sa date et son heure.
- Conserver le détail technique avec l'événement correspondant, selon les mêmes règles de persistance et de conservation que l'historique : au maximum 20 événements par projet.
- L'affichage du détail technique est consultatif et ne permet pas de modifier les événements, de relancer une tentative ou de changer l'état des rapports.
- Cette information complète l'historique dans la fenêtre séparée ; le panneau de reprise continue d'afficher uniquement les trois événements les plus récents avec leurs dates et heures, selon la décision 94.

Toutes les fonctionnalités de cette section sont validées. La fenêtre d'historique affiche le détail technique réellement disponible pour chaque échec, ou signale explicitement lorsque ce détail est indisponible.

## 10.92 Copie des détails techniques depuis l'historique — Question 97, validée

La fenêtre séparée de consultation de l'historique complet doit permettre de copier individuellement le détail technique associé à chaque échec.

- Ajouter, pour chaque événement disposant d'un motif ou d'un détail technique, une commande de copie dédiée à cet événement.
- La commande copie dans le presse-papiers le texte technique réellement associé à l'échec sélectionné, sans le modifier ni y ajouter d'explication supposée.
- La commande est indépendante pour chaque événement : l'utilisateur peut copier le détail d'un échec sans copier les autres entrées de l'historique.
- Si le détail technique d'un événement est indisponible, ne pas proposer de commande de copie pour un contenu inexistant ; conserver l'indication que le détail est indisponible.
- La copie ne modifie ni l'historique enregistré, ni le rapport temporaire, ni le rapport qualité courant.
- Cette action ne déclenche aucune tentative de reprise ou de remplacement.
- La copie concerne les détails techniques individuels ; elle n'implique pas l'ajout d'une fonction d'export global de l'historique.

Toutes les fonctionnalités de cette section sont validées. Chaque détail technique disponible peut être copié individuellement depuis la fenêtre d'historique.

## 10.93 Confirmation visuelle après copie — Question 98, validée

Après la copie réussie d'un détail technique depuis la fenêtre d'historique, l'application doit afficher une confirmation visuelle discrète et temporaire à proximité du bouton de copie utilisé.

- Afficher brièvement le libellé « Copié » près du bouton correspondant, uniquement lorsque la copie a réussi.
- La confirmation doit être discrète et ne pas interrompre la consultation de l'historique.
- La confirmation concerne uniquement l'événement dont le détail technique vient d'être copié.
- En cas d'échec de la copie, ne pas afficher « Copié » ; laisser le mécanisme standard de gestion des erreurs informer l'utilisateur.
- La confirmation disparaît automatiquement après un court délai et ne modifie aucune donnée de l'historique, du rapport temporaire ou du rapport qualité courant.
- Cette confirmation ne déclenche aucune autre action.

Toutes les fonctionnalités de cette section sont validées. Une confirmation visuelle temporaire « Copié » apparaît près du bouton après chaque copie réussie.

## 10.94 Ordre chronologique de l'historique — Question 99, validée

La fenêtre séparée présentant l'historique complet des échecs techniques doit conserver un ordre chronologique fixe, du plus récent au plus ancien.

- Afficher systématiquement l'échec le plus récent en premier et le plus ancien en dernier.
- Ne pas ajouter de commande de tri ni de choix permettant d'inverser cet ordre.
- Cet ordre s'applique à l'ensemble des événements conservés dans la limite des 20 échecs par projet.
- Le panneau de reprise conserve également l'affichage des trois échecs les plus récents, conformément à la décision 94.
- Cette règle ne modifie ni les dates et heures, ni les détails techniques, ni les commandes de copie des événements.

Toutes les fonctionnalités de cette section sont validées. L'historique complet est consulté dans un ordre fixe, du plus récent au plus ancien, sans option de tri.

## 10.95 Numérotation des échecs dans l'historique — Question 100, validée

Aucun numéro d'ordre ne doit être affiché pour les événements de l'historique complet des échecs techniques.

- Chaque événement présente uniquement ses informations : date, heure et détail technique lorsqu'il est disponible.
- Ne pas ajouter de numéro séquentiel (1, 2, 3, etc.) aux événements.
- Cette présentation s'applique à la fenêtre d'historique complet ; elle ne modifie pas l'ordre chronologique fixe du plus récent au plus ancien.
- Les autres informations et commandes de la fenêtre, notamment la copie individuelle des détails techniques, restent inchangées.

Toutes les fonctionnalités de cette section sont validées. L'historique complet affiche les informations de chaque échec sans numéro d'ordre.

## 10.96 Présentation des événements dans l'historique complet — Question 101, validée

La fenêtre séparée de l'historique complet doit présenter les échecs techniques sous la forme d'une liste compacte.

- Chaque échec est présenté directement sur une ligne de la liste, avec ses informations disponibles : date, heure et détail technique lorsqu'il existe.
- Ne pas utiliser une carte ou un bloc distinct développé pour chaque événement.
- Conserver l'ordre chronologique fixe, du plus récent au plus ancien.
- Ne pas ajouter de numérotation aux événements.
- Conserver la possibilité de copier individuellement chaque détail technique disponible, avec la confirmation temporaire « Copié » après une copie réussie.
- Cette présentation ne modifie pas la limite de 20 événements conservés ni l'affichage des trois événements les plus récents dans le panneau de reprise.

Toutes les fonctionnalités de cette section sont validées. L'historique complet utilise une liste compacte, avec les informations de chaque échec directement présentées sur sa ligne.

## 10.97 Affichage des détails techniques longs — Question 102, validée

Dans la liste compacte de l'historique complet, les détails techniques longs doivent être présentés sous forme d'un aperçu court.

- Chaque entrée affiche un aperçu concis du détail technique lorsqu'il est disponible.
- L'utilisateur peut développer individuellement une entrée pour consulter l'intégralité de son détail technique.
- Le développement concerne uniquement l'entrée sélectionnée et ne transforme pas toute la liste en cartes distinctes.
- Le détail complet reste accessible et copiable individuellement, sans modification de son contenu.
- Les détails indisponibles continuent d'être signalés par la mention « Détail indisponible » ; aucun contenu ne doit être inventé.
- Les règles de tri, de conservation, de numérotation et de présentation compacte définies précédemment restent inchangées.

Toutes les fonctionnalités de cette section sont validées. Les détails techniques longs sont résumés dans la liste et peuvent être développés individuellement pour consulter leur contenu intégral.

## 10.98 Présentation du détail technique développé — Question 103, validée

Lorsqu'un utilisateur développe une entrée de l'historique pour consulter son détail technique complet, celui-ci s'affiche sous l'aperçu court.

- L'aperçu court reste visible pendant l'affichage du détail complet.
- Le détail complet apparaît directement sous cet aperçu, dans la même entrée de la liste.
- Cette présentation conserve le contexte et permet de distinguer immédiatement le résumé du contenu intégral.
- Les règles précédentes de liste compacte, de développement individuel et de copie individuelle restent inchangées.

## 10.99 Développement simultané des détails techniques — Question 104, validée

L'historique complet permet de développer plusieurs détails techniques simultanément.

- Le développement d'une entrée ne referme pas les détails déjà ouverts dans d'autres entrées.
- Chaque entrée dispose de son propre état de développement, indépendant des autres.
- Les aperçus courts restent visibles, y compris lorsque plusieurs détails complets sont affichés.
- Le détail complet reste affiché sous l'aperçu de l'entrée concernée.
- Les règles de présentation compacte et de copie individuelle restent inchangées.

## 10.100 Réinitialisation de l'affichage à la réouverture de l'historique — Question 105, validée

Lorsque l'utilisateur ferme la fenêtre de l'historique complet des échecs puis l'ouvre à nouveau, tous les détails techniques développés sont automatiquement refermés.

- À chaque nouvelle ouverture de la fenêtre, toutes les entrées sont présentées avec leur aperçu court uniquement.
- Aucun état de développement n'est conservé après la fermeture de la fenêtre.
- Pendant une même consultation, plusieurs détails peuvent toujours être développés simultanément.
- Le détail complet reste affiché sous l'aperçu tant que l'entrée est développée.
- Les autres règles de présentation et de copie individuelle restent inchangées.

## 10.101 Position de défilement à la réouverture de l'historique — Question 106, validée

À chaque réouverture de la fenêtre de l'historique complet des échecs, la liste revient systématiquement à son début.

- La position de défilement précédente n'est pas mémorisée.
- Les événements les plus récents, placés en tête selon l'ordre chronologique défini précédemment, sont donc immédiatement visibles.
- Cette règle s'applique à chaque nouvelle ouverture de la fenêtre.
- La réinitialisation des détails développés définie à la question 105 reste également applicable.

## 10.102 Recherche dans l'historique complet des échecs — Question 107, validée

L'historique complet des échecs techniques ne propose aucun champ de recherche. La consultation s'effectue uniquement au moyen de la liste chronologique existante.

- Aucun champ de recherche n'est affiché dans la fenêtre d'historique.
- Les événements restent présentés du plus récent au plus ancien.
- Les aperçus courts, le développement individuel des détails, la copie individuelle et les autres règles de consultation précédemment validées restent inchangés.

## 10.103 Compteur du nombre d'échecs conservés — Question 108, validée

La fenêtre de l'historique complet n'affiche aucun compteur indiquant le nombre total d'échecs techniques conservés.

- Aucun libellé du type « 12 échecs enregistrés sur 20 maximum » n'est présenté.
- La limite de conservation de 20 événements reste applicable en arrière-plan.
- L'absence de compteur ne modifie ni le contenu de l'historique, ni son ordre chronologique, ni les modalités de consultation des détails.

## 10.104 Présentation d'un historique sans événement — Question 109, validée

Lorsque l'historique complet ne contient aucun échec technique enregistré, la fenêtre présente simplement une liste vide.

- Aucun message spécifique, tel que « Aucun échec enregistré », n'est affiché.
- Aucun compteur ni élément fictif n'est ajouté pour remplir la liste.
- Les règles de présentation et de consultation des événements restent applicables dès qu'au moins un échec est enregistré.

## 10.105 Taille de la fenêtre d'historique — Question 110, validée

La fenêtre séparée consacrée à l'historique des échecs techniques utilise une taille fixe définie par l'application.

- L'utilisateur ne peut pas redimensionner manuellement la fenêtre.
- La disposition et la taille de la fenêtre sont définies par l'application afin de conserver une présentation cohérente.
- Les règles de consultation, de défilement et de présentation de la liste restent inchangées.

## 10.106 Position de la fenêtre d'historique — Question 111, validée

La fenêtre séparée consacrée à l'historique des échecs techniques peut être déplacée librement à l'écran par l'utilisateur.

- La fenêtre conserve la taille fixe définie par l'application ; son déplacement ne permet pas de la redimensionner.
- L'utilisateur peut modifier sa position à l'écran selon ses besoins.
- Les règles de consultation, de défilement et de présentation de la liste restent inchangées.

## 10.107 Mémorisation de la position de la fenêtre d'historique — Question 112, validée

L'application mémorise la dernière position à laquelle l'utilisateur a placé la fenêtre séparée consacrée à l'historique des échecs techniques.

- Lors d'une ouverture ultérieure, la fenêtre est replacée à son dernier emplacement mémorisé.
- Cette mémorisation concerne uniquement la position de la fenêtre ; sa taille reste fixe et définie par l'application.
- La fenêtre demeure librement déplaçable pendant son utilisation.

## 10.108 Récupération d'une position de fenêtre devenue invisible — Question 113, validée

À l'ouverture de la fenêtre d'historique, l'application vérifie que sa dernière position mémorisée permet de l'afficher sur un écran actuellement disponible.

- Si la position mémorisée est entièrement hors de la zone visible des écrans disponibles, l'application replace automatiquement la fenêtre sur un écran disponible, à une position entièrement visible.
- Si la position mémorisée reste visible, elle est conservée.
- La taille fixe de la fenêtre est préservée ; ce repositionnement ne constitue pas un redimensionnement.
- La nouvelle position visible peut ensuite être déplacée librement et mémorisée conformément à la question 112.

## 10.109 Position commune à tous les projets — Question 114, validée

La position mémorisée de la fenêtre d'historique est commune à l'ensemble des projets.

- L'application ne conserve pas de position distincte pour chaque projet.
- La dernière position utilisée est réutilisée lors de l'ouverture de la fenêtre depuis n'importe quel projet.
- Les règles de mémorisation, de déplacement libre et de repositionnement automatique si la position devient invisible restent applicables.

## 10.110 Comportement d'affichage au premier plan — Question 115, validée

La fenêtre d'historique se comporte comme une fenêtre classique de l'application.

- Elle ne reste pas automatiquement au premier plan.
- Les autres fenêtres de l'application peuvent la recouvrir lorsqu'elles sont activées ou placées devant elle.
- Elle conserve les autres caractéristiques validées : taille fixe, déplacement libre, mémorisation de sa position commune à tous les projets et repositionnement automatique si sa position mémorisée devient invisible.

## 10.111 Fermeture de la fenêtre d'historique — Question 116, validée

La fermeture de la fenêtre d'historique des échecs techniques est immédiate.

- L'utilisateur peut fermer la fenêtre sans étape de confirmation supplémentaire.
- Aucun dialogue de confirmation n'est affiché.
- La fermeture ne modifie ni ne supprime les événements conservés dans l'historique.

## 10.112 Restitution du focus après fermeture — Question 117, validée

Après la fermeture de la fenêtre d'historique des échecs techniques, l'application restitue automatiquement le focus à la fenêtre de l'application qui était active juste avant l'ouverture de l'historique.

- La restitution du focus intervient à la fermeture de la fenêtre d'historique.
- Cette règle ne modifie pas les autres comportements définis pour la fenêtre, notamment sa fermeture immédiate sans confirmation.

## 10.113 Réouverture de la fenêtre d'historique déjà ouverte — Question 118, validée

Lorsqu'une demande d'ouverture de la fenêtre d'historique des échecs techniques intervient alors que cette fenêtre est déjà ouverte, l'application ramène la fenêtre existante au premier plan.

- Aucune seconde fenêtre d'historique n'est créée.
- La fenêtre déjà ouverte est simplement réactivée et placée au premier plan.
- Ce comportement ne modifie pas les règles de fenêtre classique : la fenêtre n'est pas maintenue en permanence au premier plan et peut être recouverte après sa réactivation.

## 10.114 Conservation de l'état de consultation lors d'une nouvelle demande d'ouverture — Question 119, validée

Lorsqu'une nouvelle demande d'ouverture de l'historique intervient alors que sa fenêtre est déjà ouverte, l'application ramène cette fenêtre existante au premier plan tout en conservant intégralement son état de consultation.

- La position de défilement actuelle est conservée.
- Les détails techniques déjà développés restent développés.
- Les détails techniques qui étaient refermés restent refermés.
- Aucun état de consultation n'est réinitialisé du seul fait de cette nouvelle demande d'ouverture.
- Aucune seconde fenêtre d'historique n'est créée.

## 10.115 Réinitialisation de l'état de consultation après fermeture — Question 120, validée

Lorsqu'une fenêtre d'historique est fermée puis ouverte à nouveau ultérieurement, l'application réinitialise l'état de consultation au lieu de restaurer la session précédente.

- La liste revient en haut.
- Tous les détails techniques sont refermés.
- La position de défilement précédente n'est pas mémorisée pour la prochaine ouverture.
- Cette règle concerne une véritable fermeture suivie d'une nouvelle ouverture. Elle ne modifie pas la règle de la question 119 : lorsqu'une demande d'ouverture intervient alors que la fenêtre est encore ouverte, l'application la ramène au premier plan et conserve son état de consultation en cours.

## 10.116 Ouverture de l'historique au premier plan avec prise du focus — Question 121, validée

Lorsqu'une fenêtre d'historique est fermée puis ouverte à nouveau, elle doit apparaître automatiquement au premier plan et recevoir immédiatement le focus.

- La fenêtre d'historique devient la fenêtre active dès son ouverture.
- Cette règle s'applique après une véritable fermeture suivie d'une nouvelle ouverture.
- Elle ne modifie pas la restauration de la position de la fenêtre, ni la réinitialisation de la consultation définie à la question 120 : la liste revient en haut et tous les détails techniques sont refermés.

## 10.117 Restitution du focus à la fenêtre précédemment active — Question 122, validée

Lorsqu'une fenêtre d'historique est ouverte alors que plusieurs fenêtres de l'application sont ouvertes, sa fermeture restitue le focus à la fenêtre qui était active juste avant l'ouverture de l'historique.

- L'application mémorise quelle fenêtre était active au moment de l'ouverture de l'historique.
- À la fermeture de l'historique, le focus revient à cette fenêtre précise, et non systématiquement à la fenêtre principale.
- Cette règle complète la question 117 et s'applique même lorsque plusieurs fenêtres de l'application sont ouvertes.

## 10.118 Solution de repli pour la restitution du focus — Question 123, validée

Si la fenêtre qui était active juste avant l'ouverture de l'historique a été fermée entre-temps, l'application restitue le focus à la dernière autre fenêtre encore ouverte qui avait été active avant celle-ci.

- L'application tient compte de l'ordre d'activation antérieur des fenêtres.
- Si la fenêtre initialement mémorisée n'est plus ouverte, elle recherche la fenêtre précédente la plus récente qui est toujours ouverte.
- Le focus est attribué à cette fenêtre encore ouverte, plutôt que de revenir systématiquement à la fenêtre principale.

## 10.119 Dernier recours pour la restitution du focus — Question 124, validée

Si aucune des fenêtres précédemment actives n'est encore ouverte au moment de la fermeture de l'historique, l'application donne le focus à sa fenêtre principale.

- L'application privilégie d'abord la fenêtre active avant l'ouverture de l'historique.
- Si celle-ci a été fermée, elle recherche la fenêtre encore ouverte la plus récemment active auparavant, conformément à la question 123.
- Si aucune fenêtre de cette séquence n'est encore ouverte, la fenêtre principale de l'application reçoit le focus.

## 10.120 Priorité à la fenêtre d'origine lors de l'ouverture de l'historique — Question 125, validée

Lorsque l'utilisateur ouvre la fenêtre d'historique depuis une fenêtre secondaire, cette fenêtre secondaire devient la destination prioritaire pour la restitution du focus à la fermeture de l'historique, même si une autre fenêtre de l'application était réellement active juste avant l'ouverture.

- L'application mémorise la fenêtre depuis laquelle la commande d'ouverture de l'historique a été déclenchée.
- À la fermeture de l'historique, cette fenêtre d'origine reçoit prioritairement le focus, si elle est toujours ouverte.
- Cette règle prévaut sur la simple mémorisation de la fenêtre qui était active juste avant l'ouverture de l'historique.
- Si cette fenêtre d'origine a été fermée entre-temps, les règles de repli définies aux sections 10.118 et 10.119 s'appliquent : rechercher la dernière fenêtre antérieure encore ouverte, puis donner le focus à la fenêtre principale si aucune ne subsiste.

## 10.121 Maintien de la priorité de la fenêtre d'origine — Question 126, validée

Lorsque la fenêtre secondaire depuis laquelle l'utilisateur a demandé l'ouverture de l'historique est toujours ouverte au moment de la fermeture de l'historique, elle récupère le focus même si elle est devenue inactive entre-temps ou si une autre fenêtre de l'application a été activée pendant la consultation.

- La fenêtre secondaire à l'origine de la commande d'ouverture reste la destination prioritaire pour la restitution du focus.
- Son activation ou sa désactivation ultérieure pendant que l'historique est ouvert ne modifie pas cette priorité.
- Si cette fenêtre d'origine a été fermée, les règles de repli définies aux sections 10.118 à 10.120 s'appliquent.

## 10.122 Priorité maintenue après recréation de la fenêtre secondaire d'origine — Question 127, validée

Si la fenêtre secondaire depuis laquelle l'utilisateur a demandé l'ouverture de l'historique est fermée pendant que l'historique reste ouvert, puis qu'une nouvelle fenêtre correspondant à cette même fenêtre secondaire est recréée avant la fermeture de l'historique, la fenêtre recréée reprend la priorité pour la restitution du focus.

- La fermeture de l'instance initiale ne fait pas perdre définitivement la priorité associée à la fenêtre secondaire d'origine.
- Si une seule nouvelle instance correspondant à cette même fenêtre secondaire est disponible à la fermeture de l'historique, elle reçoit le focus en priorité.
- Si plusieurs nouvelles instances correspondant à cette même fenêtre secondaire ont été créées, c'est la plus récemment créée qui reçoit le focus.
- Si cette instance la plus récente a été fermée avant la fermeture de l'historique, l'application applique directement les règles générales de repli définies aux sections 10.118 à 10.120, sans rechercher une autre instance correspondante plus ancienne.
- Si aucune fenêtre correspondante n'a été recréée, les règles de repli définies aux sections 10.118 à 10.120 s'appliquent.

## 10.123 Priorité entre plusieurs fenêtres secondaires recréées — Question 128, validée

Lorsque plusieurs nouvelles instances correspondant à la même fenêtre secondaire d'origine sont créées pendant que l'historique est ouvert, l'application donne la priorité à celle qui a été créée le plus récemment. Cette instance reçoit le focus à la fermeture de l'historique, si elle est toujours ouverte. Si elle a été fermée entre-temps, l'application recherche la plus récente des autres instances correspondantes encore ouvertes ; si aucune ne subsiste, les règles de repli définies aux sections 10.118 à 10.120 s'appliquent.

## 10.124 Fermeture de la fenêtre secondaire recréée la plus récente — Question 129, validée

Si la fenêtre secondaire recréée le plus récemment, correspondant à la fenêtre d'origine, est elle-même fermée avant la fermeture de l'historique, l'application applique directement les règles générales de repli définies aux sections 10.118 à 10.120.

- L'application ne recherche pas une autre instance correspondante recréée antérieurement.
- La priorité accordée à la fenêtre secondaire d'origine est considérée comme indisponible dès lors que sa dernière instance prioritaire a été fermée.

## 10.125 Restitution du focus après indisponibilité de la fenêtre secondaire prioritaire — Question 130, validée

Lorsque la fenêtre secondaire prioritaire correspondant à la fenêtre d'origine n'est plus disponible et que les règles générales de repli doivent être appliquées, l'application restitue le focus à la dernière fenêtre de l'application qui était active avant l'ouverture de l'historique, à condition qu'elle soit toujours ouverte.

- L'application recherche la dernière fenêtre précédemment active encore ouverte, conformément à la hiérarchie de repli déjà définie.
- Une fenêtre secondaire qui a été fermée puis recréée pendant que l'historique était ouvert ne peut pas être retenue comme fenêtre de repli, même si elle correspond à une fenêtre qui était précédemment active.
- La recherche se poursuit progressivement dans l'ordre des fenêtres précédemment actives : si la dernière fenêtre admissible est fermée, l'application examine la suivante dans cet ordre, puis continue jusqu'à trouver une fenêtre admissible encore ouverte.
- Si aucune fenêtre précédemment active admissible n'est encore ouverte, la fenêtre principale récupère le focus, conformément à la règle de repli existante.
- La fenêtre principale n'est donc pas privilégiée systématiquement lorsqu'une autre fenêtre précédemment active est encore disponible.

## 10.126 Exclusion des fenêtres secondaires recréées des règles de repli — Question 131, validée

Lorsqu'une fenêtre secondaire qui était active avant l'ouverture de l'historique a été fermée puis recréée pendant que l'historique était ouvert, elle ne peut pas récupérer le focus au titre des règles générales de repli.

- Seules les fenêtres précédemment actives qui sont toujours ouvertes et dont l'instance n'a pas été fermée puis recréée pendant la consultation de l'historique peuvent être retenues.
- L'application recherche la dernière fenêtre admissible dans l'ordre des fenêtres précédemment actives.
- Si aucune fenêtre précédemment active admissible ne subsiste, la fenêtre principale récupère le focus.
- Cette règle de repli ne modifie pas la priorité spécifique accordée à la fenêtre secondaire d'origine lorsqu'elle est encore disponible selon les règles des sections précédentes.

## 10.127 Recherche successive dans la hiérarchie des fenêtres de repli — Question 132, validée

Si la dernière fenêtre précédemment active admissible est fermée avant la fermeture de l'historique, l'application poursuit la recherche vers la fenêtre admissible précédente dans l'ordre des fenêtres qui étaient actives avant l'ouverture de l'historique.

- La recherche est progressive et suit l'ordre chronologique inverse des fenêtres précédemment actives.
- Chaque fenêtre fermée ou exclue parce que son instance a été fermée puis recréée est ignorée.
- La première fenêtre admissible encore ouverte reçoit le focus.
- Si aucune fenêtre précédemment active admissible ne subsiste, la fenêtre principale récupère le focus.

## 10.128 Restauration des fenêtres minimisées lors de la restitution du focus — Question 133, validée

Une fenêtre précédemment active admissible qui est minimisée au moment de la fermeture de l'historique reste éligible pour récupérer le focus.

- L'application restaure automatiquement cette fenêtre si elle constitue la destination prioritaire ou la première fenêtre admissible dans l'ordre de repli.
- Une fenêtre minimisée n'est pas considérée comme indisponible du seul fait de son état minimisé.
- Les règles de priorité et d'exclusion déjà définies restent applicables : une fenêtre fermée, ou dont l'instance a été fermée puis recréée pendant la consultation de l'historique, ne devient pas admissible du fait de cette règle.
- Si aucune fenêtre admissible ne subsiste, la fenêtre principale récupère le focus.

## 10.129 Remise au premier plan des fenêtres masquées — Question 134, validée

Lorsqu'une fenêtre précédemment active admissible est masquée derrière une autre fenêtre de l'application, sans être minimisée, elle reste éligible pour récupérer le focus à la fermeture de l'historique.

- L'application ramène cette fenêtre au premier plan et lui restitue le focus lorsqu'elle constitue la destination prioritaire ou la première fenêtre admissible dans l'ordre de repli.
- Le fait qu'une autre fenêtre la recouvre ne la rend pas indisponible.
- Les règles de priorité, d'admissibilité et d'exclusion déjà définies restent applicables.

## 10.130 Restitution du focus entre plusieurs écrans — Question 135, validée

Lorsqu'une fenêtre précédemment active admissible se trouve sur un écran différent de celui où se trouve la fenêtre d'historique, l'application déplace cette fenêtre sur l'écran où se trouve l'historique avant de lui restituer le focus.

- Le déplacement concerne la fenêtre admissible sélectionnée comme destination prioritaire ou comme première fenêtre dans l'ordre de repli.
- Après son déplacement, l'application la ramène au premier plan et lui donne le focus.
- Les règles relatives aux fenêtres fermées, recréées, minimisées ou masquées restent applicables.
- La règle concernant les bureaux virtuels distincts définie à la section suivante prévaut : l'application ne bascule pas automatiquement vers un autre bureau virtuel.

## 10.131 Fenêtres situées sur un autre bureau virtuel — Question 136, validée

Une fenêtre admissible située sur un autre bureau virtuel du système que celui où se trouve la fenêtre d'historique est considérée comme indisponible pour la restitution du focus.

- L'application ne bascule pas automatiquement vers le bureau virtuel de cette fenêtre.
- Elle poursuit la recherche vers la fenêtre admissible précédente dans l'ordre chronologique inverse des fenêtres précédemment actives.
- La recherche continue jusqu'à trouver une fenêtre admissible située sur le bureau virtuel courant.
- Si aucune fenêtre précédemment active admissible n'est disponible sur ce bureau virtuel, la fenêtre principale récupère le focus, sans changement automatique de bureau virtuel.

## 10.132 Restitution du focus à la fenêtre principale sans déplacement entre écrans — Question 137, validée

Si aucune fenêtre secondaire admissible ne peut récupérer le focus et que la fenêtre principale se trouve sur un écran différent de celui où se trouve la fenêtre d'historique, l'application conserve la fenêtre principale sur son écran actuel.

- L'application ne déplace pas la fenêtre principale vers l'écran de l'historique.
- Elle ramène la fenêtre principale au premier plan et lui restitue le focus sur son écran actuel.
- Cette règle concerne uniquement la fenêtre principale ; les règles de déplacement des fenêtres secondaires admissibles entre écrans restent applicables.

## 10.133 Maintien de l'admissibilité après déconnexion d'un écran — Question 138, validée

Si l'écran sur lequel se trouve une fenêtre admissible est déconnecté pendant que l'historique est ouvert, cette fenêtre reste admissible pour la restitution du focus.

- L'application déplace la fenêtre vers l'écran où se trouve la fenêtre d'historique.
- Elle ramène ensuite la fenêtre au premier plan et lui restitue le focus si elle constitue la destination prioritaire ou la première fenêtre admissible dans l'ordre de repli.
- La déconnexion de l'écran ne suffit pas à exclure la fenêtre de la recherche.
- Les règles relatives aux fenêtres fermées, recréées, minimisées, masquées et aux bureaux virtuels distincts restent applicables.

## 10.134 Réajustement d'une fenêtre après un changement de résolution — Question 139, validée

Si la résolution d'un écran change pendant que l'historique est ouvert et qu'une fenêtre admissible devient partiellement ou totalement invisible, l'application repositionne automatiquement cette fenêtre afin qu'elle soit entièrement visible.

- Le repositionnement est effectué avant la restitution du focus lorsque cette fenêtre est sélectionnée comme destination prioritaire ou dans l'ordre de repli.
- La fenêtre est maintenue sur son écran actuel si celui-ci reste disponible et permet un affichage entièrement visible.
- Si son écran n'est plus disponible, les règles de déplacement vers l'écran de l'historique définies à la section 10.133 s'appliquent.
- Une fois la fenêtre entièrement visible, l'application la ramène au premier plan et lui restitue le focus.
- Les règles d'admissibilité et de priorité déjà définies restent applicables.

## 10.135 Déplacement de la fenêtre principale si son écran est déconnecté — Question 140, validée

Si l'écran sur lequel se trouve la fenêtre principale est déconnecté pendant que l'historique est ouvert et qu'aucune fenêtre secondaire admissible ne peut récupérer le focus, l'application déplace la fenêtre principale vers l'écran où se trouve la fenêtre d'historique.

- Le déplacement est effectué avant la restitution du focus.
- La fenêtre principale est ensuite ramenée au premier plan et reçoit le focus.
- Cette règle s'applique uniquement lorsque l'écran de la fenêtre principale est déconnecté ; si son écran reste disponible, la règle de conservation de son écran actuel définie à la section 10.132 continue de s'appliquer.

## 10.136 Choix de l'écran de repli si l'écran de l'historique est déconnecté — Question 141, validée

Si l'écran sur lequel se trouve la fenêtre d'historique est lui-même déconnecté pendant la consultation, et qu'une fenêtre admissible doit être déplacée parce que son écran d'origine n'est plus disponible, l'application choisit comme destination l'écran disponible qui contient la plus grande partie de la fenêtre principale.

- La fenêtre admissible est déplacée vers cet écran avant la restitution du focus.
- Si plusieurs écrans disponibles contiennent une partie égale de la fenêtre principale, le choix entre ces écrans n'est pas défini par cette décision et devra être précisé si ce cas doit être traité de manière déterministe.
- Les règles d'admissibilité, de priorité et de repositionnement garantissant une fenêtre entièrement visible restent applicables.

## 10.137 Mémorisation des positions après repositionnement automatique — Question 142, validée

Lorsqu'une fenêtre est déplacée ou repositionnée automatiquement afin de rester visible ou de rejoindre un autre écran, sa nouvelle position est mémorisée.

- Cette position devient la position de référence utilisée lors des prochaines ouvertures de la fenêtre concernée.
- La mémorisation concerne les repositionnements automatiques prévus par les règles précédentes, notamment après un changement de résolution ou la déconnexion d'un écran.
- Les règles de positionnement propres à chaque type de fenêtre et les autres règles de visibilité restent applicables.

## 10.138 Départage des écrans de repli en cas d'égalité — Question 143, validée

Si plusieurs écrans disponibles contiennent exactement la même partie de la fenêtre principale et qu'ils sont donc à égalité pour le choix de l'écran de repli, l'application choisit l'écran principal défini par le système d'exploitation.

- Ce critère intervient uniquement lorsqu'une égalité subsiste entre plusieurs écrans candidats.
- Les règles précédentes de sélection de l'écran contenant la plus grande partie de la fenêtre principale restent prioritaires lorsqu'elles permettent de départager les écrans.

## 10.139 Priorité à la position choisie manuellement après un repositionnement automatique — Question 144, validée

Si l'utilisateur déplace manuellement une fenêtre après que l'application l'a repositionnée automatiquement, la nouvelle position manuelle remplace la position précédemment mémorisée.

- La position choisie manuellement devient la nouvelle position de référence pour les prochaines ouvertures.
- Cette règle s'applique même si la position mémorisée précédente résultait d'un déplacement automatique dû à une résolution modifiée ou à la déconnexion d'un écran.
- Les règles de visibilité et de repositionnement automatique restent applicables si cette nouvelle position devient ultérieurement inaccessible.

## 10.140 Restauration sur un écran redevenu disponible — Question 145, validée

Lorsqu'un écran précédemment déconnecté redevient disponible, l'application restaure automatiquement les fenêtres concernées sur leur écran d'origine, à leur position antérieure.

- L'application conserve les informations nécessaires sur l'écran d'origine et la position qu'occupait la fenêtre avant son déplacement vers un écran de repli.
- Ces informations de retour sont conservées séparément de la position de repli actuellement utilisée.
- Lorsque l'écran d'origine redevient disponible, la fenêtre peut retrouver sa position antérieure sur cet écran.
- Si cette position n'est plus entièrement visible, notamment en raison d'un changement de résolution ou de configuration, les règles de visibilité et de repositionnement automatique restent applicables.
- Un déplacement manuel effectué par l'utilisateur après le repositionnement automatique remplace la position mémorisée conformément à la section 10.139 ; il ne doit toutefois pas supprimer les informations nécessaires au retour sur l'écran d'origine tant que cet écran demeure indisponible.

## 10.141 Restauration indépendante des fenêtres sur leur écran d'origine — Question 146, validée

Lorsqu'un écran précédemment déconnecté redevient disponible, chaque fenêtre déplacée vers un écran de repli est restaurée indépendamment à sa position antérieure sur l'écran d'origine.

- L'application ne cherche pas à préserver ou reconstruire les positions relatives entre plusieurs fenêtres.
- La position de chaque fenêtre est déterminée à partir des informations mémorisées pour cette fenêtre.
- Les règles d'adaptation à la résolution actuelle de l'écran, définies à la section 10.142, restent applicables.

## 10.142 Adaptation proportionnelle à une résolution différente — Question 147, validée

Si un écran d'origine redevient disponible avec une résolution différente de celle qu'il avait avant sa déconnexion, l'application recalcule la position et les dimensions de chaque fenêtre restaurée afin de conserver ses proportions et sa position relative dans l'écran.

- Le calcul tient compte des dimensions actuelles de l'écran et de la position antérieure mémorisée.
- Chaque fenêtre est traitée indépendamment, conformément à la section 10.141.
- La fenêtre doit rester entièrement visible dans la zone utilisable de l'écran.
- Si nécessaire, un ajustement complémentaire est effectué pour respecter cette contrainte de visibilité.

## 10.143 Maintien du focus lors de la restauration des fenêtres — Question 148, validée

La restauration des fenêtres sur leur écran d'origine ne doit pas modifier la fenêtre active ni provoquer une restitution automatique du focus à l'une des fenêtres restaurées.

- L'application restaure uniquement la position et, si nécessaire, les dimensions des fenêtres concernées.
- La fenêtre qui était active avant le retour de l'écran conserve le focus.
- La restauration des fenêtres ne doit pas déclencher de changement de fenêtre active.

## 10.144 Gestion des déconnexions répétées d'un écran — Question 149, validée

Lorsqu'un écran est déconnecté plusieurs fois au cours d'une même session, la position de référence pour le retour sur cet écran reste celle enregistrée avant la première déconnexion de cette séquence.

- Les déconnexions et reconnexions successives ne remplacent pas cette position initiale de référence.
- La position de repli utilisée entre-temps reste distincte des informations de retour vers l'écran d'origine.
- La restauration au retour de l'écran s'effectue selon les règles définies aux sections 10.141 à 10.143.

## 10.145 Mémorisation du redimensionnement manuel sur l'écran de repli — Question 150, validée

Si l'utilisateur redimensionne manuellement une fenêtre après son déplacement vers un écran de repli, l'application mémorise les nouvelles dimensions avec la nouvelle position.

- Les dimensions et la position résultant de l'intervention manuelle constituent la référence de la fenêtre sur l'écran de repli.
- Cette mémorisation ne remplace pas les informations distinctes nécessaires au retour sur l'écran d'origine.
- Les règles de restauration et d'adaptation à la résolution de l'écran d'origine restent applicables.

## 10.146 Écran d'origine indisponible au lancement de l'application — Question 151, validée

Si l'application est relancée alors que l'écran d'origine d'une fenêtre reste indisponible, la fenêtre est replacée sur l'écran principal du système d'exploitation dès le lancement.

- La fenêtre ne reste pas sur sa position de repli précédente dans l'attente du retour de l'écran d'origine.
- Les informations permettant de retrouver l'écran d'origine et les données de restauration associées sont conservées afin de permettre le retour automatique lorsque cet écran redevient disponible.
- Le repositionnement au lancement doit respecter les règles de visibilité applicables aux fenêtres.

## 10.147 Retour de l'écran après le lancement de l'application — Question 152, validée

Si l'écran d'origine redevient disponible après le lancement de l'application, les fenêtres concernées ne sont pas restaurées automatiquement à ce moment-là.

- Elles restent sur leur écran de repli actuel.
- La restauration vers l'écran d'origine est reportée à la prochaine ouverture de l'application.
- Les informations permettant leur restauration ultérieure restent conservées.

## 10.148 Conservation de la position de retour après un déplacement manuel — Question 153, validée

Lorsqu'un utilisateur déplace ou redimensionne manuellement une fenêtre sur l'écran de repli pendant que son écran d'origine est indisponible, les informations de retour vers l'écran d'origine restent celles enregistrées avant la déconnexion.

- Le déplacement ou le redimensionnement manuel actualise la position et les dimensions mémorisées pour l'écran de repli, conformément à la question 150.
- Cette intervention ne remplace pas la position et les dimensions de référence destinées à la restauration sur l'écran d'origine.
- Au retour de l'écran d'origine, les règles de restauration définies aux sections précédentes s'appliquent à partir de ces informations de retour préservées.

## 10.149 Restauration lorsque l'application est inactive — Question 154, validée

Si l'écran d'origine redevient disponible alors que l'application est minimisée ou en arrière-plan, la restauration des fenêtres concernées est différée jusqu'à ce que l'utilisateur réactive l'application.

- Aucune restauration n'est déclenchée tant que l'application reste minimisée ou inactive en arrière-plan.
- Lorsque l'utilisateur réactive l'application, les fenêtres concernées sont restaurées selon les règles applicables.
- Ce report ne doit pas entraîner de changement automatique du focus tant que l'application n'est pas réactivée par l'utilisateur.

## 10.150 Restauration simultanée après reconnexion de plusieurs écrans — Question 155, validée

Lorsque plusieurs écrans précédemment déconnectés redeviennent disponibles simultanément, l'application restaure simultanément toutes les fenêtres concernées.

- Chaque fenêtre retrouve son écran d'origine selon les informations de retour qui lui sont propres.
- Les règles de visibilité, d'adaptation aux résolutions et de gestion du focus définies précédemment restent applicables.
- La restauration simultanée ne doit pas créer de dépendance entre les positions des différentes fenêtres.

## 10.151 Ordre de restauration après réactivation de l'application — Question 156, validée

Lorsque plusieurs écrans d'origine sont redevenus disponibles pendant que l'application était minimisée ou en arrière-plan, les fenêtres sont restaurées dans l'ordre chronologique de déconnexion lorsque l'utilisateur réactive l'application.

- Les fenêtres associées à l'écran déconnecté en premier sont restaurées en premier.
- Les fenêtres associées aux écrans déconnectés ensuite sont restaurées dans le même ordre chronologique.
- Cet ordre s'applique lorsque la restauration a été différée en raison de l'inactivité de l'application ; il ne modifie pas la règle de restauration simultanée lorsque plusieurs écrans redeviennent disponibles alors que l'application est active.

## 10.152 Déplacement manuel avant la restauration sur l'écran d'origine — Question 157, validée

Si l'écran d'origine redevient disponible après que l'utilisateur a déplacé manuellement une fenêtre sur l'écran de repli, l'application restaure malgré tout cette fenêtre sur son écran d'origine.

- Le déplacement manuel sur l'écran de repli ne constitue pas une annulation de la restauration prévue.
- Les informations de retour vers l'écran d'origine restent prioritaires.
- Les règles de mémorisation de la position de repli et de conservation des informations de retour définies précédemment restent applicables.

## 10.153 Nouvelle séquence de déconnexion avant réactivation — Question 158, validée

Si un écran d'origine redevient disponible, puis se déconnecte à nouveau avant que l'application inactive soit réactivée, l'application enregistre une nouvelle séquence de déconnexion en prenant comme référence la position actuelle de la fenêtre.

- La nouvelle séquence remplace, pour cette fenêtre, la séquence de déconnexion précédente comme référence de restauration.
- La position actuelle de la fenêtre au moment de cette nouvelle déconnexion est enregistrée.
- Les règles générales de conservation des informations de retour et de position de repli continuent de s'appliquer à cette nouvelle séquence.

## 10.154 Restauration de plusieurs fenêtres sur un même écran — Question 159, validée

Lorsque plusieurs fenêtres doivent être restaurées simultanément sur un même écran, l'application restitue exactement les positions et dimensions mémorisées pour chacune d'elles.

- Les positions et dimensions enregistrées sont respectées individuellement.
- L'application ne décale pas et ne redimensionne pas automatiquement les fenêtres dans le but d'éviter leur chevauchement.
- Un chevauchement résultant de la restauration est donc conservé.

## 10.155 Résolution insuffisante de l'écran d'origine au retour — Question 160, validée

Si l'écran d'origine redevient disponible avec une résolution trop faible pour afficher une fenêtre à ses dimensions calculées, l'application réduit proportionnellement cette fenêtre jusqu'à ce qu'elle soit entièrement visible sur l'écran.

- La réduction conserve les proportions de la fenêtre.
- La fenêtre doit être entièrement visible dans les limites de l'écran.
- Cette adaptation s'applique lorsque les dimensions calculées selon les règles de restauration ne permettent pas une visibilité complète.

## 10.156 Dimensions de référence après réduction — Question 161, validée

Lorsqu'une fenêtre est réduite proportionnellement parce que la résolution de l'écran d'origine est insuffisante, l'application conserve les dimensions initiales de la fenêtre, avant réduction, comme référence pour les restaurations ultérieures.

- La réduction imposée par les limites de l'écran ne remplace pas les dimensions de référence.
- Les dimensions initiales restent disponibles pour les prochaines restaurations, sous réserve des contraintes de visibilité de l'écran cible.

## 10.157 Augmentation de la résolution après une réduction — Question 162, validée

Si la résolution de l'écran d'origine augmente ultérieurement, l'application recalcule automatiquement les dimensions de la fenêtre afin de retrouver celles permises par la nouvelle résolution.

- L'adaptation tient compte de la résolution désormais disponible.
- Les dimensions de référence conservées avant la réduction restent utilisées pour ce recalcul.
- La fenêtre doit rester entièrement visible sur l'écran.

## 10.158 Redimensionnement manuel après restauration — Question 163, validée

Si l'utilisateur redimensionne manuellement une fenêtre après sa restauration sur l'écran d'origine, l'application enregistre les nouvelles dimensions comme référence pour les restaurations ultérieures.

- Le redimensionnement manuel remplace les dimensions de référence précédemment mémorisées.
- Les règles d'adaptation proportionnelle aux limites de l'écran continuent de s'appliquer si une restauration ultérieure rencontre une résolution insuffisante.

## 10.159 Adaptation immédiate après un changement de résolution — Question 164, validée

Lorsqu'un changement de résolution est détecté sur un écran pendant que l'application est active, les dimensions des fenêtres concernées sont adaptées immédiatement.

- L'application ne reporte pas cette adaptation à la prochaine restauration.
- Les règles de conservation des dimensions de référence et de visibilité complète restent applicables.

## 10.160 Chevauchement après agrandissement des fenêtres — Question 165, validée

Lorsque plusieurs fenêtres sont agrandies à la suite d'une augmentation de résolution, l'application respecte les positions et dimensions calculées pour chacune d'elles, même si elles se chevauchent.

- Aucun réagencement automatique n'est effectué pour éviter les chevauchements.
- Les positions et dimensions calculées restent prioritaires.

## 10.161 Absence de taille minimale en cas de réduction — Question 166, validée

Aucune taille minimale n'est imposée lorsqu'une fenêtre doit être réduite pour rester entièrement visible sur un écran de résolution insuffisante.

- La visibilité complète de la fenêtre reste prioritaire.
- Une fenêtre peut donc devenir très petite si les dimensions de l'écran l'exigent.
- Aucune partie de la fenêtre ne doit rester hors écran du seul fait de cette réduction.

## 10.162 Adaptation pendant l'inactivité de l'application — Question 167, validée

Lorsqu'un changement de résolution est détecté alors que l'application est minimisée ou en arrière-plan, les fenêtres concernées sont adaptées immédiatement, sans attendre la réactivation de l'application.

- L'inactivité de l'application ne suspend pas l'adaptation aux changements de résolution.
- Les règles de dimensions de référence, de visibilité complète et de chevauchement restent applicables.

## 10.163 Traitement de changements de résolution successifs — Question 168, validée

Lorsque plusieurs changements de résolution surviennent avant que les fenêtres aient pu être adaptées, l'application les adapte directement à la dernière résolution détectée.

- Les résolutions intermédiaires ne donnent pas lieu à des adaptations successives.
- Le calcul est effectué à partir de la dernière résolution connue et des dimensions de référence mémorisées.

## 10.164 Retour à une résolution antérieure — Question 169, validée

Si un écran retrouve une résolution qu'il avait précédemment, l'application recalcule les dimensions des fenêtres concernées à partir de leurs dimensions de référence mémorisées.

- Les dimensions de référence sont utilisées plutôt que les dimensions temporairement réduites ou adaptées.
- Les fenêtres sont recalculées pour la résolution désormais disponible.
- Les règles de visibilité complète restent applicables.

## 10.165 Gestion d'une déconnexion pendant l'adaptation — Question 170, validée

Si un écran est déconnecté pendant que l'application adapte les fenêtres à un changement de résolution, l'adaptation en cours est interrompue et les règles déjà définies de déconnexion et de déplacement vers un écran de repli sont appliquées.

- La déconnexion de l'écran prévaut sur la poursuite de l'adaptation liée à sa résolution.
- Les informations de référence nécessaires à la restauration ultérieure restent soumises aux règles de gestion des écrans déconnectés.

## 10.166 Adaptation indépendante selon la résolution de chaque écran — Question 171, validée

Lorsque plusieurs écrans disponibles présentent des résolutions différentes, les dimensions de chaque fenêtre sont calculées indépendamment en fonction de la résolution de l'écran auquel elle est associée.

- Les fenêtres ne sont pas forcées à adopter des dimensions identiques lorsqu'elles se trouvent sur des écrans différents.
- Les règles de référence dimensionnelle et de visibilité complète restent applicables.

## 10.167 Priorité au changement de résolution pendant une action manuelle — Question 172, validée

Si un changement de résolution est détecté pendant que l'utilisateur déplace ou redimensionne manuellement une fenêtre, l'action manuelle est interrompue et la fenêtre est immédiatement adaptée à la nouvelle résolution.

- L'adaptation à la nouvelle résolution est prioritaire sur la poursuite de l'action manuelle en cours.
- Les règles de calcul des dimensions, de référence et de visibilité définies précédemment restent applicables.

## 10.168 Navigation principale de l'application — Question 173, validée

La navigation principale de l'application combine une barre latérale permanente pour accéder aux grandes parties de l'application et des commandes contextuelles disposées dans la partie supérieure de l'interface.

- La barre latérale constitue le point d'accès principal aux différentes sections.
- La zone supérieure accueille les commandes contextuelles adaptées à la section ou à l'espace de travail actif.

## 10.169 Ouverture simultanée de plusieurs projets — Question 174, validée

Chaque projet ouvert est présenté dans un onglet de la fenêtre principale.

- Plusieurs projets peuvent rester ouverts simultanément dans la même fenêtre principale.
- L'utilisateur passe d'un projet à l'autre en sélectionnant son onglet.
- Cette organisation ne crée pas automatiquement une fenêtre indépendante pour chaque projet.

## 10.170 Organisation des panneaux de l'éditeur — Question 175, validée

Les panneaux de l'éditeur, notamment ceux dédiés aux calques, aux propriétés, aux ressources et à l'aperçu, sont redimensionnables et déplaçables librement.

- L'utilisateur peut adapter leur taille et leur emplacement selon ses besoins.
- La décision valide la liberté de déplacement et de redimensionnement des panneaux, sans imposer à elle seule un système de dispositions multiples enregistrables.

## 10.171 Mémorisation de la disposition des panneaux — Question 176, validée

L'application mémorise une disposition générale commune à tous les projets.

- Une même disposition de panneaux sert de référence quel que soit le projet ouvert.
- Aucune disposition indépendante propre à chaque projet n'est prévue par cette décision.

## 10.172 Personnalisation des raccourcis clavier — Question 177, validée

L'application propose un système de raccourcis clavier entièrement personnalisable.

- L'utilisateur peut modifier les raccourcis existants.
- Il peut également créer ses propres raccourcis pour les actions prises en charge par le système.
- La création de raccourcis reste limitée aux actions auxquelles l'application permet d'associer une commande clavier.

## 10.173 Enregistrement automatique de la disposition des panneaux — Question 178, validée

L'application enregistre automatiquement la disposition générale des panneaux à chaque déplacement ou redimensionnement effectué par l'utilisateur.

- Les changements de position et de taille sont mémorisés sans commande d'enregistrement manuelle.
- La disposition enregistrée reste commune à tous les projets, conformément à la décision précédente.

## 10.174 Réinitialisation de la disposition des panneaux — Question 179, validée

L'utilisateur peut rétablir la disposition initiale des panneaux au moyen d'une commande dédiée.

- Une confirmation explicite est demandée avant d'appliquer la réinitialisation.
- Tant que l'utilisateur n'a pas confirmé, la disposition personnalisée actuelle est conservée.

## 10.175 Réouverture d'un projet déjà ouvert — Question 180, validée

Lorsqu'un utilisateur demande l'ouverture d'un projet qui est déjà présent dans un onglet, l'application active l'onglet existant.

- Un second onglet indépendant n'est pas créé pour le même projet.
- L'utilisateur retrouve ainsi directement l'espace de travail déjà ouvert et son état courant.

## 10.176 Fermeture d'un projet comportant des modifications non enregistrées — Question 181, validée

Lorsqu'un utilisateur ferme un onglet contenant des modifications non enregistrées, l'application affiche une demande de décision avant de fermer le projet.

- L'utilisateur peut enregistrer les modifications puis fermer le projet.
- Il peut abandonner les modifications et fermer le projet sans les enregistrer.
- Il peut annuler la fermeture et revenir au projet sans perdre son état courant.

## 10.177 Gestion des conflits entre raccourcis clavier — Question 182, validée

L'application interdit l'attribution d'un même raccourci clavier à plusieurs actions.

- Lorsqu'un raccourci est déjà attribué, sa nouvelle attribution est refusée.
- L'utilisateur est invité à choisir un autre raccourci.
- Cette règle évite les conflits et les comportements ambigus lors de l'utilisation du clavier.

## 10.178 Réorganisation des onglets de projets — Question 183, validée

L'utilisateur peut réorganiser librement les onglets des projets ouverts par glisser-déposer.

- L'ordre des onglets n'est pas limité à leur ordre d'ouverture.
- L'utilisateur peut organiser les projets ouverts selon son propre ordre de travail.

## 10.179 Indication des modifications non enregistrées dans les onglets — Question 184, validée

Un petit indicateur visuel apparaît dans l'onglet d'un projet lorsqu'il contient des modifications non enregistrées.

- Cet indicateur permet de repérer rapidement les projets qui nécessitent un enregistrement.
- Le nom du projet n'est pas modifié par l'ajout d'un astérisque.

## 10.180 Fermeture groupée des onglets — Question 185, validée

L'application propose deux commandes de fermeture groupée :

- « Fermer les autres onglets » ferme les projets ouverts autres que celui actuellement actif.
- « Fermer tous les onglets » ferme l'ensemble des projets ouverts.

Les règles de protection des modifications non enregistrées définies précédemment restent applicables aux projets concernés.

## 10.181 Restauration sélective des projets au démarrage — Question 186, validée

Au démarrage de l'application, l'utilisateur peut consulter la liste des projets qui étaient ouverts lors de la session précédente.

- L'application ne rouvre pas automatiquement tous ces projets.
- L'utilisateur choisit explicitement les projets qu'il souhaite restaurer.
- L'application démarre sans imposer la réouverture de projets non sélectionnés.

## 10.182 Confirmation individuelle à la fermeture de l'application — Question 187, validée

Lorsque plusieurs projets comportent des modifications non enregistrées et que l'utilisateur ferme l'application, une demande de confirmation est présentée séparément pour chaque projet concerné.

- Chaque projet fait l'objet de sa propre décision.
- Les choix d'enregistrement, d'abandon des modifications ou d'annulation de fermeture définis pour la fermeture d'un projet restent applicables.
- La fermeture complète de l'application ne doit pas contourner ces protections.

## 10.183 Conservation de l'ordre personnalisé des onglets — Question 188, validée

L'application conserve automatiquement le dernier ordre personnalisé des onglets de projets utilisé par l'utilisateur.

- Après fermeture puis redémarrage de l'application, les onglets retrouvent leur dernier ordre enregistré.
- Cet ordre mémorisé tient compte des réorganisations effectuées manuellement par glisser-déposer.
- La restauration de l'ordre des onglets s'applique aux projets qui sont effectivement rouverts ; elle ne modifie pas la sélection des projets à restaurer au démarrage.

## 10.184 Identification visuelle de l'onglet actif — Question 189, validée

L'onglet du projet actuellement actif se distingue des autres onglets par une combinaison de plusieurs indicateurs visuels.

- L'état actif ne repose pas sur un seul changement visuel.
- Les indicateurs combinés doivent permettre d'identifier clairement le projet sélectionné, tout en conservant une présentation cohérente avec l'interface.
- Les détails graphiques précis de cette combinaison relèvent de la conception de l'interface.

## 10.185 Gestion d'un grand nombre d'onglets — Question 190, validée

Lorsque le nombre de projets ouverts dépasse l'espace disponible dans la barre d'onglets, l'application propose à la fois un défilement horizontal et un menu déroulant de sélection.

- Le défilement horizontal permet de parcourir directement les onglets.
- Le menu déroulant donne accès à la liste des projets ouverts et permet d'en sélectionner un sans devoir parcourir toute la barre.
- Les deux moyens de navigation sont complémentaires.

## 10.186 Menu contextuel des onglets — Question 191, validée

Un clic droit sur un onglet ouvre un menu contextuel proposant les commandes utiles pour agir sur le projet correspondant.

- Le menu peut notamment proposer l'enregistrement du projet et les commandes de fermeture.
- Il reprend les commandes pertinentes déjà définies, notamment la fermeture de l'onglet, la fermeture des autres onglets et la fermeture de tous les onglets lorsque leur portée est applicable.
- Les protections relatives aux modifications non enregistrées restent systématiquement applicables.
- Le menu contextuel ne doit pas contourner les règles générales de sécurité et de confirmation.

## 10.187 Détachement d'un projet dans une fenêtre indépendante — Question 192, validée

L'utilisateur peut détacher librement un onglet de projet par glisser-déposer hors de la barre d'onglets afin d'ouvrir ce projet dans une fenêtre indépendante.

- Le détachement est déclenché par le glisser-déposer de l'onglet hors de la barre.
- Le projet détaché reste ouvert et accessible dans sa propre fenêtre.
- Cette possibilité complète l'organisation habituelle des projets en onglets dans la fenêtre principale.
- Les règles existantes relatives à l'unicité d'ouverture d'un projet, à la conservation de son état et à la protection des modifications non enregistrées restent applicables.

## 10.188 Réintégration d'un projet détaché dans la fenêtre principale — Question 193, validée

Un projet ouvert dans une fenêtre indépendante peut être réintégré dans la fenêtre principale par deux moyens complémentaires.

- L'utilisateur peut faire glisser l'onglet du projet vers la barre d'onglets de la fenêtre principale.
- Une commande accessible depuis le menu de la fenêtre indépendante permet également de réintégrer le projet.
- La réintégration ne crée pas une seconde instance du projet : le projet existant est transféré dans la fenêtre principale en conservant son état.

## 10.189 Plusieurs projets dans une fenêtre indépendante — Question 194, validée

Une fenêtre indépendante peut accueillir plusieurs projets simultanément, organisés sous forme d'onglets.

- Une fenêtre indépendante n'est donc pas limitée à un seul projet.
- Les règles générales de gestion des onglets s'appliquent également à ces fenêtres : sélection, réorganisation, menu contextuel et fermeture.
- Chaque projet reste identifié individuellement et ne doit pas être ouvert en double dans une autre fenêtre.

## 10.190 Mémorisation de la taille et de la position des fenêtres indépendantes — Question 195, validée

L'application mémorise automatiquement la dernière taille et la dernière position utilisées pour chaque fenêtre indépendante.

- Lorsqu'une fenêtre indépendante est rouverte, elle retrouve autant que possible ses dernières dimensions et sa dernière position.
- Les règles générales déjà définies concernant les écrans déconnectés, les changements de résolution et la visibilité complète des fenêtres restent applicables.
- La mémorisation est propre à chaque fenêtre indépendante.

## 10.191 Restauration des fenêtres indépendantes au démarrage — Question 196, validée

Lors de la restauration des projets au démarrage, un projet qui était ouvert dans une fenêtre indépendante est rouvert dans une fenêtre indépendante.

- L'application conserve le mode d'affichage du projet utilisé lors de la session précédente.
- Les projets précédemment ouverts dans la fenêtre principale restent restaurés dans la fenêtre principale.
- La restauration respecte la sélection des projets effectuée par l'utilisateur au démarrage.

## 10.192 Fermeture de la fenêtre principale et des fenêtres indépendantes — Question 197, validée

La fermeture de la fenêtre principale entraîne la fermeture complète de l'application, y compris des fenêtres indépendantes.

- Les projets ouverts dans la fenêtre principale et dans les fenêtres indépendantes sont tous concernés.
- Les protections habituelles contre la perte de modifications non enregistrées restent applicables.
- Chaque projet concerné fait l'objet des confirmations individuelles déjà définies pour la fermeture complète de l'application.
- La fermeture de la fenêtre principale ne doit pas laisser des fenêtres indépendantes ouvertes après l'arrêt de l'application.

## 10.193 Identification des fenêtres indépendantes — Question 198, validée

La barre de titre de chaque fenêtre indépendante affiche à la fois le nom du projet actif et le nom de l'application.

- Le nom du projet permet d'identifier immédiatement le contenu de la fenêtre.
- Le nom de l'application permet de reconnaître son appartenance à MTG Card Remodeler.
- L'identification suit le projet actuellement sélectionné dans la fenêtre lorsqu'elle contient plusieurs projets sous forme d'onglets.

## 10.194 Navigation entre les fenêtres de l'application — Question 199, validée

L'utilisateur peut passer d'une fenêtre de l'application à une autre aussi bien au moyen des commandes habituelles du système d'exploitation qu'au moyen d'un menu de navigation intégré à MTG Card Remodeler.

- Les mécanismes standards du système d'exploitation restent disponibles.
- Le menu intégré permet de repérer et d'activer les autres fenêtres ouvertes de l'application.
- Les deux moyens de navigation sont complémentaires.

## 10.195 Synchronisation configurable des informations d'interface — Question 200, validée

La synchronisation de certaines informations communes de l'interface entre les fenêtres est configurable par l'utilisateur.

- L'application distingue les informations d'interface susceptibles d'être partagées de celles qui doivent rester propres à chaque fenêtre.
- L'utilisateur peut choisir si les informations communes concernées sont synchronisées entre les fenêtres.
- Les états propres à une fenêtre ne sont pas synchronisés par défaut du seul fait que plusieurs fenêtres sont ouvertes.
- Les réglages de synchronisation doivent être explicites et ne pas entraîner de modification inattendue de l'organisation des autres fenêtres.

## 10.196 Ouverture d'un projet déjà présent dans une autre fenêtre — Question 201, validée

Lorsqu'une demande d'ouverture concerne un projet déjà ouvert dans une autre fenêtre, l'application demande à l'utilisateur comment procéder.

- L'application identifie la fenêtre dans laquelle le projet est déjà ouvert.
- L'utilisateur choisit l'action à effectuer au lieu de subir un transfert automatique ou une simple activation imposée.
- Cette demande ne crée jamais une seconde instance du même projet.
- Les choix proposés doivent permettre de conserver l'organisation actuelle ou de déplacer le projet vers la fenêtre active, selon le contexte.

## 10.197 Fermeture d'une fenêtre indépendante contenant plusieurs projets — Question 202, validée

Lorsqu'une fenêtre indépendante contient plusieurs projets, sa fermeture donne à l'utilisateur le choix entre fermer la fenêtre et réintégrer ses projets dans la fenêtre principale.

- La fermeture de la fenêtre traite les projets qu'elle contient en appliquant individuellement les protections habituelles contre la perte de modifications non enregistrées.
- La réintégration transfère les projets dans la fenêtre principale sans créer de doublons et en conservant leur état.
- L'utilisateur choisit explicitement l'une de ces deux possibilités avant que l'opération soit effectuée.
- Les règles générales de fermeture de l'application et de gestion des fenêtres restent applicables.

## 10.198 Destination d'ouverture d'un nouveau projet — Question 203, validée

Tout nouveau projet ouvert depuis la bibliothèque apparaît dans la fenêtre principale.

- Cette règle s'applique lorsqu'il s'agit d'un projet qui n'est pas déjà ouvert dans une autre fenêtre.
- Les règles spécifiques aux projets déjà ouverts dans une autre fenêtre restent celles définies à la question 201.
- L'ouverture depuis la bibliothèque ne crée pas automatiquement une nouvelle fenêtre indépendante.

## 10.199 Création d'une fenêtre indépendante — Question 204, validée

Le détachement d'un onglet existant constitue le moyen prévu pour créer une fenêtre indépendante.

- Aucun bouton, commande dédiée ou raccourci clavier supplémentaire n'est ajouté pour créer une fenêtre indépendante vide.
- L'utilisateur crée une fenêtre indépendante en détachant un projet de la barre d'onglets, conformément aux règles déjà définies.
- Cette règle n'empêche pas l'utilisation des commandes de réintégration et de navigation entre fenêtres.

## 10.200 Fermeture automatique d'une fenêtre indépendante vide — Question 205, validée

Une fenêtre indépendante se ferme automatiquement lorsque tous les projets qu'elle héberge ont été fermés ou réintégrés dans une autre fenêtre.

- Une fenêtre indépendante ne reste pas ouverte sans projet.
- La fermeture de ses projets respecte les protections habituelles contre la perte de modifications non enregistrées.
- La réintégration du dernier projet entraîne également la fermeture automatique de la fenêtre devenue vide.

## 10.201 Indépendance du projet actif dans chaque fenêtre — Question 206, validée

Chaque fenêtre conserve son propre projet actif, indépendamment du projet actif dans les autres fenêtres.

- Le changement d'onglet actif dans une fenêtre ne modifie pas la sélection active des autres fenêtres.
- Chaque fenêtre maintient son propre contexte de travail.
- Cette indépendance s'applique à la fenêtre principale comme aux fenêtres indépendantes.

## 10.202 Présentation du menu de navigation entre fenêtres — Question 207, validée

Le menu de navigation intégré regroupe les projets par fenêtre et affiche, pour chaque fenêtre, son nom ainsi que le nom du projet actif.

- Chaque fenêtre constitue un groupe identifiable dans le menu.
- Le nom de la fenêtre et celui du projet actuellement actif sont visibles dans son entrée de navigation.
- Le menu permet de distinguer les fenêtres même lorsque plusieurs d'entre elles contiennent plusieurs projets sous forme d'onglets.
- La sélection d'une entrée permet d'activer la fenêtre correspondante, conformément aux règles générales de navigation entre fenêtres.


## 10.203 Identification des fenêtres dans la barre des tâches — Question 208, validée

Chaque fenêtre affiche le nom du projet actif en complément du nom de l'application dans la barre des tâches, lorsque le système d'exploitation permet cette personnalisation.

- L'identification reprend le projet actuellement actif dans la fenêtre concernée.
- Le nom de l'application reste identifiable en complément du nom du projet.
- Si le système d'exploitation ne permet pas de personnaliser cette présentation, l'application conserve le comportement standard disponible.

## 10.204 Minimisation indépendante des fenêtres — Question 209, validée

La minimisation d'une fenêtre ne concerne que cette fenêtre.

- Lorsqu'une fenêtre est minimisée, les autres fenêtres de MTG Card Remodeler restent dans leur état actuel.
- Cette règle s'applique à la fenêtre principale comme aux fenêtres indépendantes.
- La minimisation ne modifie pas le projet actif ni l'organisation des autres fenêtres.

## 10.205 Restauration individuelle d'une fenêtre minimisée — Question 210, validée

Lorsqu'une fenêtre minimisée est sélectionnée depuis le menu de navigation intégré, seule cette fenêtre est restaurée.

- Les autres fenêtres conservent leur état, qu'elles soient visibles, minimisées ou inactives.
- La fenêtre sélectionnée revient au premier plan et devient la fenêtre active.
- Cette action ne déclenche pas la restauration groupée des autres fenêtres minimisées.

## 10.206 Mode plein écran des fenêtres — Question 211, validée

Les fenêtres de MTG Card Remodeler restent en mode fenêtré classique et ne proposent pas de passage en plein écran.

- Cette règle s'applique à la fenêtre principale comme aux fenêtres indépendantes.
- Les fenêtres peuvent conserver leurs dimensions maximisées selon les mécanismes habituels du système, sans adopter un mode plein écran dédié.
- Aucun contrôle spécifique de bascule vers le plein écran n'est prévu.

## 10.207 Taille initiale d'une nouvelle fenêtre indépendante — Question 212, validée

Lorsqu'un onglet est détaché pour créer une nouvelle fenêtre indépendante, celle-ci reprend la dernière taille mémorisée pour les fenêtres indépendantes.

- La taille mémorisée sert de référence pour les nouvelles fenêtres indépendantes.
- La position de la nouvelle fenêtre reste déterminée par les règles de placement et de visibilité déjà définies.
- La mémorisation de la taille est commune aux fenêtres indépendantes ; elle ne remplace pas la mémorisation individuelle de la géométrie de chaque fenêtre existante.


## 10.208 Position initiale d'une nouvelle fenêtre indépendante — Question 213, validée

Une nouvelle fenêtre indépendante apparaît à une position standard définie par le système d'exploitation.

- L'application laisse le système déterminer l'emplacement initial de la fenêtre.
- Aucun décalage spécifique par rapport à la fenêtre d'origine n'est imposé.
- Cette règle concerne la position initiale ; les règles de mémorisation et de restauration des fenêtres déjà existantes restent applicables.

## 10.209 Écran d'ouverture d'une nouvelle fenêtre indépendante — Question 214, validée

Lorsqu'une nouvelle fenêtre indépendante est créée, elle s'ouvre sur l'écran principal du système d'exploitation.

- Ce choix s'applique même si le projet est détaché depuis une fenêtre située sur un autre écran.
- La sélection de l'écran principal est déterminée par le système d'exploitation.
- Les règles existantes de visibilité et de repositionnement restent applicables.

## 10.210 Regroupement des fenêtres dans la barre des tâches — Question 215, validée

Le regroupement ou la séparation des fenêtres de MTG Card Remodeler dans la barre des tâches dépend des possibilités et du comportement du système d'exploitation.

- L'application ne force pas un regroupement unique ni une entrée distincte par fenêtre.
- Lorsque le système permet de configurer ce comportement, l'application respecte les mécanismes disponibles.
- L'identification des fenêtres par le nom du projet actif, lorsque le système le permet, reste définie par la question 208.

## 10.211 Fermeture d'une fenêtre indépendante contenant un seul projet — Question 216, validée

Lorsqu'une fenêtre indépendante ne contient qu'un seul projet, sa fermeture entraîne la fermeture de ce projet, sous réserve des protections habituelles contre la perte de modifications.

- Si le projet comporte des modifications non enregistrées, les choix habituels d'enregistrement, d'abandon des modifications ou d'annulation de la fermeture sont présentés.
- Si l'utilisateur annule la fermeture, la fenêtre et son projet restent ouverts.
- Cette règle ne remplace pas le comportement déjà défini pour une fenêtre indépendante contenant plusieurs projets.

## 10.212 Restauration de l'état maximisé des fenêtres indépendantes — Question 217, validée

Au démarrage de l'application, une fenêtre indépendante est restaurée dans son dernier état d'affichage, qu'elle ait été maximisée ou non lors de la fermeture précédente.

- L'état maximisé ou non maximisé est mémorisé avec les informations de la fenêtre.
- Si la fenêtre était maximisée, elle est restaurée maximisée.
- Si elle n'était pas maximisée, sa taille et sa position sont restaurées selon les règles de géométrie déjà définies.
- Les règles de visibilité et d'adaptation aux écrans disponibles restent prioritaires lorsqu'une restauration exacte n'est plus possible.

## 10.213 Ordre des fenêtres dans le menu de navigation — Question 218, validée

Les fenêtres sont présentées dans le menu de navigation selon leur ordre de dernière activation, de la plus récemment activée à la plus ancienne.

- L'ordre reflète l'activité réelle des fenêtres ouvertes.
- Lorsqu'une fenêtre est activée, elle prend la première position du menu.
- Les autres fenêtres conservent entre elles leur ordre relatif de dernière activation.

## 10.214 Présence des fenêtres minimisées dans le menu de navigation — Question 219, validée

Toutes les fenêtres ouvertes restent accessibles dans le menu de navigation, y compris lorsqu'elles sont minimisées.

- La minimisation d'une fenêtre ne la retire pas de la liste.
- Le menu permet donc de retrouver aussi bien les fenêtres visibles que les fenêtres minimisées.
- La restauration d'une fenêtre sélectionnée suit les règles de restauration individuelle déjà définies.

## 10.215 Identification des fenêtres minimisées dans le menu — Question 220, validée

Aucun indicateur particulier ne distingue les fenêtres minimisées des autres fenêtres dans le menu de navigation.

- Les fenêtres minimisées restent présentées selon les mêmes règles que les autres fenêtres.
- Leur état n'est pas signalé par une icône, une variation typographique ou un traitement visuel dédié.

## 10.216 Actualisation du menu de navigation — Question 221, validée

Le menu de navigation est actualisé immédiatement après chaque changement de projet actif dans une fenêtre.

- Le nom du projet affiché pour une fenêtre est mis à jour dès que son projet actif change.
- L'actualisation ne dépend pas de la fermeture ou de la réouverture du menu.
- Les informations des autres fenêtres restent synchronisées avec leur propre projet actif.

## 10.217 Sélection d'une fenêtre située sur un autre bureau virtuel — Question 222, validée

Lorsque l'utilisateur sélectionne dans le menu de navigation une fenêtre située sur un autre bureau virtuel, l'application tente de basculer vers ce bureau afin d'afficher la fenêtre sélectionnée.

- L'application demande au système d'exploitation d'activer le bureau virtuel concerné lorsque cette possibilité est prise en charge.
- Le comportement effectif dépend des capacités et restrictions du système d'exploitation.
- Une fois la fenêtre accessible, elle est activée selon les règles habituelles de navigation entre fenêtres.

## 10.218 Raccourcis clavier de navigation entre fenêtres — Question 223, validée

Des raccourcis clavier dédiés permettent de passer d'une fenêtre ouverte à une autre. Ils disposent de valeurs par défaut personnalisables.

- Les raccourcis de navigation entre fenêtres sont intégrés au système de raccourcis clavier personnalisables de l'application.
- L'utilisateur peut modifier les raccourcis proposés selon les règles générales de gestion des raccourcis et de prévention des conflits.
- Ces raccourcis complètent le menu de navigation intégré et les commandes du système d'exploitation.

## 10.219 Ordre du parcours clavier entre fenêtres — Question 224, validée

Le parcours des fenêtres au clavier suit l'ordre actuellement affiché dans le menu de navigation.

- L'ordre de parcours est donc cohérent avec l'organisation visible dans le menu.
- Toute modification de l'ordre du menu est répercutée dans le parcours clavier.
- Les règles définissant l'ordre du menu, notamment l'ordre de dernière activation, restent applicables.

## 10.220 Inclusion des fenêtres minimisées dans le parcours clavier — Question 225, validée

Toutes les fenêtres ouvertes sont incluses dans le parcours clavier, y compris les fenêtres minimisées.

- Une fenêtre minimisée peut être sélectionnée au même titre qu'une fenêtre visible.
- Lorsqu'elle est effectivement activée à la fin du parcours, elle est restaurée selon les règles habituelles.
- La minimisation ne retire donc pas une fenêtre du parcours.

## 10.221 Navigation circulaire entre fenêtres — Question 226, validée

Le parcours clavier entre fenêtres est circulaire.

- Après la dernière fenêtre, le parcours revient à la première.
- Dans le sens inverse, le parcours depuis la première fenêtre revient à la dernière.
- Ce comportement reste cohérent avec l'ordre actuellement affiché dans le menu de navigation.

## 10.222 Confirmation de la fenêtre sélectionnée au clavier — Question 227, validée

Lorsqu'un raccourci clavier permet de parcourir les fenêtres, une sélection visuelle est présentée et la fenêtre n'est activée qu'après confirmation de l'utilisateur.

- Le parcours met en évidence la fenêtre actuellement sélectionnée sans l'activer immédiatement.
- L'utilisateur confirme son choix pour activer la fenêtre sélectionnée.
- Tant que le choix n'est pas confirmé, la fenêtre précédemment active conserve le focus.
- La sélection peut être parcourue selon l'ordre défini par le menu de navigation.

## 10.223 Consultation des raccourcis clavier — Question 228, validée
Les raccourcis clavier peuvent être consultés depuis une page dédiée des paramètres ainsi que depuis les menus contextuels concernés.
- La page dédiée des paramètres centralise la consultation des raccourcis disponibles.
- Les menus contextuels concernés permettent également de retrouver les raccourcis associés aux commandes qu'ils présentent.

## 10.224 Recherche dans la liste des raccourcis — Question 229, validée
La liste des raccourcis clavier propose une recherche par nom de commande.
- L'utilisateur peut saisir le nom d'une commande pour retrouver rapidement son raccourci.
- La recherche porte sur le nom de la commande ; la recherche par combinaison de touches n'est pas retenue.

## 10.225 Actions sans raccourci attribué — Question 230, validée
Une action qui ne possède pas de raccourci par défaut reste sans raccourci tant que l'utilisateur ne lui en attribue pas un.
- L'application ne génère pas automatiquement de raccourci pour ces actions.
- L'affectation d'un raccourci à une telle action relève d'une personnalisation volontaire de l'utilisateur.

## 10.226 Réinitialisation des raccourcis clavier — Question 231, validée
Les raccourcis clavier personnalisés peuvent être réinitialisés individuellement ou globalement.
- L'utilisateur peut rétablir le raccourci initial d'une commande sans modifier les autres affectations.
- Une commande permet également de réinitialiser l'ensemble des raccourcis personnalisés.

## 10.227 Export et import des raccourcis personnalisés — Question 232, validée
Les raccourcis clavier personnalisés peuvent être exportés et importés au moyen d'un fichier dédié.
- L'export permet de sauvegarder la configuration personnalisée dans un fichier distinct.
- L'import permet de transférer une configuration de raccourcis depuis un fichier dédié.

## 10.228 Gestion des conflits lors de l'importation des raccourcis — Question 233, validée

Lorsqu'un fichier de configuration importé contient des raccourcis déjà attribués à d'autres commandes dans la configuration actuelle, l'application présente les conflits et laisse l'utilisateur décider comment les résoudre.

- L'application identifie les affectations en conflit avant de finaliser l'importation.
- Les conflits sont présentés de manière compréhensible, en indiquant les commandes et les combinaisons concernées.
- L'utilisateur choisit comment résoudre chaque conflit avant de valider l'importation.
- Aucune résolution conflictuelle n'est appliquée silencieusement.

## 10.229 Gestion des raccourcis réservés par le système — Question 234, validée

Les combinaisons de touches réservées par le système d'exploitation ou impossibles à utiliser sont automatiquement interdites.

- L'application vérifie la disponibilité d'une combinaison avant de l'accepter.
- Une combinaison identifiée comme réservée ou inutilisable ne peut pas être affectée à une commande.
- L'interface explique pourquoi la combinaison ne peut pas être utilisée.
- Les restrictions réellement détectables peuvent dépendre du système d'exploitation et de ses capacités.

## 10.230 Disponibilité contextuelle des raccourcis — Question 235, validée

Un raccourci clavier fonctionne uniquement dans le contexte où la commande correspondante est disponible.

- Les commandes contextuelles ne sont exécutées que lorsque leur contexte d'utilisation est actif.
- En dehors de ce contexte, le raccourci ne déclenche pas la commande.
- Ce fonctionnement évite qu'une même combinaison produise une action inappropriée dans une autre partie de l'application.

## 10.231 Configuration commune des raccourcis — Question 236, validée

Une seule configuration de raccourcis clavier est utilisée dans l'ensemble de l'application.

- Les personnalisations sont globales et s'appliquent à tous les projets.
- Il n'existe pas de configuration distincte ou de surcharge des raccourcis propre à chaque projet.
- L'export et l'import portent sur cette configuration commune.

## 10.232 Aperçu et confirmation de la réinitialisation globale — Question 237, validée

La réinitialisation globale des raccourcis présente un aperçu des changements avant de demander confirmation à l'utilisateur.

- L'aperçu permet de prendre connaissance des affectations personnalisées qui seront remplacées par les valeurs par défaut.
- L'utilisateur confirme explicitement l'opération avant son application.
- Tant que la confirmation n'a pas été donnée, la configuration actuelle reste inchangée.
- La réinitialisation individuelle conserve le comportement général de confirmation adapté à cette opération.

## 10.233 Méthodes d'attribution des raccourcis — Question 238, validée

L'utilisateur peut attribuer un raccourci clavier selon deux méthodes : saisir directement la combinaison au clavier ou sélectionner les touches et modificateurs dans l'interface.

- La saisie directe permet d'enregistrer la combinaison souhaitée en appuyant sur les touches correspondantes.
- La sélection dans l'interface permet de composer la combinaison à partir des touches et modificateurs disponibles.
- Les deux méthodes sont proposées pour l'attribution et la modification des raccourcis.

## 10.234 Obligation d'une touche modificatrice — Question 239, validée

Tout raccourci clavier doit comporter au moins une touche modificatrice.

- Une touche seule ne peut pas être affectée comme raccourci.
- Les combinaisons doivent inclure au moins une touche modificatrice compatible, telle que Ctrl, Alt ou Maj.
- Cette règle s'applique aux raccourcis personnalisés dans l'ensemble de l'application.

## 10.235 Raccourcis à séquences successives — Question 240, validée

L'application autorise les raccourcis composés de plusieurs séquences successives, sans restriction particulière.

- Un raccourci peut être constitué de plusieurs combinaisons exécutées l'une après l'autre.
- Chaque séquence peut comporter ses propres touches et modificateurs, sous réserve des règles générales de validité des raccourcis.
- L'application doit distinguer la saisie d'une séquence complète de l'exécution immédiate d'une commande.

## 10.236 Confirmation du remplacement d'un raccourci — Question 241, validée

Le remplacement d'un raccourci déjà personnalisé nécessite une confirmation de l'utilisateur.

- Lorsqu'une modification remplace une affectation personnalisée existante, l'application demande une confirmation explicite.
- Tant que l'utilisateur n'a pas confirmé, l'affectation existante reste inchangée.
- La confirmation concerne le remplacement de l'affectation et ne supprime pas les protections contre les conflits ou les combinaisons interdites.

## 10.237 Contenu et identification des personnalisations dans l'export — Question 242, validée

Le fichier d'export contient l'ensemble des raccourcis de l'application, y compris ceux conservés par défaut, et indique explicitement lesquels ont été personnalisés.

- L'export représente la configuration complète des raccourcis.
- Chaque affectation comporte une indication permettant de distinguer une valeur par défaut d'une personnalisation de l'utilisateur.
- Cette information permet de préserver la distinction entre les réglages initiaux et les modifications lors du transfert ou de la réutilisation de la configuration.

## 10.238 Présentation graphique des raccourcis à séquences successives — Question 243, validée

Les raccourcis composés de plusieurs séquences successives sont présentés au moyen de touches graphiques représentant chaque séquence.

- Chaque combinaison est représentée visuellement par des touches distinctes.
- Les différentes séquences sont présentées dans leur ordre d'exécution.
- Cette présentation graphique permet de distinguer clairement les étapes d'un même raccourci.

## 10.239 Délai configurable entre les séquences — Question 244, validée

Le délai d'attente entre deux séquences successives d'un raccourci est configurable par l'utilisateur dans les paramètres de l'application.

- L'utilisateur peut définir la durée pendant laquelle l'application attend la séquence suivante.
- Lorsque ce délai expire sans réception d'une séquence valide, le raccourci en cours est interrompu.
- Le réglage est commun à l'ensemble de l'application, conformément à la configuration globale des raccourcis.

## 10.240 Annulation automatique d'une séquence inachevée — Question 245, validée

Une séquence de raccourci commencée mais non terminée est annulée automatiquement à l'expiration du délai d'attente configuré.

- Aucune commande d'annulation dédiée n'est nécessaire.
- L'expiration du délai met fin à l'attente de la séquence suivante.
- Une séquence interrompue ne déclenche pas la commande associée au raccourci incomplet.

## 10.241 Retour visuel pendant la saisie d'une séquence — Question 246, validée

Lorsqu'une première combinaison d'un raccourci à séquences successives est reconnue, l'application affiche les touches déjà reconnues et attend la suite.

- Le retour visuel présente les séquences déjà saisies.
- L'interface indique que le raccourci est toujours en attente de sa ou de ses séquences suivantes.
- L'attente prend fin lorsque le raccourci est complété ou lorsque le délai configuré expire.

## 10.242 Organisation des raccourcis par catégories et recherche globale — Question 247, validée

La page de gestion des raccourcis organise les commandes en catégories fonctionnelles et propose une recherche globale.

- Les catégories regroupent les commandes selon les grandes fonctions de l'application, par exemple la bibliothèque, l'éditeur, les projets ou l'impression.
- Une recherche globale permet de retrouver une commande sans devoir parcourir manuellement les catégories.
- La recherche porte sur l'ensemble des catégories.

## 10.243 Classement alphabétique des catégories de raccourcis — Question 248, validée

Les catégories fonctionnelles de la page de gestion des raccourcis sont classées par ordre alphabétique.

- L'ordre alphabétique constitue le classement de référence des catégories.
- Cet ordre est identique pour tous les utilisateurs et ne nécessite pas de personnalisation.

## 10.244 Classement des commandes selon leur importance ou leur fréquence — Question 249, validée

À l'intérieur de chaque catégorie, les commandes sont classées selon leur importance ou leur fréquence d'utilisation.

- Le classement privilégie les commandes les plus importantes ou les plus fréquemment utilisées.
- Il ne s'agit pas d'un classement alphabétique obligatoire.
- Les critères concrets de classement et leur mise en œuvre relèvent de la conception détaillée de l'interface.

## 10.245 Catégories repliables avec ouvertures multiples — Question 250, validée

Les catégories de raccourcis peuvent être repliées ou développées indépendamment, et plusieurs catégories peuvent rester ouvertes simultanément.

- L'utilisateur peut consulter plusieurs catégories en même temps.
- Le repli d'une catégorie n'impose pas de refermer les autres catégories ouvertes.

## 10.246 Identification des raccourcis personnalisés — Question 251, validée

Les raccourcis personnalisés sont distingués des raccourcis par défaut au moyen d'une icône ou d'un symbole dédié.

- L'indicateur permet d'identifier rapidement une affectation modifiée par l'utilisateur.
- Il complète les informations de raccourci sans remplacer leur représentation graphique ou textuelle.

## 10.247 Filtrage selon le type d'affectation — Question 252, validée

La page de gestion des raccourcis propose un filtre permettant d'afficher l'ensemble des raccourcis, uniquement les raccourcis personnalisés ou uniquement les raccourcis par défaut.

- Les trois états de consultation sont disponibles : tous, personnalisés et par défaut.
- Le filtre s'applique à la liste des commandes, sans modifier les affectations enregistrées.


## 10.248 Informations affichées pour chaque commande — Question 253, validée

La liste des raccourcis affiche le nom de chaque commande, le raccourci qui lui est associé et une courte description de son rôle. La catégorie reste identifiable par le regroupement de la commande dans sa catégorie fonctionnelle.

## 10.249 Consultation du détail d'une commande — Question 254, validée

La sélection d'une commande ouvre un panneau de détails intégré à la page de gestion des raccourcis. Ce panneau permet de consulter les informations détaillées sans quitter la liste.

## 10.250 Modification depuis la liste — Question 255, validée

L'utilisateur peut modifier un raccourci au moyen des deux méthodes : un bouton de modification associé à la commande ou un clic direct sur la représentation graphique du raccourci.

## 10.251 Réinitialisation individuelle d'un raccourci — Question 256, validée

La réinitialisation d'un raccourci personnalisé peut être déclenchée depuis les deux emplacements : une commande dédiée à côté du raccourci dans la liste et une commande disponible dans le panneau de détails de la commande.

## 10.252 Confirmation détaillée de la réinitialisation individuelle — Question 257, validée

Avant de rétablir la valeur par défaut d'un raccourci personnalisé, l'application demande une confirmation présentant le raccourci actuellement attribué et celui qui sera rétabli.


## 10.253 Affichage des commandes sans raccourci — Question 258, validée

Les commandes qui ne possèdent aucune affectation clavier restent affichées normalement dans la liste. Leur absence de raccourci est explicitement signalée par la mention « Aucun raccourci ». Elles ne sont pas masquées et ne nécessitent pas l'activation d'un filtre spécifique.

## 10.254 Interaction entre la recherche globale et le filtre d'affectation — Question 259, validée

La recherche globale s'applique uniquement aux commandes correspondant au filtre actuellement sélectionné (tous les raccourcis, raccourcis personnalisés ou raccourcis par défaut). La recherche ne contourne donc pas le filtre actif.

## 10.255 Réinitialisation de l'état des catégories à chaque retour sur la page — Question 260, validée

Lorsque l'utilisateur quitte la page de gestion des raccourcis puis y revient, les catégories repliables retrouvent systématiquement leur état initial. L'état ouvert ou replié précédemment choisi n'est pas conservé.

## 10.256 Réinitialisation du filtre et du texte de recherche — Question 261, validée

Lorsque l'utilisateur quitte la page de gestion des raccourcis puis y revient, le filtre d'affectation et le texte de recherche sont tous deux réinitialisés à leur valeur initiale. Leur état n'est pas conservé, y compris pendant la session.

## 10.257 Mise en évidence de la commande sélectionnée — Question 262, validée

La commande sélectionnée dans la liste est mise en évidence par une simple surbrillance de sa ligne. Aucun indicateur supplémentaire n'est ajouté à la représentation graphique du raccourci et aucun maintien forcé de la commande dans la zone visible n'est requis.

## 10.258 Position du panneau de détails des commandes — Question 263, validée

Le panneau de détails d'une commande sélectionnée est affiché à droite de la liste des commandes. La liste et le panneau sont donc présentés côte à côte dans la page de gestion des raccourcis.

## 10.259 Actualisation du panneau lors de la sélection d'une autre commande — Question 264, validée

Lorsque le panneau de détails est ouvert et que l'utilisateur sélectionne une autre commande dans la liste, le contenu du panneau est immédiatement actualisé pour afficher les informations de cette nouvelle commande. Il n'est pas nécessaire de fermer le panneau avant de changer de sélection.

## 10.260 Méthodes de fermeture du panneau de détails — Question 265, validée

Le panneau de détails peut être fermé de deux façons : au moyen de sa commande de fermeture dédiée (croix) ou en cliquant de nouveau sur la commande actuellement sélectionnée dans la liste. Les deux méthodes sont disponibles.

## 10.261 Conservation de la position de défilement de la liste — Question 266, validée

Après consultation du panneau de détails et lors du retour à la liste des commandes, la position de défilement de la liste est conservée exactement. L'utilisateur retrouve la même portion de liste et le même emplacement qu'avant la consultation.

## 10.262 Attribution directe d'un raccourci depuis le panneau pour une commande non affectée — Question 267, validée

Pour une commande qui ne possède aucun raccourci, le panneau de détails affiche une représentation vide de l'emplacement du raccourci ainsi qu'un bouton d'attribution directement accessible. L'utilisateur peut ainsi lancer l'affectation depuis le panneau sans devoir revenir à une autre commande ou à une autre zone de la page.

## 10.263 Ouverture du panneau de détails par une commande dédiée — Question 268, validée

L'ouverture du panneau de détails d'une commande s'effectue au moyen d'un bouton « Détails » dédié. Le clic sur la ligne de commande ne constitue donc pas, à lui seul, le déclencheur d'ouverture du panneau.

## 10.264 Ajustement automatique de la largeur du panneau de détails — Question 269, validée

La largeur du panneau de détails s'ajuste automatiquement en fonction de son contenu. Aucune largeur fixe ni commande de redimensionnement manuel n'est imposée par cette décision.

## 10.265 Informations présentées dans le panneau de détails — Question 270, validée

Le panneau de détails présente le nom de la commande, son raccourci clavier, sa description courte, sa catégorie fonctionnelle et son contexte d'utilisation. Il fournit ainsi les informations nécessaires pour identifier la commande et comprendre dans quelles circonstances elle est disponible.

## 10.266 Durée de conservation de la sélection après fermeture du panneau — Question 271, validée

Lorsque le panneau de détails est fermé, la commande précédemment sélectionnée peut rester mémorisée uniquement tant que l'utilisateur demeure sur la page de gestion des raccourcis. Cette sélection n'est pas conservée après avoir quitté la page.

## 10.267 Comportement du panneau lorsque la commande ne correspond plus au filtre — Question 272, validée

Si la commande affichée dans le panneau de détails ne correspond plus au filtre ou au texte de recherche actif, le panneau reste ouvert et conserve les informations de cette commande. Il affiche également un message indiquant que la commande ne correspond plus aux critères actuellement appliqués à la liste.

## 10.268 Fermeture du panneau lors d'un changement de page — Question 273, validée

Lorsque l'utilisateur quitte la page de gestion des raccourcis alors que le panneau de détails est ouvert, celui-ci se ferme automatiquement. Le panneau ne reste pas mémorisé pour une prochaine visite.

## 10.269 Contenu du message de non-correspondance — Question 274, validée

Lorsque la commande affichée dans le panneau de détails ne correspond plus au filtre ou à la recherche actifs, le message se limite à la mention « Cette commande ne correspond plus au filtre actuel ». Aucun critère d'exclusion ni aucune proposition de réinitialisation du filtre ou de la recherche ne sont ajoutés.

## 10.270 Modification d'une commande qui ne correspond plus au filtre — Question 275, validée

L'utilisateur peut modifier le raccourci d'une commande directement depuis son panneau de détails, même si cette commande ne correspond plus au filtre ou à la recherche actifs. Il n'est pas nécessaire de modifier préalablement les critères de la liste.

## 10.271 Actualisation après modification d'un raccourci depuis le panneau — Question 276, validée

Après une modification effectuée depuis le panneau de détails, l'actualisation du panneau et de la ligne correspondante dans la liste intervient après une validation explicite de l'utilisateur. La modification n'est donc pas répercutée visuellement avant cette validation.

## 10.272 Changement de sélection vers une commande hors filtre — Question 277, validée

Lorsque l'utilisateur sélectionne une autre commande alors que le panneau de détails est ouvert, le panneau affiche les informations de cette nouvelle commande, même si elle ne correspond pas au filtre ou à la recherche actifs. Le panneau signale également cette non-correspondance, sans refuser la sélection ni adapter automatiquement les critères.


## 10.273 Validation d'une modification de raccourci — Question 278, validée

La modification d'un raccourci effectuée depuis le panneau de détails est validée au moyen d'un bouton « Appliquer » dédié, présent dans ce panneau. La validation est explicite et porte sur la modification en cours.

## 10.274 Méthodes d'annulation d'une modification de raccourci — Question 279, validée

L'utilisateur peut abandonner une modification de raccourci en cours de deux façons : au moyen d'un bouton « Annuler » dédié dans le panneau ou en fermant le panneau. Dans ce dernier cas, la modification non appliquée est abandonnée. Les deux méthodes sont disponibles.

## 10.275 Refus d'une modification en cas de conflit de raccourci — Question 280, validée

Si le raccourci proposé est déjà attribué à une autre commande dans le même contexte, l'application refuse la modification et explique clairement le conflit. Elle ne remplace pas automatiquement l'affectation existante.

## 10.276 Conservation d'une modification après un échec technique de validation — Question 281, validée

Si une modification ne peut pas être appliquée pour une raison technique, l'application affiche une erreur et conserve la valeur précédente. La modification en cours reste présente dans le panneau afin que l'utilisateur puisse corriger le problème ou tenter de nouveau de l'appliquer.

## 10.277 Maintien du panneau après validation réussie d'un raccourci — Question 282, validée

Après validation réussie d'une modification, le panneau de détails reste ouvert et affiche le raccourci actualisé. L'utilisateur peut ainsi consulter immédiatement le résultat sans devoir rouvrir le panneau.


## 10.278 Activation directe du champ de raccourci pour modification — Question 283, validée

Lorsque l'utilisateur choisit de modifier un raccourci depuis le panneau de détails, le champ correspondant devient directement actif dans le panneau. La saisie peut commencer immédiatement, sans ouverture d'une fenêtre dédiée ni passage à un mode général de modification de plusieurs champs.

## 10.279 Informations présentées lors d'un conflit de raccourci — Question 284, validée

Lorsqu'un raccourci proposé est déjà attribué à une autre commande dans le même contexte, le message de conflit indique le nom de cette commande, sa catégorie fonctionnelle et son contexte d'utilisation. Ces informations permettent d'identifier précisément l'affectation qui empêche la modification.

## 10.280 Effacement de la saisie après un conflit — Question 285, validée

Lorsqu'une saisie de raccourci est refusée en raison d'un conflit, la valeur proposée est effacée du champ de modification. L'utilisateur doit recommencer la saisie pour proposer un autre raccourci.

## 10.281 Méthodes d'interruption de la capture d'un raccourci — Question 286, validée

Pendant la capture d'un raccourci, l'utilisateur peut interrompre la saisie soit en appuyant sur la touche Échap, soit en utilisant un bouton « Annuler » dédié. Les deux méthodes sont disponibles.

## 10.282 Confirmation discrète après modification réussie d'un raccourci — Question 287, validée

Après application réussie d'un nouveau raccourci, le panneau affiche la valeur actualisée et l'application présente une confirmation discrète portant le libellé « Raccourci modifié ». Cette confirmation accompagne l'actualisation sans afficher de récapitulatif détaillé de l'ancienne et de la nouvelle affectation.

## 10.283 Confirmation avant remplacement d'un raccourci déjà personnalisé — Question 288, validée

Lorsqu'un utilisateur modifie un raccourci qu'il a déjà personnalisé, l'application demande une confirmation avant de remplacer cette personnalisation. La demande permet à l'utilisateur de confirmer le remplacement ou d'y renoncer ; aucune nouvelle valeur ne remplace l'ancienne sans cette validation.

## 10.284 Annulation immédiate d'une modification de raccourci — Question 289, validée

Après l'application réussie d'une modification de raccourci, l'utilisateur peut revenir immédiatement à la valeur précédente au moyen d'une commande « Annuler » disponible juste après la modification. Cette possibilité porte sur la modification qui vient d'être effectuée et ne nécessite pas de consulter un historique général.

## 10.285 Enregistrement durable immédiat des modifications de raccourcis — Question 290, validée

Chaque modification de raccourci est enregistrée durablement dès que l'utilisateur la valide avec succès. L'enregistrement ne dépend ni de la sortie de la page de gestion des raccourcis ni de la fermeture de l'application.

## 10.286 Synchronisation immédiate des raccourcis entre les fenêtres — Question 291, validée

Lorsqu'un raccourci est modifié dans une fenêtre de l'application, la modification est immédiatement répercutée dans toutes les autres fenêtres ouvertes. Les fenêtres utilisent ainsi sans délai la même configuration de raccourcis.

## 10.287 Priorité à la première modification validée simultanément — Question 292, validée

Si plusieurs fenêtres tentent de modifier presque simultanément le raccourci d'une même commande, la première modification effectivement validée est conservée. Toute modification concurrente validée ensuite est refusée et l'application explique à l'utilisateur que la commande a déjà été modifiée.

## 10.288 Annulation limitée à la dernière modification de raccourci — Question 293, validée

La commande « Annuler » permet de revenir uniquement sur la dernière modification de raccourci effectuée. Elle ne déclenche pas une annulation en chaîne de plusieurs modifications successives.

## 10.289 Synchronisation immédiate de l'annulation entre les fenêtres — Question 294, validée

Lorsqu'une modification de raccourci est annulée, la restauration de la valeur précédente est immédiatement synchronisée dans toutes les fenêtres ouvertes de l'application.

## 10.290 Disponibilité de l'annulation jusqu'à la fermeture de l'application — Question 295, validée

La commande permettant d'annuler la dernière modification de raccourci reste disponible jusqu'à la fermeture de l'application. Sa disponibilité n'est donc pas limitée à la page de gestion des raccourcis.

## 10.291 Choix de l'utilisateur en cas de conflit lors d'une annulation — Question 296, validée

Si une modification concurrente est intervenue et que l'annulation risque de remplacer une valeur plus récente, l'application présente la situation et demande à l'utilisateur de choisir quelle valeur doit être conservée. Aucune des deux valeurs n'est écrasée silencieusement.

## 10.292 Confirmation avant restauration d'un raccourci précédent — Question 297, validée

Avant d'annuler une modification et de restaurer la valeur précédente d'un raccourci, l'application demande une confirmation explicite à l'utilisateur.

## 10.293 Informations présentées lors d'un conflit pendant une annulation — Question 298, validée

Lorsqu'un conflit apparaît pendant une annulation, le dialogue présente les deux valeurs du raccourci ainsi que le nom de la fenêtre à l'origine de chacune des modifications. Ces informations permettent d'identifier les deux modifications en concurrence. Le dialogue n'ajoute pas d'autres métadonnées obligatoires.

## 10.294 Valeur présélectionnée dans le dialogue de résolution — Question 299, validée

Dans le dialogue de résolution d'un conflit, la valeur correspondant à l'annulation demandée est présélectionnée. L'utilisateur peut choisir explicitement l'autre valeur avant de confirmer sa décision.

## 10.295 Conséquence du choix de conserver la valeur la plus récente — Question 300, validée

Si l'utilisateur choisit de conserver la valeur la plus récente, l'annulation demandée est abandonnée et cette valeur récente reste active. Aucune restauration de la valeur antérieure n'est alors effectuée.

## 10.296 Synchronisation après résolution d'un conflit — Question 301, validée

Une fois le conflit résolu par l'utilisateur, la valeur retenue est immédiatement synchronisée dans toutes les fenêtres ouvertes de l'application.

## 10.297 Comportement en cas d'annulation du dialogue de résolution — Question 302, validée

Si l'utilisateur ferme le dialogue de résolution ou choisit « Annuler », l'application revient automatiquement à la valeur précédente du raccourci. La fermeture du dialogue ne laisse donc pas subsister la valeur issue de la modification concurrente.

## 10.298 Absence d'historique des modifications de raccourcis — Question 303, validée

Aucun historique des modifications de raccourcis n'est conservé, ni temporairement ni durablement. Seule la dernière modification reste disponible pour la commande « Annuler ». Les questions complémentaires portant sur le contenu, la consultation, l'organisation et la suppression d'un historique sont donc sans objet.

## 10.299 Types de notifications — Question 304, validée

L'application signale les événements concernés par des notifications visuelles accompagnées d'un signal sonore. L'utilisateur peut désactiver les sons dans les paramètres ; cette désactivation ne supprime pas les notifications visuelles.

## 10.300 Emplacement des notifications — Question 305, validée

Les notifications internes à l'application apparaissent dans une zone dédiée située en bas de la fenêtre concernée. Elles ne sont pas positionnées à proximité de l'élément à l'origine de l'événement.

## 10.301 Durée d'affichage des notifications — Question 306, validée

Les notifications non bloquantes restent visibles quelques secondes, puis disparaissent automatiquement. Elles ne nécessitent pas de fermeture manuelle.

## 10.302 Regroupement des notifications similaires — Question 307, validée

Lorsque plusieurs notifications successives concernent le même événement, l'application les regroupe afin d'éviter leur accumulation. Les informations propres à chaque notification restent consultables dans le groupe.

## 10.303 Conservation des notifications pendant la session — Question 308, validée

Les notifications précédentes restent consultables dans l'application jusqu'à sa fermeture. Elles ne sont pas conservées après la fermeture de l'application et ne sont donc pas restaurées lors d'un lancement ultérieur.

## 10.305 Interaction avec une notification — Question 309, validée

Lorsqu'un utilisateur clique sur une notification, l'application affiche davantage de détails sur l'événement concerné sans changer de page. Ce comportement permet de consulter le contexte ou les informations complémentaires tout en conservant l'écran de travail courant.

## 10.306 Fermeture manuelle des notifications — Question 310, validée

L'utilisateur peut fermer manuellement une notification en cliquant dessus. Cette interaction entraîne sa fermeture, en complément de sa disparition automatique après la durée prévue pour les notifications non bloquantes.

## 10.307 Identification des notifications importantes — Question 311, validée

Les notifications importantes disposent d'une présentation visuelle différente des notifications ordinaires afin de mieux signaler leur importance. Leur durée d'affichage ne fait pas l'objet d'un allongement spécifique.

## 10.308 Présentation des notifications regroupées — Question 312, validée

Un groupe de notifications liées au même événement présente un résumé dans son état initial. L'utilisateur peut développer ce groupe pour consulter les informations propres à chacune des notifications qu'il contient.

## 10.309 Notifications pendant une action — Question 313, validée

Lorsqu'une action est en cours, les notifications restent discrètes et ne l'interrompent pas. Elles ne bloquent pas l'interaction en cours et ne nécessitent pas de suspendre le travail de l'utilisateur.

## 10.310 Informations présentées dans une notification — Question 314, validée

Chaque notification présente un titre, un message et les informations utiles sur l'événement concerné. Le contenu reste suffisamment synthétique pour être compris rapidement, tout en apportant le contexte nécessaire à l'utilisateur.

## 10.311 Identification de l'origine d'une notification — Question 315, validée

Lorsqu'elles sont disponibles, les notifications identifient précisément leur origine en indiquant le projet, la fenêtre et l'élément concerné. Ces informations permettent à l'utilisateur de comprendre immédiatement à quel contexte de travail le message se rapporte.

## 10.312 Affichage de l'heure dans les notifications — Question 316, validée

Les notifications affichent l'heure de leur émission, sans afficher la date. Cette indication temporelle reste limitée à l'heure.

## 10.313 Icônes des catégories de notifications — Question 317, validée

Chaque catégorie de notification dispose d'une icône qui lui est propre. La distinction repose sur la catégorie et non sur le niveau d'importance de la notification.

## 10.314 Personnalisation du contenu des notifications — Question 318, validée

Le contenu des notifications est défini par l'application. L'utilisateur ne dispose pas de paramètres permettant de personnaliser les informations affichées pour chaque catégorie.

## 10.316 Paramétrage global et par catégorie des notifications — Question 319, validée

Les paramètres de notification permettent de désactiver l'ensemble des notifications ou de sélectionner les catégories qui doivent rester actives. L'utilisateur peut ainsi conserver uniquement les catégories correspondant à ses besoins, sans devoir désactiver individuellement chaque notification.

## 10.317 Réglage du son et du volume par catégorie — Question 320, validée

Les paramètres sonores sont indépendants pour chaque catégorie de notification. L'utilisateur peut activer ou désactiver le son et régler son volume séparément pour chaque catégorie, sans imposer un réglage identique à l'ensemble des notifications.

## 10.318 Affichage prioritaire des notifications importantes — Question 321, validée

Un réglage spécifique permet à l'utilisateur de décider si les notifications importantes doivent rester affichées même lorsque leur catégorie est désactivée dans les paramètres généraux. Ce comportement prioritaire est contrôlé par ce réglage dédié et ne s'applique pas implicitement lorsque l'option est désactivée.

## 10.319 Adaptation de la lisibilité des notifications — Question 322, validée

L'affichage des notifications doit pouvoir adapter le texte et les contrastes afin d'améliorer leur lisibilité. Ces adaptations concernent la présentation visuelle des messages et doivent préserver leur contenu et leur compréhension.

## 10.320 Limitation des notifications répétitives — Question 323, validée

Lorsque des événements identiques se répètent pendant une courte période, l'application limite leur multiplication à l'écran ou regroupe les notifications correspondantes. Ce mécanisme vise à éviter les répétitions excessives tout en préservant l'accès aux informations utiles sur les événements concernés.

## 10.322 Organisation des paramètres de l'application — Question 324, validée

Les paramètres de l'application sont répartis sur plusieurs pages, chacune consacrée à une grande catégorie fonctionnelle. Cette organisation permet de regrouper les réglages liés entre eux et d'éviter une page unique trop dense.

## 10.323 Validation des modifications de paramètres — Question 325, validée

Les modifications apportées aux paramètres ne sont pas appliquées immédiatement. L'utilisateur doit les confirmer au moyen d'un bouton « Appliquer » dédié. Tant que cette validation n'a pas été effectuée, les changements en attente ne remplacent pas les valeurs précédemment appliquées.

## 10.324 Stockage des paramètres généraux — Question 326, validée

Les paramètres généraux sont enregistrés localement sur l'ordinateur et s'appliquent à l'installation actuelle de l'application. Ils ne sont pas synchronisés au moyen d'un profil utilisateur distant et ne sont pas intégrés aux projets.

## 10.325 Recherche globale dans les paramètres — Question 327, validée

Une recherche globale permet de retrouver un paramètre à partir de son nom ou de termes associés. Les résultats donnent un accès direct à la page et au réglage correspondant, afin d'éviter à l'utilisateur de parcourir manuellement toutes les catégories.

## 10.326 Réinitialisation des paramètres — Question 328, validée

L'utilisateur peut réinitialiser un paramètre individuellement, réinitialiser l'ensemble des paramètres d'une catégorie ou effectuer une réinitialisation globale. Avant toute réinitialisation, l'application présente un aperçu des changements prévus et demande une confirmation explicite.

## 10.327 Langue de l'interface — Question 329, validée

L'application propose plusieurs langues d'interface. L'utilisateur choisit manuellement la langue souhaitée dans les paramètres ; aucune détection ou sélection automatique de la langue du système n'est imposée.

## 10.328 Thèmes visuels de l'application — Question 330, validée

L'application propose un thème sombre et un thème clair, ainsi qu'un mode automatique qui adapte le thème utilisé à la préférence correspondante du système d'exploitation.

## 10.329 Mise à l'échelle générale de l'interface — Question 331, validée

L'utilisateur peut régler librement le facteur d'échelle général de l'interface afin d'adapter la taille des éléments à ses préférences et à son écran. Ce réglage est distinct de la résolution et des dimensions physiques de la fenêtre.

## 10.330 Vérification et téléchargement des mises à jour — Question 332, validée

L'application vérifie automatiquement la disponibilité de nouvelles versions. Lorsqu'une mise à jour est proposée, son téléchargement peut être lancé par l'utilisateur ; l'installation reste toujours soumise à une validation explicite et n'est jamais effectuée automatiquement.

## 10.331 Écran affiché au démarrage — Question 333, validée

Au démarrage, l'application affiche une page d'accueil présentant les projets récents et les principales actions disponibles. Cette page constitue le point d'entrée initial, plutôt que la réouverture directe de la dernière fenêtre utilisée.

## 10.332 Gestion du cache des ressources — Question 334, validée

Le cache des ressources est géré automatiquement par l'application, avec des réglages avancés permettant à l'utilisateur de définir une limite de stockage. L'application adapte son fonctionnement à cette limite et gère le renouvellement ou la libération des éléments mis en cache sans nécessiter une intervention constante.

## 10.333 Exécution des rendus en arrière-plan — Question 335, validée

Les tâches de rendu sont lancées automatiquement dès qu'elles sont nécessaires, y compris lorsque la fenêtre concernée ou l'application n'est pas au premier plan. Le fonctionnement en arrière-plan ne dépend pas de l'activation de la fenêtre.

## 10.334 Traitement simultané des cartes — Question 336, validée

Le nombre maximal de cartes traitées simultanément est configurable par l'utilisateur. L'application respecte cette limite lors des opérations par lots et organise les tâches restantes en attente.

## 10.335 Limitation de la mémoire vive — Question 337, validée

L'utilisateur peut définir une limite de mémoire vive que l'application doit respecter autant que possible. La gestion des ressources doit tenir compte de cette limite afin de réduire les risques de saturation et de préserver la stabilité de l'application.

## 10.336 Suivi détaillé des performances — Question 338, validée

Un panneau consultable présente des informations détaillées sur les performances, notamment la consommation de mémoire vive, l'activité du moteur de rendu et les tâches en cours. Ces informations permettent à l'utilisateur de comprendre l'activité de l'application et d'identifier les opérations susceptibles d'affecter sa réactivité.

## 10.338 Vérification régulière de l'intégrité des données — Question 339, validée

L'application effectue des vérifications automatiques régulières de l'intégrité de ses données. L'utilisateur peut également lancer manuellement un contrôle à tout moment. Les contrôles doivent signaler les anomalies détectées et permettre d'en comprendre la portée.

## 10.339 Récupération des projets endommagés — Question 340, validée

Lorsqu'un fichier de projet semble endommagé, l'application propose automatiquement une procédure de récupération à partir des données disponibles. Le fichier original est conservé intact : la récupération ne doit jamais l'écraser ni le modifier silencieusement.

## 10.340 Restauration et validation des opérations sensibles — Question 341, validée

Avant toute opération susceptible de modifier un volume important de données, l'application crée automatiquement un point de restauration et présente un récapitulatif des changements prévus. L'opération ne démarre qu'après validation explicite de l'utilisateur.

## 10.341 Vérification approfondie des fichiers importés — Question 342, validée

Les fichiers importés depuis des sources externes font l'objet d'une vérification approfondie du format, de la cohérence des données et des éléments potentiellement suspects. L'application signale les anomalies et laisse l'utilisateur décider de poursuivre ou non l'importation.

## 10.342 Journal détaillé des opérations importantes — Question 343, validée

L'application conserve un journal détaillé des opérations importantes, des erreurs et des modifications significatives. Ce journal est consultable directement dans l'application afin de faciliter le diagnostic, la traçabilité et la compréhension des événements affectant les données.

## 10.343 Chapitres restant à développer

- Illustrations et versions alternatives.
- Éditions et symboles.
- Export individuel et par lots.
- Interface et ergonomie détaillées.
- Paramètres généraux.
- Performances.
- Tests et critères de validation.
- Architecture technique détaillée.

- Illustrations et versions alternatives.
- Éditions et symboles.
- Export individuel et par lots.
- Interface et ergonomie détaillées.
- Paramètres généraux.
- Performances.
- Tests et critères de validation.
- Architecture technique détaillée.

- Illustrations et versions alternatives.
- Éditions et symboles.
- Export individuel et par lots.
- Interface et ergonomie détaillées.
- Paramètres généraux.
- Performances.
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

**Version actuelle : V3.43**

Cette version consolide les décisions validées jusqu'à la question 343 incluse. Elle confirme la gestion complète des decks et des projets indépendants, valide le moteur de rendu et le système d'export des cartes en PNG, JPEG, SVG et PDF, puis ajoute la préparation complète des feuilles d'impression : formats papier courants et personnalisés, disposition automatique ou manuelle, marges et repères, recto-verso, cartes à plusieurs faces, inclusion automatique des tokens associés, impression séparée des versos sur une seule face, prévisualisation des feuilles et profils d'impression réutilisables. Elle valide également la gestion de travaux d'impression enregistrables et réutilisables, conservant les cartes, quantités, tokens, profils, paramètres, modifications manuelles, prévisualisations et états de préparation, ainsi qu'un historique des impressions effectuées permettant de consulter les configurations, contenus, feuilles générées, avertissements, erreurs et résultats, puis de dupliquer une ancienne préparation pour la réutiliser. Elle définit également la génération des fichiers d'impression dans le format choisi, le choix du dossier de destination et la remise du fichier à l'utilisateur, qui en assure ensuite seul la gestion en dehors de l'application. Enfin, elle ajoute la génération d'un fichier unique ou de plusieurs fichiers, le découpage par deck, groupe, recto/verso ou planche/page, une prévisualisation de la liste des fichiers à produire et des réglages avancés d'optimisation de la qualité et du poids des PDF, inspirés des outils d'export des logiciels de publication assistée par ordinateur. Elle ajoute la prise en charge guidée des normes PDF/X-1a et PDF/X-4 lorsque le moteur le permet, un export PDF haute qualité sans norme PDF/X imposée, l'import et l'utilisation de profils ICC personnalisés, ainsi qu'un contrôle préalable de conformité avec rapport, signalement des incompatibilités et distinction entre contrôles effectués et conformité réellement vérifiée. La question 41 ajoute les formats de sortie complémentaires PDF avec calques lorsque pris en charge, TIFF, PNG, JPEG et SVG, ainsi qu'un regroupement ponctuel des fichiers sélectionnés dans une archive ZIP ; le PDF interactif est explicitement exclu. La question 42 valide des profils d'export personnalisables et réutilisables pour les formats TIFF, PNG, JPEG et SVG, avec des paramètres adaptés à chaque format. La question 43 ajoute la gestion des métadonnées des fichiers exportés, avec des champs descriptifs, des valeurs communes ou propres à chaque carte et un contrôle de leur intégration selon les formats. La question 44 définit la préparation des bords de carte avec fonds perdus configurables, extension automatique de matière adaptée au contenu pour limiter les bords blancs, zones de sécurité, limites physiques et repères de coupe personnalisables. La question 45 valide la préparation de tracés vectoriels pour la découpe assistée par machine, avec paramètres de compensation, prévisualisation, contrôles géométriques, exports compatibles et profils réutilisables. La question 46 étend ces possibilités aux formes physiques personnalisées : contours extérieurs libres ou prédéfinis, découpes intérieures, édition et importation vectorielles, adaptation des compositions, fonds perdus, zones de sécurité et tracés de découpe, ainsi que modèles de formes réutilisables. La question 47 valide un contrôle qualité automatique avant génération des fichiers d'impression et de découpe, couvrant les dimensions, fonds perdus, zones de sécurité, ressources, résolutions, paramètres colorimétriques et géométrie des tracés, avec rapports détaillés, niveaux de gravité, propositions de correction soumises à validation et traçabilité des contrôles effectués. La question 48 valide une sélection ponctuelle des contrôles qualité à effectuer en fin de préparation, au moyen de cases à cocher regroupées par catégorie et d'un bouton « Lancer les contrôles » ; seuls les contrôles sélectionnés et applicables sont exécutés, sans création de profils de contrôle qualité enregistrables. La question 49 précise que toutes les cases de contrôle qualité sont décochées par défaut ; une option glissante « Se rappeler de mes préférences », désactivée par défaut, permet de mémoriser et reproposer les choix précédents sans créer de profils de contrôle. La question 50 fixe le lancement des contrôles qualité juste avant la génération des fichiers, après la préparation et la sélection des vérifications, avec prise en compte des erreurs bloquantes, avertissements, corrections et rapports potentiellement obsolètes. La question 51 impose une confirmation manuelle distincte après consultation du rapport de contrôle qualité : l'utilisateur doit cliquer sur « Générer les fichiers », sans démarrage automatique même si aucun problème bloquant n'est détecté. La question 52 prévoit l'affichage du rapport qualité dans une fenêtre séparée, puis le retour à l'écran principal pour la confirmation manuelle de génération. La question 53 limite la conservation du rapport au travail en cours : un nouveau contrôle remplace le rapport précédent, sans archivage des rapports antérieurs. La question 54 impose une confirmation avant fermeture de la fenêtre du rapport, avec possibilité d'annuler ou de confirmer sans déclencher la génération. La question 55 précise que cette confirmation rappelle que le rapport restera accessible depuis l'écran principal et propose les choix « Fermer » et « Annuler », sans archivage ni déclenchement de la génération. La question 56 prévoit un accès discret au rapport courant depuis la page d'aperçu du projet concerné, sans bouton permanent dans l'écran principal. La question 57 ajoute un indicateur discret précisant si le contrôle est réussi, comporte des avertissements, présente des erreurs bloquantes ou est obsolète. La question 58 associe une icône dédiée à chacun de ces quatre états, tout en conservant le libellé textuel. La question 59 confirme que seul le dernier rapport qualité du travail en cours est conservé : les rapports remplacés ne sont pas archivés et aucun historique autonome n'est créé. La question 60 précise que chaque projet conserve son propre rapport qualité courant, indépendant des autres projets. La question 61 confirme que la suppression d'un projet entraîne la suppression définitive de son rapport qualité courant. La question 62 garantit que le rapport reste associé au projet et conserve son contenu lorsque celui-ci est renommé. La question 63 précise que la duplication d'un projet ne copie pas son rapport qualité courant : le projet dupliqué commence sans rapport et doit lancer ses propres contrôles. La question 64 confirme que le rapport qualité courant est exclu de l'export/import d'un projet ; le projet importé commence sans rapport et doit effectuer ses propres contrôles. La question 65 précise que la restauration d'une sauvegarde rétablit le projet sans son rapport qualité courant ; de nouveaux contrôles doivent être effectués. La question 66 confirme que les rapports qualité courants des projets sont conservés à la fermeture de l'application et restent accessibles lors de sa prochaine ouverture. La question 67 prévoit la détection des modifications susceptibles d'affecter les contrôles qualité après réouverture et le marquage automatique du rapport courant comme obsolète. La question 68 étend cette détection aux modifications pertinentes des ressources et dépendances effectivement utilisées par le projet. La question 69 prévoit que la suppression, le déplacement ou la perte d'accès à une ressource utilisée rend automatiquement le rapport qualité courant obsolète, même si son incidence exacte sur les contrôles ne peut être établie. La question 70 prévoit la consultation, depuis l'aperçu du projet, des causes détectées de l'obsolescence et des éléments concernés, avec indication des limites de détection. La question 71 prévoit de conserver toutes les causes successives depuis le dernier contrôle qualité, jusqu'à leur remplacement avec le rapport courant lors d'un nouveau contrôle. La question 72 impose d'enregistrer la date et l'heure de détection de chaque cause d'obsolescence afin de rendre leur chronologie consultable, y compris après fermeture et réouverture de l'application. La question 73 permet de regrouper les causes similaires tout en conservant chaque événement et son horodatage individuel. La question 74 confirme que toutes les causes sont présentées dans une liste unique, sans filtres par catégorie. La question 75 confirme que le rapport qualité reste consultable uniquement dans l'application, sans fonction d'export externe. La question 76 prévoit un résumé comparatif avant le remplacement d'un rapport qualité courant, avec validation explicite de l'utilisateur. La question 77 limite cette comparaison à un résumé global, sans accès au détail carte par carte ou élément par élément. La question 78 précise que ce résumé est temporaire et disparaît après le remplacement confirmé du rapport courant. La question 79 définit son affichage directement dans la boîte de dialogue de confirmation, sans fenêtre dédiée. La question 80 prévoit l'enregistrement direct du premier rapport qualité, sans dialogue supplémentaire, lorsqu'aucun rapport précédent n'existe. La question 81 précise qu'en cas d'annulation du remplacement après comparaison, le nouveau rapport est abandonné et devra être recalculé lors d'un prochain contrôle ; seul le rapport courant est conservé. La question 82 précise qu'après cette annulation, l'application revient à l'écran précédent sans afficher de notification. La question 83 précise que l'état d'obsolescence de l'ancien rapport et les causes associées sont réinitialisés après cette annulation, tandis que son contenu et ses résultats sont conservés. La question 84 précise qu'aucune indication particulière ne signale que ce rapport provient d'un contrôle antérieur. La question 85 précise qu'après confirmation du remplacement du rapport qualité, l'application revient directement à l'écran précédent sans confirmation supplémentaire. La question 86 précise qu'en cas d'échec technique du remplacement, un message d'erreur explicite est affiché et l'ancien rapport qualité est conservé sans modification. La question 87 ajoute un bouton « Réessayer » permettant de relancer immédiatement le remplacement, sans recalculer inutilement les contrôles si le nouveau rapport temporaire est toujours disponible. La question 88 confirme que ce rapport temporaire est conservé durablement après abandon des tentatives, y compris après fermeture et réouverture complète de l'application, afin de permettre la reprise ultérieure ; il reste distinct du rapport courant et est supprimé avec le projet associé. La question 89 valide un double signalement de ce rapport temporaire en attente : un indicateur discret dans l'aperçu du projet et une proposition automatique de reprise à chaque ouverture du projet, sans déclenchement automatique du remplacement. La question 90 précise que cette proposition prend la forme d'un panneau discret intégré à la page d'aperçu du projet, sans fenêtre modale ; la reprise nécessite toujours une action explicite de l'utilisateur. La question 91 ajoute l'affichage, dans ce panneau, de la date et de l'heure du dernier échec technique de remplacement, information conservée avec le rapport temporaire et mise à jour à chaque nouvel échec. La question 92 valide la conservation de l'historique des échecs techniques successifs de remplacement, chacun accompagné de sa date et de son heure, et sa consultation depuis le panneau de reprise. La question 93 limite cet historique aux 20 échecs techniques les plus récents ; les entrées plus anciennes sont supprimées au fur et à mesure de l'ajout de nouveaux échecs. La question 94 définit la présentation de cet historique dans le panneau de reprise : seuls les trois événements les plus récents y sont affichés directement, avec un bouton « Voir l'historique complet » pour accéder à l'ensemble des événements conservés. La question 95 précise que l'historique complet s'ouvre dans une fenêtre séparée. La question 96 prévoit l'affichage du motif ou du détail technique de chaque échec dans cet historique, lorsque cette information est disponible. La question 97 ajoute une commande de copie individuelle pour chaque détail technique disponible dans la fenêtre d'historique. La question 98 prévoit l'affichage temporaire et discret du libellé « Copié » près du bouton concerné après une copie réussie. La question 99 confirme que l'historique complet conserve un ordre fixe, du plus récent au plus ancien, sans possibilité de tri. La question 100 précise qu'aucun numéro d'ordre n'est affiché pour les échecs : seules leurs informations, dates, heures et détails techniques disponibles sont présentés. La question 101 définit une présentation compacte de l'historique complet sous forme de liste, avec les informations de chaque échec directement sur sa ligne. La question 102 prévoit un aperçu court des détails techniques longs, que l'utilisateur peut développer individuellement pour consulter le contenu intégral. La question 103 précise que le détail complet apparaît sous l'aperçu, qui reste visible. La question 104 autorise le développement simultané de plusieurs détails, chacun conservant son état indépendamment des autres pendant la consultation. La question 105 précise que tous les détails sont refermés à chaque fermeture de la fenêtre et ne sont pas restaurés lors de sa réouverture. La question 106 impose également un retour en haut de la liste à chaque réouverture, sans mémoriser la position de défilement précédente. La question 107 confirme que l'historique complet ne comporte aucun champ de recherche et conserve uniquement sa liste chronologique. La question 108 précise qu'aucun compteur du nombre total d'échecs conservés n'est affiché, sans modifier la limite de conservation de 20 événements. La question 109 prévoit qu'en l'absence de tout échec enregistré, la fenêtre d'historique présente simplement une liste vide, sans message spécifique. La question 110 fixe la taille de cette fenêtre dans l'application et exclut tout redimensionnement manuel par l'utilisateur. La question 111 autorise l'utilisateur à déplacer librement la fenêtre à l'écran, sans modifier sa taille. La question 112 prévoit la mémorisation de sa dernière position et sa restauration à l'ouverture suivante. La question 113 précise que si cette position n'est plus visible sur les écrans disponibles, l'application replace automatiquement la fenêtre à un emplacement entièrement visible sur un écran disponible. La question 114 confirme que cette position mémorisée est commune à tous les projets et qu'aucune position distincte n'est conservée par projet. La question 115 précise que la fenêtre d'historique se comporte comme une fenêtre classique et ne reste pas automatiquement au premier plan ; les autres fenêtres de l'application peuvent la recouvrir. La question 116 valide sa fermeture immédiate, sans dialogue de confirmation, tout en préservant les événements enregistrés. La question 117 prévoit qu'à la fermeture de cette fenêtre, le focus revient automatiquement à la fenêtre de l'application qui était active juste avant son ouverture. La question 118 précise que si l'utilisateur demande d'ouvrir à nouveau l'historique alors que sa fenêtre est déjà ouverte, l'application ramène cette fenêtre existante au premier plan sans en créer une seconde. La question 119 précise que cette réactivation conserve l'état de consultation en cours, notamment la position de défilement et les détails techniques développés ou refermés. La question 120 précise qu'après une fermeture réelle de la fenêtre suivie d'une nouvelle ouverture, l'historique revient en haut de la liste et tous les détails techniques sont refermés ; l'état de consultation précédent n'est pas restauré. La question 121 précise qu'après cette nouvelle ouverture, la fenêtre d'historique apparaît automatiquement au premier plan et reçoit immédiatement le focus. La question 122 précise qu'à sa fermeture, si plusieurs fenêtres de l'application sont ouvertes, le focus revient à celle qui était active juste avant l'ouverture de l'historique, plutôt que de revenir systématiquement à la fenêtre principale. La question 123 précise que si cette fenêtre a été fermée entre-temps, l'application restitue le focus à la dernière autre fenêtre encore ouverte qui avait été active auparavant. La question 124 précise que si aucune des fenêtres précédemment actives n'est encore ouverte, l'application donne le focus à sa fenêtre principale. La question 125 précise que lorsque l'historique est ouvert depuis une fenêtre secondaire, cette fenêtre d'origine devient la destination prioritaire pour la restitution du focus à la fermeture de l'historique, même si une autre fenêtre était active juste avant l'ouverture ; si cette fenêtre secondaire a été fermée entre-temps, les règles de repli précédentes s'appliquent. La question 126 confirme que cette priorité est maintenue même si la fenêtre secondaire d'origine est devenue inactive pendant la consultation : si elle est toujours ouverte à la fermeture de l'historique, elle récupère le focus. La question 127 précise que si cette fenêtre secondaire est fermée pendant la consultation puis recréée avant la fermeture de l'historique, la nouvelle fenêtre correspondant à cette même fenêtre secondaire reprend la priorité pour la restitution du focus ; à défaut, les règles de repli précédentes s'appliquent. La question 128 précise que si plusieurs instances correspondantes sont recréées, la plus récemment créée récupère le focus à la fermeture de l'historique, si elle est toujours ouverte. La question 129 précise que si cette instance la plus récente est fermée avant la fermeture de l'historique, l'application applique directement les règles générales de repli, sans rechercher une instance correspondante plus ancienne. La question 130 confirme que, dans ce cas, le focus revient à la dernière fenêtre de l'application qui était active avant l'ouverture de l'historique, si elle est toujours ouverte ; si aucune fenêtre précédemment active n'est encore ouverte, la fenêtre principale récupère le focus. La question 131 précise qu'une fenêtre secondaire fermée puis recréée pendant que l'historique est ouvert ne peut pas être retenue comme fenêtre de repli : l'application recherche la dernière autre fenêtre précédemment active encore ouverte dont l'instance n'a pas été recréée ; à défaut, la fenêtre principale récupère le focus. La question 132 précise que si la dernière fenêtre admissible est elle-même fermée, l'application poursuit progressivement la recherche vers les fenêtres précédemment actives suivantes, dans l'ordre inverse de leur activation, jusqu'à trouver une fenêtre admissible encore ouverte ; si aucune ne subsiste, la fenêtre principale récupère le focus. La question 133 précise qu'une fenêtre admissible minimisée reste éligible : l'application la restaure automatiquement et lui donne le focus lorsqu'elle constitue la destination prioritaire ou la première fenêtre admissible dans l'ordre de repli. L'état minimisé ne la rend donc pas indisponible ; les règles d'exclusion des fenêtres fermées ou recréées restent inchangées. La question 134 précise qu'une fenêtre admissible masquée derrière une autre fenêtre de l'application reste éligible : l'application la ramène au premier plan et lui restitue le focus lorsqu'elle est sélectionnée comme destination prioritaire ou dans l'ordre de repli. La question 135 prévoit que si la fenêtre admissible se trouve sur un écran différent de celui de l'historique, l'application la déplace sur l'écran de l'historique avant de lui restituer le focus. La question 136 précise qu'une fenêtre située sur un autre bureau virtuel est considérée comme indisponible : l'application ne change pas de bureau virtuel et poursuit la recherche vers une autre fenêtre admissible sur le bureau courant ; à défaut, la fenêtre principale récupère le focus. La question 137 précise que si aucune fenêtre secondaire admissible ne peut récupérer le focus, la fenêtre principale conserve son écran actuel et n'est pas déplacée vers celui de l'historique. La question 138 précise qu'une fenêtre admissible dont l'écran est déconnecté reste éligible : l'application la déplace vers l'écran de l'historique puis lui restitue le focus. La question 139 prévoit qu'après un changement de résolution rendant une fenêtre admissible partiellement ou totalement invisible, l'application la repositionne pour qu'elle soit entièrement visible avant de lui restituer le focus ; si son écran n'est plus disponible, elle applique la règle de déplacement vers l'écran de l'historique. La question 140 précise que si l'écran de la fenêtre principale est déconnecté et qu'aucune fenêtre secondaire admissible ne peut récupérer le focus, l'application déplace la fenêtre principale vers l'écran de l'historique avant de lui restituer le focus. La question 141 prévoit que si l'écran de l'historique est lui-même déconnecté, une fenêtre admissible dont l'écran d'origine n'est plus disponible est déplacée vers l'écran disponible qui contient la plus grande partie de la fenêtre principale. La question 142 précise que toute nouvelle position résultant d'un déplacement ou repositionnement automatique est mémorisée et devient la position de référence pour les prochaines ouvertures de la fenêtre concernée. La question 143 définit l'écran principal du système d'exploitation comme critère de départage lorsque plusieurs écrans de repli sont à égalité. La question 144 précise qu'un déplacement manuel postérieur à un repositionnement automatique remplace la position mémorisée. La question 145 prévoit qu'au retour d'un écran précédemment déconnecté, les fenêtres concernées sont automatiquement restaurées sur leur écran d'origine et à leur position antérieure, sous réserve des règles de visibilité ; les informations de retour sont conservées séparément de la position de repli. La question 146 précise que chaque fenêtre est restaurée indépendamment, sans préserver les positions relatives entre fenêtres. La question 147 prévoit qu'en cas de résolution différente, la position et les dimensions sont recalculées pour conserver les proportions et la position relative de chaque fenêtre dans l'écran, tout en garantissant sa visibilité complète. La question 148 confirme que cette restauration ne modifie pas la fenêtre active et ne déclenche aucune restitution automatique du focus. La question 149 précise que lors de déconnexions répétées au cours d'une même session, la position de référence reste celle enregistrée avant la première déconnexion de la séquence. La question 150 prévoit que les nouvelles dimensions et la nouvelle position résultant d'un redimensionnement manuel sur l'écran de repli sont mémorisées, sans remplacer les informations de retour vers l'écran d'origine. La question 151 prévoit que si l'application est relancée alors que l'écran d'origine reste indisponible, les fenêtres concernées sont replacées dès le lancement sur l'écran principal du système d'exploitation, tout en conservant les informations nécessaires à leur restauration ultérieure sur l'écran d'origine. La question 152 précise que si l'écran d'origine redevient disponible après le lancement de l'application, la restauration est différée à la prochaine ouverture de l'application. La question 153 confirme qu'un déplacement ou redimensionnement manuel sur l'écran de repli ne remplace pas les informations de retour enregistrées avant la déconnexion ; seules les données propres à la position de repli sont actualisées. La question 154 prévoit que si l'écran d'origine redevient disponible alors que l'application est minimisée ou en arrière-plan, la restauration attend la réactivation de l'application par l'utilisateur. La question 155 précise que lorsque plusieurs écrans précédemment déconnectés redeviennent disponibles simultanément alors que l'application est active, toutes les fenêtres concernées sont restaurées simultanément. La question 156 définit, lorsque la restauration a été différée pendant l'inactivité de l'application, un ordre chronologique fondé sur l'ordre de déconnexion des écrans : les fenêtres de l'écran déconnecté en premier sont restaurées en premier. La question 157 confirme que si l'utilisateur a déplacé manuellement une fenêtre sur l'écran de repli avant le retour de son écran d'origine, la fenêtre est malgré tout restaurée sur son écran d'origine ; les informations de retour restent prioritaires. La question 158 précise que si l'écran d'origine se reconnecte puis se déconnecte à nouveau avant la réactivation de l'application, une nouvelle séquence de déconnexion est enregistrée avec la position actuelle de la fenêtre comme référence de restauration. La question 159 confirme que plusieurs fenêtres restaurées sur un même écran retrouvent exactement leurs positions et dimensions mémorisées, même si elles se chevauchent ; aucun réagencement automatique n'est effectué pour éviter ce chevauchement. La question 160 prévoit que si l'écran d'origine revient avec une résolution trop faible, chaque fenêtre est réduite proportionnellement jusqu'à être entièrement visible. La question 161 précise que les dimensions initiales d'une fenêtre, avant une réduction imposée par une résolution insuffisante, sont conservées comme référence pour les restaurations ultérieures. La question 162 prévoit que si la résolution de l'écran d'origine augmente ultérieurement, l'application recalcule automatiquement les dimensions de la fenêtre pour retrouver celles permises par la nouvelle résolution, en s'appuyant sur les dimensions de référence conservées. La question 163 confirme qu'un redimensionnement manuel effectué après la restauration d'une fenêtre sur son écran d'origine remplace les dimensions de référence précédemment mémorisées. La question 164 prévoit que lorsqu'un changement de résolution est détecté pendant que l'application est active, les dimensions des fenêtres concernées sont adaptées immédiatement. La question 165 confirme que les positions et dimensions calculées après une augmentation de résolution sont respectées même si les fenêtres se chevauchent, sans réagencement automatique. La question 166 précise qu'aucune taille minimale n'est imposée lors d'une réduction nécessaire : la visibilité complète reste prioritaire, même si la fenêtre devient très petite. La question 167 précise que les fenêtres sont adaptées immédiatement aux changements de résolution même lorsque l'application est minimisée ou en arrière-plan. La question 168 prévoit qu'en cas de changements successifs avant adaptation, l'application utilise directement la dernière résolution détectée, sans traiter les résolutions intermédiaires. La question 169 confirme que lorsqu'un écran retrouve une résolution antérieure, les dimensions des fenêtres sont recalculées à partir de leurs dimensions de référence mémorisées. La question 170 prévoit qu'une déconnexion d'écran pendant une adaptation interrompt cette adaptation et déclenche les règles de déconnexion et de repli. La question 171 confirme que les dimensions des fenêtres sont calculées indépendamment selon la résolution de leur écran respectif. La question 172 donne la priorité au changement de résolution : si l'utilisateur déplace ou redimensionne une fenêtre au moment où ce changement est détecté, l'action manuelle est interrompue et la fenêtre est immédiatement adaptée. La question 173 valide une navigation principale combinant une barre latérale permanente et des commandes contextuelles en haut de l'interface. La question 174 prévoit l'ouverture de plusieurs projets dans des onglets de la fenêtre principale. La question 175 rend les panneaux de l'éditeur librement déplaçables et redimensionnables. La question 176 prévoit une disposition générale commune à tous les projets. La question 177 valide un système de raccourcis clavier entièrement personnalisable, permettant de modifier les raccourcis existants et d'en créer pour les actions prises en charge. La question 178 prévoit l'enregistrement automatique de la disposition commune des panneaux à chaque déplacement ou redimensionnement. La question 179 impose une confirmation avant de rétablir la disposition initiale. La question 180 prévoit que la demande d'ouverture d'un projet déjà ouvert active son onglet existant au lieu de créer un doublon. La question 181 impose une demande de décision lors de la fermeture d'un projet comportant des modifications non enregistrées, avec possibilité d'enregistrer, d'abandonner les modifications ou d'annuler la fermeture. La question 182 interdit l'attribution d'un même raccourci clavier à plusieurs actions et demande à l'utilisateur d'en choisir un autre en cas de conflit. La question 183 permet de réorganiser librement les onglets de projets par glisser-déposer. La question 184 ajoute un indicateur discret dans l'onglet d'un projet comportant des modifications non enregistrées. La question 185 ajoute les commandes « Fermer les autres onglets » et « Fermer tous les onglets », en conservant les protections contre la perte de modifications. La question 186 prévoit qu'au démarrage, l'application présente la liste des projets précédemment ouverts et laisse l'utilisateur choisir ceux à restaurer. La question 187 impose une demande de confirmation individuelle pour chaque projet comportant des modifications non enregistrées lors de la fermeture complète de l'application. Les questions 188 à 192 complètent la gestion des projets en onglets : conservation de leur ordre personnalisé après redémarrage, identification visuelle renforcée de l'onglet actif, combinaison du défilement horizontal et d'un menu de sélection lorsque la barre est saturée, menu contextuel proposant les commandes utiles et détachement libre d'un projet dans une fenêtre indépendante. Les questions 193 à 197 complètent la gestion multi-fenêtres : réintégration d'un projet détaché par glisser-déposer ou commande de menu, possibilité d'héberger plusieurs projets en onglets dans une fenêtre indépendante, mémorisation automatique de la taille et de la position de chaque fenêtre, restauration au démarrage du mode d'affichage utilisé lors de la session précédente et fermeture coordonnée de toutes les fenêtres lors de la fermeture de l'application, avec les confirmations individuelles habituelles pour les projets modifiés.
Ce document constitue une base de référence pour les prochaines étapes de conception. Les fonctionnalités ne doivent pas être considérées comme implémentées tant qu'elles n'ont pas été développées et testées dans l'application. Les questions 198 à 202 complètent la gestion multi-fenêtres : identification des fenêtres indépendantes par le nom du projet et de l'application, navigation à la fois par les commandes du système et par un menu intégré, synchronisation configurable des informations communes de l'interface, choix explicite lorsqu'un projet est déjà ouvert dans une autre fenêtre et choix entre fermeture ou réintégration des projets lors de la fermeture d'une fenêtre indépendante. Les questions 203 à 207 précisent que les nouveaux projets ouverts depuis la bibliothèque rejoignent la fenêtre principale, que le détachement d'un onglet est le seul moyen de créer une fenêtre indépendante, qu'une fenêtre indépendante vide se ferme automatiquement, que chaque fenêtre conserve son propre projet actif et que le menu de navigation regroupe les fenêtres en affichant leur nom et leur projet actif. Les questions 208 à 212 définissent l'identification des fenêtres dans la barre des tâches, la minimisation et la restauration indépendantes de chaque fenêtre, l'absence de mode plein écran dédié et la reprise de la dernière taille mémorisée lors de la création d'une nouvelle fenêtre indépendante. Les questions 213 à 217 précisent la position et l'écran d'ouverture des nouvelles fenêtres indépendantes, la délégation au système d'exploitation du regroupement des fenêtres dans la barre des tâches, la fermeture du projet lorsqu'une fenêtre indépendante à projet unique est fermée, avec les protections habituelles, et la restauration de l'état maximisé ou non maximisé de chaque fenêtre. Les questions 218 à 222 définissent l'ordre des fenêtres dans le menu de navigation selon leur dernière activation, le maintien des fenêtres minimisées dans ce menu sans indicateur visuel particulier, l'actualisation immédiate du nom du projet actif et la tentative de basculement vers un autre bureau virtuel lors de la sélection d'une fenêtre qui s'y trouve. Les questions 223 à 227 ajoutent des raccourcis clavier personnalisables pour naviguer entre fenêtres, alignent leur ordre de parcours sur celui du menu, incluent les fenêtres minimisées, rendent le parcours circulaire et prévoient une sélection visuelle avec activation uniquement après confirmation. Les questions 228 à 232 complètent la gestion des raccourcis clavier : consultation depuis les paramètres et les menus contextuels concernés, recherche par nom de commande, absence d'affectation automatique pour les actions sans raccourci, réinitialisation individuelle ou globale et export/import au moyen d'un fichier dédié. Les questions 233 à 237 précisent le traitement des conflits lors de l'importation d'une configuration, l'interdiction des combinaisons réservées par le système, le fonctionnement contextuel des raccourcis, l'utilisation d'une configuration globale commune à tous les projets et la présentation d'un aperçu avec confirmation avant toute réinitialisation globale. Les questions 238 à 242 définissent les deux méthodes d'attribution des raccourcis, imposent au moins une touche modificatrice, autorisent les séquences successives, exigent une confirmation avant le remplacement d'une affectation personnalisée et prévoient un export complet distinguant les valeurs par défaut des personnalisations. Les questions 243 à 247 précisent la présentation graphique des séquences successives, rendent leur délai d'attente configurable, définissent leur annulation automatique à expiration du délai, imposent un retour visuel pendant la saisie et organisent la gestion des raccourcis par catégories fonctionnelles avec recherche globale. Les questions 248 à 252 définissent le classement alphabétique des catégories, le classement des commandes selon leur importance ou leur fréquence, l'ouverture simultanée de plusieurs catégories repliables, l'identification par icône des raccourcis personnalisés et le filtrage entre raccourcis par défaut et personnalisés. Les questions 339 à 343 complètent la sécurité et l'intégrité des données : vérifications automatiques régulières avec contrôle manuel possible ; proposition de récupération des projets endommagés sans altérer le fichier original ; création automatique d'un point de restauration et présentation d'un récapitulatif avant toute opération sensible ; vérification approfondie des fichiers importés avec signalement des éléments suspects et décision laissée à l'utilisateur ; enfin, journal détaillé et consultable des opérations importantes, erreurs et modifications significatives.

À partir de V2.36, la bibliothèque de cartes, la recherche et l'importation des cartes, la gestion des decks et listes de cartes, la gestion des projets, le moteur de rendu, la gestion des types de cartes, des polices, des couleurs, des illustrations, des compositions Over Art, des associations automatiques d'illustrations, des symboles/icônes et des frames décrites dans ce document constituent un ensemble de fonctionnalités validées. La préparation à l'impression inclut les fonds perdus, l'extension de matière adaptée au contenu pour limiter les bords blancs, les zones de sécurité, les limites physiques et les repères de coupe personnalisables. La préparation de découpe assistée par machine est également validée : tracés vectoriels, compensation, prévisualisation, contrôles géométriques, exports compatibles et profils réutilisables. Les formes physiques personnalisées sont prises en charge dans la conception : contours extérieurs libres ou prédéfinis, découpes intérieures, édition et importation vectorielles, adaptation des zones de composition et modèles réutilisables. Un contrôle qualité automatique avant impression et découpe complète ces préparatifs, avec rapports, niveaux de gravité, propositions de correction soumises à validation et traçabilité des contrôles réellement effectués. La question 47 valide un contrôle qualité automatique avant génération des fichiers d'impression et de découpe, couvrant les dimensions, fonds perdus, zones de sécurité, ressources, résolutions, paramètres colorimétriques et géométrie des tracés, avec rapports détaillés, niveaux de gravité, propositions de correction soumises à validation et traçabilité des contrôles effectués. La question 48 précise que l'utilisateur choisit ponctuellement les contrôles à lancer à la fin de la préparation, au moyen de cases à cocher et d'un bouton de lancement, sans profils de contrôle qualité enregistrables. La question 49 impose une sélection vide par défaut et ajoute une option glissante facultative « Se rappeler de mes préférences », désactivée par défaut, pour reproposer les choix précédents. Toute nouvelle décision validée devra être ajoutée à une nouvelle version du cahier des charges, sans suppression des décisions antérieures.

Les questions 253 à 257 complètent la gestion de la page des raccourcis : chaque commande présente son nom, son raccourci et une courte description ; ses informations détaillées sont consultables dans un panneau intégré ; la modification peut être déclenchée par un bouton dédié ou directement depuis la représentation graphique du raccourci ; enfin, la réinitialisation individuelle est accessible depuis la liste comme depuis le panneau de détails et demande une confirmation indiquant l'affectation actuelle ainsi que la valeur par défaut qui sera rétablie.


Les questions 258 à 262 précisent le comportement de la page de gestion des raccourcis : les commandes sans affectation restent visibles avec la mention « Aucun raccourci » ; la recherche respecte le filtre actif ; l'état des catégories, le filtre et la recherche sont réinitialisés lorsque l'utilisateur revient sur la page ; enfin, la commande sélectionnée est simplement mise en surbrillance dans la liste.


Les questions 263 à 267 complètent le comportement du panneau de détails de la page de gestion des raccourcis : celui-ci apparaît à droite de la liste, s'actualise immédiatement lors du choix d'une autre commande, se ferme par une croix ou par un nouveau clic sur la commande sélectionnée, et la liste conserve exactement sa position de défilement après consultation. Pour les commandes sans raccourci, le panneau présente un emplacement vide accompagné d'un bouton d'attribution directement accessible.


Les questions 268 à 272 précisent l'utilisation du panneau de détails : son ouverture se fait par un bouton dédié, sa largeur s'ajuste automatiquement au contenu et il présente le nom, le raccourci, la description, la catégorie et le contexte d'utilisation de la commande. La sélection n'est conservée après fermeture du panneau que tant que l'utilisateur reste sur la page. Si la commande ne correspond plus au filtre ou à la recherche actifs, le panneau reste ouvert et signale cette non-correspondance.

Les questions 273 à 277 finalisent plusieurs comportements du panneau de détails : sa fermeture automatique lorsque l'utilisateur quitte la page, un message de non-correspondance volontairement concis, la possibilité de modifier directement une commande même lorsqu'elle est masquée par le filtre, l'actualisation visuelle après validation explicite et l'affichage des détails d'une nouvelle commande sélectionnée même si elle ne correspond pas aux critères actifs.


Les questions 278 à 282 complètent la modification des raccourcis depuis le panneau de détails : la validation s'effectue au moyen d'un bouton « Appliquer » dédié ; l'utilisateur peut annuler au moyen d'un bouton dédié ou en fermant le panneau ; un conflit avec une autre commande entraîne le refus de la modification et l'affichage d'une explication ; en cas d'échec technique, la valeur précédente est conservée et la modification reste disponible pour une nouvelle tentative ; enfin, après validation réussie, le panneau reste ouvert et affiche le raccourci actualisé.


Les questions 283 à 287 précisent la saisie et la modification des raccourcis : le champ devient directement actif dans le panneau de détails ; en cas de conflit, l'application identifie la commande concernée par son nom, sa catégorie et son contexte, puis efface la saisie refusée ; l'utilisateur peut interrompre la capture avec Échap ou un bouton « Annuler » ; après application réussie, le panneau affiche le raccourci actualisé et une confirmation discrète « Raccourci modifié ».


Les questions 288 à 292 finalisent la gestion des modifications de raccourcis : le remplacement d'une personnalisation existante exige une confirmation ; une modification réussie peut être annulée immédiatement au moyen d'une commande « Annuler » ; chaque changement validé est enregistré durablement sans attendre la fermeture de la page ou de l'application ; les raccourcis sont synchronisés immédiatement entre toutes les fenêtres ; enfin, en cas de modifications concurrentes d'une même commande, la première validation est conservée et les suivantes sont refusées avec explication.


Les questions 293 à 297 précisent l'annulation des modifications de raccourcis : la commande « Annuler » ne revient que sur la dernière modification et reste disponible jusqu'à la fermeture de l'application ; son effet est immédiatement synchronisé entre toutes les fenêtres ; si une modification concurrente rend la restauration conflictuelle, l'application demande à l'utilisateur quelle valeur conserver ; enfin, toute restauration de la valeur précédente nécessite une confirmation explicite. Les questions 298 à 302 définissent les informations affichées dans le dialogue de résolution d'un conflit, la présélection de la valeur correspondant à l'annulation demandée, l'abandon de l'annulation si la valeur la plus récente est conservée, la synchronisation immédiate du résultat entre toutes les fenêtres et le retour automatique à la valeur précédente lorsque le dialogue est annulé ou fermé. La question 303 exclut tout historique des modifications de raccourcis : seule la dernière modification reste disponible pour l'annulation ; les questions complémentaires sur un éventuel historique sont sans objet. Les questions 304 à 308 définissent les notifications de l'application : elles associent un signal visuel à un son désactivable, apparaissent dans une zone dédiée en bas de la fenêtre, disparaissent automatiquement après quelques secondes, regroupent les messages liés au même événement et restent consultables jusqu'à la fermeture de l'application, sans conservation entre les sessions. Les questions 309 à 313 complètent leur interaction : un clic affiche davantage de détails sans changer de page et permet également de fermer la notification ; les notifications importantes disposent d'un traitement visuel distinct ; les groupes présentent un résumé développable ; enfin, les notifications restent discrètes et n'interrompent pas les actions en cours. Les questions 314 à 318 précisent le contenu des notifications : elles présentent un titre, un message et les informations utiles sur l'événement ; identifient le projet, la fenêtre et l'élément concernés lorsque disponibles ; affichent l'heure sans la date ; utilisent une icône propre à chaque catégorie ; et conservent un contenu défini par l'application, sans personnalisation par l'utilisateur. Les questions 319 à 323 complètent les paramètres et l'accessibilité des notifications : l'utilisateur peut désactiver toutes les notifications ou choisir les catégories actives ; régler indépendamment le son et son volume pour chaque catégorie ; décider au moyen d'un réglage dédié si les notifications importantes restent affichées malgré la désactivation de leur catégorie ; adapter le texte et les contrastes pour améliorer la lisibilité ; et limiter ou regrouper les notifications d'événements identiques lorsqu'ils se répètent sur une courte période. Les questions 324 à 328 définissent l'organisation des paramètres généraux sur plusieurs pages classées par catégories, leur application après validation explicite, leur stockage local pour l'installation actuelle, une recherche globale donnant un accès direct au réglage concerné et des possibilités de réinitialisation individuelle, par catégorie ou globale, toujours précédées d'un aperçu et d'une confirmation. Les questions 329 à 333 complètent les préférences générales : choix manuel parmi plusieurs langues d'interface, sélection du thème sombre ou clair avec adaptation automatique facultative au système, réglage libre de la mise à l'échelle, vérification automatique des mises à jour avec téléchargement proposé et installation soumise à validation, et affichage d'une page d'accueil présentant les projets récents et les principales actions au démarrage. Les questions 334 à 338 définissent la gestion automatique du cache avec limite de stockage configurable, le lancement automatique des rendus en arrière-plan, le nombre maximal de traitements simultanés configurable, la limite de mémoire vive définie par l'utilisateur et un panneau détaillé de suivi des performances présentant la mémoire utilisée, l'activité du rendu et les tâches en cours.
