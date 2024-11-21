function isHappyNumber(num) {
    if (num <= 0) return false;

    for (let a = 1; a * a <= num; a++) {
      for (let b = a; b * b <= num; b++) {
        if (a * a + b * b === num) {
          return true;
        }
      }
    }
    return false;
  }

  console.log(isHappyNumber(5));
  console.log(isHappyNumber(10));
  console.log(isHappyNumber(3));
  console.log(isHappyNumber(50));
  console.log(isHappyNumber(13));
  