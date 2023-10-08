"use strict"

import {setCheckBoxValue} from "./functions.js";
import {allCheck} from "./conts.js";

export function shortenProduct(shortenBtn) {
    const nextElem = shortenBtn.nextElementSibling;

    if (Number(nextElem.textContent) > 0) {
        nextElem.textContent = `${Number(nextElem.textContent) - 1}`
    }
    if (Number(nextElem.textContent) === 0) {
        shortenBtn.style.color = '#00000033'
    }
    else {
        shortenBtn.style.color = '#000000'
    }

    setCheckBoxValue(nextElem)
}

export function increaseProduct(increaseBtn) {
    const nextElem = increaseBtn.previousElementSibling;

    nextElem.textContent = `${Number(nextElem.textContent) + 1}`

    setCheckBoxValue(nextElem)
}

export function allCheckBoxChecked(allBtnCheck) {
    if (allBtnCheck.checked === true) {
        allCheck.forEach((check) => check.checked = true)
    } else {
        allCheck.forEach((check) => check.checked = false)
    }
}