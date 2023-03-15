//Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

const CAR_NUMBERS = ['BK7590BB','GFLER','AA0852ZA','CB8136AX','DGFGA','BB4177CB','2DFGX','AA1234AB','BA2588BB','FDJKV','AH4035HA','AA6126ME'];
const CAR_NUMBERS_START_AT_A = CAR_NUMBERS.filter(array => array[0]==='A')

document.write(`<p>Start array: ${CAR_NUMBERS}</p><hr><p>Result array: ${CAR_NUMBERS_START_AT_A}</p>`)
