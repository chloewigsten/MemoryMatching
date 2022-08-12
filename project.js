const gameBoard = document.querySelector('#gameboard');
const resetButton = document.querySelector('.reset');
const cells = document.querySelectorAll('.cell');
const matchCounter = document.querySelectorAll('.matches-left')
const startButton = document.querySelector('.start');
const timeTracker = document.querySelectorAll('timer');


startButton.addEventListener('click', begin)

    function begin(evt){
        cells.forEach(cell => {
            cell.style.color = "lightgrey"
        })}

resetButton.addEventListener('click', restart)

        function restart(evt){
            cells.forEach(cell => {
                cell.style.color = "lightgrey";
                cell.style.background = "lightgrey"
            })}


cells.forEach(cell => {
    cell.addEventListener('click', move)
})

function move(evt){
    if (evt.target.style.color = "lightgrey") {
        evt.target.style.color = "hotpink";
    }
}

cells.forEach(matchOne => {
    matchOne.addEventListener('click', compareOne)
})

function compareOne(e) {
        if (document.getElementById('cell1').style.color == "hotpink" && document.getElementById('cell9').style.color == "hotpink" && document.getElementById('cell1').innerHTML === "B" && document.getElementById('cell1').innerHTML === "B") {
            document.getElementById('cell1').style.background = "#9499C9";
            document.getElementById('cell9').style.background = "#9499C9";
            document.getElementById('cell1').style.color = "#ebd6fc";
            document.getElementById('cell9').style.color = "#ebd6fc";
    } 
}

cells.forEach(matchTwo => {
    matchTwo.addEventListener('click', compareTwo)
})

function compareTwo(e) {
        if (document.getElementById('cell2').style.color == "hotpink" && document.getElementById('cell6').style.color == "hotpink" && document.getElementById('cell2').innerHTML === "F" && document.getElementById('cell6').innerHTML === "F") {
            document.getElementById('cell2').style.background = "#9499C9";
            document.getElementById('cell6').style.background = "#9499C9";
            document.getElementById('cell2').style.color = "#ebd6fc";
            document.getElementById('cell6').style.color = "#ebd6fc";
    } 
}

cells.forEach(matchThree => {
    matchThree.addEventListener('click', compareThree)
})

function compareThree(e) {
        if (document.getElementById('cell3').style.color == "hotpink" && document.getElementById('cell8').style.color == "hotpink" && document.getElementById('cell3').innerHTML === "C" && document.getElementById('cell8').innerHTML=== "C") {
            document.getElementById('cell3').style.background = "#9499C9";
            document.getElementById('cell8').style.background = "#9499C9";
            document.getElementById('cell3').style.color = "#ebd6fc";
            document.getElementById('cell8').style.color = "#ebd6fc";
    } 
}

cells.forEach(matchFour => {
    matchFour.addEventListener('click', compareFour)
})

function compareFour(e) {
        if (document.getElementById('cell4').style.color == "hotpink" && document.getElementById('cell10').style.color == "hotpink" && document.getElementById('cell4').innerHTML === "E" && document.getElementById('cell10').innerHTML=== "E") {
            document.getElementById('cell4').style.background = "#9499C9";
            document.getElementById('cell10').style.background = "#9499C9";
            document.getElementById('cell4').style.color = "#ebd6fc";
            document.getElementById('cell10').style.color = "#ebd6fc";
    } 
}

cells.forEach(matchFive => {
    matchFive.addEventListener('click', compareFive)
})

function compareFive(e) {
        if (document.getElementById('cell5').style.color == "hotpink" && document.getElementById('cell12').style.color == "hotpink" && document.getElementById('cell5').innerHTML === "A" && document.getElementById('cell12').innerHTML=== "A") {
            document.getElementById('cell5').style.background = "#9499C9";
            document.getElementById('cell12').style.background = "#9499C9";
            document.getElementById('cell5').style.color = "#ebd6fc";
            document.getElementById('cell12').style.color = "#ebd6fc";
    } 
}

cells.forEach(matchSix => {
    matchSix.addEventListener('click', compareSix)
})

function compareSix(e) {
        if (document.getElementById('cell7').style.color == "hotpink" && document.getElementById('cell11').style.color == "hotpink" && document.getElementById('cell7').innerHTML === "D" && document.getElementById('cell11').innerHTML=== "D") {
            document.getElementById('cell7').style.background = "#9499C9";
            document.getElementById('cell11').style.background = "#9499C9";
            document.getElementById('cell7').style.color = "#ebd6fc";
            document.getElementById('cell11').style.color = "#ebd6fc";
    } 
}


matchCounter.forEach(countMatches => {
    countMatches.addEventListener("click", countDown)
})

function countDown(evt) {
    if (evt.target.innerHTML == "6") {
        evt.target.innerHTML = "5"
    } else if (evt.target.innerHTML == "5") {
        evt.target.innerHTML = "4"
    } else if (evt.target.innerHTML == "4") {
        evt.target.innerHTML = "3"
    } else if (evt.target.innerHTML == "3") {
        evt.target.innerHTML = "2"
    } else if (evt.target.innerHTML == "2") {
        evt.target.innerHTML = "1"
    } else if (evt.target.innerHTML == "1") {
        evt.target.innerHTML = "YOU WON!";
    } 
}