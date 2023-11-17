const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

rl.question('Enter an array to be sorted (comma-separated): ', (input) => {
    const array = input.split(',').map(item => parseInt(item.trim(), 10));
    const sortedArray = bubbleSort(array);
    console.log('Sorted array:', sortedArray);
    rl.close();
});
