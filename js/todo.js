const todoForm = document.querySelector("form.todo-form");
const todoList = document.querySelector("ul.todo-list");
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

// //수정기능 추가
// function editTodo(event){
//     const li = event.target.parentElement;
//     console.dir(li);
//     const beforeEdit = li.childNodes[1].innerText;
//     console.log(beforeEdit);
//     li.childNodes[1].classList.add("hidden");
//     li.childNodes[2].classList.add("hidden");

//     const newInput = document.createElement("input")
//     newInput.value = beforeEdit;

//     li.insertBefore(newInput, li.childNodes[1]);
// }

function checkTodo(event) {
    const li = event.target.parentElement;
    li.classList.toggle('checked');

    function checkUpdate (item){
        if(item.status === ""){
            if(item.id === parseInt(li.id)){
                item.status = "checked";
            }
        } else {
            if(item.id === parseInt(li.id)){
                item.status = "";
            }
        }
    }
    todos.forEach(checkUpdate);
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function displayTodo(todoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const checkbox = document.createElement("input");
    li.className = "todo--item"
    span.innerText = todoObj.text;
    li.id = todoObj.id;
    checkbox.type = "checkbox";
    
    //문자형태
    // const button = document.createElement("button");
    // button.innerText = "X";

    //font awesome형태 
    const button = document.createElement("i");
    button.className = "fas fa-times";
    
    li.appendChild(checkbox);
    li.appendChild(span);  
    li.appendChild(button);
    
    todoList.appendChild(li);
    button.addEventListener("click", deleteTodo);
    checkbox.addEventListener("click", checkTodo);

    // //수정 버튼 추가
    // const editBtn = document.createElement("button");
    // editBtn.innerText = "수정";
    // li.appendChild(editBtn);
    // editBtn.addEventListener("click", editTodo);

    //할일 : 체크되어 있으면 체크 고고~~ 
    if(todoObj.status === "checked"){
        li.classList.add("checked");
        li.childNodes[0].checked = true;
    }
}

function handleTodoSubmit(event) {
    event.preventDefault(); //submit되면 브라우저가 refresh하는 default 행동 지우기 
    const newTodo = todoInput.value
    todoInput.value = "";  //submit되면 창에 있는 입력된 텍스트 지우기
    
    const newTodoObj = {id: Date.now(), text: newTodo, status: ""};
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
