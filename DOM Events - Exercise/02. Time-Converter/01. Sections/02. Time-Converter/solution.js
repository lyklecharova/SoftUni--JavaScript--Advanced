function attachEventsListeners() {
    let dayInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');
 
     let listBtnId =Array.from(document.querySelectorAll('#daysBtn, #hoursBtn, #minutesBtn, #secondsBtn, input'));
     //console.log(listBtnId);
     listBtnId.forEach(el =>{
         el.addEventListener('click', (e) =>{
             if(e.target.id ==='minutesBtn'){
                 secondsInput.value = Number(minutesInput.value) * 60; 
                 hoursInput.value = Number(minutesInput.value) / 60;
                 dayInput.value = Number(minutesInput.value) / (60 * 24);
             }
             if(e.target.id === 'hoursBtn'){
                secondsInput.value = Number(hoursInput.value) * 3600;
                minutesInput.value = Number(hoursInput.value) * 60;
                dayInput.value = Number(hoursInput.value) / 24;
             }
 
             if(e.target.id === 'daysBtn'){
                 secondsInput.value = Number(dayInput.value) * 24*60*60;
                 hoursInput.value = Number(dayInput.value) * 24;
                 minutesInput.value = Number(dayInput.value) * 24*60;
             }
 
             if(e.target.id === 'secondsBtn'){
                 dayInput.value = Number(secondsInput.value) / (24*60*60);
                 hoursInput.value = Number(secondsInput.value) / (60*60);
                 minutesInput.value = Number(secondsInput.value) / (60);
             }
         });
     })
 
 }