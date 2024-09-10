class Element{
    static fromObject(obj){
        let instance = Object.assign(new this(),obj);
        return instance;
    }
   

    constructor(){
        
    }
}

export default Element;