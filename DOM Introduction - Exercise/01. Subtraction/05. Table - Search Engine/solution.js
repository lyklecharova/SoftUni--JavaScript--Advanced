function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let firstRow = document.querySelectorAll('tbody tr');
   let input = document.getElementById('searchField');

   function onClick() {
      //   TODO:
      for (let row of firstRow) {
         row.classList.remove('select');
         if (row.innerHTML.includes(input.value)) {
            row.classList = 'select';
         }
      }
      input.value = '';

   }
}