// Set Interval:

// Q29: You are tasked with creating a countdown timer using JavaScript and the setInterval function. The countdown timer should start at 1 minute (60 seconds) and update every second until it reaches 00:00. When the countdown reaches zero, an alert should pop up to notify that the countdown is completed.

let timeElement = document.getElementById('root');
let countdownSeconds = 130;

function countdownDisplay() {
    const minutes = Math.floor(countdownSeconds / 60);
    const seconds = countdownSeconds % 60;
    const formattedTime = `${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`;
    timeElement.textContent = formattedTime;
}

function countdown(){
    if(countdownSeconds>0){
        countdownSeconds--;
        countdownDisplay();
    }
    else{
        clearInterval(timeInterval);
        alert("Countdown completed");
    }
}
countdownDisplay();
const timerInterval = setInterval(countdown,1000)