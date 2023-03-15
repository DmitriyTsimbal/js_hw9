import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Задача 5. Дано масив елементів. Знайти добуток додатних елементів:

const NUMBERS_ARRAY = getFilledArrayWithRandomNumbers(10, 20, -100, 100);

const getProductOfPositiveNumbers = (numbersArray) => {
    let positiveNumbersProduct = 1;
    for (let number of numbersArray){
     if (number > 0) positiveNumbersProduct *= number;
    }
    return [positiveNumbersProduct]
}

const [POSITIVE_NUMBERS_PRODUCT] = getProductOfPositiveNumbers(NUMBERS_ARRAY)


const ARR_SECTION = document.querySelector('.array-section')
ARR_SECTION.innerHTML += `Array numbers: ${NUMBERS_ARRAY}`
const ARR_SECTION_PRODUCT = document.querySelector('.array-section__product')
ARR_SECTION_PRODUCT.innerHTML += `Positive array numbers product: ${POSITIVE_NUMBERS_PRODUCT}`
