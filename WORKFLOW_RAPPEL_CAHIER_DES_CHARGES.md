# Rappel de workflow — Cahier des charges MTG Card Remodeler

> Document opérationnel de reprise de conversation. À relire en priorité lorsqu'une nouvelle conversation doit reprendre le travail. Ce document décrit la méthode de travail et l'état de reprise ; il ne remplace ni le cahier des charges ni son index.

- Dépôt : https://github.com/Alchemistio/mtg-card-remodeler-public
- Branche de référence : `main`
- Cahier des charges de référence au dernier contrôle : [V3.111](MTG_Card_Remodeler_Cahier_des_charges_V3.111.md)
- Index de décisions : [INDEX_CAHIER_DES_CHARGES.md](INDEX_CAHIER_DES_CHARGES.md)
- Dernière question enregistrée : **Q643**
- Dernière section : **10.612**
- Prochain numéro disponible : **Q644** ; prochaine question à préparer après audit de l'index puis des sections pertinentes de V3.111
- État : **phase de définition du cahier des charges uniquement**.

## 1. Instruction de reprise — à appliquer en premier

Quand l'utilisateur demande de reprendre le projet ou fournit ce document :

1. Se reconnecter au dépôt GitHub indiqué ci-dessus.
2. Lire ce document de rappel, puis l'index `INDEX_CAHIER_DES_CHARGES.md`.
3. Identifier la version la plus récente du cahier des charges à partir de l'index et du contenu réel du dépôt. Ne pas supposer que V3.100 est toujours la dernière version.
4. Lire la fin du cahier des charges courant et les sections thématiques pertinentes avant de poser de nouvelles questions.
5. Reprendre au prochain numéro de question non utilisé, sans réutiliser un numéro et sans repartir de zéro.
6. Vérifier que les sujets proposés ne sont pas déjà couverts. L'index sert au repérage ; le cahier des charges complet fait foi.
7. Poursuivre directement le workflow, sans demander à l'utilisateur de répéter les décisions déjà prises.

## 2. Priorités et limites de travail

- **Ne pas intégrer, modifier ou commencer à développer le code du remodeler tant que l'utilisateur n'a pas explicitement déclaré le cahier des charges terminé et autorisé la phase de développement.**
- Dans cette phase, le travail porte sur la spécification, les décisions, les documents et leur vérification GitHub.
- Continuer de manière proactive. Ne pas s'arrêter après une série si le contexte permet de poursuivre.
- L'utilisateur souhaite des séries de **cinq questions** à la fois, avec réponses compactes sous forme de cinq chiffres (ex. `1,2,3,1,2`).
- À chaque relance, poursuivre un cycle interne de cinq séries de cinq sujets (25 sujets examinés), sauf si le stock de décisions cruciales restantes est inférieur.
- **Ne soumettre à l'utilisateur qu'un seul bloc de cinq questions par message.** Les quatre autres séries sont préparées et analysées en interne ; elles ne sont pas affichées dans le même message. Après la réponse de l'utilisateur, poursuivre avec le bloc suivant.
- Ne jamais confondre le volume de travail interne (5 × 5) avec le volume de questions présenté à l'utilisateur (1 × 5).
- Ne solliciter l'utilisateur que pour les arbitrages fonctionnels réellement cruciaux : décisions qui changent sensiblement le produit, son comportement, ses priorités, ses compromis ou ses limites. Éviter toute question de détail.
- Pour les sujets de détail, conserver le même processus d'analyse et de documentation, mais **rechercher sur Internet les meilleures pratiques et réponses disponibles**, comparer prioritairement les sources officielles, normes, documentations techniques et références reconnues, puis choisir la solution la plus robuste et adaptée au projet.
- Les réponses de détail retenues par l'assistant doivent être documentées comme des décisions techniques proposées/prises par l'assistant, avec les justifications et références utiles ; elles ne doivent pas être présentées comme des choix explicitement validés par l'utilisateur.
- La recherche web est obligatoire pour les décisions de détail lorsque des informations externes, des standards ou des pratiques actuelles peuvent améliorer la décision. Si le sujet est stable et purement interne au projet, l'assistant peut s'appuyer sur les documents existants, en expliquant la rationale.
- Conserver le workflow de validation et de documentation pour les décisions de détail, mais ne pas interrompre l'utilisateur avec des demandes de choix mineurs.
- En cas de véritable ambiguïté bloquante, poser une seule question claire et ciblée. Sinon, avancer.

## 3. Méthode de préparation de chaque série

**Vérification obligatoire avant toute question adressée à l'utilisateur :**

1. Consulter d'abord l'index du cahier des charges.
2. Repérer la catégorie thématique pertinente et suivre les indications de navigation de l'index pour identifier les questions, sections et zones du document susceptibles de contenir la réponse.
3. Ouvrir les sections correspondantes dans la version la plus récente du cahier des charges, et pas seulement les extraits de l'index.
4. Vérifier les exigences directes et indirectes, les décisions associées et leurs éventuelles limites.
5. Si la réponse existe déjà, ne pas reposer la question. Considérer la décision existante comme faisant foi et chercher un autre arbitrage réellement non couvert.
6. Si la question touche plusieurs catégories, vérifier chacune d'elles avant de conclure qu'il existe une lacune.
7. Ne jamais considérer l'absence d'un mot-clé dans l'index comme une preuve d'absence de décision : lire les sections pertinentes du cahier des charges complet.

Après ces vérifications, appliquer la méthode de préparation ci-dessous :

1. Parcourir l'index par numéro de question et par thème.
2. Ouvrir les sections correspondantes dans la version complète.
3. Vérifier les exigences déjà définies, y compris les décisions indirectement liées.
4. Écarter ou reformuler les sujets redondants. Ne pas reposer une question simplement parce qu'elle est ancienne ou difficile à retrouver.
5. Préférer les lacunes concrètes, les cas limites, les interactions entre fonctions, la sécurité, la récupération, la traçabilité, l'accessibilité et la robustesse.
6. Rédiger cinq questions indépendantes autant que possible. Chaque question doit proposer des choix compréhensibles et progressifs, sans cacher une décision majeure dans une option technique.
7. Présenter les cinq questions en français et demander une réponse compacte.
8. Après la réponse, interpréter les choix, puis documenter les décisions et leurs implications normatives.

### Règle essentielle sur les questions de détail — recherche et décision autonomes

L'assistant ne pose pas à l'utilisateur de questions sur les détails techniques ou opérationnels. Il suit le même workflow que pour une décision ordinaire (identifier le besoin, vérifier l'existant, évaluer les options, arrêter une décision, la documenter et l'indexer), mais remplace la question à l'utilisateur par une recherche documentaire sur Internet.

Pour ces recherches :
- rechercher les meilleures réponses et pratiques actuelles adaptées au contexte du projet ;
- privilégier les documentations officielles, standards reconnus, spécifications, recommandations de sécurité et sources techniques primaires ;
- utiliser des sources secondaires réputées seulement pour compléter ou comparer ;
- comparer les options, leurs avantages, limites, risques et coûts de complexité ;
- retenir une solution sûre, maintenable, testable, cohérente avec les décisions déjà validées et proportionnée au projet ;
- citer/consigner les références importantes dans les documents concernés afin que le choix soit traçable ;
- signaler explicitement les hypothèses et les incertitudes lorsqu'aucune réponse unique ne s'impose.

Les domaines concernés incluent notamment validation, journalisation, gestion des erreurs, transactions, compatibilité, intégrité, valeurs par défaut, accessibilité, tests, reprise, sécurité, performances et comportements de repli. Ces décisions sont attribuées à l'assistant et ne sont jamais présentées comme des arbitrages explicitement validés par l'utilisateur.

Ne demander à l'utilisateur que les choix cruciaux qui modifient réellement le comportement produit, les priorités, les compromis fonctionnels ou le périmètre.

## 4. Documentation GitHub à maintenir

Pour toute série validée :

1. Ajouter les décisions au cahier des charges dans une nouvelle version distincte, sans modifier le contenu des versions déjà publiées.
2. Employer des exigences précises, testables et non ambiguës, plutôt que de simples résumés de conversation.
3. Attribuer à chaque question sa section numérotée correspondante et conserver la continuité de numérotation.
4. Mettre à jour `INDEX_CAHIER_DES_CHARGES.md` : version de référence, titres, questions, sections, lignes et liens.
5. Recalculer les lignes après chaque modification du document complet ; ne jamais recopier aveuglément les anciens numéros de ligne.
6. Vérifier les liens, ancres, numéros de questions, titres, version et correspondance index/document.
7. **Règle de rétention : ne conserver dans la branche main que les trois fichiers des versions les plus récentes du cahier des charges.** Après publication et vérification d'une nouvelle version ainsi que de son index, supprimer du contenu courant du dépôt les fichiers de cahier des charges plus anciens que ces trois versions. Ne jamais réécrire l'historique Git : les anciennes versions supprimées de la branche restent consultables dans l'historique des commits. L'index et le rappel doivent toujours pointer vers la version courante.
8. Mettre également à jour **ce document de rappel** dès qu'une modification du workflow, des règles de collaboration, de l'état de reprise ou des prochaines étapes intervient.
9. Après écriture, relire les fichiers modifiés sur GitHub pour confirmer que le contenu enregistré correspond au contenu attendu.
10. Signaler honnêtement les écritures ou vérifications qui n'ont pas pu être effectuées. Ne jamais prétendre qu'un document a été mis à jour sans confirmation de GitHub.

## 5. Prévention des doublons — repères déjà connus

À la reprise depuis l'état V3.106, les sujets suivants sont déjà couverts et ne doivent pas être reposés sous une forme générique :

- **Gestion des projets — section 10.10 / Q32** : création, nommage, sauvegarde, duplication, suppression, bascule, ressources intégrées ou partagées, paramètres de projet, récupération, historique, versions, import/export, dépendances, conflits, ressources manquantes et transfert entre ordinateurs.
- **Dépendances des extensions — Q564 à Q568** : contraintes de versions, résolution déterministe, ordonnancement, cycles et dépendances facultatives.
- **Reproductibilité et intégrité des générations — Q589 à Q593** : instantanés immuables, empreintes des ressources, traçabilité des moteurs et paramètres, publication sûre, manifeste et bilan vérifiable.

Ces repères sont ceux du dernier état contrôlé ; ils doivent être revalidés si une version plus récente existe.

## 6. Point exact de reprise connu

- **Version courante : V3.111.**
- **Dernière question enregistrée : Q643.**
- **Dernière section : 10.612.**
- **Prochaine question disponible : Q644.**
- **Dernière décision enregistrée :** Q642 — les sauvegardes sont portables entre Windows, macOS et Linux, avec adaptation des chemins et paramètres propres au système cible et signalement des dépendances non transposables. Q641 impose une restauration complète strictement conforme à l'état sauvegardé, avec point de restauration préalable lorsque cela est techniquement possible. Q640 exclut le chiffrement applicatif spécifique au profit du chiffrement natif du système ou du support.
- **Point d'attention GitHub :** un dépôt public peut être consulté et forké selon les conditions de la plateforme. Cette capacité de fork doit être distinguée d'une autorisation générale de redistribution ou d'exploitation commerciale ; si l'interdiction du fork lui-même devient impérative, la visibilité publique devra être réévaluée.
- **Rétention des versions :** seuls les trois fichiers de cahier des charges les plus récents doivent rester dans la branche `main`. État vérifié après publication de V3.111 : V3.108, V3.109 et V3.111 sont les trois seules versions présentes ; V3.107 a été retirée de `main` et reste consultable dans l'historique Git.
- Les questions Q594 à Q618 ont été proposées sans réponse puis retirées après audit de redondance. Leurs identifiants restent réservés et ne doivent pas être réutilisés.
- Q619 à Q642 sont enregistrées dans le cahier des charges courant. Les décisions portent notamment sur l'absence de synchronisation automatique, de collaboration multi-utilisateur, de catalogue communautaire et de compte utilisateur ; la prise en charge de Windows, macOS et Linux ; le caractère privé de l'application ; la consultation publique du code sous restrictions et la licence personnelle non commerciale ; l'absence de monétisation définie ; le fonctionnement hors ligne prioritaire ; la vérification des mises à jour désactivable ; la notification seule ; et la récupération externe et manuelle des mises à jour ; l'anonymisation automatique obligatoire et non désactivable des rapports de diagnostic exportés, ainsi que la conservation configurable des journaux de diagnostic locaux, leur inclusion systématique dans toutes les sauvegardes locales et le recours au chiffrement natif du système ou du support.
- Continuer l'audit à partir de l'index V3.108, puis lire les sections pertinentes du cahier complet avant toute nouvelle question. Q640 est enregistrée en section 10.609 ; Q641 est le prochain identifiant disponible. Le chiffrement applicatif des sauvegardes a été écarté au profit du chiffrement natif du système ou du support. Ne pas fabriquer cinq questions si l'audit ne révèle pas cinq arbitrages réellement cruciaux.
- **Aucun développement du remodeler n'est autorisé** avant que l'utilisateur ait explicitement déclaré le cahier des charges terminé et autorisé cette phase.

## 7. Domaines à explorer ensuite

À adapter après lecture de la dernière version réelle ; ce sont des pistes et non une liste de questions obligatoires :

- politiques générales de sauvegarde et reprise après incident, sans répéter la gestion de projet déjà couverte ;
- bibliothèques de ressources partagées, cycle de vie, conflits, provenance et compatibilité ;
- résilience globale, diagnostic, récupération et réparation ;
- cohérence entre paramètres globaux, projets, extensions et ressources ;
- maintenance, migration, mises à niveau et retour arrière ;
- observabilité, journaux, rapports et assistance à la résolution ;
- tests de conformité et critères d'acceptation vérifiables.

## 8. Conventions de présentation et de collaboration

- Répondre en français.
- Présenter les séries de cinq questions de façon lisible et compacte.
- Les choix doivent être numérotés clairement (1, 2, 3, etc.).
- Une réponse de cinq chiffres correspond aux cinq questions dans l'ordre.
- Si l'utilisateur répond partiellement ou ajoute une précision en texte, interpréter ce qui est clair et ne demander que l'information indispensable.
- Pour les nouveaux raccourcis clavier, réutiliser les conventions générales de raccourcis déjà établies ; ne pas inventer un système concurrent.
- Ne pas annoncer comme validée une option que l'utilisateur n'a pas choisie.
- Distinguer dans les documents les décisions explicites de l'utilisateur et les choix techniques pris par l'assistant.

## 9. Mise à jour de ce rappel

Ce fichier est un document vivant. À chaque changement du workflow — nouvelle règle utilisateur, changement de cadence, méthode de validation, contrainte de développement, changement de point de reprise ou modification importante de la procédure GitHub — le mettre à jour dans le même cycle de travail.

À chaque mise à jour :
- conserver les règles toujours applicables ;
- corriger les règles devenues obsolètes ;
- actualiser la version de référence, le dernier numéro de question et le point de reprise ;
- consigner brièvement la nature du changement et sa date ;
- relire le fichier enregistré pour confirmer la mise à jour.

### Journal des modifications

- **2026-11-13 — Création du document :** formalisation du workflow de questionnaire, de la prise en charge autonome des détails, des limites de phase (aucun développement avant validation du cahier des charges), de la maintenance GitHub et du point de reprise Q594–Q598.
- **2026-11-13 — Mise à jour du workflow à la demande de l'utilisateur :** les décisions de détail doivent désormais être recherchées sur Internet et résolues par l'assistant, sans questionner l'utilisateur ; seules les décisions cruciales lui sont soumises. Chaque relance de continuation doit fournir cinq séries de cinq questions (25 au total), sauf demande différente ou absence de 25 arbitrages cruciaux pertinents.


### Journal des modifications — compléments du 2026-11-13

- **2026-11-13 — Vérification préalable renforcée et présentation des questions :** avant chaque question, consultation obligatoire de la catégorie dans l'index, suivi de ses indications de navigation et lecture des passages correspondants dans la dernière version complète du cahier des charges ; toute question déjà résolue est écartée. Le travail interne reste organisé en cinq séries de cinq sujets, mais un seul bloc de cinq questions cruciales est désormais présenté à l'utilisateur par message.
- **2026-11-13 — Audit des propositions Q594–Q618 :** propositions retirées après constat de recoupements avec des décisions de V3.93 ; identifiants réservés et non réutilisables. Les numéros Q594–Q618 restent réservés ; Q619 a ensuite été utilisé et enregistré.


### Journal des modifications — compléments du 2026-11-13

- **2026-11-13 — Enregistrement des décisions Q619–Q623 :** publication du cahier des charges V3.94 avec les sections 10.589 à 10.593 ; mise à jour et vérification de l'index ; point de reprise déplacé à Q624–Q628. Les cinq choix retenus privilégient un fonctionnement local sans compte, synchronisation, collaboration ni catalogue communautaire, avec transfert et partage manuels par fichiers.


- **2026-11-13 — Point de reprise après audit Q619–Q623 (historique, remplacé par Q624) :** le prochain identifiant disponible était Q624. Ce point de reprise est clos depuis l'enregistrement de Q624 dans V3.99.


- **2026-11-13 — Enregistrement de Q624 :** choix utilisateur en faveur de la prise en charge officielle de Windows, macOS et Linux. Publication de V3.99, section 10.594 ; index mis à jour, liens de ligne recalculés et vérifiés ; prochain identifiant disponible Q625. La dernière question enregistrée est Q624 et la dernière section est 10.594.


- **2026-11-13 — Correction de cohérence du point de reprise :** lors de la reprise, l'audit a constaté que le rappel indiquait encore Q624 comme prochain numéro alors que Q624 était déjà publiée dans V3.99 et indexée. Le prochain identifiant disponible est corrigé à **Q625**. Aucun numéro déjà utilisé n'est réattribué.


- **2026-11-14 — Enregistrement des décisions Q625–Q627 :** publication du cahier des charges V3.99, sections 10.595 à 10.597. Le logiciel reste privé et destiné à l'usage personnel ; le code source peut être consulté publiquement mais sans autorisation générale de réutilisation ou redistribution ; aucune monétisation n'est définie pour le moment et cette décision est reportée. L'index a été actualisé avec les nouveaux thèmes, ancres et lignes. Prochain identifiant disponible : Q628. Le périmètre reste exclusivement celui de la définition documentaire ; aucun développement du remodeler n'est autorisé à ce stade.


- **2026-11-14 — Enregistrement de Q628 :** choix utilisateur en faveur d'un fonctionnement hors ligne prioritaire. Publication du cahier des charges V3.99, section 10.598 ; l'application doit rester pleinement utilisable pour ses fonctions locales sans connexion, tandis que les fonctions intrinsèquement dépendantes d'un service externe peuvent être indisponibles hors ligne sans bloquer le reste. Index actualisé, ancres et liens de ligne vérifiés. Dernière question enregistrée : Q628 ; dernière section : 10.598 ; prochain identifiant disponible : Q629. Aucun développement du remodeler n'est autorisé avant la clôture explicite du cahier des charges.


- **2026-11-14 — Enregistrement de Q629 :** l'utilisateur choisit une vérification automatique des mises à jour désactivable dans les paramètres. Publication du cahier des charges V3.99, section 10.599. La vérification est non bloquante, suspendue en l'absence de réseau et réactivable/désactivable par l'utilisateur ; la vérification manuelle reste disponible et l'installation conserve ses validations et confirmations préalables. Index actualisé avec Q629 et les liens vers V3.99 ; prochain identifiant disponible : Q630. Aucun développement du remodeler n'est autorisé avant la clôture explicite du cahier des charges.


- **2026-11-14 — Correction du point de reprise après publication de Q629 :** l'audit croisé a relevé que le rappel opérationnel n'avait pas été actualisé malgré la publication de Q629 dans V3.99 et son indexation. Le dernier identifiant enregistré est corrigé à Q629, la dernière section à 10.599 et le prochain identifiant à Q630. Aucun numéro n'est réutilisé. Le workflow reste limité à la définition documentaire jusqu'à clôture explicite du cahier des charges.


- **2026-11-14 — Enregistrement de Q630 :** l'utilisateur choisit une politique de notification uniquement pour les mises à jour de l'application. Aucun téléchargement ni installation ne doit démarrer automatiquement ; chacun exige une action explicite distincte, après notification et contrôles de sécurité. Publication du cahier des charges V3.99, section 10.600 ; index actualisé avec Q630 et les liens de ligne correspondants. Dernière question enregistrée : Q630 ; dernière section : 10.600 ; prochain identifiant disponible : Q631. Aucun développement du remodeler n'est autorisé avant la clôture explicite du cahier des charges.


- **2026-11-14 — Enregistrement de Q631 et règle de rétention des versions :** l'utilisateur choisit la récupération externe et manuelle des fichiers de mise à jour, sans téléchargement intégré dans l'application. Publication de V3.100, section 10.601 ; index actualisé avec Q631 et les liens de ligne recalculés. L'utilisateur demande également de ne conserver que les trois versions les plus récentes du cahier des charges dans la branche courante. Règle ajoutée : conserver V3.98, V3.99 et V3.100 ; supprimer les versions plus anciennes de la branche `main` après vérification, tout en laissant leur historique Git intact. Dernière question : Q631 ; dernière section : 10.601 ; prochaine question : Q632. Aucun développement du remodeler avant autorisation explicite.


- **2026-11-14 — Enregistrement de Q632 :** l'utilisateur choisit une licence personnelle non commerciale pour le code source. Le périmètre retenu autorise l'étude et l'utilisation privée non commerciale, mais interdit la redistribution et l'exploitation commerciale sans autorisation écrite distincte. Une licence logicielle personnalisée devra être rédigée et relue avant publication comme texte juridique définitif ; les licences tierces restent applicables. L'index signale également la limite propre aux dépôts publics GitHub, dont les utilisateurs peuvent consulter et forker le contenu au titre des conditions de la plateforme. Publication de V3.101, section 10.602 ; index mis à jour. Dernière question : Q632 ; dernière section : 10.602 ; prochaine question : Q633. La rétention de trois versions implique de conserver V3.99, V3.100 et V3.101 dans `main`, puis de retirer V3.98 après vérification, sans réécrire l'historique Git.


- **2026-11-14 — Enregistrement de Q634 :** l'utilisateur choisit de demander lors de la désinstallation de l'application s'il souhaite conserver ou supprimer ses données, avec conservation sélectionnée par défaut. Toute suppression doit être clairement délimitée et confirmée explicitement. Publication de V3.102, section 10.603 ; index actualisé avec Q634 et ses liens. Dernière question : Q634 ; dernière section : 10.603 ; prochaine question : Q635. La rétention de trois versions implique de conserver V3.100, V3.101 et V3.102 dans `main`, puis de retirer V3.99 après vérification, sans réécrire l'historique Git. Aucun développement du remodeler n'est autorisé avant la clôture explicite du cahier des charges.


- **2026-11-14 — Enregistrement de Q635 :** l'utilisateur choisit l'option 3 : la confirmation explicite de suppression des données, avec le récapitulatif et les protections déjà définis en section 10.603, suffit. Aucune proposition systématique de dernière sauvegarde exportable n'est ajoutée au parcours de désinstallation ; les mécanismes de sauvegarde existants restent disponibles indépendamment. Publication de V3.103, section 10.604 ; index actualisé et liens recalculés. Dernière question : Q635 ; dernière section : 10.604 ; prochaine question : Q636. La rétention de trois versions implique de conserver V3.101, V3.102 et V3.103 dans `main`, puis de retirer V3.100 après vérification, sans réécrire l'historique Git. Aucun développement du remodeler n'est autorisé avant la clôture explicite du cahier des charges.


- **2026-11-14 — Enregistrement de Q636 :** l'utilisateur choisit l'anonymisation automatique par défaut des rapports de diagnostic exportés, avec aperçu avant export. Les informations potentiellement identifiantes sont masquées ou remplacées en préservant autant que possible la valeur diagnostique ; les secrets restent toujours exclus ou masqués ; aucune transmission automatique n'est autorisée. Publication de V3.104, section 10.605 ; index et liens actualisés. Dernière question : Q636 ; dernière section : 10.605 ; prochaine question : Q637. La rétention de trois versions implique de conserver V3.102, V3.103 et V3.104 dans `main`, puis de retirer V3.101 après vérification, sans réécrire l'historique Git. Aucun développement du remodeler n'est autorisé avant la clôture explicite du cahier des charges.


- **2026-11-14 — Enregistrement de Q637 :** l'utilisateur choisit l'anonymisation obligatoire, sans possibilité de dérogation, pour les rapports de diagnostic exportés. Aucun réglage ne peut désactiver la protection ni restaurer les informations identifiantes masquées ; l'aperçu reste obligatoire et les secrets restent exclus ou masqués. Publication de V3.105, section 10.606 ; index actualisé et liens recalculés. Dernière question : Q637 ; dernière section : 10.606 ; prochaine question : Q638. La rétention de trois versions implique de conserver V3.103, V3.104 et V3.105 dans `main`, puis de retirer V3.102 après vérification, sans réécrire l'historique Git. Aucun développement du remodeler n'est autorisé avant la clôture explicite du cahier des charges.

- **2026-11-14 — Enregistrement de Q638 :** l'utilisateur choisit l'option 3 : la durée de conservation des journaux de diagnostic locaux et leurs limites de stockage doivent être configurables dans les paramètres. Publication de V3.106, section 10.607 ; index actualisé avec Q638 et ses liens. Dernière question : Q638 ; dernière section : 10.607 ; prochaine question : Q639. La rétention de trois versions implique de conserver V3.104, V3.105 et V3.106 dans `main`, puis de retirer V3.103 après vérification, sans réécrire l'historique Git. Aucun développement du remodeler n'est autorisé avant la clôture explicite du cahier des charges.

- **2026-11-14 — Enregistrement de Q639 :** l'utilisateur choisit l'inclusion systématique des journaux de diagnostic locaux dans toutes les sauvegardes. Publication de V3.107, section 10.608, avec mise à jour complémentaire de la portée de la section 2.6 ; index et rappel de workflow actualisés. Dernière question : Q639 ; dernière section : 10.608 ; prochaine question : Q640. La rétention de trois versions implique de conserver V3.105, V3.106 et V3.107 dans `main`, puis de retirer V3.104 après vérification, sans réécrire l'historique Git. Aucun développement du remodeler n'est autorisé avant la clôture explicite du cahier des charges.


- **2026-11-14 — Enregistrement de Q640 :** l'utilisateur choisit l'option 5 : aucun chiffrement applicatif spécifique des sauvegardes ; la protection repose sur le chiffrement natif du système d'exploitation ou du support de stockage. L'application ne gère pas de clés dédiées et ne doit pas présenter une destination non chiffrée comme protégée. Publication de V3.108, section 10.609 ; index actualisé. Dernière question : Q640 ; dernière section : 10.609 ; prochaine question : Q641. La rétention de trois versions implique de conserver V3.106, V3.107 et V3.108 dans `main`, puis de retirer V3.105 après vérification, sans réécrire l'historique Git. Aucun développement du remodeler n'est autorisé avant la clôture explicite du cahier des charges.


- **2026-11-14 — Enregistrement de Q641 :** l'utilisateur choisit la restauration complète avec retour strict à l'état sauvegardé, sans fusion des modifications postérieures. L'état courant doit être protégé par un point de restauration préalable lorsque cela est techniquement possible. Publication de V3.109, section 10.610 ; index actualisé. Dernière question : Q641 ; dernière section : 10.610 ; prochaine question : Q642. La rétention de trois versions implique de conserver V3.107, V3.108 et V3.109 dans `main`, puis de retirer V3.106 après vérification, sans réécrire l'historique Git. Aucun développement du remodeler n'est autorisé avant la clôture explicite du cahier des charges.


- **2026-11-14 — Enregistrement de Q642 :** l'utilisateur choisit la portabilité des sauvegardes entre Windows, macOS et Linux. Les chemins et paramètres propres au système cible sont adaptés lorsque cela est possible ; les dépendances non transposables doivent être signalées et résolues sans perte silencieuse de données. Publication de V3.111, section 10.611 ; index actualisé. Dernière question : Q642 ; dernière section : 10.611 ; prochaine question : Q643. La rétention de trois versions implique de conserver V3.108, V3.109 et V3.111 dans `main`, puis de retirer V3.107 après vérification, sans réécrire l'historique Git. Aucun développement du remodeler n'est autorisé avant la clôture explicite du cahier des charges.


- **2026-11-14 — Enregistrement de Q643 :** l'utilisateur choisit le périmètre complet comme objectif avant livraison finale. Le développement sera progressif par modules, avec tests et validations intermédiaires, sans transformer ces étapes en réduction du périmètre final. Publication de V3.111, section 10.612 ; index actualisé. Dernière question : Q643 ; dernière section : 10.612 ; prochaine question : Q644. La branche main doit conserver V3.109, V3.110 et V3.111 ; V3.108 est retirée de main après vérification, son historique Git restant intact. Aucun développement du remodeler n'est autorisé avant clôture explicite du cahier des charges et autorisation de l'utilisateur.
