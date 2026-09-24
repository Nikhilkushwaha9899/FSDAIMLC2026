import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Icard from './component/Icard'
import IcardGallery from './component/IcardGallery'

function App() {
  
  return (
    <div style={{ border: '7px solid white',height:'auto'}}>
    <IcardGallery></IcardGallery>
    </div>
  )
}

export default App
