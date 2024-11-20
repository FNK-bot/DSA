//Is Power of Two

function isPowerOfTwo(n) {
    //complete
}
//use bitwise// bitwise

function powerOfTwoBitwise(n) {
    if (n < 1) return false;
    return (n & (n - 1)) === 0;
}
console.log(powerOfTwoBitwise())
