import { todoHandler } from "./todo";

function editTaskSubmit(e, todoh) {
  e.preventDefault();
  if (e.target.id.slice(0, 16) == "edit-task-submit") {
    let taskUUID = document.getElementById(e.target.id).dataset.taskUUID;
    let projectUUID = document.getElementById(e.target.id).dataset.projectUUID;

    todoh.modifyTodoTask(
      document.getElementById("task-title-input").value,
      // task.getTodoTask().taskProject,
      document.getElementById("task-description-input").value,
      document.getElementById("task-duedate-input").value,
      document.getElementById("task-priority-input").value,
      taskUUID
      // task.getTodoTask().taskCompleted
    );

    buildTaskElements(projectUUID, todoh);
    document.getElementById("add-task-dialog").close();
  }
}
function editTaskCancel() {
  document.getElementById("add-task-dialog").close();
}

function taskEditButtonListener(e, todoh) {
  const taskUUID = document.getElementById(e.target.id).dataset.taskUUID;
  const projectUUID = document.getElementById(e.target.id).dataset.projectUUID;
  const task = todoh.readTodoTaskByUUID(taskUUID);

  const newTaskControl = document.getElementById("new-task-control");

  while (newTaskControl.lastElementChild) {
    newTaskControl.removeChild(newTaskControl.lastElementChild);
  }
  newTaskControl.innerHTML = "";

  const editTaskButton = document.createElement("button");
  editTaskButton.className = "edit-task-buttons";
  editTaskButton.id = `edit-task-submit-${taskUUID.slice(24)}`;
  editTaskButton.type = "submit";
  editTaskButton.dataset.taskUUID = taskUUID;
  editTaskButton.dataset.projectUUID = projectUUID;
  editTaskButton.innerHTML = "Submit";

  const cancelTaskButton = document.createElement("button");
  cancelTaskButton.className = "edit-task-buttons";
  cancelTaskButton.id = `edit-task-cancel`;
  cancelTaskButton.innerHTML = "Cancel";

  newTaskControl.appendChild(editTaskButton);
  newTaskControl.appendChild(cancelTaskButton);

  document.getElementById("task-title-input").value =
    task.getTodoTask().taskTitle;
  document.getElementById("task-description-input").value =
    task.getTodoTask().taskDescription;
  document.getElementById("task-priority-input").value =
    task.getTodoTask().taskPriority;
  document.getElementById("task-duedate-input").value =
    task.getTodoTask().taskDueDate;

  editTaskButton.addEventListener("click", (e) => editTaskSubmit(e, todoh), {
    once: true,
  });

  cancelTaskButton.addEventListener("click", () => editTaskCancel(), {
    once: true,
  });

  document.getElementById("add-task-dialog").showModal();
}

function confirmDeleteTask(e, todoh) {
  e.preventDefault();
  if (e.target.id.slice(0, 14) == "confirm-delete") {
    let taskUUID = document.getElementById(e.target.id).dataset.taskUUID;
    let projectUUID = document.getElementById(e.target.id).dataset.projectUUID;
    todoh.deleteTodoTaskByUUID(taskUUID);
    buildTaskElements(projectUUID, todoh);
    // projectSidebarEventListeners(todoh);
    document.getElementById("confirm-dialog").close();
  }
}

function cancelDeleteTask() {
  document.getElementById("confirm-dialog").close();
}

function taskDeleteButtonListener(e, todoh) {
  // taskDeleteButton.dataset.projectUUID = projectUUID;
  // taskDeleteButton.dataset.taskUUID = element.getTodoTask().taskUUID;

  let projectUUID = document.getElementById(e.target.id).dataset.projectUUID;
  let taskUUID = document.getElementById(e.target.id).dataset.taskUUID;
  let taskTitle = todoh.readTodoTaskByUUID(taskUUID).getTodoTask().taskTitle;

  let confirmMessage = document.getElementById("confirm-message");
  while (confirmMessage.lastElementChild) {
    confirmMessage.removeChild(confirmMessage.lastElementChild);
  }
  confirmMessage.innerHTML = `<h3>Are you sure you want to delete "${taskTitle}"?</h3>`;

  let confirmControl = document.getElementById("confirm-control");
  while (confirmControl.lastElementChild) {
    confirmControl.removeChild(confirmControl.lastElementChild);
  }
  confirmControl.innerHTML = "";

  let confirmButton = document.createElement("button");
  confirmButton.className = "confirm-buttons";
  confirmButton.id = `confirm-delete-${taskUUID.slice(24)}`;
  confirmButton.dataset.taskUUID = taskUUID;
  confirmButton.dataset.projectUUID = projectUUID;
  confirmButton.type = "submit";
  confirmButton.innerHTML = "Confrim";

  let cancelButton = document.createElement("button");
  cancelButton.className = "confirm-buttons";
  cancelButton.id = `cancel-delete`;
  cancelButton.innerHTML = "Cancel";

  confirmControl.appendChild(confirmButton);
  confirmControl.appendChild(cancelButton);

  confirmButton.addEventListener("click", (e) => confirmDeleteTask(e, todoh));

  cancelButton.addEventListener("click", () => cancelDeleteTask());

  document.getElementById("confirm-dialog").showModal();
}

function toggleCompleted(e,todoh){
  if(e.target.checked){
    todoh.setTodoTaskCompleted(e.target.dataset.taskUUID)
  }else{
    todoh.unsetTodoTaskCompleted(e.target.dataset.taskUUID)
  }
}

export function buildTaskElements(projectUUID, todoh) {
  let project = todoh.readTodoProjectByUUID(projectUUID);
  let tasks = todoh.readTodoTasksForProject(project);
  let taskList = document.getElementById("task-list");
  while (taskList.lastElementChild) {
    taskList.removeChild(taskList.lastElementChild);
  }
  taskList.innerHTML = "";
  tasks.forEach((element, index) => {
    const task = element.getTodoTask();
    const taskUUID = task.taskUUID;
    // if (task.taskProjectUUID == project.getTodoProject().projectUUID) {
    /*high cell fields*/
    let completed = document.createElement("input");
    completed.className = "task-checkbox";
    completed.id = `task-checkbox-${taskUUID.slice(24)}`;
    completed.dataset.taskUUID = taskUUID;
    completed.type = "checkbox";
    completed.checked = task.taskCompleted;

    completed.addEventListener("change",(e)=>{
      toggleCompleted(e,todoh);
    })

    let title = document.createElement("p");
    title.className = "task-title";
    title.id = `task-title-${taskUUID.slice(24)}`;
    title.innerHTML = task.taskTitle;

    let dueDate = document.createElement("p");
    dueDate.className = "task-due";
    dueDate.id = `task-due-${taskUUID.slice(24)}`;
    dueDate.innerHTML = task.taskDueDate;

    let priority = document.createElement("p");
    priority.className = "task-priority";
    priority.id = `task-priority-${taskUUID.slice(24)}`;
    priority.innerHTML = task.taskPriority;

    /**mid cells field */
    let description = document.createElement("p");
    description.className = "task-description";
    description.id = `task-description-${taskUUID.slice(24)}`;
    description.innerHTML = task.taskDescription;

    /*low cell fields*/
    let taskEditButton = document.createElement("button");
    taskEditButton.type = "button";
    taskEditButton.className = "task-edit-button";
    taskEditButton.id = `task-edit-button-${taskUUID.slice(24)}`;
    taskEditButton.dataset.projectUUID = projectUUID;
    taskEditButton.dataset.taskUUID = taskUUID;
    taskEditButton.innerHTML = "Edit Task";

    taskEditButton.addEventListener("click", (e) =>
      taskEditButtonListener(e, todoh)
    );

    let taskDeleteButton = document.createElement("button");
    taskDeleteButton.type = "button";
    taskDeleteButton.className = "task-delete-button";
    taskDeleteButton.id = `task-delete-button-${index}`;
    taskDeleteButton.dataset.projectUUID = projectUUID;
    taskDeleteButton.dataset.taskUUID = element.getTodoTask().taskUUID;
    taskDeleteButton.innerHTML = "Delete Task";

    taskDeleteButton.addEventListener("click", (e) =>
      taskDeleteButtonListener(e, todoh)
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
    // }
  });
}
