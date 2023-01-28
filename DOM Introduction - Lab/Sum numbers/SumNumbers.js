function calc() {
    let first = document.getElementById('num1');
    let second = document.getElementById('num2');
    let sum = document.getElementById('sum');

    let result = Number(first.value) + Number(second.value);
    sum.value = result;
}
