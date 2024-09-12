// Fetch the elements

const billInput = document.querySelector("#bill");

const tipInput = document.querySelector("#tip");

const calBtn = document.querySelector("#calculate");

const total = document.querySelector("#total");


// Create a function to calculate tip


function calculateTip(){
    let billValue = billInput.value;
    let tipValue = tipInput.value;

    totalValue = billValue * (1 + tipValue / 100)

    total.innerHTML = totalValue.toFixed(2);
}

calBtn.addEventListener("click", calculateTip);

