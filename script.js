let slider = document.querySelector("#myRange");
let output = document.getElementById("length-value");

const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const uppercase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
const numbers = '0123456789';
const symbols = '!@#$%^&*()';

const uppercaseCheckbox = document.querySelector("#uppercaseCheckbox");
const lowercaseCheckbox = document.querySelector("#lowercaseCheckbox");
const numbersCheckbox = document.querySelector("#numbersCheckbox");
const symbolsCheckbox = document.querySelector("#symbolsCheckbox");

const button = document.getElementById("generate")
const generatedPassword = document.getElementById("view-password")
let strengthText = document.querySelector("#strength")
output.innerHTML = slider.value;

const generatePassword = () => {
    let password = "";
    let charactersArray = [];

    if (uppercaseCheckbox.checked === true) {
        charactersArray.push(uppercase)
    }

    if (lowercaseCheckbox.checked === true) {
        charactersArray.push(lowercase)
    }

    if (numbersCheckbox.checked === true) {
        charactersArray.push(numbers)
    }

    if (symbolsCheckbox.checked === true) {
        charactersArray.push(symbols)
    }

    for (let i = 0; i < slider.value; i++) {
        let index = Math.floor(Math.random() * charactersArray.length);
        let finalIndex = Math.floor(Math.random() * charactersArray[index].length)
        password += charactersArray[index][finalIndex];
    }

    generatedPassword.innerHTML = password;
};

const checkStrength = () => {
    let strengthValue = 0;

    if (uppercaseCheckbox.checked === true) {
        strengthValue += 1;
    }

    if (lowercaseCheckbox.checked === true) {
        strengthValue += 1;
    }

    if (numbersCheckbox.checked === true) {
        strengthValue += 1;
    }

    if (symbolsCheckbox.checked === true) {
        strengthValue += 1;
    }

    if (strengthValue === 1) {
        strengthText.innerHTML = 'WEAK';
    } else if (strengthValue === 2) {
        strengthText.innerHTML = 'MODERATE';
    } else if (strengthValue === 3) {
        strengthText.innerHTML = 'STRONG';
    } else if (strengthValue === 4) {
        strengthText.innerHTML = 'VERY STRONG';
    } else {
        strengthText.innerHTML = '---';
    }
};
uppercaseCheckbox.addEventListener('change', checkStrength)
lowercaseCheckbox.addEventListener('change', checkStrength)
numbersCheckbox.addEventListener('change', checkStrength)
symbolsCheckbox.addEventListener('change', checkStrength)

button.addEventListener("click", function () {
    console.log(uppercaseCheckbox.checked);
    generatePassword();
});

slider.addEventListener("input", function () {
    output.innerHTML = this.value;
});




