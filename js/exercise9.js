import {getFilledArrayWithRandomNumbers} from "./random-array.js";
import {getToFixedArray} from "./array-to-fixed.js";
//Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.


const PRICES_ARRAY = getFilledArrayWithRandomNumbers(10,40,100,5000);

const PRICE_TAX_ARRAY = PRICES_ARRAY.map((value,index,array) => {
return array[index]*0.2
})

const PRICES_TAX_TO_FIXED = getToFixedArray(PRICE_TAX_ARRAY)

const PRICES_TAX_SUM = PRICES_TAX_TO_FIXED.reduce((a, b) => a + b);


const ARR_SECTION = document.querySelector('.array-section')
ARR_SECTION.innerHTML += `Prices: ${PRICES_ARRAY}`
const ARR_SECTION_TAX = document.querySelector('.array-section__tax')
ARR_SECTION_TAX.innerHTML += `TAX: ${PRICES_TAX_TO_FIXED}`
const ARR_SECTION_SUM = document.querySelector('.array-section__sum')
ARR_SECTION_SUM.innerHTML += `TAX Sum: ${parseFloat(PRICES_TAX_SUM.toFixed(2))}`
