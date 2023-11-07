
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const htmlBody = document.querySelector("body");
let intervalColorId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

startBtn.addEventListener("click", () => {
  intervalColorId = setInterval(() => {
  htmlBody.style.backgroundColor = getRandomHexColor();
  }, 1000);
  stopBtn.removeAttribute("disabled");
  startBtn.setAttribute("disabled", true);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalColorId);
  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", true);
});