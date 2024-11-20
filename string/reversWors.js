//reverse words

function reverse(word) {
    let reverserd = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverserd += word[i]
    }
    return reverserd
}

function main(str) {
    let word = ''
    let res = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            res += reverse(word) + ' '
            word = ''
        } else {
            word += str[i]
        }
    }
    res += reverse(word);
    console.log(res)
}

main('hello world')