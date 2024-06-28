import { Board } from './Board.js';

const ROW = 3;
const COLUMN = 3;
let board = null;

document.addEventListener("DOMContentLoaded", () => {
    init();
});

function init() {
    board = new Board(ROW,COLUMN);

    board.cells.forEach((cell) => {
        console.log(cell.x,cell.y);
    }); 

    ClickOnCell();
}

function ClickOnCell(){
    let cells = document.querySelectorAll(".item");
    cells.forEach((cell) => {
        cell.addEventListener("click", (e) => {
            console.log(e.target.getAttribute("value"));
        });
    });
}