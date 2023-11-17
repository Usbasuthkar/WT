const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isValidPattern(inputText) {
    // Use a regular expression to validate the pattern
    const pattern = /^[A-Z][a-z]*\d[a-z]*$/;
    if (pattern.test(inputText)) {
        console.log(inputText.match(pattern));
    } else {
        console.log('Invalid pattern. The first character should be uppercase, followed by lowercase letters, and exactly one digit in between.');
    }

}

rl.question('Enter a text to validate the pattern: ', (input) => {
    isValidPattern(input);
    rl.close();
});
