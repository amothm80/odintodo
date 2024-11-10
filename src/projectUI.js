import {taskEventListeners, buildTaskElements} from "./taskUI.js";
// function addTodoTask(
//   title,
//   project,
//   description,
//   dueDate,
//   priority,
//   completed
// )

export function newTaskSubmit(e, project, todoh) {
    e.preventDefault();
    todoh.addTodoTask(
      document.getElementById("task-title-input").value,
      project.getTodoProject(),
      document.getElementById("task-description-input").value,
      document.getElementById("task-priority-input").value,
      document.getElementById("task-duedate-input").value,
      false
    );
    // todoh.addTodoProject(document.getElementById("project-name-input").value);
    buildTaskElements(todoh.readTodoTasksForProject(project),todoh, project);
    console.log("dialog submitted");
    document.getElementById("add-task-dialog").close();
  }
  
  
  export function newTaskCancel() {
    console.log("dialog canceled");
    document.getElementById("add-task-dialog").close();
  }
  
  export function addTaskButtonListener(e, project, todoh) {
    document
      .getElementById("add-task-form")
      .addEventListener("submit", (e) => newTaskSubmit(e, project, todoh));
  
    document
      .getElementById("new-task-cancel")
      .addEventListener("click", () => newTaskCancel());
  
    document.getElementById("add-task-dialog").showModal();
  }
  
  export function deleteProjectButtonListener(e, project, todoh) {}
  
  export function buildProjectPage(project, todoh) {
    let projectTitle = document.getElementById("project-title");
    projectTitle.innerHTML = `<h1>${project.getTodoProject()}</h1>`;
  
    let mainContentFooter = document.getElementById("main-content-footer");
    mainContentFooter.innerHTML = "";
  
    let addTaskButton = document.createElement("button");
    addTaskButton.className = "footer-button";
    addTaskButton.id = "add-task-but";
    addTaskButton.innerHTML = "Add Task";
  
    addTaskButton.addEventListener("click", (e) =>
      addTaskButtonListener(e, project, todoh)
    );
  
    let deleteProjectButton = document.createElement("button");
    deleteProjectButton.className = "footer-button";
    deleteProjectButton.id = "del-proj-but";
    deleteProjectButton.innerHTML = "Delete Project";
  
    deleteProjectButton.addEventListener("click", (e) =>
      deleteProjectButtonListener(e, project, todoh)
    );
  
    mainContentFooter.appendChild(addTaskButton);
    mainContentFooter.appendChild(deleteProjectButton);
  }
  
  export function projectPageEventListeners(e, project, todoh) {
    buildTaskElements(todoh.readTodoTasksForProject(project),todoh,project);
    buildProjectPage(project, todoh);
  }
  
  export function buildProjectElements(todoh) {
    let projects = todoh.readTodoProjects();
    let projectList = document.querySelector("#project-list");
    projectList.innerHTML = "";
    projects.forEach((element, index) => {
      let projectbutton = document.createElement("button");
      projectbutton.type = "button";
      projectbutton.className = "project-button";
      projectbutton.id = `project-button-${index}`;
      projectbutton.innerHTML = element.getTodoProject();
  
      projectbutton.addEventListener(
        "click",
        // projectPageEventListeners(element, todoh)
        (e) => projectPageEventListeners(e, element, todoh)
      );
  
      let projectCellDiv = document.createElement("div");
      projectCellDiv.className = "project-cell";
      projectCellDiv.appendChild(projectbutton);
  
      projectList.appendChild(projectCellDiv);
    });
  }
  
  export function newProjectSubmit(e, todoh) {
    e.preventDefault();
    todoh.addTodoProject(document.getElementById("project-name-input").value);
    buildProjectElements(todoh);
    console.log("dialog submitted");
    document.getElementById("add-project-dialog").close();
  }
  export function newProjectCancel() {
    console.log("dialog canceled");
    document.getElementById("add-project-dialog").close();
  }
  
  export function projectSidebarEventListeners(todoh) {
    document
      .getElementById("add-project-form")
      .addEventListener("submit", (e) => newProjectSubmit(e, todoh));
  
    document
      .getElementById("new-project-cancel")
      .addEventListener("click", () => newProjectCancel());
  
    document.getElementById("add-proj-but").addEventListener("click", () => {
      document.getElementById("add-project-dialog").showModal();
    });
  }
  