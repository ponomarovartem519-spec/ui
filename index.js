document.addEventListener('DOMContentLoaded', () => {

const questions = [

{
question: "Який дебют починається ходами 1.e4 e5 2.Nf3 Nc6 3.Bb5 ?",
answers: [
"Італійська партія",
"Іспанська партія (Руї Лопеса)",
"Шотландська партія",
"Захист Каро-Канн"
],
correct: 1
},

{
question: "Що означає термін 'цугцванг' у шахах?",
answers: [
"Ситуація коли будь-який хід погіршує позицію",
"Примусовий мат у 2 ходи",
"Подвійний шах",
"Жертва ферзя"
],
correct: 0
},

{
question: "Скільки можливих позицій приблизно існує в шахах (число Шеннона)?",
answers: [
"10^20",
"10^50",
"10^120",
"10^200"
],
correct: 2
},

{
question: "Яка фігура НЕ може поставити мат самостійно з королем?",
answers: [
"Кінь",
"Тура",
"Ферзь",
"Слон"
],
correct: 0
},

{
question: "Який чемпіон світу відомий стилем позиційного 'удава', що поступово душить позицію суперника?",
answers: [
"Михайло Таль",
"Гаррі Каспаров",
"Тигран Петросян",
"Анатолій Карпов"
],
correct: 3
},

{
question: "Що таке 'вилка' у шахах?",
answers: [
"Атака двох або більше фігур одночасно",
"Жертва пішака для розвитку",
"Рокіровка на ферзевий фланг",
"Блокування короля"
],
correct: 0
},

{
question: "Який дебют виникає після ходів 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 ?",
answers: [
"Сицилійський захист",
"Індійський захист короля",
"Французький захист",
"Захист Німцовича"
],
correct: 1
},

{
question: "Яка максимальна кількість фігур може одночасно атакувати одне поле?",
answers: [
"8",
"12",
"16",
"27"
],
correct: 3
}

];

const startScreen = document.querySelector('#start-screen');
const quizScreen = document.querySelector('#quiz-screen');
const resultScreen = document.querySelector('#result-screen');

const startBtn = document.querySelector('#start-btn');
const restartBtn = document.querySelector('#restart-btn');

const questionText = document.querySelector('#question-text');
const answersContainer = document.querySelector('#answers-container');

const scoreDisplay = document.querySelector('#score-display');
const timerDisplay = document.querySelector('#timer');
const resultText = document.querySelector('#result-text');

let score = 0;
let questionIndex = 0;
let interval;

const nameInput = document.querySelector("#name-input");

const hero = document.querySelector("body");

nameInput.addEventListener("input", (event) => {

    const nameText = nameInput.value.toLowerCase();

    console.log(nameText); 
                                                                
    if(nameText === "гукеш доммараджу"){
        hero.classList.add("hero-block-sviatoslav");
    } else {
        hero.classList.remove("hero-block-sviatoslav");
    }
});



function startGame() {

    startScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
    resultScreen.classList.add('hide');

    score = 0;
    questionIndex = 0;

    scoreDisplay.textContent = "Бали: 0";

    showQuestion(questions[questionIndex]);
}

function showQuestion(question) {

    clearInterval(interval);
    startTimer();

    questionText.textContent = question.question;

    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {

        const btn = document.createElement('button');

        btn.textContent = answer;

        btn.addEventListener('click', () => checkAnswer(btn, index));

        answersContainer.appendChild(btn);

    });
}

function checkAnswer(button, index) {

    const buttons = answersContainer.querySelectorAll('button');
    const correctAnswer = questions[questionIndex].correct;

    buttons.forEach((btn, i) => {

        btn.disabled = true;

        if(i === correctAnswer){
            btn.classList.add('correct');
        }

        if(i === index && index !== correctAnswer){
            btn.classList.add('wrong');
        }

    });

    if(index === correctAnswer){
        score++;
        scoreDisplay.textContent = `Бали: ${score}`;
    }

    setTimeout(nextQuestion, 1200);
}

function nextQuestion(){

    questionIndex++;

    if(questionIndex < questions.length){
        showQuestion(questions[questionIndex]);
    }
    else{
        showResult();
    }

}

function showResult(){

    clearInterval(interval);

    quizScreen.classList.add("hide");
    resultScreen.classList.remove("hide");

    const accuracy = Math.round((score / questions.length) * 100);

    resultText.textContent =
    `Твій результат: ${score} з ${questions.length} (${accuracy}%)`;

}

function startTimer(){

    clearInterval(interval);

    let timeLeft = 15;

    timerDisplay.textContent = `Час: ${timeLeft}`;

    interval = setInterval(() => {

        timeLeft--;

        timerDisplay.textContent = `Час: ${timeLeft}`;

        if(timeLeft <= 0){

            clearInterval(interval);

            nextQuestion();

        }

    },1000);

}

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);


});