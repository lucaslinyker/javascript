const createPhoneNumber = numbers => {
    for (let i = 0; i < numbers.length; i++) {
        numbers = numbers.toString().replace(',', '')
    }
    var PhoneNumber = `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6)}` 
    return PhoneNumber
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))