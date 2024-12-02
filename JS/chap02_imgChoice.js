const button = document.getElementById("javChoices");
const body = document.body;
const text = document.querySelectorAll(".choiceBlock p");

function changeColorLight() {
    body.style.backgroundColor = "var(--color-three)";
    text.forEach(function(p) {
        p.style.backgroundColor = "var(--color-three)";
        p.style.border = "var(--color-one) solid 2px";
        p.style.color = "var(--color-one)";
    });
}

button.addEventListener("click", changeColorLight);