const quizData = [
  { q: "What is the capital of France?", a: "paris" },
  { q: "Who wrote 'Romeo and Juliet'?", a: "shakespeare" },
  { q: "What is H2O commonly known as?", a: "water" }
];

let currentIndex = 0;

function switchTab(tab) {
  document.getElementById('ask-tab').style.display = tab === 'ask' ? 'block' : 'none';
  document.getElementById('quiz-tab').style.display = tab === 'quiz' ? 'block' : 'none';
  if (tab === 'quiz') loadQuiz();
}

function getAIAnswer() {
  const question = document.getElementById("student-question").value.trim();
  const answerBox = document.getElementById("ai-answer");

  if (!question) {
    answerBox.innerText = "⚠️ Please enter a question.";
    return;
  }

  answerBox.innerText = "🤖 Thinking...";
  setTimeout(() => {
    answerBox.innerText = `Here's a smart answer to: "${question}"\n\nStay curious and keep learning!`;
  }, 1000);
}

function loadQuiz() {
  const quizQ = document.getElementById("quiz-question");
  quizQ.innerText = quizData[currentIndex].q;
  document.getElementById("user-answer").value = "";
  document.getElementById("quiz-feedback").innerText = "";
}

function submitAnswer() {
  const userAnswer = document.getElementById("user-answer").value.trim().toLowerCase();
  const correctAnswer = quizData[currentIndex].a;
  const feedback = document.getElementById("quiz-feedback");

  if (userAnswer === correctAnswer) {
    feedback.innerText = "✅ Correct Answer!";
  } else {
    feedback.innerText = `❌ Wrong! Correct answer is: ${correctAnswer}`;
  }

  currentIndex = (currentIndex + 1) % quizData.length;
  setTimeout(loadQuiz, 2000);
}
