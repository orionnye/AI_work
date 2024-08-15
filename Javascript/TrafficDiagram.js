// let trafficflow = [];
// let width = 10;
// let height = 10;

// // iterate through dimensions
// for (let i = 0 ; i < height; i++) {
//     for (let j = 0; j < width; j++) {
//         trafficflow.push(0);
//     }
// }

// let controlPoints = 5;
// for (let i = 0; i < controlPoints; i++) {
//     let x = Math.floor(Math.random()*width);
//     let y = Math.floor(Math.random()*height);

//     let index = (y-1)*width+x;
//     trafficflow[index] = "a";
// }

// console.log(trafficflow)

// Create a class that stores traversal cost or has a traversal cost of infinity(obstacle)

// Create several checkpoints

let trafficFlow = [];
let width = 8;
let height = 8;

// Initialize the grid with all zeroes
for (let i = 0; i < height; i++) {
  trafficFlow[i] = [];
  for (let j = 0; j < width; j++) {
    trafficFlow[i][j] = 0;
  }
}

// Generate random start and destination points
let startX = Math.floor(Math.random() * width);
let startY = Math.floor(Math.random() * height);

let destX = Math.floor(Math.random() * width);
let destY = Math.floor(Math.random() * height);

console.log(`Start Point: (${startX}, ${startY})`);
console.log(`Destination Point: (${destX}, ${destY})`);

// Function to generate all possible routes between start and destination points
function findPath(x, y, destX, destY, trafficFlow) {
  let path = [];
  let stack = [[x, y]]; // Store the current position in the stack

  while (stack.length > 0) {
    let curr = stack.pop();

    // Mark the current position as visited
    trafficFlow[curr[1]][curr[0]]++;

    // If we've reached the destination, add the path to our result array
    if (curr[0] == destX && curr[1] == destY) {
      path = [...path, ...stack.reverse(), curr];
      break;
    }

    // Check all adjacent cells
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        // Skip if we're moving out of the grid or into a visited cell
        if (dx == 0 && dy == 0 || !trafficFlow[curr[1] + dy] || trafficFlow[curr[1] + dy][curr[0] + dx] > 0) continue;

        // Add the adjacent cell to the stack
        stack.push([curr[0] + dx, curr[1] + dy]);
      }
    }
  }

  // Return the path as an array of coordinates
  return path.map(([x, y]) => ({ x, y }));
}

// Generate all possible routes from start to destination
let routes = [];
let routesFromDestToStart = [];

routes.push(findPath(startX, startY, destX, destY, trafficFlow));
routesFromDestToStart.push(findPath(destX, destY, startX, startY, trafficFlow));

// Function to check for intersections between routes
function checkIntersections(routes, routesFromDestToStart) {
  let congestionPoints = 0;

  // Iterate over each route from start to destination
  routes.forEach((route) => {
    // Iterate over each route from destination to start
    routesFromDestToStart.forEach((routeFromDestToStart) => {
      // Check if any points in the two routes are the same
      route.forEach((point) => {
        if (routeFromDestToStart.includes(point)) {
          congestionPoints++;
        }
      });
    });
  });

  return congestionPoints;
}

// Calculate the congestion points
let congestionPoints = checkIntersections(routes, routesFromDestToStart);

// Print the calculated congestion points
console.log(`Congestion Points: ${congestionPoints}`);