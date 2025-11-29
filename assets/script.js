const inputArea = document.getElementById('input');
const processBtn = document.getElementById('processBtn');
const randomizeBtn = document.getElementById('randomizeBtn');
const quoteBtn = document.getElementById('quoteBtn');
const resultArea = document.getElementById('result');
const titleElement = document.getElementById('title');
const noteFontElement = document.getElementById('note-font');
const noteRepoElement = document.getElementById('note-repo');
const langButtons = document.querySelectorAll('.lang-btn');

let currentLang = localStorage.getItem('lang') || 'en-US';

const randomize = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz .';
  let randomText = '';
  const length = Math.floor(Math.random() * 200) + 100; // Random length between 100 and 300

  for (let i = 0; i < length; i++) {
    randomText += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomText;
}

const generateQuote = () => {
  const possibleQuotes = (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang].quotes) ? translations[currentLang].quotes : (typeof translations !== 'undefined' ? translations['en-US'].quotes : []);
  if (!possibleQuotes || possibleQuotes.length === 0) return '';
  const randomIndex = Math.floor(Math.random() * possibleQuotes.length);
  return possibleQuotes[randomIndex];
};

const generatePoneglyph = () => {
  const text = inputArea.value || '';
  resultArea.textContent = text;
};

const updateUIText = (lang) => {
  const t = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : (typeof translations !== 'undefined' ? translations['en-US'] : null);
  if (!t) return; // translations not loaded
  if (titleElement) titleElement.textContent = t.title;
  if (inputArea) inputArea.placeholder = t.inputPlaceholder;
  if (noteFontElement) noteFontElement.innerHTML = t.noteFont;
  if (noteRepoElement) noteRepoElement.innerHTML = t.noteRepo;
  if (randomizeBtn) randomizeBtn.textContent = t.randomizeBtn;
  if (quoteBtn) quoteBtn.textContent = t.quoteBtn;
  if (processBtn) processBtn.textContent = t.processBtn;
  // update aria-pressed on buttons
  langButtons.forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false'));
  localStorage.setItem('lang', lang);

};

// Event listeners to buttons
// language button listeners
langButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const lang = btn.dataset.lang;
    if (!lang || lang == currentLang) return;
    currentLang = lang;
    updateUIText(lang);
    inputArea.value = generateQuote();
    generatePoneglyph();
  });
});

// events for quote/randomize/process
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