const playButon = document.querySelector('.play-button');
const catTalking = document.getElementById('catTalking');
const bossChicken = document.getElementById('chickenBoss');
const gameWindow = document.getElementById ('bossFightGame');
const victoryText = document.getElementById ('victoryText');
const looseText = document.getElementById ('looseText');
const villageButton = document.getElementById ('chap05_link');
const restartButton = document.getElementById ('chap04_01_link');

//afficher le canvs du jeu
playButon.addEventListener("click", (playGame) => {
    gameWindow.style.display = 'flex';
    playButon.style.display = 'none';
    catTalking.style.display = 'none';
    setInterval (updateCountdown, 10);
})

//definir le canvs
const gameCanvas = document.getElementById('bossCanva');
const context = gameCanvas.getContext("2d");
const canvaWidth = gameCanvas.width = 1000;
const canvaheight = gameCanvas.height = 600;

//setting poulet et barre de vie
let health = 100;
const healthBarWidth = 200;
const healthBarheight = 30;
const x = canvaWidth / 2 - healthBarWidth / 2;
const y = 20;
const healthBar = new HealthBar(x, y, healthBarWidth, healthBarheight, health, "red");

const frame = function() {
    context.clearRect(0, 0, canvaWidth, canvaheight);
    healthBar.show(context);
    fightOutcome();
    requestAnimationFrame(frame);
}

//retirer des hp lors du click
bossChicken.onclick = function() {
    health -= 5;
    healthBar.updateHealth(health);
}

function fightOutcome() {
    if (health <= 0) {
        bossChicken.style.display = 'none';
        healthBar.hide();
        victoryText.style.display = 'flex';
        countDownCard.style.display = 'none';
        setTimeout(() => {
            villageButton.style.display = 'flex';
        }, 2000);
    }
    else if (time <= 0) {
        healthBar.hide();
        looseText.style.display = 'flex';
        countDownCard.style.display = 'none';
        setTimeout(() => {
            restartButton.style.display = 'flex';
        }, 2000);
    }
}



frame();
