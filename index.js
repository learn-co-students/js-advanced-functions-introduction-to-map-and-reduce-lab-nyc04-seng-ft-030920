// Your code here
function mapToNegativize(array) {
    let neg = []
    array.forEach(num => neg.push(num * -1))
    return neg
}

function mapToNoChange(array) {
    let noCh = []
    array.forEach(num => noCh.push(num))
    return noCh
}

function mapToDouble(array) {
    let doub = []
    array.forEach(num => doub.push(num * 2))
    return doub
}

function mapToSquare(array) {
    let sq = []
    array.forEach(num => sq.push(num ** 2))
    return sq
}

function reduceToTotal(array, sp=0) {
    let tot = sp
    array.forEach(num => tot = num + tot)
    return tot
}

function reduceToAllTrue(array) {
    let tot = true
    array.includes(false) ? tot = false : tot = true
    return tot
}

function reduceToAnyTrue(array) {
    let tot = true
    array.includes(true) ? tot = true : tot = false
    return tot
}
