import BaseClass from "./BaseClass.js";
class Cell extends BaseClass{
    type = null;
    passthroughable = null;
    

    

    static fromObject(parent,obj){
        return super.fromObject(parent,obj,null);
    }
    
    constructor(parent=null){
        super(parent)
        delete this.childs
        this.setType('void'); //void,gate,road,wall
        this.passthroughable = false;
    }

    static fromType(type){
        let instance = new this();
        instance.setType(type);
        return instance;
    }

    setType(type){
        this.type = type;
    }
}

export default Cell;