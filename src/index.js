const { addSurvey, getSurvey, updateSurvey, destroySurvey } = require("./moduleSurvey");
const { addAnswer, getAnswer, updateAnswer, destroyAnswer } = require("./moduleAnswer");
const { addQuestion, getQuestion, updateQuestion, destroyQuestion } = require("./moduleQuestion");





const question ={
  id: 1,
  surveyId: 1,
  title: "Comment évalueriez-vous notre service ?",
  type: "rating",
  options: {
    minValue: 1,  
    maxValue: 5,  
    step: 1  
  }
  
}


const survey = {
  id: 1,
  name: "Enquête de Satisfaction 001",
  description: "Enquête visant à évaluer la satisfaction des clients concernant nos services.",
  createdAt: "2024-07-25T08:00:00Z",
  createdBy: {
    employeeName: "Jane Smith",
    employeeRole: "Responsable du service client"
  }
}

const answer = {
  id: 1,
  questionId: 1,
  title: "Très satisfait"
}


async function main() {
  try {
    await addSurvey(survey)
    await getSurvey()
    await updateSurvey(1, survey)
    await destroySurvey(3)
    
    await addAnswer(answer)
    await getAnswer()
    await updateAnswer(1, answer)
    await destroyAnswer(1)


    await addQuestion(question)
    await getQuestion()
    await updateQuestion(1, question)
    await destroyQuestion(1)
  } catch (e) {
    console.log(e);
  }
}

main();
