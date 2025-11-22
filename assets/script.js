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
  const onePieceQuotes = [
    "If you don't take risks, you can't create a future. No matter how difficult or impossible it seems, never give up on what you truly want to achieve. The King of the Pirates title is worth chasing, and I will claim it. (Monkey D. Luffy)",
    "I'm going to be the world's greatest swordsman! If I can't even protect my captain's dream, then any ambition I have is useless. It is my destiny and my duty. Nothing will make me deviate from this path, even if it means facing death in battle. (Roronoa Zoro)",
    "Miracles only happen to those who never give up. I will never quit trying to cure every illness. Have faith in yourself and keep fighting for your goals, no matter the odds you face. (Tony Tony Chopper)",
    "Pirates are evil? The Marines are righteous? These notions have been rewritten countless times! The future must be about the freedom to choose your own path without judgment. (Donquixote Doflamingo)",
    "Life is like a pencil that will surely run out, but it will leave the beautiful writing of life. My dream is to draw the world map. Don't let the fear of mortality stop you from living fully. (Nami)",
    "True happiness can only be achieved when you free yourself from the chains of the past. I want the whole world to know about the forgotten history. Knowledge is the greatest treasure. We must seek the truth. (Nico Robin)",
    "To you, it might just be a foolish dream, but for me, it is the only way forward. My goal of becoming a brave warrior of the sea is what drives me. I will be the hero I always wanted to be. (Usopp)",
    "No matter how strong the enemy is, what really matters is the determination to overcome them. I've tasted defeat, but that only made me stronger. Embrace your power and move forward with conviction. (Monkey D. Luffy)",
    "The most painful wound is when you allow your friends to fall. The fear of defeat should never outweigh the desire to protect those you love. Your safety is my priority. Unity is the greatest strength. (Tony Tony Chopper)",
    "It's okay to cry. Cry loudly and let your pain out. But then, get up and fight for yourself. The fire of determination must never go out. True strength lies in overcoming suffering. (Reiju Vinsmoke)",
    "I'm not the hero who's going to save everyone. I'm a pirate! I just want meat! However, if there's something I can do, I won't hesitate to do it. Instinct guides my actions. (Monkey D. Luffy)",
    "Death is not an excuse not to try. Dying is just a part of the journey, but giving up before trying is the real failure. Face your fears, fight until your last breath. Leave behind a legacy of bravery. (Gol D. Roger)",
    "You can die at any moment, but you can only live once. I don't want to live a life of regret. I cook for my friends and I fight for them. The passion for life should be your driving force. (Sanji)",
    "The power of a dream is limitless. Don't underestimate the capacity of an individual to change the world. Determination is the catalyst for change. Defend your dream with all your might. (Shanks)",
    "If he can't even protect his own captain, how can he protect anything else? A crew is like a family. Loyalty is the foundation of everything. We are one body, one heart, and our bond is unbreakable. (Roronoa Zoro)",
    "I will die for my friends. There is no price I wouldn't pay to see them safe. I am a skeleton, but my heart still beats for you all. The memory of friendship is eternal. Yohohoho! (Brook)",
    "No matter how cruel you are, no one wants to be unhappy. True friendship is a beacon in times of darkness. The greatest treasure is the people who love you. The bond we share is real. (Bartholomew Kuma)",
    "It is better to risk your life than to be a slave to your past. We are nakama. We protect each other. Together, we are invincible. Don't carry your burdens alone; share them with us. (Jinbe)",
    "I won't give up. I'm the King of the Pirates, and I'll save you, no matter what happens. A promise to a friend is stronger than any chain. Get ready to be rescued, because I never break my word. (Monkey D. Luffy)",
    "I don't want to be a hero. Heroes have to share their meat. I want to eat all the meat! But, if a friend is in danger, I'll be the first to fight. The hunger may be strong, but friendship is stronger. (Monkey D. Luffy)",
    "Say goodbye to my treasure, I left it in that place! My treasure is all of your friendship. The greatest treasure in the world is human connection. Bonds last forever. The adventure continues! (Gol D. Roger)",
    "Blind justice is not justice. What is right and wrong is determined by who is in power. I will not bow to a corrupt system. The freedom to think for yourself is the most important right. (Smoker)",
    "The world is not perfect. I want it to be. I won't stop fighting until everyone is free. Freedom is a gift, not a right. We must fight for those who cannot fight for themselves. (Trafalgar Law)",
    "The word 'justice' changes its shape depending on where you stand. I seek the freedom to sail. I will be the architect of my own life. Don't accept someone else's version of the truth. (Fujitora/Issho)",
    "The only thing that truly matters is the freedom to be yourself. I am a cyborg, and I am SUPER Fabulous! Individuality is what makes us strong. Embrace your uniqueness. (Franky)",
    "People's dreams never end! Humanity will never cease to pursue freedom. The desire for a better life is the driving force of history. Get up and keep fighting for a brighter tomorrow. (Marshall D. Teach/Blackbeard)",
    "What's wrong with living for an ideal? I will not apologize for wanting to change the world. Justice must be for everyone. I will rise against tyranny. The revolutionary spirit is indomitable. (Monkey D. Dragon)",
    "I have no compassion for anyone. But... I cannot ignore a child's tears. True strength is the courage to act in defense of the innocent. Even the coldest heart can be moved by humanity. (Dracule Mihawk)",
    "No matter how strong you are, never fight against justice. Justice will prevail, even if it takes time. My duty is to maintain the peace. The true sense of justice must come from the heart. (Sengoku)",
    "If you can't laugh, it's not worth living. I am a court jester, but my laughter is a declaration of freedom. Joy is a form of resistance. Don't let the world steal your happiness. Laugh out loud! (Jaguar D. Saul)"
];
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