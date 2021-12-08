import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
    const [turn, setTurn] = useState('X')
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();
    const [gamest, setGamest] = useState(true);
    const [draw, setDraw] = useState(false);
    const Cell = ({num}) => {
        return <td onClick={()=> handleClick(num)}><h2>{cells[num]}</h2></td>
    }
    const handleClick = (num) =>{
        if (!gamest && draw) return;
        if (cells[num]==='X' || cells[num]==='O') return;
        let squares = [...cells];

        //alert("Cell "+num)
        if (turn==='X') {
            squares[num]='X'
            setTurn('O');
        }
        else {
            squares[num]='O' 
            setTurn('X')
        }
        setCells(squares)
        checkWin(squares)
        checkDraw(squares)
        //console.log(squares)
    }

    const checkDraw = (squares) => {
        if (!gamest) return;
        for (let i in squares) {
            //console.log(cells[i]);
            if (squares[i]==='') { 
                console.log("in")
                return;
            }
            
        }
        console.log("sus");
        setDraw(true);
        setGamest(false);
        setWinner("No one")
    }

    const restart = () => {
        setCells(Array(9).fill(''));
        setWinner();
        setGamest(true);
    }
    const checkWin = (squares) => {
        let condition = [[0,1,2],[3,4,5],[6,7,8],
                        [0,4,8],[2,4,6]
                        ,[0,3,6],[1,4,7],[2,5,8]];
        for (let i in condition) {
            //alert(squares[condition[i][0]])
            if (squares[condition[i][0]] !== '') {
                if (squares[condition[i][0]] === 'X' && squares[condition[i][1]] === 'X' && squares[condition[i][2]] === 'X') {
                    setWinner('X');
                    //alert("X wins");
                    setGamest(false);
                }
                else if (squares[condition[i][0]] === 'O' && squares[condition[i][1]] === 'O' && squares[condition[i][2]] === 'O') {
                    setWinner('O');
                    //alert("O wins");
                    setGamest(false);
                }
            }
        }
    }
    return (<div className="container">
            {winner && (<h1>{winner} is the winner</h1>)}
                <table className="tbl">
                    <h2 className={turn}>Turn: {turn}</h2>
                    <tbody>
                        <tr>
                            <Cell num={0}/>
                            <Cell num={1}/>
                            <Cell num={2}/>
                        </tr>
                        <tr>
                            <Cell num={3}/>
                            <Cell num={4}/>
                            <Cell num={5}/>
                        </tr>
                        <tr>
                            <Cell num={6}/>
                            <Cell num={7}/>
                            <Cell num={8}/>
                        </tr>
                    </tbody>
                </table> <br/><br/>
                <button onClick={()=>restart()}>New Game</button>
            </div>
    )
}

export default TicTacToe