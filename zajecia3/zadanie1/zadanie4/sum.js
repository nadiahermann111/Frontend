function sum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  const numbers = [30, 1, 4, 9, 19, 52];
  console.log(sum(numbers)); 
  