import Dungeon from "./Dungeon.js";
import BaseClass from "./BaseClass.js";

class Game extends BaseClass{

    static fromObject(parent,obj){
        return super.fromObject(parent,obj,Dungeon);
    }

    constructor(parent=null){
        super(null)
        this.name = 'Undefined Game'
        Object.defineProperty(this, 'dungeons', {
            value: this.childs,          // better than `undefined`
            writable: true,    // important!
            enumerable: false, // could be omitted
            configurable: true // nice to have
        });
        // this.dungeons = this.childs;
    }
    



}

export default Game;