import Directions from "./Directions";
import Point from "./Point";
import WordList from "./WordList";

import { random } from 'lodash-es';

const MAX_SIZE = 50;
const MIN_SIZE = 5;

class WordSearch {
    #size; #matrix; #wordList;

    constructor(size, words) {
        if (size < MIN_SIZE || size > MAX_SIZE) {
            throw new Error(`Size needed to be between ${MIN_SIZE} and ${MAX_SIZE}`);
        }

        this.#size = size;
        this.#matrix = this.#create();
        this.#wordList = new WordList(words);
    }

    static get maxSize() { return MAX_SIZE; }
    static get minSize() { return MIN_SIZE; }

    size() {
        return this.#size;
    }

    #clear() {
        this.#matrix = this.#create();
    }

    #create() {
        let array = [];
        for (let i = 0; i < this.#size; i++) {
            let aux = [];
            for (let j = 0; j < this.#size; j++) {
                aux.push(null);
            }
            array.push(aux);
        }

        return array;
    }

    render() {
        return new Promise((resolve, reject) => {
            try {
                this.#clear();

                for (const word of this.#wordList)
                    this.#appendWord(word);

                resolve("WordSearch succefully rendered");
            } catch (error) {
                reject(error);
            }
        });
    }

    #appendWord(word) {
        let point, direction, i = 0;

        do {
            const randX = random(this.size() - 1);
            const randY = random(this.size() - 1);

            point = new Point(randX, randY);
            direction = random(Object.keys(Directions).length);
            i++;
        } while (!this.#canAppendWord(word, point, direction) && i < 50);

        let startPoint = new Point(point.getX(), point.getY());
        let endPoint = new Point(point.getY(), point.getY());

        console.log(point, endPoint, startPoint)

        for (let i = 0; i < word.length(); i++) {
            this.#matrix[endPoint.getX()][endPoint.getY()] = word.value().charAt(i);

            if (i < word.length() - 1)
                endPoint.movePointTo(direction, this.size(), this.size());
        }

        word.setStartPoint(startPoint);
        word.setEndPoint(endPoint);
    }

    #canAppendWord(word, point, direction) {
        let canAppend = true;
        let i = 0;

        while (i < word.length() && canAppend) {
            const cellValue = this.#matrix[point.getX()][point.getY()];
            const wordChar = word.value().charAt(i);

            canAppend = cellValue == null || (cellValue != null && cellValue == wordChar);

            try{
                point.movePointTo(direction, this.size(), this.size());
            }catch(error) {
                canAppend = false;
            }

            i++;
        }

        return canAppend;
    }
}

export default WordSearch;

