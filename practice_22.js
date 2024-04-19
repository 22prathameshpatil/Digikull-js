function isPrime(number) {
  if (number < 2) {
      return "Enter a number greater than 1";
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
          return false;
      }
  }
  return true; 
}

for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
      console.log(i);
  }
}