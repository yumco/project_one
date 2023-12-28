const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);