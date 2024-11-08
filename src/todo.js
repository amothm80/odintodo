function toDoTask(title, project, description, dueDate, priority){
    let taskTitle = title;
    let taskProject = project;
    let taskDescription = description;
    let taskDueDate = dueDate;
    let taskPriority = [priority];
    function getToDoTask() {return {taskTitle,taskProject,taskDescription, taskDueDate,taskPriority}};
    function modifyTaskTitle(title) {taskTitle = title;};
    function modifyTaskDescription(description) {taskDescription = description};
    function modifyTaskDueDate(dueDate) { taskDueDate = dueDate};
    function modifyTaskPriority(priority) {taskPriority = priority};
    return {getToDoTask, modifyTaskTitle, modifyTaskDescription, modifyTaskDueDate, modifyTaskPriority};
}

function todoProject(todoProjectTitle){
    let projectTitle = todoProjectTitle;
    function getToDoProject(){return projectTitle};
    function modifyProjectTitle(title){ projectTitle = title; }
    return{getToDoProject, modifyProjectTitle}
}