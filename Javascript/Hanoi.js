var towers = {
    foo: 1,
    bar: 2,
    sam: 4,
    ple: 8,
  }
  
  function swapValues(towers) {
    // Swap all values in towers object
    for (var key in towers) {
      if (key !== 'foo') { // swap with 'foo'
        towers[key] = towers[key] + towers.foo; // Add value of 'foo' to key
        towers.foo = towers[key] - towers.foo; // Subtract new value for key from 'foo' to get original value for 'foo'
        towers[key] = towers[key] - towers.foo; // Subtract new value for 'foo' from key to get original value for key
      }
    }
  
    // return swapped towers object
    return towers;
  }
  
  console.log("Before:", towers);
  var swapTower = swapValues(towers);
  console.log("After:", swapTower);