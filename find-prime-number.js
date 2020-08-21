const getPrimeNumber = orderNumber => {
  let counter = 0;
  let currentNumber = 1;

  while (counter < orderNumber) {
    currentNumber += 1;
    let isPrimary = true;
    for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
      if (currentNumber % i === 0) {
        isPrimary = false;
        break;
      }
    }
    if (isPrimary) {
      counter += 1;
    }
  }

  return currentNumber;
}

console.log('The 100th prime number is:', getPrimeNumber(100));