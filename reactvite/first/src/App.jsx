import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Icard from './component/Icard'
import IcardGallery from './component/IcardGallery'
import StateHandling from './component/StateHandeling'

function App() {
  
  return (
    <div>
    {/* <IcardGallery></IcardGallery> */}
    <StateHandling></StateHandling>
    </div>
  )
}

export default App
