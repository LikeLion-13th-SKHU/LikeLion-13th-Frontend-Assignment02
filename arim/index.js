const todos = []; //배열만듦 앞으로 todo여기에 저장.

//input에 입력한 값을 todos배열에 추가하는 역할.
function addTodo() {
  const input = document.getElementById('todoInput');
  const value = input.value.trim(); //trim 공백제거메소드
  if (value) {
    todos.push(value);
    input.value = '';
    renderTodos();
  }
}

function renderTodos() {
  const list = document.getElementById('todoList');
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    //forEach를 만들어서 클릭만하면 삭제 가능하게 해줌.
    const li = document.createElement('li');
    li.textContent = todo;
    li.onclick = () => removeTodo(index); //li를 클릭하면 moveTodo함수 실행
    list.appendChild(li); //li를 list에 추가
  });
}

function removeTodo(index) {
  todos.splice(index, 1); //splice는 배열에서 요소를 제거하는 메소드
  renderTodos(); //삭제하고 다시 렌더링
}

//js 1번 조건
function enterKey(event) {
  if (event.keyCode === 13) {
    // Enter 키 = 13
    addTodo();
  }
}
