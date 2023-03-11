function notify(message) {
  let divNotification = document.getElementById('notification');
  divNotification.textContent = message;
  divNotification.style.display = 'block';

  divNotification.addEventListener('click',function(e){
    e.divNotification.style.display = 'none';
  });

}