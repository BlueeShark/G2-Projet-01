const button1 = document.getElementById("lightTheme");
const button2 = document.getElementById("darkTheme");
const body = document.body;
const text1 = document.querySelectorAll(".choiceBlock p");

function changeColorLight() {
    body.style.backgroundColor = "var(--color-three)";
    button1.style.boxShadow = "10px 4px 19px 0px rgba(0, 0, 0, 0.5)";
    button2.style.boxShadow = "10px 4px 19px 0px rgba(0, 0, 0, 0.5)";
    button1.style.backgroundColor = "var(--color-three)";
    button2.style.backgroundColor = "var(--color-three)";
    text1.forEach(function(p) {
        p.style.backgroundColor = "var(--color-three)";
        p.style.border = "var(--color-one) solid 2px";
        p.style.color = "var(--color-one)";
        p.style.boxShadow = "10px 4px 19px 0px rgba(0, 0, 0, 0.5)";
    });
}

function changeColorDark() {
    body.style.backgroundColor = "var(--color-one)";
    button1.style.boxShadow = "10px 4px 19px 0px rgba(0, 0, 0, 0.85)";
    button2.style.boxShadow = "10px 4px 19px 0px rgba(0, 0, 0, 0.85)";
    button1.style.backgroundColor = "var(--color-one)";
    button2.style.backgroundColor = "var(--color-one)";
    text1.forEach(function(p) {
        p.style.backgroundColor = "var(--color-one)";
        p.style.border = "var(--color-two) solid 2px";
        p.style.color = "var(--color-two)";
        p.style.boxShadow = "10px 4px 19px 0px rgba(0, 0, 0, 0.85)";
    });
}

button1.addEventListener("click", changeColorLight);
button2.addEventListener("click", changeColorDark);