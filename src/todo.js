//generate unique IDs
import { v4 as uuidv4 } from "uuid";
//to do main functions
function todoTaskF(
  title,
  UUID,
  projectUUID,
  description,
  dueDate,
  priority,
  completed
) {
  let taskTitle = title;
  let taskUUID = "";
  if (UUID == "") {
    taskUUID = uuidv4();
  } else {
    taskUUID = UUID;
  }
  const taskProjectUUID = projectUUID;
  let taskDescription = description;
  let taskDueDate = dueDate;
  let taskPriority = priority;
  let taskCompleted = completed;
  function getTodoTask() {
    return {
      taskTitle,
      taskUUID,
      taskProjectUUID,
      taskDescription,
      taskDueDate,
      taskPriority,
      taskCompleted,
    };
  }
  function modifyTodoTask(title, description, dueDate, priority) {
    taskTitle = title;
    // taskProject = project;
    taskDescription = description;
    taskDueDate = dueDate;
    taskPriority = priority;
  }
  function setTaskCompleted() {
    taskCompleted = true;
  }
  function unsetTaskCompleted() {
    taskCompleted = false;
  }
  return {
    getTodoTask,
    modifyTodoTask,
    setTaskCompleted,
    unsetTaskCompleted,
  };
}

function todoProjectF(title, UUID) {
  let projectTitle = title;
  let projectUUID = "";
  if (UUID == "") {
    projectUUID = uuidv4();
  } else {
    projectUUID = UUID;
  }
  // let projectUUID = randomUUID();
  function getTodoProject() {
    return { projectTitle, projectUUID };
  }
  function modifyTodoProject(title) {
    projectTitle = title;
  }
  return { getTodoProject, modifyTodoProject };
}

// let tasks = [{taskTitle:"test title", taskProject:"test project", taskDescription:"test descrption", taskDueDate:"12-12-2024", taskPriority:"high"}]
// let projects =[{projectTitle: "test project"}]

// export const todoHandler = function (tasks, projects) {
export const todoHandler = function () {
  const todoTasks = [];
  const todoProjects = [];

  function saveToLocalStorage() {
    const todoTasksJSON = [];
    const todoProjectsJSON = [];

    for (const task of todoTasks) {
      todoTasksJSON.push(task.getTodoTask());
    }
    for (const project of todoProjects) {
      todoProjectsJSON.push(project.getTodoProject());
    }
    localStorage.setItem("todoTasks", JSON.stringify(todoTasksJSON));
    localStorage.setItem("todoProjects", JSON.stringify(todoProjectsJSON));
  }

  function loadFromStorage() {
    const tasks = JSON.parse(localStorage.getItem("todoTasks"));
    const projects = JSON.parse(localStorage.getItem("todoProjects"));

    if (tasks) {
      for (const task of tasks) {
        //the intial read from storage
        addTodoTask(
          task.taskTitle,
          task.taskUUID,
          task.taskProjectUUID,
          task.taskDescription,
          task.taskDueDate,
          task.taskPriority,
          task.taskCompleted,
          true
        );
      }
    }

    if (projects) {
      for (const project of projects) {
        //the intial read from storage
        addTodoProject(project.projectTitle, project.projectUUID, true);
      }
    }
  }

  loadFromStorage();

  function addTodoTask(
    title,
    UUID,
    projectUUID,
    description,
    dueDate,
    priority,
    completed,
    storageLoad
  ) {
    todoTasks.push(
      todoTaskF(
        title,
        UUID,
        projectUUID,
        description,
        dueDate,
        priority,
        completed
      )
    );
    if (!storageLoad) {
      saveToLocalStorage();
    }
  }
  function addTodoProject(title, UUID, storageLoad) {
    todoProjects.push(todoProjectF(title, UUID));
    if (!storageLoad) {
      saveToLocalStorage();
    }
  }
  function readTodoTasks() {
    return todoTasks;
  }

  function readTodoTaskByIndex(index) {
    return todoTasks[index];
  }

  function readTodoTaskByUUID(UUID) {
    return todoTasks.find((task) => task.getTodoTask().taskUUID == UUID);
  }

  function readTodoTasksForProject(project) {
    //filtering todo.readTodoTasks().filter((task)=>task.getTodoTask().taskProject == "test project")
    return todoTasks.filter(
      (task) =>
        task.getTodoTask().taskProjectUUID ==
        project.getTodoProject().projectUUID
    );
  }

  function readTodoProjectByIndex(index) {
    return todoProjects[index];
  }

  function readTodoProjectByUUID(UUID) {
    return todoProjects.find(
      (project) => project.getTodoProject().projectUUID == UUID
    );
  }

  function readTodoProjects() {
    return todoProjects;
  }

  function modifyTodoTask(title, description, dueDate, priority, UUID) {
    const task = readTodoTaskByUUID(UUID);
    task.modifyTodoTask(title, description, dueDate, priority);
    saveToLocalStorage();
  }

  function modifyTodoProject(title, UUID) {
    const project = readTodoProjectByUUID(UUID);
    project.modifyTodoProject(title);
    saveToLocalStorage();
  }

  function deleteTodoTaskByIndex(index) {
    todoTasks.splice(index, 1);
    saveToLocalStorage();
  }
  function deleteTodoTaskByUUID(UUID) {
    todoTasks.splice(
      todoTasks.findIndex((task) => task.getTodoTask().taskUUID == UUID),
      1
    );
    saveToLocalStorage();
  }
  function deleteTodoProjectByIndex(index) {
    todoProjects.splice(index, 1);
    saveToLocalStorage();
  }
  function deleteTodoProjectByUUID(UUID) {
    const tasks = readTodoTasksForProject(readTodoProjectByUUID(UUID));

    for (const task of tasks) {
      todoTasks.splice(
        todoTasks.findIndex(
          (t) => t.getTodoTask().taskUUID == task.getTodoTask().taskUUID
        ),
        1
      );
    }

    todoProjects.splice(
      todoProjects.findIndex(
        (project) => project.getTodoProject().projectUUID == UUID
      ),
      1
    );
    saveToLocalStorage();
  }

  function setTodoTaskCompleted(UUID) {
    const task = readTodoTaskByUUID(UUID);
    task.setTaskCompleted();
    saveToLocalStorage();
  }
  function unsetTodoTaskCompleted(UUID) {
    const task = readTodoTaskByUUID(UUID);
    task.unsetTaskCompleted();
    saveToLocalStorage();
  }

  return {
    addTodoTask,
    addTodoProject,
    readTodoTaskByIndex,
    readTodoTaskByUUID,
    readTodoTasks,
    readTodoProjectByIndex,
    readTodoProjectByUUID,
    readTodoProjects,
    readTodoTasksForProject,
    modifyTodoTask,
    modifyTodoProject,
    deleteTodoTaskByIndex,
    deleteTodoTaskByUUID,
    deleteTodoProjectByIndex,
    deleteTodoProjectByUUID,
    setTodoTaskCompleted,
    unsetTodoTaskCompleted,
  };
};
