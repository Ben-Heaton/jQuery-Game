import randomiseGridIDs from "./jqGameExtra";
import randomiseCardIDs from "./jqGameExtra";

$(document).ready(function () {
    import randomiseCardIDs from './jqGameExtra.js';

    const $all_game_cards = $('.game_card');
    const $resetGameButton = $('#reset_game_button');
    let card_count = 0;
    let current_flipped_cards = [];
    let card1 = current_flipped_cards[0];
    let card2 = current_flipped_cards[1];

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

    // If two cards are flipped over, compare them. ----------------------------Here next!---------------------------------------------------------
    function check_cards(card1, card2) {
        if (card1 = (card2 -1) {

        }
    }

    $resetGameButton.on('click', function (event) {
        $all_game_cards.removeClass().addClass('game_card_bs');
        card_count = 0;
        current_flipped_cards = [];
    });

}); // End of .ready

