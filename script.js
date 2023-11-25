// Declaring clock variables h,m,s
let hours = 0
let minutes = 0
let seconds = 0

// creating a function to return random colors
function getRandomColor() {
    // Generate a random hex color
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// creating the func that updates the clock
function updateClock() {
    // getting the div element for the clock from the html and storing it in a variable
    const clockElement = document.getElementById("clock");
    // increasing seconds by one
    seconds++
    // creating if statments to check if either on of the h,m,s get to 60 to reset it and add to the h,m +1

    if (seconds === 60) {
        seconds = 0
        minutes++

        if (minutes === 60) {
            minutes = 0
            hours++

            if (hours == 24) {
                hours = 0

            }
        }
    }

    // formating the clock to have two digits and adding zero at the start if h,m,s are one digit number
    const formattedHours = hours.toString().padStart(2, "0")
    const formattedMinutes = minutes.toString().padStart(2, "0")
    const formattedSeconds = seconds.toString().padStart(2, "0")

    // generate randome color for each digit
    const colorHours = getRandomColor()
    const colorMinutes = getRandomColor()
    const colorSeconds = getRandomColor()

    // showing the time and color on html
    clockElement.innerHTML = `<span style="color: ${colorHours}">${formattedHours}</span>:<span style="color: ${colorMinutes}">${formattedMinutes}</span>:<span style="color: ${colorSeconds}">${formattedSeconds}</span>`;

}

// running the updateclock() func every sec using the setinterval func
setInterval(updateClock, 1000)