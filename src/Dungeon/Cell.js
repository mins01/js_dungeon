class Cell{
    type = null;
    passthroughable = null;
    events = null;

    static fromObject(obj){
        let instance = Object.assign(new this(),obj);
        return instance;
    }
    static fromType(type){
        let instance = new this();
        instance.setType(type);
        return instance;
    }

    constructor(){
        this.setType('void'); //void,gate,road,wall
        this.passthroughable = false;
        this.events = {};
    }
    setType(type){
        this.type = type;
    }
}

export default Cell;