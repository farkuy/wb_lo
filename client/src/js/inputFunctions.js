"use strict"

import {countMail} from "./functions.js";

export function checkCorrectInputSureName(inputSureNameOrName) {
    const elementText = inputSureNameOrName.value;
    const isCyrillic = /^[а-яА-ЯёЁ]+$/i.test(elementText)
    const isLatin = /^[a-zA-Z]+$/i.test(elementText)
    const nextElem = inputSureNameOrName.nextElementSibling;

    if (elementText === '' && nextElem.innerText === '') {
        inputSureNameOrName.style.color = 'black'
        nextElem.innerText = ''
        return;
    }

    if (!(isCyrillic || isLatin)) {
        inputSureNameOrName.placeholder === 'Имя'
            ? nextElem.innerText = `Укажите имя`
            : nextElem.innerText = `Введите фамилию`

        inputSureNameOrName.style.color = '#F55123';
        return
    }

    inputSureNameOrName.style.color = 'black'
    nextElem.innerText = ''
}

export function checkCorrectMail(inputMail) {
    const elementText = inputMail.value;
    const checkMailRu = elementText.indexOf('@mail.ru');
    const checkGMailCom = elementText.indexOf('@gmail.com')
    const nextElem = inputMail.nextElementSibling;
    const oneMail = countMail(elementText, '@mail.ru')
    const oneGmail = countMail(elementText, '@gmail.com')

    if (elementText === '') {
        inputMail.style.color = 'black'
        nextElem.innerText = ''
        return;
    }

    if (elementText === '@mail.ru' || elementText === '@gmail.com') {
        inputMail.style.color = '#F55123';
        nextElem.innerText = 'Проверьте адрес электронной почты'
        return
    }

    if (!(elementText.endsWith("@mail.ru") || elementText.endsWith("@gmail.com")) || (oneMail !== 1 && oneGmail !== 1) || (oneMail === 1 && oneGmail === 1)) {
        inputMail.style.color = '#F55123';
        nextElem.innerText = 'Проверьте адрес электронной почты'
        return
    }

    inputMail.style.color = 'black'
    nextElem.innerText = ''
}

export function checkInputInn(inputInn) {
    const elementText = inputInn.value;
    const nextElem = inputInn.nextElementSibling;

    if (elementText.length === 0) {
        inputInn.style.color = 'black';
        nextElem.style.color = 'black'
        nextElem.innerText = 'Для таможенного оформления'
        return;
    }

    if (elementText.length !== 14) {
        inputInn.style.color = '#F55123';
        nextElem.style.color = '#F55123';
        nextElem.innerText = 'Проверьте ИНН'
        return
    }

    inputInn.style.color = 'black';
    nextElem.style.color = 'black'
    nextElem.innerText = 'Для таможенного оформления'
}

export function checkInputPhoneNumber(inputPhoneNumber) {
    const elementText = inputPhoneNumber.value;
    const nextElem = inputPhoneNumber.nextElementSibling;
    const checkNumber = elementText.slice(1)

    if (elementText.length === 0) {
        inputPhoneNumber.style.color = 'black';
        nextElem.style.color = 'black';
        nextElem.innerText = '';
        return;
    }

    if (elementText.length > 31) {
        inputPhoneNumber.value = elementText.slice(0, 31)
    }
    let cor = checkNumber
        .split('')
        .filter((number) => {
            if (number === " ") return false;
            else return true
        })
        .map(Number)

    if (cor.includes(NaN) || cor.length !== 11) {
        nextElem.style.color = '#F55123';
        nextElem.innerText = 'Формат: +9 999 999 99 99'
        return
    }

    inputPhoneNumber.style.color = 'black';
    nextElem.style.color = 'black';
    nextElem.innerText = '';
}