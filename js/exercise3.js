import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Дано масив елементів. Вивести на екран елементи, що більші за 100



const NUMBERS_ARRAY = getFilledArrayWithRandomNumbers(10, 40, 1, 1000);

const getElementsMoreThan100 = (elementsArray) => {
    const MORE_THAN_100_ELEMENTS = []
    for (let element of elementsArray) {
        if (element > 100) {
            MORE_THAN_100_ELEMENTS.push(element)
        }
    }
    return MORE_THAN_100_ELEMENTS;
}

const ARR_SECTION = document.querySelector('.array-section')
ARR_SECTION.innerHTML += `Array numbers: ${NUMBERS_ARRAY}`
const ARR_SECTION_SORTED = document.querySelector('.array-section__sorted')
ARR_SECTION_SORTED.innerHTML += `Array numbers sorted: ${getElementsMoreThan100(NUMBERS_ARRAY)}`