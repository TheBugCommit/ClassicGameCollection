import List from "./List";
import { cloneDeep } from 'lodash-es';

class InmutableList extends List {
    constructor(data = []) {
        super(data);
        if(this.constructor == InmutableList)
            throw new Error("Abstract classes can't be instantiated.");
    }

    /**
     * Returns dump List cloned data 
     * 
     * @returns []
     */
    dump () {
        return cloneDeep(this.data);
    }
}

export default InmutableList;