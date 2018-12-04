// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour-button").on("click", function (event) {

        var id = $(this).data("id");
        var devouredBurger = $(this).data("devour-button");

        var newBurgerState = {
            devoured: devouredBurger
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log("changed burger to", newBurger);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    $("#submit").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var addedBurger = {
            name: $("#new-burger").val().trim(),
        };


        // Send the POST request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: addedBurger
        }).then(
             function () {
                console.log("created new burger!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});