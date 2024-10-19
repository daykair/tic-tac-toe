
export function Square({ children, updateBoard, index, isSelected, className, visible }) {
  let classNa = className ?? `square ${!visible ? 'hidden' : ''}`
  const handleClick = () => updateBoard(index)
  if (!visible) classNa + ' hidden'

  return (
    <div className={classNa} onClick={handleClick}>
          {children}
    </div>
  )
}


