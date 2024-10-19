import { useState } from 'react'
import './App.css'
import { WinnerModal } from './components/WinnerModal'
import { Square } from './components/Square'
import { checkWinner, checkEndGame } from './logic/board.js'
import { TURNS } from './contants'
import { saveGame, getSavedGame, deleteSavedGame } from './logic/storage.js'


function App() {
  const { savedBoard, savedTurn, savedWinner } = getSavedGame()
  const [board, setBoard] = useState(savedBoard)
  const [turn, setTurn] = useState(savedTurn)
  const [winner, setWinner] = useState(savedWinner)


  function updateBoard(index) {
    //Chequeando si el espacio ya tiene un contenido o hay un ganador y actualizando la tabla
    if (board[index] || winner) return 
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiando los turnos
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
    // Comprobando si el juego quedo en ganador o si hay empate
    const newWinner = checkWinner(newBoard)
    let saveWinner = null;
    if (newWinner) { 
      setWinner(newWinner)
      saveWinner = newWinner
    }
    else if (checkEndGame(newBoard)) {
      setWinner(false)
      saveWinner = false
    }
    // Guardando el juego en el localStorage
    saveGame(newBoard, newTurn, saveWinner)
  }

  function resetGame() {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
    deleteSavedGame()
  }


  return (
    <>
      <section className='board'>
        <h1>Tic tac toe</h1>
        <section className='game'>
        { board.map((square, index) => {
          return ( <Square key={index} updateBoard={updateBoard} index={index} visible={true}>
            {square}
          </Square> )
        }) }
        </section>
        <div className='turn-text'><h1>Turno: </h1></div>
        <section className='turn'>
          
        <Square visible={turn === TURNS.x}>
          <Square visible={true} className='square is-selected'>{TURNS.x}</Square>
        </Square>
        <Square visible={turn === TURNS.o}>
          <Square visible={true} className='square is-selected'>{TURNS.o}</Square>
        </Square>
      </section>
        <button onClick={resetGame}>Empezar de nuevo</button>
      <WinnerModal resetGame={resetGame} winner={winner} /> 
      </section>
    </> 
  )
}

export default App
