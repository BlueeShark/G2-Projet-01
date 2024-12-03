document.addEventListener("DOMContentLoaded", () => {
    const text = `Un jour, le calme du village fut brisé par un événement étrange. Une bande de poulets géants, venus d’on
ne sait où, ont envahi les fermes du village. Ces poulets n’étaient pas comme les autres : ils étaient agressifs,
rapides et possédaient des crêtes lumineuses qui semblaient étinceler comme des flammes. Ils s’attaquaient
aux greniers, détruisaient les cultures et effrayaient les habitants. Le maire du village convoqua une
réunion d’urgence. Les villageois, désespérés, cherchèrent une solution. C’est alors que Mistral fit son
entrée, sautant gracieusement sur une table. 
– "Je m’occuperai de ces poulets," déclara-t-il avec une
assurance inébranlable.`;

    const textContainer = document.getElementById("textContainer");
    let index = 0;

    function displayLetterByLetter() {
        if (index < text.length) {
            textContainer.innerHTML += text[index];
            index++;
            setTimeout(displayLetterByLetter, 50);
        }
    }

    displayLetterByLetter();
});
