//your JS code here. If required.
// Initial array
    const numbers = [1, 2, 3, 4];

    // Function to simulate delay
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Initial Promise that resolves after 3 seconds with the array [1, 2, 3, 4]
    function processArray() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(numbers);
        }, 3000);
      });
    }

    // Chaining Promises
    processArray()
      .then(async (arr) => {
        // First Transformation: Filter out odd numbers
        const evenNumbers = arr.filter(num => num % 2 === 0);

        // Simulate delay of 1 second before displaying even numbers
        await delay(1000);
        document.getElementById("output").textContent = evenNumbers.join(',');

        // Second Transformation: Multiply even numbers by 2
        const doubledNumbers = evenNumbers.map(num => num * 2);
 
        // Simulate delay of 2 seconds before displaying the doubled numbers
        await delay(2000);
        document.getElementById("output").textContent = doubledNumbers.join(',');
      });