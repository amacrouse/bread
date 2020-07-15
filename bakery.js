//Function would be used to calculate the cost of ordering the pastries.
// Loop would be used for some of the pastry costs, since there will be some pastries that cost the same.
// Decision will be used to help determine shipping cost. If it’s over a certain amount, it will be free shipping.
// If it isn’t, it will have shipping fees.
// A complex data type that I’ll be using is the typeof. I’ll be using this in the contact form.

$(init);

function init() {
    $("#orderForm").submit(cost);
}

function cost() {
    // Add in the item costs
    var totalCost = 0;

    // Get all the checked checkboxes' IDs
    var checkedBoxesIds = [];
    $(":checkbox:checked").each(function () {
        checkedBoxesIds.push(this.id);
    });

    // Loop over IDs of checkboxes
    for (var id of checkedBoxesIds) {

        // If the checkbox's ID is c6, the price
        // will be in <span id='c6-price'> and the select box will
        // be in <select id='c6-qty'>

        // The price span includes a "$" character
        // that will need to be
        // removed before we can math
        var priceText = $("#" + id + "-price").text(); // a string like "$4"


        // I had to look this up: https://learn.jquery.com/using-jquery-core/faq/how-do-i-get-the-text-value-of-a-selected-option/
        var qtyText = $("#" + id + "-qty option:selected").text(); // a string like "2"

        // The substring takes off the first character and leaves the rest
        var priceNum = parseFloat(priceText.substring(1));
        var qtyNum = parseInt(qtyText);

        totalCost += priceNum * qtyNum;

    }

// Takes in total of products ordered
    function getShippingCost(subtotal) {
        var shipping;

        if (subtotal >= 40) {
            shipping = 0;
        } else if (subtotal < 40) {
            shipping = 5;
        }

        // Returns the shipping cost of that order
        return shipping;
    }

// Takes in total of products ordered
    function getTax(subtotal) {

        var tax = subtotal * 0.05; // 5% tax

        // Return the tax cost of that order
        return tax;
    }

function grandTotal(){

        var afterTax = (tax + shipping + cost)

    if (afterTax == 0) {
        $("#error").text("Nothing selected to order")
    } else (afterTax > 0)
    $("#total").text($(totalCost + shippingCost + tax).toFixed)
};
}