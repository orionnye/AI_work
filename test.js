const fs = require('fs');

// message decryption, associates words with numbers and passes back words at the key locations
function decodeMessage(input, key) {
    const wordBank = input.trim().split('\n').reduce((map, line) => {
        const [number, word] = line.split(' ');
        // store the word behind it's paired number
        map.set(parseInt(number), word);
        return map;
    }, new Map());

    // retrieve words from the map
    const decodedWords = key.map(index => wordBank.get(index));

    // return the secret message!
    return decodedWords.join(' ');
}

// returns the numbers that are needed for the pyramid decryption
function getPyramidKey(input) {
    const lineLength = input.trim().split('\n').length;

    let key = [];
    let value = 1;
    let i = 1;

    // Generate pyramid values until cumulative sum exceeds lineLength
    while (value <= lineLength) {
        key.push(value);
        i++;
        value = (i * (i+1)) / 2;
    }
    return key;
}


// Specify the file path
const inputPath = './input.txt';
// Read from file
fs.promises.readFile(inputPath, 'utf8')
    .then(data => {
        // convert data into a string for the decode and getKey function
        let text = data.toString();
        // decode the text using a key
        let key = getPyramidKey(text);
        const decodedMessage = decodeMessage(text, key);
        console.log("Decoded message:", decodedMessage);
    })
    .catch(err => console.error(err));

// DESCRIPTION:
    // I have 3 functions built here
    // getPyramidKey:
        // Uses a formula for triangular numbers to return keys that don't exceed line value (assumes input will not include numbers exceeding line total).
    // decodeMessage:
        // breaks input into seperate lines, creates a map of words stored under their paired number, uses key to retrieve words in their desired order
    // readFile: 
        // reads data at the file location specified and converts it into a string.