const grid = document.getElementById("container");
let rows = document.getElementsByClassName("gridRows");
let cells = document.getElementsByClassName("cell");


function makeRows(rowNum){

    //Creates rows
    for (r = 0; r < rowNum; r++){
        let row = document.createElement("div");
        grid.appendChild(row).className = "gridRows";
    };
};

function makeColumns(cellNum){

    //Creates columns
    for (i = 0; i < rows.length; i++){
        for(j = 0; j < cellNum; j++){
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};

makeRows(16);
makeColumns(16);

let cell = document.getElementsByClassName("cell");
console.log(cell);
grid.addEventListener('mouseover', trail);
    


function trail(e) {
    e.target.classList.add('trail');
}

