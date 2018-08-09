
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
});

const submitButton = document.querySelector('#button')
const form = document.querySelector('#create-task-form')
const taskul = document.querySelector('#tasks')
const text = document.getElementById('new-task-description')
const date = document.getElementById('new-task-due-date')
const priority = document.getElementById('new-task-priority')
const sortByDateButton = document.getElementById('sort-by-date')

form.addEventListener('submit', function(event) {
  event.preventDefault(event)
  if (text.value && date.value) {
    addItem()
  }
})

sortByDateButton.addEventListener('click', function() {
  let listItems = Array.from(taskul.querySelectorAll('li'))
  console.log(listItems)
  let a = listItems.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date)
  })
  taskul.innerHTML = ""
  a.forEach(element => {
    taskul.appendChild(element)
  })
})

function addItem() {

  let li = document.createElement('li')
  li.innerText = text.value + " - " + date.value
  li.text = text.value
  li.date = date.value
  li.style.color = priority.value
  addClass(li)
  taskul.appendChild(li)

  let deletebutton = document.createElement('button')
  deletebutton.innerText = "X"
  addListenerToDeleteButton(deletebutton)
  li.appendChild(deletebutton)

  let editbutton = document.createElement('button')
  editbutton.innerText = "Edit"
  addListenerToEditButton(editbutton)
  li.appendChild(editbutton)

  sortListItemsByPriority()
  form.reset()
}

function addListenerToDeleteButton(buttonEl) {
  buttonEl.addEventListener('click', function(e) {
    buttonEl.parentElement.remove()
  })
}

function addListenerToEditButton(editEl) {
  editEl.addEventListener('click', function() {
    let line = editEl.parentElement
    text.value = line.text
    date.value = line.date
    priority.value = line.style.color
    line.remove()
  })
}

function addClass(liEl) {
  if (liEl.style.color == "red") {
    liEl.class = "1"
  } else if (liEl.style.color == "yellow") {
    liEl.class = "2"
  } else if (liEl.style.color == "green") {
    liEl.class = "3"
  }
}

function sortListItemsByPriority() {
  let listItems = Array.from(taskul.querySelectorAll('li'))
  let a = listItems.sort(function(a, b) {
    return a.class - b.class
  })
  taskul.innerHTML = ""
  a.forEach(element => {
    taskul.appendChild(element)
  })
}
