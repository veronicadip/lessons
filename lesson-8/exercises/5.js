/**
 * Define a class Rectangle that receives two attributes
 * `width` and `height` in the constructor and has the following
 * methods:
 *
 * - A method `area` that calculates the area of the rectangle
 * - A method `isSquare` that returns a boolean indicating if all sides are equal
 *
 */

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    area() {
        console.log(this.width * this.height)
    }
    isSquare() {
        return this.width === this.height
    }
}


const rectangle1 = new Rectangle(10, 15);
rectangle1.area()
rectangle1.isSquare()