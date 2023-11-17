const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findWordsStartWithTAndEndWithVowels(text) {
    const regex = /\bT\w*[aeiouAEIOU]\b/g;
    const matches = text.match(regex);
    if (matches) {
      console.log("Words starting with 'T' and ending with a vowel:");
      console.log(matches);
    } else {
      console.log("No matching words found.");
    }
}

rl.question('Enter a text: ', (input) => {
    findWordsStartWithTAndEndWithVowels(input);
    rl.close();
});
