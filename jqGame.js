$(document).ready(function () {
    const $all_game_cards = $('.game_card');
    let card_count = 0;
    let current_flipped_cards = [];
    let card_1 = current_flipped_cards[0]
    let card_2 = current_flipped_cards[1]

    // On load. Ready to play.
    $all_game_cards.addClass('game_card_bs');

    // On click, flip card.
    $all_game_cards.on('click', function (event) {
        $(event.currentTarget).removeClass('game_card_bs').addClass('game_card_fs');

        // Add 1 to the card counter when a card is flipped over.
        card_count+= 1;

        // Also add the card ID to the tracker array.
        track_cards(event.currentTarget.id)

        // Checks if two cards are flipped over.
        if (card_count === 2) {
            check_cards()
        }
    });

    // Tracks current IDs of flipped over cards.
    function track_cards(card) {
        current_flipped_cards.push(card);
    }

    // If two cards are flipped over, compare them.
    function check_cards(card_1, card_2) {
        if (card_1 === card_2) {

        }
    }

}); // End of .ready