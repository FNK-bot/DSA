// Factorial Of An Intiger

/*
n factorial is the product of All Postive Integer LessThan or
equal to n
Factorial of Zero is 1
Eg :- 4! = 4*3*2*1 = 24
*/
function factorial(n) {
    if (n < 1) return new Error('cannot take negative number')
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i
    };
    return result;
};

console.log(factorial(2))