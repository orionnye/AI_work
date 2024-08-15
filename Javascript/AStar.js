function aStar(start, end, grid, heuristic) {
    const nodes = [];
    for (let y = 0; y < grid.length; y++) {
      nodes[y] = [];
      for (let x = 0; x < grid[y].length; x++) {
        nodes[y][x] = {
          x: x,
          y: y,
          f: Infinity,
          g: Infinity,
          h: heuristic(x, y, end),
          parent: null
        };
      }
    }
  
    nodes[start.y][start.x].g = 0;
    nodes[start.y][start.x].f = nodes[start.y][start.x].h;
  
    const queue = [];
    queue.push(nodes[start.y][start.x]);
  
    while (queue.length > 0) {
      const node = queue.shift();
      if (node.x === end.x && node.y === end.y) {
        const path = [];
        let current = node;
        while (current !== null) {
          path.push({ x: current.x, y: current.y });
          current = current.parent;
        }
        return path.reverse();
      }
  
      for (const direction of DIRECTIONS) {
        const nextX = node.x + direction[0];
        const nextY = node.y + direction[1];
        if (nextX >= 0 && nextX < grid.length && nextY >= 0 && nextY < grid[nextX].length) {
          const nextNode = nodes[nextY][nextX];
          const tentativeG = node.g + grid[nextY][nextX];
          if (tentativeG < nextNode.g) {
            nextNode.g = tentativeG;
            nextNode.h = heuristic(nextX, nextY, end);
            nextNode.f = nextNode.g + nextNode.h;
            nextNode.parent = node;
            queue.push(nextNode);
          }
        }
      }
    }
  
    return null;
  }
  
  const DIRECTIONS = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1] // right
  ];
  
  // Example usage:
  const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
  ];
  
  const start = { x: 0, y: 0 };
  const end = { x: 2, y: 2 };
  
  const path = aStar(start, end, grid, (x, y, end) => {
    // Heuristic function: estimate the distance from (x, y) to the end
    return Math.abs(x - end.x) + Math.abs(y - end.y);
  });
  
  console.log(path);