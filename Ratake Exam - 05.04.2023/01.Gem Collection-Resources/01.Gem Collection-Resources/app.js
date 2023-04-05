window.addEventListener("load", solve);

function solve() {
    let gemNameEl = document.getElementById('gem-name')
    let colorEl = document.getElementById('color')
    let caratsEl = document.getElementById('carats')
    let priceEl = document.getElementById('price')
    let typeEl = document.getElementById('type')
    let addGemButtonEl = document.getElementById('add-btn')
    let unListToAppend = document.getElementById('preview-list')

    addGemButtonEl.addEventListener('click', () => {
        if (!gemNameEl.value || !colorEl.value || !caratsEl.value || !priceEl.value || !typeEl.value) {
            return;
        }
        unListToAppend.innerHTML = `<li class="gem-info"> <article> <h4>${gemNameEl.value}</h4> <p>Color: ${colorEl.value}</p> <p>Carats: ${caratsEl.value}</p> <p>Price: ${priceEl.value} $</p> <p>Type: ${typeEl.value}</p> </article> <button class="save-btn">Save to Collection</button> <button class="edit-btn">Edit Information</button> <button class="cancel-btn">Cancel</button> </li>`
        let gemName = gemNameEl.value
        let color = colorEl.value
        let carats = caratsEl.value
        let price = priceEl.value
        let type = typeEl.value
        gemNameEl.value = ''
        colorEl.value = ''
        caratsEl.value = ''
        priceEl.value = ''
        typeEl.value = ''
        addGemButtonEl.disabled = true
        let editBtnEl = document.getElementsByClassName('edit-btn')[0]
        editBtnEl.addEventListener('click', () => {
            gemNameEl.value = gemName
            colorEl.value = color
            caratsEl.value = carats
            priceEl.value = price
            typeEl.value = type
            addGemButtonEl.disabled = false
            unListToAppend.innerHTML = ''
        })
        let saveBtnEl = document.querySelector('.save-btn')
        saveBtnEl.addEventListener('click', () => {
            let newItemEl = document.createElement('li')
            newItemEl.classList.add('gem-info', 'collection-info')
            newItemEl.innerHTML = unListToAppend.innerHTML
            document.getElementById('collection').appendChild(newItemEl)
            unListToAppend.parentNode.removeChild(unListToAppend)
            addGemButtonEl.disabled = false
        })
        let cancelBtnEl = document.querySelector('.cancel-btn')
        cancelBtnEl.addEventListener('click', () => {
            unListToAppend.parentNode.removeChild(unListToAppend)
            addGemButtonEl.disabled = false
        })

    })
}