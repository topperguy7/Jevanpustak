let display = document.getElementById("timer");
let text = document.getElementById("recipe");

let startTime = 0;
let elapsedTime = 0;
let timer = null;
let currentStep = 0;

const steps = [
  { time: 5,   text: "Heat the pan/utensil" },
  { time: 60,  text: "Add mustard & cumin seeds" },
  { time: 120, text: "Add onion and green chillies" },
  { time: 180, text: "Add turmeric" },
  { time: 220, text: "Add soaked poha" },
  { time: 280, text: "Add sugar and salt" },
  { time: 360, text: "Add lemon juice and cilantro" }
];

function start() {
  if (timer) return;

  currentStep = 0;
  text.textContent = "Recipe instruction will appear here:-";

  startTime = Date.now();
  timer = setInterval(update, 1000);
}

function update() {
  elapsedTime = Date.now() - startTime;
  const totalSeconds = Math.floor(elapsedTime / 1000);

  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");

  const seconds = (totalSeconds % 60).toString().padStart(2, "0");

  display.textContent = `${minutes}:${seconds}`;

  showRecipe(totalSeconds);
}

function showRecipe(totalSeconds) {
  if (currentStep >= steps.length) return;

  // ✅ safer than === 
  if (totalSeconds >= steps[currentStep].time) {
    text.textContent = steps[currentStep].text;
    currentStep++;
  }
}

function stop() {
  clearInterval(timer);
  timer = null;
}