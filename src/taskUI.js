function editTaskSubmit(e, task, todoh,project) {
  e.preventDefault();

  task.modifyTodoTask(
    document.getElementById("task-title-input").value,
    task.getTodoTask().taskProject,
    document.getElementById("task-description-input").value,
    document.getElementById("task-priority-input").value,
    document.getElementById("task-duedate-input").value,
    task.getTodoTask().taskCompleted
  );

  buildTaskElements(todoh.readTodoTasksForProject(project),todoh,project);
  console.log("dialog submitted");
  document.getElementById("add-task-dialog").close();
}
function editTaskCancel() {
  document.getElementById("add-task-dialog").close();
}

function taskEditButtonListener(e, task, todoh,project) {
  document.getElementById("task-title-input").value =
    task.getTodoTask().taskTitle;
  document.getElementById("task-description-input").value =
    task.getTodoTask().taskDescription;
  document.getElementById("task-priority-input").value =
    task.getTodoTask().taskPriority;
  document.getElementById("task-duedate-input").value =
    task.getTodoTask().taskDueDate;

  document
    .getElementById("add-task-form")
    .addEventListener("submit", (e) => editTaskSubmit(e, task, todoh,project));

  document
    .getElementById("new-task-cancel")
    .addEventListener("click", () => editTaskCancel());

  document.getElementById("add-task-dialog").showModal();
}

function taskDeleteButtonListener(e, task,project) {}

export function buildTaskElements(tasks, todoh,project) {
  let taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  tasks.forEach((element, index) => {
    let task = element.getTodoTask();
    /*high cell fields*/
    let completed = document.createElement("input");
    completed.className = "task-checkbox";
    completed.id = `task-checkbox-${index}`;
    completed.type = "checkbox";
    completed.checked = task.taskCompleted;

    let title = document.createElement("p");
    title.className = "task-title";
    title.id = `task-title-${index}`;
    title.innerHTML = task.taskTitle;

    let dueDate = document.createElement("p");
    dueDate.className = "task-due";
    dueDate.id = `task-due-${index}`;
    dueDate.innerHTML = task.taskDueDate;

    let priority = document.createElement("p");
    priority.className = "task-priority";
    priority.id = `task-priority-${index}`;
    priority.innerHTML = task.taskPriority;

    /**mid cells field */
    let description = document.createElement("p");
    description.className = "task-description";
    description.id = `task-description-${index}`;
    description.innerHTML = task.taskDescription;

    /*low cell fields*/
    let taskEditButton = document.createElement("button");
    taskEditButton.type = "button";
    taskEditButton.className = "task-edit-button";
    taskEditButton.id = `task-edit-button-${index}`;
    taskEditButton.innerHTML = "Edit Task";

    taskEditButton.addEventListener("click", (e) =>
      taskEditButtonListener(e, element, todoh,project)
    );

    let taskDeleteButton = document.createElement("button");
    taskDeleteButton.type = "button";
    taskDeleteButton.className = "task-delete-button";
    taskDeleteButton.id = `task-delete-button-${index}`;
    taskDeleteButton.innerHTML = "Delete Task";

    taskDeleteButton.addEventListener("click", (e) =>
      taskDeleteButtonListener(e, element, todoh,project)
    );

    /**high cells */
    let taskCellDivHigh = document.createElement("div");
    taskCellDivHigh.className = "task-cell-high";

    taskCellDivHigh.appendChild(completed);
    taskCellDivHigh.appendChild(title);
    taskCellDivHigh.appendChild(priority);
    taskCellDivHigh.appendChild(dueDate);

    /**mid cells */
    let taskCellDivMid = document.createElement("div");
    taskCellDivMid.className = "task-cell-mid";
    taskCellDivMid.appendChild(description);
    /**low cells */
    let taskCellDivLow = document.createElement("div");
    taskCellDivLow.className = "task-cell-low";

    taskCellDivLow.appendChild(taskEditButton);
    taskCellDivLow.appendChild(taskDeleteButton);

    let taskCellDiv = document.createElement("div");
    taskCellDiv.className = "task-cell";
    taskCellDiv.appendChild(taskCellDivHigh);
    taskCellDiv.appendChild(taskCellDivMid);
    taskCellDiv.appendChild(taskCellDivLow);
    taskList.appendChild(taskCellDiv);
  });

  // taskEventListeners();
}
