
function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }
    return n === 0 ? a : b;
  }
  

  console.log(fibonacci(0));  
  console.log(fibonacci(9));  
  console.log(fibonacci(80)); 
  