function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    if (taskText === '') return;

    var taskList = document.getElementById('taskList');

    var taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        if (checkbox.checked) {
            taskSpan.style.textDecoration = 'line-through';
            taskSpan.style.color = '#6b7280';
        } else {
            taskSpan.style.textDecoration = 'none';
            taskSpan.style.color = 'black';
        }
    };

    var taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        taskList.removeChild(taskDiv);
    };

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(removeButton);

    taskList.appendChild(taskDiv);

    taskInput.value = '';
}