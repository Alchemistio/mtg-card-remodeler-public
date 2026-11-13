# Rappel de workflow — Cahier des charges MTG Card Remodeler

> Document opérationnel de reprise de conversation. À relire en priorité lorsqu'une nouvelle conversation doit reprendre le travail. Ce document décrit la méthode de travail et l'état de reprise ; il ne remplace ni le cahier des charges ni son index.

- Dépôt : https://github.com/Alchemistio/mtg-card-remodeler-public
- Branche de référence : `main`
- Cahier des charges de référence au dernier contrôle : [V3.93](MTG_Card_Remodeler_Cahier_des_charges_V3.93.md)
- Index de décisions : [INDEX_CAHIER_DES_CHARGES.md](INDEX_CAHIER_DES_CHARGES.md)
- Dernière question enregistrée : **Q593**
- Dernière section : **10.588**
- Prochaine série à soumettre : **Q594 à Q598**
- État : **phase de définition du cahier des charges uniquement**.

## 1. Instruction de reprise — à appliquer en premier

Quand l'utilisateur demande de reprendre le projet ou fournit ce document :

1. Se reconnecter au dépôt GitHub indiqué ci-dessus.
2. Lire ce document de rappel, puis l'index `INDEX_CAHIER_DES_CHARGES.md`.
3. Identifier la version la plus récente du cahier des charges à partir de l'index et du contenu réel du dépôt. Ne pas supposer que V3.93 est toujours la dernière version.
4. Lire la fin du cahier des charges courant et les sections thématiques pertinentes avant de poser de nouvelles questions.
5. Reprendre au prochain numéro de question non utilisé, sans réutiliser un numéro et sans repartir de zéro.
6. Vérifier que les sujets proposés ne sont pas déjà couverts. L'index sert au repérage ; le cahier des charges complet fait foi.
7. Poursuivre directement le workflow, sans demander à l'utilisateur de répéter les décisions déjà prises.

## 2. Priorités et limites de travail

- **Ne pas intégrer, modifier ou commencer à développer le code du remodeler tant que l'utilisateur n'a pas explicitement déclaré le cahier des charges terminé et autorisé la phase de développement.**
- Dans cette phase, le travail porte sur la spécification, les décisions, les documents et leur vérification GitHub.
- Continuer de manière proactive. Ne pas s'arrêter après une série si le contexte permet de poursuivre.
- L'utilisateur souhaite des séries de **cinq questions** à la fois, avec réponses compactes sous forme de cinq chiffres (ex. `1,2,3,1,2`).
- L'utilisateur a demandé de poursuivre plusieurs séries successives, notamment des blocs d'au moins cinq séries de cinq questions.
- Ne solliciter l'utilisateur que pour les arbitrages fonctionnels réellement importants. Pour les détails techniques, prendre une décision cohérente, robuste et sécurisée, puis la documenter sans transformer ces détails en questions.
- Conserver le workflow de validation et de documentation pour les décisions de détail, mais ne pas interrompre l'utilisateur avec des demandes de choix mineurs.
- En cas de véritable ambiguïté bloquante, poser une seule question claire et ciblée. Sinon, avancer.

## 3. Méthode de préparation de chaque série

Avant de rédiger une série :

1. Parcourir l'index par numéro de question et par thème.
2. Ouvrir les sections correspondantes dans la version complète.
3. Vérifier les exigences déjà définies, y compris les décisions indirectement liées.
4. Écarter ou reformuler les sujets redondants. Ne pas reposer une question simplement parce qu'elle est ancienne ou difficile à retrouver.
5. Préférer les lacunes concrètes, les cas limites, les interactions entre fonctions, la sécurité, la récupération, la traçabilité, l'accessibilité et la robustesse.
6. Rédiger cinq questions indépendantes autant que possible. Chaque question doit proposer des choix compréhensibles et progressifs, sans cacher une décision majeure dans une option technique.
7. Présenter les cinq questions en français et demander une réponse compacte.
8. Après la réponse, interpréter les choix, puis documenter les décisions et leurs implications normatives.

### Règle essentielle sur les questions de détail

L'assistant doit décider lui-même des détails d'implémentation raisonnables : validation, journalisation, erreurs, transactions, compatibilité, contrôles d'intégrité, valeurs par défaut, accessibilité, tests, reprise, sécurité et comportements de repli. Ces décisions doivent être cohérentes avec l'architecture et les choix précédents. Ne demander à l'utilisateur que les choix qui modifient réellement le comportement produit, les priorités ou les compromis fonctionnels.

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

À la reprise depuis l'état V3.93, les sujets suivants sont déjà couverts et ne doivent pas être reposés sous une forme générique :

- **Gestion des projets — section 10.10 / Q32** : création, nommage, sauvegarde, duplication, suppression, bascule, ressources intégrées ou partagées, paramètres de projet, récupération, historique, versions, import/export, dépendances, conflits, ressources manquantes et transfert entre ordinateurs.
- **Dépendances des extensions — Q564 à Q568** : contraintes de versions, résolution déterministe, ordonnancement, cycles et dépendances facultatives.
- **Reproductibilité et intégrité des générations — Q589 à Q593** : instantanés immuables, empreintes des ressources, traçabilité des moteurs et paramètres, publication sûre, manifeste et bilan vérifiable.

Ces repères sont ceux du dernier état contrôlé ; ils doivent être revalidés si une version plus récente existe.

## 6. Point exact de reprise connu

La dernière série proposée mais **pas encore répondue** est :

### Q594 — Durée de conservation des sauvegardes
1. Conservation limitée au nombre de sauvegardes défini par l'utilisateur.
2. Conservation selon une durée configurable.
3. Conservation intelligente combinant nombre, ancienneté et importance, avec protection des points de restauration importants.

### Q595 — Emplacements de sauvegarde
1. Un emplacement principal configurable.
2. Plusieurs emplacements configurables.
3. Plusieurs emplacements avec réplication automatique et détection des destinations indisponibles.

### Q596 — Protection des sauvegardes
1. Aucune protection supplémentaire.
2. Chiffrement configurable.
3. Chiffrement systématique des sauvegardes sensibles, gestion sécurisée des clés et vérification d'intégrité.

### Q597 — Vérification des sauvegardes
1. Vérification uniquement lors de la restauration.
2. Vérification automatique après chaque sauvegarde.
3. Vérifications régulières, détection des corruptions et tests de restauration dans un environnement isolé.

### Q598 — Restauration après incident majeur
1. Restauration manuelle depuis une sauvegarde sélectionnée.
2. Assistant guidé pour retrouver le dernier état exploitable.
3. Reprise après incident avec détection des données récupérables, analyse des pertes potentielles et restauration contrôlée.

**Reprise immédiate :** présenter à nouveau Q594–Q598 si aucune réponse n'a été reçue dans la conversation en cours. Ne pas les considérer comme validées. Après réception de la réponse, traiter et documenter les cinq décisions, puis continuer à **Q599–Q603** après vérification des doublons.

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
