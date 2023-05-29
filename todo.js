var pendingList = document.getElementById('pending-list');
var completedList = document.getElementById('completed-list');
var todoInput = document.getElementById('todo-input');

function addTodo() {
    var todoText = todoInput.value.trim();
    if (todoText !== '') {
        var todoItem = createTodoItem(todoText);
        pendingList.appendChild(todoItem);
        todoInput.value = '';
    }
}

function createTodoItem(todoText) {
    var todoItem = document.createElement('li');
    todoItem.className = 'todo-item';

    var taskSpan = document.createElement('span');
    taskSpan.textContent = todoText;

    var completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function () {
        completeTask(todoItem);
    });

    todoItem.appendChild(taskSpan);
    todoItem.appendChild(completeButton);

    return todoItem;
}

function completeTask(todoItem) {
    var completedTask = todoItem.cloneNode(true);
    var time = document.createElement('time');
    time.textContent = getCurrentDateTime();
    completedTask.appendChild(time);

    completedList.appendChild(completedTask);
    todoItem.remove();
}

function getCurrentDateTime() {
    var date = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}


  
