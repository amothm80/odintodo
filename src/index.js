import './styles.css';
import { todoHandler } from './todo.js';
import userIcon from './assets/user.png';
import notifOn from './assets/notif-on.png';
import notifOff from './assets/notif-off.png';
import addProject from './assets/plus.png';

// let tasks = [{title:'test title', project:'test project', description:'test descrption', dueDate:'12-12-2024', priority:'high'},
//     {title:'test title2', project:'test project2', description:'test descrption2', dueDate:'01-01-2025', priority:'low'}
// ]
// let projects =[{title: 'test project'},{title: 'test project2'}]

// window.todoHandler = todoHandler;

//filtering todo.readTodoTasks().filter((task)=>task.getTodoTask().project == 'test project')

function taskEventListeners() {}

function buildTaskElements(tasks) {
  let taskList = document.getElementById('task-list');
  taskList.innerHTML = '';
  tasks.forEach((element, index) => {
    let task = element.getTodoTask();
    /*high cell fields*/
    let completed = document.createElement('input');
    completed.className = 'task-checkbox';
    completed.id = `task-checkbox-${index}`;
    completed.type = 'checkbox';
    completed.checked = task.taskCompleted;

    let title = document.createElement('p');
    title.className = 'task-title';
    title.id = `task-title-${index}`;
    title.innerHTML = task.taskTitle;

    let dueDate = document.createElement('p');
    dueDate.className = 'task-due';
    dueDate.id = `task-due-${index}`;
    dueDate.innerHTML = task.taskDueDate;

    let priority = document.createElement('p');
    priority.className = 'task-priority';
    priority.id = `task-priority-${index}`;
    priority.innerHTML = task.taskPriority;

    /**mid cells field */
    let description = document.createElement('p');
    description.className = 'task-description';
    description.id = `task-description-${index}`;
    description.innerHTML = task.taskDescription;

    /*low cell fields*/
    let taskEditButton = document.createElement('button');
    taskEditButton.type = 'button';
    taskEditButton.className = 'task-edit-button';
    taskEditButton.id = `task-edit-button-${index}`;
    taskEditButton.innerHTML = 'Edit Task';

    let taskDeleteButton = document.createElement('button');
    taskDeleteButton.type = 'button';
    taskDeleteButton.className = 'task-delete-button';
    taskDeleteButton.id = `task-delete-button-${index}`;
    taskDeleteButton.innerHTML = 'Delete Task';

    /**high cells */
    let taskCellDivHigh = document.createElement('div');
    taskCellDivHigh.className = 'task-cell-high';

    taskCellDivHigh.appendChild(completed);
    taskCellDivHigh.appendChild(title);
    taskCellDivHigh.appendChild(priority);
    taskCellDivHigh.appendChild(dueDate);

    /**mid cells */
    let taskCellDivMid = document.createElement('div');
    taskCellDivMid.className = 'task-cell-mid';
    taskCellDivMid.appendChild(description);
    /**low cells */
    let taskCellDivLow = document.createElement('div');
    taskCellDivLow.className = 'task-cell-low';

    taskCellDivLow.appendChild(taskEditButton);
    taskCellDivLow.appendChild(taskDeleteButton);

    let taskCellDiv = document.createElement('div');
    taskCellDiv.className = 'task-cell';
    taskCellDiv.appendChild(taskCellDivHigh);
    taskCellDiv.appendChild(taskCellDivMid);
    taskCellDiv.appendChild(taskCellDivLow);
    taskList.appendChild(taskCellDiv);
  });

  // taskEventListeners();
}

function buildProjectPage(project) {
  let projectTitle = document.getElementById('project-title');
  projectTitle.innerHTML = `<h1>${project.getTodoProject()}</h1>`;

  let mainContentFooter = document.getElementById('main-content-footer');
  mainContentFooter.innerHTML = '';

  let addTaskButton = document.createElement('button');
  addTaskButton.className = 'footer-button';
  addTaskButton.id = 'add-task-but';
  addTaskButton.innerHTML = 'Add Task';

  let deleteProjectButton = document.createElement('button');
  deleteProjectButton.className = 'footer-button';
  deleteProjectButton.id = 'del-proj-but';
  deleteProjectButton.innerHTML = 'Delete Project';

  mainContentFooter.appendChild(addTaskButton);
  mainContentFooter.appendChild(deleteProjectButton);
}

function projectPageEventListeners(e, project, todoh) {
  buildTaskElements(todoh.readTodoTasksForProject(project));
  buildProjectPage(project);
}

function buildProjectElements(todoh) {
  let projects = todoh.readTodoProjects();
  let projectList = document.querySelector('#project-list');
  projectList.innerHTML = '';
  projects.forEach((element, index) => {
    let projectbutton = document.createElement('button');
    projectbutton.type = 'button';
    projectbutton.className = 'project-button';
    projectbutton.id = `project-button-${index}`;
    projectbutton.innerHTML = element.getTodoProject();

    projectbutton.addEventListener(
      'click',
      // projectPageEventListeners(element, todoh)
      (e) => {
        projectPageEventListeners(e, element, todoh);
      }
    );

    let projectCellDiv = document.createElement('div');
    projectCellDiv.className = 'project-cell';
    projectCellDiv.appendChild(projectbutton);

    projectList.appendChild(projectCellDiv);
  });
}

function newProjectSubmit(e, todoh) {
  e.preventDefault();
  todoh.addTodoProject(document.getElementById('project-name-input').value);
  buildProjectElements(todoh);
  console.log('dialog submitted');
  document.getElementById('add-project-dialog').close();
}
function newProjectCancel() {
  console.log('dialog canceled');
  document.getElementById('add-project-dialog').close();
}

function projectSidebarEventListeners(todoh) {
  document
    .getElementById('add-project-form')
    .addEventListener('submit', (e) => newProjectSubmit(e, todoh));

  document
    .getElementById('newProjectCancel')
    .addEventListener('click', () => newProjectCancel());

  document.querySelector('#add-proj-but').addEventListener('click', () => {
    document.getElementById('add-project-dialog').showModal();
  });
}

(function () {
  let tasks = [
    {
      title: 'test title',
      project: 'test project',
      description: 'test descrption',
      dueDate: '12-12-2024',
      priority: 'high',
      completed: false,
    },
    {
      title: 'test title2',
      project: 'test project',
      description: 'test descrption',
      dueDate: '12-12-2024',
      priority: 'normal',
      completed: true,
    },
    {
      title: 'test title3',
      project: 'test project2',
      description: 'test descrption',
      dueDate: '12-12-2024',
      priority: 'high',
    },
    {
      title: 'test title4',
      project: 'test project2',
      description: 'test descrption',
      dueDate: '12-12-2024',
      priority: 'high',
    },
    {
      title: 'test title5',
      project: 'test project2',
      description: 'test descrption',
      dueDate: '12-12-2024',
      priority: 'high',
    },
  ];
  let projects = [{ title: 'test project' }, { title: 'test project2' }];
  // let tasks = [];
  // let projects = [];
  let todoh = todoHandler(tasks, projects);
  buildProjectElements(todoh);
  projectSidebarEventListeners(todoh);
})();
