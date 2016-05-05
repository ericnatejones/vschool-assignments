function sleepIn(weekday, vacation) {
    if (vacation) {
        return true;
    } else {
        if (!weekday) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(sleepIn(true, false));