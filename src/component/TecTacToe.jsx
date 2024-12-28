import useTicTaCToe from "../hooks/tic-tac-toe";



const TicTacToe = () => {

 const {board,resetGame,getStatusMsg,handelClik} = useTicTaCToe();


  return (
    <div className="game">
      <div className="status">
        {getStatusMsg()}
        <button className="rest" onClick={resetGame}>Reset Game</button>
      </div>
      <div className="board">
        {board.map((b,index) => (
          <button 
          key={index} 
          className="cell" 
          onClick={()=>handelClik(index)}
          disabled={b !== null}
          >{b}</button>
        ) )}
      </div>
    </div>
  );
};

export default TicTacToe;
