class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time === null || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.some((element) => element.time === time)) {
            return console.warn ('Уже присутствует звонок на это же время');
        }
        let newClock = {time, callback, canCall: true};
        this.alarmCollection.push(newClock);
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }

    getCurrentFormattedTime() {
        const now = new Date();
        return now.toLocaleString("ru-Ru", {hour: 'numeric', minute: 'numeric'});
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }
        function asyncFunction() {
            this.alarmCollection.forEach((element) => {
                if (element.time === this.getCurrentFormattedTime()) {
                    element.canCall = false;
                    element.callback();
                }
            });
        }
        const bindedFunc = asyncFunction.bind(this);
        this.intervalId = setInterval(bindedFunc, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    

    resetAllCalls() {
        this.alarmCollection.forEach(element => element.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}