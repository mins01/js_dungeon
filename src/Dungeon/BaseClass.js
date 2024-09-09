class BaseClass{
    id=null;
    name=null;
    parent = null;
    childs = null;
    onEvents = null;
    constructor(parent=null){
        Object.defineProperty(this, 'parent', {
            value: this.childs,          // better than `undefined`
            writable: true,    // important!
            enumerable: false, // could be omitted
            configurable: true // nice to have
        });
        Object.defineProperty(this, 'game', {
            value: parent?.game??this,          // better than `undefined`
            writable: false,    // important!
            enumerable: false, // could be omitted
            configurable: true // nice to have
        });
        this.parent = parent;
        this.onEvents = {}
        this.childs = [];

        if(this.parent && this.parent.childs){ // 부모의 자식으로 자동 추가
            this.parent.childs.push(this)
        }
        // console.log(this.constructor);
        
    }


    static fromObject(parent,obj,ChildClass){
        let instance = Object.assign(new this(parent),obj);
        instance.childs = [];
        if(ChildClass){
            
            obj.childs.forEach((child,k) => {
                ChildClass.fromObject(instance,child)
            });
        }
        return instance;
    }

    toJSON(){
        let skipKeys = ['parent']
        let obj = {}
        for (const [k, v] of Object.entries(this)) {
            // console.log(`${k}: ${v}`);
            if(!skipKeys.includes(k)){
                obj[k]=v; 
            }
        }
        return obj;
    }

    on(eventName,onEventData){
        // console.log('on',eventName,onEventData);
        this.onEvents[eventName] = onEventData;
    }
    emit(eventName,emitEventData){
        if(this.onEvents[eventName]){
            this.eventHandler(emitEventData,this.onEvents[eventName]);
        }
    }
    eventHandler(emitEventData,onEventData){
        const eventData = Object.assign(onEventData,emitEventData);
        // console.log('eventHandler',eventData);
        if(eventData.fn && this.game[eventData.fn]){
            this.game[eventData.fn](...(eventData.args??[]))
        }else{
            console.error('UNKOWN fn',eventData.fn??'NULL');
        }
    }
}

export default BaseClass;