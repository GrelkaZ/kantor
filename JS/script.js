let formElement = document.querySelector(".js-form");
let cashElement = document.querySelector(".js-cash");
let resultElement = document.querySelector(".js-result");
let selectElement = document.querySelector(".js-select");


formElement.addEventListener("input", () => {
    let cash = cashElement.value;
    let option = selectElement.value;
    let PHP = 12.4;
    let ZAR = 4.15;
    let ILS = 0.83;

    switch (option) {
        case "PHP": newCash = PHP * cash
            break;
        case "ZAR": newCash = ZAR * cash
            break;
        case "ILS": newCash = ILS * cash
            break;
    }

    resultElement.innerText = `${newCash.toFixed(2)} ${option}`;
});