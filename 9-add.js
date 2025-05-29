// Define the add function
function add(a, b) {
    return a + b;
  }
  
  // Get the two arguments and convert to integers
  const a = parseInt(process.argv[2]);
  const b = parseInt(process.argv[3]);
  
  // Calculate and print the sum
  console.log(add(a, b));
  