const { client, db } = require("./config/database");

const collectionAnswer = db.collection("answers");

async function generateUniqueAnswerId(collectionAnswer) {
  const lastAnswer = await collectionAnswer
    .find({})
    .sort({ id: -1 })
    .limit(1)
    .toArray();
  return lastAnswer.length > 0 ? lastAnswer[0].id + 1 : 1;
}

async function addAnswer(document) {
  try {
    document.id = await generateUniqueAnswerId(collectionAnswer);
    await collectionAnswer.insertOne(document);
    console.log(`Le document ${document.id} a été ajouté avec succès.`);
  } catch (e) {
    console.error(`Erreur lors de l'ajout du document: ${e.message}`);
  }
}

async function getAnswer() {
  try {
    const result = await collectionAnswer.find({}).toArray();
    console.log("Résultats :", result);
  } catch (e) {
    console.error(`Erreur lors de la récupération des réponses: ${e.message}`);
  }
}

async function updateAnswer(id, updateData) {
  try {
    // Exclure le champ `_id` de `updateData` s'il est présent
    const { _id, ...updateFields } = updateData;

    const result = await collectionAnswer.updateOne(
      { id: id },
      { $set: updateFields }
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

async function destroyAnswer(id) {
  try {
    const result = await collectionAnswer.deleteOne({ id: id });
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
  addAnswer,
  getAnswer,
  updateAnswer,
  destroyAnswer,
};
