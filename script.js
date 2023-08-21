// Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to divide two numbers
  function divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Cannot divide by zero";
    }
  }
  
  // Get user input
  const num1 = parseFloat(prompt("Enter the first number: "));
  const num2 = parseFloat(prompt("Enter the second number: "));
  
  // Display menu and perform operation based on user choice
  console.log("Select an operation:");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  
  const choice = parseInt(prompt("Enter your choice (1/2/3/4):"));
  let result;
  switch (choice) {
    case 1:
      result = add(num1, num2);
      break;
    case 2:
      result = subtract(num1, num2);
      break;
    case 3:
      result = multiply(num1, num2);
      break;
    case 4:
      result = divide(num1, num2);
      break;
    default:
      result = "Invalid choice";
  }
  
  console.log("Result:", result);