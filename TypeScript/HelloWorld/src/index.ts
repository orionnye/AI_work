// class StringNA {
//     value: string = "";
//     constructor(length = 5) {
//         for (let i = 0; i < length; i++) {
//             this.value += (Math.floor(10 * (Math.sin(i)))).toString() + "_";
//         }
//     }
// }

// function findPeak(str: string): number {
//     const values = str.split("_").map(Number);
//     let peak = Math.max(...values);
//     return peak;
// }

// function offsetNegativeValues(str: string): string {
//     const values = str.split("_").map(Number);
//     const min = Math.min(...values);
//     if (min < 0) {
//         const offset = Math.abs(min);
//         for (let i = 0; i < values.length; i++) {
//             values[i] += offset;
//         }
//     }
//     return values.join("_");
// }

// function calculateAveragePeakDistance(str: string): number {
//     const values = str.split("_").map(Number);
//     const peak = findPeak(str);
//     const indices: Number[] = [];
//     for (let i: number = 0; i < values.length; i++) {
//         if (values[i] === peak) {
//             indices.push(i);
//         }
//     }
//     const distances = [];
//     for (let i = 0; i < indices.length - 1; i++) {
//         distances.push(indices[i + 1] - indices[i]);
//     }
//     const avgDistance = distances.reduce((a, b) => a + b, 0) / distances.length;
//     return avgDistance;
// }

// let sample = new StringNA(20);
// console.log("Original String: ", sample.value);

// // Find the peak value and offset the negative values
// const peak = findPeak(sample.value);
// console.log("Peak Value: ", peak);
// const offsetStr = offsetNegativeValues(sample.value);
// console.log("Offset String: ", offsetStr);

// // Calculate the average distance between the peaks
// const avgPeakDistance = calculateAveragePeakDistance(offsetStr);
// console.log("Average Peak Distance: ", avgPeakDistance);

// Create the canvas element
// const canvas = document.createElement('canvas');
// canvas.width = 800;
// canvas.height = 600;

// // Add the canvas to the page
// document.body.appendChild(canvas);

// // Get the 2D drawing context
// const context = canvas.getContext('webgl2');

// // Initialize the main game loop
// function main() {
//     // Your rendering code goes here

//     // Call the main loop again on the next frame
//     requestAnimationFrame(main);
// }

// // Start the main game loop
// main();
// Create the canvas element
const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;

// Add the canvas to the page
document.body.appendChild(canvas);

// Get the WebGL context
const gl = canvas.getContext('webgl2');

if (gl != null) {
    // Set the clear color
gl.clearColor(0.2, 0.2, 0.3, 1.0);

// Initialize the main game loop
function main() {
    // Clear the canvas
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Your rendering code goes here

    // Call the main loop again on the next frame
    requestAnimationFrame(main);
}

// Start the main game loop
main();
}

