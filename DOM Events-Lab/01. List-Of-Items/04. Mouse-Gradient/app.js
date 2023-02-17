function attachGradientEvents() {
    //let divResult = document.getElementById('result');
    let divGradient = document.getElementById('gradient');

    divGradient.addEventListener('mousemove', click);

    function click(e) {
        let percentage = Math.floor(e.offsetX / 300 * 100);
        document.getElementById('result').textContent = percentage + '%';
    }


}