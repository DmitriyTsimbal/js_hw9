export const getToFixedArray = (userArray) => {
    let arrayIndex = 0;
    while (arrayIndex<userArray.length){
        userArray[arrayIndex] = parseFloat(userArray[arrayIndex].toFixed(2));
        arrayIndex++
    }
    return userArray;
}