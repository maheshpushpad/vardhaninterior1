import React from 'react'
import Routess from './component/main/Routess'
import Header from './component/Header'
import Footer from './component/Footer'
import Whatsapp from './component/Whatsapp'
import Call from './component/Call'

const App = () => {
  return (
    <div className='bg-gray-900'>
      <Header/>
         <Routess className="pt-16"/>
      <Footer/>
      <Whatsapp/>
      <Call/>
    </div>
  )
}

export default App