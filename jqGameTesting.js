$(document).ready(function () {

    // ---- Global Variables -------------------------------------------------------------------------------------------

    const $all_game_cards = $('.game_card');
    const $resetGameButton = $('#reset_game_button');

    // Card tracking
    let card_count = 0;
    let current_flipped_cards = [];

    let $card_one_is = $('#card_one_is');   // FOR TESTING PURPOSES!
    let $card_two_is = $('#card_two_is');   // FOR TESTING PURPOSES!

    // On load. Ready to play.
    $all_game_cards.addClass('game_card_bs');
    randomiseCardIDs();

    // ---- Game Functions ---------------------------------------------------------------------------------------------

    // On click, 'flip' card.
    $all_game_cards.on('click', function (event) {
        $(event.currentTarget).fadeOut("2000").removeClass('game_card_bs').fadeIn("1000").addClass('game_card_fs_jquery');
        $(event.currentTarget).off("click");

        // Add 1 to the card counter when a card is flipped over.
        card_count += 1;

        // Also add the card ID to the tracker array.
        track_cards(event.currentTarget.id);

        $card_one_is.innerHTML = current_flipped_cards[0];  // FOR TESTING PURPOSES!
        $card_two_is.innerHTML = current_flipped_cards[1];  // FOR TESTING PURPOSES!

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

    // Shuffle 'cards' IDs so that on load a different layout is made.  ----------------------------FINISH---------------------------------------------------------
    function randomiseCardIDs() {

        // Establish an array to fill with ID numbers.
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

        // Map each number to its CSS class
        const classMap = {
            1:  'game_card_fs_html',
            2:  'game_card_fs_html',
            4:  'game_card_fs_css',
            5:  'game_card_fs_css',
            7:  'game_card_fs_csharp',
            8:  'game_card_fs_csharp',
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

        // 3. Grab all your cards
        const cards = document.querySelectorAll('.game_card');

        // 4. Assign id + CSS class in one pass
        cards.forEach((card, idx) => {
            const num = order[idx];             // e.g. 5, 19, …
            card.id = num.toString();           // becomes id="5"
            const cssClass = classMap[num];
            if (cssClass) {
                card.classList.add(cssClass);
            }
        });
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

    $resetGameButton.on('click', function (event) {
        $all_game_cards.removeClass().addClass('game_card_bs');
        card_count = 0;
        current_flipped_cards = [];
        randomiseCardIDs();
    });

}); // End of .ready