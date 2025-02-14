const questions = document.querySelectorAll(".clickable");
const answers = document.querySelectorAll(".answer");
const plusIcon = document.querySelectorAll(".plus-icon");
const minusIcon = document.querySelectorAll(".minus-icon");

questions.forEach((question, indexPergunta) => {
    question.addEventListener("click", () => {
        answers[indexPergunta].classList.toggle("active");
        plusIcon[indexPergunta].classList.toggle("on");
        minusIcon[indexPergunta].classList.toggle("on");
    })
})