$(document).ready(function() {
    $("#submit-order").click(function() {
        let sizeOfPizza = $("#select-size option:selected").val();
        let toppingsOfPizza = $("#select-topping option:selected").val();
        let crustOfPizza = $("#select-crust option:selected").val();
        let total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
        let order = 1;
        let grandTotal = 0;

        alert("Your Order Total is Ksh." + total);

        $("#selected-size").html($("#select-size option:selected").text() + " - " + sizeOfPizza);
        $("#selected-topping").html($("#select-topping option:selected").text() + " - " + toppingsOfPizza);
        $("#selected-crust").html($("#select-crust option:selected").text() + " - " + crustOfPizza);
        $("#orderTotal").html(total);

        function Pizza(size, toppings, crust, total, orderNo) {
            this.size = size;
            this.toppings = toppings;
            this.crust = crust;
            this.total = total;
            this.orderNo = orderNo;
          }
        
          let newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

          $(".order-summary").append(newRow);
    });










});