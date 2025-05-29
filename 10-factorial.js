// 10-factorial.js

function factorial(n) {
    // If n is 0 or 1, factorial is 1 (base case)
    if (n <= 1) return 1;
    // Recursive call
    return n * factorial(n - 1);
  }
  
  // Get the first argument and convert it to an integer
  const arg = parseInt(process.argv[2], 10);
  
  // If arg is NaN, treat as 0 (print 1)
  if (isNaN(arg)) {
    console.log(1);
  } else {
    console.log(factorial(arg));
  }
  