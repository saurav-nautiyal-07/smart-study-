// planner.js

document.addEventListener("DOMContentLoaded", () => {
  const classList = document.querySelector(".classes-section");
  const homeworkList = document.querySelector(".homework-list");

  // Handle Add Class (future upgrade - popup input form)
  const addClassBtn = document.querySelector(".section-header .btn");
  if (addClassBtn) {
    addClassBtn.addEventListener("click", () => {
      alert("Add Class feature coming soon!");
    });
  }

  // Handle Homework "See All" button (future upgrade)
  const seeAllBtn = document.querySelector(".homework-section .btn");
  if (seeAllBtn) {
    seeAllBtn.addEventListener("click", () => {
      alert("Redirect to full homework page coming soon!");
    });
  }

  // (Optional) Add delete buttons dynamically if needed
  const tasks = document.querySelectorAll(".homework-list li");
  tasks.forEach(task => {
    task.style.cursor = "pointer";
    task.addEventListener("click", () => {
      if (confirm("Delete this homework task?")) {
        task.remove();
      }
    });
  });
});
