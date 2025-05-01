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

function renderTodos() {
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = "todo-item";

        const label = document.createElement("label");
        label.className = "custom-checkbox";
        // js 2번 조건 만족 (체크박스 만들기)
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "todo-checkbox";

        const span = document.createElement("span");
        span.textContent = todo;
        span.className = "todo-text";
        // js 2번 조건 만족 (체크 시 실선생김)
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                span.classList.add("completed");
            } else {
                span.classList.remove("completed");
            }
        });

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
