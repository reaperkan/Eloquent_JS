// My Solution is wrong
let chessBoard = "";

for (let i = 0; i < 8; i++){
    for (let j = 0; j < 8; j++){
        if (j % 2 == 0){
            chessBoard = chessBoard.concat("#");
        }else{
            chessBoard = chessBoard.concat(" ");
        }
    }
    chessBoard = chessBoard.concat("\n");
}

console.log(chessBoard);

// Solution

chessBoard = "";
let size = 8;

for (let y = 0; y < size; y++){
    for (let x = 0; x < size; x++){
        if((x+y) % 2 == 0){
            chessBoard += " ";
        }else{
            chessBoard += "#";
        }
    }
    chessBoard += "\n";
}

console.log(chessBoard);