//Recursive Factorial

function factorail(n) {
    if (n < 2) {
        return 1 //base case
    };
    return n * factorail(n - 1) //n * n-1
};
console.log(factorail(2));


//O(n)