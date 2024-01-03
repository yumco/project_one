const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];


function saveToDos(){
    localStorage.setItem(TODOS_KEY , JSON.stringify(toDos));
}




function deleteToDo(event){
   const li = event.target.parentElement;
   li.remove();
}



function painToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}



function handleToDoSubmit(event) {
     event.preventDefault();
     const newTodo = toDoInput.value;
     console.log(toDoInput.value);
    toDoInput.value="";
    toDos.push(newTodo);
    console.log(newTodo, toDoInput.value);
    painToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem("TODOS_KEY");


if(saveToDos){
    const parsedToDos= JSON.parse(saveToDos);
}