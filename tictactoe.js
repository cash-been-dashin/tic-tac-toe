
// Create board
var board = new Array(9)

// Create event listeners
document.getElementById("0").addEventListener("click", function(){ tictac(0) })
document.getElementById("1").addEventListener("click", function(){ tictac(1) })
document.getElementById("2").addEventListener("click", function(){ tictac(2) })
document.getElementById("3").addEventListener("click", function(){ tictac(3) })
document.getElementById("4").addEventListener("click", function(){ tictac(4) })
document.getElementById("5").addEventListener("click", function(){ tictac(5) })
document.getElementById("6").addEventListener("click", function(){ tictac(6) })
document.getElementById("7").addEventListener("click", function(){ tictac(7) })
document.getElementById("8").addEventListener("click", function(){ tictac(8) })

// Set initial turn
var turn = 1

function tictac(cell) {
    if (board[cell] == undefined) {
       
        if (turn == 1) {
            board[cell]="x"
            document.getElementById(cell).innerHTML = "x"
            turn = 2
        } else { 
            board[cell]="o"
            document.getElementById(cell).innerHTML = "o"
            turn = 1
        }
   
   }
    console.log(board[cell])
    console.log(board)
}
