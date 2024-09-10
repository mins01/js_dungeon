import Dungeon from "./Areas/Dungeon.js";
import BaseArea from "./Areas/BaseArea.js";

class Game extends BaseArea{
    dungeonIdx = -1;
    characters = null;
    characterIdx = -1;
    // character = null; 
    x = -1;
    y = -1;

    static fromObject(parent,obj){
        return super.fromObject(parent,obj,Dungeon);
    }

    constructor(parent=null){
        super(null)
        Object.defineProperty(this, 'dungeons', { value: this.childs, writable: true, enumerable: false, configurable: true });
        Object.defineProperty(this, 'dungeon', { enumerable: false, get(){return this.child},set(child){return this.child=child} });
        Object.defineProperty(this, 'dungeonIdx', { enumerable: false, get(){return this.childIdx},set(childIdx){return this.childIdx=childIdx} });
        Object.defineProperty(this, 'floor', { enumerable: false, get(){return this.dungeon.floor;}});
        Object.defineProperty(this, 'floorIdx', { enumerable: false, get(){ return this.floor.idxByXy(this.x,this.y); }});
        Object.defineProperty(this, 'cell', { enumerable: false, get(){return this?.floor.cellByXy(this.x,this.y);}});

        Object.defineProperty(this, 'character', { enumerable: false, get(){return this.characters[this.characterIdx]??null;},set(character){
            let idx = this.characters.indexOf(character);
            if(idx<0){ throw new Error('Wrong character'); }
            this.characterIdx = idx
        } });
        this.characters = [];
    }

    init(){
        if(this.dungeonIdx<0){
            this.dungeonIdx = this.dungeons.length-1
            if(this.dungeonIdx>-1){
                this.floorIdx = this.dungeon.floors.length-1
            }
        }
    }

    drawFloor(){
        let rows = [];
        // console.log(this.dungeon.floor);
        const floor = this.floor;
        if(!floor) return;
        let floorIdx = this.floorIdx;
        // console.log(floorIdx);
        // console.log(this.x,this.y);
        
        for(let ih=0,mh=floor.h;ih<mh;ih++){
            let row = [];
            for(let iw=0,mw=floor.w;iw<mw;iw++){
                let idx = (ih*mw)+iw
                let cell = floor.cells[idx];
                // console.log(idx,cell);
                if(idx==floorIdx){
                    row.push(`[${cell.mode[0]}:🧑]`);
                }else{
                    row.push(`[${cell.mode[0]}:  ]`);
                }
                
            }
            rows.push(row.join(''));
        }
        console.log('#-------------------------------#');
        console.log(rows.join("\n"));
        console.log('#-------------------------------#');
    }

    echo(args1,args2){
        const args = args1.concat(args2);
        console.log('game.echo',...args);
        
    }

    start(){
        let dungeon = this?.dungeon??null;
        if(!dungeon){ throw new Error('Wrong dungeon'); }
        let floor = this.floor;
        if(!floor){ throw new Error('Wrong floor'); }
        this.x = floor.startX;
        this.y = floor.startY;

        let cell = this.cell;
        if(!cell){ throw new Error('Wrong cell'); }

        this.emit('start');
        this.in(this.character)
        dungeon.in(this.character)
        floor.in(this.character)
        cell.in(this.character)
        this.drawFloor()
        
    }

    end(){
        this.emit('end');
        this.drawFloor()
    }


    

    moveBy(byX,byY){
        const x = this.x+byX;
        const y = this.y+byY;
        const cell = this.floor.cellByXy(this.x+byX,this.y+byY);
        if(cell && cell.passthroughable){
            this.x = x;
            this.y = y
            this.drawFloor();
            cell.in(this.character);
        }else{
            this.root.echo([x,y,'이동할 수 없습니다.'])
        }
    }
    up()    { return this.moveBy(0,-1); }
    down()  { return this.moveBy(0,1); }
    right() { return this.moveBy(1,0); }
    left()  { return this.moveBy(-1,0); }
    
}

export default Game;