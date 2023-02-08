function solve() {
  let textarea = document.getElementById('input');
  let textArr = textarea.value.split('.').filter(s => s !== '');
  let output = document.getElementById('output');
  //console.log(textArr);

  // for (let i = 0; i < textArr.length + 2; i += 2) {
  //   let paragraph = textArr.splice(0, 3).join('. ') + '.';
  //   let gvhm = document.createElement('p');
  //   gvhm.textContent = paragraph;
  //   output.appendChild(gvhm);

  // }
  while(textArr.length > 0){
    let paragraph = textArr.splice(0, 3).join('. ') + '.';
    let gvhm = document.createElement('p');
    gvhm.textContent = paragraph;
    output.appendChild(gvhm);

  }
}