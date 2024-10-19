import { WIN_COMBOS, TURNS } from "../contants.js"

export function checkWinner(board) {
  for (const combo of WIN_COMBOS) {
    const [a, b, c] = combo
    if (board[a] &&
      board[a] === board[b] &&
      board[a] === board[c])
    {return board[a]}
  }
  return null
}

export function checkEndGame(board) {
  return board.every((square) => square !== null)
}

export function resetGame(resetBoard, resetTurn, resetWinner) {
  resetBoard(Array(9).fill(null))
  resetTurn(TURNS.x)
  resetWinner(null)
}