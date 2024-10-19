import { TURNS } from "../contants"

export function saveGame (board, turn, winner) {
  window.localStorage.setItem('game', JSON.stringify(board))
  window.localStorage.setItem('turn', JSON.stringify(turn))
  window.localStorage.setItem('winner', JSON.stringify(winner))
}

export function getSavedGame () {
  return {
    savedBoard: JSON.parse(window.localStorage.getItem('game')) ?? Array(9).fill(null),
    savedTurn: JSON.parse(window.localStorage.getItem('turn')) ?? TURNS.x,
    savedWinner: JSON.parse(window.localStorage.getItem('winner')),
  }
}

export function deleteSavedGame () {
  window.localStorage.removeItem('game')
  window.localStorage.removeItem('turn')
  window.localStorage.removeItem('winner')
}