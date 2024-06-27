export class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.show = false; //Indicate if the cell is visible
        this.value = null; //Value of the cell (X, O or null)
    }

    Show() {
        this.show = true;
    }
    
    Select(value){
        this.value = value;
    }
}
