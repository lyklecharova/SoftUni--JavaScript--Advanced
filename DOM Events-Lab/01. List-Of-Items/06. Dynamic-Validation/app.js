function validate() {
    let emailInput = document.getElementById('email');
    let regExp = new RegExp( /[a-z]+@[a-z]+\.[a-z]+/g);

    emailInput.addEventListener('change', function(){
        if(!regExp.test(emailInput.value)){
            emailInput.classList.add('error');
        }else{
            emailInput.classList.remove('error');
            
        }
    });
}