// import { randomUUID } from 'crypto';

function todoTaskF(title, project, description, dueDate, priority, completed) {
  let taskTitle = title;
  let taskProject = project;
  let taskDescription = description;
  let taskDueDate = dueDate;
  let taskPriority = priority;
  let taskCompleted = completed;
  function getTodoTask() {
    return {
      taskTitle,
      taskProject,
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
  function modifyTodoTask(title, project, description, dueDate, priority) {
    taskTitle = title;
    taskProject = project;
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

export function todoProjectF(title) {
  let projectTitle = title;
  // let projectUUID = randomUUID();
  function getTodoProject() {
    return projectTitle;
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
      task.project,
      task.description,
      task.dueDate,
      task.priority,
      task.completed
    );
  }

  for (const project of projects) {
    //the intial read from storage
    addTodoProject(project.title);
  }
  // let todoTasks = [];
  // let todoProjects = [];

  function addTodoTask(
    title,
    project,
    description,
    dueDate,
    priority,
    completed
  ) {
    todoTasks.push(
      todoTaskF(title, project, description, dueDate, priority, completed)
    );
  }
  function addTodoProject(title) {
    todoProjects.push(todoProjectF(title));
  }
  function readTodoTasks() {
    return todoTasks;
  }
  function readTodoTasksForProject(project) {
    //filtering todo.readTodoTasks().filter((task)=>task.getTodoTask().taskProject == "test project")
    return todoTasks.filter(
      (task) => task.getTodoTask().taskProject == project.getTodoProject()
    );
  }
  function readTodoProjects() {
    return todoProjects;
  }
  function modifyTodoTask(
    index,
    title,
    project,
    description,
    dueDate,
    priority
  ) {
    todoTasks(index).modifyTodoTask(
      title,
      project,
      description,
      dueDate,
      priority
    );
  }
  function setTodoTaskCompleted(i) {
    todoTasks[i].setTaskCompleted();
  }
  function unsetTodoTaskCompleted(i) {
    todoTasks[i].unsetTaskCompleted();
  }
  function modifyTodoProject(index, title) {
    todoProjects(index).modifyTodoProject(title);
  }
  function deleteTodoTask(index) {
    todoTasks.splice(index, 1);
  }
  function deleteTodoProject(index) {
    todoProjects.splice(index, 1);
  }

  return {
    addTodoTask,
    addTodoProject,
    readTodoTasks,
    readTodoProjects,
    readTodoTasksForProject,
    modifyTodoTask,
    modifyTodoProject,
    deleteTodoTask,
    deleteTodoProject,
    setTodoTaskCompleted,
    unsetTodoTaskCompleted,
  };
};
