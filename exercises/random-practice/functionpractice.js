function doMaths(x, y, operation) {
    if (operation === "add") {
        return (x + y);
    }
    if (operation === "subtract") {
        return (x - y);
    }
    if (operation === "multiply") {
        return (x * y);
    }
    if (operation === "divide") {
        if (y === 0) {
            console.log("Cannot divide by 0");
            return NaN;
        } else {
            return (x / y);
        }
    }
}

console.log(doMaths(100, 0, "divide"));