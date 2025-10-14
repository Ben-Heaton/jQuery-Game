$(document).ready(function () {

    const $all_game_cards = $('.game_card');
    const $resetGameButton = $('#reset_game_button');
    let card_count = 0;
    let current_flipped_cards = [];
    let card_1 = current_flipped_cards[0];
    let card_2 = current_flipped_cards[1];

    // On load. Ready to play.
    $all_game_cards.addClass('game_card_bs');
    randomiseCardIDs();

    // On click, 'flip' card.
    $all_game_cards.on('click', function (event) {
        $(event.currentTarget).fadeOut("2000").removeClass('game_card_bs').fadeIn("1000").addClass('game_card_fs_jquery');
        $(event.currentTarget).off("click");

        // Add 1 to the card counter when a card is flipped over.
        card_count += 1;

        // Also add the card ID to the tracker array.
        track_cards(event.currentTarget.id);

        // Checks if two cards are flipped over.
        if (card_count === 2) {
            $all_game_cards.off('click');
            check_cards();
        }
    });

    // Tracks current IDs of flipped over cards.
    function track_cards(card) {
        current_flipped_cards.push(card);
    }

    function randomiseCardIDs() {
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

        //return idsArray;
    }


    /*

    // If two cards are flipped over, compare them. ----------------------------Here next!---------------------------------------------------------
    function check_cards() {
        if (card_1 == card_2 - 1 || card_1 == card_2 + 1) {

        }
    }

    */

    $resetGameButton.on('click', function (event) {
        $all_game_cards.removeClass().addClass('game_card_bs');
        card_count = 0;
        current_flipped_cards = [];
    });

}); // End of .ready

