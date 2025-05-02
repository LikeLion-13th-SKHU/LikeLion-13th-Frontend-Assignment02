const todos = [];

function addTodo() {
    const input = document.getElementById("todoInput");
    const value = input.value.trim();
    if(value){
        todos.push(value);
        input.value = "";
        renderTodos();
    }
}
// js 2번 조건 만족 수정(체크박스용 함수)
function newCheckbox(span) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            span.classList.add("completed");
        } else {
            span.classList.remove("completed");
        }
    });

    return checkbox;
}

function renderTodos() {
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = "todo-item";

        const label = document.createElement("label");
        label.className = "custom-checkbox";

        const span = document.createElement("span");
        span.textContent = todo;
        span.className = "todo-text";

        const checkbox = newCheckbox(span);

        label.appendChild(checkbox);
        label.appendChild(span);
        li.appendChild(label);  
        list.appendChild(li);
    });
}

function removeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// js 1번 조건 만족
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("todoInput");
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });
});
