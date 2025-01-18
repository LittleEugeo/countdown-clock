document.addEventListener("DOMContentLoaded", () => {
    // Selecting necessary nodes
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    const countdown = () => {
        // Target date.
        const targetDate = new Date("December 02, 2025 12:00:00").getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        // Calculation of days, hours, minutes and seconds.
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(difference / (1000 * 60 * 60) / (1000));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Updating html values.
        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;

        // checking the difference to stop the interval
        if (difference < 0) {
            clearInterval(interval);
        }
    }

    // Inserting the interval
    const interval = setInterval(() => {
        countdown();
    },1000);
});
