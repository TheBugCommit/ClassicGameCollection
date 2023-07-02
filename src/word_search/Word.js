import Point from "./Point";

const MIN_WORD_LEN = 3;

class Word {
    #word; #startPoint; #endPoint; #isFounded;

    constructor (word, startPoint = null, endPoint = null, isFounded = false) {
        if(!word || word.length < MIN_WORD_LEN)
            throw new Error(`Word length, must be ${MIN_WORD_LEN} at less`);

        this.#word = word.toUpperCase();
        this.#startPoint = startPoint;
        this.#endPoint = endPoint;
        this.#isFounded = isFounded;
    }

    value () {
        return this.#word;
    }

    length () {
        return this.value().length;
    }

    startPoint () {
        return this.#startPoint;
    }

    endPoint () {
        return this.#endPoint;
    }

    setStartPoint (point) {
        if(!(point instanceof Point))
            throw new Error(`${typeof point}, isn't instanceof Point`);

        this.#startPoint = point;
    }

    setEndPoint (point) {
        if(!(point instanceof Point))
            throw new Error(`${typeof point}, isn't instanceof Point`);

        this.#endPoint = point;
    }

    isFounded () {
        return this.#isFounded;
    }

    static get minWordLen() { return MIN_WORD_LEN; }

    equals(word) {
        if(!(word instanceof Word))
            throw new Error(`Can't compare Word with ${typeof word}`);

        return this.value() == word.value() && this.startPoint().equals(word.startPoint()) 
                && this.endPoint().equals(word.endPoint()); 
    }

    compare(word) {
        if(!(word instanceof Word))
            throw new Error(`Can't compare Word with ${typeof word}`);

        return this.value() > word.value() ? -1 : 
                this.value() < word.value() ? 1 : 0;
    }
}

export default Word;