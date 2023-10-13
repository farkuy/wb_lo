"use strict"

import {searchElement, setCheckBoxValue} from "./functions.js";
import {allCheck, arrEmpty, checkBoxPayNow} from "./conts.js";
import {showPrice} from "./displayFunction.js";

export function shortenProduct(shortenBtn) {
    const nextElem = shortenBtn.nextElementSibling;
    const quantityElem = searchElement(shortenBtn, '.quantity');
    const product = searchElement(shortenBtn, '.product');
    const plus = quantityElem.querySelector('.plus');
    const totalQuantity = quantityElem.querySelector('.total__quantity').value;
    const textQunty = quantityElem.querySelector('.quantity__only__left')
    plus.disabled = false;
    plus.style.color = '#000000'

    if (Number(nextElem.textContent) > 0) {
        nextElem.textContent = `${Number(nextElem.textContent) - 1}`
    }
    if (Number(nextElem.textContent) === 0) {
        shortenBtn.style.color = '#00000033'
    }
    else {
        shortenBtn.style.color = '#000000'
    }

    if (textQunty) {
        textQunty.innerText = `Осталось ${Number(totalQuantity - nextElem.textContent)} шт`;
    }

    const imgSrc = product.getElementsByTagName("img")[0].src;
    const paymentMethodBlock = document.querySelector('.payment__method ')
    const imgs = paymentMethodBlock.querySelectorAll('img');

    const thisImg = Array.from(imgs).filter((img) => {
        if (img.src === imgSrc) return true
    })

    if (thisImg.length === 1) {
        const img = thisImg[0]
        img.style.display = 'flex'
        if (Number(nextElem.textContent) > 1 && img.previousElementSibling !== null) {
            img.previousElementSibling.textContent = nextElem.textContent;
        }
        if (Number(nextElem.textContent) === 1 && img.previousElementSibling !== null) {
            img.previousElementSibling.textContent = ''
        }
        if (Number(nextElem.textContent) === 0 && img.previousElementSibling !== null) {
            img.style.display = 'none';
        }
    }
    else {
        const imgSecond = thisImg[thisImg.length - 1]
        const imgFirst = thisImg[0]

        const dateElem = document.getElementById('sevenFebr')
        if (Number(nextElem.textContent) < 185) {
            dateElem.style.display = 'none';
            Number(nextElem.textContent) === 1
                ? imgFirst.previousElementSibling.textContent = ''
                : Number(nextElem.textContent) <= 0
                ? imgFirst.style.display = 'none'
                : imgFirst.previousElementSibling.textContent = Number(nextElem.textContent);
        } else {
            imgFirst.style.display === 'flex'
            const nextElemProductCount = Number(nextElem.textContent) - 184
            nextElemProductCount === 1
            ? imgSecond.previousElementSibling.textContent = ''
            : imgSecond.previousElementSibling.textContent =  nextElemProductCount;
        }
    }

    const orHidden = document.getElementById('fiveFiber');
    let allImg = orHidden.querySelectorAll('img')
    allImg = Array.from(allImg).filter((img) => {
        console.log(32)
        if (img.style.display === 'none') return true
    })

    if (allImg.length === 3)
        orHidden.style.display = 'none'

    setCheckBoxValue(nextElem);
    showPrice();
    payNow()
}

export function increaseProduct(increaseBtn) {
    const nextElem = increaseBtn.previousElementSibling;

    nextElem.textContent = `${Number(nextElem.textContent) + 1}`

    const quantityElem = searchElement(increaseBtn, '.quantity');
    const minus = quantityElem.querySelector('.minus')
    const totalQuantity = quantityElem.querySelector('.total__quantity').value;
    const textQunty = quantityElem.querySelector('.quantity__only__left')
    const product = searchElement(increaseBtn, '.product');

    minus.disabled = false;
    minus.style.color = '#000000'

    if (nextElem.textContent === totalQuantity) {
        increaseBtn.style.color = '#00000033'
        increaseBtn.disabled = true
    } else {
        increaseBtn.style.color = '#000000'
        increaseBtn.disabled = false
    }

    if (textQunty) {
        textQunty.innerText = `Осталось ${Number(totalQuantity - nextElem.textContent)} шт`;
    }

    const imgSrc = product.getElementsByTagName("img")[0].src;
    const paymentMethodBlock = document.querySelector('.payment__method ')
    const imgs = paymentMethodBlock.querySelectorAll('img');

    const thisImg = Array.from(imgs).filter((img) => {
        if (img.src === imgSrc) return true
    })

    if (thisImg.length === 1) {
        const img = thisImg[0]
        img.style.display = 'flex'
        if (Number(nextElem.textContent) > 1 && img.previousElementSibling !== null) {
            img.previousElementSibling.textContent = nextElem.textContent;
        }
        if (Number(nextElem.textContent) === 1 && img.previousElementSibling !== null) {
            img.previousElementSibling.textContent = ''
        }
        if (Number(nextElem.textContent) === 0 && img.previousElementSibling !== null) {
            img.style.display = 'none';
        }
    }
    else {
        const imgSecond = thisImg[thisImg.length - 1]
        const imgFirst = thisImg[0]

        const dateElem = document.getElementById('sevenFebr')
        if (Number(nextElem.textContent) > 184) {
            dateElem.style.display = 'flex'
            imgSecond.style.display = 'flex'
            Number(nextElem.textContent) - 184 === 1
            ? imgSecond.previousElementSibling.textContent = ''
            : imgSecond.previousElementSibling.textContent = Number(nextElem.textContent) - 184
        } else {
            imgFirst.style.display = 'flex'
            const nextElemProductCount = Number(nextElem.textContent)
            nextElemProductCount === 1
                ? imgFirst.previousElementSibling.textContent = ''
                : imgFirst.previousElementSibling.textContent =  Number(nextElem.textContent);
        }
    }

    const orHidden = document.getElementById('fiveFiber');
    let allImg = orHidden.querySelectorAll('img')
    allImg = Array.from(allImg).filter((img) => {
        if (img.style.display === 'none') return true
    })

    if (allImg.length !== 3)
        orHidden.style.display = 'flex'

    setCheckBoxValue(nextElem)
    showPrice()
    payNow()
}

export function allCheckBoxChecked(allBtnCheck) {
    if (allBtnCheck.checked === true) {
        allCheck.forEach((check) => check.checked = true)
        const totalCountInBasket = document.querySelector('.total__in__the__basket');
        totalCountInBasket.innerText = '3';
        document.querySelector('.red__circle').style.display = 'flex'
    } else {
        allCheck.forEach((check) => check.checked = false)
        const totalCountInBasket = document.querySelector('.total__in__the__basket');
        totalCountInBasket.innerText = '';
        document.querySelector('.red__circle').style.display = 'none'
    }
}

export function payNow() {
    const btnPayText = document.querySelector('.pay__text__btn');
    const sumWithSale = document.querySelector('.sum__with__sale').innerText
    if (checkBoxPayNow.checked) {
        btnPayText.textContent = `Оплатить ${sumWithSale}`
    } else {
        btnPayText.textContent = 'Заказать'
    }
}

export function orderProducts() {
    const infoDelivery = document.getElementsByClassName('inputBlock');
    for (let i = 0; i < infoDelivery.length; ++i) {
        const input = infoDelivery[i].querySelector('input');
        if (input.value === '') {
            input.nextElementSibling.innerText = arrEmpty[i];
            input.nextElementSibling.style.color = "#F55123"
        }
    }
}