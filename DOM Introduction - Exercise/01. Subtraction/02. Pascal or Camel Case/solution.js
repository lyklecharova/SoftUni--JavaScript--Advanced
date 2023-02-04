function solve() {
  //TODO...
  let input = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  
  let word = '';
  if (namingConvention === 'Camel Case') {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        word += input[i + 1].toUpperCase();
        i++;
      } else {
        word += input[i].toLowerCase();
      }
      console.log(input[i]);
    }
  } else if (namingConvention === 'Pascal Case') {
    word += input[0].toUpperCase();
    for (let i = 1; i < input.length; i++) {
      if (input[i] === ' ') {
        word += (input[i + 1].toUpperCase());
        i++;
      } else {
        word += input[i].toLowerCase();
      }

    }
  } else {
    word = 'Error!';
  }
  result.textContent = word;
 

}


