document.querySelectorAll('.card').forEach(card => {
    const button = card.querySelector('.choiceButton');
    const imgContainer = card.querySelector('.imgContainer');

    button.addEventListener('mouseenter', () => {
        if (!imgContainer.classList.contains('flipped')) {
            imgContainer.classList.add('flipped');
        }
    });

    button.addEventListener('mouseleave', () => {
        if (imgContainer.classList.contains('flipped')) {
            imgContainer.classList.remove('flipped');
        }
    });
});
