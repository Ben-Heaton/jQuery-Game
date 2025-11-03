$(document).ready(function () {

    // ---- Global Variables -------------------------------------------------------------------------------------------
    const $all_game_cards = $('.game_card');
    const $resetGameButton = $('#reset_game_button');

    let card_count = 0;
    let current_flipped_cards = [];
    //let $current_card_one = document.getElementById('current_flipped_cards[0]');    //works?
    //let $current_card_two = document.getElementById('current_flipped_cards[1]');    //works?

    let $card_one_id = document.getElementById("card_one_id");   // FOR TESTING PURPOSES!
    let $card_two_id = document.getElementById("card_two_id");   // FOR TESTING PURPOSES!
    let $match_test = document.getElementById("match_test");   // FOR TESTING PURPOSES!


    let number_of_attempts_counter = 0;
    let $number_of_attempts = document.getElementById("no_of_attempts");
    let pairs_left_to_find_counter = 8;
    let $pairs_left_to_find = document.getElementById("pairs_left_to_find");


    // ---- Game Functions ---------------------------------------------------------------------------------------------

    // On load. Ready to play.
    $all_game_cards.addClass('game_card_bs');
    randomiseCardIDs();
    assign_appropriate_card_face()

    // On click, 'flip' card.
    function assign_appropriate_card_face() {
        $all_game_cards.on('click', function (event) {
            $(event.currentTarget).fadeOut("2000").removeClass('game_card_bs');
            if (event.currentTarget.id === "1") {
                $(event.currentTarget).fadeIn("1000").addClass('game_card_fs_html').off("click");

            } else if (event.currentTarget.id === "2") {
                $(event.currentTarget).fadeIn("1000").addClass('game_card_fs_html').off("click");

            } else if (event.currentTarget.id === "4") {
                $(event.currentTarget).fadeIn("1000").addClass('game_card_fs_css').off("click");

            } else if (event.currentTarget.id === "5") {
                $(event.currentTarget).fadeIn("1000").addClass('game_card_fs_css').off("click");

            } else if (event.currentTarget.id === "7") {
                $(event.currentTarget).fadeIn("1000").addClass('game_card_fs_csharp').off("click");

            } else if (event.currentTarget.id === "8") {
                $(event.currentTarget).fadeIn("1000").addClass('game_card_fs_csharp').off("click");

            } else if (event.currentTarget.id === "10") {
                $(event.currentTarget).fadeIn("1000").addClass('game_card_fs_java').off("click");

            } else if (event.currentTarget.id === "11") {
                $(event.currentTarget).fadeIn("1000").addClass('game_card_fs_java').off("click");

            } else if (event.currentTarget.id === "13") {
                $(event.currentTarget).fadeIn("1000").addClass('game_card_fs_javascript').off("click");

            } else if (event.currentTarget.id === "14") {
                $(event.currentTarget).fadeIn("1000").addClass('game_card_fs_javascript').off("click");

            } else if (event.currentTarget.id === "16") {
                $(event.currentTarget).fadeIn("1000").addClass('game_card_fs_jquery').off("click");

            } else if (event.currentTarget.id === "17") {
                $(event.currentTarget).fadeIn("1000").addClass('game_card_fs_jquery').off("click");

            } else if (event.currentTarget.id === "19") {
                $(event.currentTarget).fadeIn("1000").addClass('game_card_fs_postgresql').off("click");

            } else if (event.currentTarget.id === "20") {
                $(event.currentTarget).fadeIn("1000").addClass('game_card_fs_postgresql').off("click");

            } else if (event.currentTarget.id === "22") {
                $(event.currentTarget).fadeIn("1000").addClass('game_card_fs_python').off("click");

            } else if (event.currentTarget.id === "23") {
                $(event.currentTarget).fadeIn("1000").addClass('game_card_fs_python').off("click");
            }
            other_stuff()
        });

    }

    function other_stuff() {
        // Add 1 to the card counter when a card is flipped over.
        card_count += 1;

        // Also add the card ID to the tracker array.
        track_cards(event.currentTarget.id);

        $card_one_id.innerHTML = current_flipped_cards[0];  // FOR TESTING PURPOSES!
        $card_two_id.innerHTML = current_flipped_cards[1];  // FOR TESTING PURPOSES!

        // Checks if two cards are flipped over.
        if (card_count === 2) {
            $all_game_cards.off('click');
            number_of_attempts_counter += 1;
            $number_of_attempts.innerHTML = number_of_attempts_counter;
            check_cards();
        }
    }

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

    // If two cards are flipped over, compare them. <----<----<----<----<----<----<---- Finish <----<----<----<----<----<----<----<----<----<----<----
    function check_cards() {
        let card_1 = parseInt(current_flipped_cards[0]);
        let card_2 = parseInt(current_flipped_cards[1]);
        let back_to_string_one = card_1.toString()  //works?
        let back_to_string_two = card_2.toString()  //works?


        if (card_1 === card_2 - 1 || card_1 === card_2 + 1) {
            $match_test.innerHTML = "Match!";
            assign_appropriate_card_face()
            pairs_left_to_find_counter -= 1;
            $pairs_left_to_find.innerHTML = pairs_left_to_find_counter;
            card_count = 0;
            current_flipped_cards = [];

        } else if (card_1 !== card_2 - 1 || card_1 !== card_2 + 1) {
            $match_test.innerHTML = "Not a match :(";
            // ---> Here's the problem, need it to flip not a match pair over to BS again without changing ID values <---

            //document.getElementById('back_to_string_one').style.property = 'game_card_bs';    //works?
            //document.getElementById('back_to_string_two').style.property = 'game_card_bs';    //works?
            //$current_card_one.removeClass().addClass('game_card_bs');   //works?
            //$current_card_two.removeClass().addClass('game_card_bs');   //works?

            assign_appropriate_card_face();
            card_count = 0;
            current_flipped_cards = [];
        }
    }

    // Function for win condition   <----<----<----<----<----<----<---- Finish after comparison code <----<----<----<----<----<----<----<----<----<----<----
    /* if (pairs_left_to_find_counter === 0) {
        // do something
    } */

    $resetGameButton.on('click', function (event) {
        location.reload();  // I don't like that it just refreshes the page, however it does solve my reset button for now.
    });

}); // End of .ready