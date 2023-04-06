window.addEventListener('load', solve);

function solve() {
    let inputs = {
        firstName: document.getElementById("first-name"),
        lastName: document.getElementById("last-name"),
        peopleCount: document.getElementById("people-count"),
        date: document.getElementById("from-date"),
        days: document.getElementById("days-count"),
    };

    let confirm = document.querySelector('.confirm-ticket');

    let nextStepBtn = document.getElementById("next-btn");
    nextStepBtn.addEventListener("click", add);

    function add(event) {
        event.preventDefault();

        let firstName = inputs.firstName.value;
        let lastName = inputs.lastName.value;
        let peopleCount = inputs.peopleCount.value;
        let date = inputs.date.value;
        let days = inputs.days.value;

        if (firstName === "" || lastName === "" || peopleCount === "" || date === "" || days === "") {
            return;
        };

        let infoTicket = document.querySelector(".ticket-info-list");

        let ticket = document.createElement("li");
        ticket.classList.add("ticet");

        let art = document.createElement("article");
        let h3Name = document.createElement("h3");
        h3Name.textContent = "Name: " + firstName + " " + lastName;
        let formDade = document.createElement("p");
        formDade.textContent = "From date: " + date;
        let forDays = document.createElement("p");
        forDays.textContent = "For " + days + " days";
        let forPeople = document.createElement("p");
        forPeople.textContent = "For " + peopleCount + " people";

        let editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit";

        let continueBtn = document.createElement("button");
        continueBtn.classList.add("continue-btn");
        continueBtn.textContent = "Continue";

        infoTicket.appendChild(ticket);
        ticket.appendChild(art);
        art.appendChild(h3Name);
        art.appendChild(formDade);
        art.appendChild(forDays);
        art.appendChild(forPeople);
        ticket.appendChild(continueBtn);
        ticket.appendChild(editBtn);

        let oldFistName = firstName;
        let oldLastName = lastName;

        inputs.firstName.value = "";
        inputs.lastName.value = "";
        inputs.date.value = "";
        inputs.peopleCount.value = "";
        inputs.days.value = "";
        nextStepBtn.disabled = true;

        editBtn.addEventListener("click", edit);

        function edit() {
            inputs.firstName.value = oldFistName;
            inputs.lastName.value = oldLastName;
            inputs.date.value = date;
            inputs.peopleCount.value = peopleCount;
            inputs.days.value = days;
            editBtn.disabled = true;
            continueBtn.disabled = true;
            nextStepBtn.disabled = false;
            infoTicket.removeChild(ticket);
        }
        continueBtn.addEventListener('click', () => {
            infoTicket.removeChild(ticket)
            ticket.removeChild(editBtn)
            ticket.removeChild(continueBtn)
            confirm.appendChild(ticket)
            let confirmButton = document.createElement('button')
            confirmButton.className = "confirm-btn"
            confirmButton.textContent = "Confirm"
            let cancelButton = document.createElement('button')
            cancelButton.className = "cancel-btn"
            cancelButton.textContent = "Cancel"
            ticket.appendChild(confirmButton)
            ticket.appendChild(cancelButton)
            cancelButton.addEventListener('click', () => {
                confirm.removeChild(ticket)
                nextStepBtn.disabled = false
            })
            confirmButton.addEventListener('click', () => {
                body.removeChild(main)
                let h1 = document.createElement('h1')
                h1.id = "thank-you"
                h1.textContent = "Thank you, have a nice day!"
                let backButton = document.createElement('button')
                backButton.id = "back-btn"
                backButton.textContent = "Back"
                body.appendChild(h1)
                body.appendChild(backButton)
                backButton.addEventListener("click", () => { window.location.reload() })
            })
        })

    };

}




