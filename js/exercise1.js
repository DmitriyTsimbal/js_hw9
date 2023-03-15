import {inputValidation as arrayElementsCount} from './validation.js';
//Задача 2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.

const ARRAY_ELEMENTS_COUNT = arrayElementsCount('Enter an array elements count(0-500): ',0,500);

const getNumbersFilledArray = (arraySize) => {
  const NUMBERS_ARRAY = new Array(arraySize);
  for (let arrayIndex = 0; arrayIndex < arraySize; arrayIndex++){
    arrayIndex <= Math.floor((arraySize-1)/2) ? NUMBERS_ARRAY[arrayIndex] = 1 : NUMBERS_ARRAY[arrayIndex] = 7
  }
  return NUMBERS_ARRAY
}

//Or using fill variant
// const getNumbersFilledArray = (arraySize) => {
//   return new Array(arraySize).fill(1,0,arraySize/2).fill(7,arraySize/2)
// }

const ARR_SECTION = document.querySelector('.array-section')
console.log(getNumbersFilledArray(ARRAY_ELEMENTS_COUNT))
ARR_SECTION.innerHTML += `Array numbers: ${getNumbersFilledArray(ARRAY_ELEMENTS_COUNT)}`