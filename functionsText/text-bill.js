function textBills(){
    var smsTotalBill = 0;
    var callTotalBill = 0;

    function setBillType(typeOfBill){
        var billType = typeOfBill;
        if (billType === 'call'){
            callTotalBill += 2.75;
        }
        else if (billType === 'sms'){
            smsTotalBill += 0.75;
        }
    }
    function getCallTotalCost(){
        return callTotalBill;
    }
    function getSmsTotalCost(){
        return smsTotalBill;
    }

    function getTotalCost(){
        return callTotalBill + smsTotalBill;
    }

    function totalClassName(){
        if (getTotalCost() >= 50){
            return 'critical';
        }
        else if (getTotalCost() >= 30){
            return 'warning';
        }
    }
    return {
        setBillType,
        getCallTotalCost,
        getSmsTotalCost,
        getTotalCost,
        totalClassName
    }
}