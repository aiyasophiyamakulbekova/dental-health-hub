
function checkAnswer(button, correct) {

    const result = document.getElementById("quiz-result");

    if (correct) {
        result.textContent = "✓ Correct! Enamel is the hardest tissue in the human body.";
        result.style.color = "#4f8062";
    } else {
        result.textContent = "✗ Not quite. Try again!";
        result.style.color = "#c85f68";
    }
}
function checkAnswer(question, answer) {
    const result = document.getElementById("result" + question);

    if (answer === "correct") {
        result.textContent = "✓ Correct! Great job!";
    } else {
        result.textContent = "✗ Not quite. Try again!";
    }
}
