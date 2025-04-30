const todos =[];
const input = document.getElementById("todoInput");
// input.addEventListener('keydown', function(e) { ->잘못된 코드
//     if ( e.key == 'Enter') { 
//         const value = input.value.trim();
//         if(value) {
//             todos.push(value);
//             input.value = "";
//             renderTodos();
//         }
//     }
//  });
input.addEventListener('keydown', ({ key, isComposing }) => {
    if (isComposing) {
      return
    }
    if (key !== "Enter") {
      return
    }
    addTodo()
  })

function addTodo() {
    const value = input.value.trim();
    if(value) {
        todos.push(value);
        input.value = "";
        renderTodos();
    }
}

function renderTodos() {
    const list =document.getElementById("todoList");
    list.innerHTML="";
    todos.forEach((todo, index) => {
        const li =document.createElement("li");
        li.textContent=todo;
        li.onclick=() => removeTodo(index);
        list.appendChild(li);
    });
    
}



function removeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}
