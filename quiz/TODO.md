# QUIZ APP

## Storage Structure

```js
const questionsAndAnswers = [
  {
    question: "something",
    correctAnswer: "correcr answer",
    choices: ["options", "inluding the correct answer"],
  },
];
```

- I will get the data from api will look like this

```js
[
  {
    "category": "film_and_tv",
    "id": "6257409a9da29df7b05f73ea",
    "correctAnswer": "The Bridge on the River Kwai",
    "incorrectAnswers": [
      "Goodfellas",
      "The 400 Blows",
      "Joker"
    ],
    "question": {
      "text": "Name the movie that matches the following plot summary: 'POWs are forced to build a railway, not knowing that allies are planning to destroy it.'"
    },
    "tags": [
      "film",
      "film_and_tv"
    ],
    "type": "text_choice",
    "difficulty": "medium",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "science",
    "id": "6462624aab138b829b81e9dd",
    "correctAnswer": "Mosquito",
    "incorrectAnswers": [
      "Fly",
      "Tick",
      "Flea"
    ],
    "question": {
      "text": "Which insect transmits dengue fever, encephalitis and dog heartworm?"
    },
    "tags": [
      "insects",
      "disease",
      "science",
      "medicine"
    ],
    "type": "text_choice",
    "difficulty": "medium",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "geography",
    "id": "62374010cb85f7ce9e949cd8",
    "correctAnswer": "Brazzaville",
    "incorrectAnswers": [
      "Tirana",
      "N'Djamena",
      "Yaren District"
    ],
    "question": {
      "text": "What is the capital city of Republic of the Congo?"
    },
    "tags": [
      "africa",
      "capital_cities",
      "geography"
    ],
    "type": "text_choice",
    "difficulty": "hard",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "food_and_drink",
    "id": "624ab0bf348a461bfc670695",
    "correctAnswer": "The Middle East",
    "incorrectAnswers": [
      "South America",
      "Central Asia",
      "Southeast Asia"
    ],
    "question": {
      "text": "Where in the world are radishes originally from?"
    },
    "tags": [
      "food",
      "food_and_drink"
    ],
    "type": "text_choice",
    "difficulty": "hard",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "geography",
    "id": "63b058704799123c67712f2b",
    "correctAnswer": "Rajasthan",
    "incorrectAnswers": [
      "Madhya Pradesh",
      "Maharashtra",
      "Uttar Pradesh"
    ],
    "question": {
      "text": "Which is the largest state in India?"
    },
    "tags": [
      "india",
      "geography"
    ],
    "type": "text_choice",
    "difficulty": "hard",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "arts_and_literature",
    "id": "622a1c397cc59eab6f950f44",
    "correctAnswer": "Edgar Allan Poe",
    "incorrectAnswers": [
      "Stephen King",
      "Nathaniel Hawthorne",
      "Mario Puzo"
    ],
    "question": {
      "text": "Which author wrote 'The Tell-Tale Heart'?"
    },
    "tags": [
      "literature",
      "arts_and_literature"
    ],
    "type": "text_choice",
    "difficulty": "hard",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "film_and_tv",
    "id": "622a1c347cc59eab6f94f964",
    "correctAnswer": "The Usual Suspects",
    "incorrectAnswers": [
      "The Shining",
      "Ghost",
      "The Adventures of Robin Hood"
    ],
    "question": {
      "text": "Which film contains the character 'Roger \"Verbal\" Kint'?"
    },
    "tags": [
      "fictitious_characters",
      "film",
      "film_and_tv"
    ],
    "type": "text_choice",
    "difficulty": "medium",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "film_and_tv",
    "id": "622a1c347cc59eab6f94f8e1",
    "correctAnswer": "Clint Eastwood",
    "incorrectAnswers": [
      "James Cagney",
      "Marlon Brando",
      "Harrison Ford"
    ],
    "question": {
      "text": "Which actor played the role of Blondie in The Good, the Bad, and the Ugly?"
    },
    "tags": [
      "people",
      "acting",
      "general_knowledge",
      "film",
      "film_and_tv"
    ],
    "type": "text_choice",
    "difficulty": "medium",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "history",
    "id": "622a1c3c7cc59eab6f951a79",
    "correctAnswer": "Zimbabwe",
    "incorrectAnswers": [
      "Pakistan",
      "Kenya",
      "Panama"
    ],
    "question": {
      "text": "Southern Rhodesia became what country in 1980?"
    },
    "tags": [
      "names",
      "1980's",
      "history"
    ],
    "type": "text_choice",
    "difficulty": "medium",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "music",
    "id": "622a1c357cc59eab6f94feab",
    "correctAnswer": "Elton John",
    "incorrectAnswers": [
      "Mika",
      "Madonna",
      "Eric Clapton"
    ],
    "question": {
      "text": "Which singer released the album 'Goodbye Yellow Brick Road'?"
    },
    "tags": [
      "general_knowledge",
      "music"
    ],
    "type": "text_choice",
    "difficulty": "medium",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "sport_and_leisure",
    "id": "6242e83aa22452794eaef20a",
    "correctAnswer": "The Irons",
    "incorrectAnswers": [
      "Cottagers",
      "The Hatters",
      "The Reds"
    ],
    "question": {
      "text": "What is the nickname of the English football team West Ham United?"
    },
    "tags": [
      "sport"
    ],
    "type": "text_choice",
    "difficulty": "medium",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "film_and_tv",
    "id": "622a1c377cc59eab6f95065b",
    "correctAnswer": "Salma Hayek",
    "incorrectAnswers": [
      "Frances Fisher",
      "Rachel Weisz",
      "Keira Knightley"
    ],
    "question": {
      "text": "Which actress has appeared in films including Traffic and Eternals?"
    },
    "tags": [
      "film_and_tv",
      "film",
      "acting"
    ],
    "type": "text_choice",
    "difficulty": "hard",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "general_knowledge",
    "id": "6476390bf05ea6d6f587a179",
    "correctAnswer": "For example",
    "incorrectAnswers": [
      "And another thing",
      "In other words",
      "And so on"
    ],
    "question": {
      "text": "What does the Latin abbreviation term 'e.g.' mean?"
    },
    "tags": [
      "latin",
      "general_knowledge"
    ],
    "type": "text_choice",
    "difficulty": "medium",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "geography",
    "id": "625ea012796f721e95543fcc",
    "correctAnswer": "13 horizontal stripes of red and white, with a blue rectangle in the top left containing 50 white stars.",
    "incorrectAnswers": [
      "Two equal horizontal bands of blue and yellow.",
      "Red with a white cross that extends to the edges.",
      "Green with a yellow diamond in the center with a blue celestial globe."
    ],
    "question": {
      "text": "What does the flag of United States look like?"
    },
    "tags": [
      "flags",
      "usa",
      "geography"
    ],
    "type": "text_choice",
    "difficulty": "easy",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "society_and_culture",
    "id": "6371627d1bf863c45ca6c37e",
    "correctAnswer": "Virtue strives for what is difficult",
    "incorrectAnswers": [
      "Such is life",
      "Tender is the loving mother",
      "Become good through ardor"
    ],
    "question": {
      "text": "What is the meaning of the Latin phrase 'Tendit in ardua virtus'?"
    },
    "tags": [
      "society_and_culture",
      "language",
      "the_romans",
      "classics"
    ],
    "type": "text_choice",
    "difficulty": "medium",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "geography",
    "id": "623740f0cb85f7ce9e949d32",
    "correctAnswer": "Nur-Sultan",
    "incorrectAnswers": [
      "Gitega",
      "Asmara",
      "Tashkent"
    ],
    "question": {
      "text": "What is the capital city of Kazakhstan?"
    },
    "tags": [
      "geography"
    ],
    "type": "text_choice",
    "difficulty": "hard",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "film_and_tv",
    "id": "647f9df73a4302a71927169f",
    "correctAnswer": "Friends",
    "incorrectAnswers": [
      "Seinfeld",
      "The Office",
      "Band of Brothers"
    ],
    "question": {
      "text": "What Emmy-winning show did Lisa Kudrow star in?"
    },
    "tags": [
      "sitcoms",
      "tv",
      "film_and_tv"
    ],
    "type": "text_choice",
    "difficulty": "medium",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "society_and_culture",
    "id": "622a1c357cc59eab6f94fcf1",
    "correctAnswer": "Indo-European",
    "incorrectAnswers": [
      "Austroasiatic",
      "Sino-Tibetan",
      "Niger–Congo"
    ],
    "question": {
      "text": "The language 'English' belongs to which language family?"
    },
    "tags": [
      "language",
      "society_and_culture"
    ],
    "type": "text_choice",
    "difficulty": "medium",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "society_and_culture",
    "id": "65056f707a97013de78b5449",
    "correctAnswer": "Mahdavism",
    "incorrectAnswers": [
      "Roman Catholicism",
      "Eastern Orthodoxy",
      "Protestantism"
    ],
    "question": {
      "text": "Which of these is not a branch of Christianity?"
    },
    "tags": [
      "society_and_culture",
      "religion",
      "christianity"
    ],
    "type": "text_choice",
    "difficulty": "medium",
    "regions": [],
    "isNiche": false
  },
  {
    "category": "film_and_tv",
    "id": "625740fa9da29df7b05f7406",
    "correctAnswer": "A slacker seeks restitution for a rug ruined by debt collectors.",
    "incorrectAnswers": [
      "On a journey to find the cure for a curse, a boy finds himself in the middle of a war.",
      "After awakening from a coma, a former assassin wreaks vengeance on those who betrayed her.",
      "The son of a former boxer is trained by his father for a mixed martial arts tournament."
    ],
    "question": {
      "text": "What is the plot of the movie The Big Lebowski?"
    },
    "tags": [
      "film",
      "film_and_tv"
    ],
    "type": "text_choice",
    "difficulty": "medium",
    "regions": [],
    "isNiche": false
  }
]
```
- First i will parse these structure and derive the required structure from that
- Then i will connect this with adapter and then in that adapter i will get the choices and correct answer
- Then i will check all the rules in the domain and then at runtime i will calculate the score of the person
