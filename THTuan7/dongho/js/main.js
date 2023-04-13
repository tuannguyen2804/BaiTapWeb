var timer;
var minutes = 0;
var seconds = 0;
var hours = 0;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
}

function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  var formattedTime = (hours < 10 ? "0" + hours : hours) + ":" +
                      (minutes < 10 ? "0" + minutes : minutes) + ":" +
                      (seconds < 10 ? "0" + seconds : seconds);
  document.getElementById("timer").innerHTML = formattedTime;
}
