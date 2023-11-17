const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findWordsWithLastVowel(text) {
    const regex = /\b\w{4}[aeiouAEIOU]\b/g;
const matches = text.match(regex);

if (matches) {
  console.log("5-letter words ending with a vowel:");
  console.log(matches);
} else {
  console.log("No matching words found.");
}
}

rl.question('Enter a text: ', (input) => {
    findWordsWithLastVowel(input);
    rl.close();
});
