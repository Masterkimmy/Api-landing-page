import { useState } from 'react'
import Nav from "./component/nav/nav"
import Hero from "./component/hero/hero"
import Section from "./component/section/sec"
import Boost from "./component/boost/boost"
import Footer from "./component/footer/footer"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Hero/>
    <Section/>
    <Boost/>
    <Footer/>
    </>
  )
}

export default App
