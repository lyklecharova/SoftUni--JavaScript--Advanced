function subtract() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let result = document.getElementById("result");

    result.textContent = Number(firstNumber) - Number(secondNumber);

}