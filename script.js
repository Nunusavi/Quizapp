const quizData = [
    {
        question: "What are some of my favorite hobbies or pastimes?",
        a:"Reading",
        b:"Hiking",
        c:"Painting",
        d:"Writing",
        correct: "d",
    },
    {
        question: "Can you name one of my favorite books or authors?",
        a: "'To Kill a Mockingbird' by Harper Lee",
        b: "'Harry Potter' series by J.K. Rowling",
        c: "'In the Presence of Absence' by Mahmoud Darwish",
        d: "'Art of Suduction' by Robert Greene",
        correct: "c",
    },
    {
        question: "What are some of my career aspirations or goals?",
        a: "Becoming a successful entrepreneur",
        b: "Pursuing a career in Aviation",
        c: "Working in environmental conservation",
        d: "Entering academia and teaching",
        correct: "a",
    },
    {
        question: "What's my favorite dish?",
        a: "Doro Wat",
        b: "Shiro",
        c: "Full fish fried",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which countries or places have I mentioned wanting to visit ?",
        a: "Dessie",
        b: "Dubai",
        c: "Mekelle",
        d: "China",
        correct: "a",
    },
    {
        question: "What are some of my core values or beliefs? Equality and social justice",
        a: "Equality and social justice",
        b: "Personal growth and development",
        c: "Environmental sustainability",
        d: "Family and community",
        correct: "b",
    },
    {
        question: "What's my preferred way of spending weekends or free time?",
        a: "Exploring nature and hiking",
        b: "Reading books and relaxing at home",
        c: "Going to concerts or live events",
        d: "Trying out new restaurants and cuisines",
        correct: "b",
    },
    {
        question: "Do you know any of my pet peeves or dislikes?",
        a: "Disorganization and clutter",
        b: "Loud chewing noises",
        c: "Cold weather",
        d: "Unpunctuality",
        correct: "d",
    },
    {
        question: "What are some of my favorite music genres, bands, or artists?",
        a: "Pop - Taylor Swift",
        b: "Hip-hop - Kendrick Lamar",
        c: "RnB - Daniel Caesar",
        d: "Electronic - Daft Punk",
        correct: "c",
    },
    {
        question: "What is my preferred way of celebrating special occasions, like birthdays or anniversaries?",
        a: "Having a small gathering with close friends and family",
        b: "Going on a weekend getaway or trip",
        c: "Enjoying a fancy dinner at a fine dining restaurant",
        d: "Organizing a themed party or event",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            if(score >= 8){
                quiz.innerHTML ='<h2>You know me too well, You are a great friend!</h2><button onclick="location.reload()">Reload</button>';
            }
            else if (score >= 5 && score < 8){
                quiz.innerHTML ='<h2>  We need to work on our friendship, You are a good friend though!</h2><button onclick="location.reload()">Reload</button>';
            }
            else {
                quiz.innerHTML ='<h2>  Who are you? You are not my friend! Disappointment </h2><button onclick="location.reload()">Reload</button>';
            }
            
        }
    }
});