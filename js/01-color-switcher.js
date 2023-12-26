function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId;

function startColorSwitching() {
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');

  startButton.disabled = true;

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorSwitching() {
  const startButton = document.querySelector('[data-start]');

  startButton.disabled = false;

  clearInterval(intervalId);
}

// Attach event listeners to the buttons
document.querySelector('[data-start]').addEventListener('click', startColorSwitching);
document.querySelector('[data-stop]').addEventListener('click', stopColorSwitching);
