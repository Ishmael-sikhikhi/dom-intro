function RadioBills(){
    
    var callTotalradioCost = 0;
    var smsTotalradioCost = 0;
    
    function selectRadioBill(typeOfBill){
        var billType = typeOfBill;
        if (billType === 'call'){
            callTotalradioCost += 2.75;
        }
        else if (billType === 'sms'){
            smsTotalradioCost += 0.75;
        }
    }
    function getCallTotalradioCost(){
        return callTotalradioCost;
    }
    function getSmsTotalradioCost(){
        return smsTotalradioCost;
    }

    function getTotalCost(){
        return callTotalradioCost + smsTotalradioCost;
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
        selectRadioBill,
        getTotalCost,
        totalClassName,
        getCallTotalradioCost,
        getSmsTotalradioCost
    }
}