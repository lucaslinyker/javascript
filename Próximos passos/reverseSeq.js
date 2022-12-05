const reverseSeq = n => {
    let reverseNum = []
    for (let i = 0; i < n; n--) {
        reverseNum.push(n)
    }
    return reverseNum
}

console.log(reverseSeq(5))