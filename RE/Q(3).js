const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findWordsWithSize(inputText, size) {
    const words = inputText.split(/\s+/);
    const matchingWords = words.filter(word => word.length === size);
    return matchingWords;
}

rl.question('Enter a text: ', (input) => {
    const size = 4; // Define the size you want to search for (e.g., 4)

    const matchingWords = findWordsWithSize(input, size);
    if (matchingWords.length > 0) {
        console.log(`Words of length ${size}:`, matchingWords);
    } else {
        console.log(`No words of length ${size} found.`);
    }

    rl.close();
});
