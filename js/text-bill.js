// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");

//get a reference to the add button
var textTotalAddBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;
// var totalCost = document.querySelector(".totalOne")
//add an event listener for when the add button is pressed
function textBillTotal() {
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "call") {
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms") {
        smsTotal += 0.75;
    }

    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
    // console.log(totalCost);

    //color the total based on the criteria

    if (totalCost >= 50) {
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
        totalCostElem.classList.remove("warning");
    }
    else if (totalCost >= 30) {
        totalCostElem.classList.add("warning");
        totalCostElem.classList.remove('danger');
    }
    else{
        totalCostElem.classList.remove("warning");
        totalCostElem.classList.remove('danger');
    }
}
textTotalAddBtn.addEventListener('click', textBillTotal);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
