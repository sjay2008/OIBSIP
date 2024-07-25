function addTask() {
      const taskInput = document.getElementById('new-task');
      const taskText = taskInput.value.trim();
      if (taskText === '') return;

      const taskList = document.getElementById('task-list');
      const li = document.createElement('li');
      li.textContent = taskText;

      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.classList.add('complete');
      completeButton.onclick = function() {
        markComplete(li);
      };

      li.appendChild(completeButton);
      taskList.appendChild(li);

      taskInput.value = '';
    }

    function markComplete(taskItem) {
      taskItem.classList.add('completed');
      taskItem.querySelector('button').remove();

      const completedList = document.getElementById('completed-list');
      completedList.appendChild(taskItem);
    }
