const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function removeDuplicates(arr) {
    const uniqueArray = [];
    for (let item of arr) {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    }
    return uniqueArray;
}

rl.question('Enter the array (comma-separated): ', (input) => {
    const array = input.split(',').map(item => item.trim());
    const uniqueArray = removeDuplicates(array);
    console.log('Array with duplicates removed:', uniqueArray);
    rl.close();
});
