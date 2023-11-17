const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; // Target not found in the array
}

rl.question('Enter a sorted array (comma-separated): ', (input) => {
    const array = input.split(',').map(item => parseInt(item.trim(), 10));
    rl.question('Enter the target element to search: ', (target) => {
        target = parseInt(target, 10);
        const index = binarySearch(array, target);
        if (index !== -1) {
            console.log(`Target element ${target} found at index: ${index}`);
        } else {
            console.log(`Target element ${target} not found in the array.`);
        }
        rl.close();
    });
});
