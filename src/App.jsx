import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Textsection from './components/textsection/textsection'
import DarkTextsection from './components/textsection/darktextsection'
import MainSvg from './components/svgs/mainsvg'
import Footer from './components/footer/footer'
import './app.css'
function App() {

  return (<>
    <Hero />
    <h2>Designed for the future</h2>
    <div className='details-section'>
      <div className='text-section'>
        <Textsection title='Introducing an extensible editor' text='Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
      The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
      videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
      change the looks of a blog.' />
        <Textsection title='Robust content management' text='Flexible content management enables users to easily move through posts. Increase the usability of your blog 
        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.'/>
      </div>
      <MainSvg />
    </div>
    <div className='dark-details-section'>
      <div className="dark text-section">
        <DarkTextsection title='State of the Art Infrastructure' text='With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.' />
      </div>
    </div>
    <h2>Designed for the future</h2>
    <div className='details-section reversed'>
      <div className='text-section'>
        <Textsection title='Introducing an extensible editor' text='Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
      The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
      videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
      change the looks of a blog.' />
        <Textsection title='Robust content management' text='Flexible content management enables users to easily move through posts. Increase the usability of your blog 
        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.'/>
      </div>
      <MainSvg />
    </div>
    <Footer />
  </>
  )
}
export default App
