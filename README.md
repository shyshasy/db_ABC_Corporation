  ## Fiche Enquête - ABC Corporation

 ## Description

  Cette application JavaScript permet de gérer les fiches d'enquête de satisfaction des clients. Elle utilise MongoDB comme base de données pour stocker les données et offre des fonctionnalités pour effectuer des opérations CRUD (Create, Read, Update, Delete) sur les enquêtes, les questions et les réponses.

  ## Prérequis

  ## Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

  Node.js (version 12 ou supérieure)
  MongoDB (version 4.0 ou supérieure)

  ## Installation

  1. Clonez le dépôt :

  frapper

  ## Copier le code

  git clone https://github.com/shyshasy/db_ABC_Corporation.git

  2. Accédez au dossier du projet :

  frapper

  ## Copier le code

  cd fiche_enquete

  3. Installer les dépendances :

  frapper

  ## Copier le code

  npm install
  Configuration de la Base de Données
  Le fichier config/database.js contient la configuration nécessaire pour interagir avec la base de données. Avant de lancer l'application, créez la base de données et les collections avec les commandes suivantes :

  1. Créez la base de données :

  frapper

  Copier le code

  use fiche_enquete

  2. Créez les collections :

  frapper

  ## Copier le code

  db.createCollection("surveys")
  db.createCollection("questions")
  db.createCollection("answers")

  ## Modules et documentation

  ## L'application est structurée autour de plusieurs modules. Voici les détails sur chacun d'entre eux :

 ## 1.config/database.js

  Ce fichier contient la configuration pour la connexion à MongoDB et la définition des collections utilisées.

  ## 2.surveyModule.js

   Ce module gère les opérations CRUD pour la collection surveys.

  ## addSurvey(document)

  Ajout d'une enquête à la collection surveys. 

  ## Paramètre :

  document (Object) : name:string, description:string, createdAt:date, createdBy:Object { employeeName:string, employeeRole:string }, 
  questions:Array<Object>

  ## Copier le code

  {
    "title": "Customer Satisfaction Survey",
    "createdAt": "2024-08-15",
    "questions": []
  }

  ## getSurvey()

    Récupère toutes les enquêtes.
    Retour : Array<Object>
    
  ## updateSurvey(surveyId, updateData)

  Met à jour une enquête précise. 
  Paramètres :

  surveyId:string
  updateData:Object : name:string, description:string, 

  Exemple :
  
  json

  Copier le code
  {
    "title": "Updated Survey Title"
  }

  ## destroySurvey(surveyId)

  Supprime une enquête.
  
  Paramètre :

  surveyId:string

  3.questionModule.js
  Ce module gère les opérations CRUD pour la collection questions.

  ## addQuestion(document)

  Ajoute une question à la collection questions. 

  ## Paramètre :

 document (Object) : title:string, surveyId:string

  Exemple :
  
  json

 ## Copier le code

  {
    "text": "How satisfied are you with our service?",
    "surveyId": "612c1f1c9e2f4a001f4e2a59"
  }
  ## getQuestion()

  Récupère toutes les questions. 
  Retour : Array<Object>

  ## updateQuestion(questionId, updateData)

  Met à jour une question précise. 
  Paramètres :

   questionId:string
   updateData:Object : title:string, 

  Exemple :
  json

  Copier le code
  {
    "text": "Updated Question Text"
  }

  destroyQuestion(questionId)

  Supprimez une question. 

 ## Paramètre :

  questionId:string

  4.answerModule.js

  Ce module gère les opérations CRUD pour la collection answers.

  ## addAnswer(document)

  Ajoute une réponse à la collection answers. 

  ## Paramètre :

  document (Object) : title:string, questionId:string 
  
  Exemple :
  json

  ## Copier le code

  {
    "text": "Very satisfied",
    "questionId": "612c1f1c9e2f4a001f4e2a59"
  }
  ## getAnswer()

  Récupère toutes les réponses. 
  Retour : Array<Object>

 ## updateAnswer(answerId, updateData)

  Met à jour une réponse précise. 

  ## Paramètres :

  answerId:string
  updateData:Object : title:string, 

  Exemple :
  json

  Copier le code
  {
    "text": "Somewhat satisfied"
  }

  ## destroyAnswer(answerId)

  Supprimez une réponse. 

 ## Paramètre :

  answerId:string

  ## Utilisation

 ## Pour démarrer l'application, exécutez la commande suivante :

  frapper

  ## Copier le code
  
  npm start

  ## Auteur

  [Aichetou Taher Sy](https://github.com/shyshasy)