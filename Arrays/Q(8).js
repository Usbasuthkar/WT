const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateProduct(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}

rl.question('Enter an array (comma-separated): ', (input) => {
    const array = input.split(',').map(item => parseFloat(item.trim()));

    const product = calculateProduct(array);

    console.log('Product of all elements:', product);
    rl.close();
});
