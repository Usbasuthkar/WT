const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkIfElementExists(set, element) {
    return set.has(element);
}

rl.question('Enter a set of elements (comma-separated): ', (input) => {
    const elements = input.split(',').map(item => item.trim());
    const mySet = new Set(elements);

    rl.question('Enter the element you want to check: ', (elementToCheck) => {
        const isElementPresent = checkIfElementExists(mySet, elementToCheck);

        if (isElementPresent) {
            console.log(`"${elementToCheck}" is present in the set.`);
        } else {
            console.log(`"${elementToCheck}" is not present in the set.`);
        }

        rl.close();
    });
});
