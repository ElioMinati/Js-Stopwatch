let clockInterval;
let currentTime = [0, 0, 0];

const timeHandler = (currentTime) => {
    if (currentTime[2] >= 60) {
        currentTime[1]++;
        currentTime[2] = 0;
    }
    if (currentTime[1] >= 60) {
        currentTime[0]++;
        currentTime[1] = 0;
    }
};

const updateTime = (currentTime) => {
    currentTime[2]++;
    timeHandler(currentTime);
    const hours = currentTime[0] < 10 ? "0" + currentTime[0] : currentTime[0];
    const minutes = currentTime[1] < 10 ? "0" + currentTime[1] : currentTime[1];
    const seconds = currentTime[2] < 10 ? "0" + currentTime[2] : currentTime[2];
    document.getElementById('count').innerHTML = `${hours}:${minutes}:${seconds}`;
};

const startStopWatch = () => {
    clockInterval = window.setInterval(updateTime, 1000, currentTime);
};

const stopStopWatch = () => {
    if (!clockInterval) {
        alert('Please start the clock first.');
        return;
    }
    clearInterval(clockInterval);
    clockInterval = 0;
};

const resetStopWatch = () => {
    currentTime = [0, 0, 0];
    if (clockInterval) {
        clearInterval(clockInterval);
        clockInterval = 0;
    }
    document.getElementById('count').innerHTML = '00:00:00';
}