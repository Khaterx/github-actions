function greet(name) {
  return `Hello, ${name}!`;
}
module.exports = greet; // Export the greet function for use in other files

// If this file is run directly, execute the following code to print "Hello, World!"
if (require.main === module) {
  console.log(greet("World"));
}
