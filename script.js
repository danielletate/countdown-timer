const secondsEl = document.getElementById("seconds");
const minutesEl = document.getElementById("mins");
const hoursEl = document.getElementById("hours");
const daysEl = document.getElementById("days");

const newYears = "1 Jan 2022";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const milliseconds = newYearsDate - currentDate;

  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(seconds / 3600);
  const days = Math.floor(seconds / (24 * 3600));
  //   console.log(days, hours, minutes, seconds);

  secondsEl.innerHTML = formatTime(seconds);
  minutesEl.innerHTML = formatTime(minutes);
  hoursEl.innerHTML = formatTime(hours);
  daysEl.innerHTML = days;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Initial call
countdown();

setInterval(countdown, 1000);
