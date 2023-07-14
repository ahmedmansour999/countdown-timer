const dayEl = document.getElementById("days")
const hourEl = document.getElementById("hours")
const minEl = document.getElementById("mins")
const secEl = document.getElementById("secs")



const newYears = "1 Jan 2023  ";

function countdown() {
    const newYearDate = new Date(newYears) ;
    const CurrentDate = new Date() ;

    const totalSecound =  (CurrentDate - newYearDate) / 1000  ;
    const day = Math.floor(totalSecound / 3600 / 24 );
    const hour = Math.floor(totalSecound / 3600 ) %24;
    const min = Math.floor(totalSecound / 60 )  %60;
    const secound = Math.floor(totalSecound)  %60
    
    dayEl.innerHTML = formatTime(day) ;
    hourEl.innerHTML = formatTime(hour) ;
    minEl.innerHTML = formatTime(min) ;
    secEl.innerHTML = formatTime(secound) ;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

countdown();
setInterval (countdown ,1000)

