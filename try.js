// function toggleSidebar() {
//   document.getElementById("sidebar").classList.toggle("collapsed");
// }

// function toggleDarkMode() {
//   document.body.classList.toggle("dark-mode");
//   localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
// }

// window.onload = () => {
//   if (localStorage.getItem("theme") === "dark") {
//     document.body.classList.add("dark-mode");
//   }
//   loadPage('dashboard'); // default page
// };

// function loadPage(page) {
//   const main = document.getElementById("main-content");

//   if (page === 'dashboard') {
//     main.innerHTML = `
//       <div class="header"><h1>📊 Dashboard</h1></div>
//       <section class="feature-cards">
//         <div class="card">📅 Study Planner</div>
//         <div class="card">🤖 AI Q&A</div>
//         <div class="card">🔔 Reminders</div>
//         <div class="card">📝 Notes</div>
//         <div class="card">🧪 Mock Tests</div>
//         <div class="card">📈 Progress</div>
//         <div class="card">🚀 Motivation</div>
//         <div class="card">💡 Suggestions</div>
//       </section>
//     `;
//   } else if (page === 'planner') {
//     main.innerHTML = `<div class="header"><h1>📅 Study Planner</h1></div><p>Coming soon: Drag-and-drop planner, schedule builder...</p>`;
//   } else if (page === 'qna') {
//     main.innerHTML = `
//       <div class="header"><h1>🤖 AI Q&A</h1></div>
//       <div id="chat-log" style="max-height:300px; overflow-y:auto;"></div>
//       <div class="chat-input">
//         <input type="text" id="userInput" placeholder="Ask something...">
//         <button onclick="sendMessage()">Send</button>
//       </div>
//     `;
//   } else if (page === 'reminders') {
//     main.innerHTML = `
//       <div class="header"><h1>🔔 Reminders</h1></div>
//       <ul id="reminderList">
//         <li>🕒 Math Revision at 5:00 PM</li>
//         <li>🕒 Submit English Assignment</li>
//       </ul>
//       <input type="text" id="reminderInput" placeholder="Add reminder..." />
//       <button onclick="addReminder()">Add</button>
//     `;
//   } else if (page === 'notes') {
//     main.innerHTML = `
//       <div class="header"><h1>📝 Notes</h1></div>
//       <textarea rows="10" style="width:100%;" placeholder="Write your notes here..."></textarea>
//       <button>💾 Save Note</button>
//     `;
//   } else if (page === 'mock') {
//     main.innerHTML = `<div class="header"><h1>🧪 Mock Tests</h1></div><p>Test 1: Science | Test 2: Math | Coming soon...</p>`;
//   } else if (page === 'progress') {
//     main.innerHTML = `<div class="header"><h1>📈 Progress</h1></div><p>Graphs and stats will be shown here...</p>`;
//   } else if (page === 'motivation') {
//     main.innerHTML = `<div class="header"><h1>🚀 Motivation</h1></div><p>✨ "Push yourself, because no one else is going to do it for you."</p>`;
//   } else if (page === 'suggestions') {
//     main.innerHTML = `<div class="header"><h1>💡 Suggestions</h1></div><p>Study smarter: Focus on Math today to balance your routine.</p>`;
//   }
// }

// // AI Q&A
// function sendMessage() {
//   const input = document.getElementById("userInput");
//   const chatLog = document.getElementById("chat-log");
//   const userMsg = input.value.trim();
//   if (!userMsg) return;

//   const userBubble = document.createElement("div");
//   userBubble.textContent = `👤 ${userMsg}`;
//   chatLog.appendChild(userBubble);

//   const aiBubble = document.createElement("div");
//   aiBubble.textContent = "🤖 Thinking...";
//   chatLog.appendChild(aiBubble);
//   input.value = "";

//   setTimeout(() => {
//     aiBubble.textContent = `🤖 Here's an answer about "${userMsg}".`;
//     chatLog.scrollTop = chatLog.scrollHeight;
//   }, 1000);
// }

// // Reminders
// function addReminder() {
//   const input = document.getElementById("reminderInput");
//   const list = document.getElementById("reminderList");
//   const value = input.value.trim();
//   if (value === "") return;

//   const li = document.createElement("li");
//   li.textContent = `🕒 ${value}`;
//   list.appendChild(li);
//   input.value = "";
// }





function loadPage(page) {
  const main = document.getElementById("main-content");

  if (page === "planner") {
    // Load external HTML file into main content
    fetch("planner.html")
      .then(response => response.text())
      .then(html => {
        main.innerHTML = html;

        // Dynamically add planner.js only after HTML is loaded
        const existingScript = document.getElementById("planner-script");
        if (existingScript) existingScript.remove(); // Remove if already added

        const script = document.createElement("script");
        script.src = "planner.js";
        script.id = "planner-script";
        document.body.appendChild(script);
      });
  }

  else if (page === "dashboard") {
    main.innerHTML = `<div class="header"><h1>📊 Dashboard</h1></div><p>Welcome to your Brainstorm Dashboard!</p>`;
  }

  else if (page === "qna") {
    fetch("ai.html")
      .then(response => response.text())
      .then(html => {
        main.innerHTML = html;

        const existingScript = document.getElementById("qna-script");
        if (existingScript) existingScript.remove();

        const script = document.createElement("script");
        script.src = "ai.js";
        script.id = "qna-script";
        document.body.appendChild(script);
      });}

  else if (page === "notes") {
    main.innerHTML = `<div class="header"><h1>📝 Notes</h1></div><p>Create and manage your notes here.</p>`;
  }

else if (page === "reminders") {
    fetch("reminder.html")
      .then(response => response.text())
      .then(html => {
        main.innerHTML = html;

        const existingScript = document.getElementById("qna-script");
        if (existingScript) existingScript.remove();

        const script = document.createElement("script");
        script.src = "reminder.js";
        script.id = "qna-script";
        document.body.appendChild(script);
      });}

  else if (page === "mock") {
    main.innerHTML = `<div class="header"><h1>🧪 Mock Tests</h1></div><p>Test your knowledge with mock exams.</p>`;
  }

  else if (page === "progress") {
    main.innerHTML = `<div class="header"><h1>📈 Progress</h1></div><p>Track your learning journey.</p>`;
  }

  else if (page === "motivation") {
    main.innerHTML = `<div class="header"><h1>💡 Motivation</h1></div><p>Stay inspired every day!</p>`;
  }

  else if (page === "suggestions") {
    main.innerHTML = `<div class="header"><h1>💭 Suggestions</h1></div><p>Send your feedback or ideas here.</p>`;
  }
}
