function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');
    let selectId = document.getElementById('menu');
    let optionEl = document.createElement('option');

    optionEl.textContent = newItemText.value;
    optionEl.value = newItemValue.value;

    selectId.appendChild(optionEl);

    newItemText.value = '';
    newItemValue.value = '';
}