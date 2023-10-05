"use strict"

import {inputName, inputSureName, inputInn, inputPhone, inputMail} from './conts.js';
import {checkCorrectInputSureName, checkCorrectMail} from './inputFunctions.js'

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
