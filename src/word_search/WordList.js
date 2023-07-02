import IterableInmutableList from "../global_classes/IterableInmutableList";
import Word from "./Word";

class WordList extends IterableInmutableList {

    constructor (words = []) {
        super([]);

        words.forEach(word => {
            try{
                this.add(word);
            }catch{}
        });
    }

    notFoundedWords() {
        return this.data.filter(word => !word.isFounded());
    }

    foundedWords() {
        return this.data.filter(word => word.isFounded());
    }
    
    setIsFounded(index, value) {
        if(!(index >= 0 && index < this.size()))
            throw new Error("Invalid index");
        
        if(this.data[index].isFounded)
            return;

        this.data[index].isFounded = value;
    }

    add (word) {
        if(this.has(word))
            throw new Error("This word is already on list");
        
        this.data.push(new Word(word));
    }

    sort (isAscending = false) {
        this.data.sort((wordA, wordB) => {
            const res = wordA.compare(wordB);
            return isAscending ? res*-1 : res;
        });
    }

    find (word) {
        const index = this.data.findIndex(w => {
            return word.equals(w);
        })

        return index;
    }

    dataType () {
        return 'object';
    }

    dataInstanceOf () {
        return Word;
    }
}

export default WordList;