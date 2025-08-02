// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Define the function to add tasks
    function addTask() {
        // Get and trim user input
        const taskText = taskInput.value.trim();

        // Validate input
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create <li> element for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Attach event to remove button
        removeBtn.onclick = function () {
            taskList.removeChild(taskItem);
        };

        // Append button to the task item
        taskItem.appendChild(removeBtn);

        // Add the task to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Step 3: Add event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Step 4: Enable task adding with Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // (Optional) Call addTask() here if you wanted to pre-load any tasks on DOM load
    // addTask();
});
