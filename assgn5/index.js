// Function to calculate the perimeter of a rectangle
function calculatePerimeter(length, width) {
    const perimeter = 2 * (length + width);
    
    return perimeter;
}

// Example usage:
const length = 5; 
const width = 3;  

const result = calculatePerimeter(length, width);

console.log('The perimeter of the rectangle is:', result);
