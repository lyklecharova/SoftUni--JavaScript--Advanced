function extractText() {
    let item = document.getElementById('items');
    let textArea = document.getElementById('result');
    textArea.textContent = item.textContent;

}