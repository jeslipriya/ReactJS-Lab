Main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./Home"
import Post from './Post'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Post' element={<Post />}></Route>
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)

Home.jsx

import React from 'react'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "305px", fontSize: "30px" }}>
      <h2>Welcome</h2>
      <p>Go to Post page</p>

      <Link to="/Post" style={{ color: "blue" }}>
        Go
      </Link>
    </div>
  )
}

export default Home;

Post.jsx

import React from 'react'
import { Link } from "react-router-dom"

function Post() {
  return (
    <div style={{ textAlign: "center", marginTop: "350px", fontSize: "30px" }}>
      <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Tempora veniam alias minima laboriosam cumque incidunt autem
            dolorum illum unde expedita, fugiat beatae sint consectetur omnis, 
            consequuntur iste nobis neque excepturi.
        </p>

        <Link to="/" style={{ color: "blue" }}>
             Back to Home
        </Link>
    </div>
  )
}

export default Post;