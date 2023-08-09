console.log("hello");


const board = Array(9).fill(null);


const play = (clickedId) => {
    const playerSpan = document.querySelector('#player')

    board[clickedId] = playerSpan.innerText

    if (playerSpan.innerText === "X") {
        playerSpan.innerText = "O"
    } else {
        playerSpan.innerText = "X"
    }

    let clickedElement = document.getElementById(clickedId)
    clickedElement.innerText = playerSpan.innerText;

    const winner = calculateWinner()
    if (winner) {
        alert(`You're is the winner!`)
    }

    const isBoardFull = board.every((square) => square !== null)
    if (isBoardFull) {
        alert("Cat's game. there is no winner!")
    }

};

function calculateWinner() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 6],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (const line of lines) {
        const [a, b, c] = line
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]
        }
    }
};






