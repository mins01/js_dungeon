class Cell{
    type = null;
    passthroughable = null;
    constructor(){
        this.setType('void'); //void,gate,road,wall
        this.passthroughable = false;
    }
    setType(type){
        this.type = type;
    }
    
    // toJSON(){
    //     return 'x';
    // }

}

export default Cell;