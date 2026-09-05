
    // Quiz on prevention.html
    if (button.parentElement.classList.contains("quiz-question")) {
        result = button.parentElement.querySelector("p");
    }

    // Quiz on oral-health.html
    else {
        result = document.getElementById("quiz-result");
    }

    if (correct) {
        result.textContent = "✓ Correct! Great job!";
        result.style.color = "#4f8062";
    } else {
        result.textContent = "✗ Not quite. Try again!";
        result.style.color = "#c85f68";
    }
}
