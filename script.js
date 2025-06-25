const greeting = document.getElementById('greeting');
const changeTextBtn = document.getElementById('change-text-btn');
const addParagraphBtn = document.getElementById('add-paragraph-btn');
const toggleModeBtn = document.getElementById('toggle-mode-btn');
const contentArea = document.getElementById('content-area');
const body = document.body;

let paragraphCount = 0;

const greetings = [
  '🌞 Rise and shine, code wizard!',
  '🚀 Keep building. You’re doing great!',
  '🌈 Hello, creative coder!',
  '🎉 JavaScript makes magic happen!',
  '🧠 DOM is powerful. So are you!',
];

const quotes = [
  '“Code is like humor. When you have to explain it, it’s bad.” – Cory House',
  '“Programs must be written for people to read.” – Harold Abelson',
  '“Fix the cause, not the symptom.” – Steve Maguire',
  '“Simplicity is the soul of efficiency.” – Austin Freeman',
  '“Talk is cheap. Show me the code.” – Linus Torvalds',
  '“Every great developer got there by solving problems they were unqualified for — until they did it.” – Patrick McKenzie'
];

if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
}

changeTextBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * greetings.length);
  greeting.style.opacity = 0;
  setTimeout(() => {
    greeting.textContent = greetings[randomIndex];
    greeting.style.opacity = 1;
  }, 200);
});

addParagraphBtn.addEventListener('click', () => {
  paragraphCount++;
  const newPara = document.createElement('div');
  newPara.classList.add('paragraph-card');
  if (paragraphCount % 2 === 0) {
    newPara.classList.add('alt');
  }

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  newPara.textContent = `📝 Quote #${paragraphCount}: ${quote}`;
  contentArea.appendChild(newPara);
  contentArea.scrollTo({ top: contentArea.scrollHeight, behavior: 'smooth' });
});

toggleModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});