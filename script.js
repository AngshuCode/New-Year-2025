const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {
  const currentYear = new Date().getFullYear();
  const newYear = new Date(`January 1, ${currentYear + 1} 00:00:00`).getTime();
  const now = new Date().getTime();
  const timeDifference = newYear - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  daysElement.textContent = days < 10 ? "0" + days : days;
  hoursElement.textContent = hours < 10 ? "0" + hours : hours;
  minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
  secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;

  if (timeDifference < 0) {
    clearInterval(countdown);
    document.querySelector(".message").textContent = "🎆 Happy New Year 2025! 🎆";
  }
}

const countdown = setInterval(updateCountdown, 1000);
updateCountdown();
