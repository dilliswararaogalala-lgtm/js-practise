import { parseQuestion, parseQuestions } from "../src/parser.js";
import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";

describe("Parse the question", () => {
  it("Parse the single question", () => {
    const question = {
      "correctAnswer": "The Bridge on the River Kwai",
      "incorrectAnswers": [
        "Goodfellas",
        "The 400 Blows",
        "Joker",
      ],
      "question": {
        "text":
          "Name the movie that matches the following plot summary: 'POWs are forced to build a railway, not knowing that allies are planning to destroy it.'",
      },
    };

    const result = parseQuestion(question);
    assertEquals(result, {
      question:
        "Name the movie that matches the following plot summary: 'POWs are forced to build a railway, not knowing that allies are planning to destroy it.'",
      options: [
        "Goodfellas",
        "The 400 Blows",
        "Joker",
        "The Bridge on the River Kwai",
      ],
      correctAnswer: "The Bridge on the River Kwai",
    });
  });

  it("parse all the questions", () => {
    const questions = [{
      "correctAnswer": "The Bridge on the River Kwai",
      "incorrectAnswers": [
        "Goodfellas",
        "The 400 Blows",
        "Joker",
      ],
      "question": {
        "text":
          "Name the movie that matches the following plot summary: 'POWs are forced to build a railway, not knowing that allies are planning to destroy it.'",
      },
    }, {
      "correctAnswer": "Mosquito",
      "incorrectAnswers": [
        "Fly",
        "Tick",
        "Flea",
      ],
      "question": {
        "text":
          "Which insect transmits dengue fever, encephalitis and dog heartworm?",
      },
    }, {
      "correctAnswer": "Brazzaville",
      "incorrectAnswers": [
        "Tirana",
        "N'Djamena",
        "Yaren District",
      ],
      "question": {
        "text": "What is the capital city of Republic of the Congo?",
      },
    }];

    const result = parseQuestions(questions);
    assertEquals(result, [{
      question:
        "Name the movie that matches the following plot summary: 'POWs are forced to build a railway, not knowing that allies are planning to destroy it.'",
      options: [
        "Goodfellas",
        "The 400 Blows",
        "Joker",
        "The Bridge on the River Kwai",
      ],
      correctAnswer: "The Bridge on the River Kwai",
    }, {
      correctAnswer: "Mosquito",
      options: [
        "Fly",
        "Tick",
        "Flea",
        "Mosquito",
      ],
      question:
        "Which insect transmits dengue fever, encephalitis and dog heartworm?",
    }, {
      correctAnswer: "Brazzaville",
      options: [
        "Tirana",
        "N'Djamena",
        "Yaren District",
        "Brazzaville",
      ],
      question: "What is the capital city of Republic of the Congo?",
    }]);
  });
});
