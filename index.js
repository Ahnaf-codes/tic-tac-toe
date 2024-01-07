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
    return { board, setBox };
})();

const displayController = (() => {

})();