import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [count, setCount] = useState(0)

  const addValue = () => {
    if(count >= 20 ){
      alert('You can not go beyond 20')
    }else{
    setCount(count + 1)
  }
  }

  const removeValue = () => {
    if ( count <= 0){
      alert('Not allowed less than 0')
    }else{
    setCount(count - 1)
    }
  }

  return (
    <>
    <h1>Hello from counter App</h1>
    <h2>Counter value: {count}</h2>

    <button className='btn'
      onClick={addValue}
    >Add value</button>
    <button className='btn'
      onClick={removeValue}
    >Remove value</button>

    </>
  )
}

export default App
