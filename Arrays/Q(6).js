const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function moveArrayElement(arr, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= arr.length || toIndex < 0 || toIndex >= arr.length) {
        console.log('Invalid indices. Array element not moved.');
        return arr;
    }

    const element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);

    return arr;
}

rl.question('Enter the array (comma-separated): ', (arrayInput) => {
    const array = arrayInput.split(',').map(item => item.trim());

    rl.question('Enter the index of the element you want to move: ', (fromIndexInput) => {
        const fromIndex = parseInt(fromIndexInput, 10);

        rl.question('Enter the index where you want to move the element: ', (toIndexInput) => {
            const toIndex = parseInt(toIndexInput, 10);

            const modifiedArray = moveArrayElement(array, fromIndex, toIndex);
            console.log('Modified Array:', modifiedArray);
            rl.close();
        });
    });
});
