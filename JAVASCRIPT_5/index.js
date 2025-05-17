function rollDice() {
    const noofdice = document.getElementById('box').value;
    const box = document.getElementById('box');
    const diceresult = document.getElementById('diceResult');
    const diceimages = document.getElementById('diceImage');
    const results = [];
    const images = [];

    for (let i = 0; i < noofdice; i++) {
        const result = Math.floor(Math.random() * 6 + 1);
        results.push(result);
        images.push(`<img src="dice_Images/${result}.png" width="100px" height="100px">`);
        diceresult.textContent = `Dice : ${results.join(', ')}`;
        diceimages.innerHTML = images.join('');
    }
}
