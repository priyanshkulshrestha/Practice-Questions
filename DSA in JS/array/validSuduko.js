/**
 * @param {character[][]} board
 * @return {boolean}
 */

function checkRow(board, row){
    let m = new Map()
    for(let i=0;i<9;i++){
        if(m.get(board[row][i])){
            console.log("row",row, i, board[row][i])
            return false;
        }else{
            if(board[row][i] != ".")
            m.set(board[row][i], true)
        }
    }
    // console.log("row",row,m )
    return true
}
function checkColumn(board, col){
    let m = new Map()
    for(let i=0;i<9;i++){
        if(m.get(board[i][col])){
            console.log("col", i, col, board[i][col])
            return false;
        }else{
            if(board[i][col] != ".")
            m.set(board[i][col], true)
        }
    }
    // console.log("col",col,m )

    return true
}
function checkSquare(board, sq){
    let row = Math.floor(sq/3)*3;
    let col = (sq%3)*3;
    let m = new Map();
    for(let i=row; i<row+3;i++){
        for(let j=col; j<col+3;j++){
            if(m.get(board[i][j])){
                console.log("sq", i,j,board[i][j], m)
                return false;
            }else{
                if(board[i][j] != ".")
                    m.set(board[i][j], true)
            }
        }
    }
    console.log("sq",sq,m )

    return true
}

var isValidSudoku = function(board) {
    // for(let i=0;i<9;i++){
    //     if(!checkRow(board, i) || 
    //     !checkColumn(board, i) || 
    //     !checkSquare(board, i)){
    //         console.log(i)
    //         return false;
    //     }
    // }
    for(let i=0;i<9;i++){
        if(!checkRowSet(board, i) || 
        !checkColumnSet(board, i) || 
        !checkSquareSet(board, i)){
            console.log(i)
            return false;
        }
    }
    return true;
};


function checkRowSet(board, row){
    let s = new Set()
    for(let i=0;i<9;i++){
        if(board[row][i] != '.'){
            if(s.has(board[row][i])) return false
            s.add(board[row][i])
        }
    }
    // console.log("row",row,m )
    return true
}
function checkColumnSet(board, col){
    let s = new Set()
    for(let i=0;i<9;i++){
        if(board[i][col] != '.'){
            if(s.has(board[i][col])) return false
            s.add(board[i][col])
        }
    }
    // console.log("col",col,m )

    return true
}
function checkSquareSet(board, sq){
    let row = Math.floor(sq/3)*3;
    let col = (sq%3)*3;
    let s = new Set();
    for(let i=row; i<row+3;i++){
        for(let j=col; j<col+3;j++){
            if(board[i][j] != '.'){
                if(s.has(board[i][j])) return false
                s.add(board[i][j])
            }
        }
    }
    // console.log("sq",sq,m )

    return true
}