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
    allCheck, allBtnCheck, checkBoxPayNow, showOrHiddenArrow
} from './conts.js';
import {checkCorrectInputSureName, checkCorrectMail, checkInputInn, checkInputPhoneNumber} from './inputFunctions.js'
import {allCheckBoxChecked, increaseProduct, orderProducts, payNow, shortenProduct} from "./buttonFunction.js";
import {showOrHiddenBlock, showPrice, showUpPlaceHolder} from "./displayFunction.js";
import {searchElement} from "./functions.js";

inputName.addEventListener('blur', () => {
    checkCorrectInputSureName(inputName)
})
inputName.addEventListener('input', () => {
    const nextElem = inputName.nextElementSibling;
    if (nextElem.innerText === `Укажите имя`) {
        checkCorrectInputSureName(inputName)
    }

    showUpPlaceHolder(inputName)
})

inputSureName.addEventListener('blur', () => {
    checkCorrectInputSureName(inputSureName)
})
inputSureName.addEventListener('input', () => {
    const nextElem = inputSureName.nextElementSibling;
    if (nextElem.innerText === `Введите фамилию`) {
        checkCorrectInputSureName(inputSureName)
    }

    showUpPlaceHolder(inputSureName)
})

inputMail.addEventListener("blur", () => {
    checkCorrectMail(inputMail)
})
inputMail.addEventListener("input", () => {
    const nextElem = inputMail.nextElementSibling;
    if (nextElem.innerText === `Проверьте адрес электронной почты`) {
        checkCorrectMail(inputMail)
    }

    showUpPlaceHolder(inputMail)
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
        inputPhone.value = elementText.replace(correct, '').slice(0)
    }

    if (elementText.length === 1 && elementText.replace(correct, '').slice(0).length === 0) {
        inputPhone.value = '+'
    }
    if (elementText.length === 1 && elementText[0] === '+') {
        inputPhone.value = '+'
    }

    if (elementText.length == 2 || elementText.length == 6 || elementText.length == 10 || elementText.length == 13) {
        inputPhone.value = `${elementText} `
    }
    if (e.data === null || e.inputType === 'deleteContentBackward') {
        inputPhone.value = elementText.slice(0, elementText.length)
    }

    const nextElem = inputPhone.nextElementSibling;
    if (nextElem.innerText === `Формат: +9 999 999 99 99`) {
        checkInputPhoneNumber(inputPhone)
    }

    showUpPlaceHolder(inputPhone)
})

inputInn.addEventListener("blur", () => {
    checkInputInn(inputInn)
})
inputInn.addEventListener("input", () => {
    const nextElem = inputInn.nextElementSibling;
    if (nextElem.innerText === `Проверьте ИНН`) {
        checkInputInn(inputInn)
    }

    showUpPlaceHolder(inputInn)
})

showOrHiddenArrow.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        showOrHiddenBlock(arrow)
    })
})

order.addEventListener('click', () => {
    orderProducts(order)
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
    allCheckBoxChecked(allBtnCheck);
    showPrice();

})

allCheck.forEach((check) => {
    const elemCheck = searchElement(check, '.check__box__hidden');
    const infoBox = searchElement(check, '.product');
    const count = infoBox.querySelector('.quantity__regular__number')
    const baseBucksWithSale = infoBox.querySelector('.with__sale__hidden').value
    const baseBucksOfSale = infoBox.querySelector('.off__sale__hidden').value

    let price = {
        widthSale: Math.floor(baseBucksWithSale * Number(count.innerText)),
        ofSale: Math.floor(baseBucksOfSale * Number(count.innerText)),
    }
    elemCheck.value = JSON.stringify(price);

    check.addEventListener('click', () => {
        const prod = searchElement(check, '.photo__and__check')
        const imgSrc = prod.querySelector('img').src
        const paymentMethodBlock = document.querySelector('.payment__method ')
        const imgs = paymentMethodBlock.querySelectorAll('img');

        if (check.checked !== true) {
            allBtnCheck.checked = false

            const thisImg = Array.from(imgs).filter((img) => {
                if (img.src === imgSrc) return true
            })

            if (thisImg.length !== 1) {
                const dateElem = document.getElementById('sevenFebr')
                dateElem.style.display = 'none'
            }
            for (let img of thisImg) {
                img.closest('div').style.display = 'none'
            }

            const orHidden = document.getElementById('fiveFiber');
            let allImg = orHidden.querySelectorAll('.photo__date_card')
            allImg = Array.from(allImg).filter((img) => {
                if (img.style.display === 'none') return true
            })

            if (allImg.length === 3)
                orHidden.style.display = 'none'

            const totalCountInBasket = document.querySelector('.total__in__the__basket');
            totalCountInBasket.innerText = Number(totalCountInBasket.innerText) - 1;
            if (Number(totalCountInBasket.innerText) === 0) {
                totalCountInBasket.innerText = '';
                document.querySelector('.red__circle').style.display = 'none'
            }
        } else {

            const thisImg = Array.from(imgs).filter((img) => {
                if (img.src === imgSrc) return true
            })

            if (thisImg.length !== 1) {
                const dateElem = document.getElementById('sevenFebr')
                dateElem.style.display = 'flex'
            }
            for (let img of thisImg) {
                img.closest('div').style.display = 'flex'
            }

            const orHidden = document.getElementById('fiveFiber');
            let allImg = orHidden.querySelectorAll('.photo__date_card')
            allImg = Array.from(allImg).filter((img) => {
                if (img.style.display === 'none') return true
            })

            if (allImg.length !== 3)
                orHidden.style.display = 'flex'

            const totalCountInBasket = document.querySelector('.total__in__the__basket');
            totalCountInBasket.innerText = Number(totalCountInBasket.innerText) + 1
            document.querySelector('.red__circle').style.display = 'flex'
        }
    })

    check.addEventListener('change', () =>{
        showPrice();
        payNow()
    })
})

checkBoxPayNow.addEventListener('click', payNow)

showPrice()