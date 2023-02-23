function solve() {
  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);



  function generate(e) {
    let inputArea = JSON.parse(document.querySelector("textarea").value);
    //console.log(input);
    inputArea.forEach((x) => {
      let tr1 = document.createElement('tr');

      let td1 = document.createElement('td');
      let img = document.createElement('img');
      img.src = x.img;
      td1.appendChild(img);
      tr1.appendChild(td1);

      let td2 = document.createElement('td');
      let p = document.createElement('p');
      p.textContent = x.name;
      td2.appendChild(p);
      tr1.appendChild(td2);

      let td3 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = Number(x.price);
      td3.appendChild(p3);
      tr1.appendChild(td3);

      let td4 = document.createElement('td');
      let p4 = document.createElement('p');
      p4.textContent = Number(x.decFactor);
      td4.appendChild(p4);
      tr1.appendChild(td4);

      let td5 = document.createElement('td');
      let checkInput = document.createElement('input');
      checkInput.type = 'checkbox';
      td5.appendChild(checkInput);
      tr1.appendChild(td5);

      document.querySelector("tbody").appendChild(tr1);
    });
  }

  function buy(e) {
    let checkboxes = Array.from(document.querySelectorAll("tbody input"))
      .filter((checkbox) => checkbox.checked);
    let buyList = [];
    let totalPrice = 0;
    let totalDecorationFactor = 0;

    checkboxes.forEach((x)=>{
      let parent = x.parentElement.parentElement; 
      let data = Array.from(parent.querySelectorAll("p")); 
      buyList.push(data[0].textContent);
      totalPrice+=Number(data[1].textContent);
      totalDecorationFactor+=Number(data[2].textContent);
    });

    let output = document.querySelectorAll("textarea")[1];
    output.textContent = `Bought furniture: ${buyList.join(", ")}\n`; 
    output.textContent = `Total price: ${totalPrice.toFixed(2)}\n`;   
    output.textContent = `Average decoration factor: ${totalDecorationFactor / checkboxes.length}`;  
  }

}