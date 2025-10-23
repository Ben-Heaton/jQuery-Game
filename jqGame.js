$(document).ready(function () {

    // ---- Global Variables -------------------------------------------------------------------------------------------
    const $all_game_cards = $('.game_card');
    const $resetGameButton = $('#reset_game_button');
    let card_count = 0;
    let current_flipped_cards = [];

    let $card_one_is = $('#card_one_is');   // FOR TESTING PURPOSES!
    let $card_two_is = $('#card_two_is');   // FOR TESTING PURPOSES!

    // ---- Game Functions ---------------------------------------------------------------------------------------------

    // On load. Ready to play.
    $all_game_cards.addClass('game_card_bs');
    randomiseCardIDs();

    const cardClassMap = {
        1: 'game_card_fs_html',
        2: 'game_card_fs_html',
        4: 'game_card_fs_css',
        5: 'game_card_fs_css',
        7: 'game_card_fs_csharp',
        8: 'game_card_fs_csharp',
        10: 'game_card_fs_java',
        11: 'game_card_fs_java',
        13: 'game_card_fs_javascript',
        14: 'game_card_fs_javascript',
        16: 'game_card_fs_jquery',
        17: 'game_card_fs_jquery',
        19: 'game_card_fs_postgresql',
        20: 'game_card_fs_postgresql',
        22: 'game_card_fs_python',
        23: 'game_card_fs_python'
    };

    $all_game_cards.on('click', function (event) {  // --------------------------- adjust timings ------------------------------------------------------
        const $card = $(event.currentTarget);
        const cardId = parseInt($card.attr('id'), 10);
        const cardClass = cardClassMap[cardId];

        $card.fadeOut(2000).removeClass('game_card_bs');

        if (cardClass) {
            $card.fadeIn(1000).addClass(cardClass).off('click');
        }

        card_count += 1;
        track_cards(cardId);

        $card_one_is.innerHTML = current_flipped_cards[0];  // FOR TESTING PURPOSES!
        $card_two_is.innerHTML = current_flipped_cards[1];  // FOR TESTING PURPOSES!

        if (card_count === 2) {
            $all_game_cards.off('click');
            check_cards();
        }
    });

    // Tracks current IDs of flipped over cards.
    function track_cards(card) {
        current_flipped_cards.push(card);
    }

    // Shuffle 'cards' IDs so that on load a different layout is made.
    function randomiseCardIDs() {
        let idsArray = [];

        // Fill array with numbers 1–23, excluding multiples of 3
        for (let i = 1; i < 24; i++) {
            if (i % 3 !== 0) {
                idsArray.push(i);
            }
        }

        // Shuffle using Fisher-Yates
        for (let i = idsArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [idsArray[i], idsArray[j]] = [idsArray[j], idsArray[i]];
        }

        // Assign shuffled IDs to each .game_card element
        let cards = document.getElementsByClassName("game_card");
        for (let i = 0; i < cards.length && i < idsArray.length; i++) {
            cards[i].setAttribute("id", idsArray[i]);
        }
    }

    // If two cards are flipped over, compare them. ----------------------------FINISH---------------------------------------------------------
    function check_cards() {
        let card_1 = current_flipped_cards[0];
        let card_2 = current_flipped_cards[1];
        if (card_1 === card_2 - 1 || card_1 === card_2 + 1) {
            document.getElementById("test").innerHTML = "Match!";
        } else {
            card_count = 0;
            current_flipped_cards = [];
        }
    }

    $resetGameButton.on('click', function (event) { //------------------------Doesn't work properly ----------------------------------------------
        $all_game_cards.removeClass().addClass('game_card_bs');
        card_count = 0;
        current_flipped_cards = [];
        randomiseCardIDs();
    });

}); // End of .ready