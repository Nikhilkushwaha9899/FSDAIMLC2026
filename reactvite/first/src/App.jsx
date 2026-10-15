import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Icard from './component/Icard'
import IcardGallery from './component/IcardGallery'
import StateHandling from './component/StateHandeling'
import ImageManipulation from './component/ImageManipulation'
import SampleUseEffect from './component/SampleUseEffect'
import Shopping from './component/Shopping'

function App() {
  
  return (
    <div>
    {/* <IcardGallery></IcardGallery> */}
    {/* <StateHandling></StateHandling> */}
    {/* <ImageManipulation></ImageManipulation> */}
    {/* <SampleUseEffect></SampleUseEffect> */}
    <Shopping></Shopping>
    </div>
  )
}

export default App
