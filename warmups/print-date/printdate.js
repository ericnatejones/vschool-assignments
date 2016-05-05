var now = new Date(),
    dayNames = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
    ],
    dayIndex = now.getDay(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds(),
    ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;
    

console.log("Today is: " + dayNames[dayIndex]);
console.log("Current time is: " + hours + ":" + minutes + ":" + seconds + " " + ampm);