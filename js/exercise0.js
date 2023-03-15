import {inputValidation as arrayElementsCount} from './validation.js';
//Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.

const ARRAY_ELEMENTS_COUNT = arrayElementsCount('Enter an array elements count(0-500): ',0,500);

const getArrayWithZeroes = (arraySize) => {
const ZEROES_ARRAY = new Array(arraySize);
for (let arrayIndex = 0; arrayIndex < arraySize; arrayIndex++){
    ZEROES_ARRAY[arrayIndex] = 0;
}
return ZEROES_ARRAY;
}

//Or using fill variant
// const getArrayWithZeroes = (arraySize) => {
//     return new Array(arraySize).fill(0);
// }

const ARR_SECTION = document.querySelector('.array-section')
console.log(getArrayWithZeroes(ARRAY_ELEMENTS_COUNT))
ARR_SECTION.innerHTML += `Array numbers: ${getArrayWithZeroes(ARRAY_ELEMENTS_COUNT)}`