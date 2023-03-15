// Дано масив імен. Сформувати масив з перших літер цих імен.

const NAMES_ARRAY = ['Ivan', 'Oleg', 'Olya', 'Ivan', 'Nadya', 'Tom', 'Ivan', 'Oleg', 'Ivan', 'Olya'];

const FIRST_NAME_LETTER_ARRAY = NAMES_ARRAY.map((item) => {
    return item[0]
})

document.write(`<p>Names array: ${NAMES_ARRAY}</p><hr><p>Result array: ${FIRST_NAME_LETTER_ARRAY}</p>`)