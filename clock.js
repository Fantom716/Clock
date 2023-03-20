hour = document.querySelector(".hour");
min = document.querySelector(".min");
sec = document.querySelector(".seconds");

timerButton = document.querySelector('.start-timer');
timerInput = document.querySelector(".timer-time");
timerOk = document.querySelector('.timer-ok');

timerInputValue = document.querySelector(".timer-time").value;

setInterval(() => {
    date = new Date();
    hourValue = date.getHours();
    minValue = date.getMinutes();
    secondsValue = date.getSeconds();
    if (hourValue < 10) {
        hour.textContent = `0${hourValue} :`;
    } else {
        hour.textContent = ` ${hourValue} :`;
    };
    if (minValue < 10) {
        min.textContent = `0${minValue} :`;
    } else {
        min.textContent = `${minValue} :`;
    };
    if (secondsValue < 10) {
        sec.textContent = `0${secondsValue}`;
    } else {
        sec.textContent = secondsValue;
    };
});

timerButton.addEventListener('click', () => {
    timerInput.classList.toggle('timer-input_disable');
    timerOk.classList.toggle('timer-ok');
});

const checkMouse = () => {
    document.addEventListener('mousemove', () => {
        document.title = "Clock";
    })
};

timerOk.addEventListener('click', () => {
    setTimeout(() => {
        document.title = "Время вышло!";
        checkMouse();
    }, timerInputValue * 1000);
});