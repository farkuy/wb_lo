"use strict"

export function checkCorrectInputSureName(inputSureNameOrName) {
    const elementText = inputSureNameOrName.value;
    const isCyrillic = /^[а-яА-ЯёЁ]+$/i.test(elementText)
    const isLatin = /^[a-zA-Z]+$/i.test(elementText)
    const nextElem = inputSureNameOrName.nextElementSibling;

    if (elementText[0] !== elementText[0].toUpperCase())
        inputSureNameOrName.value = elementText[0].toUpperCase() + elementText.substring(1)

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

    if (!(checkMailRu + '@mail.ru'.length === elementText.length || checkGMailCom + '@gmail.com'.length === elementText.length)) {
        inputMail.style.color = '#F55123';
        nextElem.innerText = 'Проверьте адрес электронной почты'
        return
    }

    inputMail.style.color = 'black'
    nextElem.innerText = ''
}