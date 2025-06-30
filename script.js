function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  const buttons = document.querySelectorAll('.tab-button');

  sections.forEach(section => {
    section.classList.remove('active');
  });

  buttons.forEach(button => {
    button.classList.remove('active');
  });

  document.getElementById(sectionId).classList.add('active');
  const clickedButton = Array.from(buttons).find(btn => btn.textContent.toLowerCase().includes(sectionId));
  if (clickedButton) clickedButton.classList.add('active');
}

function showJoke() {
  const jokes = [
    "Why did the football bring string? To tie the score!",
    "Why did Aradhyo take a pencil to the field? To draw a good defense!",
    "Why did the game get a detention? Because it kept breaking the rules!",
    "Aradhyo says: ‘My jokes are 99% funny... the rest are unexpected bugs!’"
  ];

  const jokeBox = document.getElementById("jokeBox");
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  jokeBox.style.opacity = 0;
  setTimeout(() => {
    jokeBox.innerText = randomJoke;
    jokeBox.style.opacity = 1;
  }, 300);
}
