import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BackgroundPicture from './assets/background.jpg'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MainBody from './components/MainBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full bg-black/67 min-h-screen'>
        <NavBar />
        <MainBody />
        <Footer />
        <div className='fixed -z-10 w-full h-screen top-0 bg-amber-300'>
          <img className='w-full h-full object-cover' src={BackgroundPicture}></img>
        </div>
      </div>
    </>
  )
}

export default App;
