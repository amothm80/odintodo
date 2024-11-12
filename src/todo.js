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
  let taskProjectUUID = projectUUID;
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
  function modifyTaskTitle(title) {
    taskTitle = title;
  }
  function modifyTaskDescription(description) {
    taskDescription = description;
  }
  function modifyTaskDueDate(dueDate) {
    taskDueDate = dueDate;
  }
  function modifyTaskPriority(priority) {
    taskPriority = priority;
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
    modifyTaskTitle,
    modifyTaskDescription,
    modifyTaskDueDate,
    modifyTaskPriority,
    modifyTodoTask,
    setTaskCompleted,
    unsetTaskCompleted,
  };
}

export function todoProjectF(title, UUID) {
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
  function modifyProjectTitle(title) {
    projectTitle = title;
  }
  function modifyTodoProject(title) {
    projectTitle = title;
  }
  return { getTodoProject, modifyProjectTitle, modifyTodoProject };
}

// let tasks = [{taskTitle:"test title", taskProject:"test project", taskDescription:"test descrption", taskDueDate:"12-12-2024", taskPriority:"high"}]
// let projects =[{projectTitle: "test project"}]

export const todoHandler = function (tasks, projects) {
  let todoTasks = [];
  let todoProjects = [];
  for (const task of tasks) {
    //the intial read from storage
    addTodoTask(
      task.title,
      task.UUID,
      task.projectUUID,
      task.description,
      task.dueDate,
      task.priority,
      task.completed
    );
  }

  for (const project of projects) {
    //the intial read from storage
    addTodoProject(project.title, project.UUID);
  }

  function addTodoTask(
    title,
    UUID,
    projectUUID,
    description,
    dueDate,
    priority,
    completed
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
  }
  function addTodoProject(title, UUID) {
    todoProjects.push(todoProjectF(title, UUID));
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

  function deleteTodoTaskByIndex(index) {
    todoTasks.splice(index, 1);
  }
  function deleteTodoTaskByUUID(UUID) {
    todoTasks.splice(
      todoTasks.findIndex((task) => task.getTodoTask().taskUUID == UUID),
      1
    );
  }
  function deleteTodoProjectByIndex(index) {
    todoProjects.splice(index, 1);
  }
  function deleteTodoProjectByUUID(UUID) {
    let tasks = readTodoTasksForProject(readTodoProjectByUUID(UUID))

    for(let task of tasks){
      todoTasks.splice(
        todoTasks.findIndex(
          (t)=>
            t.getTodoTask().taskUUID == task.getTodoTask().taskUUID
        ),1
      )
    }

    todoProjects.splice(
      todoProjects.findIndex(
        (project) => project.getTodoProject().projectUUID == UUID
      ),
      1
    );

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
    deleteTodoTaskByIndex,
    deleteTodoTaskByUUID,
    deleteTodoProjectByIndex,
    deleteTodoProjectByUUID,
  };
};
