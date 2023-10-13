"use strict"

export function countMail(str, sub) {
    return str.split(sub).length - 1;
}

export function searchElement(startElement, className) {
    let nextElement = startElement.closest(className);

    return nextElement
}

export function setCheckBoxValue(nextElem) {

    const productElemInfo = searchElement(nextElem, '.product__right')
    const allSum = productElemInfo.querySelector('.total__amount__sum__without__sale')
    const allSumWithSale = productElemInfo.querySelector('.total__amount__sum__with__sale')
    const baseBucksWithSale = productElemInfo.querySelector('.with__sale__hidden').value
    const baseBucksOfSale = productElemInfo.querySelector('.off__sale__hidden').value

    const mobile = searchElement(nextElem, '.product')
    const allSumWithSaleMobile = mobile.querySelector('.mobile__product__price__com')
    const allSumSaleMobile = mobile.querySelector('.mobile__product__price__slash__com')

    allSum.innerHTML = `${Math.floor(baseBucksWithSale * Number(nextElem.textContent))}  <span>сом</span>`;
    allSumWithSale.innerHTML = `${Math.floor(baseBucksOfSale * Number(nextElem.textContent))}  сом`

    allSumSaleMobile.innerHTML = `${Math.floor(baseBucksOfSale * Number(nextElem.textContent))}  сом`
    allSumWithSaleMobile.innerHTML = `${Math.floor(baseBucksWithSale * Number(nextElem.textContent))}  <span>сом</span>`;

    const checkBox = mobile.querySelector('.check__box__hidden');
    let price = {
        widthSale: Math.floor(baseBucksWithSale * Number(nextElem.textContent)),
        ofSale: Math.floor(baseBucksOfSale * Number(nextElem.textContent))
    }
    price = JSON.stringify(price)
    checkBox.value = price
}

export function separateNumbers(str, num = 3) {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}
