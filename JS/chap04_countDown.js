const startingSecond = 5;
let time = startingSecond * 100;

const countDown = document.getElementById('countDown');
const countDownCard = document.getElementById('countdownCard');


function updateCountdown() {
    const secondes = Math.floor(time /100);
    let miliseconds = time % 100;

    countDown.innerHTML = `${secondes} : ${miliseconds}`;
    time --;
    time = time < 0 ? 0 :time;
}