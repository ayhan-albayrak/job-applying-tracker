//XOX oyunu Barisla Oynamak icin

import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./style.css";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function XoxOyunu() {
  //X yada O oldugunu bulma
  const [xIsNext, setIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  //Kazanani bulma
  const winner = calculateWinner(squares);
  let status;

  // if (winner) {
  //   <div style={{ color: "white" }}>{status}</div>
  //   status = "Winner: " + winner;

  // } else {
  //   status = "Next player: " + (xIsNext ? "X" : "O");
  // }

  if (winner) {
    status = "<span style='color: white;'>Winner: " + winner + "</span>";
  } else {
    status =
      "<span style='color:white;'> Next player: " +
      (xIsNext ? "X" : "O") +
      "</span>";
  }

  // trigerred Confetti
  useEffect(() => {
    if (winner) {
      setShowConfetti(true);


      const timeout = setTimeout(() => {
        setShowConfetti(false);
        setSquares(Array(9).fill(null)); // Clean Game area
        setIsNext(true); // Reset to X's turn
      }, 6000); 
    //  setShowConfetti(true);
     // setTimeout(() => setShowConfetti(false), 5000); // 3 saniye sonra kapat
     return ()=>clearTimeout(timeout);
    }
  }, [winner]);

  function handleClick(i) {
    //daha once secildiyse veya kaznan varsa  islem yapmiyoruz.
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    //X mi O mu olduguna karar veriyoruz. true X false Y
    const nextSquares = squares.slice();
    nextSquares[i]= xIsNext ? "X" : "O";
   
    // if (xIsNext) {
    //   nextSquares[i] = "X";
    // } else {
    //   nextSquares[i] = "O";
    // }
    setSquares(nextSquares);
    //true ise false , false ise true yapiyoruz.
    setIsNext(!xIsNext);
  }

  return (
    <>
    {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}
      <div dangerouslySetInnerHTML={{ __html: status }} />
      {/* <div className="status">{status}</div> */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

//Kazanani belirleme
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default XoxOyunu;
