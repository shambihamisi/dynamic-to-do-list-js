document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from local storage on page load
    loadTasks();

    // Function to load tasks from local storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Load without re-saving
    }

    // Function to save tasks to local storage
    function saveTasks() {
        const allTasks = Array.from(taskList.querySelectorAll('li')).map(li => {
            return li.firstChild.textContent;
        });
        localStorage.setItem('tasks', JSON.stringify(allTasks));
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        const trimmedText = taskText.trim();
        if (trimmedText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create task list item
        const taskItem = document.createElement('li');
        taskItem.textContent = trimmedText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        // Remove task from DOM and update local storage
        removeBtn.onclick = function () {
            taskList.removeChild(taskItem);
            saveTasks(); // Update storage after removal
        };

        // Assemble and display task
        taskItem.appendChild(removeBtn);
        taskList.appendChild(taskItem);

        // Save to local storage if needed
        if (save) {
            saveTasks();
        }

        // Clear input field
        taskInput.value = '';
    }

    // Event listeners for adding tasks
    addButton.addEventListener('click', function () {
        addTask(taskInput.value);
    });

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });
});
