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
            //cell.innerHTML = "";
        } else {
            if (row == 8 && col == 2) {
                cell.classList.add('emplacement-de');
                cell.style.width = '100%';
                cell.style.height = '100%';
                cell.onclick = function() {
                    jouerTour();
                }
                //cell.style.backgroundColor = 'red';
                console.log("emplacement de");
            }
            else{

                cell.classList.add('hidden');
            }
        }

        gameBoard.appendChild(cell);
    }
    
}

var plateau = new Plateau(cases,[]);
for (let i = 0; i < 40; i++) {
    console.log(plateau.cases[i].imgLink);
    document.getElementById('case'+i).style.backgroundImage = "url("+plateau.cases[i].imgLink+")";
    document.getElementById('case'+i).style.backgroundSize = 'cover';

}
var joueur1 = new Joueur('Joueur 1', 1);
var joueur2 = new Joueur('Joueur 2', 2);
let joueurs = [joueur1,joueur2]
var partie  = new Partie(joueurs,plateau)
/*
function testWait(){
    console.log("Executed now");
    setTimeout(function() {
        console.log("Executed after 1 second");
    }, 1000);
}
    */



let de = new Dé();
function jouerTour(){
    /*console.log(de.lancerEtAnimer());*/
    partie.jouerTour(de)

    
}