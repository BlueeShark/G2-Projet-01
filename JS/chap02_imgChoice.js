const button1 = document.getElementById("lightTheme");
const button2 = document.getElementById("darkTheme");
const currentColorOne = getComputedStyle(document.documentElement).getPropertyValue('--color-one');
const currentColorTwo = getComputedStyle(document.documentElement).getPropertyValue('--color-two');
const currentColorThree = getComputedStyle(document.documentElement).getPropertyValue('--color-three');
const currentColorFour = getComputedStyle(document.documentElement).getPropertyValue('--color-four');

function changeColorLight() {
    document.documentElement.style.setProperty('--color-one', currentColorThree);
    document.documentElement.style.setProperty('--color-two', currentColorFour);
}

function changeColorDark() {
    document.documentElement.style.setProperty('--color-one', '#0f181e');
    document.documentElement.style.setProperty('--color-two', '#fcf4cd');
}

button1.addEventListener("click", changeColorLight);
button2.addEventListener("click", changeColorDark);

// const body = document.body;
// const text1 = document.querySelectorAll(".choiceBlock p");
// const text2 = document.querySelectorAll("#themeBar button");
// function changeColorLight() {
//     body.style.backgroundColor = "var(--color-three)";
//     text1.forEach(function(p) {
//         p.style.backgroundColor = "var(--color-three)";
//         p.style.border = "var(--color-four) solid 2px";
//         p.style.color = "var(--color-four)";
//         p.style.boxShadow = "10px 4px 19px 0px rgba(0, 0, 0, 0.5)";
//     });
//     text2.forEach(function(button) {
//         button.style.boxShadow = "10px 4px 19px 0px rgba(0, 0, 0, 0.5)";
//         button.style.backgroundColor = "var(--color-three)";
//         button.style.color = "var(--color-four)";
//         button.style.border = "var(--color-four) solid 2px";
//     })
// }