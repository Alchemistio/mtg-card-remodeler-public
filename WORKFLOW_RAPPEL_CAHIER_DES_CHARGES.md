# Rappel de workflow — Cahier des charges MTG Card Remodeler

> Document opérationnel de reprise de conversation. À relire en priorité lorsqu'une nouvelle conversation doit reprendre le travail. Ce document décrit la méthode de travail et l'état de reprise ; il ne remplace ni le cahier des charges ni son index.

- Dépôt : https://github.com/Alchemistio/mtg-card-remodeler-public
- Branche de référence : `main`
- Cahier des charges de référence au dernier contrôle : [V3.95](MTG_Card_Remodeler_Cahier_des_charges_V3.95.md)
- Index de décisions : [INDEX_CAHIER_DES_CHARGES.md](INDEX_CAHIER_DES_CHARGES.md)
- Dernière question enregistrée : **Q624**
- Dernière section : **10.594**
- Prochain numéro disponible : **Q624** ; prochain bloc de questions à constituer après audit, sans forcer cinq sujets s'il n'existe pas cinq arbitrages cruciaux
- État : **phase de définition du cahier des charges uniquement**.

## 1. Instruction de reprise — à appliquer en premier

Quand l'utilisateur demande de reprendre le projet ou fournit ce document :

1. Se reconnecter au dépôt GitHub indiqué ci-dessus.
2. Lire ce document de rappel, puis l'index `INDEX_CAHIER_DES_CHARGES.md`.
3. Identifier la version la plus récente du cahier des charges à partir de l'index et du contenu réel du dépôt. Ne pas supposer que V3.95 est toujours la dernière version.
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

1. Ajouter les décisions au cahier des charges dans une nouvelle version, sans écraser les versions antérieures.
2. Employer des exigences précises, testables et non ambiguës, plutôt que de simples résumés de conversation.
3. Attribuer à chaque question sa section numérotée correspondante et conserver la continuité de numérotation.
4. Mettre à jour `INDEX_CAHIER_DES_CHARGES.md` : version de référence, titres, questions, sections, lignes et liens.
5. Recalculer les lignes après chaque modification du document complet ; ne jamais recopier aveuglément les anciens numéros de ligne.
6. Vérifier les liens, ancres, numéros de questions, titres, version et correspondance index/document.
7. Conserver toutes les versions précédentes du cahier des charges.
8. Mettre également à jour **ce document de rappel** dès qu'une modification du workflow, des règles de collaboration, de l'état de reprise ou des prochaines étapes intervient.
9. Après écriture, relire les fichiers modifiés sur GitHub pour confirmer que le contenu enregistré correspond au contenu attendu.
10. Signaler honnêtement les écritures ou vérifications qui n'ont pas pu être effectuées. Ne jamais prétendre qu'un document a été mis à jour sans confirmation de GitHub.

## 5. Prévention des doublons — repères déjà connus

À la reprise depuis l'état V3.95, les sujets suivants sont déjà couverts et ne doivent pas être reposés sous une forme générique :

- **Gestion des projets — section 10.10 / Q32** : création, nommage, sauvegarde, duplication, suppression, bascule, ressources intégrées ou partagées, paramètres de projet, récupération, historique, versions, import/export, dépendances, conflits, ressources manquantes et transfert entre ordinateurs.
- **Dépendances des extensions — Q564 à Q568** : contraintes de versions, résolution déterministe, ordonnancement, cycles et dépendances facultatives.
- **Reproductibilité et intégrité des générations — Q589 à Q593** : instantanés immuables, empreintes des ressources, traçabilité des moteurs et paramètres, publication sûre, manifeste et bilan vérifiable.

Ces repères sont ceux du dernier état contrôlé ; ils doivent être revalidés si une version plus récente existe.

## 6. Point exact de reprise connu

Les questions Q594 à Q618 ont été proposées dans un message précédent sans réponse de l'utilisateur. Après vérification méthodique de l'index et du cahier des charges V3.95, plusieurs propositions se sont révélées déjà couvertes : sauvegardes quotidiennes et hebdomadaires, nombre de sauvegardes conservées, destination configurable, restauration complète ou sélective, vérification d'intégrité, récupération des projets endommagés, points de restauration, journalisation, diagnostics, migration et mises à jour.

**Ces propositions sont retirées et ne doivent pas être reposées.** Les identifiants Q594 à Q618 sont réservés comme propositions abandonnées et ne doivent pas être réattribués.

**Q619 à Q623 ont désormais reçu une réponse et sont enregistrées dans V3.95, sections 10.589 à 10.593.** Les décisions portent sur l'absence de synchronisation automatique, l'absence de collaboration multi-utilisateur, le partage exclusivement par fichiers exportés, l'absence de catalogue communautaire intégré et l'absence de compte utilisateur. **Prochain numéro disponible : Q624.** Le prochain bloc de questions reste à constituer après consultation de l'index puis lecture des sections pertinentes de V3.95. Ne pas fabriquer cinq questions si l'audit ne révèle pas cinq arbitrages réellement cruciaux ; signaler alors le nombre inférieur et ne soumettre que ce qui est indispensable. Les autres sujets du cycle 5 × 5 sont préparés et examinés en interne, sans être affichés à l'utilisateur.

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

- **2026-11-13 — Enregistrement des décisions Q619–Q623 :** publication du cahier des charges V3.95 avec les sections 10.589 à 10.593 ; mise à jour et vérification de l'index ; point de reprise déplacé à Q624–Q628. Les cinq choix retenus privilégient un fonctionnement local sans compte, synchronisation, collaboration ni catalogue communautaire, avec transfert et partage manuels par fichiers.


- **2026-11-13 — Point de reprise après audit Q619–Q623 :** le prochain identifiant disponible est Q624. L'audit complémentaire n'a pas encore dégagé cinq nouveaux arbitrages cruciaux distincts ; ne pas afficher un bloc artificiellement rempli. Reprendre l'examen des lacunes à partir de l'index V3.95 et du document complet avant toute nouvelle question.


- **2026-11-13 — Enregistrement de Q624 :** choix utilisateur en faveur de la prise en charge officielle de Windows, macOS et Linux. Publication de V3.95, section 10.594 ; index mis à jour, liens de ligne recalculés et vérifiés ; prochain identifiant disponible Q625.
