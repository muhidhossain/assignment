function feetToMile(feet) {
    const mile = feet / 5280;
    if (mile >= 0) {
        return mile
    }
    else {
        return "Length can't be negative.";
    }
    return mile;
}
const mileResult = feetToMile(0000);
console.log(mileResult);

function woodCalculator(chair, table, bed) {
    if (chair >= 0 && table >= 0 && bed >= 0) {
        const totalWood = chair * 1 + table * 3 + bed * 5;
        return totalWood;
    }
    else {
        return "Any of the value can't be negative";
    }
}
const woodQuantity = woodCalculator(3, 3, 3);
console.log(woodQuantity);

function brickCalculator(floor) {
    if (floor < 0) {
        return "Floor can't be negative"
    }
    else if (floor > 10 && floor <= 20) {
        const totalBrick = (10 * 15 + (floor - 10) * 12) * 1000;
        return totalBrick;
    }
    else if (floor > 20) {
        const totalBrick = (10 * 15 + 10 * 12 + (floor - 20) * 10) * 1000;
        return totalBrick;
    }
    else {
        const totalBrick = (floor * 15) * 1000;
        return totalBrick
    }
}
const brickQuantity = brickCalculator(0);
console.log(brickQuantity);

function tinyFriend(names) {
    let shortestLength = Infinity;
    let shortestName = "";
    if (Array.isArray(names)) {
        if (names.length > 0) {
            for (let i = 0; i < names.length; i++) {
                if (typeof(names[i]) === "string" && names[i].length < shortestLength) {
                    shortestName = names[i];
                    shortestLength = names[i].length;  
                }
            }
        }
        else{
            return "The array is empty";
        }
    }
    else {
        return "It's not an array"
    }
    return shortestName;
}

const shortestNameResult = tinyFriend([20, "muhid", 30, "Rakib", "Robiul", "Salman", "saif"])
console.log(shortestNameResult);