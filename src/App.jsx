import { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
   
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(updatedRight + left) 
  }

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}>
        Left
        </button>
        <button onClick={handleRightClick}>
        Right
        </button>
        {right}
        <p>{allClicks.join('')}</p>
        <p>Total {total}</p>
      </div>
    </div>
  )
}

export default App
