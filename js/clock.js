const clock = document.querySelector(".clock");
const clockDate = document.querySelector(".clock-date");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

    const year = String(date.getUTCFullYear()+1);
    const month = String(date.getUTCMonth()+1);
    const day = String(date.getUTCDay()+1);
    clockDate.innerText = `${year}년 ${month}월 ${day}일`

}

getClock();
setInterval(getClock, 1000);
