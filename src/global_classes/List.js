import { cloneDeep } from 'lodash-es';

class List {

    data;

    constructor (data = []) {
        if(this.constructor == List)
            throw new Error("Abstract classes can't be instantiated.");

        if(!Array.isArray(data))
            throw new Error("Data isn't array");

        this.data = cloneDeep(data);
    }

    /**
     * Returns List length
     * 
     * @returns number
     */
    size () {
        return this.data.length;
    }

    /**
     * Returns if List is empty
     * 
     * @returns boolean
     */
    isEmpty () {
        return this.data.length === 0;
    }

    /**
     * Returns List data
     * 
     * @returns []
     */
    dump () {
        return this.data;
    }

    /**
     * Clear List items
     * 
     * @returns void
     */
    clear () {
        this.data = [];
    }

    /**
     * Adds item to List
     * 
     * @param {*} item 
     * @returns void
     */
    add (item) {
        if(!this.#checkItemType(item))
            throw new Error(`This item isn'tdata type ${type}`);

        this.data.push(item);
    }

    /**
     * Remove item from List
     * 
     * @param {*} index 
     * @returns {*}
     */
    remove (index) {
        if(!(index >= 0 && index < this.size()))
            throw new Error("Invalid index");

        return this.data.splice(index, 1)[0];
    }

    /**
     * Sort the list
     * 
     * @returns void
     */
    sort () {
        throw new Error("The sort() method has to be implemented");
    }

    /**
     * Returns if item, it's on List
     * 
     * @param {*} item
     * @returns boolean 
     */
    has (item) {
        return this.find(item) !== -1;
    }

    /**
     * Find item index in the list
     * 
     * @param {*} item
     * @returns number 
     */
    find (item) {
        return this.data.findIndex((value) => {
            return item === value;
        });
    }

    /**
     * Returns List Data Type
     * 
     * @returns string
     */
    dataType () {
        throw new Error("The dataType() method has to be implemented");
    }

    /**
     * Returns List Data Instance
     * 
     * @returns null | instance
     */
    dataInstanceOf () {
        throw new Error("The dataInstanceOf() method has to be implemented");
    }

    /**
     * Checks if item is the type and de instanceOf List
     * 
     * @param {*} item 
     * @returns boolean
     */
    #checkItemType(item) {
        const type = this.dataType();
        const instance = this.dataInstanceOf();

        if(typeof item != type && instance == null)
            return false;
        else if(typeof item == 'object' && instance != null && !(item instanceof instance))
            return false;

        return true;
    }
}

export default List;