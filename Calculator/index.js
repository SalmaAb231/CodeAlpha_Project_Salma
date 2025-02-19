
const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll(".button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
        
        // Flash effect
        button.classList.add("flash");
        setTimeout(() => {
            button.classList.remove("flash");
        }, 200);
        
        if (buttonText === "AC") {
            currentInput = "";
        } else if (buttonText === "DEL") {
            currentInput = currentInput.slice(0, -1);
        } else if (buttonText === "=") {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = "Error";
            }
        } else {
            currentInput += buttonText;
        }
        
        inputBox.value = currentInput;
    });
});

