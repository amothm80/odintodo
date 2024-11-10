import "./styles.css";
import { todoHandler } from "./todo.js";
import { buildProjectElements, projectSidebarEventListeners} from "./projectUI.js";
import userIcon from "./assets/user.png";
import notifOn from "./assets/notif-on.png";
import notifOff from "./assets/notif-off.png";
import addProject from "./assets/plus.png";

// let tasks = [{title:'test title', project:'test project', description:'test descrption', dueDate:'12-12-2024', priority:'high'},
//     {title:'test title2', project:'test project2', description:'test descrption2', dueDate:'01-01-2025', priority:'low'}
// ]
// let projects =[{title: 'test project'},{title: 'test project2'}]

// window.todoHandler = todoHandler;

//filtering todo.readTodoTasks().filter((task)=>task.getTodoTask().project == 'test project')




(function () {
  let tasks = [
    {
      title: "test title",
      project: "test project",
      description: "test descrption",
      dueDate: "12-12-2024",
      priority: "high",
      completed: false,
    },
    {
      title: "test title2",
      project: "test project",
      description: "test descrption",
      dueDate: "12-12-2024",
      priority: "normal",
      completed: true,
    },
    {
      title: "test title3",
      project: "test project2",
      description: "test descrption",
      dueDate: "12-12-2024",
      priority: "high",
    },
    {
      title: "test title4",
      project: "test project2",
      description: "test descrption",
      dueDate: "12-12-2024",
      priority: "high",
    },
    {
      title: "test title5",
      project: "test project2",
      description: "test descrption",
      dueDate: "12-12-2024",
      priority: "high",
    },
  ];
  let projects = [{ title: "test project" }, { title: "test project2" }];
  // let tasks = [];
  // let projects = [];
  let todoh = todoHandler(tasks, projects);
  buildProjectElements(todoh);
  projectSidebarEventListeners(todoh);
})();
