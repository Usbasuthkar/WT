const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

rl.question('Enter an array (comma-separated) with duplicate elements: ', (input) => {
    const array = input.split(',').map(item => item.trim());

    const uniqueArray = removeDuplicates(array);

    console.log('Unique elements:', uniqueArray);
    rl.close();
});
