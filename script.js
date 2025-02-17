const display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstValue = "";

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        
        if (value === "C") {
            currentInput = "";
            firstValue = "";
            operator = "";
            display.textContent = "0";
        } else if (value === "=") {
            if (firstValue && operator && currentInput) {
                currentInput = eval(`${firstValue} ${operator} ${currentInput}`);
                display.textContent = currentInput;
                firstValue = "";
                operator = "";
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            firstValue = currentInput;
            operator = value;
            currentInput = "";
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
