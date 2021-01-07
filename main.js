// DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// Actions
generateEl.addEventListener('click', () => {
    const length = parseInt(lengthEl.value);
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});

// Generate Password Function
function generatePassword(lower, upper, number, symbol, length) {
    
}

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
    const symbols = '!@#$%^&*(){}[]=<>/,.?+_-';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());