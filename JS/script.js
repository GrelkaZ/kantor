{
    const calculateOption = (cash, option) => {

        const PHP = 12.4;
        const ZAR = 4.15;
        const ILS = 0.83;

        switch (option) {
            case "PHP": return PHP * cash;
            case "ZAR": return ZAR * cash;
            case "ILS": return ILS * cash;
        }
    }

    const updateResultText = (newCash, option) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${newCash.toFixed(2)} ${option}`;
    }
    
    const onFormSubmit = () => {

        const cashElement = document.querySelector(".js-cash");
        const selectElement = document.querySelector(".js-select");

        const option = selectElement.value;
        const newCash = calculateOption(cashElement.value, option);
        updateResultText(newCash, option);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", onFormSubmit);
    }

    init()
}