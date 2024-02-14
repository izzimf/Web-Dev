document.getElementById('addTaskBtn').addEventListener('click', function() {
    addTask();
});

function addTask() {
    var input = document.getElementById('taskInput');
    var taskText = input.value.trim();
    if (taskText !== '') {
        var list = document.getElementById('list-container');
        var newTask = document.createElement('li');
        newTask.textContent = taskText;
        var taskId = 'task' + (list.children.length + 1);
        newTask.setAttribute('id', taskId);
        newTask.addEventListener('click', function() {
            toggleTaskCompletion(this);
        });
        var deleteBtn = document.createElement('span');
        deleteBtn.textContent = '❌';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function(event) {
            event.stopPropagation();
            deleteTask(newTask);
        });
        newTask.appendChild(deleteBtn);
        list.appendChild(newTask);
        input.value = '';
    }
}

function toggleTaskCompletion(taskElement) {
    taskElement.classList.toggle('completed');
}

function deleteTask(taskElement) {
    taskElement.remove();
}