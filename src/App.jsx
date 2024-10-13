
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSec from './components/HeroSec'
import Taskboard from './components/task/Taskboard'

function App() {

  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-center items-center">
      <HeroSec></HeroSec>
      <Taskboard></Taskboard>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
