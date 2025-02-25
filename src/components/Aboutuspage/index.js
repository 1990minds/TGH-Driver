import React from 'react'
import Section1 from './Section1'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import Section2 from './Section2'

function index() {
  return (
    <div>
      <Navbar/>
        <Section1/>
        <Section2/>
        <Footer/>
    </div>
  )
}

export default index