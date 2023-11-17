const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findWordsStartingAndEndingWithVowels(inputText) {
    const words = inputText.split(/\s+/);
    const matchingWords = words.filter(word => {
        return /^[aeiouAEIOU].*[aeiouAEIOU]$/i.test(word);
    });
    return matchingWords;
}

rl.question('Enter a text: ', (input) => {
    const wordsMatchingPattern = findWordsStartingAndEndingWithVowels(input);
    if (wordsMatchingPattern.length > 0) {
        console.log('Words that start and end with a vowel:');
        wordsMatchingPattern.forEach(word => {
            console.log(word);
        });
    } else {
        console.log('No matching words found.');
    }

    rl.close();
});
