import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from "@blueprintjs/core";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button intent="success" text="button content" onClick={() => setCount((count) => count +1)} />
      Hello World! {count}
      <button onClick={() => setCount((count) => count +1)} >
        Button
      </button>
    </div>
  )
}

export default App
