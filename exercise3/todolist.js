// Input box and task list elements
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

// Load saved tasks from Local Storage when the page opens
// (initialize as an empty array if nothing is saved)
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Add a task
function addTask() {
    let task = taskInput.value.trim();
    if (task === "") {
        return;
    }
    tasks.push(task);
    saveAndRender();
    taskInput.value = "";
}

// Remove a task by index
function removeTask(index) {
    tasks.splice(index, 1);
    saveAndRender();
}

// Save tasks to Local Storage and re-render the list
function saveAndRender() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// Render the task list with a Remove button after each task
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function (task, index) {
        let li = document.createElement("li");
        li.textContent = task;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = function () {
            removeTask(index);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    });
}
