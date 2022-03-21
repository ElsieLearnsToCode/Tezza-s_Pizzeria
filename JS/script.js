$(document).ready(function() {
    $("#submit-order").click(function() {
        let sizeOfPizza = $("#select-size option:selected").val();
        let toppingsOfPizza = $("#select-topping option:selected").val();
        let crustOfPizza = $("#select-crust option:selected").val();
        let total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
        let order = 1;
        let grandTotal = 0;










});