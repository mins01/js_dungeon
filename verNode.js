import Game from "./src/Dungeon/Game.js";
import Dungeon from "./src/Dungeon/Areas/Dungeon.js";
import Floor from "./src/Dungeon/Areas/Floor.js";
// import Cell from "./src/Dungeon/Areas/Cell.js";
import Man from "./src/Dungeon/Characters/Man.js";


let tmp;

let game = new Game();
game.on('start',{fn:'echo',args:['게임 시작','HELLO']})
game.on('end',{fn:'echo',args:['게임 종료','BYE']})
let dungeon1 = new Dungeon(game);
// dungeon1.on('in',{fn:'echo',args:['던전 입장']})
// dungeon1.on('out',{fn:'echo',args:['던전 퇴장']})
let dungeon2 = new Dungeon(game);
let floor1 = new Floor(dungeon1);
// floor1.on('in',{fn:'echo',args:['층 입장']})
// floor1.on('out',{fn:'echo',args:['층 퇴장']})
let floor2 = new Floor(dungeon1);
floor1.setSize(5,5)
floor1.setModeForCells([
    'road','road','road','void','void',
    'void','void','road','void','void',
    'void','void','road','void','void',
    'void','void','road','void','void',
    'void','void','road','road','road',

])
let goalCell = floor1.cellByXy(4,4);
goalCell.on('in',{fn:"echo",args:['GOAL!']});
console.log('game',game);
// console.log('dungeon1',dungeon1);
// game.dungeon = dungeon1;
// game.dungeonIdx = 1;
// game.dungeon.floor = floor1;
game.dungeon.floorIdx = 0;
// console.log(JSON.stringify(game,null,2));
// process.exit(1);
// console.log(floor1);
let man1 = new Man(game);
// console.log(game);

game.start();
game.up();
game.down();
game.right();
game.right();
game.right();
game.down();
game.down();
game.down();
game.down();
game.right();
game.right();
console.log('#-----------------------------------------#');

// tmp = JSON.stringify(game,null,2);
// let game2 = Game.fromObject(null,JSON.parse(tmp));
// // console.log('game2',game2);
// // tmp = JSON.stringify(game2,null,2);
// // console.log(tmp);
// // console.log(floor1.game);

// // game2.init();
// // game2.childs = 'x';
// // console.log(game2.childs);
// console.log('현재 게임 이름: '+(game2??'ERROR'));
// console.log('현재 던전 이름: '+(game2?.dungeon??'ERROR'));
// console.log('현재 층 이름: '+(game2?.dungeon.floor??'ERROR'));
// console.log(game2);

// // game2.start();
// game2.drawFloor()
// // game2.start();
// // game2.end();


// let dungeon = new Dungeon();
// console.log(dungeon);
// dungeon.on('enter',{target:null,method:'log',args:['던전에 입장하였습니다.']})
// dungeon.emit('enter',{})
// tmp = JSON.stringify(dungeon);
// console.log('JSON',tmp);

// let floor = new Floor();
// floor.setSize(2,2);
// dungeon.floors.push(floor);

// tmp = JSON.stringify(dungeon);
// // console.log(tmp);

// let dungeon2 = Dungeon.fromObject(JSON.parse(tmp));
// console.log('dungeon2',dungeon2);
// console.log('floors[0]',dungeon2.floors[0]);
// // tmp = JSON.stringify(dungeon2);
// // console.log(tmp);

// let cell = new Cell(10,10);
// // console.log(cell);
// // console.log(Object.values(cell));
// tmp = JSON.stringify(cell);
// console.log(tmp);