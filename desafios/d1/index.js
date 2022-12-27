function fatorial(num) {
    var fat = 1
    var c = num -1
    for (let i = 1; i < c; i++) {
        fat += num * i
    }
    return num
}


console.log(fatorial(4))