const { client, db } = require("./config/database");

const collectionSurvey = db.collection("surveys");

/**
 * Génère un ID unique pour l'enquête en cours.
 * @returns {number} L'ID unique.
 */
async function generateUniqueSurveyId() {
  const lastSurvey = await collectionSurvey
    .find({})
    .sort({ id: -1 })
    .limit(1)
    .toArray();
  return lastSurvey.length > 0 ? lastSurvey[0].id + 1 : 1;
}

/**
 * Ajoute une nouvelle enquête à la collection.
 * @param {object} document - Le document de l'enquête à ajouter.
 */
async function addSurvey(document) {
  try {
    document.id = await generateUniqueSurveyId();
    await collectionSurvey.insertOne(document);
    console.log(`Le document ${document.id} a été ajouté avec succès.`);
  } catch (e) {
    console.error(`Erreur lors de l'ajout du document: ${e.message}`);
  }
}

/**
 * Récupère toutes les enquêtes de la collection.
 * @returns {Promise<object[]>} Les enquêtes récupérées.
 */
async function getSurvey() {
  try {
    const result = await collectionSurvey.find({}).toArray();
    console.log("Résultats :", result);
    return result;
  } catch (e) {
    console.error(`Erreur lors de la récupération des enquêtes: ${e.message}`);
  }
}

/**
 * Met à jour une enquête existante.
 * @param {number} surveyId - L'ID de l'enquête à mettre à jour.
 * @param {object} updateData - Les données à mettre à jour.
 */
async function updateSurvey(surveyId, updateData) {
  try {
    const result = await collectionSurvey.updateOne(
      { surveyId },
      { $set: updateData }
    );
    if (result.modifiedCount > 0) {
      console.log(`Document ${surveyId} modifié avec succès.`);
    } else {
      console.log(`Aucun document trouvé avec l'ID ${surveyId} pour mise à jour.`);
    }
  } catch (e) {
    console.error(`Erreur lors de la mise à jour du document: ${e.message}`);
  }
}

/**
 * Supprime une enquête existante.
 * @param {number} surveyId - L'ID de l'enquête à supprimer.
 */
async function destroySurvey(surveyId) {
  try {
    const result = await collectionSurvey.deleteOne({ surveyId });
    if (result.deletedCount > 0) {
      console.log(`Document ${surveyId} supprimé avec succès.`);
    } else {
      console.log(`Aucun document trouvé avec l'ID ${surveyId} pour suppression.`);
    }
  } catch (e) {
    console.error(`Erreur lors de la suppression du document: ${e.message}`);
  }
}

module.exports = {
  addSurvey,
  getSurvey,
  updateSurvey,
  destroySurvey
};
