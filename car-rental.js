window.onload = function () {
    const estimateBtnEl = document.getElementById('estimateBtn');
    estimateBtnEl.onclick = onestimateBtnClick;
};

function onestimateBtnClick() {
    const numDays = +document.getElementById('nodInput').value;
    const costPerDay = 29.99;
    
    const baseCost = numDays * costPerDay;

    let extraDailyCost = 0;
    if (document.getElementById('tollTag').checked) {
        extraDailyCost += 3.95;
    }
    if (document.getElementById('gps').checked) {
        extraDailyCost += 2.95;
    }
    if (document.getElementById('roadside').checked) {
        extraDailyCost += 2.95
    }
    const optionsCost = extraDailyCost * numDays;

    let under25Surcharge = 0;
    if (document.getElementById('yesUnder25').checked) {
        under25Surcharge = baseCost * 0.3;
    }

    const totalCost = baseCost + optionsCost + under25Surcharge;

    document.getElementById('baseCost').innerHTML = baseCost.toFixed(2);
    document.getElementById('optionsCost').innerHTML = optionsCost.toFixed(2);
    document.getElementById('under25Cost').innerHTML = under25Surcharge.toFixed(2);
    document.getElementById('totalDue').innerHTML = totalCost.toFixed(2);
}

// function on25OptionChanged() {
//     const row = document.getElementById('under25Cost')
//     if (document.getElementById(yesUnder25).checked) {
//         row.style.display = 'table row';
//     } else {
//         row.style.display = 'none';
//     }
// }
//     function onDaysAndDatesChange() {
//         const dateEl = document.getElementById('pudInput');
//         const daysEl = document.getElementById(nodInput);

//         if (dateEl.value == '' || daysEl.value == '') {
//             setOption(true);
//         } else {
//             setOption(false);
//         }
// }
// const baseCostEl = document.getElementById('baseCost');
// const pudInputEl = document.getElementById('pudInput');
// const nodInputEl = document.getElementById('nodInput');

// function onpickUpDateClicked() {
//     // 
//  }