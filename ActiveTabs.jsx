import React, { useState } from 'react'

function App() {

  const [bgColor, setBgColor] = useState('silver')

  return (
    <div>
      <h1>Color Changer</h1>


      <div className='burger' style={{ ...Styles.burger, backgroundColor: bgColor }}>
        <button onClick={() => setBgColor('red')}> <strong>Red</strong> </button>
        <button onClick={() => setBgColor('blue')}> <strong>Blue</strong> </button>
        <button onClick={() => setBgColor('green')}> <strong>Green</strong></button>
      </div>
    </div>
  )
}

const Styles={
  burger:{
     height: "200px",
     width: "200px",
     border: "2px solid black"
  } 
}

export default App
