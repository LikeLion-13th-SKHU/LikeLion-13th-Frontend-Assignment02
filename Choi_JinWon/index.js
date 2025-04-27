const todos =[];
const input = document.getElementById("todoInput");

function addTodo() {
    const input = document.getElementById("todoInput");
    const value = input.value.trim(); //공백제거
    if (value) {
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
        // li.textContent = todo;
        li.classList.add("adding");

        const checkbox = document.createElement("input"); //js 2번 조건
        checkbox.type = "checkbox";
        checkbox.classList.add("checkBoxStyle");

        const span = document.createElement("span");
        span.textContent = todo;
      
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                span.style.textDecoration = "line-through";
            } else {
                span.style.textDecoration = "none";
            }
        });

        li.appendChild(checkbox);
        li.appendChild(span);

        // li.onclick = () => removeTodo(index);
        list.appendChild(li);

    });
}

function removeTodo(index) {
    todos.splice(index, 1); //해당 인덱스 삭제
    renderTodos();
}

input.addEventListener('keyup', function(event) { //js 1번 조건
    if(event.key === 'Enter') {
        addTodo();
    }
});

