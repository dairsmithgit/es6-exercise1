// 3 general scenarios to remember:
//  1. props set from construcotr params
//  2. props not set from constructor prams, start with specific value
//  3. props set from optional constructor params, start with specific default value if not passed to constructor

class Room {
    constructor(name, length, width) {
        this.name = name;
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
    getPerimeter() {
        return (this.length * 2) + (this.width * 2);
    }
}

let room1 = new Room("Sun", 30, 20);
let room2 = new Room("Green", 15, 20);

console.log(room1);
console.log(room1.getArea());
console.log(room1.getPerimeter());

console.log(room2);
console.log(room2.getArea());
console.log(room2.getPerimeter());

