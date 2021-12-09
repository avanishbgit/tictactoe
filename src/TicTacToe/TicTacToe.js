import React, { useState } from 'react';
import './TicTacToe.css';

class Cell extends React.Component {
    render(){return <td onClick={()=> this.handleClick(this.props.num)}><h2>{this.state.cells[this.props.num]}</h2></td>}
}

class TicTacToe extends React.Component {
    constructor(props) {
        super(props)
        this.state= {turn: 'X', cells: Array(9).fill(''), winner: null, gamest: true, draw: false}
    }
    // const [turn, setTurn] = useState('X')
    // const [cells, setCells] = useState(Array(9).fill(''));
    // const [winner, setWinner] = useState();
    // const [gamest, setGamest] = useState(true);
    // const [draw, setDraw] = useState(false);
    
    handleClick(num) {
        if (!this.state.gamest) return;
        if (this.state.cells[num]==='X' || this.state.cells[num]==='O') return;
        let squares = [...this.state.cells];

        //alert("Cell "+num)
        if (this.state.turn==='X') {
            squares[num]='X'
            this.setState({ turn: 'O' });
        }
        else {
            squares[num]='O' 
            this.setState({ turn: 'X' })
        }
        this.setState({ cells: squares })
        this.checkWin(squares)
        this.checkDraw(squares)
        //console.log(squares)
    }

    checkDraw(squares) {
        if (!this.state.gamest) return;
        for (let i in squares) {
            //console.log(cells[i]);
            if (squares[i]==='') { 
                console.log("in")
                return;
            }
            
        }
        console.log("sus");
        this.setState({ draw: true });
        this.setState({ gamest: false });
        this.setState({ winner: "No one" })
    }

    

    restart() {
        this.setState({ cells: Array(9).fill('') });
        this.setState({ winner: null });
        this.setState({ gamest: true });
    }
    checkWin(squares) {
        let condition = [[0,1,2],[3,4,5],[6,7,8],
                        [0,4,8],[2,4,6]
                        ,[0,3,6],[1,4,7],[2,5,8]];
        for (let i in condition) {
            //alert(squares[condition[i][0]])
            if (squares[condition[i][0]] !== '') {
                if (squares[condition[i][0]] === 'X' && squares[condition[i][1]] === 'X' && squares[condition[i][2]] === 'X') {
                    this.setState({ winner: 'X' });
                    //alert("X wins");
                    this.setState({ gamest: false });
                }
                else if (squares[condition[i][0]] === 'O' && squares[condition[i][1]] === 'O' && squares[condition[i][2]] === 'O') {
                    this.setState({ winner: 'O' });
                    //alert("O wins");
                    this.setState({ gamest: false });
                }
            }
        }
    }
    render() {
        return (<div className="container">
            {this.state.winner && (<h1>{this.state.winner} is the winner</h1>)}
                <table className="tbl">
                    <h2 className={this.state.turn}>Turn: {this.state.turn}</h2>
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
                <button onClick={()=>this.restart()}>New Game</button>
            </div>
    )
    }
}

export default TicTacToe
