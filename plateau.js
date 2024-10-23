const gameBoard = document.getElementById('game-board');

for (let row = 0; row < 11; row++) {
    for (let col = 0; col < 11; col++) {
        const cell = document.createElement('div');

        if (row === 0 || row === 10 || col === 0 || col === 10) {
            cell.classList.add('border-outer');
            cell.textContent = `${row},${col}`;
            cell.style.width = '100%';
            cell.style.height = '100%';
            if (row === 0) {
                cell.id = 'case'+(20+col);
            }
            else if (row === 10) {
                cell.id = 'case'+(10-col);
            }
            else if (col === 0) {
                cell.id = 'case'+(10+10-row);
            }
            else {
                cell.id = 'case'+(30+row);
            }
            cell.innerHTML+= "<br>"+cell.id

        } else {
            cell.classList.add('hidden');
        }

        gameBoard.appendChild(cell);
    }
}

var plateau = new Plateau([],[]);

/*
function testWait(){
    console.log("Executed now");
    setTimeout(function() {
        console.log("Executed after 1 second");
    }, 1000);
}
    */