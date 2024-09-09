import Floor from "./Floor.js";
import BaseClass from "./BaseClass.js";

class Dungeon extends BaseClass{
    floors = null;
    game = null;

    static fromObject(parent,obj){
        return super.fromObject(parent,obj,Floor);
    }

    constructor(parent=null){
        super(parent)
        this.name = 'Undefined Dungeon'

        Object.defineProperty(this, 'game', {
            value: this.parent,          // better than `undefined`
            writable: true,    // important!
            enumerable: false, // could be omitted
            configurable: true // nice to have
        });
        Object.defineProperty(this, 'floors', {
            value: this.childs,          // better than `undefined`
            writable: true,    // important!
            enumerable: false, // could be omitted
            configurable: true // nice to have
        });
    }
    



}

export default Dungeon;