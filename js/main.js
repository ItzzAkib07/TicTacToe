import Game from "./game.js";
import GameView from "./gameView.js"

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click",()=>{
    onRestartClick();
})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile)=>{
    tile.addEventListener("click",()=>{
        onTileClicked(tile.dataset.index);
    })
})


//i here is index of tile clicked
function onTileClicked(i){

    //Make a move
    game.makeMove(i);

    //Update game board
    gameView.updateBoard(game);  
    
}

function onRestartClick(){
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);