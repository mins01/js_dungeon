import GameConfig from "../GameConfig.js";

class BaseCharacter{
    id=null;
    name=null;
    onEvents = null;
    constructor(parent=null){
        // const global = Object.getPrototypeOf(this.constructor).global;
        Object.defineProperty(this, 'parent', { value: parent, writable: false, enumerable: false, configurable: false });
        Object.defineProperty(this, 'root', { value: parent?.root??this, writable: false, enumerable: false, configurable: false });
        this.type = this.constructor.name;
        
        this.id = (GameConfig.idx);
        this.name = `Undefined ${this.type} - ${GameConfig.idx}`;
        GameConfig.idx++;
        // this.parent = parent;
        this.onEvents = {}

        if(this.parent && this.parent.characters){ // 부모의 자식으로 자동 추가
            this.parent.characters.push(this)
            if(this.parent.characterIdx < 0) this.parent.characterIdx = 0;

        }
        // console.log('cccccccccc',Object.getPrototypeOf(this.constructor).name,this.constructor.name);        
    }
    static fromObject(parent,obj){
        let instance = Object.assign(new this(parent),obj);
        return instance;
    }

    toString(){
        return `[${this.type}] ${this.name}`;
    }

    on(eventName,onEventData){
        // console.log('on',eventName,onEventData);
        this.onEvents[eventName] = onEventData;
    }
    emit(eventName,emitEventDataArgs=null){
        if(this.onEvents[eventName]){
            const onEventData = this.onEvents[eventName];
            const fn = onEventData.fn;
            const args = emitEventDataArgs??onEventData.args;
            this.eventHandler(fn,args);
        }
    }
    eventHandler(fn,args){
        if(fn && this.root[fn]){
            this.root[fn](args)
        }else{
            console.error('UNKOWN fn',fn??'NULL');
        }
    }
}

export default BaseCharacter;