// Generator Functions

// lowercase = 97 - 122
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// uppercase = 65 - 90
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// numbers = 48 - 57
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

// symbols 
function getRandomSymbol() {
    
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());