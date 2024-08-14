// questions.js
const { client, db } = require("./config/database");

const collectionQuestion = db.collection("questions");

async function generateUniqueQuestionId() {
  const lastQuestion = await collectionQuestion
    .find({})
    .sort({ questionId: -1 })
    .limit(1)
    .toArray();
  return lastQuestion.length > 0 ? lastQuestion[0].questionId + 1 : 1;
}

async function addQuestion(document) {
  try {
    document.questionId = await generateUniqueQuestionId();
    await collectionQuestion.insertOne(document);
    console.log(`Le document ${document.questionId} a été ajouté avec succès.`);
  } catch (e) {
    console.error(`Erreur lors de l'ajout du document: ${e.message}`);
  }
}

async function getQuestion() {
  try {
    const result = await collectionQuestion.find({}).toArray();
    console.log("Résultats :", result);
    return result;
  } catch (e) {
    console.error(`Erreur lors de la récupération des questions: ${e.message}`);
  }
}

async function updateQuestion(questionId, updateData) {
  try {
    const result = await collectionQuestion.updateOne(
      { questionId },
      { $set: updateData }
    );
    if (result.modifiedCount > 0) {
      console.log(`Document ${questionId} modifié avec succès.`);
    } else {
      console.log(`Aucun document trouvé avec l'ID ${questionId} pour mise à jour.`);
    }
  } catch (e) {
    console.error(`Erreur lors de la mise à jour du document: ${e.message}`);
  }
}

async function destroyQuestion(questionId) {
  try {
    const result = await collectionQuestion.deleteOne({ questionId });
    if (result.deletedCount > 0) {
      console.log(`Document ${questionId} supprimé avec succès.`);
    } else {
      console.log(`Aucun document trouvé avec l'ID ${questionId} pour suppression.`);
    }
  } catch (e) {
    console.error(`Erreur lors de la suppression du document: ${e.message}`);
  }
}

module.exports = {
  addQuestion,
  getQuestion,
  updateQuestion,
  destroyQuestion
};
