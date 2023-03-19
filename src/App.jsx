import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='box'>
        <p>Hey I am</p>
        <h1>Paul Thomas</h1>
        <a href="mailto:paulthomas.site@gmail.com"><h3>&#x2709; E-Mail</h3></a>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
         Clicks {count}
        </button>
        </div>
      </div>
    </div>
  )
}

export default App
