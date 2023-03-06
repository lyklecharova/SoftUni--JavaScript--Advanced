function solve() {

    let input = {
        name: document.getElementById("task"),
        description: document.getElementById("description"),
        date: document.getElementById("date"),
    };

    let [addTaskSection, openSection, progressSection, finishedSection] =
        Array.from(document.querySelectorAll("section")).map((e) => e.children[1]);

    document.getElementById("add").addEventListener("click", addTask);

    function addTask(event) {
        event.preventDefault();      // preventDefault() = Не позволява да се извършва поведението на бутона по подразбиране

        let article = document.createElement("article");
        article.appendChild(createElement("h3", input.name.value));
        article.appendChild(createElement("p", `Description: ${input.description.value}`));
        article.appendChild(createElement("p", `Due Date: ${input.date.value}`));

        let div = createElement("div", "", "flex");

        let startButton = createElement("button", "Start", "green");
        div.appendChild(startButton);

        let deleteButton = createElement("button", "Delete", "red");
        div.appendChild(deleteButton);

        let finishButton = createElement("button", "Finish", "orange");

        article.appendChild(div);

        openSection.appendChild(article);

        Object.values(input).forEach((input) => (input.value = ""));

        deleteButton.addEventListener("click", onDelete);
        startButton.addEventListener("click", onStart);
        finishButton.addEventListener("click", onFinish);

        function onDelete() {
            article.remove();
        }

        function onStart() {
            startButton.remove();
            div.appendChild(finishButton);
        }

        function onFinish() {
            div.remove();
            finishedSection.appendChild(article);
        }
    }

    function createElement(type, content, className) {
        let element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.className = className;
        }
        return element;
    }
}