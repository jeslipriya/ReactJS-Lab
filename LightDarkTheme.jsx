import React, { useState } from 'react'

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }

  return (
    <div style={containerStyle}>
      <h1>Theme Toggle Example</h1>

      <p>Click the button to switch between Light and Dark Mode.</p>

      <button 
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none"
        }}
      >
        Switch to {theme === "light" ? "dark" : "light"} Mode
      </button>

    </div>
  );
}

export default App;