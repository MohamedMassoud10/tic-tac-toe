let turnPlayer = document.querySelector(".turn")
let overLay = document.querySelector(".over-lay")
let wonPlayer = document.querySelector(".player")
let drawGame =document.querySelector(".title")
let reset = document.querySelector(".reload")
let draw = document.querySelector(".Draw")
reset.addEventListener("click", function () {
    location.reload()
})
draw.addEventListener("click", function () {
    location.reload()
})
let cells = [];
let game = document.querySelector(".game")
let turn = "X";
for (let i = 0; i < 9;i++ ) {
    cells.push(game.children[i])
}
function todraw(counter) {
     if (counter ==18) {
        drawGame.innerHTML=""
        drawGame.innerHTML = "Draw";
        overLay.style.display = "flex"
    }
}
function displayWiningOverLay(winner) {
    overLay.style.display = "flex"
    if (winner==="O") {
        wonPlayer.style.color = "chartreuse"
            wonPlayer.innerHTML = winner
    } else if(winner==="X"){
        wonPlayer.style.color = "aqua"
            wonPlayer.innerHTML = winner
    }

}
function gamePlay(turn) {
    let counter = 0;
    cells.forEach((ele) => {
        ele.onclick =function(){
            if (turn=="X" && ele.innerHTML=='') {
                ele.innerHTML = "X"
                ele.style.color = "aqua"
                turn = "O"
                turnPlayer.innerHTML = ""
                turnPlayer.innerHTML = "O"
                turnPlayer.style.color = "chartreuse"
                counter++
                console.log(counter)
            }
            else if (turn == "O" && ele.innerHTML == '') {
                ele.innerHTML = "O"
                ele.style.color = "chartreuse"
                ele.style.borderColor = "white"
                turn = "X"
                turnPlayer.innerHTML = ""
                turnPlayer.innerHTML = "X"
                turnPlayer.style.color = "aqua"
                counter++
                console.log(counter)
            }
            if (cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[0].innerHTML != "") {
                counter=2;
                displayWiningOverLay(cells[0].innerHTML) 
            } else if (cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[3].innerHTML != "") {
                counter=2;
                displayWiningOverLay(cells[3].innerHTML) 
        }else if (cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML && cells[6].innerHTML != "") {
            displayWiningOverLay(cells[6].innerHTML) 
            counter=2;
        }else if (cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[1].innerHTML != "") {
                    counter=2;
            displayWiningOverLay(cells[1].innerHTML)
            }
            else if (cells[6].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[2].innerHTML && cells[6].innerHTML != "") {
                counter=2;
                displayWiningOverLay(cells[6].innerHTML) 
        }else if (cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[0].innerHTML != "") {
                    counter=2;
            displayWiningOverLay(cells[0].innerHTML)
            }
            else if (cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[2].innerHTML != "") {
                counter=2;
                displayWiningOverLay(cells[2].innerHTML) 
            }
            else if (cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[0].innerHTML != "") {
                counter=2;
                displayWiningOverLay(cells[0].innerHTML) 
            }
//ifthegamedraw
            
        }
        counter++
        todraw(counter);
    }
    )
}
gamePlay(turn);