import React, { useState } from "react"

const App = () => {
  const [color, setColor] = useState("#111")
  return (
    <div className="back" style={{ backgroundColor: color }}>
      <div className="color-plate">
        <button
          onClick={() => {
            setColor("red")
          }}
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("blue")
          }}
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => {
            setColor("green")
          }}
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("yellow")
          }}
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
      </div>
    </div>
  )
}

export default App
