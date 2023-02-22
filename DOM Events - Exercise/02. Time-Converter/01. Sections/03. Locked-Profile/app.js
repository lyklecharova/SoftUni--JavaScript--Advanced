function lockedProfile() {
    let divProfileBtn = document.querySelectorAll('.profile button');
    divProfileBtn.forEach(x => x.addEventListener('click', function (e) {
        let profile = e.target.parentElement;
        let activeStatus = profile.querySelector('input[type="radio"][value="unlock"]:checked');
        if (activeStatus) {
            let divEl = profile.querySelector('div');
            if (e.target.textContent === 'Show more') {
                divEl.style.display = 'none';
                e.target.textContent = 'Hide it';
            } else {
                divEl.style.display = 'block';
                e.target.textContent = 'Show more';
            }
        }
    }));
}