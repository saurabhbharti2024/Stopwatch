let timer; // Timer variable
let isRunning = false; // Flag to track if the stopwatch is running
let milliseconds = 0, seconds = 0, minutes = 0, hours = 0; // Variables to track time

// Function to start or stop the stopwatch
function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateStopwatch, 100); // Update every 100 milliseconds
        document.getElementById('start_button').innerText = 'Stop';
        document.getElementById('start_button').classList.remove('button-stopped');
        document.getElementById('start_button').classList.add('button-running');
        document.getElementById("timerText").classList.add("timer-animation");
    } else {
        isRunning = false;
        clearInterval(timer);
        document.getElementById('start_button').innerText = 'Start';
        document.getElementById('start_button').classList.remove('button-running');
        document.getElementById('start_button').classList.add('button-stopped');
        document.getElementById("timerText").classList.remove("timer-animation");
    }
}

// Function to update the stopwatch
function updateStopwatch() {
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
    displayTime();
}

// Function to display the time
function displayTime() {
    let timeString = pad(hours) + ' : ' + pad(minutes) + ' : ' + pad(seconds) + '.' + milliseconds;
    document.getElementById('timerText').innerText = timeString;
}

// Function to pad single-digit numbers with a leading zero
function pad(num) {
    return num < 10 ? '0' + num : num;
}

// Function to reset the stopwatch
function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime();
    document.getElementById('start_button').innerText = 'Start';
    document.getElementById('start_button').classList.remove('button-running');
    document.getElementById('start_button').classList.add('button-stopped');
    document.getElementById("timerText").classList.remove("timer-animation");
}

// Event listeners for buttons
document.getElementById('start_button').addEventListener('click', startStopwatch);
document.getElementById('reset_button').addEventListener('click', resetStopwatch);
