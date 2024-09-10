import Cell from "./Cell.js";
import BaseClass from "./BaseClass.js";

class Floor extends BaseClass{
    w = null;
    h = null;

    static fromObject(parent,obj){
        // return super.fromObject(parent,obj,Dungeon);
        return super.fromObject(parent,obj,null);
    }

    constructor(parent=null){
        super(parent)
        this.w = 0;
        this.h = 0;
        Object.defineProperty(this, 'dungeon', {
            value: this.parent,
            writable: true,
            enumerable: false,
            configurable: false
        });
        delete this.childs;

    }
    setSize(w,h){
        this.w = w;
        this.h = h;
        this.cells = new Array(this.w * this.h);
        this.cells.fill(null)
        this.cells.forEach((cell,k)=>{
            this.cells[k] = Cell.fromType('void');
        })
        // console.log(this.cells);
        
    }



}

export default Floor;