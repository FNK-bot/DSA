function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    };
    return reversedStr;
}

console.log(reverseString('hello'))

function isPal(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false
        }
    }
    return true
}

console.log(isPal('das'))

function isPalindrome(str) {
    return str === reverseString(str);
};

console.log(isPalindrome('mom'))