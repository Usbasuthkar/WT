const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findWordsStartingWithCapital(inputText) {
    const words = inputText.split(/\s+/);
    const matchingWords = words.filter(word => /^[A-Z].*/.test(word));
    return matchingWords;
}

rl.question('Enter a text: ', (input) => {
    const wordsStartingWithCapital = findWordsStartingWithCapital(input);
    if (wordsStartingWithCapital.length > 0) {
        console.log('Words starting with a capital letter:', wordsStartingWithCapital);
    } else {
        console.log('No words starting with a capital letter found.');
    }

    rl.close();
});
