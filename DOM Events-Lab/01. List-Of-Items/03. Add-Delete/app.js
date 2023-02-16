function addItem() {
    let ulLiElement = document.getElementById('items');
    let inputTypeText = document.getElementById('newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = inputTypeText.value;


    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';

    deleteElement.addEventListener('click', function(){
        liElement.remove();
    });

    liElement.appendChild(deleteElement);
    ulLiElement.appendChild(liElement);
}