// ---------------------------------------
// click event handler
    $(function(){
// ---------------------------------------
// listener for eat-burger click
        $(".eat-burger").on("click", function(){
            console.log("AND THATS THE TRUTH, WITH SOME CHEESE ON IT");
            var id = $(this).data("id");
            var consumed = $(this).data("consumed");
            var consumption = {
                consumed: consumed;
            };
            console.log(consumption);
            $.ajax("/api/burgers" + id, {
                type: "PUT",
                data: consumption
            }).then(function(){
                console.log("Changed consumed property to " + consumed);
                location.reload();
            });

        });
// ---------------------------------------
// referenced peer's code in 'new burger click handler'
// ---------------------------------------
// click handler for adding new burger
        $(".post").on("click", function(event){
            console.log("You're trying to Add");
            var newBurger = {
                name: $(".add-new").val(),
                consumed: 0
            };
            console.log(newBurger);
            $.ajax("api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function(){
                console.log("CB Eddie's failed to Add :-(( ")
            });
        });
});