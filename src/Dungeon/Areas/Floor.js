import Cell from "./Cell.js";
import BaseArea from "./BaseArea.js";

class Floor extends BaseArea{
    w = null;
    h = null;
    startX = null;
    startY = null;

    static fromObject(parent,obj){
        return super.fromObject(parent,obj,Cell);
    }

    constructor(parent=null){
        super(parent)
        Object.defineProperty(this, 'cells', { value: this.childs, writable: true, enumerable: false, configurable: false });
        Object.defineProperty(this, 'cell', { enumerable: false, get(){return this.child},set(child){return this.child=child} });
        Object.defineProperty(this, 'cellIdx', { enumerable: false, get(){return this.childIdx},set(childIdx){return this.childIdx=childIdx} });
        this.w = 0;
        this.h = 0;
        this.startX = -1;
        this.startY = -1;
    }

    // get cellIdx(){
    //     return this.childIdx;
    // }
    // set cellIdx(cellIdx){
    //     this.childIdx = cellIdx;
    // }
    // get cell(){
    //     return this.child;
    // }
    // set cell(cell){
    //     return this.child = cell
    // }
    cellByXy(x,y){
        const idx = this.idxByXy(x,y);;
        return this.cells[idx]??null;
    }
    idxByXy(x,y){
        if(x<0 || x>=this.w){ return null}
        if(y<0 || y>=this.h){ return null}
        return (this.w*y)+x;
    }

    setSize(w,h){
        this.startX = 0;
        this.startY = 0;

        this.w = w;
        this.h = h;
        this.cells.length = this.w * this.h;
        this.cells.fill(null)
        this.cells.forEach((cell,k)=>{
            this.cells[k] = Cell.fromMode(this,'void');
        })
        // console.log(this);
    }
    setModeForCells(modes){
        this.cells.forEach((cell,idx)=>{
            const mode = modes[idx]??null;
            if(!mode) return;
            cell.setMode(mode);
        })
    }





}

export default Floor;