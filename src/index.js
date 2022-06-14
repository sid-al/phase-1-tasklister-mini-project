document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form')
  // log something
   const newTaskForm = document.querySelector('#create-task-form');
   const logTask = document.getElementById('new-task-description');
   const nwTaskPriority = document.getElementById('new-task-priority');

   // ul where new tasks will be in DOM

   const nwTaskUl = document.getElementById('tasks');

   // bind event listners

   newTaskForm.addEventListener('submit', createNwTask); 
  });


const createNwTask = event => {
  // stop from trying to submit
  event.preventDefault();

  const nwTaskDescription = document.getElementById('new-task-description');
  const nwTask = document.createElement('li');
  nwTask.innerHTML = nwTaskDescription.value;

  appendnwTask(nwTask);
  event.target.reset();
};

const appendnwTask = task => {
  document.getElementById("tasks").appendChild(task);
};

