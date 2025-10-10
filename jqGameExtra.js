export default function randomiseCardIDs() {
    let idsArray = [];

    // Fill the array with numbers from 1 to 24, number not divisible by 3 will be card IDs.
    for (let i = 1; i < 24; i++) {
        if (i % 3 !== 0) {
            idsArray.push(i);
        }
    }

    // Shuffle the array using the Fisher-Yates algorithm.
    for (let i = idsArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [idsArray[i], idsArray[j]] = [idsArray[j], idsArray[i]];
    }

    // Assign the 'IDs' from idsArray to HTML 'game_card' divs.
    const game_cards = document.querySelectorAll(".game_card");
    game_cards.forEach(function(game_card, index) {
        game_card.setAttribute("id", "idsArray[index]");
    });

    return idsArray;
}