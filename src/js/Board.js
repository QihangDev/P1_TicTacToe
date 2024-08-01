import { Cell } from './Cell.js';

export class Board {
    constructor(x,y){
        this.cells = new Map();
        this.CreateBoard(x,y);
    }

    CreateBoard(x,y){
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                this.cells.set(`${i},${j}`, new Cell(i,j));
            }
        }
    }

    SelectCell(x,y,value){
        this.cells.get(`${x},${y}`).Show();
        this.cells.get(`${x},${y}`).Select(value);
    }

    IsGameOver(){
        //Check if game is over to validate the winner
    }
}