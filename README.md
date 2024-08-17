  # Fiche Enquête - ABC Corporation

  ## Description

  Cette application JavaScript permet de gérer les fiches d'enquête de satisfaction des clients. Elle utilise MongoDB comme base de données pour stocker les données et offre des fonctionnalités pour effectuer des opérations CRUD (Create, Read, Update, Delete) sur les enquêtes, les questions et les réponses.

  # Prérequis

  Avant de commencer, assurez-vous d'avoir installé les éléments suivants :
  Node.js (version 12 ou supérieure)
  MongoDB (version 4.0 ou supérieure)

  ## Installation

  Clonez le dépôt :

  ```bash
  git clone https://github.com/shyshasy/db_ABC_Corporation.git
  ```

  ### Accédez au dossier du projet :

  ```bash
  cd fiche_enquete
  ```
  ### Installer les dépendances :

  ```bash
  npm install
  ```

  ### Créez la base de données :


  ```bash
  use fiche_enquete
  ```
  Créez les collections :

  ```bash
  db.createCollection("surveys")
  db.createCollection("questions")
  db.createCollection("answers")`
  ```
  # Modules et Documentation

  L'application est structurée autour de plusieurs modules. Voici les détails sur chacun d'entre eux :

  ### config/database.js
  Ce fichier contient la configuration pour la connexion à MongoDB et la définition des collections utilisées.

  ### surveyModule.js
  Ce module gère les opérations CRUD pour la collection surveys.

  ### addSurvey(document)

  Paramètres :

  document (Object) : L'objet contenant les informations de l'enquête à ajouter.
  name (String) : Le nom de l'enquête.
  description (String) : Une brève description de l'enquête.
  createdAt (Date) : Date de création de l'enquête.
  createdBy (Object) : L'employé qui a créé l'enquête (avec employeeName et employeeRole).
  questions (Array<Object>) : Les questions associées à l'enquête.
  Exemple :

  javascript

  ````bash
  const newSurvey = {   
      name: "Enquête de Satisfaction 001",
      description: "Évaluation de la satisfaction des clients.",
      createdAt: "2024-08-15",
      createdBy: {
          employeeName: "Camara",
          employeeRole: "Responsable du service client"
      },
      questions: []
  };
  const result = await addSurvey(newSurvey);
  ````
  ### getSurveys()

  Description : Récupère toutes les enquêtes stockées dans la collection surveys.

  Retour : Array d'objets représentant les enquêtes.

  Exemple :

  javascript

  ````bash
  const surveys = await getSurveys();
  console.log(surveys);
  getSurveyById(surveyId)
  ````
  Paramètres :

  surveyId (String) : L'ID de l'enquête à récupérer.
  Description : Récupère une enquête spécifique par son ID.

  Exemple :

  javascript

  ````bash
  const survey = await getSurveyById("612c1f1c9e2f4a001f4e2a59");
  updateSurvey(surveyId, updateData)
  ````

  Paramètres :

  surveyId (String) : L'ID de l'enquête à mettre à jour.
  updateData (Object) : Les nouvelles informations de l'enquête (e.g., name, description).

  Exemple :

  javascript


  ````bash
  await updateSurvey("612c1f1c9e2f4a001f4e2a59", { name: "Enquête de Satisfaction Mise à Jour" });
  ````
  ### destroySurvey(surveyId)

  Paramètres :

  surveyId (String) : L'ID de l'enquête à supprimer.

  Exemple :

  javascript

  ````bash
  await destroySurvey("612c1f1c9e2f4a001f4e2a59");
  ````

  ### questionModule.js

  Ce module gère les opérations CRUD pour la collection questions.

  ### addQuestion(document)

  Paramètres :

  document (Object) : L'objet contenant les informations de la question à ajouter.
  title (String) : Le texte de la question.
  surveyId (String) : L'ID de l'enquête à laquelle la question est liée.

  Exemple :

  javascript

  ````bash
  const newQuestion = {
      title: "Comment évalueriez-vous notre service ?",
      surveyId: "612c1f1c9e2f4a001f4e2a59"
  };
  const result = await addQuestion(newQuestion);
  ````
  ### getQuestions()

  Description : Récupère toutes les questions stockées dans la collection questions.

  Retour : Array d'objets représentant les questions.

  Exemple :

  javascript

  ````bash
  const questions = await getQuestions();
  console.log(questions);`
  ````

  ### getQuestionById(questionId)

  Paramètres :

  questionId (String) : L'ID de la question à récupérer.
  Description : Récupère une question spécifique par son ID.

  Exemple :

  javascript

  ````bash
  const question = await getQuestionById("612c1f1c9e2f4a001f4e2a59");
  ````

  ### updateQuestion(questionId, updateData)

  Paramètres :

  questionId (String) : L'ID de la question à mettre à jour.
  updateData (Object) : Les nouvelles informations de la question (e.g., title).
  Exemple :

  javascript

  ````bash
  await updateQuestion("612c1f1c9e2f4a001f4e2a59", { title: "Question mise à jour" });
  ````

  #### destroyQuestion(questionId)

  Paramètres :

  questionId (String) : L'ID de la question à supprimer.

  Exemple :

  javascript


  ````bash
  await destroyQuestion("612c1f1c9e2f4a001f4e2a59");
  ````

  ### answerModule.js

  Ce module gère les opérations CRUD pour la collection answers.

  ### addAnswer(document)

  Paramètres :

  document (Object) : L'objet contenant les informations de la réponse à ajouter.
  text (String) : Le texte de la réponse.
  questionId (String) : L'ID de la question à laquelle la réponse est liée.
  Exemple :

  javascript

  ````bash
  const newAnswer = {
      text: "Très satisfait",
      questionId: "612c1f1c9e2f4a001f4e2a59"
  };
  const result = await addAnswer(newAnswer);
  ````

  ## getAnswers()

  Description : Récupère toutes les réponses stockées dans la collection answers.

  Retour : Array d'objets représentant les réponses.

  Exemple :

  javascript

  ````bash
  const answers = await getAnswers();
  console.log(answers);
  getAnswerById(answerId)
  ````
  Paramètres :

  answerId (String) : L'ID de la réponse à récupérer.
  Description : Récupère une réponse spécifique par son ID.

  Exemple :

  javascript

  ````bash
  const answer = await getAnswerById("612c1f1c9e2f4a001f4e2a59");
  ````

  ### updateAnswer(answerId, updateData)

  Paramètres :

  answerId (String) : L'ID de la réponse à mettre à jour.
  updateData (Object) : Les nouvelles informations de la réponse (e.g., text).
  Exemple :

  javascript

  ````bash
  await updateAnswer("612c1f1c9e2f4a001f4e2a59", { text: "Satisfait" });`
  ````

  ### destroyAnswer(answerId)

  Paramètres :

  answerId (String) : L'ID de la réponse à supprimer.

  Exemple :

  javascript

  ````bash
  await destroyAnswer("612c1f1c9e2f4a001f4e2a59");
  ````

  ## Utilisation

  Pour démarrer l'application, exécutez la commande suivante :



  ````bash
  npm start
  ````
  # Auteur

  [Aichetou Taher Sy](https://github.com/shyshasy)