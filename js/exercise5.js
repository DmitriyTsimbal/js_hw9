import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

const RANDOM_ARRAY = getFilledArrayWithRandomNumbers(10,40,1,1000);

const ARR_SECTION = document.querySelector('.array-section')
ARR_SECTION.innerHTML += `Array numbers: ${RANDOM_ARRAY}`

RANDOM_ARRAY.forEach((item, index, array) => {
    if (item > array[0]){
        array[index] *= 2;
    }
})


const ARR_SECTION_PRODUCT = document.querySelector('.array-section__product')
ARR_SECTION_PRODUCT.innerHTML += `Positive array numbers product: ${RANDOM_ARRAY}`
