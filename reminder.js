  
    let tasks = [];

    function addTask() {
      const title = document.getElementById('task-title').value;
      const desc = document.getElementById('task-desc').value;
      const deadline = new Date(document.getElementById('task-deadline').value);

      if (!title || isNaN(deadline)) {
        alert("Please fill in all fields correctly.");
        return;
      }

      const task = { title, desc, deadline, completed: false };
      tasks.push(task);
      renderTasks();
      clearInputs();
    }

    function clearInputs() {
      document.getElementById('task-title').value = "";
      document.getElementById('task-desc').value = "";
      document.getElementById('task-deadline').value = "";
    }

    function renderTasks() {
      const list = document.getElementById('task-list');
      list.innerHTML = "";

      tasks.forEach((task, index) => {
        const now = new Date();
        const remaining = task.deadline - now;
        const minutesLeft = Math.floor(remaining / 60000);

        const item = document.createElement('div');
        item.className = 'task-item' + (task.completed ? ' completed' : '');

        item.innerHTML = `
          <h3>${task.title}</h3>
          <p>${task.desc}</p>
          <div class="task-timer">⏰ Due in: ${minutesLeft <= 0 ? 'Time over' : minutesLeft + ' mins'}</div>
          <div class="task-actions">
            <button onclick="markDone(${index})">✔️ Done</button>
            <button onclick="removeTask(${index})">🗑️ Delete</button>
          </div>
        `;
        list.appendChild(item);
      });
    }

    function markDone(index) {
      tasks[index].completed = true;
      renderTasks();
    }

    function removeTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }

    setInterval(renderTasks, 60000); // Update task timer every minute
