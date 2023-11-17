const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function squareElements(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i]; // Square the element
    }
    return arr;
  }
  rl.question('Enter an array (comma-separated): ', (input) => {
    const array = input.split(',').map(item => parseFloat(item.trim()));
    const squaredArray = squareElements(array);
    console.log("Squared Array:", squaredArray);
    rl.close();
});