const form = document.getElementById('form-task');
const taskList = document.getElementById('div-tasks');

form.onsubmit = function (e) {
  e.preventDefault();
  const input = document.getElementById('task');
  if (input.value !== '') {
    addTask(input.value);
  }
  form.reset();
};

function addTask(task) {
  const container = document.createElement('div');
  const newTask = document.createElement('input');
  const taskLabel = document.createElement('label');
  const taskToDo = document.createTextNode(task);

  newTask.setAttribute('type', 'checkbox');
  newTask.setAttribute('name', task);
  newTask.setAttribute('id', task);

  taskLabel.setAttribute('for', task);
  taskLabel.appendChild(taskToDo);

  container.classList.add('task-item');
  container.appendChild(newTask);
  container.appendChild(taskLabel);

  taskList.appendChild(container);
}
