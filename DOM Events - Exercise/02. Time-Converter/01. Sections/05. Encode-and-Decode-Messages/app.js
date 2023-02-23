function encodeAndDecodeMessages() {
    //let encodeArea = document.querySelector('div textarea');
    let buttonEncode = Array.from(document.querySelectorAll('div button'));
    //let message;
    let char = '';
    buttonEncode.forEach(x => x.addEventListener('click', function (e) {
        let area = e.target.parentElement;
        let message = area.querySelector('textarea').value;
        let messageArr = Array.from(message);
        let encodedMessage = [];
        let a = area.querySelector('textarea').disabled;
        if (a === false) {
            for (let i = 0; i < messageArr.length; i++) {
                char += (messageArr[i].charCodeAt(0)) + 1;
                encodedMessage.push(String.fromCharCode(char));
            }
           
        } else {
            //console.log("fff");
            for (let i = 0; i < messageArr.length; i++) {
                char += (messageArr[i].charCodeAt(0)) - 1;
                encodedMessage.push(String.fromCharCode(char));
                //console.log(encodedMessage)
            }
        }
      
        
        
        //console.log(typeof message);
        //return message.value
    }));
}



// function encodeAndDecodeMessages() {

//     let textAreas = document.querySelectorAll("textarea");   // Взимаме полетата за съобщенията
//     let buttons = document.querySelectorAll("button");       // Взимаме бутоните на полетата

//     buttons[0].addEventListener("click", encode);           // на първия бутон от страницата слагаме слушател за енкодиране
//     buttons[1].addEventListener("click", decode);           // на втория бутон от страницата слагаме слушател за декодиране

//     function encode(event) {
//         let encodedMessage = "";                            // Първоначално енкодираното съобщение е празно
//         let input = textAreas[0].value;                     // Взимаме въведената стойност в първото поле

//         for (let index = 0; index < input.length; index++) {        // Минаваме по целия инпут
//             encodedMessage += String.fromCharCode(input[index].charCodeAt() + 1);
//             // Към съобщението добавяме всяка буква(нейния ASCII + 1) превърната пак в буква
//         }
//         textAreas[1].value = encodedMessage;                // В другото поле изписваме енкодираоато съобщение
//         textAreas[0].value = "";                            // зачистваме полето да е празно
//     }

//     function decode(event) {
//         let decodedMessage = "";                            // Първоначално декодираното съобщение е празно
//         let input = textAreas[1].value;                     // Взимаме въведената стойност във второто поле

//         for (let index = 0; index < input.length; index++) {    // Минаваме по целия инпут
//             decodedMessage += String.fromCharCode(input[index].charCodeAt(0) - 1);
//             // Към съобщението добавяме всяка буква(нейния ASCII - 1) превърната пак в буква
//         }
//         textAreas[1].value = decodedMessage;               // Полето за декодиране на съобщението е равно на декодираното
//     }
// }