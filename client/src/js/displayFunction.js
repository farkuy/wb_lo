"use strict"

import {allCheck} from "./conts.js";
import {searchElement, separateNumbers} from "./functions.js";

export function showPrice() {
    let ofSaleSum = 0;
    let withSaleSum = 0;

    for (let sum of allCheck) {
        if (sum.checked) {
            ofSaleSum += JSON.parse(sum.value).ofSale;
            withSaleSum += JSON.parse(sum.value).widthSale;
        }
    }

    let sale = ofSaleSum - withSaleSum;
    ofSaleSum = String(ofSaleSum);
    withSaleSum = String(withSaleSum);
    sale = String(sale)

    const resultsAllSum = document.querySelector('.sum__with__sale');
    const resultsAllOFSum = document.querySelector('.sum__of__sale');
    const saleTotalSum = document.querySelector('.sale__total__sum');

    resultsAllOFSum.innerText = `${separateNumbers(ofSaleSum)} com`
    resultsAllSum.innerText = `${separateNumbers(withSaleSum)} com`
    saleTotalSum.innerText = `${separateNumbers(sale)} com`
}

export function showOrHidden(product, nextElem) {
    const imgSrc = product.getElementsByTagName("img")[0].src;
    const paymentMethodBlock = document.querySelector('.payment__method ')
    const imgs = paymentMethodBlock.querySelectorAll('img');

    for (let img of imgs) {
        if (img.src === imgSrc) {
            img.style.display = 'flex'
            if (Number(nextElem.textContent) > 1 && img.previousElementSibling !== null) {
                img.previousElementSibling.textContent = nextElem.textContent;
            }
            if (Number(nextElem.textContent) === 1 && img.previousElementSibling !== null) {
                img.previousElementSibling.textContent = ''
            }
            if (Number(nextElem.textContent) === 0 && img.previousElementSibling !== null) {
                img.style.visibility = 'hidden';
            }
        }
    }
}

export function showOrHiddenBlock(arrow) {
    const block = searchElement(arrow, '.all__add')
    if (block.nextElementSibling.style.display !== 'none') {
        block.nextElementSibling.style.display = 'none';
        arrow.src = '../img/maine/arrowHid.png'

        if (block.classList.contains('all__add__basket')) {
            document.querySelector('.check_box__all').style.display = 'none';
            document.querySelector('.all__add_count').style.display = 'flex';

            let product = document.querySelectorAll('.check__box__hidden')
            product = Array.from(product).map((check, index) => {
                return check.checked
            })

            let totalCountNumber = 0;
            const allSum = document.querySelector('.sum__with__sale').innerText;
            let totalCount = document.querySelectorAll('.quantity__regular__number');
            totalCount = Array.from(totalCount).forEach((count, index) => {
                if (product[`${index}`] === true) {
                    totalCountNumber += Number( count.innerText)
                } totalCountNumber += 0
            });

            document.querySelector('.all__add_count').innerText = `${totalCountNumber} товаров · ${allSum}`
        }
    } else {
        block.nextElementSibling.style.display = 'block';
        arrow.src = '../img/maine/show.png'

        if (block.classList.contains('all__add__basket')) {
            document.querySelector('.check_box__all').style.display = 'flex';
            document.querySelector('.all__add_count').style.display = 'none';

        }
    }


}
