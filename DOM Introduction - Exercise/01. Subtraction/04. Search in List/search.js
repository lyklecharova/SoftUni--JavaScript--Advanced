function search() {
  let searchBox = document.getElementById("searchText").value;
  let city = document.querySelectorAll("ul#towns li");

  for (let town of city) {
     town.style.fontWeight = 'normal';
     town.style.textDecoration = '';
  }
  let counter = 0;
  for (let town of city) {
     if (town.textContent.includes(searchBox)) {
        counter++;
        town.style.fontWeight = 'bold';
        town.style.textDecoration = "underline";
     }
  }
  document.getElementById("result").textContent = `${counter} matches found`;
}
