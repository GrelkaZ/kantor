{
    const calculateResult = (amount, currency) => {
        const PHP = 12.4;
        const ZAR = 4.15;
        const ILS = 0.83;
        
        if (amount < 0) {
            resultElement.innerText = "Podaj wartość niemniejszą niż 0";
        }
        else
            switch (currency) {
                case "PHP": return PHP * amount;
                case "ZAR": return ZAR * amount;
                case "ILS": return ILS * amount;
            }
    }

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = () => {
        const amountElement = document.querySelector(".js-amount");
        const selectElement = document.querySelector(".js-select");

        const currency = selectElement.value;
        const result = calculateResult(amountElement.value, currency);
        updateResultText(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", onFormSubmit);
    }

    init()
}