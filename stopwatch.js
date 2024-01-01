// Get button and timer elements
let startButton = document.getElementById("start_button");
let stopButton = document.getElementById("stop_button");
let resetButton = document.getElementById("reset_button");
let timerText = document.getElementById("timerText");

// Add event listener to all buttons
startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

// Initialize variables
let check = false;
let check_for_start = false;
let event_value;

// Time values
let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
let ms, s, m, h;

// Remove the timer animation class initially
timerText.classList.remove("timer-animation");

// Function for starting the stopwatch
function start() {
    if (check_for_start === true) return;

    check = true;
    check_for_start = true;
    timerText.classList.add("timer-animation");

    // Update the timer values at millisecond precision
    event_value = setInterval(function () {
        milliseconds += 5;

        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        if (hours === 100) {
            reset();
        }

        // Format the time values for millisecond
        ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
        // Format the time values for second
        s = seconds < 10 ? "0" + seconds : seconds;
        // Format the time values for minute
        m = minutes < 10 ? "0" + minutes : minutes;
        // Format the time values for hour
        h = hours < 10 ? "0" + hours : hours;

        // Display the formatted time in the HTML element
        timerText.innerHTML = h + " : " + m + " : " + s + " : " + ms;

    }, 1); // Update every 1 millisecond
}

// Function for stopping the stopwatch
function stop() {
    if (check === false) return;
    clearInterval(event_value);
    timerText.classList.remove("timer-animation");
    check_for_start = false;
}

// Function for resetting the stopwatch
function reset() {
    check = false;
    check_for_start = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timerText.innerHTML = "00 : 00 : 00 : 000 ";
    timerText.classList.remove("timer-animation");
    clearInterval(event_value);
}
