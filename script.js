// Declaring clock variables h,m,s
let hours = 0
let minutes = 0
let seconds = 0

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
    const formatedHours = hours.toString().padStart(2,"0")
    const formatedMinutes = minutes.toString().padStart(2,"0")
    const formatedSeconds = seconds.toString().padStart(2,"0")

    // showing the time on html
    clockElement.textContent = `${formatedHours}:${formatedMinutes}:${formatedSeconds}`

}

// running the updateclock() func every sec using the setinterval func
setInterval(updateClock, 1000)