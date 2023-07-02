import InmutableList from "./InmutableList";

class IterableInmutableList extends InmutableList {
    constructor(data = []) {
        super(data);
        if (this.constructor == IterableInmutableList)
            throw new Error("Abstract classes can't be instantiated.");
    }

    [Symbol.iterator]() {
        let index = -1;
        const data = this.data;

        return {
            next: () => ({ value: data[++index], done: !(index in data) })
        };
    }
}

export default IterableInmutableList;