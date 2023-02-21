function create(words) {
   let divContent = document.getElementById('content');

   for (let w of words) {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');

      pElement.textContent = w;
      pElement.style.display = 'none';

      divElement.appendChild(pElement);
      divContent.appendChild(divElement);

      divElement.addEventListener('click', function(e){
         e.currentTarget.children[0].style.display = '';
      });
   }
}