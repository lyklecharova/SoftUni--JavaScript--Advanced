function focused() {
    let divElement = document.querySelectorAll('input');
    let selectionElementArr = Array.from(divElement);

    for (let el of selectionElementArr) {
        el.addEventListener('focus', function(){
            el.parentElement.className = 'focused';
        });

        el.addEventListener('blur', function(){
            el.parentElement.className = '';
        });
    }
}