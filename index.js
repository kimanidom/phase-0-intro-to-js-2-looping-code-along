// Code your solutions in this file
function writeCards(names, event) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
  }

  return messages;
}

// Example usage:
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

// Example usage:
countDown(10);
