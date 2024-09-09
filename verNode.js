import Game from "./src/Dungeon/Game.js";
import Dungeon from "./src/Dungeon/Dungeon.js";
import Floor from "./src/Dungeon/Floor.js";
import Cell from "./src/Dungeon/Cell.js";


let tmp;

let game = new Game();
game.dungeons.push()
let dungeon = new Dungeon(game);
// new Dungeon(game);
let floor1 = new Floor(dungeon);
floor1.setSize(2,2)
// console.log('game',game);
// console.log('dungeon',dungeon);
// console.log(JSON.stringify(game,null,2));
// process.exit(1);
tmp = JSON.stringify(game,null,2);
let game2 = Game.fromObject(null,JSON.parse(tmp));
// console.log('game2',game2);
// tmp = JSON.stringify(game2,null,2);
// console.log(tmp);
// console.log(floor1.game);

game2.init();
game2.start();
game2.end();


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