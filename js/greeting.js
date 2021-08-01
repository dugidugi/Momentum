const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY  = "username"; 


function displayGreeting(name) {
    greeting.innerText = `Hello! ${name}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

function  onLoginSubmit(event) {
    event.preventDefault(); //브라우저가 submit 되면 자동으로 reload해서 그거 방지
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    displayGreeting(username);
    localStorage.setItem(USERNAME_KEY, username);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    displayGreeting(savedUsername);
}




