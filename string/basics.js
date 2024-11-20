function replaceWithNthChar(str, n) {
    let result = ""; // Initialize an empty result string

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char >= 'a' && char <= 'z') { // Lowercase letters
            let newCharCode = ((char.charCodeAt(0) - 97 + n) % 26) + 97;
            result += String.fromCharCode(newCharCode);
        } else if (char >= 'A' && char <= 'Z') { // Uppercase letters
            let newCharCode = ((char.charCodeAt(0) - 65 + n) % 26) + 65;
            result += String.fromCharCode(newCharCode);
        } else {
            result += char; // Non-alphabet characters remain unchanged
        }
    }

    return result;
}

// Example
console.log(replaceWithNthChar("Hello World!", 2)); // "Jgnnq Yqtnf!"
