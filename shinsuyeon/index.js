document.getElementById('add-button').addEventListener('click', addTodo);
document.getElementById('todo-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

function addTodo() { /*1. 버튼 외에 Enter로도 할 일 추가되도록 만들기 */
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    if (todoText === '') {
        return; // 입력이 비어있으면 추가하지 않음
    }

    const li = document.createElement('li');
    const checkbox = document.createElement('input'); /*2. 체크박스로 할 일 완료 표시 */
    checkbox.type = 'checkbox'; 
    checkbox.className = 'todo-checkbox';

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(todoText));
    document.getElementById('todo-list').appendChild(li);

    input.value = ''; // 입력 필드 초기화
}
