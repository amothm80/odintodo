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
      UUID: "d0872365-c66a-4d10-9ae6-81c9d9b2bbf8",
      projectUUID: "490ab098-18b3-4b4c-a89f-6d671c49127c",
      description: "test descrption",
      dueDate: "12-12-2024",
      priority: "high",
      completed: false,
    },
    {
      title: "test title2",
      UUID: "b34634c5-9d20-4098-ba42-d07cf8adfae3",
      projectUUID: "490ab098-18b3-4b4c-a89f-6d671c49127c",
      description: "test descrption",
      dueDate: "12-12-2024",
      priority: "normal",
      completed: true,
    },
    {
      title: "test title3",
      UUID: "f6c9f73e-f377-4615-b29c-1e8e22617579",
      projectUUID: "490ab098-18b3-4b4c-a89f-6d671c49127c",
      description: "test descrption",
      dueDate: "12-12-2024",
      priority: "high",
      completed: false,
    },
    {
      title: "test title4",
      UUID: "fe9cb9ae-87ff-4cfb-af0d-efc23bf976fe",
      projectUUID: "bf14879c-d704-4404-9d07-a9e5c85753e8",
      description: "test descrption",
      dueDate: "12-12-2024",
      priority: "high",
      completed: false,
    },
    {
      title: "test title5",
      UUID: "f043076c-2126-46c4-8011-3615b362d5c",
      projectUUID: "bf14879c-d704-4404-9d07-a9e5c85753e8",
      description: "test descrption",
      dueDate: "12-12-2024",
      priority: "high",
      completed: true,
    },
  ];
  let projects = [{ title: "test project", UUID:"490ab098-18b3-4b4c-a89f-6d671c49127c" }, { title: "test project2", UUID:"bf14879c-d704-4404-9d07-a9e5c85753e8" }];
  // let tasks = [];
  // let projects = [];
  // let todoh = todoHandler(tasks, projects);
  let todoh = todoHandler();
  buildProjectElements(todoh);
  projectSidebarEventListeners(todoh);
})();
