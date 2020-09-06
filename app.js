/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

store.totalQuestions = store.questions.length;

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/
function introScreen (store) {
  // return html string of intro
}

function questionScreen (store) {
  // return html string of qestion interface
}

function answerScreen () {
  // return html string of answer screen
}

function resultScreen () {
  // return html string of answer screen
}
// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

function render() {

  // This function conditionally replaces the contents of the <main> tag based on the state of the store

}

/********** EVENT HANDLER FUNCTIONS **********/

function handleSubmit () {
  
}

function handleStart () {

}

function initializeListeners () {
  //start event listeners


}
// These functions handle events (submit, click, etc)