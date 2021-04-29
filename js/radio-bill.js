// get a reference to the sms or call radio buttons
var callsTotalElem1 = document.querySelector(".callTotalTwo");
var smsTotalElem1 = document.querySelector(".smsTotalTwo");
var totalCostElem1 = document.querySelector(".totalTwo");
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var radioCallsTotal = 0;
var radioSmsTotal = 0;
//add an event listener for when the add button is pressed
let theRadioBill = RadioBills();

function textBillTotal1() {
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
    }
    

    //update the totals that is displayed on the screen.
   
    totalCostElem1.innerHTML = theRadioBill.selectRadioBill(billItemType)
    callsTotalElem1.innerHTML = theRadioBill.getCallTotalradioCost();
    smsTotalElem1.innerHTML = theRadioBill.getSmsTotalradioCost();
    

    //color the total based on the criteria
    totalCostElem1.classList.add(theRadioBill.totalClassName());

    
}
radioBillAddBtn.addEventListener('click', textBillTotal1);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
