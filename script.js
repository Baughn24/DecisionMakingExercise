// 1a
let randomNum = Math.floor(Math.random() * 6 + 1);
console.log(randomNum);

// 1b
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else if (randomNum = 2, 3) {
    console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}

// 1c
if (randomNum !== 3) {
    console.log("Not equal to 3");
}

// 1d
if (randomNum !== 3 && 5) {
    console.log("NOT equal to 3 AND not equal to 5");
}

// 1e
if (randomNum === 2 || 4) {
    console.log("Equal to 2 OR equal to 4");
}

// BONUS 2
console.log(randomNum >= 4 ? "Greater than or equal to 4" : "Less than 4");

// BONUS 3
switch (randomNum) {
    case 1:
        console.log("One");
        break;
        case 2:
            console.log("Two");
            break;
            case 3:
                console.log("Three");
                break;
                case 4:
                    console.log("Four");
                    break;
                    case 5:
                        console.log(Five);
}