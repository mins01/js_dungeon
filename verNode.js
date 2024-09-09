import Dunjeon from "./src/Dunjeon.js";
import Floor from "./src/Floor.js";
import Cell from "./src/Cell.js";


let tmp;

let dunjeon = new Dunjeon();
console.log(dunjeon);

let floor = new Floor();
floor.setSize(2,2);
dunjeon.floors.push(floor);

tmp = JSON.stringify(dunjeon);
console.log(tmp);


// let cell = new Cell(10,10);
// // console.log(cell);
// // console.log(Object.values(cell));
// tmp = JSON.stringify(cell);
// console.log(tmp);