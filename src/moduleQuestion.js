// questions.js
const { client, db } = require("./config/database");

const collectionQuestion = db.collection("questions");

async function generateUniqueQuestionId() {
  const lastQuestion = await collectionQuestion
    .find({})
    .sort({ questionId: -1 })
    .limit(1)
    .toArray();
  return lastQuestion.length > 0 ? lastQuestion[0].id + 1 : 1;
}

async function addQuestion(document) {
  try {
    document.id = await generateUniqueQuestionId();
    await collectionQuestion.insertOne(document);
    console.log(`Le document ${document.id} a été ajouté avec succès.`);
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

async function updateQuestion(id, updateData) {
  try {
    const result = await collectionQuestion.updateOne(
      { id },
      { $set: updateData }
    );
    if (result.modifiedCount > 0) {
      console.log(`Document ${id} modifié avec succès.`);
    } else {
      console.log(`Aucun document trouvé avec l'ID ${id} pour mise à jour.`);
    }
  } catch (e) {
    console.error(`Erreur lors de la mise à jour du document: ${e.message}`);
  }
}

async function destroyQuestion(id) {
  try {
    const result = await collectionQuestion.deleteOne({ id });
    if (result.deletedCount > 0) {
      console.log(`Document ${id} supprimé avec succès.`);
    } else {
      console.log(`Aucun document trouvé avec l'ID ${id} pour suppression.`);
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
