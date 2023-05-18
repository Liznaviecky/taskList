{
    const tasks = [

    ];

    const render = () => {
        htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li ${task.done ? "style=\"text-decoration: line-through\"" : ""}>
            <button class="js-done">Zrobione?</button>
            <button class="js-remove">Usuń</button>
            ${task.content}
            </li>
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

    const toggleTaskDone = (taskIndex) => {
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

/*{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push(
            {
                content: newTaskContent,
            });
        render();
    };

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    };

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    };

    const bindEvents = () => {
        const tasksRemove = document.querySelectorAll(".js-remove");

        tasksRemove.forEach((taskRemove, index) => {
            taskRemove.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const tasksDone = document.querySelectorAll(".js-done");

        tasksDone.forEach((taskDone, index) => {
            taskDone.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const render = () => {
        htmlString = "";

        for (const task of tasks) {
            htmlString += `
               <li ${task.done ? "style=\"text-decoration: line-through\"" : ""}>
               <button class="js-done">zrobione?</button>
               <button class="js-remove">usuń</button>
                ${task.content}
               </li>
               `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

       bindEvents();
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
}*/