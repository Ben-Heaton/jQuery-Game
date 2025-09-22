$(document).ready(() => {
    const $all_game_cards = $('.game_card');
    let card_count = 0;

    // On load. Ready to play.
    $all_game_cards.addClass('game_card_bs');

    // On click, flip card.
    function flip_card() {
        $all_game_cards.on('click', function(event) {
            $(event.currentTarget).removeClass('game_card_bs').addClass('game_card_fs');
            card_count += 1;
            current_cards($(event.currentTarget));
            check_card_count();
        }
    }

    function current_cards(card_1, card_2) {
        let card_1 = ""
    }

    function check_card_count() {
        if (card_count === 2) {
            check_card_match();
        }
    }

    function check_card_match(card_1, card_2) {

    }

}); // End of .ready