import React from 'react'

function Icard() {
let a = 23
let name = "Nikhil"
  return (
    <div>
    <h2 style={{backgroundColor:'aqua',color:'black'}}>Icard</h2>
    <h2 style={{ color: 'red' }}>Welcome to React using vite </h2>
    <h2>Value : {a}</h2>
    <h2>Name : {name}</h2>
    </div>
  )
}

export default Icard