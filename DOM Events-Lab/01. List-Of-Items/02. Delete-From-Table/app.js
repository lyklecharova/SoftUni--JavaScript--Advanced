function deleteByEmail() {
   let emailInputType = document.querySelector('input[name="email"]');
   let tableTd = document.querySelectorAll('tr td:nth-of-type(2)'); // The :nth-of-type selector allows you select one or more elements
   let divResult = document.getElementById('result');

   let emailElements = Array.from(tableTd);
   let targetElement = emailElements.find(x => x.textContent === emailInputType.value);

   if (targetElement) {
      targetElement.parentNode.remove();
      divResult.textContent = 'Deleted';
   } else {
      divResult.textContent = 'Not found.';
   }

}