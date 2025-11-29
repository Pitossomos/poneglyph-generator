const inputArea = document.getElementById('input');
const processBtn = document.getElementById('processBtn');
const randomizeBtn = document.getElementById('randomizeBtn');
const quoteBtn = document.getElementById('quoteBtn');
const resultArea = document.getElementById('result');
const titleElement = document.getElementById('title');
const noteFontElement = document.getElementById('note-font');
const noteRepoElement = document.getElementById('note-repo');
const langButtons = document.querySelectorAll('.lang-btn');

// Decide language from URL query `lang=` (e.g. ?lang=us or ?lang=br), fallback to localStorage or default
const urlParams = new URLSearchParams(window.location.search);
const langParamFromUrl = (urlParams.get('lang') || '').toString().toLowerCase();
const langMap = { us: 'en-US', br: 'pt-BR', en: 'en-US', pt: 'pt-BR' };
let currentLang = langMap[langParamFromUrl] || localStorage.getItem('lang') || 'en-US';
updateURLQueryParam(currentLang);
updateUIText(currentLang);

// Event listeners to buttons
// language button listeners
langButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const lang = btn.dataset.lang;
    if (!lang || lang === currentLang) return;
    currentLang = lang;
    updateUIText(lang);
    inputArea.value = generateQuote();
    generatePoneglyph();
    updateURLQueryParam(lang);
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

/** Function definitions */

const randomize = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz .';
  let randomText = '';
  const length = Math.floor(Math.random() * 200) + 100; // Random length between 100 and 300

  for (let i = 0; i < length; i++) {
    randomText += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomText;
}

function generateQuote () {
  const possibleQuotes = (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang].quotes) ? translations[currentLang].quotes : (typeof translations !== 'undefined' ? translations['en-US'].quotes : []);
  if (!possibleQuotes || possibleQuotes.length === 0) return '';
  const randomIndex = Math.floor(Math.random() * possibleQuotes.length);
  return possibleQuotes[randomIndex];
};

function generatePoneglyph () {
  const text = inputArea.value || '';
  resultArea.textContent = text;
};

function updateUIText (lang) {
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

function updateURLQueryParam(lang) {
  // update URL query param so the language selection is shareable
  try {
    const codeToParam = { 'en-US': 'us', 'pt-BR': 'br' };
    const param = codeToParam[lang] || lang.slice(0,2).toLowerCase();
    const u = new URL(window.location.href);
    u.searchParams.set('lang', param);
    window.history.replaceState(null, '', u.toString());
  } catch (e) {
    // ignore if URL manipulation fails (e.g., non-browser environment)
  }
}