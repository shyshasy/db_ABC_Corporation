  ## Description
  Cette application JavaScript permet de gérer les fiches d'enquête de satisfaction des clients. Elle utilise MongoDB comme base de données pour stocker les données et offre des fonctionnalités pour effectuer des opérations CRUD (Create, Read, Update, Delete) sur les enquêtes, les questions et les réponses.

  ## Prérequis
  Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

  Node.js (version 12 ou supérieure)
  MongoDB (version 4.0 ou supérieure)
  Installation
  Pour configurer le projet sur votre machine locale, suivez ces étapes :

  Clonez le repository :

  bash
  Copier le code
  git clone https://github.com/shyshasy/db_ABC_Corporation.git
  Accédez au dossier du projet :

  bash
  Copier le code
  cd db_ABC_Corporation
  Installez les dépendances :

  bash
  Copier le code
  npm install
  Configuration de la base de données :

  Le fichier config/database.js contient la configuration nécessaire pour interagir avec la base de données et ses différentes collections. Avant de lancer l'application, vous devez mettre en place la base de données et les collections avec les commandes suivantes :

  ## Création de la base de données :

  bash
  Copier le code
  use db_ABC_Corporation
  Création des collections :

  bash
  Copier le code
  db.createCollection("surveys")
  db.createCollection("questions")
  db.createCollection("answers")

  ## Modules et Documentation

  ## L'application est structurée autour de plusieurs modules :

  config/database.js : Contient la configuration pour la connexion à MongoDB et la définition des collections utilisées.

  ## surveyModule.js : Gère les opérations CRUD pour la collection surveys. Les fonctions incluent :

  addSurvey(document) : Ajoute une enquête.
  getSurvey() : Récupère toutes les enquêtes.
  updateSurvey(surveyId, updateData) : Met à jour une enquête.
  destroySurvey(surveyId) : Supprime une enquête.

  ## questionModule.js : Gère les opérations CRUD pour la collection questions. Les fonctions incluent :

  addQuestion(document) : Ajoute une question.
  getQuestion() : Récupère toutes les questions.
  updateQuestion(questionId, updateData) : Met à jour une question.
  destroyQuestion(questionId) : Supprime une question.

  ## answerModule.js : Gère les opérations CRUD pour la collection answers. Les fonctions incluent :

  addAnswer(document) : Ajoute une réponse.
  getAnswer() : Récupère toutes les réponses.
  updateAnswer(answerId, updateData) : Met à jour une réponse.
  destroyAnswer(answerId) : Supprime une réponse.
  Les paramètres tels que surveyId, questionId et answerId sont des entiers (INT). Les objets manipulés sont des objets JavaScript ou JSON.

  ## Remarque : Les fonctions CRUD sont conçues pour traiter un seul document à la fois.

  index.js : Le point d'entrée principal de l'application, contenant la fonction principale main qui orchestre l'appel des différentes fonctions des modules.

  ## Utilisation

  ## Pour démarrer l'application, exécutez la commande suivante :

 ## bash

  Copier le code
  npm start

  ## Auteur
  Aichetou Taher Sy