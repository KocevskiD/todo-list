const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const completed = document.querySelector('.completedOption')
const uncompleted = document.querySelector('.uncompletedOption')
const all = document.querySelector('.allOption')

const addTodo = (event) => {

    event.preventDefault();

    if (todoInput.value === "") {
        return;
    }
    
    let theTodo = document.createElement('div');
    theTodo.classList.add('todo')
    theTodo.innerHTML = `
        <li class="todo-item">${todoInput.value}</li>
        <button class="complete-btn"><i class="fas fa-check"></i></button>
        <button class="trash-btn"><i class="fas fa-trash"></i></button>
    `

    todoInput.value =''
    todoList.appendChild(theTodo);
}

const deleteTodo = (event) => {
    const element = event.target;

    if (element.classList[0] === "trash-btn") {
        const todo = element.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", (e) => {
            todo.remove();
        });
    };

    if (element.classList[0] === "complete-btn") {
        const todo = element.parentElement;
        todo.classList.toggle("completed");
    }
}

const filterTodo = (event) => {
    const todos = todoList.childNodes;

    todos.forEach((todo) => {
        switch(event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    })
}

// events
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
completed.addEventListener("click", filterTodo);
uncompleted.addEventListener("click", filterTodo);
all.addEventListener("click", filterTodo);
