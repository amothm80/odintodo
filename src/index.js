import "./styles.css";
import { todoHandler } from "./todo.js";
import userIcon from "./assets/user.png";
import notifOn from "./assets/notif-on.png";
import notifOff from "./assets/notif-off.png";
import addProject from "./assets/plus.png";

// let tasks = [{title:"test title", project:"test project", description:"test descrption", dueDate:"12-12-2024", priority:"high"},
//     {title:"test title2", project:"test project2", description:"test descrption2", dueDate:"01-01-2025", priority:"low"}
// ]
// let projects =[{title: "test project"},{title: "test project2"}]

// window.todoHandler = todoHandler;

//filtering todo.readTodoTasks().filter((task)=>task.getTodoTask().taskProject == "test project")

// TODO add a fuction to create project elements

function buildProjectElements(projects) {
  let projectList = document.querySelector("#project-list");
  projectList.innerHTML = "";
  projects.forEach((element, index) => {
    let projectbutton = document.createElement("button");
    projectbutton.type = "button";
    projectbutton.class = "project-button";
    projectbutton.id = `project-button-${index}`;
    projectbutton.innerHTML = element.getTodoProject();

    //TODO add project button handler

    let projectCellDiv = document.createElement("div");
    projectCellDiv.class = "project-cell";
    projectCellDiv.appendChild(projectbutton);

    projectList.appendChild(projectCellDiv);
  });
}

// TODO add a function to create task elements

function buildTaskElements(tasks) {}

// TODO add handlers for buttons

// TODO adde handlers for dialogs

(function () {
  let tasks = [];
  let projects = [];
  let todoh = todoHandler(tasks, projects);
  buildProjectElements(todoh.readTodoProjects());

  let projectDialog = document.getElementById("add-project-dialog");
  let projectForm = document.getElementById("add-project-form");

  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
  });

  let addProjectButton = document.querySelector("#add-proj-but");
  addProjectButton.addEventListener("click", () => {
    projectDialog.showModal();
  });
})();
