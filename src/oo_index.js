
document.addEventListener("DOMContentLoaded", init);
const ul = document.querySelector('#tasks');
const input = document.querySelector('#new-task-description');
const form = document.querySelector('#create-task-form');
const drop = document.querySelector('#dropDown')
const date = document.querySelector('#date')
let count = 0;

function init() {
  form.addEventListener('submit', addTask);

}

addTask = (e)=>
{
  e.preventDefault()
  if (input.value !== ""){
    createLi()
    form.reset();
    sort()
  }
}
deleteTask = (e) =>
{
  let element = document.getElementById(`${e.target.id}`)
  element.remove(0)
}

createLi = ()=>
{
  count++
  let li = document.createElement('li');
  li.innerText = input.value + " " + date.value;
  li.date = date.value
  li.id = `${count}`;
  li.style.color = drop.value;
  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'X';
  deleteButton.id = count;
  deleteButton.addEventListener('click', deleteTask);
  ul.appendChild(li);
  li.appendChild(deleteButton);

  if (drop.value === 'green'){li.priority = 3;}
  else if (drop.value === '#dfe21d') {li.priority = 2;}
  else if (drop.value === 'red') {li.priority = 1;}
}

sort = ()=>
{
  let tasks = Array.from(ul.querySelectorAll('li'))
  let array = tasks.sort(function(a, b)
  {
      return a.priority - b.priority;
  })
  ul.innerText = '';
  array.forEach(element => {
    ul.appendChild(element)
  })
}
