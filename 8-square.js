// Get the first argument from command line
const size = parseInt(process.argv[2]);

// Check if size is a valid positive integer
if (!size || size <= 0) {
  console.log("Missing size");
} else {
  // Loop to print the square
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
