"use strict";
const player = (sign) => {
    const getSign = () => sign;
    return { getSign };
};

const gameboard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    const setBox = (i, sign) => {
        board[i] = sign;

    };
    const getBoard = () => board;
    return { getBoard, setBox };
})();

const displayController = (() => {
    //const gameboard = document.getElementById('board');
    const boxes = document.querySelectorAll('.box');
    const player1 = player("X");
    const player2 = player("O");
    let currentPlayer = player1;

    function togglePlayer() {
        if (currentPlayer === player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }

    };
    boxes.forEach((box, i) => {
        box.addEventListener("click", () => {
            gameboard.setBox(i, currentPlayer.getSign());
            box.innerHTML = currentPlayer.getSign();
            togglePlayer();
            console.log("hi");
        });
    });
})();