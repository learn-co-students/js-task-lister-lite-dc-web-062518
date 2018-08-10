//
// document.addEventListener("DOMContentLoaded", () => {
//
// });

const submit = document.getElementById('submit')

submit.addEventListener('click', addTodo)

const tasks = document.getElementById('tasks')
const inputEl = document.getElementById('new-task-description')
const date = document.getElementById('date')


let liCounter = 1
let buttonCounter = 1

let li

function addTodo(event) {
  event.preventDefault()
  li = document.createElement('li')
  tasks.appendChild(li)
  li.id = liCounter++
  // console.log(inputEl.value)
  li.innerText = `Task: ${inputEl.value} Due Date: ${date.value}`
  inputEl.value = ''
  priorityList()
  let button = document.createElement('button')
  button.innerHTML = 'x'
  li.appendChild(button)
  button.id = buttonCounter++
  button.addEventListener('click', deleteButton)
}

// let button = document.getElementsByTagName('button')

function deleteButton(event) {
  let target = document.getElementById(event.target.id)
  // console.log(target)
  target.remove()
}

function priorityList() {
  let priority = document.getElementById('dropdown').value
  if (priority === "low") {
    li.style.color = 'green'
  } else if (priority === "med") {
    li.style.color = '	#FFFF00'
  } else if (priority === "high") {
    li.style.color = '#ff0000'
  }
}
