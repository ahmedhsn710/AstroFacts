const solarSystemFacts = {
  "fact1": {
      "question": "What is the name of the largest planet in our solar system?",
      "options": ["Saturn", "Neptune", "Jupiter", "Uranus"],
      "answer": "Jupiter"
  },
  "fact2": {
      "question": "Which planet is known as the Red Planet?",
      "options": ["Venus", "Mars", "Jupiter", "Mercury"],
      "answer": "Mars"
  },
  "fact3": {
      "question": "What is the name of the brightest object in the sky after the Sun and Moon?",
      "options": ["Venus", "Mars", "Jupiter", "Mercury"],
      "answer": "Venus"
  },
  "fact4": {
      "question": "Which planet has the most moons?",
      "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
      "answer": "Jupiter"
  },
  "fact5": {
      "question": "What is the name of the planet that is closest to the Sun?",
      "options": ["Venus", "Mercury", "Mars", "Jupiter"],
      "answer": "Mercury"
  },
  "fact6": {
      "question": "Which planet supports life?",
      "options": ["Venus", "Mars", "Earth", "Neptune"],
      "answer": "Earth"
  },
  "fact7": {
      "question": "What is the name of the planet that has the Great Red Spot?",
      "options": ["Neptune", "Mars", "Jupiter", "Uranus"],
      "answer": "Jupiter"
  },
  "fact8": {
      "question": "Which planet has the shortest day?",
      "options": ["Mercury", "Mars", "Jupiter", "Venus"],
      "answer": "Jupiter"
  },
  "fact9": {
      "question": "How many planets are there in solar system?",
      "options": ["5", "6", "7", "8"],
      "answer": "8"
  },
  "fact10": {
      "question": "What is the name of the last planet of solar system?",
      "options": ["Venus", "Mars", "Jupiter", "Neptune"],
      "answer": "Neptune"
  },
  "fact11": {
      "question": "How many moons do Earth have?",
      "options": ["1", "2", "3", "4"],
      "answer": "1"
  },
  "fact12": {
      "question": "What is the number of Earth from the sun?",
      "options": ["1", "2", "3", "4"],
      "answer": "3"
  },
  "fact13": {
      "question": "Which planet do we live on?",
      "options": ["Mars", "Venus", "Earth", "Mercury"],
      "answer": "Earth"
  },
  "fact14": {
      "question": "Earth is a?",
      "options": ["Planet", "Moon", "Star", "Spaceship"],
      "answer": "Planet"
  },
  "fact15": {
      "question": "The planet closest to Earth is?",
      "options": ["Jupiter", "Venus", "Mars", "Mercury"],
      "answer": "Mars"
  },
  "fact16": {
      "question": "Which planet has the most rings?",
      "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
      "answer": "Saturn"
  },
  "fact17": {
      "question": "What is the center of the solar system?",
      "options": ["Venus", "Sun", "Jupiter", "Mercury"],
      "answer": "Sun"
  },
  "fact18": {
      "question": "Which planet is the coldest?",
      "options": ["Neptune", "Uranus", "Jupiter", "Saturn"],
      "answer": "Uranus"
  },
}

// Get the container element for the quiz
const quizContainer = document.getElementById("quiz-container");

// Get the submit button
const submitButton = document.getElementById("submit-btn");
const nextbtn = document.getElementById("next-btn");

const answers = [];

// Display the quiz questions and answers
function displayQuiz() {
// Create an array of fact keys
const factKeys = Object.keys(solarSystemFacts);

// Shuffle the array to get random facts
const shuffledFacts = shuffleArray(factKeys);

// Get the first five random facts from the shuffled array
const selectedFacts = shuffledFacts.slice(0, 5);


// Loop through the selected facts and create an HTML form for each
let quizHTML = "";
for (let i = 0; i < selectedFacts.length; i++) {
  const fact = solarSystemFacts[selectedFacts[i]];
  quizHTML += `
    <div class="question">
      <h3>${fact.question}</h3>
      <ul>
  `;
  answers[i] = fact.answer;
  for (let j = 0; j < fact.options.length; j++) {
    quizHTML += `
      <li>
      <input id="option${j}" type="radio" name="question-${i}" value="${fact.options[j]}">
        <label for="option${j}">
           ${fact.options[j]}
        </label>
      </li>
    `;
  }
  quizHTML += `
      </ul>
    </div>
  `;
}

// Add the HTML to the quiz container
quizContainer.innerHTML = quizHTML;

// Add a listener for the submit button
submitButton.addEventListener("click", showResults);
}

// Show the quiz results
function showResults() {
// Get all the quiz answer elements
const answerContainers = quizContainer.querySelectorAll(".question ul");

// Keep track of the user's score
let score = 0;

// Loop through each question and check the user's answer
for (let i = 0; i < answerContainers.length; i++) {
  const answerContainer = answerContainers[i];
  const userAnswer = answerContainer.querySelector(`input[name="question-${i}"]:checked`);
  
  console.log(userAnswer);
  if (userAnswer !== null) {
    const userAnswerValue = userAnswer.value;
    console.log(userAnswerValue);
    if (userAnswerValue === answers[i]) {
      score++;
      answerContainer.classList.add("correct");
    } else {
      answerContainer.classList.add("incorrect");
    }
  }
}

// Display the user's score
const scoreContainer = document.getElementById("score-container");
scoreContainer.innerHTML = `
  <h2>Your Score</h2>
  <p>You got ${3} out of ${answerContainers.length} correct!</p>
  <button><a href="quiz.html" style="color: white;">Try Again!</a></button>
`;

scoreContainer.style.display = "block";
// Disable the submit button
submitButton.disabled = true;
}

// Shuffle an array in place
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]];
}
return array;
}

// Display the quiz when the page loads
displayQuiz();


const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const facts = document.querySelectorAll('.question');

let currentFactIndex = 0;

function showFact() {
facts.forEach(fact => {
  fact.style.display = 'none';
});
facts[currentFactIndex].style.display = 'block';

if (currentFactIndex === 0) {
  prevBtn.disabled = true;
} else {
  prevBtn.disabled = false;
}

if (currentFactIndex === facts.length - 1) {
  nextBtn.disabled = true;
} else {
  nextBtn.disabled = false;
}
}

showFact();

prevBtn.addEventListener('click', () => {
currentFactIndex--;
showFact();
});

nextBtn.addEventListener('click', () => {
currentFactIndex++;
showFact();
});