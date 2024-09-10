import Dungeon from "./Dungeon.js";
import BaseClass from "./BaseClass.js";

class Game extends BaseClass{
    dungeonIdx = -1;

    static fromObject(parent,obj){
        return super.fromObject(parent,obj,Dungeon);
    }

    constructor(parent=null){
        super(null)
        Object.defineProperty(this, 'dungeons', {
            value: this.childs,
            writable: true,
            enumerable: false,
            configurable: true
        });
        this.dungeons = this.childs;
        // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',this.dungeons);
        // console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',this.childs);
        this.dungeonIdx = -1;
        // this.dungeons = this.childs;
    }
    get dungeonIdx(){
        return this.childIdx;
    }
    set dungeonIdx(dungeonIdx){
        this.childIdx = dungeonIdx;
    }
    get dungeon(){
        return this.child;
    }
    set dungeon(dungeon){
        return this.child = dungeon
    }


    init(){
        if(this.dungeonIdx<0){
            this.dungeonIdx = this.dungeons.length-1
            if(this.dungeonIdx>-1){
                this.floorIdx = this.dungeon.floors.length-1
            }
        }
    }


    echo(msg){
        console.log('game.echo',msg);
        
    }

    start(){
        this.emit('start',{args:['GAME.start()']});
    }

    end(){
        this.emit('end',{args:['GAME.end()']});
    }

    drawMap(){

    }
    



}

export default Game;