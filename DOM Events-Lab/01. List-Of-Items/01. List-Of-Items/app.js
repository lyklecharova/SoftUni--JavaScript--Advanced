function addItem() {
    let ulLiElement = document.getElementById('items');
    let inputTypeText = document.getElementById('newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = inputTypeText.value;
    ulLiElement.appendChild(liElement);

}