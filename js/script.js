{
    const tasks = [

    ];

    const render = () => {
        htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list__item${task.done ? "list__item--done" : ""}">
            <button class="js-button js-done">Zrobione?</button>
            <button class="js-remove">Usuń</button>
            ${task.content}
            </li>
            <div class="border"></div>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

    const addNewTask = (newTaskContent) => {
        tasks.push(
            {
                content: newTaskContent,
            }
        );
        render();
    };

    const toggleTaskDone = (taskIndex,) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const taskRemove = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleButton = (switchButton) => {
        switchButton.classList.toggle("button");
        switchButton.innerText = switchButton.classList.contains("button") ? "ikonka" : "Zrobione?";
        render();
    };

    const bindEvents = () => {

        const taskDoneButton = document.querySelectorAll(".js-done");

        taskDoneButton.forEach((taskDoneButton, taskIndex) => {
            taskDoneButton.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });

        const taskRemoveButton = document.querySelectorAll(".js-remove");

        taskRemoveButton.forEach((taskRemoveButton, taskIndex) => {
            taskRemoveButton.addEventListener("click", () => {
                taskRemove(taskIndex);
            });
        });

        const switchButton = document.querySelectorAll(".js-button");

        switchButton.forEach((switchbutton) => {
            switchbutton.addEventListener("click", () => {
                toggleButton(switchbutton);
            });
        });

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".newTask").value.trim();

        if (newTaskContent === "") {
            return;
        };

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}