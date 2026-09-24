import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ImdbCard from './component/ImdbCard'

function App() {
  return (
    <div style={{border:'1px solid white',width:'700px',margin:'0 auto 0 auto',backgroundColor:'black'}}>
      <ImdbCard></ImdbCard>
    </div>
  )
}

export default App
