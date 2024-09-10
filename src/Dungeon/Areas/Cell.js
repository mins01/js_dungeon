import BaseArea from "./BaseArea.js";
class Cell extends BaseArea{
    mode = null;
    passthroughable = null;
    

    

    static fromObject(parent,obj){
        return super.fromObject(parent,obj,null);
    }

    constructor(parent=null){
        super(parent)
        delete this.childs;
        delete this.childIdx;
        this.setMode('void'); //void,gate,road,wall
    }

    static fromMode(parent,mode){
        let instance = new this(parent);
        instance.setMode(mode);
        return instance;
    }

    setMode(mode){
        this.mode = mode;
        if(mode=='void'){
            this.passthroughable = false;
        }
        if(mode=='road'){
            this.passthroughable = true;
        }
    }
}

export default Cell;