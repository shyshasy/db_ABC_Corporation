# Fiche Enquête - ABC Corporation

## Description

Cette application JavaScript permet de gérer les fiches d'enquête de satisfaction des clients. Elle utilise MongoDB comme base de données pour stocker les données et offre des fonctionnalités pour effectuer des opérations CRUD (Create, Read, Update, Delete) sur les enquêtes, les questions et les réponses.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

Node.js (version 12 ou supérieure)
MongoDB (version 4.0 ou supérieure)

**Installation**

Clonez le repository :

````bash
git clone https://github.com/shyshasy/db_ABC_Corporation.git
````
Accédez au dossier du projet :


`````bash
cd db_ABC_Corporation
`````

**Installer les dépendances :**


````bash
npm install
````
**Configurez la base de données :**

Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
Mettez les paramètres de connexion dans config/database.js.
Utilisation
Pour démarrer l'application, exécutez la commande suivante :

````bash
npm start
````

# Modules et Documentation

L'application est structurée autour de plusieurs modules. Voici les détails sur chacun d'entre eux :

**surveyModule.js**

Ce module gère les opérations CRUD pour la collection surveys.

**addSurvey(survey)**

Cette fonction permet d'ajouter une enquête dans la base de données et retourne un message en cas de succès.
Exemple :

javascript

````bash
{
  name: "Enquête de Satisfaction 001",
  description: "Évaluation de la satisfaction des clients.",
  createdAt: "2024-08-15",
  createdBy: {
      employeeName: "Fatoumata",
      employeeRole: "Responsable d'achats et ventes"
  },
  questions: []
}
````
**getSurveys()**

Cette fonction retourne toutes les enquêtes stockées dans la collection surveys.
Exemple :

javascript

`````bash
[
  {
    name: "Enquête de Satisfaction 001",
    description: "Évaluation de la satisfaction des clients."
  }
]
`````
**getSurveyById(surveyId)**

Cette fonction retourne une enquête spécifique par son ID.
Exemple :

javascript

````bash
{
  _id: "612c1f1c9e2f4a001f4e2a59",
  name: "Enquête de Satisfaction 001"
}
````
**updateSurvey(surveyId, updateData)**

Cette fonction met à jour les informations d'une enquête spécifique et retourne un message en cas de succès.
Exemple :

javascript

````bash
{
  name: "Enquête de Satisfaction Mise à Jour"
}
````
**destroySurvey(surveyId)**

Cette fonction supprime une enquête de la base de données et retourne un message en cas de succès.
Exemple :

javascript

````bash
{
  message: "Enquête supprimée avec succès"
}
````
**questionModule.js**

Ce module gère les opérations CRUD pour la collection questions.

**addQuestion(question)**

Cette fonction permet d'ajouter une question dans la base de données et retourne un message en cas de succès.
Exemple :

javascript

```bash
{
  title: "Comment évalueriez-vous notre service ?",
  surveyId: "612c1f1c9e2f4a001f4e2a59"
}
```

**getQuestions()**

Cette fonction retourne toutes les questions stockées dans la collection questions.
Exemple :

javascript

````bash
[
  {
    title: "Comment évalueriez-vous notre service ?"
  }
]
````
**updateQuestion(questionId, updateData)**

Cette fonction met à jour les informations d'une question spécifique et retourne un message en cas de succès.
Exemple :

javascript

```bash
{
  title: "Question mise à jour"
}
```

**destroyQuestion(questionId)**

Cette fonction supprime une question de la base de données et retourne un message en cas de succès.
Exemple :

javascript

````bash
{
  message: "Question supprimée avec succès"
}
````
**answerModule.js**

Ce module gère les opérations CRUD pour la collection answers.

**addAnswer(answer)**

Cette fonction permet d'ajouter une réponse dans la base de données et retourne un message en cas de succès.
Exemple :

javascript

````bash
{
  text: "Très satisfait",
  questionId: "612c1f1c9e2f4a001f4e2a59"
}
````
**getAnswers()**

Cette fonction retourne toutes les réponses stockées dans la collection answers.
Exemple :

javascript

`````bash
[
  {
    text: "Très satisfait"
  }
]
`````
**getAnswerById(answerId)**

Cette fonction retourne une réponse spécifique par son ID.
Exemple :

javascript

`````bash
{
  _id: "612c1f1c9e2f4a001f4e2a59",
  text: "Très satisfait"
}
`````
**updateAnswer(answerId, updateData)**

Cette fonction met à jour les informations d'une réponse spécifique et retourne un message en cas de succès.
Exemple :

javascript

````bash
{
  text: "Satisfait"
}
````
**destroyAnswer(answerId)**

Cette fonction supprime une réponse de la base de données et retourne un message en cas de succès.
Exemple :

javascript

````bash
{
  message: "Réponse supprimée avec succès"
}

````
# Auteur

[Aichetou Taher Sy](https://github.com/shyshasy)