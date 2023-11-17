const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countNamesStartingWithN(names, callback) {
  const filteredNames = names.filter(name => name.startsWith('N'));
  const count = filteredNames.length;
  callback(filteredNames, count);
}

function displayResults(filteredNames, count) {
  console.log(`Student names starting with 'N': ${filteredNames.join(', ')}`);
  console.log(`Total count: ${count}`);
  rl.close();
}

rl.question('Enter student names separated by a space: ', (input) => {
  const studentNames = input.split(' ');
  setTimeout(() => {
    countNamesStartingWithN(studentNames, displayResults);
  }, 1000); // Add a delay of 1 second (1000 milliseconds) before processing the input
});
