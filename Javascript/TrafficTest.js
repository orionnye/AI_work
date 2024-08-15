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
function findPath(startX, startY, destX, destY, trafficFlow) {
    // Create a priority queue to hold the nodes to process
    let open = [];

    // Create a map to hold the distances for each node
    let distances = {};
    distances[startX + '-' + startY] = 0;

    // Create a map to hold the parents for each node
    let parents = {};

    // Add the start point to the open list
    open.push({
        x: startX,
        y: startY,
        f: 0, // The estimated total cost from start to node
        g: 0, // The cost from start to node
        h: estimateDistance(startX, startY, destX, destY), // The estimated cost from node to end
        parent: null
    });

    // While there are nodes to process
    while (open.length > 0) {
        // Select the node with the lowest f value
        let currentNode = open.shift();

        // Mark the node as closed
        trafficFlow[currentNode.y][currentNode.x]++;

        // If the node is the destination, return the path
        if (currentNode.x == destX && currentNode.y == destY) {
            // Reconstruct the path
            let path = [];
            while (currentNode.parent != null) {
                path.unshift({ x: currentNode.x, y: currentNode.y });
                currentNode = parents[currentNode.x + '-' + currentNode.y];
            }
            return path;
        }

        // Check the neighbors of the current node
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                if (x == 0 && y == 0 || // Skip this iteration if it's the same node
                    trafficFlow[currentNode.y + y] == null || // Skip this iteration if it's out of bounds
                    trafficFlow[currentNode.y + y][currentNode.x + x] == 0) { // Skip this iteration if it's already been visited
                    continue;
                }

                // Calculate the tentative g value for this neighbor
                let tentativeG = currentNode.g + 1;

                // Check if this is a better path to this neighbor
                if (!distances[currentNode.x + x + '-' + currentNode.y + y] || distances[currentNode.x + x + '-' + currentNode.y + y] > tentativeG) {
                    // Update the distances map
                    distances[currentNode.x + x + '-' + currentNode.y + y] = tentativeG;

                    // Update the parents map
                    parents[currentNode.x + x + '-' + currentNode.y + y] = {
                        x: currentNode.x,
                        y: currentNode.y
                    };

                    // Calculate the f value for this neighbor
                    let tentativeF = tentativeG + estimateDistance(currentNode.x + x, currentNode.y + y, destX, destY);

                    // Add the neighbor to the open list if it's not already there
                    if (!open.find((node) => node.x == currentNode.x + x && node.y == currentNode.y + y)) {
                        open.push({
                            x: currentNode.x + x,
                            y: currentNode.y + y,
                            f: tentativeF,
                            g: tentativeG,
                            h: estimateDistance(currentNode.x + x, currentNode.y + y, destX, destY),
                            parent: {
                                x: currentNode.x,
                                y: currentNode.y
                            }
                        });
                    }
                }
            }
        }
    }

    // No path was found
    return null;
}

// Function to estimate the distance from the start point to the end point
function estimateDistance(startX, startY, destX, destY) {
    return Math.abs(startX - destX) + Math.abs(startY - destY);
}

// Generate the path from the start to the destination
let route = findPath(startX, startY, destX, destY, trafficFlow);

// If no path was found, return an error
if (route == null) {
    console.log("No path was found from the start to the destination");
} else {
    // Print the traversal paths
    let routeString = route.map((point) => point.x + '-' + point.y).join(', ');
    console.log("Traversal Path: " + routeString);

    // Print the map
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (trafficFlow[y][x] == 0) {
                process.stdout.write('0 ');
            } else if (trafficFlow[y][x] == 1) {
                process.stdout.write('1 ');
            } else {
                process.stdout.write('X ');
            }
        }
        console.log();
    }

    // Calculate and print the congestion points
    let congestionPoints = 0;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (trafficFlow[y][x] > 1) {
                congestionPoints++;
            }
        }
    }
    console.log(`Congestion Points: ${congestionPoints}`);
}