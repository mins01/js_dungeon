import Cell from "./Cell.js";
import BaseClass from "./BaseClass.js";

class Floor extends BaseClass{
    w = null;
    h = null;

    static fromObject(parent,obj){
        return super.fromObject(parent,obj,Cell);
    }

    constructor(parent=null){
        super(parent)
        Object.defineProperty(this, 'cells', {
            value: this.childs,
            writable: true,
            enumerable: false,
            configurable: false
        });
        this.w = 0;
        this.h = 0;
    }

    get cellIdx(){
        return this.childIdx;
    }
    set cellIdx(cellIdx){
        this.childIdx = cellIdx;
    }
    get cell(){
        return this.child;
    }
    set cell(cell){
        return this.child = cell
    }

    setSize(w,h){
        this.w = w;
        this.h = h;
        this.cells.length = this.w * this.h;
        this.cells.fill(null)
        this.cells.forEach((cell,k)=>{
            this.cells[k] = Cell.fromType('void');
        })
        // console.log(this);
        
    }



}

export default Floor;