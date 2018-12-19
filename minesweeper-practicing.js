board = {
    cells: genarateCells()
    };

Function genarateCells (size) {
    var cells = [];
    for (i = 0; i < cells.length; i++) {
        for (j = 0; j < cells.length; j++){
            cell = {
                row: i,
                col: j,
                isMine : Math.random() < 0.5,
                hidden: true,
                surroundingMines : 0
            }

         cells.push(cell)
        }
        return cells
    }
