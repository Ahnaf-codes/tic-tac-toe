"use strict";
const player = (sign) => {
    const getSign = () => sign;
    return { getSign };
};

const gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
    const setBox = (i, sign) => {
        board[i] = sign;

    };
    const resetBox = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };
    const getBoard = () => board;
    return { getBoard, setBox, resetBox };
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
            if (box.classList.contains("clicked")) {
                return;
            } else {
                gameboard.setBox(i, currentPlayer.getSign());
                box.innerHTML = currentPlayer.getSign();
                box.classList.add("clicked");
                togglePlayer();
                console.log("hi");
            }
        });
    });
})();