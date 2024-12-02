const button = document.getElementById("javChoices");
const body = document.body;
const text = document.querySelectors(".choiceBlock p");

function changeColor() {
    body.style.backgroundColor = "var(--color-three)";
    text.style.backgroundColor = "var(--color-three)";
}

button.addEventListener("click", changeColor);