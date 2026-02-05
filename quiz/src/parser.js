export const parseQuestion = (
  { question, correctAnswer, incorrectAnswers },
) => {
  const options = [...incorrectAnswers, correctAnswer];
  return { question: question.text, options, correctAnswer };
};

export const parseQuestions = (questions) => {
  return questions.map(parseQuestion);
};
