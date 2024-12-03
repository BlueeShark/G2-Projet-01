const playButon = document.querySelector('.play-button');
const audioPlayer = document.getElementById('audioPlayer');

playButon.addEventListener("click", (playGame) => {
    const gameWindow = document.getElementById ('game-container');
    console.log("testGame");
    gameWindow.style.display = 'flex';
    playButon.style.display = 'none';
})

