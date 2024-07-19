import { Board } from './Board.js';

const ROW = 3, COLUMN = 3;
const X = 'x', Y = 'y';
const PLAYER_ONE = "./src/img/X.png", PLAYER_TWO = "./src/img/O.png";
let board = null;
let counter;

document.addEventListener("DOMContentLoaded", () => {
    init();
});

function init() {
    board = new Board(ROW,COLUMN);
    counter = 0;
    ClickOnCell(board);
}

function ClickOnCell(){
    const cellsItem = ".item";

    let cells = document.querySelectorAll(cellsItem);

    cells.forEach((cell) => {
        cell.addEventListener("click", (e) => {
            counter++;
            board.SelectCell(e.target.getAttribute(X),e.target.getAttribute(Y),ChoosePlayer());
            AddResultDOM(e.target,ChoosePlayer());
            console.log(board.cells);
        });
    });
}

function ChoosePlayer(){
    let player = counter % 2 != 0 ? PLAYER_ONE : PLAYER_TWO;
    return player;
}

function AddResultDOM(cell,playerImage){
    let img = document.createElement("img");
    img.src = playerImage;

    cell.appendChild(img);
}