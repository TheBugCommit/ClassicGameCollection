class Point {
    #x; #y;
    
    constructor (x, y) {
        this.#x = x;
        this.#y = y;
    }

    getX()  {
        return this.#x;
    }

    getY()  {
        return this.#y;
    }

    equals (point) {
        return point && point.#x === this.#x && point.#y === this.#y;
    }

    movePointTo(direction, xMaxLimit , yMaxLimit , xMinLimit = 0, yMinLimit = 0) {
        if(this.getX() + direction.#x < xMinLimit || this.getX() + direction.#x > xMaxLimit ||
            this.getY() + direction.#y < yMinLimit || this.getY() + direction.#y > yMaxLimit) {
            throw new Error("Point is out of bounds");
        }

        this.#x += direction.#x;
        this.#y += direction.#y;
    }

    toString() {
        return `{x: ${this.#x}, y: ${this.#y}}`;
    }
}

export default Point;