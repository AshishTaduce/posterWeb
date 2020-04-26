// import React from "react";
// import Grid from "../Grid"
// import Square from "../Square"
// import MovesList from "../MoveList"

// class GameBoard extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             list: [Array(9).fill(null),],
//             isXNext : true,
//             status: 'Player X turn',
//         }
//     }

//     checkIfWon(squaresCopy){
//         // alert('Entered checker');
//         console.log(`Square are ${squaresCopy}`);
//         for(let offset = 0; offset < 7; offset+= 3){
//             if((squaresCopy[offset + 0] !== null) && (squaresCopy[offset + 0] === squaresCopy[offset + 1]) && (squaresCopy[offset + 1] === squaresCopy[offset + 2]))
//                 return true;
//         }
//         for(let offset = 0; offset < 3; offset++){
//             if((squaresCopy[offset] !== null) && (squaresCopy[offset] === squaresCopy[offset + 3]) && (squaresCopy[offset + 3]=== squaresCopy[offset + 6]))
//                 return true;
//         }
        
//         if((squaresCopy[4] !== null ) && (squaresCopy[4] === squaresCopy[0]) && (squaresCopy[0] === squaresCopy[8]))
//             return true;

//         if((squaresCopy[4] === squaresCopy[2]) && squaresCopy[2]=== squaresCopy[6] && squaresCopy[2] !== null)
//             return true;
        
//         return false;
//     }

//     handleClicks(index){
//         let squaresCopy = this.state.list[0];

//         if(squaresCopy[index] !== null) return;

//         squaresCopy[index] = this.state.isXNext ? 'X' : 'O';

//         this.state.list.unshift(squaresCopy);

//         this.setState({
//             isXNext: !this.state.isXNext,
//             status: !this.state.isXNext 
//                 ? 'Player X turn' : 'Player O turn',
//         });

//         if(this.checkIfWon(squaresCopy)){
//             this.setState({
//                 status: !this.state.isXNext 
//                     ? 'Player O Won' : 'Player X Won',
//             });
//             return;
//         }

//         if(squaresCopy.every(element => element !== null)){
//             this.setState({
//                 status: 'It is a draw.',
//             });
//             return;
//         };
//     }

//     getGridRow(offset) {
//         return (
//             <div className="grid-row">
//             <Square value={this.state.squares[offset + 0]} squarePressed ={() => this.handleClicks(offset + 0)}/>
//             <Square value={this.state.squares[offset + 1]} squarePressed ={() => this.handleClicks(offset + 1)}/>
//             <Square value={this.state.squares[offset + 2]} squarePressed ={() => this.handleClicks(offset + 2)}/>
//             </div>
//         );
//     }

//     render(){
//         return(
//             <div>
//                 <Grid board= {this.state.list[0]}
//                 handleClicks = {(index) => this.handleClicks(index)}
//                 />
//                 <MovesList 
//                 list = {this.state.list}/>
//             </div>
//             );
//     }
// }

// export default GameBoard;