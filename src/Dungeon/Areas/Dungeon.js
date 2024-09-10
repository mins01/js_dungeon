import Floor from "./Floor.js";
import BaseArea from "./BaseArea.js";

class Dungeon extends BaseArea{
    // floors = null;
    // game = null;/

    static fromObject(parent,obj){
        return super.fromObject(parent,obj,Floor);
    }

    // get floorIdx(){
    //     return this.childIdx;
    // }
    // set floorIdx(floorIdx){
    //     this.childIdx = floorIdx;
    // }
    // get floor(){
    //     return this.child;
    // }
    // set floor(floor){
    //     return this.child = floor
    // }

    constructor(parent=null){
        super(parent)
        Object.defineProperty(this, 'floors', { value: this.childs, writable: true, enumerable: false, configurable: false });
        Object.defineProperty(this, 'floor', { enumerable: false, get(){return this.child},set(child){return this.child=child} });
        Object.defineProperty(this, 'floorIdx', { enumerable: false, get(){return this.childIdx},set(childIdx){return this.childIdx=childIdx} });
    }
    

    init(){
        if(this.floorIdx < 0){
            this.floorIdx = this.floors.length-1
        }
    }

}

export default Dungeon;