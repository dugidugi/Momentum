const todoForm = document.querySelector("form#todo-form");
const todoList = document.querySelector("ul#todo-list");
const todoInput = todoForm.querySelector("input");

const todos = [];

function deleteTodo(event) {
    event.preventDefault();
    //console.dir(event.target.parentNode);
    parentLi = event.target.parentElement;
    parentLi.remove();
}

function saveLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
}


function displayTodo(todoItem) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = todoItem;
    const button = document.createElement("button");
    
    button.innerText = "X";
    li.appendChild(span);  
    li.appendChild(button);

    todoList.appendChild(li);

    button.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value
    todoInput.value = ""; //submit되면 창에 있는 입력된 텍스트 지우기
    displayTodo(newTodo);
    todos.push(newTodo);
    saveLocalStorage();
}

todoForm.addEventListener("submit", handleTodoSubmit);