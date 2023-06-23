document.addEventListener("DOMContentLoaded", () => {
  // your code here

 let form = document.querySelector("form")
 form.addEventListener('submit', (e) =>{
    e.preventDefault(),
    buildToDoList(e.target.new_task_description.value,
       e.target.priority_select.value)
    form.reset()
     
      })      
});

function buildToDoList(toDo, priority){
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete )
  console.log(btn)
  li.textContent = `${toDo} `
  btn.textContent= "X";
  li.appendChild(btn);
  
  li.classList.add(priority);

  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
 }