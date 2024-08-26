# Survey App

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


```javascript
addSurvey ({
  name: "Enquête de Satisfaction 001",
  description: "Évaluation de la satisfaction des clients.",
  createdAt: "2024-07-25T08:00:00Z",
  createdBy: {
    employeeName: "Fatoumata",
    employeeRole: "Responsable d'achats et ventes"
  },
 
});


```
**getSurveys()**

Cette fonction retourne toutes les enquêtes stockées dans la collection surveys.
Exemple :


```javascript
[
  {
    _id: "64eb7f1a7b2e3b001f4c5d70",
    surveyId:1
    name: "Enquête de Satisfaction 001",
    description: "Évaluation de la satisfaction des clients."
     createdAt: "2024-07-25T08:00:00Z",
  createdBy: {
    employeeName: "Fatoumata",
    employeeRole: "Responsable d'achats et ventes"
  },
  
  }
  
  

]

```
**getSurveyById(surveyId)**

Cette fonction retourne une enquête spécifique par son ID.
Exemple :



```javascript
 getSurvey(1); 

```
**updateSurvey(surveyId, updateData)**

Cette fonction met à jour les informations d'une enquête spécifique et retourne un message en cas de succès.
Exemple :



```javascript
updateSurvey (1, {
  name: "Enquête de Satisfaction 001",
  description: "Enquête visant à évaluer la satisfaction des clients concernant nos services.",
  createdAt: "2024-07-25T08:00:00Z",
  createdBy: {
    employeeName: "Jane Smith",
    employeeRole: "Responsable du service client"
  }

 
});


```
**destroySurvey(surveyId)**

Cette fonction supprime une enquête de la base de données et retourne un message en cas de succès.
Exemple :



```javascript
destroySurvey(1);  

```
**questionModule.js**

Ce module gère les opérations CRUD pour la collection questions.

**addQuestion(question)**

Cette fonction permet d'ajouter une question dans la base de données et retourne un message en cas de succès.
Exemple :



```javascript
addQuestion({
  id: 1,
  surveyId: 1,
  title: "Comment évalueriez-vous notre service ?",
  type: "rating",
   options: {
    minValue: 1,
    maxValue: 5,
    step: 1
  }
});


```


**getQuestions()**

Cette fonction retourne toutes les questions stockées dans la collection `questions`.
Exemple :

```javascript
[
  {
    _id: "64eb7f1a7b2e3b001f4c5d72",
    surveyId: 6,
    title: "Comment évalueriez-vous notre service ?",
    type: "rating",
    options: {
      minValue: 1,
      maxValue: 5,
      step: 1
    }
  },
  {
    _id: "64eb7f1a7b2e3b001f4c5d73",
    surveyId: 4,
    title: "Comment évalueriez-vous notre produit ?",
    type: "rating",
    options: {
      minValue: 1,
      maxValue: 10,
      step: 0.5
    }
  }
]
```

**getQuestionById(questionId)**

Cette fonction retourne une question spécifique par son ID. 
Exemple :



```javascript
getQuestion(1); 


```
**updateQuestion(questionId, updateData)**

Cette fonction met à jour les informations d'une question spécifique et retourne un message en cas de succès.
Exemple :



```javascript
updateQuestion(1, {
  
  title: "Comment évalueriez-vous notre produit ?",
  options: {
    minValue: 1,
    maxValue: 10,
    step: 0.5
  }
});


```

**destroyQuestion(questionId)**

Cette fonction supprime une question de la base de données et retourne un message en cas de succès.
Exemple :



```javascript
 destroyQuestion(1); 

```
**answerModule.js**

Ce module gère les opérations CRUD pour la collection answers.

**addAnswer(answer)**

Cette fonction permet d'ajouter une réponse dans la base de données et retourne un message en cas de succès.
Exemple :


```javascript
 addAnswer({
  id: 1,
  questionId: 1,
  title: "Très satisfait",
});


```
**getAnswers()**

Cette fonction retourne toutes les réponses stockées dans la collection answers.
Exemple :



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



```javascript
getAnswer(1); 


```
**updateAnswer(answerId, updateData)**

Cette fonction met à jour les informations d'une réponse spécifique et retourne un message en cas de succès.
Exemple :


```javascript
 updateAnswer(1,{
  title: "Satisfait",
  questionId:8
});


```
**destroyAnswer(answerId)**

Cette fonction supprime une réponse de la base de données et retourne un message en cas de succès.
Exemple :


```javascript
destroyAnswer(1); 


```
# Auteur

[Aichetou Taher Sy](https://github.com/shyshasy)