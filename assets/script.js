const inputArea = document.getElementById('input');
const processBtn = document.getElementById('processBtn');
const randomizeBtn = document.getElementById('randomizeBtn');
const quoteBtn = document.getElementById('quoteBtn');
const resultArea = document.getElementById('result');

const randomize = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz .';
  let randomText = '';
  const length = Math.floor(Math.random() * 200) + 100; // Random length between 100 and 300

  for (let i = 0; i < length; i++) {
    randomText += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomText;
}

generateQuote = () => {
  const randomIndex = Math.floor(Math.random() * onePieceQuotes.length);
  return onePieceQuotes[randomIndex];
}

const generatePoneglyph = () => {
  const text = inputArea.value || '';
  resultArea.textContent = text;
};

// Event listeners to buttons
quoteBtn.addEventListener('click', () => {
  inputArea.value = generateQuote();
  generatePoneglyph();
});

randomizeBtn.addEventListener('click', () => {
  inputArea.value = randomize();
  generatePoneglyph();
});

processBtn.addEventListener('click', () => {
  generatePoneglyph();
});