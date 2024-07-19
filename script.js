document.addEventListener('DOMContentLoaded', function() {
    const adviceNoElement = document.getElementById('advice-no');
    const adviceTextElement = document.getElementById('advice-text');
    const patternDividerElement = document.getElementById('pattern-divider');
    const diceButtonElement = document.getElementById('dice-button');
    const diceImageElement = document.getElementById('dice-image');

    // Paths to images
    const patternDividerDesktop = './images/pattern-divider-desktop.svg';
    const diceImage = './images/icon-dice.svg';

    // Set image sources
    patternDividerElement.src = patternDividerDesktop;
    diceImageElement.src = diceImage;

    async function produceJoke() {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            adviceNoElement.textContent = `ADVICE #${data.slip.id}`;
            adviceTextElement.textContent = `"${data.slip.advice}"`;
        } catch (error) {
            console.error('Error fetching advice:', error);
        }
    }

    diceButtonElement.addEventListener('click', produceJoke);
});
