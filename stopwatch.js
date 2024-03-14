

// Timer variable
let timer;

// Flag to track if the stopwatch is running
let isRunning = false;

// Variables to track time
let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;

// Get all elements with the class 'diallines' and the container element
var dialLines = document.getElementsByClassName("diallines");
var clockEl = document.getElementsByClassName("container")[0];

// Loop to create the dial lines and position them
for (var i = 1; i < 60; i++) {
  // Add a dial line element inside the clock container
  clockEl.innerHTML += "<div class='diallines'></div>";
  // Position each dial line by rotating it
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

// Function to start or stop the stopwatch
function startStopwatch() {
    if (!isRunning) {
        // If the stopwatch is not running, start it
        isRunning = true;
        // Update the stopwatch every 100 milliseconds
        timer = setInterval(updateStopwatch, 100);
        // Change button text and style
        document.getElementById('start_button').innerText = 'Stop';
        document.getElementById('start_button').classList.remove('button-stopped');
        document.getElementById('start_button').classList.add('button-running'); 
        // Add animation class to the timer text
        document.getElementById("timerText").classList.add("timer-animation");
    } else {
        // If the stopwatch is running, stop it
        isRunning = false;
        clearInterval(timer);
        // Change button text and style
        document.getElementById('start_button').innerText = 'Start';
        document.getElementById('start_button').classList.remove('button-running');
        document.getElementById('start_button').classList.add('button-stopped');
        // Remove animation class from the timer text
        document.getElementById("timerText").classList.remove("timer-animation");
    }
}

// Function to update the stopwatch
function updateStopwatch() {
    // Increment milliseconds
    milliseconds++;
    if (milliseconds === 10) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    // Display the updated time
    displayTime();
}

// Function to display the time
function displayTime() {
    // Format the time string with leading zeros
    let timeString = pad(hours) + ' : ' + pad(minutes) + ' : ' + pad(seconds) + '.' + milliseconds;
    // Update the timer text with the formatted time string
    document.getElementById('timerText').innerText = timeString;
}

// Function to pad single-digit numbers with a leading zero
function pad(num) {
    return num < 10 ? '0' + num : num;
}

// Function to reset the stopwatch
function resetStopwatch() {
    // Clear the interval timer
    clearInterval(timer);
    // Reset time variables
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    // Reset the display
    displayTime();
    // Reset button text and style
    document.getElementById('start_button').innerText = 'Start';
    document.getElementById('start_button').classList.remove('button-running');
    document.getElementById('start_button').classList.add('button-stopped');
    // Remove animation class from the timer text
    document.getElementById("timerText").classList.remove("timer-animation");
}

// Event listeners for buttons
document.getElementById('start_button').addEventListener('click', startStopwatch);
document.getElementById('reset_button').addEventListener('click', resetStopwatch);

