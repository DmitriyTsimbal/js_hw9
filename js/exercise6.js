import {getFilledArrayWithRandomNumbers} from "./random-array.js";
import {getToFixedArray} from "./array-to-fixed.js";
//Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.

const RANDOM_ARRAY = getFilledArrayWithRandomNumbers(10,40,100,10000);

const ARR_SECTION = document.querySelector('.array-section');
ARR_SECTION.innerHTML += `Array numbers: ${RANDOM_ARRAY}`;

RANDOM_ARRAY.forEach((item,index,array) => {
    if (item > 1000){
      array[index] -= (array[index]*0.3)
    }
})

const ARRAY_FIXED = getToFixedArray(RANDOM_ARRAY)
console.log(RANDOM_ARRAY)

const ARR_SECTION_PRODUCT = document.querySelector('.array-section__product');
ARR_SECTION_PRODUCT.innerHTML += `Positive array numbers product: ${ARRAY_FIXED}`;