import {inputValidation as arrayElementsCount} from './validation.js';
//Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.

const ARRAY_ELEMENTS_COUNT = arrayElementsCount('Enter an array elements count(0-500): ',0,500);
const getNumbersFilledArray = (arraySize) => {
    const NUMBERS_ARRAY = new Array(arraySize);
    for (let arrayIndex = 0; arrayIndex < arraySize; arrayIndex++){
        arrayIndex < 5 ? NUMBERS_ARRAY[arrayIndex] = 1 : NUMBERS_ARRAY[arrayIndex] = 7
    }
    return NUMBERS_ARRAY
}

// Or using fill variant
// const getNumbersFilledArray = (arraySize) => {
//     return new Array(arraySize).fill(1,0,5).fill(7,5)
//
// }

const ARR_SECTION = document.querySelector('.array-section')
console.log(getNumbersFilledArray(ARRAY_ELEMENTS_COUNT))
ARR_SECTION.innerHTML += `Array numbers: ${getNumbersFilledArray(ARRAY_ELEMENTS_COUNT)}`