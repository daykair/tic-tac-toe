import { Square } from "./Square.jsx"

export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Ganó:'
  const tieClass = winner === false ? '' : 'win' 
  
    return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className={tieClass}>
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}