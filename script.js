let timerDisplay = document.querySelector(".timerDisplay");
let stopBtn = document.querySelector("#stop");
let stratBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let lapBtn = document.querySelector("#lap");
let lapList = document.querySelector("#lapList");

let msec = 0, secs = 0, mins = 0;
let timerId = null;

stratBtn.addEventListener('click', () => {
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    msec = secs = mins = 0;
    timerDisplay.innerHTML = `00 : 00 : 00`;
    lapList.innerHTML = ""; // Clear lap list
});

// 🟢 LAP button functionality
lapBtn.addEventListener('click', () => {
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    let lapTime = `${minsString} : ${secsString} : ${msecString}`;
    let li = document.createElement("li");
    li.innerText = `Lap - ${lapTime}`;
    lapList.appendChild(li);
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
