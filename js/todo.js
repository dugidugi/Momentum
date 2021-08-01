const todoForm = document.querySelector("form#todo-form");
const todoList = document.querySelector("ul#todo-list");
const todoInput = todoForm.querySelector("input");

const TODOS_KEY = "todos"

let todos = [];


function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    //여기 아내는 니꼬 듣기 전에 내가 임의로 해봄 
    todos = todos.filter(item => item.id !== parseInt(li.id));
    saveTodos();
}

function checkTodo(event) {
    const span = event.target.parentElement.childNodes[1];
    span.classList.toggle('checked');
    
}

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function displayTodo(todoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const checkbox = document.createElement("input");
    span.innerText = todoObj.text;
    li.id = todoObj.id;
    checkbox.type = "checkbox";
    
    const button = document.createElement("button");
    button.innerText = "X";
    

    li.appendChild(checkbox);
    li.appendChild(span);  
    li.appendChild(button);
    
    todoList.appendChild(li);
    button.addEventListener("click", deleteTodo);
    checkbox.addEventListener("click", checkTodo);
}

function handleTodoSubmit(event) {
    event.preventDefault(); //submit되면 브라우저가 refresh하는 default 행동 지우기 
    const newTodo = todoInput.value
    todoInput.value = "";  //submit되면 창에 있는 입력된 텍스트 지우기
    
    const newTodoObj = {id: Date.now(), text: newTodo};
    displayTodo(newTodoObj);
    todos.push(newTodoObj);
    saveTodos(); 
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){ //savedTodos가 있으면
    parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    todos.forEach(displayTodo);
}





//수정 기능도 넣어보자