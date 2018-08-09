let commentCounter = 1
let description = document.getElementById('new-task-description')
let tasks = document.getElementById('tasks')
let taskButton = document.getElementById('new-task')
let deleteB = document.getElementsByClassName('button')
let color = document.getElementById('colorChanger')
let date = document.getElementById('date')
let time = document.getElementById('time')

init()

function init() {
  document.addEventListener("DOMContentLoaded", () => {
    const taskList = new TaskList();
  });
  taskButton.addEventListener('click', createTask)
}


function createTask(event) {
  event.preventDefault()
  li = document.createElement('li') // refactor to tasks.createElement
  li.setAttribute('id', `task-${commentCounter}`)
  li.appendChild(document.createTextNode(description.value + " on " + date.value + " " + time.value)) //setting li.text_value to input value(description.value)
  tasks.appendChild(li)
  colorChange(li)
  createButton()
  description.value = ""
}

function createButton() {
  deleteButton = document.createElement('button')
  deleteButton.setAttribute('id', `${commentCounter}`)
  li.appendChild(deleteButton)
  deleteButton.innerHTML = 'X'
  deleteButton.addEventListener('click', deleteTask)
  commentCounter++
}

function deleteTask(event) {
  item = document.getElementById(`task-${event.target.id}`)
  tasks.removeChild(item)
}

function colorChange(li) {
  li.style.color = color.value
}
