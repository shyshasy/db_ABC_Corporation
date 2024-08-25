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

**Utilisation**

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

```javascript
const survey = {
  name: "Enquête de Satisfaction 001",
  description: "Évaluation de la satisfaction des clients.",
  createdAt: "2024-07-25T08:00:00Z",
  createdBy: {
    employeeName: "Fatoumata",
    employeeRole: "Responsable d'achats et ventes"
  },
  options: {
    minValue: 1,
    maxValue: 5,
    step: 1
  }
};
await addSurvey(survey);

```
**getSurveys()**

Cette fonction retourne toutes les enquêtes stockées dans la collection surveys.
Exemple :

javascriptscript

```javascript
[
  {
    _id: "64eb7f1a7b2e3b001f4c5d70",
    name: "Enquête de Satisfaction 001",
    description: "Évaluation de la satisfaction des clients."
  },
  {
    _id: "64eb7f1a7b2e3b001f4c5d71",
    name: "Enquête de Satisfaction 002",
    description: "Retour sur l'expérience utilisateur."
  }
]

```
**getSurveyById(surveyId)**

Cette fonction retourne une enquête spécifique par son ID.
Exemple :

javascriptscript

```javascript
const survey = await getSurvey(1); // 1 étant l'ID de l'enquête à récupérer
console.log(survey);

```
**updateSurvey(surveyId, updateData)**

Cette fonction met à jour les informations d'une enquête spécifique et retourne un message en cas de succès.
Exemple :

javascriptscript

```javascript
const updateData =  {
  name: "Enquête de Satisfaction Mise à Jour",
  description: "Mise à jour de l'évaluation de la satisfaction des clients.",
  createdAt: "2024-07-25T08:00:00Z",
  createdBy: {
    employeeName: "Fatoumata",
    employeeRole: "Responsable d'achats et ventes"
  },
  options: {
    minValue: 1,
    maxValue: 10,
    step: 1
  }
};
await updateSurvey(1, updateData); // 1 étant l'ID de l'enquête à mettre à jour

```
**destroySurvey(surveyId)**

Cette fonction supprime une enquête de la base de données et retourne un message en cas de succès.
Exemple :

javascriptscript

```javascript
await destroySurvey(1); // 1 étant l'ID de l'enquête à supprimer

```
**questionModule.js**

Ce module gère les opérations CRUD pour la collection questions.

**addQuestion(question)**

Cette fonction permet d'ajouter une question dans la base de données et retourne un message en cas de succès.
Exemple :

javascriptscript

```javascript
const question = {
  id: 1,
  surveyId: 1,
  title: "Comment évalueriez-vous notre service ?",
  type: "rating",
   options: {
    minValue: 1,
    maxValue: 5,
    step: 1
  }
};
await addQuestion(question);

```

**getQuestions()**

Cette fonction retourne toutes les questions stockées dans la collection questions.
Exemple :

javascriptscript

```javascript
const question = await getQuestion(1); // 1 étant l'ID de la question à récupérer
console.log(question);

```
**updateQuestion(questionId, updateData)**

Cette fonction met à jour les informations d'une question spécifique et retourne un message en cas de succès.
Exemple :

javascriptscript

```javascript
const updateData = {
  title: "Comment évalueriez-vous notre produit ?",
  options: {
    minValue: 1,
    maxValue: 10,
    step: 0.5
  }
};
await updateQuestion(1, updateData); // 1 étant l'ID de la question à mettre à jour

```

**destroyQuestion(questionId)**

Cette fonction supprime une question de la base de données et retourne un message en cas de succès.
Exemple :

javascriptscript

```javascript
await destroyQuestion(1); // 1 étant l'ID de la question à supprimer

```
**answerModule.js**

Ce module gère les opérations CRUD pour la collection answers.

**addAnswer(answer)**

Cette fonction permet d'ajouter une réponse dans la base de données et retourne un message en cas de succès.
Exemple :

javascriptscript

```javascript
const answer = {
  id: 1,
  questionId: 1,
  title: "Très satisfait",
};
await addAnswer(answer);

```
**getAnswers()**

Cette fonction retourne toutes les réponses stockées dans la collection answers.
Exemple :

javascriptscript

```javascript
[
  {
    _id: "64eb7f1a7b2e3b001f4c5d70",
    name: "Enquête de Satisfaction 001",
    description: "Évaluation de la satisfaction des clients."
  },
  {
    _id: "64eb7f1a7b2e3b001f4c5d71",
    name: "Enquête de Satisfaction 002",
    description: "Retour sur l'expérience utilisateur."
  }
]

```
**getAnswerById(answerId)**

Cette fonction retourne une réponse spécifique par son ID.
Exemple :

javascriptscript

```javascript
const answer = await getAnswer(1); // 1 étant l'ID de la réponse à récupérer
console.log(answer);

```
**updateAnswer(answerId, updateData)**

Cette fonction met à jour les informations d'une réponse spécifique et retourne un message en cas de succès.
Exemple :

javascriptscript

```javascript
const updateData = {
  title: "Satisfait",
};
await updateAnswer(1, updateData); // 1 étant l'ID de la réponse à mettre à jour

```
**destroyAnswer(answerId)**

Cette fonction supprime une réponse de la base de données et retourne un message en cas de succès.
Exemple :

javascriptscript

```javascript
await destroyAnswer(1); // 1 étant l'ID de la réponse à supprimer


```
# Auteur

[Aichetou Taher Sy](https://github.com/shyshasy)