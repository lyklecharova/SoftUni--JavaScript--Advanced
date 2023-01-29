function sumTable() {
    let rows = document.querySelectorAll('table tr td:last-child');
    let sum = 0;
    for (let i = 0; i < rows.length - 1; i++) {
        sum += Number(rows[i].textContent);
    }
    document.getElementById('sum').textContent = sum;

}