// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the function to add tasks
    function addTask() {
        // Get and trim user input
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new <li> element
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create the "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn'); // ✅ Using classList.add

        // Add event listener to remove the task when clicked
        removeBtn.onclick = function () {
            taskList.removeChild(taskItem);
        };

        // Append the button to the <li>, then add <li> to the task list
        taskItem.appendChild(removeBtn);
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add click event to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow task to be added with the Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
