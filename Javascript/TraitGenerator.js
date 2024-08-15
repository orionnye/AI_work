class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get toString() {
        return this.x.toString() + this.y.toString();
    }
}

function scatteredPoints(size = 10) {
    let points = [];
    for (let i = 0; i < size; i++) {
        points.push(new Vector2(Math.random(), Math.random()));
    }
    return points;
}
function readPoints(points) {
    let readable = [];
    points.forEach(point => {
        readable.push(point.toString);
    });
    return readable;
}

let points = scatteredPoints(20);
console.log(readPoints(points));
console.log("Jabugah");