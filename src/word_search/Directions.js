import Point from "./Point";

const Directions = Object.freeze({
    North: new Point(0, -1),
    South: new Point(0, 1),
    East:  new Point(1, 0),
    West:  new Point(-1, 0),
    NWest: new Point(-1, -1),
    NEast: new Point(1, -1),
    SEast: new Point(1, 1),
    SWest: new Point(-1, 1),
});

export default Directions;