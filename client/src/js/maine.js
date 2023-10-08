"use strict"

import {
    inputName,
    inputSureName,
    inputInn,
    inputPhone,
    inputMail,
    order,
    allMinus,
    allPlus,
    allCheck, allBtnCheck
} from './conts.js';
import {checkCorrectInputSureName, checkCorrectMail, checkInputInn, checkInputPhoneNumber} from './inputFunctions.js'
import {allCheckBoxChecked, increaseProduct, shortenProduct} from "./buttonFunction.js";
import {showPrice} from "./displayFunction.js";

inputName.addEventListener('blur', () => {
    checkCorrectInputSureName(inputName)
})
inputName.addEventListener('input', () => {
    const nextElem = inputName.nextElementSibling;
    if (nextElem.innerText === `Укажите имя`) {
        checkCorrectInputSureName(inputName)
    }
})

inputSureName.addEventListener('blur', () => {
    checkCorrectInputSureName(inputSureName)
})
inputSureName.addEventListener('input', () => {
    const nextElem = inputSureName.nextElementSibling;
    if (nextElem.innerText === `Введите фамилию`) {
        checkCorrectInputSureName(inputSureName)
    }
})

inputMail.addEventListener("blur", () => {
    checkCorrectMail(inputMail)
})
inputMail.addEventListener("input", () => {
    const nextElem = inputMail.nextElementSibling;
    if (nextElem.innerText === `Проверьте адрес электронной почты`) {
        checkCorrectMail(inputMail)
    }
})

inputPhone.addEventListener("blur", () => {
    checkInputPhoneNumber(inputPhone)
})
inputPhone.addEventListener("input", (e) => {
    const elementText = inputPhone.value;
    const correct = /[a-zA-Zа-яА-Я]/g;

    if (elementText[0] !== '+') {
        inputPhone.value = `+${elementText.replace(correct, '').slice(0)} `
    } else {
        inputPhone.value = elementText.slice(0, 1) + elementText.replace(correct, '').slice(1)
    }

    if (elementText.length == 6 || elementText.length == 10 || elementText.length == 13) {
        inputPhone.value = `${elementText} `
    }
    if (e.data === null || e.inputType === 'deleteContentBackward') {
        inputPhone.value = elementText.slice(0, elementText.length)
    }

    const nextElem = inputPhone.nextElementSibling;
    if (nextElem.innerText === `Формат: +9 999 999 99 99`) {
        checkInputPhoneNumber(inputPhone)
    }
})

inputInn.addEventListener("blur", () => {
    checkInputInn(inputInn)
})
inputInn.addEventListener("input", () => {
    const nextElem = inputInn.nextElementSibling;
    if (nextElem.innerText === `Проверьте ИНН`) {
        checkInputInn(inputInn)
    }
})

order.addEventListener('click', () => {

})
allMinus.forEach((minus) => {
    minus.addEventListener('click', () => {
        shortenProduct(minus)
    })
})

allPlus.forEach((plus) => {
    plus.addEventListener('click', () => {
        increaseProduct(plus)
    })
})

allBtnCheck.addEventListener('click', () => {
    allCheckBoxChecked(allBtnCheck)
})

allCheck.forEach((check) => {
    check.addEventListener('click', () => {
        if (check.checked !== true) {
            allBtnCheck.checked = false
        }
        console.log(check.value)
    })
})

showPrice()
