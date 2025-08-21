// ==== Daily Study Time (Circular Progress) ====

const dailyMinutes = 142; // e.g., 2 hrs 22 min = 142 mins
const dailyGoal = 300; // Target: 5 hours = 300 mins

const circle = document.querySelector('.circle');
const text = document.querySelector('.circle-text');

const radius = 70;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = circumference;

const offset = circumference - (dailyMinutes / dailyGoal) * circumference;
circle.style.strokeDashoffset = offset;

const hours = Math.floor(dailyMinutes / 60);
const minutes = dailyMinutes % 60;
text.textContent = `${hours}h ${minutes}m`;


// ==== Weekly Bar Chart ====

const weeklyData = {
  Sun: 180,
  Mon: 240,
  Tue: 120,
  Wed: 260,
  Thu: 300,
  Fri: 90,
  Sat: 200
};

const maxMinutes = 300; // Assuming max 5 hours/day

Object.entries(weeklyData).forEach(([day, minutes]) => {
  const barFill = document.querySelector(`.bar-fill[data-day="${day}"]`);
  const percent = (minutes / maxMinutes) * 100;
  barFill.style.width = `${percent}%`;
});
