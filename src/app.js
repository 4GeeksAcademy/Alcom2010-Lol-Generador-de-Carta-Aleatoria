import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const suits = [
  { symbol: '♠', color: 'black' },
  { symbol: '♥', color: 'red' },
  { symbol: '♦', color: 'red' },
  { symbol: '♣', color: 'black' }
];

const rankTop = document.getElementById("rankTop");
const symbolTop = document.getElementById("symbolTop");
const rankBottom = document.getElementById("rankBottom");
const symbolBottom = document.getElementById("symbolBottom");
const suitBig = document.getElementById("suitBig");
const playingCard = document.getElementById("playingCard");
const newCardBtn = document.getElementById("newCardBtn");

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function drawCard() {
  const rank = random(ranks);
  const suit = random(suits);

  rankTop.textContent = rank;
  symbolTop.textContent = suit.symbol;

  rankBottom.textContent = rank;
  symbolBottom.textContent = suit.symbol;

  suitBig.textContent = suit.symbol;

  // Cambiar color según palo
  const color = suit.color === "red" ? "text-danger" : "text-dark";

  rankTop.className = `fw-bold fs-3 ${color}`;
  symbolTop.className = `fs-3 ${color}`;
  rankBottom.className = `fw-bold fs-3 ${color}`;
  symbolBottom.className = `fs-3 ${color}`;
  suitBig.className = `display-1 ${color}`;
}

// Botón manual
newCardBtn.addEventListener("click", drawCard);

// Cambio automático cada 15 segundos
setInterval(drawCard, 15000);

// Mostrar una carta al cargar
drawCard();

};
