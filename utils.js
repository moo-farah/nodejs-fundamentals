function generateRandomNumber() {
  return Math.floor(Math.random() * (100)) + 1;
}

function sum(a, b) {
  return a + b;
}


module.exports = {
  generateRandomNumber,
  sum
};