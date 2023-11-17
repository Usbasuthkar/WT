const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function swapCase(str) {
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === char.toUpperCase()) {
        result += char.toLowerCase();
      } else {
        result += char.toUpperCase();
      }
    }
  
    return result;
  }
  rl.question('Enter a string: ', (input) => {
    const swappedString = swapCase(input);

    console.log('String with swapped cases:', swappedString);
    rl.close();
});