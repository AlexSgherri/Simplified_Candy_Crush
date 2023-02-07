export const formulaForColumnOfFour = (boardSize: number) => 
boardSize * boardSize - (boardSize + boardSize + boardSize) - 1

export const formulaForColumnOfThree = (boardSize: number) => 
boardSize * boardSize - (boardSize + boardSize) - 1

export const formulaForMoveBelow = (boardSize: number) => boardSize * boardSize - boardSize - 1

export const generateInvalidMoves = (
    boardSize: number,
    isFour: boolean = false
) => {
    const invalidMove : Array<number> =[];
    for (let i: number = boardSize; i <= boardSize * boardSize; i += boardSize){
        if(isFour) invalidMove.push(i-3);
        invalidMove.push(i - 2);
        invalidMove.push(i - 1);
    }
    return invalidMove
}