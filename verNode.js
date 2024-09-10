import Game from "./src/Dungeon/Game.js";
import Dungeon from "./src/Dungeon/Dungeon.js";
import Floor from "./src/Dungeon/Floor.js";
import Cell from "./src/Dungeon/Cell.js";


let tmp;

let game = new Game();
game.on('start',{fn:'echo',args:['게임 시작','HELLO']})
let dungeon1 = new Dungeon(game);
let dungeon2 = new Dungeon(game);
let floor1 = new Floor(dungeon1);
let floor2 = new Floor(dungeon1);
floor1.setSize(2,2)
console.log('game',game);
// console.log('dungeon1',dungeon1);
game.dungeon = dungeon1;
game.dungeon.floor = floor1;
// game.dungeon.floorIdx = 0;
// console.log(JSON.stringify(game,null,2));
// process.exit(1);
// console.log(floor1);

// game.start();
console.log('#-----------------------------------------#');

tmp = JSON.stringify(game,null,2);
let game2 = Game.fromObject(null,JSON.parse(tmp));
// console.log('game2',game2);
// tmp = JSON.stringify(game2,null,2);
// console.log(tmp);
// console.log(floor1.game);

// game2.init();
// game2.childs = 'x';
// console.log(game2.childs);
console.log('현재 게임 이름: '+(game2??'ERROR'));
console.log('현재 던전 이름: '+(game2?.dungeon??'ERROR'));
console.log('현재 층 이름: '+(game2?.dungeon.floor??'ERROR'));
console.log(game2);

game2.start();
// game2.drawFloor()
// game2.start();
// game2.end();


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