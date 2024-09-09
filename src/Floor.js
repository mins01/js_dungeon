import Cell from "./src/Cell.js";

class Floor{
    cells = null;
    w = null;
    h = null;
    constructor(){
        this.w = 0;
        this.h = 0;
        this.cells = [];
    }
    setSize(w,h){
        this.w = w;
        this.h = h;
        this.cells = new Array(this.w * this.h);
    }



}

export default Floor;