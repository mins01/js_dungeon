import Floor from "./Floor.js";
import BaseClass from "./BaseClass.js";

class Dungeon extends BaseClass{
    // floors = null;
    // game = null;/

    static fromObject(parent,obj){
        return super.fromObject(parent,obj,Floor);
    }

    get floorIdx(){
        return this.childIdx;
    }
    set floorIdx(floorIdx){
        this.childIdx = floorIdx;
    }
    get floor(){
        return this.child;
    }
    set floor(floor){
        return this.child = floor
    }

    constructor(parent=null){
        super(parent)
        Object.defineProperty(this, 'floors', {
            value: this.childs,
            writable: true,
            enumerable: false,
            configurable: false
        });
    }
    

    init(){
        if(this.floorIdx < 0){
            this.floorIdx = this.floors.length-1
        }
    }



}

export default Dungeon;