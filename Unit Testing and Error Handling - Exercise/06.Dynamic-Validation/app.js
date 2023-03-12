function validate() {
    const emailElement = document.getElementById("email");  
    emailElement.addEventListener("change", () => { 
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g; 
        if (pattern.test(emailElement.value)) {     
            emailElement.classList.remove("error");
        } else {                                     
            emailElement.classList.add("error");    
        }
    });
}