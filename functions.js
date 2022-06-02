
export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function getSeconds(minutes) {
    return minutes * 60;
}

export function getArea(base, height) {
    return base * height / 2;
}

export function sumLessThan100(x, y) {
    const sum = add(x, y);
    if (sum < 100) {
        return true;
    }
    return false;

    // return sum < 100;
}