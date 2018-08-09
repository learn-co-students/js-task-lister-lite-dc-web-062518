counter = 0;
const taskButton = document.getElementById("new-task");
let description = document.getElementById("new-task-description");
let tasks = document.getElementById("tasks");
let deleteButtons = document.getElementsByClassName("delete")
let color = document.getElementById('priority')
let date = document.getElementById("new-task-date")
let duration = document.getElementById("new-task-duration")

init();

function init(){
  document.addEventListener("DOMContentLoaded", () => {
    const taskList = new TaskList();
  });
  taskButton.addEventListener('click', createTask);
}

function createTask(event) {
  event.preventDefault();
  // tasks.createElement???
  li = document.createElement("li");
  li.setAttribute("id", `task-${counter}`);
  li.appendChild(document.createTextNode(description.value + " by " + date.value + " - Expected Duration: " + duration.value));
  tasks.appendChild(li);
  description.value = "";

  colorChange(li);
  createDeleteButton();
}

function colorChange(li){
  li.style.color = color.value
}

function createDeleteButton(){
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", `${counter}`);
  deleteButton.setAttribute("class", "delete");
  li.appendChild(deleteButton);
  deleteButton.innerHTML = "X";
  deleteButton.addEventListener('click', deleteTask);
  counter++;
}

function deleteTask(event) {
  let task = document.getElementById(`task-${event.target.id}`)
  tasks.removeChild(task);
}
