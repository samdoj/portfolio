import React from 'react';

export default class TicTacToe extends React.Component
{
    render() {
        return (
            <iframe title = "Tic Tac Toe" src={'https://cors-anywhere.herokuapp.com/http://tictactoe.joedmasonsd.com'} frameBorder="0" style={{position:'absolute',bottom:'0', width:'100%', height:'90vh'}}/>
        )
    }
}
