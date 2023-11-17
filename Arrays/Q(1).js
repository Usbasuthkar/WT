const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMostFrequentItem(arr) {
    if (arr.length === 0) {
        return null;
    }
    const itemFrequency = {};
    arr.forEach(function (item) {
        if (itemFrequency[item]) {
            itemFrequency[item]++;
        } else {
            itemFrequency[item] = 1;
        }
    });
    let mostFrequentItem = arr[0]; // Initialize the most frequent item with the first element
    let highestFrequency = itemFrequency[arr[0]]; // Initialize the highest frequency
    for (const item in itemFrequency) {
        if (itemFrequency[item] > highestFrequency) {
            mostFrequentItem = item;
            highestFrequency = itemFrequency[item];
        }
    }
    return mostFrequentItem;
}

rl.question('Enter the array (comma-separated): ', (input) => {
    const array = input.split(',').map(item => parseInt(item.trim(), 10));
    const mostFrequent = findMostFrequentItem(array);
    console.log(`The most frequent item in the array is: ${mostFrequent}`);
    rl.close();
});
