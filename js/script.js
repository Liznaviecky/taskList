{
    const tasks = [

    ];

    const render = () => {
        htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list__item">
            <button class="list__button js-done">${task.done ? "✓" : ""}</button>
            <div class="list__content${task.done ? "list__content--done" : ""}">${task.content}</div>
            <button class="list__button list__button--remove js-remove">🗑️</button>
            </li>
            <div class="list__border"></div>
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
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const input = document.querySelector(".js-newTask");
        const newTaskContent = input.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            input.value = "";
        }

        input.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}