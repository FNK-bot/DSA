function frequency(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!obj[char]) obj[char] = 1;
        else obj[char]++
    }
    return obj
}

console.log(frequency('strr'))