const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type == "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

/* cards */
// Aula 17 - Navegação por tabs

//------------------------------------------------------------------------------

function typewriterEffect(element, delay = 2) {
  let split_element = element.innerHTML.split("");
  element.innerHTML = "";
  setTimeout(() => {
    split_element.forEach((value, index) => {
      setTimeout(() => {
        element.innerHTML += value;
      }, 65 * index);
    });
  }, delay);
}

typewriterEffect(document.querySelector("h1"));
typewriterEffect(document.querySelector("h1"), 900);

// nessa linha chamamos o id que foi definido na tag <strong> no doc html
const textDisplay = document.getElementById("efeito");
// nessa linha são definidas as tres frases que serão animadas
const phrases = [
  "Desenvolvedor WEB",
  "Desenvolvedor Front-End",
  "Desenvolvedor Front-End & Freelancer",
];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;
