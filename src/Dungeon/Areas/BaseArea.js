import GameConfig from "../GameConfig.js";

class BaseArea{
    id=null;
    name=null;
    type='void';
    // parent = null;
    // child = null;
    childIdx = 0;
    childs = null;
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
        this.childs = new Array();

        if(this.parent && this.parent.childs){ // 부모의 자식으로 자동 추가
            this.parent.childs.push(this)
            if(this.parent.childIdx < 0) this.parent.childIdx = 0;
        }
        // console.log('cccccccccc',Object.getPrototypeOf(this.constructor).name,this.constructor.name);        

        // this.on('in',{fn:'echo',args:[this.toString()+' 입장']})
        // this.on('out',{fn:'echo',args:[this.toString()+' 입장']})
    }
    static fromObject(parent,obj,ChildClass){
        let objChilds = obj.childs??null;
        delete obj.childs; // .childs 는 이 밑에서 따로 자동 처리되므로 여기선 assign 에 추가 안되도록 삭제함.

        let instance = Object.assign(new this(parent),obj);

        if(ChildClass && objChilds){
            objChilds.forEach((child,k) => {
                ChildClass.fromObject(instance,child)
            });
        }
        return instance;
    }

    get child(){
        return this.childs[this.childIdx]??null;
    }
    set child(child){
        let idx = this.childs.indexOf(child);
        if(idx<0){ throw new Error('Wrong child'); }
        this.childIdx = idx
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
            this.eventHandler(fn,onEventData.args,emitEventDataArgs,);
        }
    }
    eventHandler(fn,onEventDataArgs,emitEventDataArgs){
        if(fn && this.root[fn]){
            this.root[fn](onEventDataArgs,emitEventDataArgs)
        }else{
            console.error('UNKOWN fn',fn??'NULL');
        }
    }


    in(character){
        this.emit('in',[character]);
        this.root.echo([`${character.toString()}(이/가) ${this.toString()}(에/게) 입장`])
    }
    out(character){
        this.emit('out'[character]);
        this.root.echo([`${character.toString()}(이/가) ${this.toString()}(에/게)서 퇴장`])
    }
}

export default BaseArea;