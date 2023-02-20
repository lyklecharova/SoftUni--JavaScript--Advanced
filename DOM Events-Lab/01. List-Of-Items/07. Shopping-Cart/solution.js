function solve() {
   const addBnt = document.getElementsByClassName("product-add");
   let addBtnArr = Array.from(addBnt);
   // console.log(addBtnArr);
   const checkOutBtn = document.getElementsByClassName("checkout");
   const textArea = document.getElementsByTagName("textarea");
   // console.log(addBnt,checkOutBtn,textArea);

   addBtnArr.forEach((btn) => {
      btn.addEventListener('click', function () {
         console.log(btn.parentElement.lastChild);
         // product-line-price - цената
         // product-title
         // textArea.textContent = "Added ${name} for ${money} to the cart.\n". 


      })
   })
}