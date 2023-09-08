import { useState } from 'react'
import Cardapio from './pages/cardapio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Cardapio/>
    </>
  )
}

export default App
