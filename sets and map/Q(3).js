const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function logSetElements(stringsSet) {
    for (const str of stringsSet) {
        console.log(str);
    }
}

rl.question('Enter a set of strings (comma-separated): ', (input) => {
    const inputArray = input.split(',').map(item => item.trim());
    const mySet = new Set(inputArray);

    console.log('Logging the elements of the set:');
    logSetElements(mySet);

    rl.close();
});
