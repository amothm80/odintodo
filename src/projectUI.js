import { taskEventListeners, buildTaskElements } from "./taskUI.js";

export function newTaskSubmit(e, todoh) {
  e.preventDefault();
  if (e.target.id.slice(0, 15) == "new-task-submit") {
    let projectUUID = document.getElementById(e.target.id).dataset.projectUUID;
    todoh.addTodoTask(
      document.getElementById("task-title-input").value,
      "",
      projectUUID,
      document.getElementById("task-description-input").value,
      document.getElementById("task-duedate-input").value,
      document.getElementById("task-priority-input").value,
      false
    );
    buildTaskElements(projectUUID, todoh);
    document.getElementById("add-task-dialog").close();
  }
}

export function newTaskCancel() {
  document.getElementById("add-task-dialog").close();
}

export function addTaskButtonListener(e, todoh) {
  document.getElementById("task-title-input").value = "";
  document.getElementById("task-description-input").value = "";
  document.getElementById("task-duedate-input").value = "";

  let projectUUID = document.getElementById(e.target.id).dataset.projectUUID;

  let newTaskControl = document.getElementById("new-task-control");
  while (newTaskControl.lastElementChild) {
    newTaskControl.removeChild(newTaskControl.lastElementChild);
  }
  newTaskControl.innerHTML = "";

  let addTaskButton = document.createElement("button");
  addTaskButton.className = "new-task-buttons";
  addTaskButton.id = `new-task-submit-${projectUUID.slice(24)}`;
  addTaskButton.dataset.projectUUID = projectUUID;
  addTaskButton.type = "submit";
  addTaskButton.innerHTML = "Submit";

  let cancelTaskButton = document.createElement("button");
  cancelTaskButton.className = "new-task-buttons";
  cancelTaskButton.id = `new-task-cancel`;
  cancelTaskButton.innerHTML = "Cancel";

  newTaskControl.appendChild(addTaskButton);
  newTaskControl.appendChild(cancelTaskButton);

  addTaskButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      newTaskSubmit(e, todoh);
    },
    { once: true }
  );

  cancelTaskButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      newTaskCancel();
    },
    { once: true }
  );

  document.getElementById("add-task-dialog").showModal();
}

function confirmDeleteProject(e, todoh) {
  if (e.target.id.slice(0, 14) == "confirm-delete") {
    let projectUUID = document.getElementById(e.target.id).dataset.projectUUID;
    todoh.deleteTodoProjectByUUID(projectUUID);
    buildProjectElements(todoh);
    clearProjectPage();
    projectSidebarEventListeners(todoh);
    document.getElementById("confirm-dialog").close();
  }
}

function cancelDeleteProject() {
  document.getElementById("confirm-dialog").close();
}

export function deleteProjectButtonListener(e, todoh) {
  let projectUUID = document.getElementById(e.target.id).dataset.projectUUID;
  let projectTitle = todoh
    .readTodoProjectByUUID(projectUUID)
    .getTodoProject().projectTitle;

  let confirmMessage = document.getElementById("confirm-message");
  while (confirmMessage.lastElementChild) {
    confirmMessage.removeChild(confirmMessage.lastElementChild);
  }
  confirmMessage.innerHTML = `<h3>Are you sure you want to delete "${projectTitle}"?</h3>`;

  let confirmControl = document.getElementById("confirm-control");
  while (confirmControl.lastElementChild) {
    confirmControl.removeChild(confirmControl.lastElementChild);
  }
  confirmControl.innerHTML = "";

  let confirmButton = document.createElement("button");
  confirmButton.className = "confirm-buttons";
  confirmButton.id = `confirm-delete-${projectUUID.slice(24)}`;
  confirmButton.dataset.projectUUID = projectUUID;
  confirmButton.type = "submit";
  confirmButton.innerHTML = "Confirm";

  let cancelButton = document.createElement("button");
  cancelButton.className = "confirm-buttons";
  cancelButton.id = `cancel-delete`;
  cancelButton.innerHTML = "Cancel";

  confirmControl.appendChild(confirmButton);
  confirmControl.appendChild(cancelButton);

  confirmButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      confirmDeleteProject(e, todoh);
    },
    { once: true }
  );

  cancelButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      cancelDeleteProject();
    },
    { once: true }
  );

  document.getElementById("confirm-dialog").showModal();
}

function clearProjectPage() {
  while (document.getElementById("project-title").lastElementChild) {
    document
      .getElementById("project-title")
      .removeChild(document.getElementById("project-title").lastElementChild);
  }
  while (document.getElementById("task-list").lastElementChild) {
    document
      .getElementById("task-list")
      .removeChild(document.getElementById("task-list").lastElementChild);
  }
  while (document.getElementById("main-content-footer").lastElementChild) {
    document
      .getElementById("main-content-footer")
      .removeChild(
        document.getElementById("main-content-footer").lastElementChild
      );
  }
}

function editProjectSubmit(e, todoh, projectUUID) {
  if (e.target.id == "new-project-submit") {
    todoh.modifyTodoProject(
      document.getElementById("project-name-input").value,
      projectUUID
    );
    buildProjectElements(todoh);
    buildTaskElements(projectUUID, todoh);
    buildProjectPage(projectUUID, todoh);
    document.getElementById("add-project-dialog").close();
  }
}
function editProjectCancel() {
  document.getElementById("add-project-dialog").close();
}

function editProjectTitle(todoh, projectUUID) {
  document
    .getElementById("new-project-submit")
    .replaceWith(document.getElementById("new-project-submit").cloneNode(true));
  document
    .getElementById("new-project-cancel")
    .replaceWith(document.getElementById("new-project-cancel").cloneNode(true));

  document
    .getElementById("new-project-submit")
    .addEventListener("click", (e) => {
      e.preventDefault();
      editProjectSubmit(e, todoh, projectUUID);
    });

  document
    .getElementById("new-project-cancel")
    .addEventListener("click", (e) => {
      e.preventDefault();
      editProjectCancel();
    });

  document.getElementById("project-name-input").value =
    todoh.readTodoProjectByUUID(projectUUID).getTodoProject().projectTitle;

  document.getElementById("add-project-dialog").showModal();
}

export function buildProjectPage(projectUUID, todoh) {
  let project = todoh.readTodoProjectByUUID(projectUUID);
  let projectTitle = document.getElementById("project-title");
  projectTitle.innerHTML = `<h1>${project.getTodoProject().projectTitle}</h1>`;

  const projectTitleEditButton = document.createElement("button");
  projectTitleEditButton.dataset.projectUUID = projectUUID;
  projectTitleEditButton.innerHTML = "Edit";
  projectTitleEditButton.id = `edit-proj-title-but-${projectUUID.slice(24)}`;
  projectTitleEditButton.className = "edit-project-title";

  projectTitleEditButton.addEventListener("click", (e) => {
    editProjectTitle(todoh, projectUUID);
  });
  projectTitle.appendChild(projectTitleEditButton);

  let mainContentFooter = document.getElementById("main-content-footer");
  while (mainContentFooter.lastElementChild) {
    mainContentFooter.removeChild(mainContentFooter.lastElementChild);
  }
  mainContentFooter.innerHTML = "";

  let addTaskButton = document.createElement("button");
  addTaskButton.className = "footer-button";
  addTaskButton.id = `add-task-but-${projectUUID.slice(24)}`;
  addTaskButton.dataset.projectUUID = projectUUID;
  addTaskButton.innerHTML = "Add Task";

  addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    addTaskButtonListener(e, todoh);
  });

  let deleteProjectButton = document.createElement("button");
  deleteProjectButton.className = "footer-button";
  deleteProjectButton.id = `del-proj-but-${projectUUID.slice(24)}`;
  deleteProjectButton.dataset.projectUUID = projectUUID;
  deleteProjectButton.innerHTML = "Delete Project";

  deleteProjectButton.addEventListener("click", (e) => {
    e.preventDefault();
    deleteProjectButtonListener(e, todoh);
  });

  mainContentFooter.appendChild(addTaskButton);
  mainContentFooter.appendChild(deleteProjectButton);
}

function projectPageEventListeners(e, todoh) {
  // let project = todoh.readTodoProject(parseInt(e.target.id.slice(15)));
  // buildTaskElements(parseInt(e.target.id.slice(15)), todoh);
  let projectUUID = document.getElementById(e.target.id).dataset.projectUUID;
  buildTaskElements(projectUUID, todoh);
  buildProjectPage(projectUUID, todoh);
}

export function buildProjectElements(todoh) {
  let projects = todoh.readTodoProjects();
  let projectList = document.querySelector("#project-list");
  while (projectList.lastElementChild) {
    projectList.removeChild(projectList.lastElementChild);
  }
  projectList.innerHTML = "";
  projects.forEach((element, index) => {
    let projectbutton = document.createElement("button");
    projectbutton.type = "button";
    projectbutton.className = "project-button";
    projectbutton.id = `project-button-${element
      .getTodoProject()
      .projectUUID.slice(24)}`;
    projectbutton.dataset.projectUUID = element.getTodoProject().projectUUID;
    if (element.getTodoProject().projectTitle.length > 30) {
      projectbutton.innerHTML =
        element.getTodoProject().projectTitle.slice(0, 27) + "...";
    } else {
      projectbutton.innerHTML = element.getTodoProject().projectTitle;
    }

    projectbutton.addEventListener("click", (e) => {
      projectPageEventListeners(e, todoh);
    });

    let projectCellDiv = document.createElement("div");
    projectCellDiv.className = "project-cell";
    projectCellDiv.appendChild(projectbutton);

    projectList.appendChild(projectCellDiv);
  });
}

function newProjectSubmit(e, todoh) {
  if (e.target.id == "new-project-submit") {
    todoh.addTodoProject(
      document.getElementById("project-name-input").value,
      ""
    );
    buildProjectElements(todoh);
    document.getElementById("add-project-dialog").close();
  }
}
function newProjectCancel() {
  document.getElementById("add-project-dialog").close();
}

export function projectSidebarEventListeners(todoh) {
  document
    .getElementById("new-project-submit")
    .replaceWith(document.getElementById("new-project-submit").cloneNode(true));
  document
    .getElementById("new-project-cancel")
    .replaceWith(document.getElementById("new-project-cancel").cloneNode(true));

  document
    .getElementById("new-project-submit")
    .addEventListener("click", (e) => {
      e.preventDefault();
      newProjectSubmit(e, todoh);
    });

  document
    .getElementById("new-project-cancel")
    .addEventListener("click", (e) => {
      e.preventDefault();
      newProjectCancel();
    });

  document.getElementById("project-name-input").value = "";

  document.getElementById("add-proj-but").addEventListener("click", () => {
    document.getElementById("add-project-dialog").showModal();
  });
}
