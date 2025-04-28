const todos = [];
const input = document.getElementById("todoInput");

function addTodo(){
    const value = input.value.trim(); //trim() 공백제거 메소드 
    if(value){
        todos.push(value);
        input.value = "";
        renderTodos();
    }
}

function renderTodos(){
    const list = document.getElementById("todoList");
    list.innerHTML="";
    todos.forEach((todo, index) => { 
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const span = document.createElement("span");
        span.textContent = todo;

        li.appendChild(checkbox);
        li.appendChild(span);

        // li.onclick = () => removeTodo(index);
        // js 2번 조건
        li.addEventListener('click', function(){
            checkbox.checked = !checkbox.checked;

            if(checkbox.checked){
                span.style.textDecoration = "line-through";
                span.style.color = "gray";
            }
            else{
                span.style.textDecoration = "none";
                span.style.color = "black";
            }
        })

        list.appendChild(li);
    });
}

function removeTodo(index){
    todos.splice(index, 1); //해당 인덱스를 배열에서 지워줌
    renderTodos();
}

input.addEventListener("keyup", function(event){ // js 1번 조건
    if(event.key === "Enter"){
        addTodo();
    }
});