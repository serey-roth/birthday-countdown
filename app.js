const daysLeft = document.getElementById('days-left');
const hoursLeft = document.getElementById('hours-left');
const minsLeft = document.getElementById('minutes-left');
const secsLeft = document.getElementById('seconds-left');
const message = document.getElementById('message');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24; //milliseconds
let timerId;

function countdown() {
    const jsDate = $("#my_date_picker").datepicker('getDate');
    if (jsDate instanceof Date) {
        const birthday = jsDate.getTime();
        const today = new Date();
        const timeSpan = birthday - today;
        if (timeSpan <= 0) {
            message.style.visibility = "visible";
            message.innerHTML = "Happy Birthday!!!";
            if (Math.abs(timeSpan / day) >= 1) {
                message.innerHTML = "Hope you have a nice birthday!!!";
            }
            refresh();
        } else {
            const arrayTime = fromDateToString(timeSpan);
            daysLeft.innerHTML = arrayTime[0] + " day";
            hoursLeft.innerHTML = arrayTime[1] + " hr";
            minsLeft.innerHTML = arrayTime[2] + " min";
            secsLeft.innerHTML = arrayTime[3] + " sec";
            message.style.visibility = "hidden";
        }
    } else {
        message.innerHTML = "Please enter your birthday!!";
    }
}

function refresh() {
    daysLeft.innerHTML = "0 day";;
    hoursLeft.innerHTML = "0 hr";;
    minsLeft.innerHTML = "0 min";;
    secsLeft.innerHTML = "0 sec";
}

function fromDateToString(time) {
    const arrayTime = [];
    arrayTime.push(Math.floor(time / day));
    time = time % day;
    arrayTime.push(Math.floor(time / hour));
    time = time % hour;
    arrayTime.push(Math.floor(time / minute));
    time = time % minute;
    arrayTime.push(Math.floor(time / second));
    return arrayTime;
}

timerId = setInterval(countdown, second);