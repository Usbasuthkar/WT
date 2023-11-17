const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sendGreeting(name, callback) {
  const greeting = `Hello, ${name}!`;
  callback(greeting);
}

function handleGreeting(message) {
  console.log(message);
  rl.close();
}

function sendGreetingsToPeople(names, callback) {
  names.map((name) => {
    sendGreeting(name, callback);
  });
}

rl.question('Enter names separated by a space: ', (input) => {
  const names = input.split(' ');
  sendGreetingsToPeople(names, handleGreeting);
});
